# Endpoint for transactions [/api/v1/transactions]
This endpoint will provide all the required methods available for transactions

+ Attributes
    + _id (object)
    + code (string, required)
    + __v (number)



## List all transactions [GET /api/v1/transactions]
Retrieves the list of transactions

+ Response 200 (application/json)

## Retrieve transactions [GET /api/v1/transactions/{id}]
Retrieves item with the id

+ Response 200 (application/json)

## Create a transactions [POST /api/v1/transactions]

+ Attributes
    + _id (object)
    + code (string, required)
    + __v (number)

+ Response 200 (application/json)

## Updates a transactions [PUT /api/v1/transactions]

+ Attributes
    + _id (object)
    + code (string, required)
    + __v (number)

+ Response 200 (application/json)

## Deletes an item from transactions [DELETE /api/v1/transactions/{id}]
Delete a transactions. **Warning:** This action **permanently** removes the transactions from the database.

+ Response 200 (application/json)

# Endpoint for transactioncategories [/api/v1/transactioncategories]
This endpoint will provide all the required methods available for transactioncategories

+ Attributes
    + _id (object)
    + key (string, required)
    + name (string, required)
    + __v (number)



## List all transactioncategories [GET /api/v1/transactioncategories]
Retrieves the list of transactioncategories

+ Response 200 (application/json)

## Retrieve transactioncategories [GET /api/v1/transactioncategories/{id}]
Retrieves item with the id

+ Response 200 (application/json)

## Create a transactioncategories [POST /api/v1/transactioncategories]

+ Attributes
    + _id (object)
    + key (string, required)
    + name (string, required)
    + __v (number)

+ Response 200 (application/json)

## Updates a transactioncategories [PUT /api/v1/transactioncategories]

+ Attributes
    + _id (object)
    + key (string, required)
    + name (string, required)
    + __v (number)

+ Response 200 (application/json)

## Deletes an item from transactioncategories [DELETE /api/v1/transactioncategories/{id}]
Delete a transactioncategories. **Warning:** This action **permanently** removes the transactioncategories from the database.

+ Response 200 (application/json)

# Endpoint for validations [/api/v1/validations]
This endpoint will provide all the required methods available for validations

+ Attributes
    + _id (object)
    + identifier (string, required)
    + score (number, required)
    + evaluationDate (date, required)
        + Default: function now() { [native code] }
    + ruleEvaluations.label (string, required)
    + ruleEvaluations.evaluatedSuccessfully (boolean, required)
        + Default: ''
    + __v (number)



## List all validations [GET /api/v1/validations]
Retrieves the list of validations

+ Response 200 (application/json)

## Retrieve validations [GET /api/v1/validations/{id}]
Retrieves item with the id

+ Response 200 (application/json)

## Create a validations [POST /api/v1/validations]

+ Attributes
    + _id (object)
    + identifier (string, required)
    + score (number, required)
    + evaluationDate (date, required)
        + Default: function now() { [native code] }
    + ruleEvaluations.label (string, required)
    + ruleEvaluations.evaluatedSuccessfully (boolean, required)
        + Default: ''
    + __v (number)

+ Response 200 (application/json)

## Updates a validations [PUT /api/v1/validations]

+ Attributes
    + _id (object)
    + identifier (string, required)
    + score (number, required)
    + evaluationDate (date, required)
        + Default: function now() { [native code] }
    + ruleEvaluations.label (string, required)
    + ruleEvaluations.evaluatedSuccessfully (boolean, required)
        + Default: ''
    + __v (number)

+ Response 200 (application/json)

## Deletes an item from validations [DELETE /api/v1/validations/{id}]
Delete a validations. **Warning:** This action **permanently** removes the validations from the database.

+ Response 200 (application/json)