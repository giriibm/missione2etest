package mission;

public class iniClass {
    public static SamplePage samplePage;
    public static LoginPage loginPage;
    public static ProductsPage productsPage;
    public static CartPage cartPage;
    public static CheckoutPage checkoutPage;


    public iniClass() {
        samplePage = new SamplePage();
        loginPage = new LoginPage();
        productsPage = new ProductsPage();
        cartPage = new CartPage();
        checkoutPage = new CheckoutPage();
    }
}
