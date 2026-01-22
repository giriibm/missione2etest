@API
Feature: API test
# Using JSONPlaceholder - https://jsonplaceholder.typicode.com/
# Free fake API for testing without Cloudflare issues

  Scenario: Should see LIST of all users
    Given I get the list of users
    Then I should see 10 users in the response

  Scenario: Should see SINGLE USER data
    Given I make a search for user 1
    Then I should see the following user data
      | name           | email                |
      | Leanne Graham  | Sincere@april.biz    |

  Scenario: Should see USER NOT FOUND error code
    Given I make a search for user 999
    Then I receive error code 404 in response

  Scenario Outline: CREATE a post
    Given I create a post with title "<Title>" and body "<Body>"
    Then response should contain the created post data
      | title | body | userId | id |

    Examples:
      | Title         | Body                    |
      | Test Post 1   | This is a test post     |
      | Another Post  | Testing API automation  |

  Scenario: Should UPDATE a post
    Given I update post 1 with title "Updated Title" and body "Updated Body"
    Then I should get a response code of 200
    And response should contain updated title "Updated Title"

  Scenario: Should DELETE a post
    Given I delete post 1
    Then I should get a response code of 200
