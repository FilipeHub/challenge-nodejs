define({ "api": [
  {
    "type": "_",
    "url": "/_",
    "title": "Authenticated routes",
    "description": "<p>These verifications are made when the route requires a authenticated user</p>",
    "name": "AuthenticatedRoutes",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token returned when the user is created or when a login is done</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": "_",
            "description": "<p>the route normally follows</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTokenProvidedError",
            "description": "<p>the mandatory token for that route was not provide</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>the token doesn't have two parts</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotABearerTokenError",
            "description": "<p>the token provided is not a baerer token</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenInvalidError",
            "description": "<p>the token provided is a Bearer token by it is not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error- NoTokenProvidedError",
          "content": "HTTP/1.1 400 Error: NoTokenProvidedError\n\n{\n   error: \"No token provided\"\n}",
          "type": "json"
        },
        {
          "title": "Error- TokenError",
          "content": "HTTP/1.1 400 Error: TokenError\n\n{\n   error: \"Token error\"\n}",
          "type": "json"
        },
        {
          "title": "Error- NotABearerTokenError",
          "content": "HTTP/1.1 400 Error: NotABearerTokenError\n\n{\n   error: \"It is not a Bearer Token\"\n}",
          "type": "json"
        },
        {
          "title": "Error- TokenInvalidError",
          "content": "HTTP/1.1 400 Error: TokenInvalidError\n\n{\n   error: \"Token invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/middlewares/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/pokemons",
    "title": "Create a new Pokemon",
    "name": "CreatePokemon",
    "description": "<p>This endpoint requires a authenticated user. See the Authentication session of this documentation</p>",
    "group": "Pokemons",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a Bearer token of the authorizaded user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Pokemon name, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Pokemon description, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Pokemon type, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "attack",
            "description": "<p>Pokemon attack, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "defense",
            "description": "<p>Pokemon defense, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>Pokemon speed, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "abilities",
            "description": "<p>String of the abilities of the Pokemon separeted by comma, not unique</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON Body Example:",
          "content": "{ \n      \"name\": \"pikachu\",\n      \"description\" : \" Electric mouse\", \n      \"type\": \"Electric\", \n      \"attack\": 40, \n      \"defense\" : 30, \n      \"speed\": 50, \n      \"health\": 55,\n      \"abilities\": \"super-speed, thunder\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Pokemon id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Pokemon name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Pokemon description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Pokemon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attack",
            "description": "<p>Pokemon attack.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "defense",
            "description": "<p>Pokemon defense.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>Pokemon speed.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "user",
            "description": "<p>Pokemon's owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "abilities",
            "description": "<p>Array of the abilities of the Pokemon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n \"_id\": \"5ddfa6bb8fd756266051cc62\",\n \"name\": \"pikachu\",\n \"description\": \" Electric mouse\",\n \"type\": \"Eletric\",\n \"attack\": 40,\n \"defense\": 30,\n \"speed\": 50,\n \"health\": 55,\n \"user\": \"5dddbfcff476142216e4a709\",\n \"abilities\": [\n    \"super-speed\",\n    \"thumder\"\n ],\n \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatePokemonFailed",
            "description": "<p>an unexpected error occurs in the storage of the pokemon in the data base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error creating a new pokemon\n\n{\n   error: \"Error creating new pokemon\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/PokemonController.js",
    "groupTitle": "Pokemons"
  },
  {
    "type": "delete",
    "url": "/pokemons/:id",
    "title": "Delete the pokemon",
    "name": "DeletePokemon",
    "description": "<p>This endpoint requires a authenticated user. See the Authentication session of this documentation</p>",
    "group": "Pokemons",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a Bearer token of the authorizaded user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Pokemon id, unique</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"message\": \"The Pokemon was successfuly removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PokemonDoesNotExistsFailed",
            "description": "<p>the pokemon doesn't exists in the user's account</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeletePokemonFailed",
            "description": "<p>an unexpected error occurs deleting one user's pokemon</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-pokemon doesn't exists",
          "content": "HTTP/1.1 400 Error: Pokemon doesn't exists\n\n{\n   error: \"Doesn't exist this pokemon for this user\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error deleting the user's pokemon\n\n{\n   error: \"Error deleting the pokemon\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/PokemonController.js",
    "groupTitle": "Pokemons"
  },
  {
    "type": "get",
    "url": "/pokemons/:id",
    "title": "Show the pokemon's details (all attributes)",
    "name": "GetPokemon",
    "description": "<p>This endpoint requires a authenticated user. See the Authentication session of this documentation</p>",
    "group": "Pokemons",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a Bearer token of the authorizaded user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Pokemon id, unique</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Pokemon id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Pokemon name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Pokemon description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Pokemon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attack",
            "description": "<p>Pokemon attack.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "defense",
            "description": "<p>Pokemon defense.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>Pokemon speed.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "user",
            "description": "<p>Pokemon's owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "abilities",
            "description": "<p>Array of the abilities of the Pokemon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n \"_id\": \"5ddfa6bb8fd756266051cc62\",\n \"name\": \"pikachu\",\n \"description\": \" Electric mouse\",\n \"type\": \"Electric\",\n \"attack\": 40,\n \"defense\": 30,\n \"speed\": 50,\n \"health\": 55,\n \"user\": \"5dddbfcff476142216e4a709\",\n \"abilities\": [\n    \"super-speed\",\n    \"thumder\"\n ],\n \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PokemonDoesNotExistsFailed",
            "description": "<p>the pokemon doesn't exists in the user 's account</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GetPokemonFailed",
            "description": "<p>an unexpected error occurs getting the details of one user's pokemons</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-pokemon doesn't exists",
          "content": "HTTP/1.1 400 Error: Pokemon doesn't exists\n\n{\n   error: \"Doesn't exist this pokemon for this user\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error getting the details of one user's pokemons\n\n{\n   error: \"Error showing the pokemon\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/PokemonController.js",
    "groupTitle": "Pokemons"
  },
  {
    "type": "get",
    "url": "/pokemons",
    "title": "Get the basic informations of all user's pokemons",
    "name": "GetPokemons",
    "description": "<p>This endpoint requires a authenticated user. See the Authentication session of this documentation</p>",
    "group": "Pokemons",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a Bearer token of the authorizaded user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>Id and name of the pokemons</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n{ \n  {\n    \"_id\": \"5ddfa6bb8fd756266051cc62\",\n    \"name\": \"pikachu\"\n  },\n  {\n    \"_id\": \"5ddfa6bb8fd12234751caf43\",\n    \"name\": \"squirtle\"\n  },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GetPokemonsFailed",
            "description": "<p>an unexpected error occurs getting the list of all user's pokemons</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error getting the pokemons' list\n\n{\n   error: \"Error getting the pokemons\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/PokemonController.js",
    "groupTitle": "Pokemons"
  },
  {
    "type": "put",
    "url": "/pokemons/:id",
    "title": "Update the pokemon's attributes",
    "name": "UpdatePokemon",
    "description": "<p>This endpoint requires a authenticated user. See the Authentication session of this documentation</p>",
    "group": "Pokemons",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a Bearer token of the authorizaded user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Pokemon id, unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Pokemon name, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Pokemon description, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Pokemon type, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "attack",
            "description": "<p>Pokemon attack, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "defense",
            "description": "<p>Pokemon defense, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>Pokemon speed, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "abilities",
            "description": "<p>String of the abilities of the Pokemon separeted by comma, not unique</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON Body Example:",
          "content": "{ \n      \"name\": \"pikachu\",\n      \"description\" : \" Electric mouse with great power\", \n      \"type\": \"Electric\", \n      \"attack\": 40, \n      \"defense\" : 30, \n      \"speed\": 50, \n      \"health\": 55,\n      \"abilities\": \"super-speed, thunder\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Pokemon id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Pokemon name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Pokemon description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Pokemon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attack",
            "description": "<p>Pokemon attack.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "defense",
            "description": "<p>Pokemon defense.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>Pokemon speed.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "user",
            "description": "<p>Pokemon's owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "abilities",
            "description": "<p>Array of the abilities of the Pokemon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n \"_id\": \"5ddfa6bb8fd756266051cc62\",\n \"name\": \"pikachu\",\n \"description\": \" Electric mouse with great power\",\n \"type\": \"Electric\",\n \"attack\": 40,\n \"defense\": 30,\n \"speed\": 50,\n \"health\": 55,\n \"user\": \"5dddbfcff476142216e4a709\",\n \"abilities\": [\n    \"super-speed\",\n    \"thumder\"\n ],\n \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "the",
            "description": "<p>pokemon doesn't exists in the user's account</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdatePokemonFailed",
            "description": "<p>an unexpected error occurs updating the details of one user's pokemons</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-pokemon doesn't exists",
          "content": "HTTP/1.1 400 Error: Pokemon doesn't exists\n\n{\n   error: \"Doesn't exist this pokemon for this user\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error updating the attributes of one user's pokemons\n\n{\n   error: \"Error updating the pokemon\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/PokemonController.js",
    "groupTitle": "Pokemons"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login in the system",
    "name": "CreateSession",
    "group": "Sessions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email, unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password, not unique</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON Body Example:",
          "content": "{ \n      \"email\" : \"filipe@pokemail.com\", \n      \"password\": \"123456\", \n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token to the user authentication in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n      \"user\": {\n          \"_id\": \"5de2a86a929ae9080cb9160d\",\n          \"name\": \"Filipe\",\n          \"email\": \"filipe@pokemail.com\",\n          \"__v\": 0\n      },\n      \n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTJhODZhOTI5YWU5MDgwY2I5MTYwZCIsImlhdCI6MTU3NTEzNTMzOCwiZXhwIjoxNTc1MjIxNzM4fQ.145vjji6eIC5jEogGoBk_SbcUMCGYTzbrXyWpe8t_iU\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginFailed",
            "description": "<p>an unexpected error occurs in the user's login</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFoundFailed",
            "description": "<p>the user doesn't have an email storaged in the data base</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPasswordFailed",
            "description": "<p>the user's password is wrong</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error in the user's login\n\n{\n   error: \"Login failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error user not found\n\n{\n   error: \"User not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error invalid password\n\n{\n   error: \"Invalid password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/SessionController.js",
    "groupTitle": "Sessions"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a new User",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email, unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password, not unique</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON Body Example:",
          "content": "{ \n      \"name\": \"Filipe\",\n      \"email\" : \"filipe@pokemail.com\", \n      \"password\": \"123456\", \n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token to the user authentication in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n      \"user\": {\n          \"_id\": \"5de2a86a929ae9080cb9160d\",\n          \"name\": \"Filipe\",\n          \"email\": \"filipe@pokemail.com\",\n          \"__v\": 0\n      },\n      \n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTJhODZhOTI5YWU5MDgwY2I5MTYwZCIsImlhdCI6MTU3NTEzNTMzOCwiZXhwIjoxNTc1MjIxNzM4fQ.145vjji6eIC5jEogGoBk_SbcUMCGYTzbrXyWpe8t_iU\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreateUserFailed",
            "description": "<p>an unexpected error occurs in the storage of the user in the data base</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyExistsFailed",
            "description": "<p>the user already have an email storaged in the data base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error creating a new user\n\n{\n   error: \"Registration failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error user already exists\n\n{\n   error: \"User already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/UserController.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users",
    "title": "Update a User",
    "name": "UpdateUser",
    "description": "<p>This endpoint requires a authenticated user. See the Authentication session of this documentation</p>",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a Bearer token of the authorizaded user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email, unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password, not unique</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON Body Example:",
          "content": "{ \n      \"name\": \"Filipe\",\n      \"email\" : \"filipe@pokemail.com\", \n      \"password\": \"123456\", \n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token to the user authentication in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n      \"user\": {\n          \"_id\": \"5de2a86a929ae9080cb9160d\",\n          \"name\": \"Filipe\",\n          \"email\": \"filipe@pokemail.com\",\n          \"__v\": 0\n      },\n      \n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTJhODZhOTI5YWU5MDgwY2I5MTYwZCIsImlhdCI6MTU3NTEzNTMzOCwiZXhwIjoxNTc1MjIxNzM4fQ.145vjji6eIC5jEogGoBk_SbcUMCGYTzbrXyWpe8t_iU\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateUserFailed",
            "description": "<p>an unexpected error occurs in the update of the User</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserDoesNotExistsFailed",
            "description": "<p>the user doesn't have an email in the data base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error updating the user\n\n{\n   error: \"User edit failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error does not exists\n\n{\n   error: \"User doesn't exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/UserController.js",
    "groupTitle": "Users"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "_home_filipe_Documents_Projects_pokemons_backend_docs_main_js",
    "groupTitle": "_home_filipe_Documents_Projects_pokemons_backend_docs_main_js",
    "name": ""
  }
] });
