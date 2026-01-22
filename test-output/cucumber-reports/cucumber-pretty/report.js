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
  "duration": 557773268,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Using JSONPlaceholder - https://jsonplaceholder.typicode.com/"
    },
    {
      "line": 4,
      "value": "# Free fake API for testing without Cloudflare issues"
    }
  ],
  "line": 6,
  "name": "Should see LIST of all users",
  "description": "",
  "id": "api-test;should-see-list-of-all-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I get the list of users",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see 10 users in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iGetTheListOfUsers()"
});
formatter.result({
  "duration": 1424075462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    }
  ],
  "location": "StepDefinition.iShouldSeeUsersInResponse(int)"
});
formatter.result({
  "duration": 4034351,
  "status": "passed"
});
formatter.before({
  "duration": 474553,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "api-test;should-see-single-user-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I make a search for user 1",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I should see the following user data",
  "rows": [
    {
      "cells": [
        "name",
        "email"
      ],
      "line": 13
    },
    {
      "cells": [
        "Leanne Graham",
        "Sincere@april.biz"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "StepDefinition.iMakeASearchForUser(String)"
});
formatter.result({
  "duration": 500463343,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.IShouldSeeFollowingUserData(DataTable)"
});
formatter.result({
  "duration": 36552761,
  "status": "passed"
});
formatter.before({
  "duration": 589754,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Should see USER NOT FOUND error code",
  "description": "",
  "id": "api-test;should-see-user-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I make a search for user 999",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I receive error code 404 in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "999",
      "offset": 25
    }
  ],
  "location": "StepDefinition.iMakeASearchForUser(String)"
});
formatter.result({
  "duration": 775799105,
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
  "duration": 100154,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "CREATE a post",
  "description": "",
  "id": "api-test;create-a-post",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I create a post with title \"\u003cTitle\u003e\" and body \"\u003cBody\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "response should contain the created post data",
  "rows": [
    {
      "cells": [
        "title",
        "body",
        "userId",
        "id"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "api-test;create-a-post;",
  "rows": [
    {
      "cells": [
        "Title",
        "Body"
      ],
      "line": 26,
      "id": "api-test;create-a-post;;1"
    },
    {
      "cells": [
        "Test Post 1",
        "This is a test post"
      ],
      "line": 27,
      "id": "api-test;create-a-post;;2"
    },
    {
      "cells": [
        "Another Post",
        "Testing API automation"
      ],
      "line": 28,
      "id": "api-test;create-a-post;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 290573,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "CREATE a post",
  "description": "",
  "id": "api-test;create-a-post;;2",
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
  "line": 21,
  "name": "I create a post with title \"Test Post 1\" and body \"This is a test post\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "response should contain the created post data",
  "rows": [
    {
      "cells": [
        "title",
        "body",
        "userId",
        "id"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test Post 1",
      "offset": 28
    },
    {
      "val": "This is a test post",
      "offset": 51
    }
  ],
  "location": "StepDefinition.iCreatePostWithTitleAndBody(String,String)"
});
formatter.result({
  "duration": 376380607,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.responseContainsCreatedPostData(DataTable)"
});
formatter.result({
  "duration": 50409480,
  "status": "passed"
});
formatter.before({
  "duration": 282748,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "CREATE a post",
  "description": "",
  "id": "api-test;create-a-post;;3",
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
  "line": 21,
  "name": "I create a post with title \"Another Post\" and body \"Testing API automation\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "response should contain the created post data",
  "rows": [
    {
      "cells": [
        "title",
        "body",
        "userId",
        "id"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Another Post",
      "offset": 28
    },
    {
      "val": "Testing API automation",
      "offset": 52
    }
  ],
  "location": "StepDefinition.iCreatePostWithTitleAndBody(String,String)"
});
formatter.result({
  "duration": 757078153,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.responseContainsCreatedPostData(DataTable)"
});
formatter.result({
  "duration": 38292937,
  "status": "passed"
});
formatter.before({
  "duration": 284061,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Should UPDATE a post",
  "description": "",
  "id": "api-test;should-update-a-post",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I update post 1 with title \"Updated Title\" and body \"Updated Body\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I should get a response code of 200",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "response should contain updated title \"Updated Title\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    },
    {
      "val": "Updated Title",
      "offset": 28
    },
    {
      "val": "Updated Body",
      "offset": 53
    }
  ],
  "location": "StepDefinition.iUpdatePostWithTitleAndBody(int,String,String)"
});
formatter.result({
  "duration": 747815030,
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
  "duration": 104290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated Title",
      "offset": 39
    }
  ],
  "location": "StepDefinition.responseShouldContainUpdatedTitle(String)"
});
formatter.result({
  "duration": 8857984,
  "status": "passed"
});
formatter.before({
  "duration": 281314,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Should DELETE a post",
  "description": "",
  "id": "api-test;should-delete-a-post",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I delete post 1",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I should get a response code of 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "StepDefinition.iDeletePost(int)"
});
formatter.result({
  "duration": 334577247,
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
  "duration": 66211,
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
  "duration": 2060148248,
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
  "duration": 716124959,
  "status": "passed"
});
formatter.after({
  "duration": 486810449,
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
  "duration": 1715036070,
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
  "duration": 583212603,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iLoginWithFollowingDetails(DataTable)"
});
formatter.result({
  "duration": 527468002,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iAddFollowingItemsToBasket(String\u003e)"
});
formatter.result({
  "duration": 267061714,
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
  "duration": 1028022978,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnShoppingCart()"
});
formatter.result({
  "duration": 61214871,
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
  "duration": 48064680,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iRemoveFollowingItem(String\u003e)"
});
formatter.result({
  "duration": 573044617,
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
  "duration": 1021428128,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 55826858,
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
  "duration": 115641057,
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
  "duration": 107860635,
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
  "duration": 109417818,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnContinueButton()"
});
formatter.result({
  "duration": 88097757,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.itemTotalWillBeEqualToTotalOfItems()"
});
formatter.result({
  "duration": 83384031,
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
  "duration": 37346624,
  "status": "passed"
});
formatter.after({
  "duration": 551222776,
  "status": "passed"
});
});