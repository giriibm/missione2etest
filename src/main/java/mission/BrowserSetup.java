package mission;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import java.text.MessageFormat;

public class BrowserSetup extends BasePage {

    public static String browser = null;
    private static final String CHROME_WIN = "src\\test\\java\\BrowserDirectory\\chromedriver.exe";
    private static final String EDGE = "src\\test\\java\\BrowserDirectory\\MicrosoftWebDriver.exe";
    private static final String FIREFOX_WIN = "src\\test\\java\\BrowserDirectory\\geckodriver.exe";
    private static final String CHROME_MAC = "src/test/java/BrowserDirectory/chromedriver-Mac";


    /**
     * Browser property location /src/test/java/TestData/TestData.properties
     */


    /**
     * Function for multi browser
     */
    public void selectBrowser() {
        browser = LoadProp.getProperty("Browser");

        if (browser.equalsIgnoreCase("Chrome")) {
            //System.setProperty("webdriver.chrome.driver", CHROME_WIN);
            WebDriverManager.chromedriver().setup();
            ChromeOptions chromeOptions = new ChromeOptions();
            // Disable password manager popups and notifications
            chromeOptions.addArguments("--disable-save-password-bubble");
            chromeOptions.addArguments("--disable-password-manager-reauthentication");
            chromeOptions.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});
            chromeOptions.setExperimentalOption("useAutomationExtension", false);
            chromeOptions.addArguments("--disable-blink-features=AutomationControlled");
            chromeOptions.setExperimentalOption("prefs", java.util.Map.of(
                "credentials_enable_service", false,
                "profile.password_manager_enabled", false,
                "profile.password_manager_leak_detection", false
            ));
            driver = new ChromeDriver(chromeOptions);
            driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(10));
            driver.manage().window().maximize();
        } else if (browser.equalsIgnoreCase("edge")) {
            //System.setProperty("webdriver.edge.driver", EDGE);
            WebDriverManager.edgedriver().setup();
            driver = new EdgeDriver();
            driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(10));
            driver.manage().window().maximize();
        } else if (browser.equalsIgnoreCase("Firefox")) {
            WebDriverManager.firefoxdriver().setup();
            //System.setProperty("webdriver.gecko.driver", FIREFOX_WIN);
            driver = new FirefoxDriver();
            driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(10));
            driver.manage().window().maximize();
        } else if (browser.equalsIgnoreCase("chromeMac")) {
            //System.setProperty("webdriver.chrome.driver", CHROME_MAC);
            WebDriverManager.chromedriver().setup();
            ChromeOptions chromeOptions = new ChromeOptions();
            // Disable password manager popups and notifications
            chromeOptions.addArguments("--disable-save-password-bubble");
            chromeOptions.addArguments("--disable-password-manager-reauthentication");
            chromeOptions.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});
            chromeOptions.setExperimentalOption("useAutomationExtension", false);
            chromeOptions.addArguments("--disable-blink-features=AutomationControlled");
            chromeOptions.setExperimentalOption("prefs", java.util.Map.of(
                "credentials_enable_service", false,
                "profile.password_manager_enabled", false,
                "profile.password_manager_leak_detection", false
            ));
            driver = new ChromeDriver(chromeOptions);
            driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(10));
            driver.manage().window().maximize();
        } else if (browser.equalsIgnoreCase("chromeHeadless")) {
            //System.setProperty("webdriver.chrome.driver", CHROME_MAC);
            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.addArguments("--headless");
            // Disable password manager popups and notifications
            chromeOptions.addArguments("--disable-save-password-bubble");
            chromeOptions.addArguments("--disable-password-manager-reauthentication");
            chromeOptions.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});
            chromeOptions.setExperimentalOption("useAutomationExtension", false);
            chromeOptions.addArguments("--disable-blink-features=AutomationControlled");
            chromeOptions.setExperimentalOption("prefs", java.util.Map.of(
                "credentials_enable_service", false,
                "profile.password_manager_enabled", false,
                "profile.password_manager_leak_detection", false
            ));
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver(chromeOptions);
            driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(10));
        } else if (browser.equalsIgnoreCase("api")) {

        } else {
            Assert.fail(MessageFormat.format("Wrong Browser: {0}", browser));
        }
    }
}
