package mission;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.Assert;

import java.util.*;

import static io.restassured.RestAssured.given;

public class StepDefinition extends iniClass {

    private static final String BASE_URI = "https://reqres.in/api";
    private Response response;
    private List<Map<String, Object>> allUsers = new ArrayList<>();
    private int totalUserCount = 0;

    // UI Test Step Definitions

    @Given("^I am on the home page$")
    public void iAmOnTheHomePage() {
        HomePage.homePage();
    }

    @And("^I login in with the following details$")
    public void iLoginWithFollowingDetails(DataTable dataTable) {
        List<Map<String, String>> data = dataTable.asMaps(String.class, String.class);
        String username = data.get(0).get("userName");
        String password = data.get(0).get("Password");
        loginPage.login(username, password);
    }

    @And("^I add the following items to the basket$")
    public void iAddFollowingItemsToBasket(List<String> items) {
        for (String item : items) {
            productsPage.addItemToCart(item);
        }
    }

    @And("^I  should see (\\d+) items added to the shopping cart$")
    public void iShouldSeeItemsInCart(int expectedCount) {
        try {
            // Wait to ensure cart badge updates
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        // Try to get from either products or cart page
        int actualCount = 0;
        try {
            actualCount = productsPage.getCartItemCount();
        } catch (Exception e) {
            actualCount = cartPage.getCartItemCount();
        }
        Assert.assertEquals(actualCount, expectedCount, "Cart item count mismatch");
    }

    @And("^I click on the shopping cart$")
    public void iClickOnShoppingCart() {
        productsPage.clickShoppingCart();
    }

    @And("^I verify that the QTY count for each item should be (\\d+)$")
    public void iVerifyQtyCountForEachItem(int expectedQty) {
        Assert.assertTrue(cartPage.verifyAllQuantitiesAreOne(), "Not all quantities are 1");
    }

    @And("^I remove the following item:$")
    public void iRemoveFollowingItem(List<String> items) {
        for (String item : items) {
            cartPage.removeItem(item);
        }
    }

    @And("^I click on the CHECKOUT button$")
    public void iClickOnCheckoutButton() {
        cartPage.clickCheckout();
    }

    @And("^I type \"([^\"]*)\" for First Name$")
    public void iTypeForFirstName(String firstName) {
        checkoutPage.enterFirstName(firstName);
    }

    @And("^I type \"([^\"]*)\" for Last Name$")
    public void iTypeForLastName(String lastName) {
        checkoutPage.enterLastName(lastName);
    }

    @And("^I type \"([^\"]*)\" for ZIP/Postal Code$")
    public void iTypeForPostalCode(String postalCode) {
        checkoutPage.enterPostalCode(postalCode);
    }

    @When("^I click on the CONTINUE button$")
    public void iClickOnContinueButton() {
        checkoutPage.clickContinue();
    }

    @Then("^Item total will be equal to the total of items on the list$")
    public void itemTotalWillBeEqualToTotalOfItems() {
        checkoutPage.verifyItemTotalMatchesSum();
    }

    @And("^a Tax rate of (\\d+) % is applied to the total$")
    public void aTaxRateIsApplied(double taxRate) {
        checkoutPage.verifyTaxRate(taxRate);
    }

    // API Test Step Definitions

    @Given("^I get the default list of users for on 1st page$")
    public void iGetTheDefaultListofusers() {
        RestAssured.baseURI = BASE_URI;
        response = given()
                .log().ifValidationFails()
                .get("/users?page=1");
        
        System.out.println("Response status: " + response.getStatusCode());
        System.out.println("Response body: " + response.getBody().asString());
        
        if (response.getStatusCode() == 200) {
            totalUserCount = response.jsonPath().getInt("total");
            List<Map<String, Object>> users = response.jsonPath().getList("data");
            allUsers.addAll(users);
        } else {
            System.err.println("API returned error: " + response.getStatusCode());
        }
    }

    @When("I get the list of all users within every page")
    public void iGetTheListOfAllUsers() {
        int totalPages = response.jsonPath().getInt("total_pages");
        for (int page = 2; page <= totalPages; page++) {
            Response pageResponse = given().get("/users?page=" + page);
            List<Map<String, Object>> users = pageResponse.jsonPath().getList("data");
            allUsers.addAll(users);
        }
    }

    @Then("I should see total users count equals the number of user ids")
    public void iShouldMatchTotalCount() {
        Assert.assertEquals(allUsers.size(), totalUserCount, "Total user count does not match");
    }

    @Given("I make a search for user (.*)")
    public void iMakeASearchForUser(String sUserID) {
        RestAssured.baseURI = BASE_URI;
        response = given()
                .log().ifValidationFails()
                .get("/users/" + sUserID);
        
        System.out.println("User search - Status: " + response.getStatusCode());
        System.out.println("User search - Body: " + response.getBody().asString());
    }

    @Then("I should see the following user data")
    public void IShouldSeeFollowingUserData(DataTable dt) {
        List<Map<String, String>> expectedData = dt.asMaps(String.class, String.class);
        
        if (response.getStatusCode() != 200) {
            Assert.fail("Expected 200 but got " + response.getStatusCode() + ". Response: " + response.getBody().asString());
        }
        
        String actualFirstName = response.jsonPath().getString("data.first_name");
        String actualEmail = response.jsonPath().getString("data.email");
        
        Assert.assertEquals(actualFirstName, expectedData.get(0).get("first_name"), 
            "First name does not match");
        Assert.assertEquals(actualEmail, expectedData.get(0).get("email"), 
            "Email does not match");
    }

    @Then("I receive error code (.*) in response")
    public void iReceiveErrorCodeInResponse(int responseCode) {
        Assert.assertEquals(response.getStatusCode(), responseCode, 
            "Response code does not match");
    }

    @Given("I create a user with following (.*) (.*)")
    public void iCreateUserWithFollowing(String sUsername, String sJob) {
        RestAssured.baseURI = BASE_URI;
        String requestBody = String.format("{\"name\": \"%s\", \"job\": \"%s\"}", sUsername, sJob);
        response = given()
                .header("Content-Type", "application/json")
                .body(requestBody)
                .log().ifValidationFails()
                .post("/users");
        
        System.out.println("Create user - Status: " + response.getStatusCode());
        System.out.println("Create user - Body: " + response.getBody().asString());
    }

    @Then("response should contain the following data")
    public void iReceiveErrorCodeInResponse(DataTable dt) {
        List<Map<String, String>> expectedFields = dt.asMaps(String.class, String.class);
        
        System.out.println("Validating response fields. Status: " + response.getStatusCode());
        System.out.println("Response body: " + response.getBody().asString());
        
        if (response.getStatusCode() >= 200 && response.getStatusCode() < 300) {
            for (String field : expectedFields.get(0).keySet()) {
                Object value = response.jsonPath().get(field);
                Assert.assertNotNull(value, field + " is missing in response");
            }
        } else {
            Assert.fail("Expected success response but got " + response.getStatusCode());
        }
    }

    @Given("I login successfully with the following data")
    public void iLoginSuccessfullyWithFollowingData(DataTable dt) {
        RestAssured.baseURI = BASE_URI;
        List<Map<String, String>> data = dt.asMaps(String.class, String.class);
        String email = data.get(0).get("Email");
        String password = data.get(0).get("Password");
        
        String requestBody = String.format("{\"email\": \"%s\", \"password\": \"%s\"}", 
            email, password);
        response = given()
                .header("Content-Type", "application/json")
                .body(requestBody)
                .log().ifValidationFails()
                .post("/login");
        
        System.out.println("Login - Status: " + response.getStatusCode());
        System.out.println("Login - Body: " + response.getBody().asString());
    }

    @Given("I login unsuccessfully with the following data")
    public void iLoginUnsuccessfullyWithFollowingData(DataTable dt) {
        RestAssured.baseURI = BASE_URI;
        List<Map<String, String>> data = dt.asMaps(String.class, String.class);
        String email = data.get(0).get("Email");
        String password = data.get(0).getOrDefault("Password", "");
        
        String requestBody;
        if (password.isEmpty()) {
            requestBody = String.format("{\"email\": \"%s\"}", email);
        } else {
            requestBody = String.format("{\"email\": \"%s\", \"password\": \"%s\"}", 
                email, password);
        }
        
        response = given()
                .header("Content-Type", "application/json")
                .body(requestBody)
                .log().ifValidationFails()
                .post("/login");
        
        System.out.println("Unsuccessful Login - Status: " + response.getStatusCode());
        System.out.println("Unsuccessful Login - Body: " + response.getBody().asString());
    }

    @Given("^I wait for the user list to load$")
    public void iWaitForUserListToLoad() {
        RestAssured.baseURI = BASE_URI;
        response = given()
                .log().ifValidationFails()
                .get("/users?delay=3");
        
        System.out.println("Delayed response - Status: " + response.getStatusCode());
        System.out.println("Delayed response - Body: " + response.getBody().asString());
        
        if (response.getStatusCode() == 200) {
            allUsers = response.jsonPath().getList("data");
        } else {
            System.err.println("API returned error: " + response.getStatusCode());
            allUsers = new ArrayList<>();
        }
    }

    @Then("I should see that every user has a unique id")
    public void iShouldSeeThatEveryUserHasAUniqueID() {
        Set<Integer> userIds = new HashSet<>();
        for (Map<String, Object> user : allUsers) {
            Integer userId = (Integer) user.get("id");
            Assert.assertFalse(userIds.contains(userId), 
                "Duplicate user ID found: " + userId);
            userIds.add(userId);
        }
        Assert.assertEquals(userIds.size(), allUsers.size(), 
            "Not all user IDs are unique");
    }

    @Then("^I should get a response code of (\\d+)$")
    public void iShouldGetAResponseCodeOf(int responseCode) {
        Assert.assertEquals(response.getStatusCode(), responseCode, 
            "Response code does not match");
    }

    @And("^I should see the following response message:$")
    public void iShouldSeeTheFollowingResponseMessage(List<String> messages) {
        String responseBody = response.getBody().asString();
        System.out.println("Response body: " + responseBody);
        System.out.println("Response code: " + response.getStatusCode());
        
        // Check if response contains error field
        String errorMessage = "";
        try {
            errorMessage = response.jsonPath().getString("error");
        } catch (Exception e) {
            // If error field doesn't exist, check the whole body
            errorMessage = responseBody;
        }
        
        boolean found = false;
        for (String message : messages) {
            if (errorMessage != null && errorMessage.toLowerCase().contains(message.toLowerCase())) {
                found = true;
                break;
            }
        }
        Assert.assertTrue(found, 
            "Response does not contain expected message. Expected one of: " + messages + ", Actual: " + errorMessage);
    }
}
