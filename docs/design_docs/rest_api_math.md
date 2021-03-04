# REST API Mathematics Overall Design Intent

## Reqs
Perform mathematical conversions around various types of statistics. Do this via REST API calls that will be tied to a UI, or on their own via pure REST calls.

## Conventions
Code should be as modular and expandable as possible, and as clear as possible even at the cost of having a few extra lines of code. Lets not make statistics any harder than they need to be. Doc strings for every class and function.

### Testing
100% coverage of math functions and REST API views. No exceptions. TDD preferred, but must be at least committed simultaneously or the goat gets mad. He's really hard to calm down once mad.

Test mathematics results out to 4 decimal places. `assertAlmostEqual()` is great for this, and takes an arg for decimals.

For assert comparison statements, follow convention of `assert(expected, actual)` in that order. Not `assert(actual, expected)`. No real reason for that order other than to be consistent with a style.

## General Design

### REST Call Types
POST requests for carrying out a new calculation. Although POST requests are usually used for creating a new distinct element / collection / item, POST calls will perform a new calculation, taking in the various needed numbers are request params, and returning the result in the `data` field. Calculation results are not saved in a DB as of this writing but should be written with the thought that may be a desired feature at some point.

GET requests are used to return descriptions and help data for a given calculation.

### REST Call Conventions

A 200 response code is the default response code for successfully receiving and returning data, regardless of calculation result. It indicates the server was communicated with successfully, even if the calculations carried out had an error of some sort. Every endpoint possesses a `success` field that indicates if the calculation was successful or not as a boolean. Some examples:

User sends a call to an endpoint for performing division, and sends in the values for 4 / 2. System returns a 200 code response with the result of 2, and a `success` value of `true`.

User sends a call to the same division endpoint. Sends in the values for 4 / 0. The system returns a 200 code with a `success` value of `false` and a message describing what went wrong when trying to divide by zero.

Every response contains a `provided_arguments` field, listing the arguments the user provided as a dictionary.

Every response contains a `calculation_results` field listing the results of the calculation as a dictionary. Calculations may return one number, or many.

Every response contains a `warnings` field containing any warnings (like the divide by zero example) as a list of strings.

### Code locations

Actual mathematics will live in their own functions / methods in their own files. They will then be imported into the REST API views and ran, keeping them separate and modular. Opens possibility for math being done with other modules / languages / systems and swapping them with (relative) ease.
