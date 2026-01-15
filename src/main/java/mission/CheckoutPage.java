package mission;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;

public class CheckoutPage extends BasePage {

    // Checkout Step One fields
    @FindBy(css = "[data-test='firstName']")
    private WebElement firstNameField;

    @FindBy(css = "[data-test='lastName']")
    private WebElement lastNameField;

    @FindBy(css = "[data-test='postalCode']")
    private WebElement postalCodeField;

    @FindBy(css = "[data-test='continue']")
    private WebElement continueButton;

    // Checkout Overview fields
    @FindBy(className = "inventory_item_price")
    private List<WebElement> itemPrices;

    @FindBy(className = "summary_subtotal_label")
    private WebElement subtotalLabel;

    @FindBy(className = "summary_tax_label")
    private WebElement taxLabel;

    @FindBy(className = "summary_total_label")
    private WebElement totalLabel;

    public CheckoutPage() {
        PageFactory.initElements(driver, this);
    }

    public void enterFirstName(String firstName) {
        firstNameField.clear();
        firstNameField.sendKeys(firstName);
    }

    public void enterLastName(String lastName) {
        lastNameField.clear();
        lastNameField.sendKeys(lastName);
    }

    public void enterPostalCode(String postalCode) {
        postalCodeField.clear();
        postalCodeField.sendKeys(postalCode);
    }

    public void clickContinue() {
        continueButton.click();
    }

    public double calculateItemTotal() {
        double total = 0.0;
        for (WebElement priceElement : itemPrices) {
            String priceText = priceElement.getText().replace("$", "");
            total += Double.parseDouble(priceText);
        }
        return total;
    }

    public double getSubtotal() {
        String subtotalText = subtotalLabel.getText().replace("Item total: $", "");
        return Double.parseDouble(subtotalText);
    }

    public double getTax() {
        String taxText = taxLabel.getText().replace("Tax: $", "");
        return Double.parseDouble(taxText);
    }

    public void verifyItemTotalMatchesSum() {
        double calculatedTotal = calculateItemTotal();
        double displayedSubtotal = getSubtotal();
        Assert.assertEquals(calculatedTotal, displayedSubtotal, 0.01, 
            "Item total does not match sum of individual items");
    }

    public void verifyTaxRate(double expectedTaxRate) {
        double subtotal = getSubtotal();
        double tax = getTax();
        double calculatedTaxRate = (tax / subtotal) * 100;
        Assert.assertEquals(calculatedTaxRate, expectedTaxRate, 0.1, 
            "Tax rate does not match expected rate");
    }
}
