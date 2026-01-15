package mission;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CartPage extends BasePage {

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
        removeButton.click();
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
            return Integer.parseInt(shoppingCartBadge.getText());
        } catch (Exception e) {
            return 0;
        }
    }
}
