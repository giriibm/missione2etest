package mission;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductsPage extends BasePage {

    @FindBy(className = "shopping_cart_link")
    private WebElement shoppingCartLink;

    @FindBy(className = "shopping_cart_badge")
    private WebElement shoppingCartBadge;

    public ProductsPage() {
        PageFactory.initElements(driver, this);
    }

    public void addItemToCart(String itemName) {
        // Convert item name to data-test format: lowercase with hyphens
        String dataTestId = "add-to-cart-" + itemName.toLowerCase().replace(" ", "-");
        WebElement addButton = driver.findElement(By.cssSelector("[data-test='" + dataTestId + "']"));
        addButton.click();
    }

    public void clickShoppingCart() {
        shoppingCartLink.click();
    }

    public int getCartItemCount() {
        try {
            return Integer.parseInt(shoppingCartBadge.getText());
        } catch (Exception e) {
            return 0;
        }
    }
}
