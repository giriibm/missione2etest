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
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Please visit https://reqres.in/"
    }
  ],
  "line": 5,
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "id": "api-test;should-see-list-users-of-all-existing-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I get the default list of users for on 1st page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I get the list of all users within every page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see total users count equals the number of user ids",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iGetTheDefaultListofusers()"
});
formatter.result({
  "duration": 1585646544,
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1002)\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\n\tat io.restassured.path.json.JsonPath.getInt(JsonPath.java:237)\n\tat mission.StepDefinition.iGetTheDefaultListofusers(StepDefinition.java:122)\n\tat ✽.Given I get the default list of users for on 1st page(src/test/java/API-Test.feature:6)\nCaused by: groovy.json.JsonException: Lexing failed on line: 1, column: 1, while reading \u0027\u003c\u0027, no possible valid JSON value or punctuation could be recognized.\n\tat groovy.json.JsonLexer.nextToken(JsonLexer.java:86)\n\tat groovy.json.JsonLexer$nextToken.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:130)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parse(ConfigurableJsonSlurper.groovy:97)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper$parse.callCurrent(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:83)\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:965)\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1000)\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\n\tat io.restassured.path.json.JsonPath.getInt(JsonPath.java:237)\n\tat mission.StepDefinition.iGetTheDefaultListofusers(StepDefinition.java:122)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:131)\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:570)\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:170)\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:790)\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:143)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:763)\n\tat org.testng.TestRunner.run(TestRunner.java:594)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:398)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:392)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1146)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1067)\n\tat org.testng.TestNG.runSuites(TestNG.java:997)\n\tat org.testng.TestNG.run(TestNG.java:965)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:155)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:102)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:91)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:137)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:385)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:507)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:495)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.iGetTheListOfAllUsers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.iShouldMatchTotalCount()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "api-test;should-see-single-user-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I should see the following user data",
  "rows": [
    {
      "cells": [
        "first_name",
        "email"
      ],
      "line": 14
    },
    {
      "cells": [
        "Emma",
        "emma.wong@reqres.in"
      ],
      "line": 15
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
  "duration": 4236064757,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.IShouldSeeFollowingUserData(DataTable)"
});
formatter.result({
  "duration": 2091465,
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1002)\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\n\tat io.restassured.path.json.JsonPath.getString(JsonPath.java:352)\n\tat mission.StepDefinition.IShouldSeeFollowingUserData(StepDefinition.java:151)\n\tat ✽.Then I should see the following user data(src/test/java/API-Test.feature:13)\nCaused by: groovy.json.JsonException: Lexing failed on line: 1, column: 1, while reading \u0027\u003c\u0027, no possible valid JSON value or punctuation could be recognized.\n\tat groovy.json.JsonLexer.nextToken(JsonLexer.java:86)\n\tat groovy.json.JsonLexer$nextToken.call(Unknown Source)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parse(ConfigurableJsonSlurper.groovy:97)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper$parse.callCurrent(Unknown Source)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:83)\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:965)\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1000)\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\n\tat io.restassured.path.json.JsonPath.getString(JsonPath.java:352)\n\tat mission.StepDefinition.IShouldSeeFollowingUserData(StepDefinition.java:151)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:131)\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:570)\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:170)\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:790)\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:143)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:763)\n\tat org.testng.TestRunner.run(TestRunner.java:594)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:398)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:392)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1146)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1067)\n\tat org.testng.TestNG.runSuites(TestNG.java:997)\n\tat org.testng.TestNG.run(TestNG.java:965)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:155)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:102)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:91)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:137)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:385)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:507)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:495)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 18,
  "name": "Should see SINGLE USER NOT FOUND error code",
  "description": "",
  "id": "api-test;should-see-single-user-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I make a search for user 55",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I receive error code 404 in response",
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
  "duration": 222108925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "StepDefinition.iReceiveErrorCodeInResponse(int)"
});
formatter.result({
  "duration": 2067588,
  "error_message": "java.lang.AssertionError: Response code does not match expected [404] but found [403]\n\tat org.testng.Assert.fail(Assert.java:97)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:839)\n\tat mission.StepDefinition.iReceiveErrorCodeInResponse(StepDefinition.java:162)\n\tat ✽.Then I receive error code 404 in response(src/test/java/API-Test.feature:20)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I create a user with following \u003cName\u003e \u003cJob\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "api-test;create-a-user;",
  "rows": [
    {
      "cells": [
        "Name",
        "Job"
      ],
      "line": 29,
      "id": "api-test;create-a-user;;1"
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ],
      "line": 30,
      "id": "api-test;create-a-user;;2"
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ],
      "line": 31,
      "id": "api-test;create-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I create a user with following Peter Manager",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 26
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
  "duration": 230956462,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iReceiveErrorCodeInResponse(DataTable)"
});
formatter.result({
  "duration": 372773,
  "error_message": "java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0\n\tat java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)\n\tat java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)\n\tat java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)\n\tat java.base/java.util.Objects.checkIndex(Objects.java:373)\n\tat java.base/java.util.ArrayList.get(ArrayList.java:426)\n\tat java.base/java.util.Collections$UnmodifiableList.get(Collections.java:1321)\n\tat mission.StepDefinition.iReceiveErrorCodeInResponse(StepDefinition.java:179)\n\tat ✽.Then response should contain the following data(src/test/java/API-Test.feature:25)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 31,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I create a user with following Liza Sales",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 26
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
  "duration": 257387577,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iReceiveErrorCodeInResponse(DataTable)"
});
formatter.result({
  "duration": 239928,
  "error_message": "java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0\n\tat java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)\n\tat java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)\n\tat java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)\n\tat java.base/java.util.Objects.checkIndex(Objects.java:373)\n\tat java.base/java.util.ArrayList.get(ArrayList.java:426)\n\tat java.base/java.util.Collections$UnmodifiableList.get(Collections.java:1321)\n\tat mission.StepDefinition.iReceiveErrorCodeInResponse(StepDefinition.java:179)\n\tat ✽.Then response should contain the following data(src/test/java/API-Test.feature:25)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 34,
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---successful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "I login successfully with the following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 36
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "cityslicka"
      ],
      "line": 37
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I should get a response code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iLoginSuccessfullyWithFollowingData(DataTable)"
});
formatter.result({
  "duration": 228628353,
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
  "duration": 286954,
  "error_message": "java.lang.AssertionError: Response code does not match expected [200] but found [403]\n\tat org.testng.Assert.fail(Assert.java:97)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:839)\n\tat mission.StepDefinition.iShouldGetAResponseCodeOf(StepDefinition.java:243)\n\tat ✽.Then I should get a response code of 200(src/test/java/API-Test.feature:38)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 40,
  "name": "LOGIN - UNSUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---unsuccessful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I login unsuccessfully with the following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 42
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        ""
      ],
      "line": 43
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I should get a response code of 400",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I should see the following response message:",
  "rows": [
    {
      "cells": [
        "\"error\": \"Missing password\""
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.iLoginUnsuccessfullyWithFollowingData(DataTable)"
});
formatter.result({
  "duration": 230768462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefinition.iShouldGetAResponseCodeOf(int)"
});
formatter.result({
  "duration": 232689,
  "error_message": "java.lang.AssertionError: Response code does not match expected [400] but found [403]\n\tat org.testng.Assert.fail(Assert.java:97)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:839)\n\tat mission.StepDefinition.iShouldGetAResponseCodeOf(StepDefinition.java:243)\n\tat ✽.Then I should get a response code of 400(src/test/java/API-Test.feature:44)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.iShouldSeeTheFollowingResponseMessage(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 48,
  "name": "Should see the list of users with DELAYED RESPONSE",
  "description": "",
  "id": "api-test;should-see-the-list-of-users-with-delayed-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "I wait for the user list to load",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iWaitForUserListToLoad()"
});
formatter.result({
  "duration": 226850904,
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1002)\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\n\tat io.restassured.path.json.JsonPath.getList(JsonPath.java:375)\n\tat mission.StepDefinition.iWaitForUserListToLoad(StepDefinition.java:225)\n\tat ✽.Given I wait for the user list to load(src/test/java/API-Test.feature:49)\nCaused by: groovy.json.JsonException: Lexing failed on line: 1, column: 1, while reading \u0027\u003c\u0027, no possible valid JSON value or punctuation could be recognized.\n\tat groovy.json.JsonLexer.nextToken(JsonLexer.java:86)\n\tat groovy.json.JsonLexer$nextToken.call(Unknown Source)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parse(ConfigurableJsonSlurper.groovy:97)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper$parse.callCurrent(Unknown Source)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:83)\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:965)\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1000)\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\n\tat io.restassured.path.json.JsonPath.getList(JsonPath.java:375)\n\tat mission.StepDefinition.iWaitForUserListToLoad(StepDefinition.java:225)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:131)\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:570)\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:170)\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:790)\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:143)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:763)\n\tat org.testng.TestRunner.run(TestRunner.java:594)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:398)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:392)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1146)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1067)\n\tat org.testng.TestNG.runSuites(TestNG.java:997)\n\tat org.testng.TestNG.run(TestNG.java:965)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:155)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:102)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:91)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:137)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:385)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:507)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:495)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.iShouldSeeThatEveryUserHasAUniqueID()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 2514668326,
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
  "duration": 561024337,
  "status": "passed"
});
formatter.after({
  "duration": 360972955,
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
  "duration": 1408244537,
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
  "duration": 1600140416,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iLoginWithFollowingDetails(DataTable)"
});
formatter.result({
  "duration": 496236892,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iAddFollowingItemsToBasket(String\u003e)"
});
formatter.result({
  "duration": 276634481,
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
  "duration": 526012972,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnShoppingCart()"
});
formatter.result({
  "duration": 51804325,
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
  "duration": 20008416169,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iRemoveFollowingItem(String\u003e)"
});
formatter.result({
  "duration": 51522899,
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
  "duration": 520927002,
  "error_message": "java.lang.AssertionError: Cart item count mismatch expected [3] but found [4]\n\tat org.testng.Assert.fail(Assert.java:97)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:839)\n\tat mission.StepDefinition.iShouldSeeItemsInCart(StepDefinition.java:61)\n\tat ✽.And I  should see 3 items added to the shopping cart(src/test/java/UI-Test.feature:22)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.iClickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.itemTotalWillBeEqualToTotalOfItems()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 729772611,
  "status": "passed"
});
});