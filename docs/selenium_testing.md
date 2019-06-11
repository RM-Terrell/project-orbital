# Testing the application with Selenium

## Test Docstring Conventions
All tests should follow the docstring conversion of "Given that...., verify that.....

## Running Tests
To run a file of selenium tests as a python script you can invoke the script with the following command from inside the `selenium_tests` directory:
> python smokes/stats_page_tests.py

However, a better way to run tests is to use a tool called nose2. This will already be installed from the `requirements.txt` install.
To run all tests using the nose2 test runner, from inside `selenium_tests` run the following command:
> nose2

and all tests will be auto discovered according to the rules in `nose2.cfg` file located inside the `selenium_tests` directory.

To run just one file of tests with nose2 you can pass the path of the file via:
>nose2 folder.next_folder.file_name

For example to run just the smoke tests for the Stats page the following command is ran inside the `selenium_tests` folder:
> nose2 smokes.stats_page_tests

No `.py` at the end of the file name.


## Test Assertion Logical Order

When applicable all tests should follow the assertion comparison order of expected first, actual second. For example if you expected a function to return 3, but it actually returned 2 you would test this by the following:

> assertEqual(3, 2)

and NOT BY:

> assertEqual(2, 3)
