# API-Tests-with-Javascript-and-Mocha

- Open project in VS terminal
- Run [npm test] to run all tests

# Tests in BDD syntax

Scenario - GET all existing Users
	GIVEN I have at least 1 user in the database
	AND I set GET user api endpoint
	WHEN I set request Body
	THEN I receive a valid response
	AND I receive all User IDs and names

Scenario - GET test existing ID
GIVEN I have at least 1 user in the database
	AND I set GET user api endpoint
	AND I request the user ID of 1
	THEN I receive a valid response
	AND I receive User ID 1’s Name and Surname

Scenario - GET test negative ID
GIVEN I have at least 1 user in the database
	AND I set GET user api endpoint
	AND I request the user ID of an invalid ID
	THEN I receive a 404 error response

Scenario - POST add new valid user
	GIVEN I set POST user api endpoint
	WHEN I enter a valid ID, username and password
	THEN I receive a valid response
	AND The new entry is in the database

Scenario - POST add new valid user
	GIVEN I set POST user api endpoint
	WHEN I enter a valid ID, username and a null password
	THEN I receive a valid response
	AND The new entry is in the database (null entry allowed for password and username)

Scenario - DELETE add a valid user
	GIVEN I set DELETE user api endpoint
	WHEN I enter a valid ID
	THEN I receive a valid response
	AND The ID is deleted in the database


Scenario - PUT/EDIT a valid user
	GIVEN I set PUT user api endpoint
	WHEN I enter a valid ID, username and password
	THEN I receive a valid response
	AND The ID is updated in the database
