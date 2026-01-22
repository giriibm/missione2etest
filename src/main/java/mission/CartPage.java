package mission;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CartPage extends BasePage {

    @FindBy(className = "cart_item")
    private List<WebElement> cartItems;

    @FindBy(className = "cart_quantity")
    private List<WebElement> cartQuantities;

    @FindBy(css = "[data-test='checkout']")
    private WebElement checkoutButton;

    @FindBy(className = "shopping_cart_badge")
    private WebElement shoppingCartBadge;

    public CartPage() {
        PageFactory.initElements(driver, this);
    }

    public void removeItem(String itemName) {
        // Convert item name to data-test format for remove button
        String dataTestId = "remove-" + itemName.toLowerCase().replace(" ", "-");
        WebElement removeButton = driver.findElement(By.cssSelector("[data-test='" + dataTestId + "']"));
        
        // Get current count before removal
        int countBefore = cartItems.size();
        
        removeButton.click();
        
        // Wait for the cart item to be actually removed from DOM
        try {
            int maxWait = 5; // Wait up to 5 seconds
            for (int i = 0; i < maxWait; i++) {
                Thread.sleep(500);
                // Re-find elements to get fresh state
                List<WebElement> currentItems = driver.findElements(By.className("cart_item"));
                if (currentItems.size() < countBefore) {
                    break; // Item has been removed
                }
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public boolean verifyAllQuantitiesAreOne() {
        for (WebElement quantity : cartQuantities) {
            if (!quantity.getText().equals("1")) {
                return false;
            }
        }
        return true;
    }

    public void clickCheckout() {
        checkoutButton.click();
    }

    public int getCartItemCount() {
        try {
            // Always get fresh count by querying the DOM directly
            List<WebElement> items = driver.findElements(By.className("cart_item"));
            return items.size();
        } catch (Exception e) {
            // Fallback to badge if cart_item elements are not found
            try {
                return Integer.parseInt(shoppingCartBadge.getText());
            } catch (Exception ex) {
                return 0;
            }
        }
    }
}
