$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/API-Test.feature");
formatter.feature({
  "line": 2,
  "name": "API test",
  "description": "",
  "id": "api-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.before({
  "duration": 444541824,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Please visit https://reqres.in/"
    },
    {
      "line": 4,
      "value": "# NOTE: Most API tests are skipped due to Cloudflare blocking reqres.in"
    },
    {
      "line": 5,
      "value": "# See API_TEST_ISSUES.md for details and solutions"
    }
  ],
  "line": 8,
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "id": "api-test;should-see-list-users-of-all-existing-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@skip"
    },
    {
      "line": 7,
      "name": "@CloudflareBlocked"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I get the default list of users for on 1st page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I get the list of all users within every page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see total users count equals the number of user ids",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iGetTheDefaultListofusers()"
});
formatter.result({
  "duration": 1164755739,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iGetTheListOfAllUsers()"
});
formatter.result({
  "duration": 55817571,
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1002)\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\n\tat io.restassured.path.json.JsonPath.getInt(JsonPath.java:237)\n\tat mission.StepDefinition.iGetTheListOfAllUsers(StepDefinition.java:139)\n\tat ✽.When I get the list of all users within every page(src/test/java/API-Test.feature:10)\nCaused by: groovy.json.JsonException: Lexing failed on line: 1, column: 1, while reading \u0027\u003c\u0027, no possible valid JSON value or punctuation could be recognized.\n\tat groovy.json.JsonLexer.nextToken(JsonLexer.java:86)\n\tat groovy.json.JsonLexer$nextToken.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:130)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parse(ConfigurableJsonSlurper.groovy:97)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper$parse.callCurrent(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:83)\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:965)\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1000)\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\n\tat io.restassured.path.json.JsonPath.getInt(JsonPath.java:237)\n\tat mission.StepDefinition.iGetTheListOfAllUsers(StepDefinition.java:139)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:141)\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:686)\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:230)\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:63)\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:992)\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:203)\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:154)\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:134)\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1510)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:739)\n\tat org.testng.TestRunner.run(TestRunner.java:614)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:421)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:413)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:373)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:312)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1274)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1208)\n\tat org.testng.TestNG.runSuites(TestNG.java:1112)\n\tat org.testng.TestNG.run(TestNG.java:1079)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:155)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:102)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:91)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:137)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:385)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:507)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:495)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.iShouldMatchTotalCount()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 324338,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "api-test;should-see-single-user-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@skip"
    },
    {
      "line": 13,
      "name": "@CloudflareBlocked"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should see the following user data",
  "rows": [
    {
      "cells": [
        "first_name",
        "email"
      ],
      "line": 17
    },
    {
      "cells": [
        "Emma",
        "emma.wong@reqres.in"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "StepDefinition.iMakeASearchForUser(String)"
});
formatter.result({
  "duration": 210088157,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.IShouldSeeFollowingUserData(DataTable)"
});
formatter.result({
  "duration": 2404785,
  "error_message": "java.lang.AssertionError: Expected 200 but got 403. Response: \u003c!DOCTYPE html\u003e\u003chtml lang\u003d\"en-US\"\u003e\u003chead\u003e\u003ctitle\u003eJust a moment...\u003c/title\u003e\u003cmeta http-equiv\u003d\"Content-Type\" content\u003d\"text/html; charset\u003dUTF-8\"\u003e\u003cmeta http-equiv\u003d\"X-UA-Compatible\" content\u003d\"IE\u003dEdge\"\u003e\u003cmeta name\u003d\"robots\" content\u003d\"noindex,nofollow\"\u003e\u003cmeta name\u003d\"viewport\" content\u003d\"width\u003ddevice-width,initial-scale\u003d1\"\u003e\u003cstyle\u003e*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%;color:#313131;font-family:system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}body{display:flex;flex-direction:column;height:100vh;min-height:100vh}.main-content{margin:8rem auto;padding-left:1.5rem;max-width:60rem}@media (width \u003c\u003d 720px){.main-content{margin-top:4rem}}.h2{line-height:2.25rem;font-size:1.5rem;font-weight:500}@media (width \u003c\u003d 720px){.h2{line-height:1.5rem;font-size:1.25rem}}#challenge-error-text{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+\");background-repeat:no-repeat;background-size:contain;padding-left:34px}@media (prefers-color-scheme: dark){body{background-color:#222;color:#d9d9d9}}\u003c/style\u003e\u003cmeta http-equiv\u003d\"refresh\" content\u003d\"360\"\u003e\u003c/head\u003e\u003cbody\u003e\u003cdiv class\u003d\"main-wrapper\" role\u003d\"main\"\u003e\u003cdiv class\u003d\"main-content\"\u003e\u003cnoscript\u003e\u003cdiv class\u003d\"h2\"\u003e\u003cspan id\u003d\"challenge-error-text\"\u003eEnable JavaScript and cookies to continue\u003c/span\u003e\u003c/div\u003e\u003c/noscript\u003e\u003c/div\u003e\u003c/div\u003e\u003cscript\u003e(function(){window._cf_chl_opt \u003d {cvId: \u00273\u0027,cZone: \u0027reqres.in\u0027,cType: \u0027managed\u0027,cRay: \u00279c2064153c05d76d\u0027,cH: \u0027VD.8Kll8fC.PYfy6hUxuh2PyPs8U5tRC1m6nNRDElLo-1769098955-1.2.1.1-dc6P33zSTEQFOa52i8zjSyJiSdTMvSbqWTcX5GNhelWsKCNb1lmDLZ6fTgOzbUV9\u0027,cUPMDTk:\"\\/api\\/users\\/3?__cf_chl_tk\u003deOub1aE6STDMaqJtT4GWfKJZ3J1LanMwQC9bE_LRre4-1769098955-1.0.1.1-K0A4uOhIiHwMx91Vii123KXHFZiVBu4ejK.9Jmaj01k\",cFPWv: \u0027b\u0027,cITimeS: \u00271769098955\u0027,cTplC:0,cTplV:5,cTplB: \u00270\u0027,fa:\"\\/api\\/users\\/3?__cf_chl_f_tk\u003deOub1aE6STDMaqJtT4GWfKJZ3J1LanMwQC9bE_LRre4-1769098955-1.0.1.1-K0A4uOhIiHwMx91Vii123KXHFZiVBu4ejK.9Jmaj01k\",md: \u0027CvMRaf_zHMdm3rHCgPTPK68dT_l8HDtD7nW5WJwyp9A-1769098955-1.2.1.1-1E6wp9lVoZWO9SMENO11WPqdrql42zp7tTXD7Hv1iJEZ0U3mDKwKo_7T6ug82HsbCRgS1YZ4nw01vUocQaj4j7clW0pwSMq_LtXd7oPXcs8ar3zwBiiBQGZttCRLHJUwcDveHXLcsQpwnkb8m5Pdo6PQyogUtv6TIfhOQwJBf40RzCItKln6HN39hhEcM73Hm.GnLYscsABP1CMk22vwa7OKaau4uVmKzDztDrBcjJaj9fMo6oBru0VFz5h5gCoAc7h3nQ8UsH5mQ7IDFVegWvbOsmu9hGqwO1AdLNqEdomGwTeSzWCOyk.z8ASsI47aChYdqYshuaIOlGAJ91kJfynlse.1vFrZSfYLnXIJkU2Ijg0fyWkzOTevzwMpebY2r10.l_CGxOjzUofarjswNM_uNefTq4HojRPwpzEz4diqnPU6czeGdEExc1gGZbvFNogAkycDNHmIXb6bvlpS2ys7rQXzhbXJ_YMvl.Rcmj37NgHrWm0apRUz6cadKEcjeh1Wc8X04gc37fvVrALXxr.n0jKw63Y7afrQRH8Km3_ns6SSf6yySKFkq7YCCZgbxcipIUdl9tVOsNIgzrNOL5vGnUSumagDIXpXTKtGAIl17GLqWORLi7dGFQPfMrTpnJlK.KLwqR4G0EOKtXZnZYmsLfbTdPZbMDZr9POL8CiafvdmpbNLfBgJXLv.Py9_KS6.eg6_1Jd9hwyLkt3dBJe4TPgRsSnUWZ8hzn8IhJZ8_ny1E_iofj1g2w5ghfFor.sowRFS6az9MRGLtoz797si84cr85jLCVxfQwIYJohbnQnoy3Um9moRZLrl6wI8POGpRUuBrzwU0x3IvPy3boFnTglqAsKfTp4iMgYKPbk4nX5j8dXUdhMyKTBgYFO.VJ6ocYQb5jMTc25GOnkthdEJN4PZuELnbuxDKrWHck9ow5o3IJ3axsppEXGSYKqr\u0027,mdrd: \u0027seqJ2W8USUIr6HEaNGwVEhWWy5KvHJNeBb9owQfWVPo-1769098955-1.2.1.1-WmVAMqnit1.iL0rBazkpvX6YmM5BcE_LWXHVOV_ogXJE.Y8JHJsHnPy59OtXKSeoV6Uuqs5E0eeIhbBCfzPubesoinx9Bc2td9MV4pKjUEeUHDX.JfZ.cWk5wh.zw6UmLYc7OLybtX0oVzYT1sYa3h7JbJmWeRHSXHqVhRO4v_xYQmf_e2KkKPJkzlrhrv4rDqqQkNVc2swXo.dZfJlDkcSiknr7tsV27JM3VeciUAdCWY284BF7fxEADir_yPtcFy75lKOXw4qC78x5.O9ezAokQo0H7pxmH.2YpWY6mriBYYXeqxESNargDbrTSI.k1pWzytY32Fc3KtqcJy2z4f15TapyFARWBYP42Vc_c4xYRuBkTgwgz37XKopti8jVQBS4wmi_jlW1U4Qq4rnLSyqFT8RGcfAN5DjjRGuoCg2WqJvMa4kCdQpcZ6qf5fHNreAGQbNrfVuPgAvskJLiYxvUsX2Apd4iX7Ebp.yyA3Ejfb7GIP2a3IaGghflEg7kSZY9_D5RIrqFX1hto6J1ZaSwxi.bURzDf79YQukFggARBrmb0eqL531q8ZpsGaUNN_SN2nOX0Fg92i3OjFgouUfmo7JXaXY5GiB5Hc_5KCK.WVZWZpMFzmehalVtS3YhWDEeQ3LfSwRiWJQEhAVvAzgkRVpasDReKwi_V.vTuSb4AwhbYDWyEMSaKwvOBJjJr8yZqnDzF.CGPh7pzB.v_moDgHuF4pCeGjfJ3zO.MgmOf30.0UbOj5.0Ozcn76C2jJNX4dtFzAiB93EIxWusv_lAhp2n._KtIU4U7CrPGaphm5eHpsL9mwsgcmcd6jPe2drDCFTOt1vD_T_4SafrPYO0cnlH7P6UTdFMEje3DhRdj38J.oM_50lZZYlLT9DKzhgfaMG472cbu4Q_TgW0Yt7ZlQBtjwuttXoaxT3Iqgx_AC9cmccavusQHw3Yqk0x08ThnbR9YaYVKhtwAqDYHXJgl0TH._X6TEaCXaNxyaBHZaYL9s1CcWYG6R63Dq3LMAWov_xAgEPSXx86EqOkaWwdoJLkZUCoicyHEii4JcJbGXFmiiTYHdMHb7e8L.ukf.TB8pJLmoZAezyq.o.DlVpfKFsDOJmtV_HaODKmBAIDJmXsYEh8YJc5oRExm7GZ5Mm4bjxSU7yfGuWHraHg0iCLwCeEMfblGF4ZhW81Z5KjV_qse5VByBMuNLI12vCTXS7djvj.nSZ3lglCz2L3Qa8GipoPGOmD.txsAAO7bC2MJDNdJbNQfQyHZ1mQkdY3M0O_qyWjc1.fRRUfF_awOIdvFxmxFBDk6Kp.GCjH5iCkA_bUJD78QtGVHlS57oYpl30DGYe_ct31ofVpu_gos9UYCq7RnUyZ_9j0zDNJkJYzNm4jqIPM6H4vZS26h32pDDs4VfzkJWrRH1lBoSFKn5gQUW1Bqzc7aMSQ8jReWTW9J4WEGfd2NZAEyRgCZxPACO_Gw6U2wF7DTVBA_Km5LYlGXPvwOHZi_t5AuLlyApCG82ZmkbRanPbFlyxUfsyxQdpesYDuP1lWd5AdEDkBK3suiBFoBHWwvtbiSOr4J.pziXGw3A8.uh_ahmGQ0l_43tNOJVmZwk4W.WA0FpgKa2bOnRIPhBzhg8Y6043tyS17ZKiobzC1rF7HsJWjAUhN7R4C1u5oFrIIzDuT0CgCzt8FH51iIlazQidsarF.g9k21HgZ0xLjOXwCUYuHQnBO8qTsWZblaCiLB75pASYoEY74HgtpBY8xMhnYhwaGbRlc56vabE530pk_uk8M.K9XJZ1PfPvsOou8jpMT4.q.kgRkbwftSEFo145EKkQfmpNm_eZrTVuj2I2MfXOfqPZMXGFDTTuqHG0C1m014RzmFu4XmZ5xpjUzNH2dbtYcxFES15_xj8c9RadGWM5f811UC2Xk3tURHiiz4PhYhDRb4OFKHmozsi2JFNlMrcNyrvmgiB9pZJjni4UF9TOQUNgHHQ1B9OMTDR1YETRqzunjVCNrP2HMDcPhyOHh85Mj3d7L4lNx175ciPzV.eMcCF8nzdvPQ0caHjduRW5gAUZxSx7hJvLr9lGCZ51MrrLtWnSB4MEpzGIvX8PSBZBUQ82qenDiUsHVD0OFzOcgZNvgrmoEmmQt6q5IHxU4OZS5drG3j_D85t00w01nbFL8ckC2o29ZUCOHAIa0.1jkoG6GKnreoBVrvpatqkXmbe9iNzLugbEoGLHeyLI0C_oadSz7VRK2WCP8iM8YVvAryrgAkDr.VG5fOzPv.1TaBsvwJu3CP7vR5D17ZJra6qgUUhEm0yAW4loWOeK6HFMxHSrQZyEfaLjnYDvNVhlFZKqzOfO.YVKzQITVRs1KYtPcUbc9P9N7_5uesJv_QIhGCXUzHR2yJF2bI0C7EfOuBvKv39ZBwgXMt9BdGdFknjqAVfY92RUBn6xjViauGg84_2N08A\u0027,};var a \u003d document.createElement(\u0027script\u0027);a.src \u003d \u0027/cdn-cgi/challenge-platform/h/b/orchestrate/chl_page/v1?ray\u003d9c2064153c05d76d\u0027;window._cf_chl_opt.cOgUHash \u003d location.hash \u003d\u003d\u003d \u0027\u0027 \u0026\u0026 location.href.indexOf(\u0027#\u0027) !\u003d\u003d -1 ? \u0027#\u0027 : location.hash;window._cf_chl_opt.cOgUQuery \u003d location.search \u003d\u003d\u003d \u0027\u0027 \u0026\u0026 location.href.slice(0, location.href.length - window._cf_chl_opt.cOgUHash.length).indexOf(\u0027?\u0027) !\u003d\u003d -1 ? \u0027?\u0027 : location.search;if (window.history \u0026\u0026 window.history.replaceState) {var ogU \u003d location.pathname + window._cf_chl_opt.cOgUQuery + window._cf_chl_opt.cOgUHash;history.replaceState(null, null,\"\\/api\\/users\\/3?__cf_chl_rt_tk\u003deOub1aE6STDMaqJtT4GWfKJZ3J1LanMwQC9bE_LRre4-1769098955-1.0.1.1-K0A4uOhIiHwMx91Vii123KXHFZiVBu4ejK.9Jmaj01k\"+ window._cf_chl_opt.cOgUHash);a.onload \u003d function() {history.replaceState(null, null, ogU);}}document.getElementsByTagName(\u0027head\u0027)[0].appendChild(a);}());\u003c/script\u003e\u003c/body\u003e\u003c/html\u003e\n\tat org.testng.Assert.fail(Assert.java:111)\n\tat mission.StepDefinition.IShouldSeeFollowingUserData(StepDefinition.java:168)\n\tat ✽.Then I should see the following user data(src/test/java/API-Test.feature:16)\n",
  "status": "failed"
});
formatter.before({
  "duration": 782059,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Should see SINGLE USER NOT FOUND error code",
  "description": "",
  "id": "api-test;should-see-single-user-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I make a search for user 55",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I receive error code 403 in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 25
    }
  ],
  "location": "StepDefinition.iMakeASearchForUser(String)"
});
formatter.result({
  "duration": 194400632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 21
    }
  ],
  "location": "StepDefinition.iReceiveErrorCodeInResponse(int)"
});
formatter.result({
  "duration": 441617,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@skip"
    },
    {
      "line": 24,
      "name": "@CloudflareBlocked"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I create a user with following \u003cName\u003e \u003cJob\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "api-test;create-a-user;",
  "rows": [
    {
      "cells": [
        "Name",
        "Job"
      ],
      "line": 31,
      "id": "api-test;create-a-user;;1"
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ],
      "line": 32,
      "id": "api-test;create-a-user;;2"
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ],
      "line": 33,
      "id": "api-test;create-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 250954,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    },
    {
      "line": 24,
      "name": "@skip"
    },
    {
      "line": 24,
      "name": "@CloudflareBlocked"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I create a user with following Peter Manager",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 31
    },
    {
      "val": "Manager",
      "offset": 37
    }
  ],
  "location": "StepDefinition.iCreateUserWithFollowing(String,String)"
});
formatter.result({
  "duration": 160078548,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iReceiveErrorCodeInResponse(DataTable)"
});
formatter.result({
  "duration": 1048526,
  "error_message": "java.lang.AssertionError: Expected success response but got 403\n\tat org.testng.Assert.fail(Assert.java:111)\n\tat mission.StepDefinition.iReceiveErrorCodeInResponse(StepDefinition.java:213)\n\tat ✽.Then response should contain the following data(src/test/java/API-Test.feature:27)\n",
  "status": "failed"
});
formatter.before({
  "duration": 267972,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    },
    {
      "line": 24,
      "name": "@skip"
    },
    {
      "line": 24,
      "name": "@CloudflareBlocked"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I create a user with following Liza Sales",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liza",
      "offset": 31
    },
    {
      "val": "Sales",
      "offset": 36
    }
  ],
  "location": "StepDefinition.iCreateUserWithFollowing(String,String)"
});
formatter.result({
  "duration": 137850401,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iReceiveErrorCodeInResponse(DataTable)"
});
formatter.result({
  "duration": 439614,
  "error_message": "java.lang.AssertionError: Expected success response but got 403\n\tat org.testng.Assert.fail(Assert.java:111)\n\tat mission.StepDefinition.iReceiveErrorCodeInResponse(StepDefinition.java:213)\n\tat ✽.Then response should contain the following data(src/test/java/API-Test.feature:27)\n",
  "status": "failed"
});
formatter.before({
  "duration": 269389,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---successful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@skip"
    },
    {
      "line": 35,
      "name": "@CloudflareBlocked"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I login successfully with the following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 38
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "cityslicka"
      ],
      "line": 39
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I should get a response code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iLoginSuccessfullyWithFollowingData(DataTable)"
});
formatter.result({
  "duration": 132489455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefinition.iShouldGetAResponseCodeOf(int)"
});
formatter.result({
  "duration": 5376224,
  "error_message": "java.lang.AssertionError: Response code does not match expected [200] but found [403]\n\tat org.testng.Assert.fail(Assert.java:111)\n\tat org.testng.Assert.failNotEquals(Assert.java:1578)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:150)\n\tat org.testng.Assert.assertEquals(Assert.java:132)\n\tat org.testng.Assert.assertEquals(Assert.java:1419)\n\tat org.testng.Assert.assertEquals(Assert.java:1383)\n\tat mission.StepDefinition.iShouldGetAResponseCodeOf(StepDefinition.java:294)\n\tat ✽.Then I should get a response code of 200(src/test/java/API-Test.feature:40)\n",
  "status": "failed"
});
formatter.before({
  "duration": 249486,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "LOGIN - UNSUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---unsuccessful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@skip"
    },
    {
      "line": 42,
      "name": "@CloudflareBlocked"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I login unsuccessfully with the following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 45
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        ""
      ],
      "line": 46
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I should get a response code of 403",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I should see the following response message:",
  "rows": [
    {
      "cells": [
        "\"error\": \"Missing password\""
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.iLoginUnsuccessfullyWithFollowingData(DataTable)"
});
formatter.result({
  "duration": 132539328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 32
    }
  ],
  "location": "StepDefinition.iShouldGetAResponseCodeOf(int)"
});
formatter.result({
  "duration": 60414,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iShouldSeeTheFollowingResponseMessage(String\u003e)"
});
formatter.result({
  "duration": 615680,
  "error_message": "java.lang.AssertionError: Response does not contain expected message. Expected one of: [\"error\": \"Missing password\"], Actual: \u003c!DOCTYPE html\u003e\u003chtml lang\u003d\"en-US\"\u003e\u003chead\u003e\u003ctitle\u003eJust a moment...\u003c/title\u003e\u003cmeta http-equiv\u003d\"Content-Type\" content\u003d\"text/html; charset\u003dUTF-8\"\u003e\u003cmeta http-equiv\u003d\"X-UA-Compatible\" content\u003d\"IE\u003dEdge\"\u003e\u003cmeta name\u003d\"robots\" content\u003d\"noindex,nofollow\"\u003e\u003cmeta name\u003d\"viewport\" content\u003d\"width\u003ddevice-width,initial-scale\u003d1\"\u003e\u003cstyle\u003e*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%;color:#313131;font-family:system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}body{display:flex;flex-direction:column;height:100vh;min-height:100vh}.main-content{margin:8rem auto;padding-left:1.5rem;max-width:60rem}@media (width \u003c\u003d 720px){.main-content{margin-top:4rem}}.h2{line-height:2.25rem;font-size:1.5rem;font-weight:500}@media (width \u003c\u003d 720px){.h2{line-height:1.5rem;font-size:1.25rem}}#challenge-error-text{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+\");background-repeat:no-repeat;background-size:contain;padding-left:34px}@media (prefers-color-scheme: dark){body{background-color:#222;color:#d9d9d9}}\u003c/style\u003e\u003cmeta http-equiv\u003d\"refresh\" content\u003d\"360\"\u003e\u003c/head\u003e\u003cbody\u003e\u003cdiv class\u003d\"main-wrapper\" role\u003d\"main\"\u003e\u003cdiv class\u003d\"main-content\"\u003e\u003cnoscript\u003e\u003cdiv class\u003d\"h2\"\u003e\u003cspan id\u003d\"challenge-error-text\"\u003eEnable JavaScript and cookies to continue\u003c/span\u003e\u003c/div\u003e\u003c/noscript\u003e\u003c/div\u003e\u003c/div\u003e\u003cscript\u003e(function(){window._cf_chl_opt \u003d {cvId: \u00273\u0027,cZone: \u0027reqres.in\u0027,cType: \u0027managed\u0027,cRay: \u00279c20641a7f67509a\u0027,cH: \u0027kHWhasUo86vnJiqn.184B2JT1IMlcH2Ey3zVVoD8gAA-1769098955-1.2.1.1-f_fEuiym61KwPQLi7Eb7TAMRlzqR64GDCaqBy1WAaLXCfo9nZEPb_vCcG3wpokFO\u0027,cUPMDTk:\"\\/api\\/login?__cf_chl_tk\u003dFbGjA0y3TPuKfm0Oxhar134.nEXG9ZEkkWCEsNTxZYo-1769098955-1.0.1.1-LiTD5W.b8hzWDxsLuo_Mxl9C2l6.Et6E1Pu_YYFr4Oo\",cFPWv: \u0027b\u0027,cITimeS: \u00271769098955\u0027,cTplC:0,cTplV:5,cTplB: \u00270\u0027,fa:\"\\/api\\/login?__cf_chl_f_tk\u003dFbGjA0y3TPuKfm0Oxhar134.nEXG9ZEkkWCEsNTxZYo-1769098955-1.0.1.1-LiTD5W.b8hzWDxsLuo_Mxl9C2l6.Et6E1Pu_YYFr4Oo\",md: \u0027x4r4m8xIGW5SS3.GhCoFUrnVajl5xhV1NJHCPTCPX.Y-1769098955-1.2.1.1-pG5GVSNMORwtkweZHgzJH6VHa9OxLIRuwPzjtRgpIIoiAeIiz3Yc_tKwi3WaFdAfmh9gXtmZk6pLoKvrDe8V2gCflVPOh4lqOcQoZoglMqj9yiByuPxAkuFNuhjPEE3MDscaLkLNeYPLJofqj2O92OI_wkZGQTvUOOVilPBLV4PHI64s_fxbqLQ2vBgv9wk61BD.MLpTUeY3foBKSIZN5o1Mw3CxzLKjzUjZQOq._U0IF2v4v9guzg1KJ_gYUvRPDieiX62mngWQYt5IJKYzoN7850ZgcsHarzrSQfGLbZ1hl.fgDtB9DuVTcVr_cxuhDYhdF3E8F4f0EueAVyDwOSnaBjJ37x61Lf_01sH9DYVwAS1DAmKFwVzBPHWZHCbCn_1w9Aw3BTh19p3GZsRfP6x55GHBRaiwe1vcBroBtonNdG2i.XVYhAu.jrm3W4gtNH3EdcwMQDDy8kl8DpfaqfTCrS5813fbqD_bB6cDWEWjC4QA30vfiwLDf7mrk_wqzPJ5E9CW48Al74eHNqYKW9a.8U32bz6tM1z7qDPZMLEshfcDwFmysoARgp99H1eGq.38CIwXkme1PgmzAn5ARzbPVul0oE.XYjEsjX2nmGW8LQ8eliZINx0CnKPFSHA8.5r4uEwIDNW7sN.wA1Xw3dx2HDSPlk4jWpYjtiBGk0oDOfdjIJDsgYQnwmSfTW4IVL7OUoIMICLiRsq2EfG.NO6YhUen3GWgaItUM9Ov0GS3xA9B6XWy4sKrKzeQuvfMdL5Rb2G_nJ5JSbaY8LiehGjSZRqaCuy65GuJS6eGlzcCYRQL3goawVxYw5_uzeW7lOX1OvPI2c3IMM8vHk0ATybXdDywlonWLmusymXHShacIRZCzrSSjO3UEckd21aBjYY4nTaGSBHybJGZv2AwO5zE4AZ6WLp.g_pAhu5ArmH_TKd06GNMhWNDoLL8C0NJ\u0027,mdrd: \u0027N_eY3vI2QZ5zW_fgWJggUGxKfzytN.GDPZAEyzSz9Rs-1769098955-1.2.1.1-Jv3M1NIVqQ8ERYquUP5fFNmhuLqIc2uMeRdrMkQK4S8mY1OAFcnknzTp6wna1DQeQMvKs2oOyoNpkxKX33j1Cprl2zUV7xAUANKuA8GFB4e430M38U3vk2ogJZWS0EAFr5fleBjggT7GRp.cX3vIWBS5.wP4Slk_FfosLniEZGr5GRQw8KjJgNybCYK4Jhu7Rhn0G9WTLprauhkPHxlglBvftXlebxQHYMUiGNFxUSkoKAw7oexz5pk64K5jj4Z19lkRArwk37.ou0aicdehwA87g1mcNOSvKQ5a.Nq7H1QPCLINlqG__T0IfF6JSqEKXGwqciTaw33ntzq3rwM68yZXZZRV1Qe_ngaHxmpPWMYrohN56ghWztE3gp0P8e_sbaDuauwAyG4OUOBN3whLkup4GKgqMP9dWigvbFmI3CYRu2Pk80B1LYRa16_Ga0VELr84bKHPZWg8stBEM97gSb1NMEGqXnacSlJ6M6wHhOp7ViaXUp6xolJyABpzKvLmOe5cDtPMQnjTBJhMYY0ea4N7HdD582xn0rN75xfeOvhYlzsp5LyGIJnl0QwWX.ctkx05_Msavb9M30deG2qgFmqqJS2XYJhlWo5ojq47lkGkWE6TimvT5bPpEIwtzmM0WJFgjnQQDeblL8cTeS6CpERf1vQl252XH8bPaoIaoQNFJbIBnLCrPnDD9gVUbjKZNRQug1PHABxKIGnc3_663PiFS6rH6uDNeoHMHhV6P43YN1Zy7wcHDUXj2R4NI8c9OeVHp5GL_.VED.e1DY3fE8onXqoTbMbjeSdOv6kUJ4rzZWXZGDv3ZgRjQWdqqbIHK1w2pntS_nqafSGdMxEw1SooXpxA1CVkgNsL816wP0iSSnFk3_zurLLe.WIe4Zz4x.alGFpPvOxX5DyjicMiMQxAeuMoeItBH7TUtTDGllbxZSQgMmCQUWaBf0kzPRUEjO8YBpSI29gGgDN.61j8ZZTiC8DHXRJ4nH0FfTsjO8SoGivd3xwGf5S.GzCCaJBksegLc0pqeDg9V9asU_QBDUEaVvDP6qRQUjsuI47dV7cBKKCoUizGuPaZASM0HnQyIBQg1ZNWW.CzqnJVUpazr4eqJMCTkKZrjbbFiEavJnXLN9hJU51A6kwp5KwaOJpz1kjNMkURyCIuTvYH0VdCkJM.l8WpSp0XnfssmCUztjbj1LCj780WKM7x8vPKmMcI0qRcyvb.cAvzQqe4jRWsB5OJusLqK5PuTsur2Fb5vtZkEaf8i0.ffGOV8H8pcln7LNbqez7hhnsAfaOLz.srJEZkGZjC1T6oWYhPUwrILNvzAXVyZfAwMUDSED6FlnYKbntmJTZaIx2qxfsY9_HpNfSGnbFUGqEkZkBmn5YwcUumOTJCp10ZxM3f3n_HZ6cyJ_7ucNbL4qD1Bsy6vjhc0WYGpGDgbn_WMY3Rnf04Ub4X399glaEwQdVl0hkPIJh4tpXRcsNEFZjMMm5H1wDDQ5r6FjpXW4hRBcxdmejTnuzmgDu3wIdfB149o7Ps4XZ6qTNl5laEQarGKsCjScQ5v4GJVAAHAwcGFl2fmwyV_gDLbtupg6v2soDNwkWG.zN6psHjVleqArrt.TwJK_qBORPJa6XfSQGu01h.wJd2pFtysVqsqIuHrTn1WiluD9k8z3o3z.etcnc3sEw7QrYXZmPz_M.l9yZdZFetQGKAD32brf8DY8eRDz5BuIR6ANrZZsN9KzzFheADysiKSsyZdowgCBqsHJifU1R1p_ROTmJxzNYgfZDw8Mp.Uj20iGb_pFRDNgN5hox0XYO4g9_e7b4wFLRjBkSdx_lu1MbFCUDr.qweQQsofvzci5VcJH7lQgkU_Qp5CHk701G9u97qOCfzH.DubJshaX7NRHG7cWDWD7iBQqwNmMnVvyKdUK0w_p2OsIBT9Id9c5grA.ei2j89bzXDTKDhggB7axHv24lm4znP_6qjdafAfYltv46Qjb26RJBkxmTTULivg1MJ8i6PCAOrYeryoiEBrTPYADBfiHSkjefaB_4otnAEBFEwqKX4FagfUTWzBRij48pCA14mdhsCssIJfAupL5bye4jSE8tN1WpX.jJd7eGqvaAvijKlroBO_BjfCOZ8C1VFBxhYQLrTPZLjtbR9AlTVvFZx6h8mEUBKDigsHSTgHDA56lQ434KH4HbFAd9pXbhWqs_HI4W3kEMu7tX0JL92efKvZc8nmvq8xGRGJe0dTRmCMRBUYtGRBQvJzUAICKjjjOlf9UgR3KmFzeNIyI9az56lXjhQkEUD5RH2gLuOLaV3PxgZL_4fyUw.BvLZiCW_z8MbopvXGXF.5pxU3LGoX9IOegAu5j2Zi.Yy9e_tZ_CKsZ2LFbGREoNJ8Afvux0XhRwUQG_gts_gCh0oYSdVgIYhFwRcZoIobudj1uRYBmW6r3bTp6SYB7b_T8046rM_mMmKNYIxNhfId2pEmEE9fpSOTShwrZPOLV4uXT9R8xNJSZYl8o4HIYYcVqv8K83z6HFoQu_e5MfI.dVRqePtAKw\u0027,};var a \u003d document.createElement(\u0027script\u0027);a.src \u003d \u0027/cdn-cgi/challenge-platform/h/b/orchestrate/chl_page/v1?ray\u003d9c20641a7f67509a\u0027;window._cf_chl_opt.cOgUHash \u003d location.hash \u003d\u003d\u003d \u0027\u0027 \u0026\u0026 location.href.indexOf(\u0027#\u0027) !\u003d\u003d -1 ? \u0027#\u0027 : location.hash;window._cf_chl_opt.cOgUQuery \u003d location.search \u003d\u003d\u003d \u0027\u0027 \u0026\u0026 location.href.slice(0, location.href.length - window._cf_chl_opt.cOgUHash.length).indexOf(\u0027?\u0027) !\u003d\u003d -1 ? \u0027?\u0027 : location.search;if (window.history \u0026\u0026 window.history.replaceState) {var ogU \u003d location.pathname + window._cf_chl_opt.cOgUQuery + window._cf_chl_opt.cOgUHash;history.replaceState(null, null,\"\\/api\\/login?__cf_chl_rt_tk\u003dFbGjA0y3TPuKfm0Oxhar134.nEXG9ZEkkWCEsNTxZYo-1769098955-1.0.1.1-LiTD5W.b8hzWDxsLuo_Mxl9C2l6.Et6E1Pu_YYFr4Oo\"+ window._cf_chl_opt.cOgUHash);a.onload \u003d function() {history.replaceState(null, null, ogU);}}document.getElementsByTagName(\u0027head\u0027)[0].appendChild(a);}());\u003c/script\u003e\u003c/body\u003e\u003c/html\u003e expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:111)\n\tat org.testng.Assert.failNotEquals(Assert.java:1578)\n\tat org.testng.Assert.assertTrue(Assert.java:57)\n\tat mission.StepDefinition.iShouldSeeTheFollowingResponseMessage(StepDefinition.java:320)\n\tat ✽.And I should see the following response message:(src/test/java/API-Test.feature:48)\n",
  "status": "failed"
});
formatter.before({
  "duration": 218789,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Should see the list of users with DELAYED RESPONSE",
  "description": "",
  "id": "api-test;should-see-the-list-of-users-with-delayed-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "I wait for the user list to load",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iWaitForUserListToLoad()"
});
formatter.result({
  "duration": 157985443,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iShouldSeeThatEveryUserHasAUniqueID()"
});
formatter.result({
  "duration": 34495,
  "status": "passed"
});
formatter.uri("src/test/java/SampleTest.feature");
formatter.feature({
  "line": 2,
  "name": "Sample Test",
  "description": "",
  "id": "sample-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UI"
    }
  ]
});
formatter.before({
  "duration": 2545321573,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Sample",
  "description": "",
  "id": "sample-test;sample",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 598049837,
  "status": "passed"
});
formatter.after({
  "duration": 506244720,
  "status": "passed"
});
formatter.uri("src/test/java/UI-Test.feature");
formatter.feature({
  "line": 2,
  "name": "Checkout items in the basket",
  "description": "Please use home page of https://www.saucedemo.com/",
  "id": "checkout-items-in-the-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UI"
    }
  ]
});
formatter.before({
  "duration": 1624226454,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Check item total cost and tax",
  "description": "",
  "id": "checkout-items-in-the-basket;check-item-total-cost-and-tax",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login in with the following details",
  "rows": [
    {
      "cells": [
        "userName",
        "Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I add the following items to the basket",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 12
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 13
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 14
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I  should see 4 items added to the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that the QTY count for each item should be 1",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I remove the following item:",
  "rows": [
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I  should see 3 items added to the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on the CHECKOUT button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I type \"FirstName\" for First Name",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I type \"LastName\" for Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I type \"EC1A 9JU\" for ZIP/Postal Code",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on the CONTINUE button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Item total will be equal to the total of items on the list",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "a Tax rate of 8 % is applied to the total",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 1624581712,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iLoginWithFollowingDetails(DataTable)"
});
formatter.result({
  "duration": 466500748,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iAddFollowingItemsToBasket(String\u003e)"
});
formatter.result({
  "duration": 279213791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "StepDefinition.iShouldSeeItemsInCart(int)"
});
formatter.result({
  "duration": 1020911351,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnShoppingCart()"
});
formatter.result({
  "duration": 66977673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "StepDefinition.iVerifyQtyCountForEachItem(int)"
});
formatter.result({
  "duration": 55988776,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iRemoveFollowingItem(String\u003e)"
});
formatter.result({
  "duration": 578659566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 14
    }
  ],
  "location": "StepDefinition.iShouldSeeItemsInCart(int)"
});
formatter.result({
  "duration": 1017153410,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 50094592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName",
      "offset": 8
    }
  ],
  "location": "StepDefinition.iTypeForFirstName(String)"
});
formatter.result({
  "duration": 100784073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LastName",
      "offset": 8
    }
  ],
  "location": "StepDefinition.iTypeForLastName(String)"
});
formatter.result({
  "duration": 85641838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EC1A 9JU",
      "offset": 8
    }
  ],
  "location": "StepDefinition.iTypeForPostalCode(String)"
});
formatter.result({
  "duration": 86724432,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnContinueButton()"
});
formatter.result({
  "duration": 63272714,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.itemTotalWillBeEqualToTotalOfItems()"
});
formatter.result({
  "duration": 81209767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 14
    }
  ],
  "location": "StepDefinition.aTaxRateIsApplied(double)"
});
formatter.result({
  "duration": 33215532,
  "status": "passed"
});
formatter.after({
  "duration": 492609328,
  "status": "passed"
});
});