export const schema1 = {
    "openapi": "3.1.0",
    "servers": [
      {
        "url": "https://balanceplatform-api-test.adyen.com/bcl/v1"
      }
    ],
    "info": {
      "contact": {
        "email": "developer-experience@adyen.com",
        "name": "Adyen Developer Experience team",
        "url": "https://www.adyen.help/hc/en-us/community/topics",
        "x-twitter": "Adyen"
      },
      "description": "Adyen sends notifications through webhooks to inform your system about events that occur in your platform. These events include, for example, when an account holder's capabilities are updated, or when a sweep configuration is created or updated. \nWhen an event occurs, Adyen makes an HTTP POST request to a URL on your server and includes the details of the event in the request body.\n\nYou can use these webhooks to build your implementation. For example, you can use this information to update internal statuses when the status of a capability is changed.",
      "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
      "title": "Configuration webhooks",
      "version": "1",
      "x-apisguru-categories": [
        "payment"
      ],
      "x-logo": {
        "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
      },
      "x-origin": [
        {
          "format": "openapi",
          "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformConfigurationNotification-v1.json",
          "version": "3.1"
        }
      ],
      "x-providerName": "adyen.com",
      "x-publicVersion": true,
      "x-serviceName": "BalancePlatformConfigurationNotification-v1",
      "x-timestamp": "2023-04-18T11:25:58Z"
    },
    "tags": [],
    "components": {
      "examples": {
        "WebhookAck": {
          "summary": "Acknowledge Webhook",
          "value": "[accepted]"
        },
        "post-balancePlatform.accountHolder.created-balancePlatform-accountHolder-created": {
          "description": "Example webhook when an account holder was created",
          "summary": "Account holder created",
          "value": {
            "data": {
              "accountHolder": {
                "capabilities": {
                  "issueCard": {
                    "allowed": false,
                    "enabled": true,
                    "requested": true,
                    "verificationStatus": "pending"
                  },
                  "receiveFromBalanceAccount": {
                    "allowed": false,
                    "enabled": true,
                    "requested": true,
                    "verificationStatus": "pending"
                  },
                  "receiveFromTransferInstrument": {
                    "allowed": false,
                    "enabled": true,
                    "requested": true,
                    "verificationStatus": "pending"
                  },
                  "sendToBalanceAccount": {
                    "allowed": false,
                    "enabled": true,
                    "requested": true,
                    "verificationStatus": "pending"
                  },
                  "sendToTransferInstrument": {
                    "allowed": false,
                    "enabled": true,
                    "requested": true,
                    "verificationStatus": "pending"
                  }
                },
                "contactDetails": {
                  "address": {
                    "city": "Amsterdam",
                    "country": "NL",
                    "houseNumberOrName": "23",
                    "postalCode": "12345",
                    "street": "Teststreet 1"
                  },
                  "email": "test@adyen.com",
                  "phone": {
                    "number": "0612345678",
                    "type": "Mobile"
                  }
                },
                "description": "Shelly Eller",
                "id": "AH32272223222B5CZW6QZ2V34",
                "legalEntityId": "LE43319330319C8AYX89L2V59",
                "reference": "YOUR_REFERENCE-2412C",
                "status": "Active"
              },
              "balancePlatform": "YOUR_BALANCE_PLATFORM"
            },
            "environment": "test",
            "type": "balancePlatform.accountHolder.created"
          }
        },
        "post-balancePlatform.accountHolder.updated-balancePlatform-accountHolder-updated": {
          "description": "Example webhook when an account holder was updated",
          "summary": "Account holder updated",
          "value": {
            "data": {
              "accountHolder": {
                "capabilities": {
                  "sendToTransferInstrument": {
                    "allowed": false,
                    "enabled": true,
                    "problems": [
                      {
                        "entity": {
                          "id": "LE43319330319C8AYX89L2V59",
                          "type": "LegalEntity"
                        },
                        "verificationErrors": [
                          {
                            "code": "2_8037",
                            "message": "No bankStatement available to perform verification.",
                            "remediatingActions": [
                              {
                                "code": "1_703",
                                "message": "Upload a bank statement"
                              }
                            ],
                            "type": "dataMissing"
                          }
                        ]
                      }
                    ],
                    "requested": true,
                    "verificationStatus": "invalid"
                  }
                },
                "description": "Shelly Eller",
                "id": "AH32272223222B5CZW6QZ2V34",
                "legalEntityId": "LE43319330319C8AYX89L2V59",
                "reference": "YOUR_REFERENCE-2412C",
                "status": "Active"
              },
              "balancePlatform": "YOUR_BALANCE_PLATFORM"
            },
            "environment": "test",
            "type": "balancePlatform.accountHolder.updated"
          }
        },
        "post-balancePlatform.balanceAccount.created-balancePlatform-balanceAccount-created": {
          "description": "Example webhook when a balance account was created",
          "summary": "Balance account created",
          "value": {
            "data": {
              "balanceAccount": {
                "accountHolderId": "AH3227C223222B5CZW72CCC73",
                "defaultCurrencyCode": "EUR",
                "id": "BA3227C223222B5CZW72VCC75",
                "status": "Active"
              },
              "balancePlatform": "YOUR_BALANCE_PLATFORM"
            },
            "environment": "test",
            "type": "balancePlatform.balanceAccount.created"
          }
        },
        "post-balancePlatform.balanceAccount.updated-balancePlatform-balanceAccount-updated": {
          "description": "Example webhook when a balance account was updated",
          "summary": "Balance account updated",
          "value": {
            "data": {
              "balanceAccount": {
                "accountHolderId": "AH3227C223222B5CZW72CCC73",
                "defaultCurrencyCode": "EUR",
                "id": "BA3227C223222B5CZW72VCC75",
                "status": "Active",
                "timeZone": "Europe/Amsterdam"
              },
              "balancePlatform": "YOUR_BALANCE_PLATFORM"
            },
            "environment": "test",
            "type": "balancePlatform.balanceAccount.updated"
          }
        },
        "post-balancePlatform.balanceAccountSweep.created-balancePlatform-sweep-created": {
          "description": "Example webhook when a sweep was created",
          "summary": "Sweep created",
          "value": {
            "data": {
              "accountId": "BA3227C223222B5FTD99V8GRS",
              "balancePlatform": "YOUR_BALANCE_PLATFORM",
              "sweep": {
                "counterparty": {
                  "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
                },
                "currency": "EUR",
                "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
                "schedule": {
                  "type": "weekly"
                },
                "status": "active",
                "targetAmount": {
                  "currency": "EUR",
                  "value": 0
                },
                "triggerAmount": {
                  "currency": "EUR",
                  "value": 0
                },
                "type": "push"
              }
            },
            "environment": "test",
            "type": "balancePlatform.balanceAccountSweep.created"
          }
        },
        "post-balancePlatform.balanceAccountSweep.deleted-balancePlatform-sweep-deleted": {
          "description": "Example webhook when a sweep was deleted",
          "summary": "Sweep deleted",
          "value": {
            "data": {
              "accountId": "BA3227C223222B5FTD99V8GRS",
              "balancePlatform": "YOUR_BALANCE_PLATFORM",
              "sweep": {
                "counterparty": {
                  "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
                },
                "currency": "EUR",
                "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
                "schedule": {
                  "type": "weekly"
                },
                "status": "active",
                "targetAmount": {
                  "currency": "EUR",
                  "value": 0
                },
                "triggerAmount": {
                  "currency": "EUR",
                  "value": 0
                },
                "type": "push"
              }
            },
            "environment": "test",
            "type": "balancePlatform.balanceAccountSweep.deleted"
          }
        },
        "post-balancePlatform.balanceAccountSweep.updated-balancePlatform-sweep-updated": {
          "description": "Example webhook when a sweep was updated",
          "summary": "Sweep updated",
          "value": {
            "data": {
              "accountId": "BA3227C223222B5FTD99V8GRS",
              "balancePlatform": "YOUR_BALANCE_PLATFORM",
              "sweep": {
                "counterparty": {
                  "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
                },
                "currency": "EUR",
                "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
                "schedule": {
                  "type": "weekly"
                },
                "status": "inactive",
                "targetAmount": {
                  "currency": "EUR",
                  "value": 0
                },
                "triggerAmount": {
                  "currency": "EUR",
                  "value": 0
                },
                "type": "push"
              }
            },
            "environment": "test",
            "type": "balancePlatform.balanceAccountSweep.created"
          }
        },
        "post-balancePlatform.paymentInstrument.created-balancePlatform-paymentInstrument-created": {
          "description": "Example webhook when a card was created",
          "summary": "Card created",
          "value": {
            "data": {
              "balancePlatform": "YOUR_BALANCE_PLATFORM",
              "paymentInstrument": {
                "balanceAccountId": "BA3227C223222B5CZW72VCC75",
                "card": {
                  "bin": "555544",
                  "brand": "mc",
                  "brandVariant": "mc",
                  "cardholderName": "Carl Holden",
                  "expiration": {
                    "month": "04",
                    "year": "2024"
                  },
                  "formFactor": "virtual",
                  "lastFour": "2732",
                  "number": "4010100000000000000"
                },
                "description": "C. Holden - card",
                "id": "PI32272223222B5CZW7BQ2V3T",
                "issuingCountryCode": "GB",
                "status": "Active",
                "type": "card"
              }
            },
            "environment": "test",
            "type": "balancePlatform.paymentInstrument.created"
          }
        },
        "post-balancePlatform.paymentInstrument.updated-balancePlatform-paymentInstrument-updated": {
          "description": "Example webhook when a card was updated",
          "summary": "Card updated",
          "value": {
            "data": {
              "balancePlatform": "YOUR_BALANCE_PLATFORM",
              "paymentInstrument": {
                "balanceAccountId": "BA3227C223222B5CZW72VCC75",
                "card": {
                  "bin": "555544",
                  "brand": "mc",
                  "brandVariant": "mc",
                  "cardholderName": "Carl Holden",
                  "expiration": {
                    "month": "04",
                    "year": "2024"
                  },
                  "formFactor": "virtual",
                  "lastFour": "2732",
                  "number": "4010100000000000000"
                },
                "description": "C. Holden - card",
                "id": "PI32272223222B5CZW7BQ2V3T",
                "issuingCountryCode": "GB",
                "status": "Suspended",
                "type": "card"
              }
            },
            "environment": "test",
            "type": "balancePlatform.paymentInstrument.updated"
          }
        }
      },
      "schemas": {
        "AccountHolder": {
          "properties": {
            "balancePlatform": {
              "description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.",
              "type": "string"
            },
            "capabilities": {
              "additionalProperties": {
                "$ref": "#/components/schemas/AccountHolderCapability"
              },
              "description": "Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.",
              "type": "object"
            },
            "contactDetails": {
              "$ref": "#/components/schemas/ContactDetails",
              "deprecated": true,
              "description": "Contact details of the account holder."
            },
            "description": {
              "description": "Your description for the account holder, maximum 300 characters.",
              "maxLength": 300,
              "type": "string"
            },
            "id": {
              "description": "The unique identifier of the account holder.",
              "type": "string"
            },
            "legalEntityId": {
              "description": "The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.",
              "type": "string"
            },
            "primaryBalanceAccount": {
              "description": "The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.",
              "type": "string"
            },
            "reference": {
              "description": "Your reference for the account holder, maximum 150 characters.",
              "maxLength": 150,
              "type": "string"
            },
            "status": {
              "description": "The status of the account holder.\n\nPossible values: \n\n * **Active**: The account holder is active. This is the default status when creating an account holder. \n\n * **Inactive (Deprecated)**: The account holder is temporarily inactive due to missing KYC details. You can set the account back to active by providing the missing KYC details. \n\n * **Suspended**: The account holder is permanently deactivated by Adyen. This action cannot be undone. \n\n* **Closed**: The account holder is permanently deactivated by you. This action cannot be undone.",
              "enum": [
                "Active",
                "Closed",
                "Inactive",
                "Suspended"
              ],
              "type": "string"
            },
            "timeZone": {
              "description": "The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
              "type": "string"
            }
          },
          "required": [
            "legalEntityId",
            "id"
          ],
          "type": "object"
        },
        "AccountHolderCapability": {
          "properties": {
            "allowed": {
              "description": "Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.",
              "type": "boolean"
            },
            "allowedLevel": {
              "description": "The capability level that is allowed for the account holder.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
              "enum": [
                "high",
                "low",
                "medium",
                "notApplicable"
              ],
              "type": "string"
            },
            "allowedSettings": {
              "$ref": "#/components/schemas/JSONObject",
              "description": "A JSON object containing the settings that are allowed for the account holder."
            },
            "enabled": {
              "description": "Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.",
              "type": "boolean"
            },
            "problems": {
              "description": "Contains verification errors and the actions that you can take to resolve them.",
              "items": {
                "$ref": "#/components/schemas/CapabilityProblem"
              },
              "type": "array"
            },
            "requested": {
              "description": "Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.",
              "type": "boolean"
            },
            "requestedLevel": {
              "description": "The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
              "enum": [
                "high",
                "low",
                "medium",
                "notApplicable"
              ],
              "type": "string"
            },
            "requestedSettings": {
              "$ref": "#/components/schemas/JSONObject",
              "description": "A JSON object containing the settings that were requested for the account holder."
            },
            "transferInstruments": {
              "description": "Contains the status of the transfer instruments associated with this capability. ",
              "items": {
                "$ref": "#/components/schemas/AccountSupportingEntityCapability"
              },
              "type": "array"
            },
            "verificationStatus": {
              "description": "The status of the verification checks for the capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n",
              "enum": [
                "invalid",
                "pending",
                "rejected",
                "valid"
              ],
              "type": "string"
            }
          },
          "type": "object"
        },
        "AccountHolderNotificationData": {
          "properties": {
            "accountHolder": {
              "$ref": "#/components/schemas/AccountHolder",
              "description": "Contains information about the account holder resource that triggered the event."
            },
            "balancePlatform": {
              "description": "The unique identifier of the balance platform.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "AccountHolderNotificationRequest": {
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AccountHolderNotificationData",
              "description": "Contains event details."
            },
            "environment": {
              "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
              "type": "string"
            },
            "type": {
              "description": "Type of notification.",
              "enum": [
                "balancePlatform.accountHolder.updated",
                "balancePlatform.accountHolder.created"
              ],
              "type": "string"
            }
          },
          "required": [
            "environment",
            "type",
            "data"
          ],
          "type": "object"
        },
        "AccountSupportingEntityCapability": {
          "properties": {
            "allowed": {
              "description": "Indicates whether the supporting entity capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.",
              "type": "boolean"
            },
            "allowedLevel": {
              "description": "The capability level that is allowed for the account holder.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
              "enum": [
                "high",
                "low",
                "medium",
                "notApplicable"
              ],
              "type": "string"
            },
            "enabled": {
              "description": "Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.",
              "type": "boolean"
            },
            "id": {
              "description": "The ID of the supporting entity.",
              "type": "string"
            },
            "requested": {
              "description": "Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.",
              "type": "boolean"
            },
            "requestedLevel": {
              "description": "The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
              "enum": [
                "high",
                "low",
                "medium",
                "notApplicable"
              ],
              "type": "string"
            },
            "verificationStatus": {
              "description": "The status of the verification checks for the supporting entity capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n",
              "enum": [
                "invalid",
                "pending",
                "rejected",
                "valid"
              ],
              "type": "string"
            }
          },
          "type": "object"
        },
        "Address": {
          "properties": {
            "city": {
              "description": "The name of the city. Maximum length: 3000 characters.",
              "maxLength": 3000,
              "type": "string"
            },
            "country": {
              "description": "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.\n> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
              "type": "string"
            },
            "houseNumberOrName": {
              "description": "The number or name of the house. Maximum length: 3000 characters.",
              "maxLength": 3000,
              "type": "string"
            },
            "postalCode": {
              "description": "A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.",
              "type": "string"
            },
            "stateOrProvince": {
              "description": "The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n> Required for the US and Canada.",
              "type": "string"
            },
            "street": {
              "description": "The name of the street. Maximum length: 3000 characters.\n> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.",
              "maxLength": 3000,
              "type": "string"
            }
          },
          "required": [
            "street",
            "houseNumberOrName",
            "city",
            "postalCode",
            "country"
          ],
          "type": "object"
        },
        "Amount": {
          "properties": {
            "currency": {
              "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).",
              "maxLength": 3,
              "minLength": 3,
              "type": "string"
            },
            "value": {
              "description": "The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
              "format": "int64",
              "type": "integer"
            }
          },
          "required": [
            "value",
            "currency"
          ],
          "type": "object"
        },
        "Authentication": {
          "properties": {
            "email": {
              "description": "The email address where the one-time password (OTP) is sent.",
              "type": "string"
            },
            "password": {
              "description": "The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.\n\n* Characters between **a-z**, **A-Z**, and **0-9**\n\n* Special characters: **äöüßÄÖÜ+-*/ç%()=?!~#'\",;:$&àùòâôûáúó**",
              "maxLength": 30,
              "minLength": 1,
              "type": "string"
            },
            "phone": {
              "$ref": "#/components/schemas/Phone",
              "description": "The phone number where the one-time password (OTP) is sent.\n\nThis object must have:\n\n* A `type` set to **mobile**.\n\n* A `number` with a valid country code.\n\n* A `number` with more than 4 digits, excluding the country code.\n\n>Make sure to verify that the card user owns the phone number."
            }
          },
          "type": "object"
        },
        "Balance": {
          "properties": {
            "available": {
              "description": "The remaining amount available for spending.",
              "format": "int64",
              "type": "integer"
            },
            "balance": {
              "description": "The total amount in the balance.",
              "format": "int64",
              "type": "integer"
            },
            "currency": {
              "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.",
              "type": "string"
            },
            "reserved": {
              "description": "The amount reserved for payments that have been authorised, but have not been captured yet.",
              "format": "int64",
              "type": "integer"
            }
          },
          "required": [
            "currency",
            "balance",
            "reserved",
            "available"
          ],
          "type": "object"
        },
        "BalanceAccount": {
          "properties": {
            "accountHolderId": {
              "description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
              "type": "string"
            },
            "balances": {
              "description": "List of balances with the amount and currency.",
              "items": {
                "$ref": "#/components/schemas/Balance"
              },
              "type": "array"
            },
            "defaultCurrencyCode": {
              "description": "The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account.\nThe default value is **EUR**.",
              "type": "string"
            },
            "description": {
              "description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
              "maxLength": 300,
              "type": "string"
            },
            "id": {
              "description": "The unique identifier of the balance account.",
              "type": "string"
            },
            "paymentInstruments": {
              "description": "List of [payment instruments](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments) associated with the balance account.",
              "items": {
                "$ref": "#/components/schemas/PaymentInstrumentReference"
              },
              "type": "array"
            },
            "reference": {
              "description": "Your reference for the balance account, maximum 150 characters.",
              "maxLength": 150,
              "type": "string"
            },
            "status": {
              "description": "The status of the balance account, set to **Active** by default. \n",
              "enum": [
                "Active",
                "Closed",
                "Inactive",
                "Suspended"
              ],
              "type": "string"
            },
            "sweepConfigurations": {
              "additionalProperties": {
                "$ref": "#/components/schemas/SweepConfiguration"
              },
              "description": "Contains key-value pairs that specify configurations for balance sweeps per currency code. A sweep pulls in or pushes out funds based on a defined schedule, amount, and a source (for pulling funds) or a destination (for pushing funds).\n\nThe key must be a three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**. The value must be an object containing the sweep configuration.",
              "type": "object"
            },
            "timeZone": {
              "description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
              "type": "string"
            }
          },
          "required": [
            "accountHolderId",
            "id"
          ],
          "type": "object"
        },
        "BalanceAccountNotificationData": {
          "properties": {
            "balanceAccount": {
              "$ref": "#/components/schemas/BalanceAccount"
            },
            "balancePlatform": {
              "description": "The unique identifier of the balance platform.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "BalanceAccountNotificationRequest": {
          "properties": {
            "data": {
              "$ref": "#/components/schemas/BalanceAccountNotificationData",
              "description": "Contains event details."
            },
            "environment": {
              "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
              "type": "string"
            },
            "type": {
              "description": "Type of notification.",
              "enum": [
                "balancePlatform.balanceAccount.updated",
                "balancePlatform.balanceAccount.created"
              ],
              "type": "string"
            }
          },
          "required": [
            "environment",
            "type",
            "data"
          ],
          "type": "object"
        },
        "BalancePlatformNotificationResponse": {
          "properties": {
            "notificationResponse": {
              "description": "Respond with **HTTP 200 OK** and `[accepted]` in the response body to [accept the webhook](https://docs.adyen.com/development-resources/webhooks#accept-notifications).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "BulkAddress": {
          "properties": {
            "city": {
              "description": "The name of the city.",
              "type": "string"
            },
            "company": {
              "description": "The name of the company.",
              "type": "string"
            },
            "country": {
              "description": "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.",
              "type": "string"
            },
            "email": {
              "description": "The email address.",
              "type": "string"
            },
            "houseNumberOrName": {
              "description": "The house number or name.",
              "type": "string"
            },
            "mobile": {
              "description": "The full telephone number.",
              "type": "string"
            },
            "postalCode": {
              "description": "The postal code.\n\nMaximum length:\n\n* 5 digits for addresses in the US.\n\n* 10 characters for all other countries.",
              "type": "string"
            },
            "stateOrProvince": {
              "description": "The two-letter ISO 3166-2 state or province code.\n\nMaximum length: 2 characters for addresses in the US.",
              "type": "string"
            },
            "street": {
              "description": "The streetname of the house.",
              "type": "string"
            }
          },
          "required": [
            "country"
          ],
          "type": "object"
        },
        "CapabilityProblem": {
          "type": "object"
        },
        "Card": {
          "properties": {
            "authentication": {
              "$ref": "#/components/schemas/Authentication",
              "description": "Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information."
            },
            "bin": {
              "description": "The bank identification number (BIN) of the card number.",
              "type": "string"
            },
            "brand": {
              "description": "The brand of the physical or the virtual card.\nPossible values: **visa**, **mc**.",
              "type": "string"
            },
            "brandVariant": {
              "description": "The brand variant of the physical or the virtual card.\n>Contact your Adyen Implementation Manager to get the values that are relevant to your integration. Examples: **visadebit**, **mcprepaid**.",
              "type": "string"
            },
            "cardholderName": {
              "description": "The name of the cardholder.\n Maximum length: 26 characters.",
              "maxLength": 26,
              "type": "string"
            },
            "configuration": {
              "$ref": "#/components/schemas/CardConfiguration",
              "description": "Settings required when creating a physical or a virtual card. \n\nReach out to your Adyen contact to get the values that you can send in this object."
            },
            "cvc": {
              "description": "The CVC2 value of the card.\n> The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards.",
              "type": "string"
            },
            "deliveryContact": {
              "$ref": "#/components/schemas/Contact",
              "description": "The delivery contact (name and address) for physical card delivery."
            },
            "expiration": {
              "$ref": "#/components/schemas/Expiry",
              "description": "The expiration date of the card."
            },
            "formFactor": {
              "description": "The form factor of the card.\nPossible values: **virtual**, **physical**.",
              "enum": [
                "physical",
                "unknown",
                "virtual"
              ],
              "type": "string"
            },
            "lastFour": {
              "description": "Last last four digits of the card number.",
              "type": "string"
            },
            "number": {
              "description": "The primary account number (PAN) of the card.\n> The PAN is masked by default and returned only for single-use virtual cards.",
              "type": "string"
            }
          },
          "required": [
            "formFactor",
            "cardholderName",
            "brand",
            "brandVariant",
            "number"
          ],
          "type": "object"
        },
        "CardConfiguration": {
          "properties": {
            "activation": {
              "description": "Overrides the activation label design ID defined in the `configurationProfileId`. The activation label is attached to the card and contains the activation instructions.",
              "type": "string"
            },
            "activationUrl": {
              "description": "Your app's URL, if you want to activate cards through your app. For example, **my-app://ref1236a7d**. A QR code is created based on this URL, and is included in the carrier. Before you use this field, reach out to your Adyen contact to set up the QR code process. \n\nMaximum length: 255 characters.",
              "maxLength": 255,
              "type": "string"
            },
            "bulkAddress": {
              "$ref": "#/components/schemas/BulkAddress",
              "description": "Overrides the shipment bulk address defined in the `configurationProfileId`."
            },
            "cardImageId": {
              "description": "The ID of the card image. This is the image that will be printed on the full front of the card.",
              "type": "string"
            },
            "carrier": {
              "description": "Overrides the carrier design ID defined in the `configurationProfileId`. The carrier is the letter or packaging to which the card is attached.",
              "type": "string"
            },
            "carrierImageId": {
              "description": "The ID of the carrier image. This is the image that will printed on the letter to which the card is attached.",
              "type": "string"
            },
            "configurationProfileId": {
              "description": "The ID of the card configuration profile that contains the settings of the card. For example, the envelope and PIN mailer designs or the logistics company handling the shipment. All the settings in the profile are applied to the card, unless you provide other fields to override them.\n\nFor example, send the `shipmentMethod` to override the logistics company defined in the card configuration profile.",
              "type": "string"
            },
            "currency": {
              "description": "The three-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the card. For example, **EUR**.",
              "type": "string"
            },
            "envelope": {
              "description": "Overrides the envelope design ID defined in the `configurationProfileId`. ",
              "type": "string"
            },
            "insert": {
              "description": "Overrides the insert design ID defined in the `configurationProfileId`. An insert is any additional material, such as marketing materials, that are shipped together with the card.",
              "type": "string"
            },
            "language": {
              "description": "The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code of the card. For example, **en**.",
              "type": "string"
            },
            "logoImageId": {
              "description": "The ID of the logo image. This is the image that will be printed on the partial front of the card, such as a logo on the upper right corner.",
              "type": "string"
            },
            "pinMailer": {
              "description": "Overrides the PIN mailer design ID defined in the `configurationProfileId`. The PIN mailer is the letter on which the PIN is printed.",
              "type": "string"
            },
            "shipmentMethod": {
              "description": "Overrides the logistics company defined in the `configurationProfileId`.",
              "type": "string"
            }
          },
          "required": [
            "configurationProfileId"
          ],
          "type": "object"
        },
        "CardOrderItem": {
          "properties": {
            "balancePlatform": {
              "description": "The unique identifier of the balance platform.",
              "type": "string"
            },
            "card": {
              "$ref": "#/components/schemas/CardOrderItemDeliveryStatus",
              "description": "Card delivery status."
            },
            "cardOrderItemReference": {
              "description": "The unique identifier of the card order.",
              "type": "string"
            },
            "creationDate": {
              "description": "The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.",
              "format": "date-time",
              "type": "string"
            },
            "id": {
              "description": "The ID of the resource.",
              "type": "string"
            },
            "paymentInstrumentReference": {
              "description": "The unique identifier of the payment instrument related to the card order.",
              "type": "string"
            },
            "pin": {
              "$ref": "#/components/schemas/CardOrderItemDeliveryStatus",
              "description": "PIN delivery status."
            },
            "shippingMethod": {
              "description": "Shipping method used to deliver the card or the PIN.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "CardOrderItemDeliveryStatus": {
          "properties": {
            "status": {
              "description": "Status of the delivery.",
              "enum": [
                "created",
                "delivered",
                "processing",
                "produced",
                "rejected",
                "shipped",
                "unknown"
              ],
              "type": "string"
            },
            "statusError": {
              "description": "Error status, if any.",
              "type": "string"
            },
            "statusErrorMessage": {
              "description": "Error message, if any.",
              "type": "string"
            },
            "trackingNumber": {
              "description": "Tracking number of the delivery.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "CardOrderNotificationRequest": {
          "properties": {
            "data": {
              "$ref": "#/components/schemas/CardOrderItem",
              "description": "Contains event details."
            },
            "environment": {
              "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
              "type": "string"
            },
            "type": {
              "description": "Type of notification.",
              "enum": [
                "balancePlatform.cardorder.created",
                "balancePlatform.cardorder.updated"
              ],
              "type": "string"
            }
          },
          "required": [
            "environment",
            "type",
            "data"
          ],
          "type": "object"
        },
        "Contact": {
          "properties": {
            "address": {
              "$ref": "#/components/schemas/Address",
              "description": "The address of the contact."
            },
            "email": {
              "description": "The e-mail address of the contact.",
              "type": "string"
            },
            "fullPhoneNumber": {
              "description": "The phone number of the contact provided as a single string.  It will be handled as a landline phone.\n**Examples:** \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\"",
              "type": "string"
            },
            "name": {
              "$ref": "#/components/schemas/Name",
              "description": "The name of the contact."
            },
            "personalData": {
              "$ref": "#/components/schemas/PersonalData",
              "description": "Personal data of the contact."
            },
            "phoneNumber": {
              "$ref": "#/components/schemas/PhoneNumber",
              "description": "The phone number of the contact."
            },
            "webAddress": {
              "description": "The URL of the website of the contact.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "ContactDetails": {
          "properties": {
            "address": {
              "$ref": "#/components/schemas/Address",
              "description": "The address of the account holder."
            },
            "email": {
              "description": "The email address of the account holder.",
              "type": "string"
            },
            "phone": {
              "$ref": "#/components/schemas/Phone",
              "description": "The phone number of the account holder."
            },
            "webAddress": {
              "description": "The URL of the account holder's website.",
              "type": "string"
            }
          },
          "required": [
            "email",
            "phone",
            "address"
          ],
          "type": "object"
        },
        "CronSweepSchedule": {
          "additionalProperties": false,
          "properties": {
            "cronExpression": {
              "description": "A [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that is used to set the sweep schedule. The schedule uses the time zone of the balance account. For example, **30 17 * * MON** schedules a sweep every Monday at 17:30.\n\nThe expression must have five values separated by a single space in the following order:\n\n* Minute: **0-59**\n\n* Hour: **0-23**\n\n* Day of the month: **1-31**\n\n* Month: **1-12** or **JAN-DEC**\n\n* Day of the week: **0-7** (0 and 7 are Sunday) or **MON-SUN**.\n\nThe following non-standard characters are supported: **&ast;**, **L**, **#**, **W** and **/**. See [crontab guru](https://crontab.guru/) for more examples.",
              "type": "string"
            },
            "type": {
              "description": "The schedule type.\n\nPossible values:\n\n* **cron**: push out funds based on a cron expression.\n\n* **daily**: push out funds daily at 07:00 AM CET.\n\n* **weekly**: push out funds every Monday at 07:00 AM CET.\n\n* **monthly**: push out funds every first of the month at 07:00 AM CET.\n\n* **balance**: pull in funds instantly if the balance is less than or equal to the `triggerAmount`. You can only use this for sweeps of `type` **pull** and when the source is a `merchantAccount` or `transferInstrument`.",
              "enum": [
                "daily",
                "weekly",
                "monthly",
                "balance",
                "cron"
              ],
              "type": "string"
            }
          },
          "required": [
            "cronExpression"
          ],
          "type": "object"
        },
        "Expiry": {
          "properties": {
            "month": {
              "description": "The month in which the card will expire.",
              "type": "string"
            },
            "year": {
              "description": "The year in which the card will expire.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "IbanAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "iban": {
              "description": "The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.",
              "type": "string"
            },
            "type": {
              "default": "iban",
              "description": "**iban**",
              "enum": [
                "iban"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "iban"
          ],
          "type": "object"
        },
        "JSONObject": {
          "properties": {
            "paths": {
              "items": {
                "$ref": "#/components/schemas/JSONPath"
              },
              "type": "array"
            },
            "rootPath": {
              "$ref": "#/components/schemas/JSONPath"
            }
          },
          "type": "object"
        },
        "JSONPath": {
          "properties": {
            "content": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          "type": "object"
        },
        "Name": {
          "properties": {
            "firstName": {
              "description": "The first name.",
              "type": "string"
            },
            "lastName": {
              "description": "The last name.",
              "type": "string"
            }
          },
          "required": [
            "firstName",
            "lastName"
          ],
          "type": "object"
        },
        "PaymentInstrument": {
          "properties": {
            "balanceAccountId": {
              "description": "The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.",
              "type": "string"
            },
            "bankAccount": {
              "description": "Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.",
              "oneOf": [
                {
                  "$ref": "#/components/schemas/IbanAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/USLocalAccountIdentification"
                }
              ]
            },
            "card": {
              "$ref": "#/components/schemas/Card",
              "description": "Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**."
            },
            "description": {
              "description": "Your description for the payment instrument, maximum 300 characters.",
              "maxLength": 300,
              "type": "string"
            },
            "id": {
              "description": "The unique identifier of the payment instrument.",
              "type": "string"
            },
            "issuingCountryCode": {
              "description": "The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.",
              "type": "string"
            },
            "paymentInstrumentGroupId": {
              "description": "The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.",
              "type": "string"
            },
            "reference": {
              "description": "Your reference for the payment instrument, maximum 150 characters.",
              "maxLength": 150,
              "type": "string"
            },
            "status": {
              "description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **Active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **Requested**.\n\nPossible values: \n\n * **Active**:  The payment instrument is active and can be used to make payments. \n\n * **Requested**: The payment instrument has been requested. This state is applicable for physical cards. \n\n* **Inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **Suspended**: The payment instrument is temporarily suspended and cannot be used to make payments. \n\n * **Closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n* **Stolen** \n\n * **Lost**\n\n ",
              "enum": [
                "Active",
                "Closed",
                "Inactive",
                "Lost",
                "Requested",
                "Stolen",
                "Suspended",
                "blocked",
                "discarded"
              ],
              "type": "string",
              "x-enum": [
                {
                  "description": "The payment instrument has been requested. This state is applicable when creating physical cards.",
                  "value": "Requested"
                },
                {
                  "description": "The payment instrument is active and can be used to make payments.",
                  "value": "Active"
                },
                {
                  "description": "The payment instrument is inactive and cannot be used to make payments.",
                  "value": "Inactive"
                },
                {
                  "description": "The payment instrument is temporarily suspended and cannot be used to make payments.",
                  "value": "Suspended"
                },
                {
                  "description": "The payment instrument is permanently closed. This action cannot be undone.",
                  "value": "Closed"
                },
                {
                  "description": "The payment instrument is suspended. Either because it was stolen or lost.",
                  "value": "blocked"
                },
                {
                  "description": "The payment instrument is permanently closed. This action cannot be undone.",
                  "value": "discarded"
                }
              ]
            },
            "type": {
              "description": "Type of payment instrument.\n\nPossible value: **card**, **bankAccount**. ",
              "enum": [
                "bankAccount",
                "card"
              ],
              "type": "string"
            }
          },
          "required": [
            "balanceAccountId",
            "issuingCountryCode",
            "type",
            "id"
          ],
          "type": "object"
        },
        "PaymentInstrumentNotificationData": {
          "properties": {
            "balancePlatform": {
              "description": "The unique identifier of the balance platform.",
              "type": "string"
            },
            "paymentInstrument": {
              "$ref": "#/components/schemas/PaymentInstrument",
              "description": "Contains information about the payment instrument resource that triggered the event."
            }
          },
          "type": "object"
        },
        "PaymentInstrumentReference": {
          "properties": {
            "id": {
              "description": "The unique identifier of the payment instrument.",
              "type": "string"
            }
          },
          "required": [
            "id"
          ],
          "type": "object"
        },
        "PaymentNotificationRequest": {
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PaymentInstrumentNotificationData",
              "description": "Contains event details."
            },
            "environment": {
              "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
              "type": "string"
            },
            "type": {
              "description": "Type of notification.",
              "enum": [
                "balancePlatform.paymentInstrument.created",
                "balancePlatform.paymentInstrument.updated"
              ],
              "type": "string"
            }
          },
          "required": [
            "environment",
            "type",
            "data"
          ],
          "type": "object"
        },
        "PersonalData": {
          "properties": {
            "dateOfBirth": {
              "description": "The date of birth of the person.\nThe date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).",
              "type": "string"
            },
            "idNumber": {
              "description": "An ID number of the person.",
              "type": "string"
            },
            "nationality": {
              "description": "The nationality of the person represented by a two-character country code.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').",
              "maxLength": 2,
              "minLength": 2,
              "type": "string"
            }
          },
          "type": "object"
        },
        "Phone": {
          "properties": {
            "number": {
              "description": "The full phone number provided as a single string. \nFor example, **\"0031 6 11 22 33 44\"**, **\"+316/1122-3344\"**, \n\n or **\"(0031) 611223344\"**.",
              "type": "string"
            },
            "type": {
              "description": "Type of phone number.\nPossible values: \n**Landline**, **Mobile**.\n",
              "enum": [
                "Landline",
                "Mobile"
              ],
              "type": "string"
            }
          },
          "required": [
            "number",
            "type"
          ],
          "type": "object"
        },
        "PhoneNumber": {
          "properties": {
            "phoneCountryCode": {
              "description": "The two-character ISO-3166-1 alpha-2 country code of the phone number.\nFor example, **US** or **NL**.",
              "type": "string"
            },
            "phoneNumber": {
              "description": "The phone number.\nThe inclusion of the phone number country code is not necessary.",
              "type": "string"
            },
            "phoneType": {
              "description": "The type of the phone number.\nPossible values: **Landline**, **Mobile**, **SIP**, **Fax**.",
              "enum": [
                "Fax",
                "Landline",
                "Mobile",
                "SIP"
              ],
              "type": "string"
            }
          },
          "type": "object"
        },
        "Resource": {
          "properties": {
            "balancePlatform": {
              "description": "The unique identifier of the balance platform.",
              "type": "string"
            },
            "creationDate": {
              "description": "The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.",
              "format": "date-time",
              "type": "string"
            },
            "id": {
              "description": "The ID of the resource.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "SweepConfiguration": {
          "properties": {
            "balanceAccountId": {
              "description": "The unique identifier of the destination or source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).\n\n You can only use this for periodic sweep schedules such as `schedule.type` **daily** or **monthly**.",
              "type": "string"
            },
            "id": {
              "description": "The unique identifier of the sweep.",
              "type": "string"
            },
            "merchantAccount": {
              "description": "The merchant account that will be the source of funds. You can only use this if you are processing payments with Adyen. This can only be used for sweeps of `type` **pull** and `schedule.type` **balance**.",
              "type": "string"
            },
            "schedule": {
              "description": "The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.",
              "oneOf": [
                {
                  "$ref": "#/components/schemas/CronSweepSchedule"
                },
                {
                  "$ref": "#/components/schemas/SweepSchedule"
                }
              ]
            },
            "status": {
              "description": "The status of the sweep. If not provided, by default, this is set to **active**.\n\nPossible values: \n\n * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. \n\n * **inactive**: the sweep is disabled and cannot be triggered. \n\n",
              "enum": [
                "active",
                "inactive"
              ],
              "type": "string",
              "x-enum": [
                {
                  "description": "The sweep is enabled and funds will be pulled in or pushed out based on the defined configuration",
                  "value": "active"
                },
                {
                  "description": "The sweep is disabled and cannot be triggered.",
                  "value": "inactive"
                }
              ]
            },
            "sweepAmount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both."
            },
            "targetAmount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both."
            },
            "transferInstrumentId": {
              "description": "The unique identifier of the destination or source [transfer instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/transferInstruments__resParam_id).\n\nYou can also use this in combination with a `merchantAccount` and a `type` **pull** to start a direct debit request from the source transfer instrument. To use this feature, reach out to your Adyen contact.",
              "type": "string"
            },
            "triggerAmount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.\n\n* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.\n\n* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account."
            },
            "type": {
              "default": "push",
              "description": "The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.\n\nPossible values:\n\n * **push**: _push out funds_ to a destination balance account or transfer instrument.\n\n * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.",
              "enum": [
                "pull",
                "push"
              ],
              "type": "string"
            }
          },
          "required": [
            "id",
            "schedule"
          ],
          "type": "object"
        },
        "SweepConfigurationNotificationData": {
          "properties": {
            "accountId": {
              "description": "The unique identifier of the balance account for which the sweep was configured.",
              "type": "string"
            },
            "balancePlatform": {
              "description": "The unique identifier of the balance platform.",
              "type": "string"
            },
            "sweep": {
              "$ref": "#/components/schemas/SweepConfigurationV2",
              "description": "Contains information about the sweep resource that triggered the event."
            }
          },
          "type": "object"
        },
        "SweepConfigurationNotificationRequest": {
          "properties": {
            "data": {
              "$ref": "#/components/schemas/SweepConfigurationNotificationData",
              "description": "Contains event details."
            },
            "environment": {
              "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
              "type": "string"
            },
            "type": {
              "description": "Type of notification.",
              "enum": [
                "balancePlatform.balanceAccountSweep.created",
                "balancePlatform.balanceAccountSweep.updated",
                "balancePlatform.balanceAccountSweep.deleted"
              ],
              "type": "string"
            }
          },
          "required": [
            "environment",
            "type",
            "data"
          ],
          "type": "object"
        },
        "SweepConfigurationV2": {
          "properties": {
            "counterparty": {
              "$ref": "#/components/schemas/SweepCounterparty",
              "description": "The destination or the source of the funds, depending on the `type`.\n\nEither a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required."
            },
            "currency": {
              "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.\n\nThe sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).",
              "type": "string"
            },
            "description": {
              "description": "The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.\n\nIf the message is longer after replacing placeholders, the message will be cut off at 140 characters.",
              "type": "string"
            },
            "id": {
              "description": "The unique identifier of the sweep.",
              "type": "string"
            },
            "reason": {
              "description": "The reason for disabling the sweep.",
              "enum": [
                "amountLimitExceeded",
                "approved",
                "counterpartyAccountBlocked",
                "counterpartyAccountClosed",
                "counterpartyAccountNotFound",
                "counterpartyAddressRequired",
                "counterpartyBankTimedOut",
                "counterpartyBankUnavailable",
                "error",
                "notEnoughBalance",
                "refusedByCounterpartyBank",
                "routeNotFound",
                "unknown"
              ],
              "type": "string"
            },
            "schedule": {
              "description": "The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.",
              "oneOf": [
                {
                  "$ref": "#/components/schemas/CronSweepSchedule"
                },
                {
                  "$ref": "#/components/schemas/SweepSchedule"
                }
              ]
            },
            "status": {
              "description": "The status of the sweep. If not provided, by default, this is set to **active**.\n\nPossible values: \n\n * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. \n\n * **inactive**: the sweep is disabled and cannot be triggered. \n\n",
              "enum": [
                "active",
                "inactive"
              ],
              "type": "string",
              "x-enum": [
                {
                  "description": "The sweep is enabled and funds will be pulled in or pushed out based on the defined configuration",
                  "value": "active"
                },
                {
                  "description": "The sweep is disabled and cannot be triggered.",
                  "value": "inactive"
                }
              ]
            },
            "sweepAmount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both."
            },
            "targetAmount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both."
            },
            "triggerAmount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.\n\n* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.\n\n* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account."
            },
            "type": {
              "default": "push",
              "description": "The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.\n\nPossible values:\n\n * **push**: _push out funds_ to a destination balance account or transfer instrument.\n\n * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.",
              "enum": [
                "pull",
                "push"
              ],
              "type": "string"
            }
          },
          "required": [
            "id",
            "schedule",
            "currency",
            "counterparty"
          ],
          "type": "object"
        },
        "SweepCounterparty": {
          "properties": {
            "balanceAccountId": {
              "description": "The unique identifier of the destination or source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).\n\n You can only use this for periodic sweep schedules such as `schedule.type` **daily** or **monthly**.",
              "type": "string"
            },
            "merchantAccount": {
              "description": "The merchant account that will be the source of funds, if you are processing payments with Adyen. You can only use this with sweeps of `type` **pull** and `schedule.type` **balance**.",
              "type": "string"
            },
            "transferInstrumentId": {
              "description": "The unique identifier of the destination or source [transfer instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/transferInstruments__resParam_id).\n\nYou can also use this in combination with a `merchantAccount` and a `type` **pull** to start a direct debit request from the source transfer instrument. To use this feature, reach out to your Adyen contact.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "SweepSchedule": {
          "additionalProperties": false,
          "properties": {
            "type": {
              "description": "The schedule type.\n\nPossible values:\n\n* **cron**: push out funds based on a cron expression.\n\n* **daily**: push out funds daily at 07:00 AM CET.\n\n* **weekly**: push out funds every Monday at 07:00 AM CET.\n\n* **monthly**: push out funds every first of the month at 07:00 AM CET.\n\n* **balance**: pull in funds instantly if the balance is less than or equal to the `triggerAmount`. You can only use this for sweeps of `type` **pull** and when the source is a `merchantAccount` or `transferInstrument`.",
              "enum": [
                "daily",
                "weekly",
                "monthly",
                "balance",
                "cron"
              ],
              "type": "string"
            }
          },
          "type": "object"
        },
        "USLocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The bank account number, without separators or whitespace.",
              "maxLength": 18,
              "minLength": 2,
              "type": "string"
            },
            "accountType": {
              "default": "checking",
              "description": "The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.",
              "enum": [
                "checking",
                "savings"
              ],
              "type": "string"
            },
            "routingNumber": {
              "description": "The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.",
              "maxLength": 9,
              "minLength": 9,
              "type": "string"
            },
            "type": {
              "default": "usLocal",
              "description": "**usLocal**",
              "enum": [
                "usLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber",
            "routingNumber"
          ],
          "type": "object"
        }
      },
      "securitySchemes": {
        "ApiKeyAuth": {
          "in": "header",
          "name": "X-API-Key",
          "type": "apiKey"
        },
        "BasicAuth": {
          "scheme": "basic",
          "type": "http"
        }
      }
    },
    "webhooks": {
      "balancePlatform.accountHolder.created": {
        "post": {
          "description": "Adyen sends this webhook when you successfully [create an account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders).",
          "operationId": "post-balancePlatform.accountHolder.created",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "balancePlatform-accountHolder-created": {
                    "$ref": "#/components/examples/post-balancePlatform.accountHolder.created-balancePlatform-accountHolder-created"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/AccountHolderNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "balancePlatform-accountHolder-created": {
                      "$ref": "#/components/examples/WebhookAck"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Account holder created",
          "tags": [
            "Account holder"
          ],
          "x-groupName": "Account holder",
          "x-methodName": "accountHolderCreated",
          "x-sortIndex": 1
        }
      },
      "balancePlatform.accountHolder.updated": {
        "post": {
          "description": "Adyen sends this webhook when you successfully [update an account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/accountHolders/_id_).",
          "operationId": "post-balancePlatform.accountHolder.updated",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "balancePlatform-accountHolder-updated": {
                    "$ref": "#/components/examples/post-balancePlatform.accountHolder.updated-balancePlatform-accountHolder-updated"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/AccountHolderNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "balancePlatform-accountHolder-updated": {
                      "$ref": "#/components/examples/WebhookAck"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Account holder updated",
          "tags": [
            "Account holder"
          ],
          "x-groupName": "Account holder",
          "x-methodName": "accountHolderUpdated",
          "x-sortIndex": 2
        }
      },
      "balancePlatform.balanceAccount.created": {
        "post": {
          "description": "Adyen sends this webhook when you successfully [create a balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts).",
          "operationId": "post-balancePlatform.balanceAccount.created",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "balancePlatform-balanceAccount-created": {
                    "$ref": "#/components/examples/post-balancePlatform.balanceAccount.created-balancePlatform-balanceAccount-created"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/BalanceAccountNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "balancePlatform-balanceAccount-created": {
                      "$ref": "#/components/examples/WebhookAck"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Balance account created",
          "tags": [
            "Balance account"
          ],
          "x-groupName": "Balance account",
          "x-methodName": "balanceAccountCreated",
          "x-sortIndex": 1
        }
      },
      "balancePlatform.balanceAccount.updated": {
        "post": {
          "description": "Adyen sends this webhook when you successfully [update a balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/balanceAccounts/_id_).",
          "operationId": "post-balancePlatform.balanceAccount.updated",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "balancePlatform-balanceAccount-updated": {
                    "$ref": "#/components/examples/post-balancePlatform.balanceAccount.updated-balancePlatform-balanceAccount-updated"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/BalanceAccountNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "balancePlatform-balanceAccount-updated": {
                      "$ref": "#/components/examples/WebhookAck"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Balance account updated",
          "tags": [
            "Balance account"
          ],
          "x-groupName": "Balance account",
          "x-methodName": "balanceAccountUpdated",
          "x-sortIndex": 2
        }
      },
      "balancePlatform.balanceAccountSweep.created": {
        "post": {
          "description": "Adyen sends this webhook when you successfully [create a sweep](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts/_balanceAccountId_/sweeps).",
          "operationId": "post-balancePlatform.balanceAccountSweep.created",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "balancePlatform-sweep-created": {
                    "$ref": "#/components/examples/post-balancePlatform.balanceAccountSweep.created-balancePlatform-sweep-created"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/SweepConfigurationNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "balancePlatform-sweep-created": {
                      "$ref": "#/components/examples/WebhookAck"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Sweep created",
          "tags": [
            "Balance account"
          ],
          "x-groupName": "Balance account",
          "x-methodName": "sweepCreated",
          "x-sortIndex": 3
        }
      },
      "balancePlatform.balanceAccountSweep.deleted": {
        "post": {
          "description": "Adyen sends this webhook when you successfully [delete a sweep](https://docs.adyen.com/api-explorer/balanceplatform/latest/delete/balanceAccounts/_balanceAccountId_/sweeps/_sweepId_).",
          "operationId": "post-balancePlatform.balanceAccountSweep.deleted",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "balancePlatform-sweep-deleted": {
                    "$ref": "#/components/examples/post-balancePlatform.balanceAccountSweep.deleted-balancePlatform-sweep-deleted"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/SweepConfigurationNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "balancePlatform-sweep-deleted": {
                      "$ref": "#/components/examples/WebhookAck"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Sweep deleted",
          "tags": [
            "Balance account"
          ],
          "x-groupName": "Balance account",
          "x-methodName": "sweepDeleted",
          "x-sortIndex": 5
        }
      },
      "balancePlatform.balanceAccountSweep.updated": {
        "post": {
          "description": "Adyen sends this webhook when you successfully [update a sweep](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/balanceAccounts/_balanceAccountId_/sweeps/_sweepId_).",
          "operationId": "post-balancePlatform.balanceAccountSweep.updated",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "balancePlatform-sweep-updated": {
                    "$ref": "#/components/examples/post-balancePlatform.balanceAccountSweep.updated-balancePlatform-sweep-updated"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/SweepConfigurationNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "balancePlatform-sweep-updated": {
                      "$ref": "#/components/examples/WebhookAck"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Sweep updated",
          "tags": [
            "Balance account"
          ],
          "x-groupName": "Balance account",
          "x-methodName": "sweepUpdated",
          "x-sortIndex": 4
        }
      },
      "balancePlatform.cardorder.created": {
        "post": {
          "description": "Adyen sends this webhook to indicate a successful creation of a card order after you create a [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments) of `type` **card** and `formFactor` **physical**.",
          "operationId": "post-balancePlatform.cardorder.created",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CardOrderNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Card order created",
          "tags": [
            "Card order"
          ],
          "x-groupName": "Card order",
          "x-methodName": "cardOrderCreated",
          "x-sortIndex": 1
        }
      },
      "balancePlatform.cardorder.updated": {
        "post": {
          "description": "Adyen sends this webhook when there is an update in card order status.",
          "operationId": "post-balancePlatform.cardorder.updated",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CardOrderNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Card order updated",
          "tags": [
            "Card order"
          ],
          "x-groupName": "Card order",
          "x-methodName": "cardOrderUpdated",
          "x-sortIndex": 2
        }
      },
      "balancePlatform.paymentInstrument.created": {
        "post": {
          "description": "Adyen sends this webhook when you successfully [create a payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments). \n>The notification does not include the card number when creating virtual cards. You can only get the card number in the response of the POST [/paymentInstruments](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-card-number) request.",
          "operationId": "post-balancePlatform.paymentInstrument.created",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "balancePlatform-paymentInstrument-created": {
                    "$ref": "#/components/examples/post-balancePlatform.paymentInstrument.created-balancePlatform-paymentInstrument-created"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/PaymentNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "balancePlatform-paymentInstrument-created": {
                      "$ref": "#/components/examples/WebhookAck"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Payment instrument created",
          "tags": [
            "Payment instrument"
          ],
          "x-groupName": "Payment instrument",
          "x-methodName": "paymentInstrumentCreated",
          "x-sortIndex": 1
        }
      },
      "balancePlatform.paymentInstrument.updated": {
        "post": {
          "description": "Adyen sends this webhook when you successfully [update a payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/paymentInstruments/_id_). ",
          "operationId": "post-balancePlatform.paymentInstrument.updated",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "balancePlatform-paymentInstrument-updated": {
                    "$ref": "#/components/examples/post-balancePlatform.paymentInstrument.updated-balancePlatform-paymentInstrument-updated"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/PaymentNotificationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "balancePlatform-paymentInstrument-updated": {
                      "$ref": "#/components/examples/WebhookAck"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Payment instrument updated",
          "tags": [
            "Payment instrument"
          ],
          "x-groupName": "Payment instrument",
          "x-methodName": "paymentInstrumentUpdated",
          "x-sortIndex": 2
        }
      }
    },
    "x-groups": [
      "Account holder",
      "Balance account",
      "Payment instrument",
      "Card order"
    ],
    "x-staticResponse": "response.json"
}

export const schema2 = {
    "openapi": "3.1.0",
    "servers": [
      {
        "url": "https://cal-test.adyen.com/cal/services/Fund/v6"
      }
    ],
    "info": {
      "contact": {
        "email": "developer-experience@adyen.com",
        "name": "Adyen Developer Experience team",
        "url": "https://www.adyen.help/hc/en-us/community/topics",
        "x-twitter": "Adyen"
      },
      "description": "This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/marketplaces-and-platforms) instead.\n\nThe Fund API provides endpoints for managing the funds in the accounts on your platform. These management operations include, for example, the transfer of funds from one account to another, the payout of funds to an account holder, and the retrieval of balances in an account.\n\nFor more information, refer to our [documentation](https://docs.adyen.com/marketplaces-and-platforms/classic/).\n## Authentication\nYour Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:\n\n ```\ncurl\n-H \"Content-Type: application/json\" \\\n-H \"X-API-Key: YOUR_API_KEY\" \\\n...\n```\n\nAlternatively, you can use the username and password to connect to the API using basic authentication. For example:\n\n```\ncurl\n-U \"ws@MarketPlace.YOUR_PLATFORM_ACCOUNT\":\"YOUR_WS_PASSWORD\" \\\n-H \"Content-Type: application/json\" \\\n...\n```\nWhen going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).\n\n## Versioning\nThe Fund API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.\n\nFor example:\n```\nhttps://cal-test.adyen.com/cal/services/Fund/v6/accountHolderBalance\n```",
      "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
      "title": "Fund API",
      "version": "6",
      "x-apisguru-categories": [
        "payment"
      ],
      "x-logo": {
        "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
      },
      "x-origin": [
        {
          "format": "openapi",
          "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/FundService-v6.json",
          "version": "3.1"
        }
      ],
      "x-preferred": true,
      "x-providerName": "adyen.com",
      "x-publicVersion": true,
      "x-serviceName": "FundService",
      "x-timestamp": "2023-02-20T18:23:38Z"
    },
    "tags": [
      {
        "name": "General"
      }
    ],
    "paths": {
      "/accountHolderBalance": {
        "post": {
          "description": "Returns the account balances of an account holder. An account's balances are organized according by currencies. This mean that an account may have multiple balances: one for each currency.",
          "operationId": "post-accountHolderBalance",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-accountHolderBalance-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/AccountHolderBalanceRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AccountHolderBalanceResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "202": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AccountHolderBalanceResponse"
                  }
                }
              },
              "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Get the balances of an account holder",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "accountHolderBalance",
          "x-sortIndex": 1
        }
      },
      "/accountHolderTransactionList": {
        "post": {
          "description": "Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.",
          "operationId": "post-accountHolderTransactionList",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-accountHolderTransactionList-basic"
                  },
                  "specific": {
                    "$ref": "#/components/examples/post-accountHolderTransactionList-specific"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/AccountHolderTransactionListRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AccountHolderTransactionListResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "202": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AccountHolderTransactionListResponse"
                  }
                }
              },
              "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Get a list of transactions",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "accountHolderTransactionList",
          "x-sortIndex": 2
        }
      },
      "/debitAccountHolder": {
        "post": {
          "description": "Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.\n\n To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/top-up-accounts).",
          "operationId": "post-debitAccountHolder",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "debit-account-holder": {
                    "$ref": "#/components/examples/post-debitAccountHolder-debit-account-holder"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/DebitAccountHolderRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "debit-account-holder": {
                      "$ref": "#/components/examples/post-debitAccountHolder-debit-account-holder-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/DebitAccountHolderResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "202": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DebitAccountHolderResponse"
                  }
                }
              },
              "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Send a direct debit request",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "debitAccountHolder",
          "x-sortIndex": 8
        }
      },
      "/payoutAccountHolder": {
        "post": {
          "description": "Pays out a specified amount from an account to the bank account of account holder.",
          "operationId": "post-payoutAccountHolder",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "oneOff": {
                    "$ref": "#/components/examples/post-payoutAccountHolder-oneOff"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/PayoutAccountHolderRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PayoutAccountHolderResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "202": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PayoutAccountHolderResponse"
                  }
                }
              },
              "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Pay out from an account to the account holder",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "payoutAccountHolder",
          "x-sortIndex": 3
        }
      },
      "/refundFundsTransfer": {
        "post": {
          "description": "Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders. ",
          "operationId": "post-refundFundsTransfer",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-refundFundsTransfer-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RefundFundsTransferRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RefundFundsTransferResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "202": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RefundFundsTransferResponse"
                  }
                }
              },
              "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Refund a funds transfer",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "refundFundsTransfer",
          "x-sortIndex": 5
        }
      },
      "/refundNotPaidOutTransfers": {
        "post": {
          "description": "Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.",
          "operationId": "post-refundNotPaidOutTransfers",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-refundNotPaidOutTransfers-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RefundNotPaidOutTransfersRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RefundNotPaidOutTransfersResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "202": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RefundNotPaidOutTransfersResponse"
                  }
                }
              },
              "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Refund all transactions of an account since the most recent payout",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "refundNotPaidOutTransfers",
          "x-sortIndex": 7
        }
      },
      "/setupBeneficiary": {
        "post": {
          "description": "Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.",
          "operationId": "post-setupBeneficiary",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-setupBeneficiary-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/SetupBeneficiaryRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SetupBeneficiaryResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "202": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SetupBeneficiaryResponse"
                  }
                }
              },
              "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Designate a beneficiary account and transfer the benefactor's current balance",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "setupBeneficiary",
          "x-sortIndex": 6
        }
      },
      "/transferFunds": {
        "post": {
          "description": "Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.",
          "operationId": "post-transferFunds",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-transferFunds-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/TransferFundsRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransferFundsResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "202": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransferFundsResponse"
                  }
                }
              },
              "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Transfer funds between platform accounts",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "transferFunds",
          "x-sortIndex": 4
        }
      }
    },
    "components": {
      "examples": {
        "post-accountHolderBalance-basic": {
          "summary": "Review the account holder balance",
          "value": {
            "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
          }
        },
        "post-accountHolderTransactionList-basic": {
          "summary": "Retrieve transactions page by page",
          "value": {
            "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
            "transactionListsPerAccount": [
              {
                "accountCode": "195752115",
                "page": 1
              }
            ]
          }
        },
        "post-accountHolderTransactionList-specific": {
          "summary": "Retrieve transactions with specific statuses.",
          "value": {
            "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
            "transactionListsPerAccount": [
              {
                "accountCode": "2e64b396-1200-4474-b848-0cb06b52b3c7",
                "page": 2
              }
            ],
            "transactionStatuses": [
              "PendingCredit",
              "Credited",
              "Debited"
            ]
          }
        },
        "post-debitAccountHolder-debit-account-holder": {
          "description": "Example request to send a direct debit from a bank account",
          "summary": "Send a bank account direct debit",
          "value": {
            "accountHolderCode": "ACCOUNT_HOLDER_CODE",
            "amount": {
              "currency": "USD",
              "value": 6200
            },
            "bankAccountUUID": "000b81aa-ae7e-4492-aa7e-72b2129dce0c",
            "description": "YOUR_DESCRIPTION",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "splits": [
              {
                "account": "8535516988037431",
                "amount": {
                  "value": 6000
                },
                "reference": "YOUR_SPLIT_REFERENCE_1",
                "type": "MarketPlace"
              },
              {
                "amount": {
                  "value": 200
                },
                "reference": "YOUR_SPLIT_REFERENCE_2",
                "type": "Commission"
              }
            ]
          }
        },
        "post-debitAccountHolder-debit-account-holder-200": {
          "description": "Example response for requesting a direct debit from a bank account",
          "summary": "Direct debit request sent",
          "value": {
            "pspReference": "8816480354727275",
            "submittedAsync": "false"
          }
        },
        "post-payoutAccountHolder-oneOff": {
          "summary": "One-off payout",
          "value": {
            "accountCode": "118731451",
            "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
            "amount": {
              "currency": "EUR",
              "value": 99792
            },
            "bankAccountUUID": "000b81aa-ae7e-4492-aa7e-72b2129dce0c",
            "description": "12345 – Test"
          }
        },
        "post-refundFundsTransfer-basic": {
          "summary": "Refund the fund transfer",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 1000
            },
            "merchantReference": "YOUR_REFERENCE_ID",
            "originalReference": "PSP_REFERENCE_OF_TRANSFER_TO_REFUND"
          }
        },
        "post-refundNotPaidOutTransfers-basic": {
          "summary": "Refund last transactions",
          "value": {
            "accountCode": "189184578",
            "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
          }
        },
        "post-setupBeneficiary-basic": {
          "summary": "Set up a beneficiary",
          "value": {
            "destinationAccountCode": "128952522",
            "merchantReference": "YOUR_REFERENCE_ID",
            "sourceAccountCode": "134498192"
          }
        },
        "post-transferFunds-basic": {
          "summary": "Transfer funds from one account to another",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 2000
            },
            "destinationAccountCode": "190324759",
            "sourceAccountCode": "100000000",
            "transferCode": "TransferCode_1"
          }
        }
      },
      "schemas": {
        "AccountDetailBalance": {
          "properties": {
            "accountCode": {
              "description": "The code of the account that holds the balance.",
              "type": "string"
            },
            "detailBalance": {
              "$ref": "#/components/schemas/DetailBalance",
              "description": "Details of the balance held by the account."
            }
          },
          "type": "object"
        },
        "AccountHolderBalanceRequest": {
          "properties": {
            "accountHolderCode": {
              "description": "The code of the Account Holder of which to retrieve the balance.",
              "type": "string"
            }
          },
          "required": [
            "accountHolderCode"
          ],
          "type": "object"
        },
        "AccountHolderBalanceResponse": {
          "properties": {
            "balancePerAccount": {
              "description": "A list of each account and their balances.",
              "items": {
                "$ref": "#/components/schemas/AccountDetailBalance"
              },
              "type": "array"
            },
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            },
            "totalBalance": {
              "$ref": "#/components/schemas/DetailBalance",
              "description": "The total balance of the account holder."
            }
          },
          "type": "object"
        },
        "AccountHolderTransactionListRequest": {
          "properties": {
            "accountHolderCode": {
              "description": "The code of the account holder that owns the account(s) of which retrieve the transaction list.",
              "type": "string"
            },
            "transactionListsPerAccount": {
              "description": "A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included.",
              "items": {
                "$ref": "#/components/schemas/TransactionListForAccount"
              },
              "type": "array"
            },
            "transactionStatuses": {
              "description": "A list of statuses to include in the transaction list. If left blank, all transactions will be included.\n>Permitted values:\n>* `PendingCredit` - a pending balance credit.\n>* `CreditFailed` - a pending credit failure; the balance will not be credited.\n>* `Credited` - a credited balance.\n>* `PendingDebit` - a pending balance debit (e.g., a refund).\n>* `CreditClosed` - a pending credit closed; the balance will not be credited.\n>* `CreditSuspended` - a pending credit closed; the balance will not be credited.\n>* `DebitFailed` - a pending debit failure; the balance will not be debited.\n>* `Debited` - a debited balance (e.g., a refund).\n>* `DebitReversedReceived` - a pending refund reversal.\n>* `DebitedReversed` - a reversed refund.\n>* `ChargebackReceived` - a received chargeback request.\n>* `Chargeback` - a processed chargeback.\n>* `ChargebackReversedReceived` - a pending chargeback reversal.\n>* `ChargebackReversed` - a reversed chargeback.\n>* `Converted` - converted.\n>* `ManualCorrected` - manual booking/adjustment by Adyen.\n>* `Payout` - a payout.\n>* `PayoutReversed` - a reversed payout.\n>* `PendingFundTransfer` - a pending transfer of funds from one account to another.\n>* `FundTransfer` - a transfer of funds from one account to another.",
              "items": {
                "enum": [
                  "BalanceNotPaidOutTransfer",
                  "BalancePlatformSweep",
                  "BalancePlatformSweepReturned",
                  "Chargeback",
                  "ChargebackCorrection",
                  "ChargebackCorrectionReceived",
                  "ChargebackReceived",
                  "ChargebackReversed",
                  "ChargebackReversedCorrection",
                  "ChargebackReversedCorrectionReceived",
                  "ChargebackReversedReceived",
                  "Converted",
                  "CreditClosed",
                  "CreditFailed",
                  "CreditReversed",
                  "CreditReversedReceived",
                  "CreditSuspended",
                  "Credited",
                  "DebitFailed",
                  "DebitReversedReceived",
                  "Debited",
                  "DebitedReversed",
                  "DepositCorrectionCredited",
                  "DepositCorrectionDebited",
                  "Fee",
                  "FundTransfer",
                  "FundTransferReversed",
                  "InvoiceDeductionCredited",
                  "InvoiceDeductionDebited",
                  "ManualCorrected",
                  "ManualCorrectionCredited",
                  "ManualCorrectionDebited",
                  "MerchantPayin",
                  "MerchantPayinReversed",
                  "Payout",
                  "PayoutReversed",
                  "PendingCredit",
                  "PendingDebit",
                  "PendingFundTransfer",
                  "ReCredited",
                  "ReCreditedReceived",
                  "SecondChargeback",
                  "SecondChargebackCorrection",
                  "SecondChargebackCorrectionReceived",
                  "SecondChargebackReceived"
                ],
                "type": "string"
              },
              "type": "array"
            }
          },
          "required": [
            "accountHolderCode"
          ],
          "type": "object"
        },
        "AccountHolderTransactionListResponse": {
          "properties": {
            "accountTransactionLists": {
              "description": "A list of the transactions.",
              "items": {
                "$ref": "#/components/schemas/AccountTransactionList"
              },
              "type": "array"
            },
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "AccountTransactionList": {
          "properties": {
            "accountCode": {
              "description": "The code of the account.",
              "type": "string"
            },
            "hasNextPage": {
              "description": "Indicates whether there is a next page of transactions available.",
              "type": "boolean"
            },
            "transactions": {
              "description": "The list of transactions.",
              "items": {
                "$ref": "#/components/schemas/Transaction"
              },
              "type": "array"
            }
          },
          "type": "object"
        },
        "Amount": {
          "properties": {
            "currency": {
              "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).",
              "maxLength": 3,
              "minLength": 3,
              "type": "string"
            },
            "value": {
              "description": "The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
              "format": "int64",
              "type": "integer"
            }
          },
          "required": [
            "value",
            "currency"
          ],
          "type": "object"
        },
        "BankAccountDetail": {
          "properties": {
            "accountNumber": {
              "description": "The bank account number (without separators).\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "accountType": {
              "description": "The type of bank account.\nOnly applicable to bank accounts held in the USA.\nThe permitted values are: `checking`, `savings`.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "bankAccountName": {
              "description": "The name of the bank account.",
              "type": "string"
            },
            "bankAccountReference": {
              "description": "Merchant reference to the bank account.",
              "type": "string",
              "x-addedInVersion": "5"
            },
            "bankAccountUUID": {
              "description": "The unique identifier (UUID) of the Bank Account.\n>If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.\n\n>If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.\n\n>If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.\n\n>If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated.\n",
              "type": "string"
            },
            "bankBicSwift": {
              "description": "The bank identifier code.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "bankCity": {
              "description": "The city in which the bank branch is located.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "bankCode": {
              "description": "The bank code of the banking institution with which the bank account is registered.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "bankName": {
              "description": "The name of the banking institution with which the bank account is held.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "branchCode": {
              "description": "The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:\n* United States - Routing number\n* United Kingdom - Sort code\n* Germany - Bankleitzahl\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "checkCode": {
              "description": "The check code of the bank account.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "countryCode": {
              "description": "The two-letter country code in which the bank account is registered.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "currencyCode": {
              "description": "The currency in which the bank account deals.\n>The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').\n",
              "type": "string"
            },
            "iban": {
              "description": "The international bank account number.\n>The IBAN standard is defined in ISO-13616.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "ownerCity": {
              "description": "The city of residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "ownerCountryCode": {
              "description": "The country code of the country of residence of the bank account owner.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "ownerDateOfBirth": {
              "deprecated": true,
              "description": "The date of birth of the bank account owner.\nThe date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).",
              "type": "string"
            },
            "ownerHouseNumberOrName": {
              "description": "The house name or number of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "ownerName": {
              "description": "The name of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "ownerNationality": {
              "description": "The country code of the country of nationality of the bank account owner.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "ownerPostalCode": {
              "description": "The postal code of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "ownerState": {
              "description": "The state of residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "ownerStreet": {
              "description": "The street name of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "primaryAccount": {
              "description": "If set to true, the bank account is a primary account.",
              "type": "boolean"
            },
            "taxId": {
              "description": "The tax ID number.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            },
            "urlForVerification": {
              "description": "The URL to be used for bank account verification.\nThis may be generated on bank account creation.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "DebitAccountHolderRequest": {
          "properties": {
            "accountHolderCode": {
              "description": "The code of the account holder.",
              "type": "string"
            },
            "amount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount to be debited from the account holder's bank account."
            },
            "bankAccountUUID": {
              "description": "The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.",
              "type": "string"
            },
            "description": {
              "description": "A description of the direct debit. Maximum length: 35 characters.\n\nAllowed characters: **a-z**, **A-Z**, **0-9**, and special characters **/?:().,'+ \";**.",
              "maxLength": 35,
              "type": "string"
            },
            "merchantAccount": {
              "description": "Your merchant account.",
              "type": "string"
            },
            "splits": {
              "description": "Contains instructions on how to split the funds between the accounts in your platform. The request must have at least one split item.",
              "items": {
                "$ref": "#/components/schemas/Split"
              },
              "type": "array"
            }
          },
          "required": [
            "accountHolderCode",
            "bankAccountUUID",
            "amount",
            "splits",
            "merchantAccount"
          ],
          "type": "object"
        },
        "DebitAccountHolderResponse": {
          "properties": {
            "accountHolderCode": {
              "description": "The code of the account holder.",
              "type": "string"
            },
            "bankAccountUUID": {
              "description": "The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.",
              "type": "string"
            },
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "merchantReferences": {
              "description": "List of the `reference` values from the `split` array in the request.",
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "DetailBalance": {
          "properties": {
            "balance": {
              "description": "The list of balances held by the account.",
              "items": {
                "$ref": "#/components/schemas/Amount"
              },
              "type": "array"
            },
            "onHoldBalance": {
              "description": "The list of on hold balances held by the account.",
              "items": {
                "$ref": "#/components/schemas/Amount"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "pendingBalance": {
              "description": "The list of pending balances held by the account.",
              "items": {
                "$ref": "#/components/schemas/Amount"
              },
              "type": "array"
            }
          },
          "type": "object"
        },
        "ErrorFieldType": {
          "properties": {
            "errorCode": {
              "description": "The validation error code.",
              "format": "int32",
              "type": "integer"
            },
            "errorDescription": {
              "description": "A description of the validation error.",
              "type": "string"
            },
            "fieldType": {
              "$ref": "#/components/schemas/FieldType",
              "description": "The type of error field."
            }
          },
          "type": "object"
        },
        "FieldType": {
          "properties": {
            "field": {
              "description": "The full name of the property.",
              "type": "string"
            },
            "fieldName": {
              "description": "The type of the field.",
              "enum": [
                "accountCode",
                "accountHolderCode",
                "accountHolderDetails",
                "accountNumber",
                "accountStateType",
                "accountStatus",
                "accountType",
                "address",
                "balanceAccount",
                "balanceAccountActive",
                "balanceAccountCode",
                "balanceAccountId",
                "bankAccount",
                "bankAccountCode",
                "bankAccountName",
                "bankAccountUUID",
                "bankBicSwift",
                "bankCity",
                "bankCode",
                "bankName",
                "bankStatement",
                "branchCode",
                "businessContact",
                "cardToken",
                "checkCode",
                "city",
                "companyRegistration",
                "constitutionalDocument",
                "controller",
                "country",
                "countryCode",
                "currency",
                "currencyCode",
                "dateOfBirth",
                "description",
                "destinationAccountCode",
                "document",
                "documentContent",
                "documentExpirationDate",
                "documentIssuerCountry",
                "documentIssuerState",
                "documentName",
                "documentNumber",
                "documentType",
                "doingBusinessAs",
                "drivingLicence",
                "drivingLicenceBack",
                "drivingLicenceFront",
                "drivingLicense",
                "email",
                "firstName",
                "formType",
                "fullPhoneNumber",
                "gender",
                "hopWebserviceUser",
                "houseNumberOrName",
                "iban",
                "idCard",
                "idCardBack",
                "idCardFront",
                "idNumber",
                "identityDocument",
                "individualDetails",
                "infix",
                "jobTitle",
                "lastName",
                "lastReviewDate",
                "legalArrangement",
                "legalArrangementCode",
                "legalArrangementEntity",
                "legalArrangementEntityCode",
                "legalArrangementLegalForm",
                "legalArrangementMember",
                "legalArrangementMembers",
                "legalArrangementName",
                "legalArrangementReference",
                "legalArrangementRegistrationNumber",
                "legalArrangementTaxNumber",
                "legalArrangementType",
                "legalBusinessName",
                "legalEntity",
                "legalEntityType",
                "logo",
                "merchantAccount",
                "merchantCategoryCode",
                "merchantHouseNumber",
                "merchantReference",
                "microDeposit",
                "name",
                "nationality",
                "originalReference",
                "ownerCity",
                "ownerCountryCode",
                "ownerDateOfBirth",
                "ownerHouseNumberOrName",
                "ownerName",
                "ownerPostalCode",
                "ownerState",
                "ownerStreet",
                "passport",
                "passportNumber",
                "payoutMethodCode",
                "payoutSchedule",
                "pciSelfAssessment",
                "personalData",
                "phoneCountryCode",
                "phoneNumber",
                "postalCode",
                "primaryCurrency",
                "reason",
                "registrationNumber",
                "returnUrl",
                "schedule",
                "shareholder",
                "shareholderCode",
                "shareholderCodeAndSignatoryCode",
                "shareholderCodeOrSignatoryCode",
                "shareholderType",
                "shareholderTypes",
                "shopperInteraction",
                "signatory",
                "signatoryCode",
                "socialSecurityNumber",
                "sourceAccountCode",
                "splitAccount",
                "splitConfigurationUUID",
                "splitCurrency",
                "splitValue",
                "splits",
                "stateOrProvince",
                "status",
                "stockExchange",
                "stockNumber",
                "stockTicker",
                "store",
                "storeDetail",
                "storeName",
                "storeReference",
                "street",
                "taxId",
                "tier",
                "tierNumber",
                "transferCode",
                "ultimateParentCompany",
                "ultimateParentCompanyAddressDetails",
                "ultimateParentCompanyAddressDetailsCountry",
                "ultimateParentCompanyBusinessDetails",
                "ultimateParentCompanyBusinessDetailsLegalBusinessName",
                "ultimateParentCompanyBusinessDetailsRegistrationNumber",
                "ultimateParentCompanyCode",
                "ultimateParentCompanyStockExchange",
                "ultimateParentCompanyStockNumber",
                "ultimateParentCompanyStockNumberOrStockTicker",
                "ultimateParentCompanyStockTicker",
                "unknown",
                "value",
                "verificationType",
                "virtualAccount",
                "visaNumber",
                "webAddress",
                "year"
              ],
              "type": "string"
            },
            "shareholderCode": {
              "description": "The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "PayoutAccountHolderRequest": {
          "properties": {
            "accountCode": {
              "description": "The code of the account from which the payout is to be made.",
              "type": "string"
            },
            "accountHolderCode": {
              "description": "The code of the Account Holder who owns the account from which the payout is to be made.\nThe Account Holder is the party to which the payout will be made.",
              "type": "string"
            },
            "amount": {
              "$ref": "#/components/schemas/Amount",
              "description": "An object containing the currency and value of the payout.\nIf the account has multiple currencies, specify the currency to be used.\nIf the `bankAccountUUID` is provided in the request, the currency supported by the bank is used.\nIf the `payoutMethodCode` is provided in the request, the specified payout method is selected."
            },
            "bankAccountUUID": {
              "description": "The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.\nIf left blank, a bank account is automatically selected.",
              "type": "string"
            },
            "description": {
              "description": "A description of the payout. Maximum 200 characters.\nAllowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,'+ \";**",
              "maxLength": 200,
              "type": "string"
            },
            "merchantReference": {
              "description": "A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.",
              "type": "string",
              "x-addedInVersion": "2"
            },
            "payoutMethodCode": {
              "description": "The unique ID of the payout method held by the Account Holder to which the payout is to be made.\nIf left blank, a payout instrument is automatically selected.",
              "type": "string",
              "x-addedInVersion": "5"
            },
            "payoutSpeed": {
              "default": "STANDARD",
              "description": "Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.",
              "enum": [
                "INSTANT",
                "SAME_DAY",
                "STANDARD"
              ],
              "type": "string",
              "x-addedInVersion": "5"
            }
          },
          "required": [
            "accountHolderCode",
            "accountCode"
          ],
          "type": "object"
        },
        "PayoutAccountHolderResponse": {
          "properties": {
            "bankAccountUUID": {
              "description": "The unique ID of the Bank Account to which the payout was made.",
              "type": "string"
            },
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "merchantReference": {
              "description": "The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.",
              "type": "string",
              "x-addedInVersion": "2"
            },
            "payoutSpeed": {
              "default": "STANDARD",
              "description": "Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.",
              "enum": [
                "INSTANT",
                "SAME_DAY",
                "STANDARD"
              ],
              "type": "string",
              "x-addedInVersion": "5"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "RefundFundsTransferRequest": {
          "properties": {
            "amount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount to be transferred."
            },
            "merchantReference": {
              "description": "A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.",
              "type": "string"
            },
            "originalReference": {
              "description": "A PSP reference of the original fund transfer.",
              "type": "string"
            }
          },
          "required": [
            "originalReference",
            "amount"
          ],
          "type": "object"
        },
        "RefundFundsTransferResponse": {
          "properties": {
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "merchantReference": {
              "description": "The value supplied by the executing user when initiating the transfer refund; may be used to link multiple transactions.",
              "type": "string"
            },
            "message": {
              "description": "The message of the response.",
              "type": "string"
            },
            "originalReference": {
              "description": "A PSP reference of the original fund transfer.",
              "type": "string"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "RefundNotPaidOutTransfersRequest": {
          "properties": {
            "accountCode": {
              "description": "The code of the account from which to perform the refund(s).",
              "type": "string"
            },
            "accountHolderCode": {
              "description": "The code of the Account Holder which owns the account from which to perform the refund(s).",
              "type": "string"
            }
          },
          "required": [
            "accountHolderCode",
            "accountCode"
          ],
          "type": "object"
        },
        "RefundNotPaidOutTransfersResponse": {
          "properties": {
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "ServiceError": {
          "properties": {
            "errorCode": {
              "description": "The error code mapped to the error message.",
              "type": "string"
            },
            "errorType": {
              "description": "The category of the error.",
              "type": "string"
            },
            "message": {
              "description": "A short explanation of the issue.",
              "type": "string"
            },
            "pspReference": {
              "description": "The PSP reference of the payment.",
              "type": "string"
            },
            "status": {
              "description": "The HTTP response status.",
              "format": "int32",
              "type": "integer"
            }
          },
          "type": "object"
        },
        "SetupBeneficiaryRequest": {
          "properties": {
            "destinationAccountCode": {
              "description": "The destination account code.",
              "type": "string"
            },
            "merchantReference": {
              "description": "A value that can be supplied at the discretion of the executing user.",
              "type": "string"
            },
            "sourceAccountCode": {
              "description": "The benefactor account.",
              "type": "string"
            }
          },
          "required": [
            "sourceAccountCode",
            "destinationAccountCode"
          ],
          "type": "object"
        },
        "SetupBeneficiaryResponse": {
          "properties": {
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "Split": {
          "properties": {
            "account": {
              "description": "Unique identifier of the account where the split amount should be sent. This is required if `type` is **MarketPlace** or **BalanceAccount**.\n\n",
              "type": "string"
            },
            "amount": {
              "$ref": "#/components/schemas/SplitAmount",
              "description": "The amount of this split."
            },
            "description": {
              "description": "A description of this split.",
              "type": "string"
            },
            "reference": {
              "description": "Your reference for the split, which you can use to link the split to other operations such as captures and refunds.\n\nThis is required if `type` is **MarketPlace** or **BalanceAccount**. For the other types, we also recommend sending a reference so you can reconcile the split and the associated payment in the transaction overview and in the reports. If the reference is not provided, the split is reported as part of the aggregated [TransferBalance record type](https://docs.adyen.com/reporting/marketpay-payments-accounting-report) in Adyen for Platforms.",
              "type": "string"
            },
            "type": {
              "description": "The type of split.\nPossible values: **Default**, **PaymentFee**, **VAT**, **Commission**, **MarketPlace**, **BalanceAccount**, **Remainder**, **Surcharge**, **Tip**.",
              "enum": [
                "BalanceAccount",
                "Commission",
                "Default",
                "MarketPlace",
                "PaymentFee",
                "Remainder",
                "Surcharge",
                "Tip",
                "VAT",
                "Verification"
              ],
              "type": "string"
            }
          },
          "required": [
            "amount",
            "type"
          ],
          "type": "object"
        },
        "SplitAmount": {
          "properties": {
            "currency": {
              "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).\n\nIf this value is not provided, the currency in which the payment is made will be used.",
              "maxLength": 3,
              "minLength": 3,
              "type": "string"
            },
            "value": {
              "description": "The amount in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
              "format": "int64",
              "type": "integer"
            }
          },
          "required": [
            "value"
          ],
          "type": "object"
        },
        "Transaction": {
          "properties": {
            "amount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount of the transaction."
            },
            "bankAccountDetail": {
              "$ref": "#/components/schemas/BankAccountDetail",
              "description": "The details of the bank account to where a payout was made."
            },
            "captureMerchantReference": {
              "description": "The merchant reference of a related capture.",
              "type": "string"
            },
            "capturePspReference": {
              "description": "The psp reference of a related capture.",
              "type": "string"
            },
            "creationDate": {
              "description": "The date on which the transaction was performed.",
              "format": "date-time",
              "type": "string"
            },
            "description": {
              "description": "A description of the transaction.",
              "type": "string"
            },
            "destinationAccountCode": {
              "description": "The code of the account to which funds were credited during an outgoing fund transfer.",
              "type": "string"
            },
            "disputePspReference": {
              "description": "The psp reference of the related dispute.",
              "type": "string"
            },
            "disputeReasonCode": {
              "description": "The reason code of a dispute.",
              "type": "string"
            },
            "merchantReference": {
              "description": "The merchant reference of a transaction.",
              "type": "string"
            },
            "paymentPspReference": {
              "description": "The psp reference of the related authorisation or transfer.",
              "type": "string",
              "x-addedInVersion": "3"
            },
            "payoutPspReference": {
              "description": "The psp reference of the related payout.",
              "type": "string",
              "x-addedInVersion": "3"
            },
            "pspReference": {
              "description": "The psp reference of a transaction.",
              "type": "string"
            },
            "sourceAccountCode": {
              "description": "The code of the account from which funds were debited during an incoming fund transfer.",
              "type": "string"
            },
            "transactionStatus": {
              "description": "The status of the transaction.\n>Permitted values: `PendingCredit`, `CreditFailed`, `CreditClosed`, `CreditSuspended`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`.",
              "enum": [
                "BalanceNotPaidOutTransfer",
                "BalancePlatformSweep",
                "BalancePlatformSweepReturned",
                "Chargeback",
                "ChargebackCorrection",
                "ChargebackCorrectionReceived",
                "ChargebackReceived",
                "ChargebackReversed",
                "ChargebackReversedCorrection",
                "ChargebackReversedCorrectionReceived",
                "ChargebackReversedReceived",
                "Converted",
                "CreditClosed",
                "CreditFailed",
                "CreditReversed",
                "CreditReversedReceived",
                "CreditSuspended",
                "Credited",
                "DebitFailed",
                "DebitReversedReceived",
                "Debited",
                "DebitedReversed",
                "DepositCorrectionCredited",
                "DepositCorrectionDebited",
                "Fee",
                "FundTransfer",
                "FundTransferReversed",
                "InvoiceDeductionCredited",
                "InvoiceDeductionDebited",
                "ManualCorrected",
                "ManualCorrectionCredited",
                "ManualCorrectionDebited",
                "MerchantPayin",
                "MerchantPayinReversed",
                "Payout",
                "PayoutReversed",
                "PendingCredit",
                "PendingDebit",
                "PendingFundTransfer",
                "ReCredited",
                "ReCreditedReceived",
                "SecondChargeback",
                "SecondChargebackCorrection",
                "SecondChargebackCorrectionReceived",
                "SecondChargebackReceived"
              ],
              "type": "string"
            },
            "transferCode": {
              "description": "The transfer code of the transaction.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "TransactionListForAccount": {
          "properties": {
            "accountCode": {
              "description": "The account for which to retrieve the transactions.",
              "type": "string"
            },
            "page": {
              "description": "The page of transactions to retrieve.\nEach page lists fifty (50) transactions.  The most recent transactions are included on page 1.",
              "format": "int32",
              "type": "integer"
            }
          },
          "required": [
            "accountCode",
            "page"
          ],
          "type": "object"
        },
        "TransferFundsRequest": {
          "properties": {
            "amount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount to be transferred."
            },
            "destinationAccountCode": {
              "description": "The code of the account to which the funds are to be credited.\n>The state of the Account Holder of this account must be Active.",
              "type": "string"
            },
            "merchantReference": {
              "description": "A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.",
              "type": "string",
              "x-addedInVersion": "2"
            },
            "sourceAccountCode": {
              "description": "The code of the account from which the funds are to be debited.\n>The state of the Account Holder of this account must be Active and allow payouts.",
              "type": "string"
            },
            "transferCode": {
              "description": "The code related to the type of transfer being performed.\n>The permitted codes differ for each platform account and are defined in their service level agreement.",
              "type": "string"
            }
          },
          "required": [
            "sourceAccountCode",
            "destinationAccountCode",
            "transferCode",
            "amount"
          ],
          "type": "object"
        },
        "TransferFundsResponse": {
          "properties": {
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "merchantReference": {
              "description": "The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.",
              "type": "string",
              "x-addedInVersion": "2"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        }
      },
      "securitySchemes": {
        "ApiKeyAuth": {
          "in": "header",
          "name": "X-API-Key",
          "type": "apiKey"
        },
        "BasicAuth": {
          "scheme": "basic",
          "type": "http"
        }
      }
    },
    "x-groups": [
      "General",
      "Migration"
    ]
}

export const schema3 = {
    "openapi": "3.1.0",
    "servers": [
      {
        "url": "https://cal-test.adyen.com/cal/services/Hop/v6"
      }
    ],
    "info": {
      "contact": {
        "email": "developer-experience@adyen.com",
        "name": "Adyen Developer Experience team",
        "url": "https://www.adyen.help/hc/en-us/community/topics",
        "x-twitter": "Adyen"
      },
      "description": "This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/marketplaces-and-platforms) instead.\n\nThe Hosted onboarding API provides endpoints that you can use to generate links to Adyen-hosted pages, such as an [onboarding page](https://docs.adyen.com/marketplaces-and-platforms/classic/hosted-onboarding-page) or a [PCI compliance questionnaire](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners). You can provide these links to your account holders so that they can complete their onboarding.\n\n## Authentication\nYour Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:\n\n ```\ncurl\n-H \"Content-Type: application/json\" \\\n-H \"X-API-Key: YOUR_API_KEY\" \\\n...\n```\n\nAlternatively, you can use the username and password to connect to the API using basic authentication. For example:\n\n```\ncurl\n-U \"ws@MarketPlace.YOUR_PLATFORM_ACCOUNT\":\"YOUR_WS_PASSWORD\" \\\n-H \"Content-Type: application/json\" \\\n...\n```\nWhen going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).\n\n## Versioning\nThe Hosted onboarding API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.\n\nFor example:\n```\nhttps://cal-test.adyen.com/cal/services/Hop/v6/getOnboardingUrl\n```",
      "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
      "title": "Hosted onboarding API",
      "version": "6",
      "x-apisguru-categories": [
        "payment"
      ],
      "x-logo": {
        "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
      },
      "x-origin": [
        {
          "format": "openapi",
          "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/HopService-v6.json",
          "version": "3.1"
        }
      ],
      "x-preferred": true,
      "x-providerName": "adyen.com",
      "x-publicVersion": true,
      "x-serviceName": "HopService",
      "x-timestamp": "2023-03-22T11:13:03Z"
    },
    "tags": [
      {
        "name": "Hosted Onboarding Page"
      },
      {
        "name": "PCI Compliance Questionnaire Page"
      }
    ],
    "paths": {
      "/getOnboardingUrl": {
        "post": {
          "description": "Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/marketplaces-and-platforms/classic/collect-verification-details/hosted-onboarding-page). ",
          "operationId": "post-getOnboardingUrl",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "get-onboarding-url": {
                    "$ref": "#/components/examples/post-getOnboardingUrl-get-onboarding-url"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/GetOnboardingUrlRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "get-onboarding-url": {
                      "$ref": "#/components/examples/post-getOnboardingUrl-get-onboarding-url-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/GetOnboardingUrlResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Get a link to a Adyen-hosted onboarding page",
          "tags": [
            "Hosted Onboarding Page"
          ],
          "x-groupName": "Hosted Onboarding Page",
          "x-methodName": "getOnboardingUrl",
          "x-sortIndex": 1
        }
      },
      "/getPciQuestionnaireUrl": {
        "post": {
          "description": "Returns a link to a PCI compliance questionnaire that you can send to your account holder.\n > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners).",
          "operationId": "post-getPciQuestionnaireUrl",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "get-pci-questionnaire-url": {
                    "$ref": "#/components/examples/post-getPciQuestionnaireUrl-get-pci-questionnaire-url"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/GetPciUrlRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "get-pci-questionnaire-url": {
                      "$ref": "#/components/examples/post-getPciQuestionnaireUrl-get-pci-questionnaire-url-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/GetPciUrlResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Get a link to a PCI compliance questionnaire",
          "tags": [
            "PCI Compliance Questionnaire Page"
          ],
          "x-groupName": "PCI Compliance Questionnaire Page",
          "x-methodName": "getPciQuestionnaireUrl",
          "x-sortIndex": 1
        }
      }
    },
    "components": {
      "examples": {
        "post-getOnboardingUrl-get-onboarding-url": {
          "description": "Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder.",
          "summary": "Get a hosted onboarding page link",
          "value": {
            "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
            "returnUrl": "https://your.return-url.com/?submerchant=123"
          }
        },
        "post-getOnboardingUrl-get-onboarding-url-200": {
          "description": "Example response for requesting a hosted onboarding page link",
          "summary": "Hosted onboarding page link",
          "value": {
            "invalidFields": [],
            "pspReference": "9115677600500127",
            "redirectUrl": "https://hop-test.adyen.com/hop/view/?token=<token>",
            "resultCode": "Success"
          }
        },
        "post-getPciQuestionnaireUrl-get-pci-questionnaire-url": {
          "description": "Returns a link to an Adyen-hosted PCI compliance questionnaire that you can send to your account holder.",
          "summary": "Get a PCI questionnaire link",
          "value": {
            "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
            "returnUrl": "https://your.return-url.com/?submerchant=123"
          }
        },
        "post-getPciQuestionnaireUrl-get-pci-questionnaire-url-200": {
          "description": "Example response for requesting a hosted onboarding page link",
          "summary": "Hosted onboarding page link",
          "value": {
            "invalidFields": [],
            "pspReference": "8315748692943050",
            "redirectUrl": "https://hop-test.adyen.com/hop/pci/?token=<token>",
            "resultCode": "Success"
          }
        }
      },
      "schemas": {
        "CollectInformation": {
          "properties": {
            "bankDetails": {
              "description": "Indicates whether [bank account details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/bank-account-check) must be collected. Default is **true**.",
              "type": "boolean"
            },
            "businessDetails": {
              "description": "Indicates whether [business details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/company-check) must be collected. Default is **true**.",
              "type": "boolean"
            },
            "individualDetails": {
              "description": "Indicates whether [individual details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/identity-check) must be collected. Default is **true**.",
              "type": "boolean"
            },
            "legalArrangementDetails": {
              "description": "Indicates whether [legal arrangement details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/legal-arrangements) must be collected. Default is **true**.",
              "type": "boolean"
            },
            "pciQuestionnaire": {
              "description": "Indicates whether answers to a [PCI questionnaire](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners#onboard-partner-platform) must be collected. Applies only to partner platforms. Default is **true**.",
              "type": "boolean"
            },
            "shareholderDetails": {
              "description": "Indicates whether [shareholder details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/identity-check) must be collected. Defaults to **true**.",
              "type": "boolean"
            }
          },
          "type": "object"
        },
        "ErrorFieldType": {
          "properties": {
            "errorCode": {
              "description": "The validation error code.",
              "format": "int32",
              "type": "integer"
            },
            "errorDescription": {
              "description": "A description of the validation error.",
              "type": "string"
            },
            "fieldType": {
              "$ref": "#/components/schemas/FieldType",
              "description": "The type of error field."
            }
          },
          "type": "object"
        },
        "FieldType": {
          "properties": {
            "field": {
              "description": "The full name of the property.",
              "type": "string"
            },
            "fieldName": {
              "description": "The type of the field.",
              "enum": [
                "accountCode",
                "accountHolderCode",
                "accountHolderDetails",
                "accountNumber",
                "accountStateType",
                "accountStatus",
                "accountType",
                "address",
                "balanceAccount",
                "balanceAccountActive",
                "balanceAccountCode",
                "balanceAccountId",
                "bankAccount",
                "bankAccountCode",
                "bankAccountName",
                "bankAccountUUID",
                "bankBicSwift",
                "bankCity",
                "bankCode",
                "bankName",
                "bankStatement",
                "branchCode",
                "businessContact",
                "cardToken",
                "checkCode",
                "city",
                "companyRegistration",
                "constitutionalDocument",
                "controller",
                "country",
                "countryCode",
                "currency",
                "currencyCode",
                "dateOfBirth",
                "description",
                "destinationAccountCode",
                "document",
                "documentContent",
                "documentExpirationDate",
                "documentIssuerCountry",
                "documentIssuerState",
                "documentName",
                "documentNumber",
                "documentType",
                "doingBusinessAs",
                "drivingLicence",
                "drivingLicenceBack",
                "drivingLicenceFront",
                "drivingLicense",
                "email",
                "firstName",
                "formType",
                "fullPhoneNumber",
                "gender",
                "hopWebserviceUser",
                "houseNumberOrName",
                "iban",
                "idCard",
                "idCardBack",
                "idCardFront",
                "idNumber",
                "identityDocument",
                "individualDetails",
                "infix",
                "jobTitle",
                "lastName",
                "lastReviewDate",
                "legalArrangement",
                "legalArrangementCode",
                "legalArrangementEntity",
                "legalArrangementEntityCode",
                "legalArrangementLegalForm",
                "legalArrangementMember",
                "legalArrangementMembers",
                "legalArrangementName",
                "legalArrangementReference",
                "legalArrangementRegistrationNumber",
                "legalArrangementTaxNumber",
                "legalArrangementType",
                "legalBusinessName",
                "legalEntity",
                "legalEntityType",
                "logo",
                "merchantAccount",
                "merchantCategoryCode",
                "merchantHouseNumber",
                "merchantReference",
                "microDeposit",
                "name",
                "nationality",
                "originalReference",
                "ownerCity",
                "ownerCountryCode",
                "ownerDateOfBirth",
                "ownerHouseNumberOrName",
                "ownerName",
                "ownerPostalCode",
                "ownerState",
                "ownerStreet",
                "passport",
                "passportNumber",
                "payoutMethodCode",
                "payoutSchedule",
                "pciSelfAssessment",
                "personalData",
                "phoneCountryCode",
                "phoneNumber",
                "postalCode",
                "primaryCurrency",
                "reason",
                "registrationNumber",
                "returnUrl",
                "schedule",
                "shareholder",
                "shareholderCode",
                "shareholderCodeAndSignatoryCode",
                "shareholderCodeOrSignatoryCode",
                "shareholderType",
                "shareholderTypes",
                "shopperInteraction",
                "signatory",
                "signatoryCode",
                "socialSecurityNumber",
                "sourceAccountCode",
                "splitAccount",
                "splitConfigurationUUID",
                "splitCurrency",
                "splitValue",
                "splits",
                "stateOrProvince",
                "status",
                "stockExchange",
                "stockNumber",
                "stockTicker",
                "store",
                "storeDetail",
                "storeName",
                "storeReference",
                "street",
                "taxId",
                "tier",
                "tierNumber",
                "transferCode",
                "ultimateParentCompany",
                "ultimateParentCompanyAddressDetails",
                "ultimateParentCompanyAddressDetailsCountry",
                "ultimateParentCompanyBusinessDetails",
                "ultimateParentCompanyBusinessDetailsLegalBusinessName",
                "ultimateParentCompanyBusinessDetailsRegistrationNumber",
                "ultimateParentCompanyCode",
                "ultimateParentCompanyStockExchange",
                "ultimateParentCompanyStockNumber",
                "ultimateParentCompanyStockNumberOrStockTicker",
                "ultimateParentCompanyStockTicker",
                "unknown",
                "value",
                "verificationType",
                "virtualAccount",
                "visaNumber",
                "webAddress",
                "year"
              ],
              "type": "string"
            },
            "shareholderCode": {
              "description": "The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "GetOnboardingUrlRequest": {
          "properties": {
            "accountHolderCode": {
              "description": "The account holder code you provided when you created the account holder.",
              "type": "string"
            },
            "collectInformation": {
              "$ref": "#/components/schemas/CollectInformation",
              "description": "Contains indicators whether the page should only collect information for specific [KYC checks](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks). By default, the page collects information for all KYC checks that apply to the [legal entity type](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#legal-entity-types)."
            },
            "editMode": {
              "description": "Indicates if editing checks is allowed even if all the checks have passed.",
              "type": "boolean"
            },
            "mobileOAuthCallbackUrl": {
              "description": "The URL to which the account holder is redirected after completing an OAuth authentication with a bank through Trustly/PayMyBank.",
              "type": "string"
            },
            "platformName": {
              "description": "The platform name which will show up in the welcome page.",
              "type": "string"
            },
            "returnUrl": {
              "description": "The URL where the account holder will be redirected back to after they complete the onboarding, or if their session times out. Maximum length of 500 characters. If you don't provide this, the account holder will be redirected back to the default return URL configured in your platform account.",
              "type": "string"
            },
            "shopperLocale": {
              "description": "The language to be used in the page, specified by a combination of a language and country code. For example, **pt-BR**. \n\nIf not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.\n\nFor a list of supported languages, refer to [Change the page language](https://docs.adyen.com/marketplaces-and-platforms/classic/hosted-onboarding-page/customize-experience#change-page-language).",
              "type": "string"
            },
            "showPages": {
              "$ref": "#/components/schemas/ShowPages",
              "description": "Contains indicators whether specific pages must be shown to the account holder."
            }
          },
          "required": [
            "accountHolderCode"
          ],
          "type": "object"
        },
        "GetOnboardingUrlResponse": {
          "properties": {
            "invalidFields": {
              "description": "Information about any invalid fields.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "redirectUrl": {
              "description": "The URL to the Hosted Onboarding Page where you should redirect your sub-merchant. This URL must be used within 30 seconds and can only be used once.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "GetPciUrlRequest": {
          "properties": {
            "accountHolderCode": {
              "description": "The account holder code you provided when you created the account holder.",
              "type": "string"
            },
            "returnUrl": {
              "description": "The URL where the account holder will be redirected back to after they fill out the questionnaire, or if their session times out. Maximum length of 500 characters.",
              "type": "string"
            }
          },
          "required": [
            "accountHolderCode"
          ],
          "type": "object"
        },
        "GetPciUrlResponse": {
          "properties": {
            "invalidFields": {
              "description": "Information about any invalid fields.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "redirectUrl": {
              "description": "The URL to the PCI compliance questionnaire where you should redirect your account holder. This URL must be used within 30 seconds and can only be used once.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "ServiceError": {
          "properties": {
            "errorCode": {
              "description": "The error code mapped to the error message.",
              "type": "string"
            },
            "errorType": {
              "description": "The category of the error.",
              "type": "string"
            },
            "message": {
              "description": "A short explanation of the issue.",
              "type": "string"
            },
            "pspReference": {
              "description": "The PSP reference of the payment.",
              "type": "string"
            },
            "status": {
              "description": "The HTTP response status.",
              "format": "int32",
              "type": "integer"
            }
          },
          "type": "object"
        },
        "ShowPages": {
          "properties": {
            "bankDetailsSummaryPage": {
              "description": "Indicates whether the page with bank account details must be shown. Defaults to **true**.",
              "type": "boolean"
            },
            "bankVerificationPage": {
              "description": "Indicates whether the bank check instant verification' details must be shown. Defaults to **true**.",
              "type": "boolean"
            },
            "businessDetailsSummaryPage": {
              "description": "Indicates whether the page with the company's or organization's details must be shown. Defaults to **true**.",
              "type": "boolean"
            },
            "checksOverviewPage": {
              "description": "Indicates whether the checks overview page must be shown. Defaults to **false**.",
              "type": "boolean"
            },
            "individualDetailsSummaryPage": {
              "description": "Indicates whether the page with the individual's details must be shown. Defaults to **true**.",
              "type": "boolean"
            },
            "legalArrangementsDetailsSummaryPage": {
              "description": "Indicates whether the page with the legal arrangements' details must be shown. Defaults to **true**.",
              "type": "boolean"
            },
            "manualBankAccountPage": {
              "description": "Indicates whether the page to manually add bank account' details must be shown. Defaults to **true**.",
              "type": "boolean"
            },
            "shareholderDetailsSummaryPage": {
              "description": "Indicates whether the page with the shareholders' details must be shown. Defaults to **true**.",
              "type": "boolean"
            },
            "welcomePage": {
              "description": "Indicates whether the welcome page must be shown. Defaults to **false**.",
              "type": "boolean"
            }
          },
          "type": "object"
        }
      },
      "securitySchemes": {
        "ApiKeyAuth": {
          "in": "header",
          "name": "X-API-Key",
          "type": "apiKey"
        },
        "BasicAuth": {
          "scheme": "basic",
          "type": "http"
        }
      }
    },
    "x-groups": [
      "Hosted Onboarding Page",
      "PCI Compliance Questionnaire Page"
    ]
}

export const schema4 = {
    "openapi": "3.1.0",
    "servers": [
      {
        "url": "https://cal-test.adyen.com/cal/services/Notification/v6"
      }
    ],
    "info": {
      "contact": {
        "email": "developer-experience@adyen.com",
        "name": "Adyen Developer Experience team",
        "url": "https://www.adyen.help/hc/en-us/community/topics",
        "x-twitter": "Adyen"
      },
      "description": "This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/marketplaces-and-platforms) instead.\n\nThe Notification Configuration API provides endpoints for setting up and testing notifications that inform you of events on your platform, for example when a verification check or a payout has been completed.\n\nFor more information, refer to our [documentation](https://docs.adyen.com/marketplaces-and-platforms/classic/notifications).\n## Authentication\nYour Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:\n\n ```\ncurl\n-H \"Content-Type: application/json\" \\\n-H \"X-API-Key: YOUR_API_KEY\" \\\n...\n```\n\nAlternatively, you can use the username and password to connect to the API using basic authentication. For example:\n\n```\ncurl\n-U \"ws@MarketPlace.YOUR_PLATFORM_ACCOUNT\":\"YOUR_WS_PASSWORD\" \\\n-H \"Content-Type: application/json\" \\\n...\n```\nWhen going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).\n\n## Versioning\nThe Notification Configuration API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.\n\nFor example:\n```\nhttps://cal-test.adyen.com/cal/services/Notification/v6/createNotificationConfiguration\n```",
      "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
      "title": "Notification Configuration API",
      "version": "6",
      "x-apisguru-categories": [
        "payment"
      ],
      "x-logo": {
        "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
      },
      "x-origin": [
        {
          "format": "openapi",
          "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/NotificationConfigurationService-v6.json",
          "version": "3.1"
        }
      ],
      "x-preferred": true,
      "x-providerName": "adyen.com",
      "x-publicVersion": true,
      "x-serviceName": "NotificationConfigurationService",
      "x-timestamp": "2023-02-20T18:23:38Z"
    },
    "tags": [
      {
        "name": "General"
      }
    ],
    "paths": {
      "/createNotificationConfiguration": {
        "post": {
          "description": "Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.",
          "operationId": "post-createNotificationConfiguration",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-createNotificationConfiguration-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/CreateNotificationConfigurationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "basic": {
                      "$ref": "#/components/examples/post-createNotificationConfiguration-basic-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/GetNotificationConfigurationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Subscribe to notifications",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "createNotificationConfiguration",
          "x-sortIndex": 1
        }
      },
      "/deleteNotificationConfigurations": {
        "post": {
          "description": "Deletes an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL defined in the subscription.",
          "operationId": "post-deleteNotificationConfigurations",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-deleteNotificationConfigurations-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/DeleteNotificationConfigurationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "basic": {
                      "$ref": "#/components/examples/post-deleteNotificationConfigurations-basic-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/GenericResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Delete a notification subscription configuration",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "deleteNotificationConfigurations",
          "x-sortIndex": 6
        }
      },
      "/getNotificationConfiguration": {
        "post": {
          "description": "Returns the details of the configuration of a notification subscription.",
          "operationId": "post-getNotificationConfiguration",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-getNotificationConfiguration-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/GetNotificationConfigurationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "basic": {
                      "$ref": "#/components/examples/post-getNotificationConfiguration-basic-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/GetNotificationConfigurationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Get a notification subscription configuration",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "getNotificationConfiguration",
          "x-sortIndex": 2
        }
      },
      "/getNotificationConfigurationList": {
        "post": {
          "description": "Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.",
          "operationId": "post-getNotificationConfigurationList",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-getNotificationConfigurationList-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/EmptyRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "basic": {
                      "$ref": "#/components/examples/post-getNotificationConfigurationList-basic-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/GetNotificationConfigurationListResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Get a list of notification subscription configurations",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "getNotificationConfigurationList",
          "x-sortIndex": 3
        }
      },
      "/testNotificationConfiguration": {
        "post": {
          "description": "Tests an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.",
          "operationId": "post-testNotificationConfiguration",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-testNotificationConfiguration-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/TestNotificationConfigurationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "basic": {
                      "$ref": "#/components/examples/post-testNotificationConfiguration-basic-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/TestNotificationConfigurationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Test a notification configuration",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "testNotificationConfiguration",
          "x-sortIndex": 4
        }
      },
      "/updateNotificationConfiguration": {
        "post": {
          "description": "Updates an existing notification subscription configuration. If you are updating the event types, you must provide all event types, otherwise the previous event type configuration will be overwritten.",
          "operationId": "post-updateNotificationConfiguration",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "basic": {
                    "$ref": "#/components/examples/post-updateNotificationConfiguration-basic"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/UpdateNotificationConfigurationRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "basic": {
                      "$ref": "#/components/examples/post-updateNotificationConfiguration-basic-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/GetNotificationConfigurationResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Update a notification subscription configuration",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "updateNotificationConfiguration",
          "x-sortIndex": 5
        }
      }
    },
    "components": {
      "examples": {
        "post-createNotificationConfiguration-basic": {
          "summary": "Create a notification configuration",
          "value": {
            "configurationDetails": {
              "active": true,
              "description": "Unique description 123",
              "eventConfigs": [
                {
                  "eventType": "ACCOUNT_HOLDER_VERIFICATION",
                  "includeMode": "INCLUDE"
                }
              ],
              "notifyPassword": "testPassword",
              "notifyURL": "https://www.adyen.com/notification-handler",
              "notifyUsername": "testUserName",
              "sslProtocol": "TLSv13"
            }
          }
        },
        "post-createNotificationConfiguration-basic-200": {
          "summary": "Example response for request 'basic'",
          "value": {
            "configurationDetails": {
              "active": true,
              "description": "Unique description 123",
              "eventConfigs": [
                {
                  "eventType": "ACCOUNT_HOLDER_VERIFICATION",
                  "includeMode": "INCLUDE"
                }
              ],
              "notificationId": 28468,
              "notifyURL": "https://www.adyen.com/notification-handler",
              "sslProtocol": "TLSv13"
            },
            "pspReference": "8516178952380553"
          }
        },
        "post-deleteNotificationConfigurations-basic": {
          "description": "Deletes an existing notification subscription configuration",
          "summary": "Delete a notification configuration",
          "value": {
            "notificationIds": [
              27891
            ]
          }
        },
        "post-deleteNotificationConfigurations-basic-200": {
          "description": "Example response of deleting a notification configuration",
          "summary": "Delete a notification configuration",
          "value": {
            "pspReference": "8516480472498802"
          }
        },
        "post-getNotificationConfiguration-basic": {
          "description": "Returns the details of the configuration of a notification subscription",
          "summary": "Get a notification configuration",
          "value": {
            "notificationId": 21259
          }
        },
        "post-getNotificationConfiguration-basic-200": {
          "description": "Example response with a notification configuration",
          "summary": "Get a notification configuration",
          "value": {
            "configurationDetails": {
              "active": true,
              "apiVersion": 5,
              "description": "test",
              "eventConfigs": [
                {
                  "eventType": "ACCOUNT_HOLDER_VERIFICATION",
                  "includeMode": "INCLUDE"
                }
              ],
              "notificationId": 50054,
              "notifyURL": "https://www.adyen.com/notification-handler",
              "sslProtocol": "TLSv13"
            },
            "pspReference": "8616480378704419"
          }
        },
        "post-getNotificationConfigurationList-basic": {
          "description": "Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.",
          "summary": "Get a list of configurations",
          "value": {}
        },
        "post-getNotificationConfigurationList-basic-200": {
          "description": "Example response with a list of notification configurations for the executing user",
          "summary": "Get a list of configuration",
          "value": {
            "configurations": [
              {
                "active": true,
                "description": "Unique description 12223",
                "eventConfigs": [
                  {
                    "eventType": "ACCOUNT_HOLDER_VERIFICATION",
                    "includeMode": "INCLUDE"
                  }
                ],
                "notificationId": 27893,
                "notifyURL": "https://www.adyen.com/notification-handler",
                "sslProtocol": "TLSv13"
              },
              {
                "active": true,
                "description": "just testing things",
                "eventConfigs": [
                  {
                    "eventType": "ACCOUNT_HOLDER_VERIFICATION",
                    "includeMode": "INCLUDE"
                  }
                ],
                "notificationId": 25032,
                "notifyURL": "https://www.adyen.com/notification-handler",
                "sslProtocol": "TLSv13"
              }
            ],
            "pspReference": "8516480437185726"
          }
        },
        "post-testNotificationConfiguration-basic": {
          "description": "Returns the test result for a notification subscription",
          "summary": "Test a notification configuration",
          "value": {
            "eventTypes": [
              "ACCOUNT_HOLDER_VERIFICATION"
            ],
            "notificationId": 25032
          }
        },
        "post-testNotificationConfiguration-basic-200": {
          "description": "Example response of a test notification configuration request",
          "summary": "Test a notification configuration",
          "value": {
            "errorMessages": [
              "The required string \"[accepted]\" is not in all the results"
            ],
            "eventTypes": [
              "ACCOUNT_HOLDER_VERIFICATION"
            ],
            "exchangeMessages": [
              {
                "messageCode": "Number",
                "messageDescription": "1"
              },
              {
                "messageCode": "Title",
                "messageDescription": "Test 1: 8616480452462678"
              }
            ],
            "notificationId": 25032,
            "okMessages": [
              "...",
              "ResponseTime_ms: 262",
              "ResponseCode: 404"
            ],
            "pspReference": "8616480452462678"
          }
        },
        "post-updateNotificationConfiguration-basic": {
          "summary": "Update notification configurations",
          "value": {
            "configurationDetails": {
              "active": false,
              "description": "Test notif config 756",
              "eventConfigs": [
                {
                  "eventType": "ACCOUNT_HOLDER_CREATED",
                  "includeMode": "EXCLUDE"
                },
                {
                  "eventType": "ACCOUNT_CREATED",
                  "includeMode": "INCLUDE"
                }
              ],
              "notificationId": 21259,
              "notifyPassword": "testPassword2",
              "notifyURL": "https://www.adyen.com/notification-handler",
              "notifyUsername": "testUserName2",
              "sslProtocol": "TLSv13"
            }
          }
        },
        "post-updateNotificationConfiguration-basic-200": {
          "summary": "Example response for request 'basic'",
          "value": {
            "configurationDetails": {
              "active": false,
              "description": "Test notif config 756",
              "eventConfigs": [
                {
                  "eventType": "ACCOUNT_CREATED",
                  "includeMode": "INCLUDE"
                },
                {
                  "eventType": "ACCOUNT_HOLDER_CREATED",
                  "includeMode": "EXCLUDE"
                }
              ],
              "notificationId": 21259,
              "notifyURL": "https://www.adyen.com/notification-handler",
              "sslProtocol": "TLSv13"
            },
            "pspReference": "8516178952580574"
          }
        }
      },
      "schemas": {
        "CreateNotificationConfigurationRequest": {
          "properties": {
            "configurationDetails": {
              "$ref": "#/components/schemas/NotificationConfigurationDetails",
              "description": "Details of the prospective notification subscription configuration."
            }
          },
          "required": [
            "configurationDetails"
          ],
          "type": "object"
        },
        "DeleteNotificationConfigurationRequest": {
          "properties": {
            "notificationIds": {
              "description": "A list of IDs of the notification subscription configurations to be deleted.",
              "items": {
                "format": "int64",
                "type": "integer"
              },
              "type": "array"
            }
          },
          "required": [
            "notificationIds"
          ],
          "type": "object"
        },
        "EmptyRequest": {
          "type": "object"
        },
        "ErrorFieldType": {
          "properties": {
            "errorCode": {
              "description": "The validation error code.",
              "format": "int32",
              "type": "integer"
            },
            "errorDescription": {
              "description": "A description of the validation error.",
              "type": "string"
            },
            "fieldType": {
              "$ref": "#/components/schemas/FieldType",
              "description": "The type of error field."
            }
          },
          "type": "object"
        },
        "ExchangeMessage": {
          "properties": {
            "messageCode": {
              "type": "string"
            },
            "messageDescription": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "FieldType": {
          "properties": {
            "field": {
              "description": "The full name of the property.",
              "type": "string"
            },
            "fieldName": {
              "description": "The type of the field.",
              "enum": [
                "accountCode",
                "accountHolderCode",
                "accountHolderDetails",
                "accountNumber",
                "accountStateType",
                "accountStatus",
                "accountType",
                "address",
                "balanceAccount",
                "balanceAccountActive",
                "balanceAccountCode",
                "balanceAccountId",
                "bankAccount",
                "bankAccountCode",
                "bankAccountName",
                "bankAccountUUID",
                "bankBicSwift",
                "bankCity",
                "bankCode",
                "bankName",
                "bankStatement",
                "branchCode",
                "businessContact",
                "cardToken",
                "checkCode",
                "city",
                "companyRegistration",
                "constitutionalDocument",
                "controller",
                "country",
                "countryCode",
                "currency",
                "currencyCode",
                "dateOfBirth",
                "description",
                "destinationAccountCode",
                "document",
                "documentContent",
                "documentExpirationDate",
                "documentIssuerCountry",
                "documentIssuerState",
                "documentName",
                "documentNumber",
                "documentType",
                "doingBusinessAs",
                "drivingLicence",
                "drivingLicenceBack",
                "drivingLicenceFront",
                "drivingLicense",
                "email",
                "firstName",
                "formType",
                "fullPhoneNumber",
                "gender",
                "hopWebserviceUser",
                "houseNumberOrName",
                "iban",
                "idCard",
                "idCardBack",
                "idCardFront",
                "idNumber",
                "identityDocument",
                "individualDetails",
                "infix",
                "jobTitle",
                "lastName",
                "lastReviewDate",
                "legalArrangement",
                "legalArrangementCode",
                "legalArrangementEntity",
                "legalArrangementEntityCode",
                "legalArrangementLegalForm",
                "legalArrangementMember",
                "legalArrangementMembers",
                "legalArrangementName",
                "legalArrangementReference",
                "legalArrangementRegistrationNumber",
                "legalArrangementTaxNumber",
                "legalArrangementType",
                "legalBusinessName",
                "legalEntity",
                "legalEntityType",
                "logo",
                "merchantAccount",
                "merchantCategoryCode",
                "merchantHouseNumber",
                "merchantReference",
                "microDeposit",
                "name",
                "nationality",
                "originalReference",
                "ownerCity",
                "ownerCountryCode",
                "ownerDateOfBirth",
                "ownerHouseNumberOrName",
                "ownerName",
                "ownerPostalCode",
                "ownerState",
                "ownerStreet",
                "passport",
                "passportNumber",
                "payoutMethodCode",
                "payoutSchedule",
                "pciSelfAssessment",
                "personalData",
                "phoneCountryCode",
                "phoneNumber",
                "postalCode",
                "primaryCurrency",
                "reason",
                "registrationNumber",
                "returnUrl",
                "schedule",
                "shareholder",
                "shareholderCode",
                "shareholderCodeAndSignatoryCode",
                "shareholderCodeOrSignatoryCode",
                "shareholderType",
                "shareholderTypes",
                "shopperInteraction",
                "signatory",
                "signatoryCode",
                "socialSecurityNumber",
                "sourceAccountCode",
                "splitAccount",
                "splitConfigurationUUID",
                "splitCurrency",
                "splitValue",
                "splits",
                "stateOrProvince",
                "status",
                "stockExchange",
                "stockNumber",
                "stockTicker",
                "store",
                "storeDetail",
                "storeName",
                "storeReference",
                "street",
                "taxId",
                "tier",
                "tierNumber",
                "transferCode",
                "ultimateParentCompany",
                "ultimateParentCompanyAddressDetails",
                "ultimateParentCompanyAddressDetailsCountry",
                "ultimateParentCompanyBusinessDetails",
                "ultimateParentCompanyBusinessDetailsLegalBusinessName",
                "ultimateParentCompanyBusinessDetailsRegistrationNumber",
                "ultimateParentCompanyCode",
                "ultimateParentCompanyStockExchange",
                "ultimateParentCompanyStockNumber",
                "ultimateParentCompanyStockNumberOrStockTicker",
                "ultimateParentCompanyStockTicker",
                "unknown",
                "value",
                "verificationType",
                "virtualAccount",
                "visaNumber",
                "webAddress",
                "year"
              ],
              "type": "string"
            },
            "shareholderCode": {
              "description": "The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "GenericResponse": {
          "properties": {
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "GetNotificationConfigurationListResponse": {
          "properties": {
            "configurations": {
              "description": "Details of the notification subscription configurations.",
              "items": {
                "$ref": "#/components/schemas/NotificationConfigurationDetails"
              },
              "type": "array"
            },
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "GetNotificationConfigurationRequest": {
          "properties": {
            "notificationId": {
              "description": "The ID of the notification subscription configuration whose details are to be retrieved.",
              "format": "int64",
              "type": "integer"
            }
          },
          "required": [
            "notificationId"
          ],
          "type": "object"
        },
        "GetNotificationConfigurationResponse": {
          "properties": {
            "configurationDetails": {
              "$ref": "#/components/schemas/NotificationConfigurationDetails",
              "description": "Details of the notification subscription configuration."
            },
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "required": [
            "configurationDetails"
          ],
          "type": "object"
        },
        "NotificationConfigurationDetails": {
          "properties": {
            "active": {
              "description": "Indicates whether the notification subscription is active.",
              "type": "boolean"
            },
            "apiVersion": {
              "description": "The version of the notification to which you are subscribing. To make sure that your integration can properly process the notification, subscribe to the same version as the API that you're using.",
              "format": "int32",
              "type": "integer"
            },
            "description": {
              "description": "A description of the notification subscription configuration.",
              "type": "string"
            },
            "eventConfigs": {
              "description": "Contains objects that define event types and their subscription settings.",
              "items": {
                "$ref": "#/components/schemas/NotificationEventConfiguration"
              },
              "type": "array"
            },
            "hmacSignatureKey": {
              "description": "A string with which to salt the notification(s) before hashing. If this field is provided, a hash value will be included under the notification header `HmacSignature` and the hash protocol will be included under the notification header `Protocol`. A notification body along with its `hmacSignatureKey` and `Protocol` can be used to calculate a hash value; matching this hash value with the `HmacSignature` will ensure that the notification body has not been tampered with or corrupted.\n\n>Must be a 32-byte hex-encoded string (i.e. a string containing 64 hexadecimal characters; e.g. \"b0ea55c2fe60d4d1d605e9c385e0e7f7e6cafbb939ce07010f31a327a0871f27\").\n\nThe omission of this field will preclude the provision of the `HmacSignature` and `Protocol` headers in notification(s).",
              "type": "string",
              "x-addedInVersion": "5"
            },
            "notificationId": {
              "description": "Adyen-generated ID for the entry, returned in the response when you create a notification configuration. Required when updating an existing configuration using [`/updateNotificationConfiguration`](https://docs.adyen.com/api-explorer/#/NotificationConfigurationService/latest/post/updateNotificationConfiguration).",
              "format": "int64",
              "type": "integer"
            },
            "notifyPassword": {
              "description": "The password to use when accessing the notifyURL with the specified username.",
              "type": "string"
            },
            "notifyURL": {
              "description": "The URL to which the notifications are to be sent.",
              "type": "string"
            },
            "notifyUsername": {
              "description": "The username to use when accessing the notifyURL.",
              "type": "string"
            },
            "sslProtocol": {
              "description": "The SSL protocol employed by the endpoint.\n>Permitted values: `TLSv12`, `TLSv13`.",
              "enum": [
                "TLSv12",
                "TLSv13"
              ],
              "type": "string"
            }
          },
          "type": "object"
        },
        "NotificationEventConfiguration": {
          "properties": {
            "eventType": {
              "description": "The type of event.\n\nPossible values: **ACCOUNT_CLOSED**, **ACCOUNT_CREATED**, **ACCOUNT_FUNDS_BELOW_THRESHOLD**, **ACCOUNT_HOLDER_CREATED**, **ACCOUNT_HOLDER_LIMIT_REACHED**, **ACCOUNT_HOLDER_PAYOUT**, **ACCOUNT_HOLDER_STATUS_CHANGE**, **ACCOUNT_HOLDER_STORE_STATUS_CHANGE**, **ACCOUNT_HOLDER_UPCOMING_DEADLINE**, **ACCOUNT_HOLDER_UPDATED**, **ACCOUNT_HOLDER_VERIFICATION**, **ACCOUNT_UPDATED**, **BENEFICIARY_SETUP**, **COMPENSATE_NEGATIVE_BALANCE**, **DIRECT_DEBIT_INITIATED**, **PAYMENT_FAILURE**, **REFUND_FUNDS_TRANSFER**, **REPORT_AVAILABLE**, **SCHEDULED_REFUNDS**, **TRANSFER_FUNDS**.",
              "enum": [
                "ACCOUNT_CLOSED",
                "ACCOUNT_CREATED",
                "ACCOUNT_FUNDS_BELOW_THRESHOLD",
                "ACCOUNT_HOLDER_CREATED",
                "ACCOUNT_HOLDER_LIMIT_REACHED",
                "ACCOUNT_HOLDER_MIGRATED",
                "ACCOUNT_HOLDER_PAYOUT",
                "ACCOUNT_HOLDER_STATUS_CHANGE",
                "ACCOUNT_HOLDER_STORE_STATUS_CHANGE",
                "ACCOUNT_HOLDER_UPCOMING_DEADLINE",
                "ACCOUNT_HOLDER_UPDATED",
                "ACCOUNT_HOLDER_VERIFICATION",
                "ACCOUNT_UPDATED",
                "BENEFICIARY_SETUP",
                "COMPENSATE_NEGATIVE_BALANCE",
                "DIRECT_DEBIT_INITIATED",
                "FUNDS_MIGRATED",
                "PAYMENT_FAILURE",
                "PENDING_CREDIT",
                "REFUND_FUNDS_TRANSFER",
                "REPORT_AVAILABLE",
                "SCHEDULED_REFUNDS",
                "SCORE_SIGNAL_TRIGGERED",
                "TRANSFER_FUNDS",
                "TRANSFER_NOT_PAIDOUT_TRANSFERS"
              ],
              "type": "string"
            },
            "includeMode": {
              "description": "Indicates whether the specified `eventType` is sent to your webhook endpoint.\nPossible values:\n* **INCLUDE**: Send the specified `eventType`.\n* **EXCLUDE**: Send all event types except the specified `eventType` and other event types with the `includeMode` set to **EXCLUDE**.",
              "enum": [
                "EXCLUDE",
                "INCLUDE"
              ],
              "type": "string"
            }
          },
          "required": [
            "eventType",
            "includeMode"
          ],
          "type": "object"
        },
        "ServiceError": {
          "properties": {
            "errorCode": {
              "description": "The error code mapped to the error message.",
              "type": "string"
            },
            "errorType": {
              "description": "The category of the error.",
              "type": "string"
            },
            "message": {
              "description": "A short explanation of the issue.",
              "type": "string"
            },
            "pspReference": {
              "description": "The PSP reference of the payment.",
              "type": "string"
            },
            "status": {
              "description": "The HTTP response status.",
              "format": "int32",
              "type": "integer"
            }
          },
          "type": "object"
        },
        "TestNotificationConfigurationRequest": {
          "properties": {
            "eventTypes": {
              "description": "The event types to test.  If left blank, then all of the configured event types will be tested.\n>Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.",
              "items": {
                "enum": [
                  "ACCOUNT_CLOSED",
                  "ACCOUNT_CREATED",
                  "ACCOUNT_FUNDS_BELOW_THRESHOLD",
                  "ACCOUNT_HOLDER_CREATED",
                  "ACCOUNT_HOLDER_LIMIT_REACHED",
                  "ACCOUNT_HOLDER_MIGRATED",
                  "ACCOUNT_HOLDER_PAYOUT",
                  "ACCOUNT_HOLDER_STATUS_CHANGE",
                  "ACCOUNT_HOLDER_STORE_STATUS_CHANGE",
                  "ACCOUNT_HOLDER_UPCOMING_DEADLINE",
                  "ACCOUNT_HOLDER_UPDATED",
                  "ACCOUNT_HOLDER_VERIFICATION",
                  "ACCOUNT_UPDATED",
                  "BENEFICIARY_SETUP",
                  "COMPENSATE_NEGATIVE_BALANCE",
                  "DIRECT_DEBIT_INITIATED",
                  "FUNDS_MIGRATED",
                  "PAYMENT_FAILURE",
                  "PENDING_CREDIT",
                  "REFUND_FUNDS_TRANSFER",
                  "REPORT_AVAILABLE",
                  "SCHEDULED_REFUNDS",
                  "SCORE_SIGNAL_TRIGGERED",
                  "TRANSFER_FUNDS",
                  "TRANSFER_NOT_PAIDOUT_TRANSFERS"
                ],
                "type": "string"
              },
              "type": "array"
            },
            "notificationId": {
              "description": "The ID of the notification subscription configuration to be tested.",
              "format": "int64",
              "type": "integer"
            }
          },
          "required": [
            "notificationId"
          ],
          "type": "object"
        },
        "TestNotificationConfigurationResponse": {
          "properties": {
            "errorMessages": {
              "description": "Any error messages encountered.",
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            "eventTypes": {
              "description": "The event types that were tested.\n>Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.",
              "items": {
                "enum": [
                  "ACCOUNT_CLOSED",
                  "ACCOUNT_CREATED",
                  "ACCOUNT_FUNDS_BELOW_THRESHOLD",
                  "ACCOUNT_HOLDER_CREATED",
                  "ACCOUNT_HOLDER_LIMIT_REACHED",
                  "ACCOUNT_HOLDER_MIGRATED",
                  "ACCOUNT_HOLDER_PAYOUT",
                  "ACCOUNT_HOLDER_STATUS_CHANGE",
                  "ACCOUNT_HOLDER_STORE_STATUS_CHANGE",
                  "ACCOUNT_HOLDER_UPCOMING_DEADLINE",
                  "ACCOUNT_HOLDER_UPDATED",
                  "ACCOUNT_HOLDER_VERIFICATION",
                  "ACCOUNT_UPDATED",
                  "BENEFICIARY_SETUP",
                  "COMPENSATE_NEGATIVE_BALANCE",
                  "DIRECT_DEBIT_INITIATED",
                  "FUNDS_MIGRATED",
                  "PAYMENT_FAILURE",
                  "PENDING_CREDIT",
                  "REFUND_FUNDS_TRANSFER",
                  "REPORT_AVAILABLE",
                  "SCHEDULED_REFUNDS",
                  "SCORE_SIGNAL_TRIGGERED",
                  "TRANSFER_FUNDS",
                  "TRANSFER_NOT_PAIDOUT_TRANSFERS"
                ],
                "type": "string"
              },
              "type": "array"
            },
            "exchangeMessages": {
              "description": "The notification message and related response messages.",
              "items": {
                "$ref": "#/components/schemas/ExchangeMessage"
              },
              "type": "array"
            },
            "invalidFields": {
              "description": "Contains field validation errors that would prevent requests from being processed.",
              "items": {
                "$ref": "#/components/schemas/ErrorFieldType"
              },
              "type": "array",
              "x-addedInVersion": "5"
            },
            "notificationId": {
              "description": "The ID of the notification subscription configuration.",
              "format": "int64",
              "type": "integer"
            },
            "okMessages": {
              "description": "A list of messages describing the testing steps.",
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            "pspReference": {
              "description": "The reference of a request. Can be used to uniquely identify the request.",
              "type": "string"
            },
            "resultCode": {
              "description": "The result code.",
              "type": "string"
            }
          },
          "required": [
            "notificationId"
          ],
          "type": "object"
        },
        "UpdateNotificationConfigurationRequest": {
          "properties": {
            "configurationDetails": {
              "$ref": "#/components/schemas/NotificationConfigurationDetails",
              "description": "Details of the notification subscription configuration to be updated."
            }
          },
          "required": [
            "configurationDetails"
          ],
          "type": "object"
        }
      },
      "securitySchemes": {
        "ApiKeyAuth": {
          "in": "header",
          "name": "X-API-Key",
          "type": "apiKey"
        },
        "BasicAuth": {
          "scheme": "basic",
          "type": "http"
        }
      }
    },
    "x-groups": [
      "General"
    ]
}

export const schema5 = {
    "openapi": "3.1.0",
    "servers": [
      {
        "url": "https://balanceplatform-api-test.adyen.com/btl/v3"
      }
    ],
    "info": {
      "contact": {
        "email": "developer-experience@adyen.com",
        "name": "Adyen Developer Experience team",
        "url": "https://www.adyen.help/hc/en-us/community/topics",
        "x-twitter": "Adyen"
      },
      "description": "The Transfers API provides endpoints that you can use to get information about all your transactions, move funds within your balance platform or send funds from your balance platform to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments).\n\n## Authentication\nYour Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:\n\n ```\ncurl\n-H \"Content-Type: application/json\" \\\n-H \"X-API-Key: YOUR_API_KEY\" \\\n...\n```\n\nAlternatively, you can use the username and password to connect to the API using basic authentication. For example:\n\n```\ncurl\n-H \"Content-Type: application/json\" \\\n-U \"ws@BalancePlatform.YOUR_BALANCE_PLATFORM\":\"YOUR_WS_PASSWORD\" \\\n...\n```\n## Roles and permissions\nTo use the Transfers API, you need an additional role for your API credential. Transfers must also be enabled for the source balance account. Your Adyen contact will set up the roles and permissions for you.\n## Versioning\nThe Transfers API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.\n\nFor example:\n```\nhttps://balanceplatform-api-test.adyen.com/btl/v3/transfers\n```\n## Going live\nWhen going live, your Adyen contact will provide your API credential for the live environment. You can then use the username and password to send requests to `https://balanceplatform-api-live.adyen.com/btl/v3`.\n\n",
      "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
      "title": "Transfers API",
      "version": "3",
      "x-apisguru-categories": [
        "payment"
      ],
      "x-logo": {
        "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
      },
      "x-origin": [
        {
          "format": "openapi",
          "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/TransferService-v3.json",
          "version": "3.1"
        }
      ],
      "x-preferred": true,
      "x-providerName": "adyen.com",
      "x-publicVersion": true,
      "x-serviceName": "TransferService",
      "x-timestamp": "2023-04-18T17:29:01Z"
    },
    "tags": [
      {
        "name": "Transactions"
      },
      {
        "name": "Transfers"
      }
    ],
    "paths": {
      "/transactions": {
        "get": {
          "description": "Returns all transactions related to a balance account with a payment instrument of type **bankAccount**.\n\nThis endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.",
          "operationId": "get-transactions",
          "parameters": [
            {
              "description": "Unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).",
              "in": "query",
              "name": "balancePlatform",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).",
              "in": "query",
              "name": "paymentInstrumentId",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).",
              "in": "query",
              "name": "accountHolderId",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).",
              "in": "query",
              "name": "balanceAccountId",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "The `cursor` returned in the links of the previous response.",
              "in": "query",
              "name": "cursor",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Only include transactions that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.",
              "in": "query",
              "name": "createdSince",
              "required": true,
              "schema": {
                "format": "date-time",
                "type": "string"
              }
            },
            {
              "description": "Only include transactions that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.",
              "in": "query",
              "name": "createdUntil",
              "required": true,
              "schema": {
                "format": "date-time",
                "type": "string"
              }
            },
            {
              "description": "The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.",
              "in": "query",
              "name": "limit",
              "required": false,
              "schema": {
                "format": "int32",
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "success": {
                      "$ref": "#/components/examples/get-transactions-success-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/TransactionSearchResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Get all transactions",
          "tags": [
            "Transactions"
          ],
          "x-addedInVersion": "1",
          "x-groupName": "Transactions",
          "x-methodName": "getAllTransactions",
          "x-sortIndex": 1
        }
      },
      "/transactions/{id}": {
        "get": {
          "description": "Returns a transaction.",
          "operationId": "get-transactions-id",
          "parameters": [
            {
              "description": "Unique identifier of the transaction.",
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "success": {
                      "$ref": "#/components/examples/get-transactions-id-success-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/Transaction"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Get a transaction",
          "tags": [
            "Transactions"
          ],
          "x-addedInVersion": "1",
          "x-groupName": "Transactions",
          "x-methodName": "getTransaction",
          "x-sortIndex": 2
        }
      },
      "/transfers": {
        "post": {
          "description": "Starts a request to transfer funds to [balance accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts), [transfer instruments](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments), or third-party bank accounts. Adyen sends the outcome of the transfer request through webhooks.\n\nTo use this endpoint, you need an additional role for your API credential and transfers must be enabled for the source balance account. Your Adyen contact will set these up for you.",
          "operationId": "post-transfers",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "payout-cross-border": {
                    "$ref": "#/components/examples/post-transfers-payout-cross-border"
                  },
                  "payout-local-transfer-sepa": {
                    "$ref": "#/components/examples/post-transfers-payout-local-transfer-sepa"
                  },
                  "payout-local-transfer-us": {
                    "$ref": "#/components/examples/post-transfers-payout-local-transfer-us"
                  },
                  "payout-to-balance-account": {
                    "$ref": "#/components/examples/post-transfers-payout-to-balance-account"
                  },
                  "payout-to-transfer-instrument": {
                    "$ref": "#/components/examples/post-transfers-payout-to-transfer-instrument"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/TransferInfo"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "payout-cross-border": {
                      "$ref": "#/components/examples/post-transfers-payout-cross-border-200"
                    },
                    "payout-local-transfer-sepa": {
                      "$ref": "#/components/examples/post-transfers-payout-local-transfer-sepa-200"
                    },
                    "payout-local-transfer-us": {
                      "$ref": "#/components/examples/post-transfers-payout-local-transfer-us-200"
                    },
                    "payout-to-balance-account": {
                      "$ref": "#/components/examples/post-transfers-payout-to-balance-account-200"
                    },
                    "payout-to-transfer-instrument": {
                      "$ref": "#/components/examples/post-transfers-payout-to-transfer-instrument-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/Transfer"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "202": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Transfer"
                  }
                }
              },
              "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RestServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Transfer funds",
          "tags": [
            "Transfers"
          ],
          "x-addedInVersion": "2",
          "x-groupName": "Transfers",
          "x-methodName": "transferFunds",
          "x-sortIndex": 1
        }
      }
    },
    "components": {
      "examples": {
        "get-transactions-id-success-200": {
          "description": "Example response for a transaction",
          "summary": "Response code - 200 OK",
          "value": {
            "accountHolderId": "AHA1B2C3D4E5F6G7H8I9J0",
            "amount": {
              "currency": "EUR",
              "value": 9887
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "balancePlatform": "YOUR_BALANCE_PLATFORM",
            "bookingDate": "2022-03-14T12:01:00+01:00",
            "category": "bank",
            "counterparty": {
              "balanceAccountId": "BA00000000000000000000001"
            },
            "createdAt": "2022-03-14T12:01:00+01:00",
            "description": "YOUR_DESCRIPTION",
            "id": "IZK7C25U7DYVX03Y",
            "instructedAmount": {
              "currency": "EUR",
              "value": 9887
            },
            "reference": "2L6C6B5U7DYULLXC",
            "referenceForBeneficiary": "YOUR_REFERENCE_FOR_BENEFICIARY",
            "status": "booked",
            "transferId": "2QP32A5U7IWC5WKG",
            "type": "bankTransfer",
            "valueDate": "2022-03-14T12:01:00+01:00"
          }
        },
        "get-transactions-success-200": {
          "description": "Example response for a list of transactions",
          "summary": "Response code - 200 OK",
          "value": {
            "_links": {
              "next": {
                "href": "https://balanceplatform-api-test.adyen.com/btl/v2/transactions?balancePlatform=Bastronaut&createdUntil=2022-03-21T00%3A00%3A00Z&createdSince=2022-03-11T00%3A00%3A00Z&limit=3&cursor=S2B-TSAjOkIrYlIlbjdqe0RreHRyM32lKRSxubXBHRkhHL2E32XitQQz5SfzpucD5HbHwpM1p6NDR1eXVQLFF6MmY33J32sobDxQYT90MHIud1hwLnd6JitcX32xJ"
              }
            },
            "data": [
              {
                "accountHolderId": "AHA1B2C3D4E5F6G7H8I9J0",
                "amount": {
                  "currency": "EUR",
                  "value": -9
                },
                "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "bookingDate": "2022-03-11T11:21:24+01:00",
                "category": "internal",
                "counterparty": {
                  "balanceAccountId": "BA00000000000000000000001"
                },
                "createdAt": "2022-03-11T11:21:24+01:00",
                "id": "1VVF0D5U66PIUIVP",
                "instructedAmount": {
                  "currency": "EUR",
                  "value": -9
                },
                "reference": "REFERENCE_46e8c40e",
                "status": "booked",
                "transferId": "1VVF0D5U66PIUIVP",
                "type": "fee",
                "valueDate": "2022-03-11T11:21:24+01:00"
              },
              {
                "accountHolderId": "AHA1B2C3D4E5F6G7H8I9J0",
                "amount": {
                  "currency": "EUR",
                  "value": -46
                },
                "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "bookingDate": "2022-03-12T14:22:52+01:00",
                "category": "internal",
                "counterparty": {
                  "balanceAccountId": "BA00000000000000000000001"
                },
                "createdAt": "2022-03-12T14:22:52+01:00",
                "id": "1WEPGD5U6MS1CFK3",
                "instructedAmount": {
                  "currency": "EUR",
                  "value": -46
                },
                "reference": "YOUR_REFERENCE",
                "status": "booked",
                "transferId": "1WEPGD5U6MS1CFK3",
                "type": "fee",
                "valueDate": "2022-03-12T14:22:52+01:00"
              },
              {
                "accountHolderId": "AHA1B2C3D4E5F6G7H8I9J0",
                "amount": {
                  "currency": "EUR",
                  "value": -8
                },
                "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "bookingDate": "2022-03-14T21:00:48+01:00",
                "counterparty": {
                  "balanceAccountId": "BA00000000000000000000001"
                },
                "createdAt": "2022-03-14T15:00:00+01:00",
                "description": "YOUR_DESCRIPTION_2",
                "id": "2QP32A5U7IWC5WKG",
                "instructedAmount": {
                  "currency": "EUR",
                  "value": -8
                },
                "reference": "REFERENCE_46e8c40e",
                "status": "booked",
                "valueDate": "2022-03-14T21:00:48+01:00"
              }
            ]
          }
        },
        "post-transfers-payout-cross-border": {
          "description": "Example request to make a cross-border transfer",
          "summary": "Make a cross-border transfer",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 110000
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "category": "bank",
            "counterparty": {
              "bankAccount": {
                "accountHolder": {
                  "address": {
                    "city": "San Francisco",
                    "country": "US",
                    "postalCode": "94678",
                    "stateOrProvince": "CA",
                    "street": "Brannan Street",
                    "street2": "274"
                  },
                  "fullName": "A. Klaassen"
                },
                "accountIdentification": {
                  "accountNumber": "123456789",
                  "bic": "BOFAUS3NXXX",
                  "type": "numberAndBic"
                }
              }
            },
            "description": "Your description for the transfer",
            "priority": "crossBorder",
            "reference": "Your internal reference for the transfer",
            "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary"
          }
        },
        "post-transfers-payout-cross-border-200": {
          "description": "Example response for a transfers request",
          "summary": "Response code - 200 OK",
          "value": {
            "accountHolder": {
              "description": "Your account holder description",
              "id": "AH3227C223222C5GXQXF658WB",
              "reference": "Your account holder reference"
            },
            "amount": {
              "currency": "EUR",
              "value": 110000
            },
            "balanceAccount": {
              "description": "Your balance account description",
              "id": "BAB8B2C3D4E5F6G7H8D9J6GD4",
              "reference": "Your balance account reference"
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "category": "bank",
            "counterparty": {
              "bankAccount": {
                "accountHolder": {
                  "address": {
                    "city": "San Francisco",
                    "country": "US",
                    "postalCode": "94678",
                    "stateOrProvince": "CA",
                    "street": "Brannan Street",
                    "street2": "274"
                  },
                  "fullName": "A. Klaassen"
                },
                "accountIdentification": {
                  "accountNumber": "123456789",
                  "bic": "BOFAUS3NXXX",
                  "type": "numberAndBic"
                }
              }
            },
            "description": "Your description for the transfer",
            "direction": "outgoing",
            "id": "1W1UG35U8A9J5ZLG",
            "paymentInstrument": {
              "description": "Your payment instrument description",
              "id": "PI3222G223222G59347DAA265",
              "reference": "Your payment instrument reference"
            },
            "paymentInstrumentId": "PI3222G223222G59347DAA265",
            "priority": "crossBorder",
            "reason": "approved",
            "reference": "Your internal reference for the transfer",
            "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary",
            "status": "authorised"
          }
        },
        "post-transfers-payout-local-transfer-sepa": {
          "description": "Example request to make a SEPA funds transfer",
          "summary": "Make a SEPA funds transfer",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 110000
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "category": "bank",
            "counterparty": {
              "bankAccount": {
                "accountHolder": {
                  "fullName": "A. Klaassen"
                },
                "accountIdentification": {
                  "iban": "NL91ABNA0417164300",
                  "type": "iban"
                }
              }
            },
            "description": "Your description for the transfer",
            "priority": "regular",
            "reference": "Your internal reference for the transfer",
            "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary"
          }
        },
        "post-transfers-payout-local-transfer-sepa-200": {
          "description": "Example response for a transfers request",
          "summary": "Response code - 200 OK",
          "value": {
            "accountHolder": {
              "description": "Your account holder description",
              "id": "AH3227C223222C5GXQXF658WB",
              "reference": "Your account holder reference"
            },
            "amount": {
              "currency": "EUR",
              "value": 110000
            },
            "balanceAccount": {
              "description": "Your balance account description",
              "id": "BAB8B2C3D4E5F6G7H8D9J6GD4",
              "reference": "Your balance account reference"
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "category": "bank",
            "counterparty": {
              "bankAccount": {
                "accountHolder": {
                  "fullName": "A. Klaassen"
                },
                "accountIdentification": {
                  "iban": "NL91ABNA0417164300",
                  "type": "iban"
                }
              }
            },
            "description": "Your description for the transfer",
            "direction": "outgoing",
            "id": "1W1UG35U8A9J5ZLG",
            "paymentInstrument": {
              "description": "Your payment instrument description",
              "id": "PI3222G223222G59347DAA265",
              "reference": "Your payment instrument reference"
            },
            "paymentInstrumentId": "PI3222G223222G59347DAA265",
            "priority": "regular",
            "reason": "approved",
            "reference": "Your internal reference for the transfer",
            "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary",
            "status": "authorised"
          }
        },
        "post-transfers-payout-local-transfer-us": {
          "description": "Example request to make a US local funds transfer",
          "summary": "Make a US local funds transfer",
          "value": {
            "amount": {
              "currency": "USD",
              "value": 110000
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "category": "bank",
            "counterparty": {
              "bankAccount": {
                "accountHolder": {
                  "fullName": "A. Klaassen"
                },
                "accountIdentification": {
                  "accountNumber": "123456789",
                  "routingNumber": "011000138",
                  "type": "usLocal"
                }
              }
            },
            "description": "Your description for the transfer",
            "priority": "regular",
            "reference": "Your internal reference for the transfer",
            "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary"
          }
        },
        "post-transfers-payout-local-transfer-us-200": {
          "description": "Example response for a transfers request",
          "summary": "Response code - 200 OK",
          "value": {
            "accountHolder": {
              "description": "Your account holder description",
              "id": "AH3227C223222C5GXQXF658WB",
              "reference": "Your account holder reference"
            },
            "amount": {
              "currency": "USD",
              "value": 110000
            },
            "balanceAccount": {
              "description": "Your balance account description",
              "id": "BAB8B2C3D4E5F6G7H8D9J6GD4",
              "reference": "Your balance account reference"
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "category": "bank",
            "counterparty": {
              "bankAccount": {
                "accountHolder": {
                  "fullName": "A. Klaassen"
                },
                "accountIdentification": {
                  "accountNumber": "123456789",
                  "routingNumber": "011000138",
                  "type": "usLocal"
                }
              }
            },
            "description": "Your description for the transfer",
            "direction": "outgoing",
            "id": "1W1UG35U8A9J5ZLG",
            "paymentInstrument": {
              "description": "Your payment instrument description",
              "id": "PI3222G223222G59347DAA265",
              "reference": "Your payment instrument reference"
            },
            "paymentInstrumentId": "PI3222G223222G59347DAA265",
            "priority": "regular",
            "reason": "approved",
            "reference": "Your internal reference for the transfer",
            "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary",
            "status": "authorised"
          }
        },
        "post-transfers-payout-to-balance-account": {
          "description": "Example request to transfer funds to another balance account",
          "summary": "Transfer funds to another balance account",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 10000
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "category": "internal",
            "counterparty": {
              "balanceAccountId": "BA32272223222B5LPRFDW7J9G"
            },
            "description": "Your description for the transfer",
            "reference": "Your internal reference for the transfer",
            "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary"
          }
        },
        "post-transfers-payout-to-balance-account-200": {
          "description": "Example response for a transfers request",
          "summary": "Response code - 200 OK",
          "value": {
            "accountHolder": {
              "description": "Your account holder description",
              "id": "AH3227C223222C5GXQXF658WB",
              "reference": "Your account holder reference"
            },
            "amount": {
              "currency": "EUR",
              "value": 10000
            },
            "balanceAccount": {
              "description": "Your balance account description",
              "id": "BAB8B2C3D4E5F6G7H8D9J6GD4",
              "reference": "Your balance account reference"
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "category": "internal",
            "counterparty": {
              "balanceAccountId": "BA32272223222B5LPRFDW7J9G"
            },
            "description": "Your description for the transfer",
            "direction": "outgoing",
            "id": "1W1UG35U8A9J5ZLG",
            "reason": "approved",
            "reference": "Your internal reference for the transfer",
            "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary",
            "status": "authorised"
          }
        },
        "post-transfers-payout-to-transfer-instrument": {
          "description": "Example request to pay out to a transfer instrument",
          "summary": "Pay out to a transfer instrument",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 80000
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "category": "bank",
            "counterparty": {
              "transferInstrumentId": "SE1234567890ABC1234567890"
            },
            "description": "Your description for the transfer",
            "priority": "regular",
            "reference": "Your internal reference for the transfer",
            "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary"
          }
        },
        "post-transfers-payout-to-transfer-instrument-200": {
          "description": "Example response for a transfers request",
          "summary": "Response code - 200 OK",
          "value": {
            "accountHolder": {
              "description": "Your account holder description",
              "id": "AH3227C223222C5GXQXF658WB",
              "reference": "Your account holder reference"
            },
            "amount": {
              "currency": "EUR",
              "value": 80000
            },
            "balanceAccount": {
              "description": "Your balance account description",
              "id": "BAB8B2C3D4E5F6G7H8D9J6GD4",
              "reference": "Your balance account reference"
            },
            "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
            "category": "bank",
            "counterparty": {
              "transferInstrumentId": "SE1234567890ABC1234567890"
            },
            "description": "Your description for the transfer",
            "direction": "outgoing",
            "id": "1W1UG35U8A9J5ZLG",
            "paymentInstrument": {
              "description": "Your payment instrument description",
              "id": "PI3222G223222G59347DAA265",
              "reference": "Your payment instrument reference"
            },
            "paymentInstrumentId": "PI3222G223222G59347DAA265",
            "priority": "regular",
            "reason": "approved",
            "reference": "Your internal reference for the transfer",
            "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary",
            "status": "authorised"
          }
        }
      },
      "schemas": {
        "AULocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The bank account number, without separators or whitespace.",
              "maxLength": 9,
              "minLength": 5,
              "type": "string"
            },
            "bsbCode": {
              "description": "The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.",
              "maxLength": 6,
              "minLength": 6,
              "type": "string"
            },
            "type": {
              "default": "auLocal",
              "description": "**auLocal**",
              "enum": [
                "auLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber",
            "bsbCode"
          ],
          "type": "object"
        },
        "AdditionalBankIdentification": {
          "properties": {
            "code": {
              "description": "The value of the additional bank identification.",
              "type": "string"
            },
            "type": {
              "description": "The type of additional bank identification, depending on the country.\n\nPossible values:\n\n * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces\n * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.",
              "enum": [
                "gbSortCode",
                "usRoutingNumber"
              ],
              "type": "string"
            }
          },
          "type": "object"
        },
        "Address-2": {
          "properties": {
            "city": {
              "description": "The name of the city.",
              "type": "string"
            },
            "country": {
              "description": "The two-character ISO 3166-1 alpha-2 country code. For example, **US**.\n>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
              "type": "string"
            },
            "line1": {
              "description": "First line of the street address.",
              "type": "string"
            },
            "line2": {
              "description": "Second line of the street address.",
              "type": "string"
            },
            "postalCode": {
              "description": "The postal code.\nMaximum length:\n* 5 digits for an address in the US.\n* 10 characters for an address in all other countries.",
              "type": "string"
            },
            "stateOrProvince": {
              "description": "The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n> Required for the US and Canada.",
              "type": "string"
            }
          },
          "required": [
            "country"
          ],
          "type": "object"
        },
        "Amount": {
          "properties": {
            "currency": {
              "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).",
              "maxLength": 3,
              "minLength": 3,
              "type": "string"
            },
            "value": {
              "description": "The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
              "format": "int64",
              "type": "integer"
            }
          },
          "required": [
            "value",
            "currency"
          ],
          "type": "object"
        },
        "BRLocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The bank account number (without separators or whitespace).",
              "maxLength": 10,
              "minLength": 1,
              "type": "string"
            },
            "bankCode": {
              "description": "The 3-digit Brazilian bank code (with leading zeros).",
              "maxLength": 3,
              "minLength": 3,
              "type": "string"
            },
            "branchNumber": {
              "description": "The bank account branch number (without separators or whitespace).",
              "maxLength": 4,
              "minLength": 1,
              "type": "string"
            },
            "type": {
              "default": "brLocal",
              "description": "**brLocal**",
              "enum": [
                "brLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "branchNumber",
            "accountNumber",
            "bankCode"
          ],
          "type": "object"
        },
        "BankAccountV3": {
          "properties": {
            "accountHolder": {
              "$ref": "#/components/schemas/PartyIdentification-2",
              "description": "Information about the owner of the bank account."
            },
            "accountIdentification": {
              "description": "Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.",
              "oneOf": [
                {
                  "$ref": "#/components/schemas/AULocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/BRLocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/CALocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/CZLocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/DKLocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/HULocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/IbanAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/NOLocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/NumberAndBicAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/PLLocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/SELocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/SGLocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/UKLocalAccountIdentification"
                },
                {
                  "$ref": "#/components/schemas/USLocalAccountIdentification"
                }
              ]
            }
          },
          "required": [
            "accountIdentification",
            "accountHolder"
          ],
          "type": "object"
        },
        "CALocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The 5- to 12-digit bank account number, without separators or whitespace.",
              "maxLength": 12,
              "minLength": 5,
              "type": "string"
            },
            "accountType": {
              "default": "checking",
              "description": "The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.",
              "enum": [
                "checking",
                "savings"
              ],
              "type": "string"
            },
            "institutionNumber": {
              "description": "The 3-digit institution number, without separators or whitespace.",
              "maxLength": 3,
              "minLength": 3,
              "type": "string"
            },
            "transitNumber": {
              "description": "The 5-digit transit number, without separators or whitespace.",
              "maxLength": 5,
              "minLength": 5,
              "type": "string"
            },
            "type": {
              "default": "caLocal",
              "description": "**caLocal**",
              "enum": [
                "caLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber",
            "institutionNumber",
            "transitNumber"
          ],
          "type": "object"
        },
        "CZLocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The 2- to 16-digit bank account number (Číslo účtu) in the following format:\n\n- The optional prefix (předčíslí).\n\n- The required second part (základní část) which must be at least two non-zero digits.\n\nExamples:\n\n- **19-123457** (with prefix)\n\n- **123457** (without prefix)\n\n- **000019-0000123457** (with prefix, normalized)\n\n- **000000-0000123457** (without prefix, normalized)",
              "maxLength": 17,
              "minLength": 2,
              "type": "string"
            },
            "bankCode": {
              "description": "The 4-digit bank code (Kód banky), without separators or whitespace.",
              "maxLength": 4,
              "minLength": 4,
              "type": "string"
            },
            "type": {
              "default": "czLocal",
              "description": "**czLocal**",
              "enum": [
                "czLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber",
            "bankCode"
          ],
          "type": "object"
        },
        "CounterpartyInfoV3": {
          "properties": {
            "balanceAccountId": {
              "description": "Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).",
              "type": "string"
            },
            "bankAccount": {
              "$ref": "#/components/schemas/BankAccountV3",
              "description": "Contains information about the bank account."
            },
            "transferInstrumentId": {
              "description": "Unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "CounterpartyV3": {
          "properties": {
            "balanceAccountId": {
              "description": "Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).",
              "type": "string"
            },
            "bankAccount": {
              "$ref": "#/components/schemas/BankAccountV3",
              "description": "Contains information about the bank account."
            },
            "merchant": {
              "$ref": "#/components/schemas/MerchantData",
              "description": "Contains information about the merchant."
            },
            "transferInstrumentId": {
              "description": "Unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "DKLocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).",
              "maxLength": 10,
              "minLength": 4,
              "type": "string"
            },
            "bankCode": {
              "description": "The 4-digit bank code (Registreringsnummer) (without separators or whitespace).",
              "maxLength": 4,
              "minLength": 4,
              "type": "string"
            },
            "type": {
              "default": "dkLocal",
              "description": "**dkLocal**",
              "enum": [
                "dkLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber",
            "bankCode"
          ],
          "type": "object"
        },
        "HULocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The 24-digit bank account number, without separators or whitespace.",
              "maxLength": 24,
              "minLength": 24,
              "type": "string"
            },
            "type": {
              "default": "huLocal",
              "description": "**huLocal**",
              "enum": [
                "huLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber"
          ],
          "type": "object"
        },
        "IbanAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "iban": {
              "description": "The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.",
              "type": "string"
            },
            "type": {
              "default": "iban",
              "description": "**iban**",
              "enum": [
                "iban"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "iban"
          ],
          "type": "object"
        },
        "InvalidField": {
          "properties": {
            "message": {
              "description": "Description of the validation error.",
              "type": "string"
            },
            "name": {
              "description": "The field that has an invalid value.",
              "type": "string"
            },
            "value": {
              "description": "The invalid value.",
              "type": "string"
            }
          },
          "required": [
            "name",
            "value",
            "message"
          ],
          "type": "object"
        },
        "JSONObject": {
          "properties": {
            "paths": {
              "items": {
                "$ref": "#/components/schemas/JSONPath"
              },
              "type": "array"
            },
            "rootPath": {
              "$ref": "#/components/schemas/JSONPath"
            }
          },
          "type": "object"
        },
        "JSONPath": {
          "properties": {
            "content": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          "type": "object"
        },
        "Link": {
          "properties": {
            "href": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "Links": {
          "properties": {
            "next": {
              "$ref": "#/components/schemas/Link",
              "description": "Contains a link to the next page."
            },
            "prev": {
              "$ref": "#/components/schemas/Link",
              "description": "Contains a link to the previous page."
            }
          },
          "type": "object"
        },
        "MerchantData": {
          "properties": {
            "mcc": {
              "description": "The merchant category code.",
              "type": "string"
            },
            "merchantId": {
              "description": "The merchant identifier.",
              "type": "string"
            },
            "nameLocation": {
              "$ref": "#/components/schemas/NameLocation",
              "description": "Contains the merchant's name and location."
            },
            "postalCode": {
              "description": "The merchant postal code.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "NOLocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The 11-digit bank account number, without separators or whitespace.",
              "maxLength": 11,
              "minLength": 11,
              "type": "string"
            },
            "type": {
              "default": "noLocal",
              "description": "**noLocal**",
              "enum": [
                "noLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber"
          ],
          "type": "object"
        },
        "NameLocation": {
          "properties": {
            "city": {
              "description": "The city where the merchant is located.",
              "type": "string"
            },
            "country": {
              "description": "The country where the merchant is located in [three-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.",
              "type": "string"
            },
            "countryOfOrigin": {
              "description": "The home country in [three-digit country code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) format, used for government-controlled merchants such as embassies.",
              "type": "string"
            },
            "name": {
              "description": "The name of the merchant's shop or service.",
              "type": "string"
            },
            "rawData": {
              "description": "The raw data.",
              "type": "string"
            },
            "state": {
              "description": "The state where the merchant is located.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "NumberAndBicAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The bank account number, without separators or whitespace. The length and format depends on the bank or country.",
              "maxLength": 34,
              "type": "string"
            },
            "additionalBankIdentification": {
              "$ref": "#/components/schemas/AdditionalBankIdentification",
              "description": "Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers."
            },
            "bic": {
              "description": "The bank's 8- or 11-character BIC or SWIFT code.",
              "maxLength": 11,
              "minLength": 8,
              "type": "string"
            },
            "type": {
              "default": "numberAndBic",
              "description": "**numberAndBic**",
              "enum": [
                "numberAndBic"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber",
            "bic"
          ],
          "type": "object"
        },
        "PLLocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.",
              "maxLength": 26,
              "minLength": 26,
              "type": "string"
            },
            "type": {
              "default": "plLocal",
              "description": "**plLocal**",
              "enum": [
                "plLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber"
          ],
          "type": "object"
        },
        "PartyIdentification-2": {
          "properties": {
            "address": {
              "$ref": "#/components/schemas/Address-2",
              "description": "Address of the bank account owner."
            },
            "dateOfBirth": {
              "description": "The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.\n\nAllowed only when `type` is **individual**.",
              "format": "date",
              "type": "string"
            },
            "firstName": {
              "description": "First name of the individual.\n\nAllowed only when `type` is **individual**.",
              "type": "string"
            },
            "fullName": {
              "description": "The name of the entity.",
              "type": "string"
            },
            "lastName": {
              "description": "Last name of the individual.\n\nAllowed only when `type` is **individual**.",
              "type": "string"
            },
            "reference": {
              "description": "Your unique reference of the party. This should be consistent for all transfers initiated to/from the same party/counterparty. e.g Your client's unique wallet or payee ID",
              "type": "string"
            },
            "type": {
              "default": "unknown",
              "description": "The type of entity that owns the bank account.\n\n Possible values: **individual**, **organization**, or **unknown**.",
              "enum": [
                "individual",
                "organization",
                "unknown"
              ],
              "type": "string"
            }
          },
          "required": [
            "fullName"
          ],
          "type": "object"
        },
        "PaymentInstrument": {
          "properties": {
            "description": {
              "description": "The description of the resource.",
              "type": "string"
            },
            "id": {
              "description": "The unique identifier of the resource.",
              "type": "string"
            },
            "reference": {
              "description": "The reference for the resource.",
              "type": "string"
            },
            "tokenType": {
              "description": "The type of wallet the network token is associated with.",
              "type": "string",
              "x-addedInVersion": "3"
            }
          },
          "type": "object"
        },
        "ResourceReference": {
          "properties": {
            "description": {
              "description": "The description of the resource.",
              "type": "string"
            },
            "id": {
              "description": "The unique identifier of the resource.",
              "type": "string"
            },
            "reference": {
              "description": "The reference for the resource.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "RestServiceError": {
          "properties": {
            "detail": {
              "description": "A human-readable explanation specific to this occurrence of the problem.",
              "type": "string"
            },
            "errorCode": {
              "description": "A code that identifies the problem type.",
              "type": "string"
            },
            "instance": {
              "description": "A unique URI that identifies the specific occurrence of the problem.",
              "type": "string"
            },
            "invalidFields": {
              "description": "Detailed explanation of each validation error, when applicable.",
              "items": {
                "$ref": "#/components/schemas/InvalidField"
              },
              "type": "array"
            },
            "requestId": {
              "description": "A unique reference for the request, essentially the same as `pspReference`.",
              "type": "string"
            },
            "response": {
              "$ref": "#/components/schemas/JSONObject",
              "description": "JSON response payload."
            },
            "status": {
              "description": "The HTTP status code.",
              "format": "int32",
              "type": "integer"
            },
            "title": {
              "description": "A short, human-readable summary of the problem type.",
              "type": "string"
            },
            "type": {
              "description": "A URI that identifies the problem type, pointing to human-readable documentation on this problem type.",
              "type": "string"
            }
          },
          "required": [
            "type",
            "errorCode",
            "title",
            "detail",
            "status"
          ],
          "type": "object"
        },
        "SELocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.",
              "maxLength": 10,
              "minLength": 7,
              "type": "string"
            },
            "clearingNumber": {
              "description": "The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.",
              "maxLength": 5,
              "minLength": 4,
              "type": "string"
            },
            "type": {
              "default": "seLocal",
              "description": "**seLocal**",
              "enum": [
                "seLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber",
            "clearingNumber"
          ],
          "type": "object"
        },
        "SGLocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The 4- to 19-digit bank account number, without separators or whitespace.",
              "maxLength": 19,
              "minLength": 4,
              "type": "string"
            },
            "bic": {
              "description": "The bank's 8- or 11-character BIC or SWIFT code.",
              "maxLength": 11,
              "minLength": 8,
              "type": "string"
            },
            "type": {
              "default": "sgLocal",
              "description": "**sgLocal**",
              "enum": [
                "sgLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "accountNumber",
            "bic"
          ],
          "type": "object"
        },
        "Transaction": {
          "properties": {
            "accountHolderId": {
              "description": "Unique identifier of the account holder.",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "amount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount.",
              "x-addedInVersion": "1"
            },
            "balanceAccountId": {
              "description": "Unique identifier of the balance account.",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "balancePlatform": {
              "description": "Unique identifier of the balance platform.",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "bookingDate": {
              "description": "The date the transaction was booked to the balance account.",
              "format": "date-time",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "category": {
              "description": "The category of the transaction indicating the type of activity.\n\n Possible values:\n\n* **platformPayment**: The transaction is a payment or payment modification made with an Adyen merchant account.\n\n* **internal**: The transaction resulted from an internal adjustment such as a deposit correction or invoice deduction.\n\n* **bank**: The transaction is a bank-related activity, such as sending a payout or receiving funds.\n\n* **issuedCard**: The transaction is a card-related activity, such as using an Adyen-issued card to pay online.\n\n",
              "enum": [
                "bank",
                "grants",
                "internal",
                "issuedCard",
                "platformPayment"
              ],
              "type": "string",
              "x-addedInVersion": "1"
            },
            "counterparty": {
              "$ref": "#/components/schemas/CounterpartyV3",
              "description": "Contains information about the other party in the transaction.",
              "x-addedInVersion": "3"
            },
            "createdAt": {
              "description": "The date the transaction was created.",
              "format": "date-time",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "description": {
              "description": "The `description` from the `/transfers` request.",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "id": {
              "description": "Unique identifier of the transaction.",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "instructedAmount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount that the sender instructed their bank to send. This can be higher than `amount.value` when their bank deducts costs for the transfer.",
              "x-addedInVersion": "1"
            },
            "paymentInstrumentId": {
              "description": "Unique identifier of the payment instrument that was used for the transaction.",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "reference": {
              "description": "The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference.",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "referenceForBeneficiary": {
              "description": "The reference sent to or received from the counterparty.\n\n* For outgoing funds, this is the [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary) from the  [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_referenceForBeneficiary) request.\n\n * For incoming funds, this is the reference from the sender.",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "status": {
              "description": "The status of the transaction.\n\n Possible values:\n\n* **pending**: The transaction is still pending.\n\n* **booked**: The transaction has been booked to the balance account.\n\n",
              "enum": [
                "booked",
                "pending"
              ],
              "type": "string",
              "x-addedInVersion": "1"
            },
            "transferId": {
              "description": "Unique identifier of the related transfer.",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "type": {
              "description": "The type of the transaction.\n\n Possible values: **payment**, **capture**, **captureReversal**, **refund** **refundReversal**, **chargeback**, **chargebackReversal**, **secondChargeback**, **atmWithdrawal**, **atmWithdrawalReversal**, **internalTransfer**, **manualCorrection**, **invoiceDeduction**, **depositCorrection**, **bankTransfer**, **miscCost**, **paymentCost**, **fee**",
              "enum": [
                "atmWithdrawal",
                "atmWithdrawalReversal",
                "balanceAdjustment",
                "balanceRollover",
                "bankTransfer",
                "capture",
                "captureReversal",
                "chargeback",
                "chargebackReversal",
                "depositCorrection",
                "fee",
                "grant",
                "installment",
                "installmentReversal",
                "internalTransfer",
                "invoiceDeduction",
                "leftover",
                "manualCorrection",
                "miscCost",
                "payment",
                "paymentCost",
                "refund",
                "refundReversal",
                "repayment",
                "reserveAdjustment",
                "secondChargeback"
              ],
              "type": "string",
              "x-addedInVersion": "1"
            },
            "valueDate": {
              "description": "The date the transfer amount becomes available in the balance account.",
              "format": "date-time",
              "type": "string",
              "x-addedInVersion": "1"
            }
          },
          "required": [
            "id",
            "accountHolderId",
            "balanceAccountId",
            "amount",
            "reference",
            "status",
            "createdAt",
            "bookingDate",
            "valueDate",
            "counterparty",
            "balancePlatform"
          ],
          "type": "object"
        },
        "TransactionSearchResponse": {
          "properties": {
            "_links": {
              "$ref": "#/components/schemas/Links",
              "description": "Contains links to the next and previous page whenever applicable."
            },
            "data": {
              "description": "Contains the transactions that match the query parameters.",
              "items": {
                "$ref": "#/components/schemas/Transaction"
              },
              "type": "array"
            }
          },
          "type": "object"
        },
        "Transfer": {
          "properties": {
            "accountHolder": {
              "$ref": "#/components/schemas/ResourceReference",
              "description": "The account holder associated with the balance account used in the transfer.",
              "x-addedInVersion": "3"
            },
            "amount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount of the transfer.",
              "x-addedInVersion": "1"
            },
            "balanceAccount": {
              "$ref": "#/components/schemas/ResourceReference",
              "description": "Contains information about the balance account involved in the transfer.",
              "x-addedInVersion": "3"
            },
            "balanceAccountId": {
              "deprecated": true,
              "description": "The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).",
              "type": "string",
              "x-addedInVersion": "2",
              "x-deprecatedInVersion": "3",
              "x-deprecatedMessage": "Use the ID in the [`balanceAccount`](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/post/balancePlatform.transfer.created#request-data-balanceAccount-id) object instead."
            },
            "category": {
              "description": "The type of transfer.\n\nPossible values:\n\n - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\n- **issuedCard**: Transfer initiated by a Adyen-issued card.\n\n- **platformPayment**: Fund movements related to payments that are acquired for your users.",
              "enum": [
                "bank",
                "internal",
                "issuedCard",
                "platformPayment"
              ],
              "type": "string",
              "x-addedInVersion": "3"
            },
            "counterparty": {
              "$ref": "#/components/schemas/CounterpartyV3",
              "description": "The other party in the transfer.",
              "x-addedInVersion": "3"
            },
            "description": {
              "description": "Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.\n\nSupported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**\n\nSupported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' \" ! ?**",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "direction": {
              "description": "The direction of the transfer.\n\nPossible values: **incoming**, **outgoing**.",
              "enum": [
                "incoming",
                "outgoing"
              ],
              "type": "string",
              "x-addedInVersion": "2"
            },
            "id": {
              "description": "The ID of the resource.",
              "type": "string"
            },
            "paymentInstrument": {
              "$ref": "#/components/schemas/PaymentInstrument",
              "description": "Contains information about the payment instrument used in the transfer.",
              "x-addedInVersion": "3"
            },
            "paymentInstrumentId": {
              "deprecated": true,
              "description": "The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) used in the transfer.",
              "type": "string",
              "x-addedInVersion": "2",
              "x-deprecatedInVersion": "3",
              "x-deprecatedMessage": "Use the ID in the [`paymentInstrument`](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/post/balancePlatform.transfer.created#request-data-paymentInstrument-id) object instead."
            },
            "priority": {
              "description": "The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.\n\n* **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: High-value transfer to a recipient in a different country.\n\n* **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).",
              "enum": [
                "crossBorder",
                "directDebit",
                "fast",
                "instant",
                "internal",
                "regular",
                "wire"
              ],
              "type": "string",
              "x-addedInVersion": "3"
            },
            "reason": {
              "description": "Additional information about the status of the transfer.",
              "enum": [
                "amountLimitExceeded",
                "approved",
                "counterpartyAccountBlocked",
                "counterpartyAccountClosed",
                "counterpartyAccountNotFound",
                "counterpartyAddressRequired",
                "counterpartyBankTimedOut",
                "counterpartyBankUnavailable",
                "error",
                "notEnoughBalance",
                "refusedByCounterpartyBank",
                "routeNotFound",
                "unknown"
              ],
              "type": "string",
              "x-addedInVersion": "2"
            },
            "reference": {
              "description": "Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.",
              "maxLength": 80,
              "type": "string",
              "x-addedInVersion": "2"
            },
            "referenceForBeneficiary": {
              "description": " A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.\n\n Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.\n\n- **internal**: 80 characters\n\n- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.",
              "maxLength": 80,
              "type": "string",
              "x-addedInVersion": "2"
            },
            "status": {
              "description": "The result of the transfer.\n\n For example, **authorised**, **refused**, or **error**.",
              "enum": [
                "approvalPending",
                "atmWithdrawal",
                "atmWithdrawalReversalPending",
                "atmWithdrawalReversed",
                "authAdjustmentAuthorised",
                "authAdjustmentError",
                "authAdjustmentRefused",
                "authorised",
                "bankTransfer",
                "bankTransferPending",
                "booked",
                "bookingPending",
                "cancelled",
                "capturePending",
                "captureReversalPending",
                "captureReversed",
                "captured",
                "chargeback",
                "chargebackPending",
                "chargebackReversalPending",
                "chargebackReversed",
                "credited",
                "depositCorrection",
                "depositCorrectionPending",
                "dispute",
                "disputeClosed",
                "disputeExpired",
                "disputeNeedsReview",
                "error",
                "expired",
                "failed",
                "fee",
                "feePending",
                "internalTransfer",
                "internalTransferPending",
                "invoiceDeduction",
                "invoiceDeductionPending",
                "manualCorrectionPending",
                "manuallyCorrected",
                "matchedStatement",
                "matchedStatementPending",
                "merchantPayin",
                "merchantPayinPending",
                "merchantPayinReversed",
                "merchantPayinReversedPending",
                "miscCost",
                "miscCostPending",
                "paymentCost",
                "paymentCostPending",
                "received",
                "refundPending",
                "refundReversalPending",
                "refundReversed",
                "refunded",
                "refused",
                "reserveAdjustment",
                "reserveAdjustmentPending",
                "returned",
                "secondChargeback",
                "secondChargebackPending",
                "undefined"
              ],
              "type": "string",
              "x-addedInVersion": "2"
            }
          },
          "required": [
            "category",
            "amount",
            "counterparty",
            "status"
          ],
          "type": "object"
        },
        "TransferInfo": {
          "properties": {
            "amount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The amount of the transfer.",
              "x-addedInVersion": "1"
            },
            "balanceAccountId": {
              "description": "The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).",
              "type": "string"
            },
            "category": {
              "description": "The type of transfer.\n\nPossible values:\n\n - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\n- **issuedCard**: Transfer initiated by a Adyen-issued card.\n\n- **platformPayment**: Fund movements related to payments that are acquired for your users.",
              "enum": [
                "bank",
                "internal",
                "issuedCard",
                "platformPayment"
              ],
              "type": "string",
              "x-addedInVersion": "3"
            },
            "counterparty": {
              "$ref": "#/components/schemas/CounterpartyInfoV3",
              "description": "The recipient of the funds transfer. A bank account, a balance account, or a transfer instrument is required.",
              "x-addedInVersion": "3"
            },
            "description": {
              "description": "Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.\n\nSupported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**\n\nSupported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' \" ! ?**",
              "type": "string",
              "x-addedInVersion": "1"
            },
            "id": {
              "description": "The ID of the resource.",
              "type": "string"
            },
            "paymentInstrumentId": {
              "description": "The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id).",
              "type": "string"
            },
            "priority": {
              "description": "The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.\n\n* **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: High-value transfer to a recipient in a different country.\n\n* **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).",
              "enum": [
                "crossBorder",
                "directDebit",
                "fast",
                "instant",
                "internal",
                "regular",
                "wire"
              ],
              "type": "string",
              "x-addedInVersion": "3"
            },
            "reference": {
              "description": "Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.",
              "maxLength": 80,
              "type": "string",
              "x-addedInVersion": "2"
            },
            "referenceForBeneficiary": {
              "description": " A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.\n\n Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.\n\n- **internal**: 80 characters\n\n- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.",
              "maxLength": 80,
              "type": "string",
              "x-addedInVersion": "2"
            },
            "ultimateParty": {
              "$ref": "#/components/schemas/UltimatePartyIdentification",
              "description": "The ultimate sender of the funds of the transfer (ultimate debtor).",
              "x-addedInVersion": "3"
            }
          },
          "required": [
            "category",
            "amount",
            "counterparty"
          ],
          "type": "object"
        },
        "UKLocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The 8-digit bank account number, without separators or whitespace.",
              "maxLength": 8,
              "minLength": 8,
              "type": "string"
            },
            "sortCode": {
              "description": "The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.",
              "maxLength": 6,
              "minLength": 6,
              "type": "string"
            },
            "type": {
              "default": "ukLocal",
              "description": "**ukLocal**",
              "enum": [
                "ukLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber",
            "sortCode"
          ],
          "type": "object"
        },
        "USLocalAccountIdentification": {
          "additionalProperties": false,
          "properties": {
            "accountNumber": {
              "description": "The bank account number, without separators or whitespace.",
              "maxLength": 18,
              "minLength": 2,
              "type": "string"
            },
            "accountType": {
              "default": "checking",
              "description": "The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.",
              "enum": [
                "checking",
                "savings"
              ],
              "type": "string"
            },
            "routingNumber": {
              "description": "The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.",
              "maxLength": 9,
              "minLength": 9,
              "type": "string"
            },
            "type": {
              "default": "usLocal",
              "description": "**usLocal**",
              "enum": [
                "usLocal"
              ],
              "type": "string"
            }
          },
          "required": [
            "type",
            "accountNumber",
            "routingNumber"
          ],
          "type": "object"
        },
        "UltimatePartyIdentification": {
          "properties": {
            "address": {
              "$ref": "#/components/schemas/Address-2",
              "description": "Address of the bank account owner."
            },
            "dateOfBirth": {
              "description": "The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.\n\nAllowed only when `type` is **individual**.",
              "format": "date",
              "type": "string"
            },
            "firstName": {
              "description": "First name of the individual.\n\nAllowed only when `type` is **individual**.",
              "type": "string"
            },
            "fullName": {
              "description": "The name of the entity.",
              "type": "string"
            },
            "lastName": {
              "description": "Last name of the individual.\n\nAllowed only when `type` is **individual**.",
              "type": "string"
            },
            "reference": {
              "description": "Your unique reference of the party. This should be consistent for all transfers initiated to/from the same party/counterparty. e.g Your client's unique wallet or payee ID",
              "type": "string"
            },
            "type": {
              "default": "unknown",
              "description": "The type of entity that owns the bank account.\n\n Possible values: **individual**, **organization**, or **unknown**.",
              "enum": [
                "individual",
                "organization",
                "unknown"
              ],
              "type": "string"
            }
          },
          "required": [
            "fullName"
          ],
          "type": "object"
        }
      },
      "securitySchemes": {
        "ApiKeyAuth": {
          "in": "header",
          "name": "X-API-Key",
          "type": "apiKey"
        },
        "BasicAuth": {
          "scheme": "basic",
          "type": "http"
        }
      }
    },
    "x-groups": [
      "Transfers",
      "Transactions"
    ]
}

export const schema6 = {
  "openapi": "3.1.0",
  "servers": [
    {
      "url": "https://balanceplatform-api-test.adyen.com/bcl/v2"
    }
  ],
  "info": {
    "contact": {
      "email": "developer-experience@adyen.com",
      "name": "Adyen Developer Experience team",
      "url": "https://www.adyen.help/hc/en-us/community/topics",
      "x-twitter": "Adyen"
    },
    "description": "The Configuration API enables you to create a platform where you can onboard your users as account holders and create balance accounts, cards, and business accounts.\n\n## Authentication\nYour Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:\n\n ```\ncurl\n-H \"Content-Type: application/json\" \\\n-H \"X-API-Key: YOUR_API_KEY\" \\\n...\n```\n\nAlternatively, you can use the username and password to connect to the API using basic authentication. For example:\n\n```\ncurl\n-H \"Content-Type: application/json\" \\\n-U \"ws@BalancePlatform.YOUR_BALANCE_PLATFORM\":\"YOUR_WS_PASSWORD\" \\\n...\n```\n## Versioning\nThe Configuration API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.\n\nFor example:\n```\nhttps://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders\n```\n## Going live\nWhen going live, your Adyen contact will provide your API credential for the live environment. You can then use the API key or the username and password to send requests to `https://balanceplatform-api-live.adyen.com/bcl/v2`.",
    "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
    "title": "Configuration API",
    "version": "2",
    "x-apisguru-categories": [
      "payment"
    ],
    "x-logo": {
      "url": "https://api.apis.guru/v2/cache/logo/https_adyen.com_.resources_adyen-website_themes_images_apple-icon-180x180.png"
    },
    "x-origin": [
      {
        "format": "openapi",
        "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformService-v2.json",
        "version": "3.1"
      }
    ],
    "x-preferred": true,
    "x-providerName": "adyen.com",
    "x-publicVersion": true,
    "x-serviceName": "BalancePlatformService",
    "x-timestamp": "2023-04-17T12:23:49Z"
  },
  "tags": [
    {
      "name": "Platform"
    },
    {
      "name": "Grant offers"
    },
    {
      "name": "Payment instrument groups"
    },
    {
      "name": "Account holders"
    },
    {
      "name": "Payment instruments"
    },
    {
      "name": "Grant accounts"
    },
    {
      "name": "Bank account validation"
    },
    {
      "name": "Balance accounts"
    },
    {
      "name": "Transaction rules"
    }
  ],
  "paths": {
    "/accountHolders": {
      "post": {
        "description": "Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).\n\n",
        "operationId": "post-accountHolders",
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "createAccountHolder": {
                  "$ref": "#/components/examples/post-accountHolders-createAccountHolder"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/AccountHolderInfo"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountHolder"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Create an account holder",
        "tags": [
          "Account holders"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Account holders",
        "x-methodName": "createAccountHolder",
        "x-sortIndex": 1
      }
    },
    "/accountHolders/{id}": {
      "get": {
        "description": "Returns an account holder.",
        "operationId": "get-accountHolders-id",
        "parameters": [
          {
            "description": "The unique identifier of the account holder.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-accountHolders-id-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/AccountHolder"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get an account holder",
        "tags": [
          "Account holders"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Account holders",
        "x-methodName": "getAccountHolder",
        "x-sortIndex": 3
      },
      "patch": {
        "description": "Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.",
        "operationId": "patch-accountHolders-id",
        "parameters": [
          {
            "description": "The unique identifier of the account holder.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "requestAccountHolderCapability": {
                  "$ref": "#/components/examples/patch-accountHolders-id-requestAccountHolderCapability"
                },
                "updateAccountHolderStatus": {
                  "$ref": "#/components/examples/patch-accountHolders-id-updateAccountHolderStatus"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/AccountHolder"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "requestAccountHolderCapability": {
                    "$ref": "#/components/examples/patch-accountHolders-id-requestAccountHolderCapability-200"
                  },
                  "updateAccountHolderStatus": {
                    "$ref": "#/components/examples/patch-accountHolders-id-updateAccountHolderStatus-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/AccountHolder"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Update an account holder",
        "tags": [
          "Account holders"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Account holders",
        "x-methodName": "updateAccountHolder",
        "x-sortIndex": 2
      }
    },
    "/accountHolders/{id}/balanceAccounts": {
      "get": {
        "description": "Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters. \n\nFor example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.",
        "operationId": "get-accountHolders-id-balanceAccounts",
        "parameters": [
          {
            "description": "The unique identifier of the account holder.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The number of items that you want to skip.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-accountHolders-id-balanceAccounts-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/PaginatedBalanceAccountsResponse"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get all balance accounts of an account holder",
        "tags": [
          "Account holders"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Account holders",
        "x-methodName": "getAllBalanceAccountsOfAccountHolder",
        "x-sortIndex": 4
      }
    },
    "/balanceAccounts": {
      "post": {
        "description": "Creates a balance account that holds the funds of the associated account holder.",
        "operationId": "post-balanceAccounts",
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "createBalanceAccount": {
                  "$ref": "#/components/examples/post-balanceAccounts-createBalanceAccount"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/BalanceAccountInfo"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BalanceAccount"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Create a balance account",
        "tags": [
          "Balance accounts"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Balance accounts",
        "x-methodName": "createBalanceAccount",
        "x-sortIndex": 1
      }
    },
    "/balanceAccounts/{balanceAccountId}/sweeps": {
      "get": {
        "description": "Returns a list of the sweeps configured for a balance account.\n\nTo fetch multiple pages, use the query parameters. For example, to limit the page to 5 sweeps and to skip the first 10, use `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&offset=10`.",
        "operationId": "get-balanceAccounts-balanceAccountId-sweeps",
        "parameters": [
          {
            "description": "The unique identifier of the balance account.",
            "in": "path",
            "name": "balanceAccountId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The number of items that you want to skip.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-balanceAccounts-balanceAccountId-sweeps-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/BalanceSweepConfigurationsResponse"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get all sweeps for a balance account",
        "tags": [
          "Balance accounts"
        ],
        "x-addedInVersion": "2",
        "x-groupName": "Balance accounts",
        "x-methodName": "getAllSweepsForBalanceAccount",
        "x-sortIndex": 7
      },
      "post": {
        "description": "Creates a sweep that results in moving funds from or to a balance account.\n\nA sweep pulls in or pushes out funds based on a defined schedule, amount, currency, and a source or a destination.",
        "operationId": "post-balanceAccounts-balanceAccountId-sweeps",
        "parameters": [
          {
            "description": "The unique identifier of the balance account.",
            "in": "path",
            "name": "balanceAccountId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "createSweep-pull": {
                  "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-pull"
                },
                "createSweep-push": {
                  "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-push"
                },
                "createSweep-push-priorities": {
                  "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-priorities"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/SweepConfigurationV2"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "createSweep-pull": {
                    "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-pull-200"
                  },
                  "createSweep-push": {
                    "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-200"
                  },
                  "createSweep-push-priorities": {
                    "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-priorities-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/SweepConfigurationV2"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Create a sweep",
        "tags": [
          "Balance accounts"
        ],
        "x-addedInVersion": "2",
        "x-groupName": "Balance accounts",
        "x-methodName": "createSweep",
        "x-sortIndex": 5
      }
    },
    "/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}": {
      "delete": {
        "description": "Deletes a sweep for a balance account.",
        "operationId": "delete-balanceAccounts-balanceAccountId-sweeps-sweepId",
        "parameters": [
          {
            "description": "The unique identifier of the balance account.",
            "in": "path",
            "name": "balanceAccountId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The unique identifier of the sweep.",
            "in": "path",
            "name": "sweepId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "No Content - the request has been successfully processed, but there is no additional content."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Delete a sweep",
        "tags": [
          "Balance accounts"
        ],
        "x-addedInVersion": "2",
        "x-groupName": "Balance accounts",
        "x-methodName": "deleteSweep",
        "x-sortIndex": 9
      },
      "get": {
        "description": "Returns a sweep.",
        "operationId": "get-balanceAccounts-balanceAccountId-sweeps-sweepId",
        "parameters": [
          {
            "description": "The unique identifier of the balance account.",
            "in": "path",
            "name": "balanceAccountId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The unique identifier of the sweep.",
            "in": "path",
            "name": "sweepId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-balanceAccounts-balanceAccountId-sweeps-sweepId-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/SweepConfigurationV2"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get a sweep",
        "tags": [
          "Balance accounts"
        ],
        "x-addedInVersion": "2",
        "x-groupName": "Balance accounts",
        "x-methodName": "getSweep",
        "x-sortIndex": 8
      },
      "patch": {
        "description": "Updates a sweep. When updating a sweep resource, note that if a request parameter is not provided, the parameter is left unchanged.",
        "operationId": "patch-balanceAccounts-balanceAccountId-sweeps-sweepId",
        "parameters": [
          {
            "description": "The unique identifier of the balance account.",
            "in": "path",
            "name": "balanceAccountId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The unique identifier of the sweep.",
            "in": "path",
            "name": "sweepId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "updateSweep-status": {
                  "$ref": "#/components/examples/patch-balanceAccounts-balanceAccountId-sweeps-sweepId-updateSweep-status"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/SweepConfigurationV2"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "updateSweep-status": {
                    "$ref": "#/components/examples/patch-balanceAccounts-balanceAccountId-sweeps-sweepId-updateSweep-status-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/SweepConfigurationV2"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Update a sweep",
        "tags": [
          "Balance accounts"
        ],
        "x-addedInVersion": "2",
        "x-groupName": "Balance accounts",
        "x-methodName": "updateSweep",
        "x-sortIndex": 6
      }
    },
    "/balanceAccounts/{id}": {
      "get": {
        "description": "Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.",
        "operationId": "get-balanceAccounts-id",
        "parameters": [
          {
            "description": "The unique identifier of the balance account.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-balanceAccounts-id-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/BalanceAccount"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get a balance account",
        "tags": [
          "Balance accounts"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Balance accounts",
        "x-methodName": "getBalanceAccount",
        "x-sortIndex": 3
      },
      "patch": {
        "description": "Updates a balance account.",
        "operationId": "patch-balanceAccounts-id",
        "parameters": [
          {
            "description": "The unique identifier of the balance account.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BalanceAccountUpdateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BalanceAccount"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Update a balance account",
        "tags": [
          "Balance accounts"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Balance accounts",
        "x-methodName": "updateBalanceAccount",
        "x-sortIndex": 2
      }
    },
    "/balanceAccounts/{id}/paymentInstruments": {
      "get": {
        "description": "Returns a paginated list of the payment instruments associated with a balance account. \n\nTo fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6`.",
        "operationId": "get-balanceAccounts-id-paymentInstruments",
        "parameters": [
          {
            "description": "The unique identifier of the balance account.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The number of items that you want to skip.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-balanceAccounts-id-paymentInstruments-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/PaginatedPaymentInstrumentsResponse"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get all payment instruments for a balance account",
        "tags": [
          "Balance accounts"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Balance accounts",
        "x-methodName": "getAllPaymentInstrumentsForBalanceAccount",
        "x-sortIndex": 4
      }
    },
    "/balancePlatforms/{id}": {
      "get": {
        "description": "Returns a balance platform.",
        "operationId": "get-balancePlatforms-id",
        "parameters": [
          {
            "description": "The unique identifier of the balance platform.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-balancePlatforms-id-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/BalancePlatform"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get a balance platform",
        "tags": [
          "Platform"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Platform",
        "x-methodName": "getBalancePlatform",
        "x-sortIndex": 1
      }
    },
    "/balancePlatforms/{id}/accountHolders": {
      "get": {
        "description": "Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters. \n\nFor example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.",
        "operationId": "get-balancePlatforms-id-accountHolders",
        "parameters": [
          {
            "description": "The unique identifier of the balance platform.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The number of items that you want to skip.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-balancePlatforms-id-accountHolders-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/PaginatedAccountHoldersResponse"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get all account holders under a balance platform",
        "tags": [
          "Platform"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Platform",
        "x-methodName": "getAllAccountHoldersUnderBalancePlatform",
        "x-sortIndex": 2
      }
    },
    "/grantAccounts/{id}": {
      "get": {
        "description": "Returns the details of the [grant account](https://docs.adyen.com/marketplaces-and-platforms/capital#grant-account).",
        "operationId": "get-grantAccounts-id",
        "parameters": [
          {
            "description": "The unique identifier of the grant account.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CapitalGrantAccount"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get a grant account",
        "tags": [
          "Grant accounts"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Grant accounts",
        "x-methodName": "getGrantAccount",
        "x-sortIndex": 1
      }
    },
    "/grantOffers": {
      "get": {
        "description": "Returns a list of all [grant offers](https://docs.adyen.com/marketplaces-and-platforms/capital#grant-offers) available for `accountHolderId` specified as a query parameter.",
        "operationId": "get-grantOffers",
        "parameters": [
          {
            "description": "The unique identifier of the grant account.",
            "in": "query",
            "name": "accountHolderId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GrantOffers"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get all available grant offers",
        "tags": [
          "Grant offers"
        ],
        "x-addedInVersion": "2",
        "x-groupName": "Grant offers",
        "x-methodName": "getAllAvailableGrantOffers",
        "x-sortIndex": 1
      }
    },
    "/grantOffers/{grantOfferId}": {
      "get": {
        "description": "Returns the details of a single grant offer.",
        "operationId": "get-grantOffers-grantOfferId",
        "parameters": [
          {
            "description": "The unique identifier of the grant offer.",
            "in": "path",
            "name": "grantOfferId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GrantOffer"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get a grant offer",
        "tags": [
          "Grant offers"
        ],
        "x-addedInVersion": "2",
        "x-groupName": "Grant offers",
        "x-methodName": "getGrantOffer",
        "x-sortIndex": 1
      }
    },
    "/paymentInstrumentGroups": {
      "post": {
        "description": "Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.",
        "operationId": "post-paymentInstrumentGroups",
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "createPaymentInstrumentGroups": {
                  "$ref": "#/components/examples/post-paymentInstrumentGroups-createPaymentInstrumentGroups"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/PaymentInstrumentGroupInfo"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaymentInstrumentGroup"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Create a payment instrument group",
        "tags": [
          "Payment instrument groups"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Payment instrument groups",
        "x-methodName": "createPaymentInstrumentGroup",
        "x-sortIndex": 1
      }
    },
    "/paymentInstrumentGroups/{id}": {
      "get": {
        "description": "Returns the details of a payment instrument group.",
        "operationId": "get-paymentInstrumentGroups-id",
        "parameters": [
          {
            "description": "The unique identifier of the payment instrument group.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-paymentInstrumentGroups-id-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/PaymentInstrumentGroup"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get a payment instrument group",
        "tags": [
          "Payment instrument groups"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Payment instrument groups",
        "x-methodName": "getPaymentInstrumentGroup",
        "x-sortIndex": 2
      }
    },
    "/paymentInstrumentGroups/{id}/transactionRules": {
      "get": {
        "description": "Returns a list of all the transaction rules associated with a payment instrument group.",
        "operationId": "get-paymentInstrumentGroups-id-transactionRules",
        "parameters": [
          {
            "description": "The unique identifier of the payment instrument group.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-paymentInstrumentGroups-id-transactionRules-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/TransactionRulesResponse"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get all transaction rules for a payment instrument group",
        "tags": [
          "Payment instrument groups"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Payment instrument groups",
        "x-methodName": "getAllTransactionRulesForPaymentInstrumentGroup",
        "x-sortIndex": 3
      }
    },
    "/paymentInstruments": {
      "post": {
        "description": "Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.\n\n For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/marketplaces-and-platforms/business-accounts).",
        "operationId": "post-paymentInstruments",
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "createBusinessAccountNL": {
                  "$ref": "#/components/examples/post-paymentInstruments-createBusinessAccountNL"
                },
                "createBusinessAccountUS": {
                  "$ref": "#/components/examples/post-paymentInstruments-createBusinessAccountUS"
                },
                "createPhysicalCard": {
                  "$ref": "#/components/examples/post-paymentInstruments-createPhysicalCard"
                },
                "createVirtualCard": {
                  "$ref": "#/components/examples/post-paymentInstruments-createVirtualCard"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/PaymentInstrumentInfo"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "createBusinessAccountNL": {
                    "$ref": "#/components/examples/post-paymentInstruments-createBusinessAccountNL-200"
                  },
                  "createBusinessAccountUS": {
                    "$ref": "#/components/examples/post-paymentInstruments-createBusinessAccountUS-200"
                  },
                  "createPhysicalCard": {
                    "$ref": "#/components/examples/post-paymentInstruments-createPhysicalCard-200"
                  },
                  "createVirtualCard": {
                    "$ref": "#/components/examples/post-paymentInstruments-createVirtualCard-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/PaymentInstrument"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Create a payment instrument",
        "tags": [
          "Payment instruments"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Payment instruments",
        "x-methodName": "createPaymentInstrument",
        "x-sortIndex": 11
      }
    },
    "/paymentInstruments/{id}": {
      "get": {
        "description": "Returns the details of a payment instrument.",
        "operationId": "get-paymentInstruments-id",
        "parameters": [
          {
            "description": "The unique identifier of the payment instrument.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-paymentInstruments-id-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/PaymentInstrument"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get a payment instrument",
        "tags": [
          "Payment instruments"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Payment instruments",
        "x-methodName": "getPaymentInstrument",
        "x-sortIndex": 13
      },
      "patch": {
        "description": "Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.",
        "operationId": "patch-paymentInstruments-id",
        "parameters": [
          {
            "description": "The unique identifier of the payment instrument.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "updatePaymentInstrumentBalanceAccount": {
                  "$ref": "#/components/examples/patch-paymentInstruments-id-updatePaymentInstrumentBalanceAccount"
                },
                "updatePaymentInstrumentStatus": {
                  "$ref": "#/components/examples/patch-paymentInstruments-id-updatePaymentInstrumentStatus"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/PaymentInstrumentUpdateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "updatePaymentInstrumentBalanceAccount": {
                    "$ref": "#/components/examples/patch-paymentInstruments-id-updatePaymentInstrumentBalanceAccount-200"
                  },
                  "updatePaymentInstrumentStatus": {
                    "$ref": "#/components/examples/patch-paymentInstruments-id-updatePaymentInstrumentStatus-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/UpdatePaymentInstrument"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Update a payment instrument",
        "tags": [
          "Payment instruments"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Payment instruments",
        "x-methodName": "updatePaymentInstrument",
        "x-sortIndex": 12
      }
    },
    "/paymentInstruments/{id}/reveal": {
      "get": {
        "description": "Returns the primary account number (PAN) of a payment instrument.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):\n\n* Balance Platform BCL PCI role",
        "operationId": "get-paymentInstruments-id-reveal",
        "parameters": [
          {
            "description": "The unique identifier of the payment instrument.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaymentInstrumentRevealInfo"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get the PAN of a payment instrument",
        "tags": [
          "Payment instruments"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Payment instruments",
        "x-methodName": "getPanOfPaymentInstrument",
        "x-sortIndex": 14
      }
    },
    "/paymentInstruments/{id}/transactionRules": {
      "get": {
        "description": "Returns a list of transaction rules associated with a payment instrument.",
        "operationId": "get-paymentInstruments-id-transactionRules",
        "parameters": [
          {
            "description": "The unique identifier of the payment instrument.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-paymentInstruments-id-transactionRules-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/TransactionRulesResponse"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get all transaction rules for a payment instrument",
        "tags": [
          "Payment instruments"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Payment instruments",
        "x-methodName": "getAllTransactionRulesForPaymentInstrument",
        "x-sortIndex": 14
      }
    },
    "/transactionRules": {
      "post": {
        "description": "Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).",
        "operationId": "post-transactionRules",
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "createTransactionRuleAllowPos": {
                  "$ref": "#/components/examples/post-transactionRules-createTransactionRuleAllowPos"
                },
                "createTransactionRuleIncreaseScore": {
                  "$ref": "#/components/examples/post-transactionRules-createTransactionRuleIncreaseScore"
                },
                "createTransactionRuleLimitSliding": {
                  "$ref": "#/components/examples/post-transactionRules-createTransactionRuleLimitSliding"
                },
                "createTransactionRuleLimitTransaction": {
                  "$ref": "#/components/examples/post-transactionRules-createTransactionRuleLimitTransaction"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/TransactionRuleInfo"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TransactionRule"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Create a transaction rule",
        "tags": [
          "Transaction rules"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Transaction rules",
        "x-methodName": "createTransactionRule",
        "x-sortIndex": 1
      }
    },
    "/transactionRules/{transactionRuleId}": {
      "delete": {
        "description": "Deletes a transaction rule.",
        "operationId": "delete-transactionRules-transactionRuleId",
        "parameters": [
          {
            "description": "The unique identifier of the transaction rule.",
            "in": "path",
            "name": "transactionRuleId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/delete-transactionRules-transactionRuleId-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/TransactionRule"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Delete a transaction rule",
        "tags": [
          "Transaction rules"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Transaction rules",
        "x-methodName": "deleteTransactionRule",
        "x-sortIndex": 5
      },
      "get": {
        "description": "Returns the details of a transaction rule.",
        "operationId": "get-transactionRules-transactionRuleId",
        "parameters": [
          {
            "description": "The unique identifier of the transaction rule.",
            "in": "path",
            "name": "transactionRuleId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "success": {
                    "$ref": "#/components/examples/get-transactionRules-transactionRuleId-success-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/TransactionRuleResponse"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Get a transaction rule",
        "tags": [
          "Transaction rules"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Transaction rules",
        "x-methodName": "getTransactionRule",
        "x-sortIndex": 2
      },
      "patch": {
        "description": "Updates a transaction rule. \n\n* To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged.\n\n* When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.",
        "operationId": "patch-transactionRules-transactionRuleId",
        "parameters": [
          {
            "description": "The unique identifier of the transaction rule.",
            "in": "path",
            "name": "transactionRuleId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "updateTransactionRuleStatus": {
                  "$ref": "#/components/examples/patch-transactionRules-transactionRuleId-updateTransactionRuleStatus"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/TransactionRuleInfo"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "examples": {
                  "updateTransactionRuleStatus": {
                    "$ref": "#/components/examples/patch-transactionRules-transactionRuleId-updateTransactionRuleStatus-200"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/TransactionRule"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "400": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-400"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Bad Request - a problem reading or understanding the request."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Update a transaction rule",
        "tags": [
          "Transaction rules"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Transaction rules",
        "x-methodName": "updateTransactionRule",
        "x-sortIndex": 3
      }
    },
    "/validateBankAccountIdentification": {
      "post": {
        "description": "Validates bank account identification details. You can use this endpoint to validate bank account details before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).",
        "operationId": "post-validateBankAccountIdentification",
        "requestBody": {
          "content": {
            "application/json": {
              "examples": {
                "validateBankAccountIdentificationIban": {
                  "$ref": "#/components/examples/post-validateBankAccountIdentification-validateBankAccountIdentificationIban"
                },
                "validateBankAccountIdentificationUs": {
                  "$ref": "#/components/examples/post-validateBankAccountIdentification-validateBankAccountIdentificationUs"
                }
              },
              "schema": {
                "$ref": "#/components/schemas/BankAccountIdentificationValidationRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Void"
                }
              }
            },
            "description": "OK - the request has succeeded."
          },
          "401": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-401"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unauthorized - authentication required."
          },
          "403": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-403"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Forbidden - insufficient permissions to process the request."
          },
          "422": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-422"
                  },
                  "validateBankAccountIdentificationIban": {
                    "$ref": "#/components/examples/post-validateBankAccountIdentification-validateBankAccountIdentificationIban-422"
                  },
                  "validateBankAccountIdentificationUs": {
                    "$ref": "#/components/examples/post-validateBankAccountIdentification-validateBankAccountIdentificationUs-422"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Unprocessable Entity - a request validation error."
          },
          "500": {
            "content": {
              "application/json": {
                "examples": {
                  "generic": {
                    "$ref": "#/components/examples/generic-500"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/RestServiceError"
                }
              }
            },
            "description": "Internal Server Error - the server could not process the request."
          }
        },
        "security": [
          {
            "BasicAuth": []
          },
          {
            "ApiKeyAuth": []
          }
        ],
        "summary": "Validate a bank account",
        "tags": [
          "Bank account validation"
        ],
        "x-addedInVersion": "1",
        "x-groupName": "Bank account validation",
        "x-methodName": "validateBankAccountIdentification",
        "x-sortIndex": 1
      }
    }
  },
  "components": {
    "examples": {
      "delete-transactionRules-transactionRuleId-success-200": {
        "description": "Example response for successfully deleting a transaction rule",
        "summary": "Transaction rule deleted",
        "value": {
          "aggregationLevel": "paymentInstrument",
          "description": "Up to 1000 EUR per card for the last 12 hours",
          "entityKey": {
            "entityReference": "PG3227C223222C5GXR3M5592Q",
            "entityType": "paymentInstrumentGroup"
          },
          "id": "TR3227C223222C5GXT3DD5VCF",
          "interval": {
            "duration": {
              "unit": "hours",
              "value": 12
            },
            "timeZone": "UTC",
            "type": "sliding"
          },
          "outcomeType": "hardBlock",
          "reference": "myRule12345",
          "requestType": "authorization",
          "ruleRestrictions": {
            "totalAmount": {
              "operation": "greaterThan",
              "value": {
                "currency": "EUR",
                "value": 100000
              }
            }
          },
          "type": "velocity"
        }
      },
      "generic-400": {
        "summary": "Response code - 400 Bad request",
        "value": {
          "detail": "Empty input which would have resulted in a null result.",
          "errorCode": "00_400",
          "status": 400,
          "title": "Bad request",
          "type": "https://docs.adyen.com/errors/general/bad-request"
        }
      },
      "generic-401": {
        "summary": "Response code - 401 Unauthorized",
        "value": {
          "detail": "Not authorized to access this service.",
          "errorCode": "00_401",
          "status": 401,
          "title": "Unauthorized",
          "type": "https://docs.adyen.com/errors/security/unauthorized"
        }
      },
      "generic-403": {
        "summary": "Response code - 403 Forbidden.",
        "value": {
          "detail": "Not the right permission to access this service.",
          "errorCode": "00_403",
          "status": 403,
          "title": "Forbidden",
          "type": "https://docs.adyen.com/errors/security/unauthorized"
        }
      },
      "generic-404": {
        "summary": "Response code 404 - Not found",
        "value": {
          "detail": "Service not found.",
          "errorCode": "00_404",
          "status": 404,
          "title": "Not found",
          "type": "https://docs.adyen.com/errors/general/not-found"
        }
      },
      "generic-422": {
        "summary": "Response code - 422 Unprocessable Entity.",
        "value": {
          "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
          "errorCode": "30_031",
          "requestId": "1W1UI15PLVGC9V8O",
          "status": 422,
          "title": "Invalid Payment Instrument information provided",
          "type": "https://docs.adyen.com/errors/general/invalid-field-value"
        }
      },
      "generic-500": {
        "summary": "Response code - 500 Internal Server Error",
        "value": {
          "detail": "Unrecoverable error while trying to create payment instrument",
          "errorCode": "00_500",
          "requestId": "1WAF555PLWNTLYOQ",
          "status": 500,
          "title": "An internal error happened",
          "type": "https://docs.adyen.com/errors/general/internal"
        }
      },
      "generic-503": {
        "summary": "Response code - 503 Internal Server Error",
        "value": {
          "detail": "Error while determining the payment instrument workflow",
          "errorCode": "99_500",
          "requestId": "1W1UHY5O2CONU4R7",
          "status": 500,
          "title": "Error processing request",
          "type": "https://docs.adyen.com/errors/general/processing-error"
        }
      },
      "get-accountHolders-id-balanceAccounts-success-200": {
        "description": "Example response when retrieving a list of balance accounts under an account holder",
        "summary": "List of balance accounts retrieved",
        "value": {
          "balanceAccounts": [
            {
              "accountHolderId": "AH32272223222B5CTBMZT6W2V",
              "defaultCurrencyCode": "EUR",
              "description": "S. Hopper - Main Account",
              "id": "BA32272223222B5CTDNB66W2Z",
              "reference": "YOUR_REFERENCE-X173L",
              "status": "active",
              "timeZone": "Europe/Amsterdam"
            },
            {
              "accountHolderId": "AH32272223222B5CTBMZT6W2V",
              "defaultCurrencyCode": "EUR",
              "description": "S. Hopper - Main Account",
              "id": "BA32272223222B5CTDQPM6W2H",
              "reference": "YOUR_REFERENCE-X173L",
              "status": "active",
              "timeZone": "Europe/Amsterdam"
            },
            {
              "accountHolderId": "AH32272223222B5CTBMZT6W2V",
              "defaultCurrencyCode": "EUR",
              "description": "S. Hopper - Main Account",
              "id": "BA32272223222B5CVF5J63LMW",
              "reference": "YOUR_REFERENCE-X173L",
              "status": "active",
              "timeZone": "Europe/Amsterdam"
            }
          ],
          "hasNext": true,
          "hasPrevious": false
        }
      },
      "get-accountHolders-id-success-200": {
        "description": "Example response when retrieving an account holder",
        "summary": "Account holder retrieved",
        "value": {
          "balancePlatform": "YOUR_BALANCE_PLATFORM",
          "capabilities": {
            "receiveFromBalanceAccount": {
              "allowed": false,
              "enabled": true,
              "requested": true,
              "verificationStatus": "pending"
            },
            "receiveFromPlatformPayments": {
              "allowed": false,
              "enabled": true,
              "requested": true,
              "verificationStatus": "pending"
            },
            "sendToBalanceAccount": {
              "allowed": false,
              "enabled": true,
              "requested": true,
              "verificationStatus": "pending"
            },
            "sendToTransferInstrument": {
              "allowed": false,
              "enabled": true,
              "requested": true,
              "verificationStatus": "pending"
            }
          },
          "description": "Liable account holder used for international payments and payouts",
          "id": "AH3227C223222C5GXQXF658WB",
          "legalEntityId": "LE322JV223222D5GG42KN6869",
          "reference": "S.Eller-001",
          "status": "active"
        }
      },
      "get-balanceAccounts-balanceAccountId-sweeps-success-200": {
        "description": "Example response when retrieving sweeps under a balance account",
        "summary": "Sweeps under a balance account retrieved",
        "value": {
          "hasNext": false,
          "hasPrevious": false,
          "sweeps": [
            {
              "counterparty": {
                "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
              },
              "currency": "EUR",
              "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
              "schedule": {
                "type": "daily"
              },
              "status": "active",
              "targetAmount": {
                "currency": "EUR",
                "value": 0
              },
              "triggerAmount": {
                "currency": "EUR",
                "value": 0
              },
              "type": "push"
            }
          ]
        }
      },
      "get-balanceAccounts-balanceAccountId-sweeps-sweepId-success-200": {
        "description": "Example response when retrieving a sweep",
        "summary": "Sweep retrieved",
        "value": {
          "counterparty": {
            "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
          },
          "currency": "EUR",
          "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
          "schedule": {
            "type": "daily"
          },
          "status": "active",
          "targetAmount": {
            "currency": "EUR",
            "value": 0
          },
          "triggerAmount": {
            "currency": "EUR",
            "value": 0
          },
          "type": "push"
        }
      },
      "get-balanceAccounts-id-paymentInstruments-success-200": {
        "description": "Example response when retrieving a list of payment instruments under a balance account",
        "summary": "List of payment instruments retrieved",
        "value": {
          "hasNext": true,
          "hasPrevious": false,
          "paymentInstruments": [
            {
              "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
              "card": {
                "bin": "555544",
                "brand": "mc",
                "brandVariant": "mc",
                "cardholderName": "name",
                "expiration": {
                  "month": "12",
                  "year": "2022"
                },
                "formFactor": "virtual",
                "lastFour": "2357",
                "number": "************2357"
              },
              "id": "PI32272223222B59M5TM658DT",
              "issuingCountryCode": "GB",
              "status": "active",
              "type": "card"
            },
            {
              "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
              "card": {
                "bin": "555544",
                "brand": "mc",
                "brandVariant": "mc",
                "cardholderName": "name",
                "expiration": {
                  "month": "01",
                  "year": "2023"
                },
                "formFactor": "virtual",
                "lastFour": "8331",
                "number": "************8331"
              },
              "id": "PI32272223222B59PXDGQDLSF",
              "issuingCountryCode": "GB",
              "status": "active",
              "type": "card"
            }
          ]
        }
      },
      "get-balanceAccounts-id-success-200": {
        "description": "Example response for retrieving a balance account",
        "summary": "Balance account details retrieved",
        "value": {
          "accountHolderId": "AH32272223222B59K6RTQBFNZ",
          "balances": [
            {
              "available": 0,
              "balance": 0,
              "currency": "EUR",
              "reserved": 0
            }
          ],
          "defaultCurrencyCode": "EUR",
          "id": "BA3227C223222B5BLP6JQC3FD",
          "status": "active",
          "timeZone": "Europe/Amsterdam"
        }
      },
      "get-balancePlatforms-id-accountHolders-success-200": {
        "description": "Example response when retrieving a list of account holders under a balance platform",
        "summary": "List of account holders retrieved",
        "value": {
          "accountHolders": [
            {
              "description": "Test-305",
              "id": "AH32272223222B5GFSNSXFFL9",
              "legalEntityId": "LE3227C223222D5D8S5S33M4M",
              "reference": "LegalEntity internal error test",
              "status": "active"
            },
            {
              "description": "Test-751",
              "id": "AH32272223222B5GFSNVGFFM7",
              "legalEntityId": "LE3227C223222D5D8S5TT3SRX",
              "reference": "LegalEntity internal error test",
              "status": "active"
            },
            {
              "description": "Explorer Holder",
              "id": "AH32272223222B5GFWNRFFVR6",
              "legalEntityId": "LE3227C223222D5D8S5TT3SRX",
              "reference": "Account from the Explorer Holder",
              "status": "active"
            }
          ],
          "hasNext": true,
          "hasPrevious": true
        }
      },
      "get-balancePlatforms-id-success-200": {
        "description": "Example response when retrieving a balance platform",
        "summary": "Balance platform retrieved",
        "value": {
          "id": "YOUR_BALANCE_PLATFORM",
          "status": "Active"
        }
      },
      "get-paymentInstrumentGroups-id-success-200": {
        "description": "Example response when retrieving a payment instrument group",
        "summary": "Payment instrument group retrieved",
        "value": {
          "balancePlatform": "YOUR_BALANCE_PLATFORM",
          "id": "PG3227C223222B5CMD3FJFKGZ",
          "txVariant": "mc"
        }
      },
      "get-paymentInstrumentGroups-id-transactionRules-success-200": {
        "description": "Example response when retrieving a list of transaction rules applied to a payment instrument group",
        "summary": "Transaction rules for a payment instrument group retrieved",
        "value": {
          "transactionRules": [
            {
              "aggregationLevel": "paymentInstrument",
              "description": "Up to 1000 EUR per card for the last 12 hours",
              "entityKey": {
                "entityReference": "PG3227C223222C5GXR3M5592Q",
                "entityType": "paymentInstrumentGroup"
              },
              "id": "TR3227C223222C5GXR3XP596N",
              "interval": {
                "duration": {
                  "unit": "hours",
                  "value": 12
                },
                "timeZone": "UTC",
                "type": "sliding"
              },
              "outcomeType": "hardBlock",
              "reference": "YOUR_REFERENCE_2918A",
              "requestType": "authorization",
              "ruleRestrictions": {
                "totalAmount": {
                  "operation": "greaterThan",
                  "value": {
                    "currency": "EUR",
                    "value": 100000
                  }
                }
              },
              "status": "inactive",
              "type": "velocity"
            },
            {
              "aggregationLevel": "paymentInstrument",
              "description": "NL only",
              "entityKey": {
                "entityReference": "PG3227C223222C5GXR3M5592Q",
                "entityType": "paymentInstrumentGroup"
              },
              "id": "TR3227C223222C5GXR3WC595H",
              "interval": {
                "duration": {
                  "unit": "hours",
                  "value": 12
                },
                "timeZone": "UTC",
                "type": "sliding"
              },
              "outcomeType": "hardBlock",
              "reference": "myRule12345",
              "requestType": "authorization",
              "ruleRestrictions": {
                "totalAmount": {
                  "operation": "greaterThan",
                  "value": {
                    "currency": "EUR",
                    "value": 100000
                  }
                }
              },
              "status": "inactive",
              "type": "velocity"
            }
          ]
        }
      },
      "get-paymentInstruments-id-success-200": {
        "description": "Example response for retrieving payment instruments associated with a balance account",
        "summary": "Payment instruments retrieved",
        "value": {
          "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
          "card": {
            "bin": "555544",
            "brand": "mc",
            "brandVariant": "mcdebit",
            "cardholderName": "Simon Hopper",
            "expiration": {
              "month": "01",
              "year": "2024"
            },
            "formFactor": "virtual",
            "lastFour": "3548",
            "number": "************3548"
          },
          "description": "S. Hopper - Main card",
          "id": "PI32272223222B5CMD3MQ3HXX",
          "issuingCountryCode": "GB",
          "status": "active",
          "type": "card"
        }
      },
      "get-paymentInstruments-id-transactionRules-success-200": {
        "description": "Example response when retrieving a list of transaction rules applied to a payment instrument",
        "summary": "Transaction rules for a payment instrument retrieved",
        "value": {
          "transactionRules": [
            {
              "description": "Only allow point-of-sale transactions",
              "entityKey": {
                "entityReference": "PI3227C223222B5FN65FN5NS9",
                "entityType": "paymentInstrument"
              },
              "id": "TR32272223222B5GFSGFLFCHM",
              "interval": {
                "timeZone": "UTC",
                "type": "perTransaction"
              },
              "outcomeType": "hardBlock",
              "reference": "YOUR_REFERENCE_4F7346",
              "requestType": "authorization",
              "ruleRestrictions": {
                "processingTypes": {
                  "operation": "noneMatch",
                  "value": [
                    "pos"
                  ]
                }
              },
              "startDate": "2022-08-02T16:07:00.851374+02:00",
              "status": "active",
              "type": "blockList"
            },
            {
              "description": "Set the maximum number of active network tokens to one for this card",
              "entityKey": {
                "entityReference": "PI3227C223222B5FN65FN5NS9",
                "entityType": "paymentInstrument"
              },
              "id": "TR32272223222C5GQJ93L7J8Z",
              "interval": {
                "timeZone": "UTC",
                "type": "perTransaction"
              },
              "outcomeType": "hardBlock",
              "reference": "myRule123",
              "requestType": "authorization",
              "ruleRestrictions": {
                "activeNetworkTokens": {
                  "operation": "greaterThanOrEqualTo",
                  "value": 1
                }
              },
              "startDate": "2022-10-03T14:48:28.999314+02:00",
              "status": "active",
              "type": "blockList"
            }
          ]
        }
      },
      "get-transactionRules-transactionRuleId-success-200": {
        "description": "Example response when retrieving a transaction rule",
        "summary": "Transaction rules retrieved",
        "value": {
          "transactionRule": {
            "description": "Only allow point-of-sale transactions",
            "entityKey": {
              "entityReference": "PI3227C223222B5FN65FN5NS9",
              "entityType": "paymentInstrument"
            },
            "id": "TR32272223222B5GFSGFLFCHM",
            "interval": {
              "timeZone": "UTC",
              "type": "perTransaction"
            },
            "outcomeType": "hardBlock",
            "reference": "YOUR_REFERENCE_4F7346",
            "requestType": "authorization",
            "ruleRestrictions": {
              "processingTypes": {
                "operation": "noneMatch",
                "value": [
                  "pos"
                ]
              }
            },
            "startDate": "2022-08-02T16:07:00.851374+02:00",
            "status": "active",
            "type": "blockList"
          }
        }
      },
      "patch-accountHolders-id-requestAccountHolderCapability": {
        "description": "Example request for the `receivePayments` capability for an account holder",
        "summary": "Request account holder capability",
        "value": {
          "capabilities": {
            "receivePayments": {
              "requested": true
            }
          },
          "description": "Liable account holder used for international payments and payouts",
          "legalEntityId": "LE322JV223222D5GG42KN6869",
          "reference": "S.Eller-001"
        }
      },
      "patch-accountHolders-id-requestAccountHolderCapability-200": {
        "description": "Example response for requesting the `receivePayments` capability for an account holder",
        "summary": "Account holder capability requested",
        "value": {
          "balancePlatform": "YOUR_BALANCE_PLATFORM",
          "capabilities": {
            "receivePayments": {
              "allowed": false,
              "enabled": false,
              "requested": true,
              "verificationStatus": "pending"
            }
          },
          "description": "Liable account holder used for international payments and payouts",
          "id": "AH3227C223222C5GKR23686TF",
          "legalEntityId": "LE322JV223222F5GKQZZ9DS99",
          "reference": "S.Eller-001",
          "status": "active"
        }
      },
      "patch-accountHolders-id-updateAccountHolderStatus": {
        "description": "Example request for permanently deactivating an account holder",
        "summary": "Deactivate an account holder",
        "value": {
          "status": "closed"
        }
      },
      "patch-accountHolders-id-updateAccountHolderStatus-200": {
        "description": "Example response for permanently deactivating an account holder",
        "summary": "Account holder deactivated",
        "value": {
          "balancePlatform": "YOUR_BALANCE_PLATFORM",
          "description": "Liable account holder used for international payments and payouts",
          "id": "AH3227C223222C5GKR23686TF",
          "legalEntityId": "LE322JV223222F5GKQZZ9DS99",
          "reference": "S.Eller-001",
          "status": "closed"
        }
      },
      "patch-balanceAccounts-balanceAccountId-sweeps-sweepId-updateSweep-status": {
        "description": "Example request for updating a sweep",
        "summary": "Update the status of a sweep",
        "value": {
          "status": "inactive"
        }
      },
      "patch-balanceAccounts-balanceAccountId-sweeps-sweepId-updateSweep-status-200": {
        "description": "Example response for updating a sweep",
        "summary": "Sweep status updated",
        "value": {
          "counterparty": {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          },
          "currency": "EUR",
          "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
          "schedule": {
            "type": "balance"
          },
          "status": "inactive",
          "triggerAmount": {
            "currency": "EUR",
            "value": 50000
          },
          "type": "pull"
        }
      },
      "patch-paymentInstruments-id-updatePaymentInstrumentBalanceAccount": {
        "description": "Example request for updating the balance account of a payment instrument",
        "summary": "Update the balance account linked to a payment instrument",
        "value": {
          "balanceAccountId": "BA32272223222B5CM82WL892M"
        }
      },
      "patch-paymentInstruments-id-updatePaymentInstrumentBalanceAccount-200": {
        "description": "Example response for updating the balance account linked to a payment instrument",
        "summary": "Balance account updated",
        "value": {
          "balanceAccountId": "BA32272223222B5CM82WL892M",
          "card": {
            "bin": "555544",
            "brand": "mc",
            "brandVariant": "mcdebit",
            "cardholderName": "Simon Hopper",
            "expiration": {
              "month": "01",
              "year": "2024"
            },
            "formFactor": "virtual",
            "lastFour": "5785",
            "number": "************5785"
          },
          "description": "S. Hopper - Main card",
          "id": "PI3227C223222B5CMD278FKGS",
          "issuingCountryCode": "GB",
          "status": "inactive",
          "type": "card"
        }
      },
      "patch-paymentInstruments-id-updatePaymentInstrumentStatus": {
        "description": "Example request for updating the status of a payment instrument",
        "summary": "Update the status of a payment instrument",
        "value": {
          "status": "suspended"
        }
      },
      "patch-paymentInstruments-id-updatePaymentInstrumentStatus-200": {
        "description": "Example response for updating the status of a payment instrument",
        "summary": "Payment instrument status updated",
        "value": {
          "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
          "card": {
            "bin": "555544",
            "brand": "mc",
            "brandVariant": "mcdebit",
            "cardholderName": "Simon Hopper",
            "expiration": {
              "month": "01",
              "year": "2024"
            },
            "formFactor": "virtual",
            "lastFour": "5785",
            "number": "************5785"
          },
          "description": "S. Hopper - Main card",
          "id": "PI3227C223222B5CMD278FKGS",
          "issuingCountryCode": "GB",
          "status": "suspended",
          "type": "card"
        }
      },
      "patch-transactionRules-transactionRuleId-updateTransactionRuleStatus": {
        "description": "Example request for updating the status of a transaction rule",
        "summary": "Update the status of transaction rule",
        "value": {
          "status": "inactive"
        }
      },
      "patch-transactionRules-transactionRuleId-updateTransactionRuleStatus-200": {
        "description": "Example response for successfully updating the status of a transaction rule",
        "summary": "Transaction rule status updated",
        "value": {
          "aggregationLevel": "paymentInstrument",
          "description": "Up to 1000 EUR per card for the last 12 hours",
          "entityKey": {
            "entityReference": "PG3227C223222C5GXR3M5592Q",
            "entityType": "paymentInstrumentGroup"
          },
          "id": "TR3227C223222C5GXR3XP596N",
          "interval": {
            "duration": {
              "unit": "hours",
              "value": 12
            },
            "timeZone": "UTC",
            "type": "sliding"
          },
          "outcomeType": "hardBlock",
          "reference": "YOUR_REFERENCE_2918A",
          "requestType": "authorization",
          "ruleRestrictions": {
            "totalAmount": {
              "operation": "greaterThan",
              "value": {
                "currency": "EUR",
                "value": 100000
              }
            }
          },
          "startDate": "2022-11-17T00:07:09.10057663+01:00",
          "status": "inactive",
          "type": "velocity"
        }
      },
      "post-accountHolders-createAccountHolder": {
        "description": "Example request for creating an account holder",
        "summary": "Create an account holder",
        "value": {
          "description": "Liable account holder used for international payments and payouts",
          "legalEntityId": "LE322JV223222D5GG42KN6869",
          "reference": "S.Eller-001"
        }
      },
      "post-balanceAccounts-balanceAccountId-sweeps-createSweep-pull": {
        "description": "Example request for creating a pull sweep",
        "summary": "Create a sweep to pull funds in to a balance account",
        "value": {
          "counterparty": {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          },
          "currency": "EUR",
          "schedule": {
            "type": "balance"
          },
          "status": "active",
          "triggerAmount": {
            "currency": "EUR",
            "value": 50000
          },
          "type": "pull"
        }
      },
      "post-balanceAccounts-balanceAccountId-sweeps-createSweep-pull-200": {
        "description": "Example response for creating a pull sweep",
        "summary": "Sweep of pull type created",
        "value": {
          "counterparty": {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          },
          "currency": "EUR",
          "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
          "schedule": {
            "type": "balance"
          },
          "status": "active",
          "triggerAmount": {
            "currency": "EUR",
            "value": 50000
          },
          "type": "pull"
        }
      },
      "post-balanceAccounts-balanceAccountId-sweeps-createSweep-push": {
        "description": "Example request for creating a push sweep",
        "summary": "Create a sweep to push funds out of a balance account",
        "value": {
          "counterparty": {
            "balanceAccountId": "BA32278887611B5FTD2KR6TJD"
          },
          "currency": "EUR",
          "schedule": {
            "type": "weekly"
          },
          "status": "active",
          "triggerAmount": {
            "currency": "EUR",
            "value": 50000
          },
          "type": "push"
        }
      },
      "post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-200": {
        "description": "Example response for creating a push sweep",
        "summary": "Sweep of push type created",
        "value": {
          "counterparty": {
            "balanceAccountId": "BA32278887611B5FTD2KR6TJD"
          },
          "currency": "EUR",
          "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
          "schedule": {
            "type": "weekly"
          },
          "status": "active",
          "triggerAmount": {
            "currency": "EUR",
            "value": 50000
          },
          "type": "push"
        }
      },
      "post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-priorities": {
        "description": "Example request for creating a push sweep with priorities",
        "summary": "Create a sweep to push funds out of a balance account with set priorities",
        "value": {
          "category": "bank",
          "counterparty": {
            "transferInstrumentId": "SE322JV223222J5HGLCGF2WDV"
          },
          "currency": "EUR",
          "priorities": [
            "fast",
            "instant"
          ],
          "schedule": {
            "type": "weekly"
          },
          "status": "active",
          "triggerAmount": {
            "currency": "EUR",
            "value": 50000
          },
          "type": "push"
        }
      },
      "post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-priorities-200": {
        "description": "Example response for creating a push sweep with priorities",
        "summary": "Sweep of push type with priorities created",
        "value": {
          "category": "bank",
          "counterparty": {
            "transferInstrumentId": "SE322JV223222J5HGLCGF2WDV"
          },
          "currency": "EUR",
          "id": "SWPC4227C224555B5FTD2NT2JV4WN9",
          "priorities": [
            "fast",
            "instant"
          ],
          "schedule": {
            "type": "weekly"
          },
          "status": "active",
          "triggerAmount": {
            "currency": "EUR",
            "value": 50000
          },
          "type": "push"
        }
      },
      "post-balanceAccounts-createBalanceAccount": {
        "description": "Example request for creating a balance account",
        "summary": "Create a balance account",
        "value": {
          "accountHolderId": "AH32272223222C5GXTD343TKP",
          "description": "S.Hopper - Main balance account"
        }
      },
      "post-paymentInstrumentGroups-createPaymentInstrumentGroups": {
        "description": "Example request for creating a payment instrument group",
        "summary": "Create a payment instrument group",
        "value": {
          "balancePlatform": "YOUR_BALANCE_PLATFORM",
          "txVariant": "mc"
        }
      },
      "post-paymentInstruments-createBusinessAccountNL": {
        "description": "Example request for creating a business account in NL",
        "summary": "Create a business account in NL",
        "value": {
          "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
          "description": "YOUR_DESCRIPTION",
          "issuingCountryCode": "NL",
          "type": "bankAccount"
        }
      },
      "post-paymentInstruments-createBusinessAccountNL-200": {
        "description": "Example response for creating a business account in NL",
        "summary": "Business account in NL created",
        "value": {
          "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
          "bankAccount": {
            "iban": "NL20ADYB2017000035"
          },
          "description": "YOUR_DESCRIPTION",
          "id": "PI322LJ223222B5DJS7CD9LWL",
          "issuingCountryCode": "NL",
          "status": "Active",
          "type": "bankAccount"
        }
      },
      "post-paymentInstruments-createBusinessAccountUS": {
        "description": "Example request for creating a business account in the US",
        "summary": "Create a business account in the US",
        "value": {
          "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
          "description": "YOUR_DESCRIPTION",
          "issuingCountryCode": "US",
          "type": "bankAccount"
        }
      },
      "post-paymentInstruments-createBusinessAccountUS-200": {
        "description": "Example response for creating a business account in the US",
        "summary": "Business account in the US created",
        "value": {
          "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
          "bankAccount": {
            "accountNumber": "333720756",
            "accountType": "checking",
            "routingNumber": "21000021"
          },
          "description": "YOUR_DESCRIPTION",
          "id": "PI322LJ223222B5DJS7CD9LWL",
          "issuingCountryCode": "US",
          "status": "Active",
          "type": "bankAccount"
        }
      },
      "post-paymentInstruments-createPhysicalCard": {
        "description": "Example request for creating a physical card",
        "summary": "Create a physical card",
        "value": {
          "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
          "card": {
            "brand": "mc",
            "brandVariant": "mcdebit",
            "cardholderName": "Sam Hopper",
            "configuration": {
              "configurationProfileId": "CP123AB45678C91ABCD2ABCDE"
            },
            "deliveryContact": {
              "address": {
                "city": "Amsterdam",
                "country": "NL",
                "line1": "Brannan Street",
                "line2": "274",
                "postalCode": "1020CD",
                "stateOrProvince": "NH"
              },
              "name": {
                "firstName": "Sam",
                "lastName": "Hopper"
              }
            },
            "formFactor": "physical"
          },
          "description": "S.Hopper - Main card",
          "issuingCountryCode": "NL",
          "status": "inactive",
          "type": "card"
        }
      },
      "post-paymentInstruments-createPhysicalCard-200": {
        "description": "Example response for creating a physical card",
        "summary": "Physical card created",
        "value": {
          "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
          "card": {
            "authentication": {
              "password": "******",
              "phone": {
                "number": "+123456789",
                "type": "mobile"
              }
            },
            "bin": "555544",
            "brand": "mc",
            "brandVariant": "mcdebit",
            "cardholderName": "Sam Hopper",
            "configuration": {
              "configurationProfileId": "CP123AB45678C91ABCD2ABCDE"
            },
            "deliveryContact": {
              "address": {
                "city": "Amsterdam",
                "country": "NL",
                "line1": "Brannan Street",
                "line2": "274",
                "postalCode": "1020CD",
                "stateOrProvince": "NH"
              },
              "name": {
                "firstName": "Sam",
                "lastName": "Hopper"
              }
            },
            "expiration": {
              "month": "08",
              "year": "2024"
            },
            "formFactor": "physical",
            "lastFour": "2765",
            "number": "************5785"
          },
          "description": "S. Hopper - Main card",
          "id": "PI3227C223222B5BPCMFXD2XG",
          "issuingCountryCode": "NL",
          "status": "inactive",
          "type": "card"
        }
      },
      "post-paymentInstruments-createVirtualCard": {
        "description": "Example request for creating a virtual card",
        "summary": "Create a virtual card",
        "value": {
          "balanceAccountId": "BA3227C223222B5FG88S28BGN",
          "card": {
            "brand": "mc",
            "brandVariant": "mcdebit",
            "cardholderName": "Simon Hopper",
            "formFactor": "virtual"
          },
          "description": "My test card",
          "issuingCountryCode": "NL",
          "type": "card"
        }
      },
      "post-paymentInstruments-createVirtualCard-200": {
        "description": "Example response for creating a virtual card",
        "summary": "Virtual card created",
        "value": {
          "balanceAccountId": "BA3227C223222B5FG88S28BGN",
          "card": {
            "bin": "555544",
            "brand": "mc",
            "brandVariant": "mcdebit",
            "cardholderName": "Simon Hopper",
            "cvc": "136",
            "expiration": {
              "month": "11",
              "year": "2025"
            },
            "formFactor": "virtual",
            "lastFour": "3703",
            "number": "5555444411213703"
          },
          "description": "My test card",
          "id": "PI32272223222C5GXTDWH3TTN",
          "issuingCountryCode": "NL",
          "status": "active",
          "type": "card"
        }
      },
      "post-transactionRules-createTransactionRuleAllowPos": {
        "description": "Example request to allow only point-of-sale transactions",
        "summary": "Allow only point-of-sale transactions",
        "value": {
          "description": "Allow only point-of-sale transactions",
          "entityKey": {
            "entityReference": "PI3227C223222B5FG88SB8BHR",
            "entityType": "paymentInstrument"
          },
          "interval": {
            "type": "perTransaction"
          },
          "reference": "YOUR_REFERENCE_4F7346",
          "ruleRestrictions": {
            "processingTypes": {
              "operation": "noneMatch",
              "value": [
                "pos"
              ]
            }
          },
          "status": "active",
          "type": "blockList"
        }
      },
      "post-transactionRules-createTransactionRuleIncreaseScore": {
        "description": "Example request to increase the score of a card",
        "summary": "Increase the score of a card",
        "value": {
          "description": "Assign score if more than 500 EUR in 2 hours",
          "entityKey": {
            "entityReference": "PI3227C223222B5FG88SB8BHR",
            "entityType": "paymentInstrument"
          },
          "interval": {
            "duration": {
              "unit": "hours",
              "value": 2
            },
            "type": "sliding"
          },
          "outcomeType": "scoreBased",
          "reference": "myRule11789",
          "ruleRestrictions": {
            "totalAmount": {
              "operation": "greaterThan",
              "value": {
                "currency": "EUR",
                "value": 50000
              }
            }
          },
          "score": 20,
          "type": "velocity"
        }
      },
      "post-transactionRules-createTransactionRuleLimitSliding": {
        "description": "Example request to limit the total amount in a sliding interval",
        "summary": "Limit total amount in the last 12 hours",
        "value": {
          "aggregationLevel": "paymentInstrument",
          "description": "Up to 1000 EUR per card for the last 12 hours",
          "entityKey": {
            "entityReference": "BA3227C223222B5FN65355NR3",
            "entityType": "balanceAccount"
          },
          "interval": {
            "duration": {
              "unit": "hours",
              "value": 12
            },
            "type": "sliding"
          },
          "outcomeType": "hardBlock",
          "reference": "YOUR_REFERENCE_2918A",
          "ruleRestrictions": {
            "totalAmount": {
              "operation": "greaterThan",
              "value": {
                "currency": "EUR",
                "value": 100000
              }
            }
          },
          "status": "active",
          "type": "velocity"
        }
      },
      "post-transactionRules-createTransactionRuleLimitTransaction": {
        "description": "Example request to limit total amount of international transations",
        "summary": "Limit international payments",
        "value": {
          "description": "Up to 50 EUR international transactions",
          "entityKey": {
            "entityReference": "BA3227C223222B5FN65355NR3",
            "entityType": "balanceAccount"
          },
          "interval": {
            "type": "daily"
          },
          "outcomeType": "hardBlock",
          "reference": "YOUR_REFERENCE_B2634",
          "ruleRestrictions": {
            "internationalTransaction": {
              "operation": "equals",
              "value": true
            },
            "totalAmount": {
              "operation": "greaterThan",
              "value": {
                "currency": "EUR",
                "value": 5000
              }
            }
          },
          "status": "active",
          "type": "velocity"
        }
      },
      "post-validateBankAccountIdentification-validateBankAccountIdentificationIban": {
        "summary": "Validate an IBAN",
        "value": {
          "accountIdentification": {
            "iban": "1001001234",
            "type": "iban"
          }
        }
      },
      "post-validateBankAccountIdentification-validateBankAccountIdentificationIban-422": {
        "summary": "Invalid IBAN details",
        "value": {
          "errorCode": "33_01",
          "invalidFields": [
            {
              "message": "Invalid IBAN.",
              "name": "iban"
            }
          ],
          "status": 422,
          "title": "Invalid bank account identification details provided",
          "type": "https://docs.adyen.com/errors/validation"
        }
      },
      "post-validateBankAccountIdentification-validateBankAccountIdentificationUs": {
        "summary": "Validate a US bank account",
        "value": {
          "accountIdentification": {
            "accountNumber": "12345JHDhjkf67890",
            "routingNumber": "121000cxhgjhzxg248",
            "type": "usLocal"
          }
        }
      },
      "post-validateBankAccountIdentification-validateBankAccountIdentificationUs-422": {
        "summary": "Invalid US bank account details",
        "value": {
          "errorCode": "33_01",
          "invalidFields": [
            {
              "message": "Invalid account number.",
              "name": "accountNumber"
            },
            {
              "message": "Invalid routing number.",
              "name": "routingNumber"
            }
          ],
          "status": 422,
          "title": "Invalid bank account identification details provided",
          "type": "https://docs.adyen.com/errors/validation"
        }
      }
    },
    "schemas": {
      "AULocalAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The bank account number, without separators or whitespace.",
            "maxLength": 9,
            "minLength": 5,
            "type": "string"
          },
          "bsbCode": {
            "description": "The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.",
            "maxLength": 6,
            "minLength": 6,
            "type": "string"
          },
          "type": {
            "default": "auLocal",
            "description": "**auLocal**",
            "enum": [
              "auLocal"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "accountNumber",
          "bsbCode"
        ],
        "type": "object"
      },
      "AccountHolder": {
        "properties": {
          "balancePlatform": {
            "description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.",
            "type": "string"
          },
          "capabilities": {
            "additionalProperties": {
              "$ref": "#/components/schemas/AccountHolderCapability"
            },
            "description": "Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.",
            "type": "object"
          },
          "contactDetails": {
            "$ref": "#/components/schemas/ContactDetails",
            "deprecated": true,
            "description": "Contact details of the account holder."
          },
          "description": {
            "description": "Your description for the account holder, maximum 300 characters.",
            "maxLength": 300,
            "type": "string"
          },
          "id": {
            "description": "The unique identifier of the account holder.",
            "readOnly": true,
            "type": "string"
          },
          "legalEntityId": {
            "description": "The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.",
            "type": "string"
          },
          "primaryBalanceAccount": {
            "description": "The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.",
            "type": "string"
          },
          "reference": {
            "description": "Your reference for the account holder, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "status": {
            "description": "The status of the account holder.\n\nPossible values: \n\n * **active**: The account holder is active. This is the default status when creating an account holder. \n\n * **inactive (Deprecated)**: The account holder is temporarily inactive due to missing KYC details. You can set the account back to active by providing the missing KYC details. \n\n * **suspended**: The account holder is permanently deactivated by Adyen. This action cannot be undone. \n\n* **closed**: The account holder is permanently deactivated by you. This action cannot be undone.",
            "enum": [
              "active",
              "closed",
              "inactive",
              "suspended"
            ],
            "type": "string"
          },
          "timeZone": {
            "description": "The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
            "type": "string"
          },
          "verificationDeadlines": {
            "description": "List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.",
            "items": {
              "$ref": "#/components/schemas/VerificationDeadline"
            },
            "readOnly": true,
            "type": "array",
            "x-addedInVersion": "2"
          }
        },
        "required": [
          "legalEntityId",
          "id"
        ],
        "type": "object"
      },
      "AccountHolderCapability": {
        "properties": {
          "allowed": {
            "description": "Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.",
            "readOnly": true,
            "type": "boolean"
          },
          "allowedLevel": {
            "description": "The capability level that is allowed for the account holder.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
            "enum": [
              "high",
              "low",
              "medium",
              "notApplicable"
            ],
            "readOnly": true,
            "type": "string"
          },
          "allowedSettings": {
            "$ref": "#/components/schemas/JSONObject",
            "description": "A JSON object containing the settings that are allowed for the account holder.",
            "readOnly": true
          },
          "enabled": {
            "description": "Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.",
            "type": "boolean"
          },
          "problems": {
            "description": "Contains verification errors and the actions that you can take to resolve them.",
            "items": {
              "$ref": "#/components/schemas/CapabilityProblem"
            },
            "readOnly": true,
            "type": "array"
          },
          "requested": {
            "description": "Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.",
            "type": "boolean"
          },
          "requestedLevel": {
            "description": "The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
            "enum": [
              "high",
              "low",
              "medium",
              "notApplicable"
            ],
            "type": "string"
          },
          "requestedSettings": {
            "$ref": "#/components/schemas/JSONObject",
            "description": "A JSON object containing the settings that were requested for the account holder.",
            "readOnly": true
          },
          "transferInstruments": {
            "description": "Contains the status of the transfer instruments associated with this capability. ",
            "items": {
              "$ref": "#/components/schemas/AccountSupportingEntityCapability"
            },
            "type": "array"
          },
          "verificationStatus": {
            "description": "The status of the verification checks for the capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n",
            "enum": [
              "invalid",
              "pending",
              "rejected",
              "valid"
            ],
            "readOnly": true,
            "type": "string"
          }
        },
        "type": "object"
      },
      "AccountHolderInfo": {
        "properties": {
          "balancePlatform": {
            "description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.",
            "type": "string"
          },
          "capabilities": {
            "additionalProperties": {
              "$ref": "#/components/schemas/AccountHolderCapability"
            },
            "description": "Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.",
            "type": "object"
          },
          "contactDetails": {
            "$ref": "#/components/schemas/ContactDetails",
            "deprecated": true,
            "description": "Contact details of the account holder."
          },
          "description": {
            "description": "Your description for the account holder, maximum 300 characters.",
            "maxLength": 300,
            "type": "string"
          },
          "legalEntityId": {
            "description": "The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.",
            "type": "string"
          },
          "reference": {
            "description": "Your reference for the account holder, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "timeZone": {
            "description": "The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
            "type": "string"
          }
        },
        "required": [
          "legalEntityId"
        ],
        "type": "object"
      },
      "AccountSupportingEntityCapability": {
        "properties": {
          "allowed": {
            "description": "Indicates whether the supporting entity capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.",
            "readOnly": true,
            "type": "boolean"
          },
          "allowedLevel": {
            "description": "The capability level that is allowed for the account holder.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
            "enum": [
              "high",
              "low",
              "medium",
              "notApplicable"
            ],
            "readOnly": true,
            "type": "string"
          },
          "enabled": {
            "description": "Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.",
            "type": "boolean"
          },
          "id": {
            "description": "The ID of the supporting entity.",
            "readOnly": true,
            "type": "string"
          },
          "requested": {
            "description": "Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.",
            "type": "boolean"
          },
          "requestedLevel": {
            "description": "The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
            "enum": [
              "high",
              "low",
              "medium",
              "notApplicable"
            ],
            "type": "string"
          },
          "verificationStatus": {
            "description": "The status of the verification checks for the supporting entity capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n",
            "enum": [
              "invalid",
              "pending",
              "rejected",
              "valid"
            ],
            "readOnly": true,
            "type": "string"
          }
        },
        "type": "object"
      },
      "ActiveNetworkTokensRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "The number of tokens.",
            "format": "int32",
            "type": "integer"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "AdditionalBankIdentification": {
        "properties": {
          "code": {
            "description": "The value of the additional bank identification.",
            "type": "string"
          },
          "type": {
            "description": "The type of additional bank identification, depending on the country.\n\nPossible values:\n\n * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces\n * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.",
            "enum": [
              "gbSortCode",
              "usRoutingNumber"
            ],
            "type": "string"
          }
        },
        "type": "object"
      },
      "Address": {
        "properties": {
          "city": {
            "description": "The name of the city. Maximum length: 3000 characters.",
            "maxLength": 3000,
            "type": "string"
          },
          "country": {
            "description": "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.\n> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
            "type": "string"
          },
          "houseNumberOrName": {
            "description": "The number or name of the house. Maximum length: 3000 characters.",
            "maxLength": 3000,
            "type": "string"
          },
          "postalCode": {
            "description": "A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.",
            "type": "string"
          },
          "stateOrProvince": {
            "description": "The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n> Required for the US and Canada.",
            "type": "string"
          },
          "street": {
            "description": "The name of the street. Maximum length: 3000 characters.\n> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.",
            "maxLength": 3000,
            "type": "string"
          }
        },
        "required": [
          "street",
          "houseNumberOrName",
          "city",
          "postalCode",
          "country"
        ],
        "type": "object"
      },
      "Address-2": {
        "properties": {
          "city": {
            "description": "The name of the city.",
            "type": "string"
          },
          "country": {
            "description": "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.\n>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
            "type": "string"
          },
          "line1": {
            "description": "First line of the address.",
            "type": "string"
          },
          "line2": {
            "description": "Second line of the address.",
            "type": "string"
          },
          "line3": {
            "description": "Third line of the address.",
            "type": "string"
          },
          "postalCode": {
            "description": "The postal code.\nMaximum length:\n* 5 digits for an address in the US.\n* 10 characters for an address in all other countries.",
            "type": "string"
          },
          "stateOrProvince": {
            "description": "The two-letterISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n> Required for the US and Canada.",
            "type": "string"
          }
        },
        "required": [
          "country"
        ],
        "type": "object"
      },
      "Amount": {
        "properties": {
          "currency": {
            "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).",
            "maxLength": 3,
            "minLength": 3,
            "type": "string"
          },
          "value": {
            "description": "The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
            "format": "int64",
            "type": "integer"
          }
        },
        "required": [
          "value",
          "currency"
        ],
        "type": "object"
      },
      "Authentication": {
        "properties": {
          "email": {
            "description": "The email address where the one-time password (OTP) is sent.",
            "type": "string"
          },
          "password": {
            "description": "The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.\n\n* Characters between **a-z**, **A-Z**, and **0-9**\n\n* Special characters: **äöüßÄÖÜ+-*/ç%()=?!~#'\",;:$&àùòâôûáúó**",
            "maxLength": 30,
            "minLength": 1,
            "type": "string"
          },
          "phone": {
            "$ref": "#/components/schemas/Phone",
            "description": "The phone number where the one-time password (OTP) is sent.\n\nThis object must have:\n\n* A `type` set to **mobile**.\n\n* A `number` with a valid country code.\n\n* A `number` with more than 4 digits, excluding the country code.\n\n>Make sure to verify that the card user owns the phone number."
          }
        },
        "type": "object"
      },
      "Balance": {
        "properties": {
          "available": {
            "description": "The remaining amount available for spending.",
            "format": "int64",
            "type": "integer"
          },
          "balance": {
            "description": "The total amount in the balance.",
            "format": "int64",
            "type": "integer"
          },
          "currency": {
            "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.",
            "type": "string"
          },
          "reserved": {
            "description": "The amount reserved for payments that have been authorised, but have not been captured yet.",
            "format": "int64",
            "type": "integer"
          }
        },
        "required": [
          "currency",
          "balance",
          "reserved",
          "available"
        ],
        "type": "object"
      },
      "BalanceAccount": {
        "properties": {
          "accountHolderId": {
            "description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
            "type": "string"
          },
          "balances": {
            "description": "List of balances with the amount and currency.",
            "items": {
              "$ref": "#/components/schemas/Balance"
            },
            "type": "array"
          },
          "defaultCurrencyCode": {
            "description": "The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account.\nThe default value is **EUR**.",
            "type": "string"
          },
          "description": {
            "description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
            "maxLength": 300,
            "type": "string"
          },
          "id": {
            "description": "The unique identifier of the balance account.",
            "type": "string"
          },
          "reference": {
            "description": "Your reference for the balance account, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "status": {
            "description": "The status of the balance account, set to **active** by default. \n",
            "enum": [
              "active",
              "closed",
              "inactive",
              "suspended"
            ],
            "type": "string"
          },
          "timeZone": {
            "description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
            "type": "string"
          }
        },
        "required": [
          "accountHolderId",
          "id"
        ],
        "type": "object"
      },
      "BalanceAccountBase": {
        "properties": {
          "accountHolderId": {
            "description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
            "type": "string"
          },
          "defaultCurrencyCode": {
            "description": "The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account.\nThe default value is **EUR**.",
            "type": "string"
          },
          "description": {
            "description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
            "maxLength": 300,
            "type": "string"
          },
          "id": {
            "description": "The unique identifier of the balance account.",
            "type": "string"
          },
          "reference": {
            "description": "Your reference for the balance account, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "status": {
            "description": "The status of the balance account, set to **active** by default. \n",
            "enum": [
              "active",
              "closed",
              "inactive",
              "suspended"
            ],
            "type": "string"
          },
          "timeZone": {
            "description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
            "type": "string"
          }
        },
        "required": [
          "accountHolderId",
          "id"
        ],
        "type": "object"
      },
      "BalanceAccountInfo": {
        "properties": {
          "accountHolderId": {
            "description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
            "type": "string"
          },
          "defaultCurrencyCode": {
            "description": "The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account.\nThe default value is **EUR**.",
            "type": "string"
          },
          "description": {
            "description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
            "maxLength": 300,
            "type": "string"
          },
          "reference": {
            "description": "Your reference for the balance account, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "timeZone": {
            "description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
            "type": "string"
          }
        },
        "required": [
          "accountHolderId"
        ],
        "type": "object"
      },
      "BalanceAccountUpdateRequest": {
        "properties": {
          "accountHolderId": {
            "description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
            "type": "string"
          },
          "defaultCurrencyCode": {
            "description": "The default currency code of this balance account, in three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) format. \nThe default value is **EUR**.",
            "type": "string"
          },
          "description": {
            "description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
            "maxLength": 300,
            "type": "string"
          },
          "reference": {
            "description": "Your reference to the balance account, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "status": {
            "description": "The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **active**.\n\nPossible values: **active**, **inactive**, **closed**, **suspended**.",
            "enum": [
              "active",
              "closed",
              "inactive",
              "suspended"
            ],
            "type": "string"
          },
          "timeZone": {
            "description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
            "type": "string"
          }
        },
        "type": "object"
      },
      "BalancePlatform": {
        "properties": {
          "description": {
            "description": "Your description of the balance platform, maximum 300 characters.",
            "maxLength": 300,
            "type": "string"
          },
          "id": {
            "description": "The unique identifier of the balance platform.",
            "type": "string"
          },
          "status": {
            "description": "The status of the balance platform.\n\nPossible values: **Active**, **Inactive**, **Closed**, **Suspended**.",
            "type": "string"
          }
        },
        "required": [
          "id"
        ],
        "type": "object"
      },
      "BalanceSweepConfigurationsResponse": {
        "properties": {
          "hasNext": {
            "description": "Indicates whether there are more items on the next page.",
            "type": "boolean"
          },
          "hasPrevious": {
            "description": "Indicates whether there are more items on the previous page.",
            "type": "boolean"
          },
          "sweeps": {
            "description": "List of sweeps associated with the balance account.",
            "items": {
              "$ref": "#/components/schemas/SweepConfigurationV2"
            },
            "type": "array"
          }
        },
        "required": [
          "sweeps",
          "hasPrevious",
          "hasNext"
        ],
        "type": "object"
      },
      "BankAccountIdentificationValidationRequest": {
        "properties": {
          "accountIdentification": {
            "description": "Bank account identification.",
            "oneOf": [
              {
                "$ref": "#/components/schemas/AULocalAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/CALocalAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/CZLocalAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/HULocalAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/IbanAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/NOLocalAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/NumberAndBicAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/PLLocalAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/SELocalAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/SGLocalAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/UKLocalAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/USLocalAccountIdentification"
              }
            ]
          }
        },
        "required": [
          "accountIdentification"
        ],
        "type": "object"
      },
      "BrandVariantsRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "List of card brand variants.\n\nPossible values: \n\n- **mc**, **mccredit**, **mccommercialcredit_b2b**, **mcdebit**, **mcbusinessdebit**, **mcbusinessworlddebit**, **mcprepaid**, **mcmaestro**\n\n - **visa**, **visacredit**, **visadebit**, **visaprepaid**.\n\nYou can specify a rule for a generic variant. For example, to create a rule for all Mastercard payment instruments, use **mc**. The rule is applied to all payment instruments under **mc**, such as **mcbusinessdebit** and **mcdebit**.\n\n",
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "BulkAddress": {
        "properties": {
          "city": {
            "description": "The name of the city.",
            "type": "string"
          },
          "company": {
            "description": "The name of the company.",
            "type": "string"
          },
          "country": {
            "description": "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.",
            "type": "string"
          },
          "email": {
            "description": "The email address.",
            "type": "string"
          },
          "houseNumberOrName": {
            "description": "The house number or name.",
            "type": "string"
          },
          "mobile": {
            "description": "The full telephone number.",
            "type": "string"
          },
          "postalCode": {
            "description": "The postal code.\n\nMaximum length:\n\n* 5 digits for addresses in the US.\n\n* 10 characters for all other countries.",
            "type": "string"
          },
          "stateOrProvince": {
            "description": "The two-letter ISO 3166-2 state or province code.\n\nMaximum length: 2 characters for addresses in the US.",
            "type": "string"
          },
          "street": {
            "description": "The streetname of the house.",
            "type": "string"
          }
        },
        "required": [
          "country"
        ],
        "type": "object"
      },
      "CALocalAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The 5- to 12-digit bank account number, without separators or whitespace.",
            "maxLength": 12,
            "minLength": 5,
            "type": "string"
          },
          "accountType": {
            "default": "checking",
            "description": "The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.",
            "enum": [
              "checking",
              "savings"
            ],
            "type": "string"
          },
          "institutionNumber": {
            "description": "The 3-digit institution number, without separators or whitespace.",
            "maxLength": 3,
            "minLength": 3,
            "type": "string"
          },
          "transitNumber": {
            "description": "The 5-digit transit number, without separators or whitespace.",
            "maxLength": 5,
            "minLength": 5,
            "type": "string"
          },
          "type": {
            "default": "caLocal",
            "description": "**caLocal**",
            "enum": [
              "caLocal"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "accountNumber",
          "institutionNumber",
          "transitNumber"
        ],
        "type": "object"
      },
      "CZLocalAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The 2- to 16-digit bank account number (Číslo účtu) in the following format:\n\n- The optional prefix (předčíslí).\n\n- The required second part (základní část) which must be at least two non-zero digits.\n\nExamples:\n\n- **19-123457** (with prefix)\n\n- **123457** (without prefix)\n\n- **000019-0000123457** (with prefix, normalized)\n\n- **000000-0000123457** (without prefix, normalized)",
            "maxLength": 17,
            "minLength": 2,
            "type": "string"
          },
          "bankCode": {
            "description": "The 4-digit bank code (Kód banky), without separators or whitespace.",
            "maxLength": 4,
            "minLength": 4,
            "type": "string"
          },
          "type": {
            "default": "czLocal",
            "description": "**czLocal**",
            "enum": [
              "czLocal"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "accountNumber",
          "bankCode"
        ],
        "type": "object"
      },
      "CapabilityProblem": {
        "type": "object"
      },
      "CapitalBalance": {
        "properties": {
          "currency": {
            "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).",
            "type": "string"
          },
          "fee": {
            "description": "Fee amount.",
            "format": "int64",
            "type": "integer"
          },
          "principal": {
            "description": "Principal amount.",
            "format": "int64",
            "type": "integer"
          },
          "total": {
            "description": "Total amount. A sum of principal amount and fee amount.",
            "format": "int64",
            "type": "integer"
          }
        },
        "required": [
          "principal",
          "fee",
          "total",
          "currency"
        ],
        "type": "object"
      },
      "CapitalGrantAccount": {
        "properties": {
          "balances": {
            "description": "The balances of the grant account.",
            "items": {
              "$ref": "#/components/schemas/CapitalBalance"
            },
            "type": "array"
          },
          "fundingBalanceAccountId": {
            "description": "The unique identifier of the balance account used to fund the grant.",
            "type": "string"
          },
          "id": {
            "description": "The identifier of the grant account.",
            "type": "string"
          },
          "limits": {
            "description": "The limits of the grant account.",
            "items": {
              "$ref": "#/components/schemas/GrantLimit"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "Card": {
        "properties": {
          "authentication": {
            "$ref": "#/components/schemas/Authentication",
            "description": "Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information."
          },
          "bin": {
            "description": "The bank identification number (BIN) of the card number.",
            "type": "string"
          },
          "brand": {
            "description": "The brand of the physical or the virtual card.\nPossible values: **visa**, **mc**.",
            "type": "string"
          },
          "brandVariant": {
            "description": "The brand variant of the physical or the virtual card.\n>Contact your Adyen Implementation Manager to get the values that are relevant to your integration. Examples: **visadebit**, **mcprepaid**.",
            "type": "string"
          },
          "cardholderName": {
            "description": "The name of the cardholder.\n Maximum length: 26 characters.",
            "maxLength": 26,
            "type": "string"
          },
          "configuration": {
            "$ref": "#/components/schemas/CardConfiguration",
            "description": "Settings required when creating a physical or a virtual card. \n\nReach out to your Adyen contact to get the values that you can send in this object."
          },
          "cvc": {
            "description": "The CVC2 value of the card.\n> The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards.",
            "type": "string"
          },
          "deliveryContact": {
            "$ref": "#/components/schemas/DeliveryContact",
            "description": "The delivery contact (name and address) for physical card delivery.",
            "x-addedInVersion": "2"
          },
          "expiration": {
            "$ref": "#/components/schemas/Expiry",
            "description": "The expiration date of the card."
          },
          "formFactor": {
            "description": "The form factor of the card.\nPossible values: **virtual**, **physical**.",
            "enum": [
              "physical",
              "unknown",
              "virtual"
            ],
            "type": "string"
          },
          "lastFour": {
            "description": "Last last four digits of the card number.",
            "type": "string"
          },
          "number": {
            "description": "The primary account number (PAN) of the card.\n> The PAN is masked by default and returned only for single-use virtual cards.",
            "readOnly": true,
            "type": "string"
          }
        },
        "required": [
          "formFactor",
          "cardholderName",
          "brand",
          "brandVariant",
          "number"
        ],
        "type": "object"
      },
      "CardConfiguration": {
        "properties": {
          "activation": {
            "description": "Overrides the activation label design ID defined in the `configurationProfileId`. The activation label is attached to the card and contains the activation instructions.",
            "type": "string"
          },
          "activationUrl": {
            "description": "Your app's URL, if you want to activate cards through your app. For example, **my-app://ref1236a7d**. A QR code is created based on this URL, and is included in the carrier. Before you use this field, reach out to your Adyen contact to set up the QR code process. \n\nMaximum length: 255 characters.",
            "maxLength": 255,
            "type": "string"
          },
          "bulkAddress": {
            "$ref": "#/components/schemas/BulkAddress",
            "description": "Overrides the shipment bulk address defined in the `configurationProfileId`."
          },
          "cardImageId": {
            "description": "The ID of the card image. This is the image that will be printed on the full front of the card.",
            "type": "string"
          },
          "carrier": {
            "description": "Overrides the carrier design ID defined in the `configurationProfileId`. The carrier is the letter or packaging to which the card is attached.",
            "type": "string"
          },
          "carrierImageId": {
            "description": "The ID of the carrier image. This is the image that will printed on the letter to which the card is attached.",
            "type": "string"
          },
          "configurationProfileId": {
            "description": "The ID of the card configuration profile that contains the settings of the card. For example, the envelope and PIN mailer designs or the logistics company handling the shipment. All the settings in the profile are applied to the card, unless you provide other fields to override them.\n\nFor example, send the `shipmentMethod` to override the logistics company defined in the card configuration profile.",
            "type": "string"
          },
          "currency": {
            "description": "The three-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the card. For example, **EUR**.",
            "type": "string"
          },
          "envelope": {
            "description": "Overrides the envelope design ID defined in the `configurationProfileId`. ",
            "type": "string"
          },
          "insert": {
            "description": "Overrides the insert design ID defined in the `configurationProfileId`. An insert is any additional material, such as marketing materials, that are shipped together with the card.",
            "type": "string"
          },
          "language": {
            "description": "The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code of the card. For example, **en**.",
            "type": "string"
          },
          "logoImageId": {
            "description": "The ID of the logo image. This is the image that will be printed on the partial front of the card, such as a logo on the upper right corner.",
            "type": "string"
          },
          "pinMailer": {
            "description": "Overrides the PIN mailer design ID defined in the `configurationProfileId`. The PIN mailer is the letter on which the PIN is printed.",
            "type": "string"
          },
          "shipmentMethod": {
            "description": "Overrides the logistics company defined in the `configurationProfileId`.",
            "type": "string"
          }
        },
        "required": [
          "configurationProfileId"
        ],
        "type": "object"
      },
      "CardInfo": {
        "properties": {
          "authentication": {
            "$ref": "#/components/schemas/Authentication",
            "description": "Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information."
          },
          "brand": {
            "description": "The brand of the physical or the virtual card.\nPossible values: **visa**, **mc**.",
            "type": "string"
          },
          "brandVariant": {
            "description": "The brand variant of the physical or the virtual card.\n>Contact your Adyen Implementation Manager to get the values that are relevant to your integration. Examples: **visadebit**, **mcprepaid**.",
            "type": "string"
          },
          "cardholderName": {
            "description": "The name of the cardholder.\n Maximum length: 26 characters.",
            "maxLength": 26,
            "type": "string"
          },
          "configuration": {
            "$ref": "#/components/schemas/CardConfiguration",
            "description": "Settings required when creating a physical or a virtual card. \n\nReach out to your Adyen contact to get the values that you can send in this object."
          },
          "deliveryContact": {
            "$ref": "#/components/schemas/DeliveryContact",
            "description": "The delivery contact (name and address) for physical card delivery.",
            "x-addedInVersion": "2"
          },
          "formFactor": {
            "description": "The form factor of the card.\nPossible values: **virtual**, **physical**.",
            "enum": [
              "physical",
              "unknown",
              "virtual"
            ],
            "type": "string"
          }
        },
        "required": [
          "formFactor",
          "cardholderName",
          "brand",
          "brandVariant"
        ],
        "type": "object"
      },
      "ContactDetails": {
        "properties": {
          "address": {
            "$ref": "#/components/schemas/Address",
            "description": "The address of the account holder."
          },
          "email": {
            "description": "The email address of the account holder.",
            "type": "string"
          },
          "phone": {
            "$ref": "#/components/schemas/Phone",
            "description": "The phone number of the account holder."
          },
          "webAddress": {
            "description": "The URL of the account holder's website.",
            "type": "string"
          }
        },
        "required": [
          "email",
          "phone",
          "address"
        ],
        "type": "object"
      },
      "CountriesRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "List of two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.",
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "CronSweepSchedule": {
        "additionalProperties": false,
        "properties": {
          "cronExpression": {
            "description": "A [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that is used to set the sweep schedule. The schedule uses the time zone of the balance account. For example, **30 17 * * MON** schedules a sweep every Monday at 17:30.\n\nThe expression must have five values separated by a single space in the following order:\n\n* Minute: **0-59**\n\n* Hour: **0-23**\n\n* Day of the month: **1-31**\n\n* Month: **1-12** or **JAN-DEC**\n\n* Day of the week: **0-7** (0 and 7 are Sunday) or **MON-SUN**.\n\nThe following non-standard characters are supported: **&ast;**, **L**, **#**, **W** and **/**. See [crontab guru](https://crontab.guru/) for more examples.",
            "type": "string"
          },
          "type": {
            "description": "The schedule type.\n\nPossible values:\n\n* **cron**: push out funds based on a cron expression.\n\n* **daily**: push out funds daily at 07:00 AM CET.\n\n* **weekly**: push out funds every Monday at 07:00 AM CET.\n\n* **monthly**: push out funds every first of the month at 07:00 AM CET.\n\n* **balance**: pull in funds instantly if the balance is less than or equal to the `triggerAmount`. You can only use this for sweeps of `type` **pull** and when the source is a `merchantAccount` or `transferInstrument`.",
            "enum": [
              "daily",
              "weekly",
              "monthly",
              "balance",
              "cron"
            ],
            "type": "string"
          }
        },
        "required": [
          "cronExpression"
        ],
        "type": "object"
      },
      "DayOfWeekRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "List of days of the week.\n\nPossible values: **monday**, **tuesday**, **wednesday**, **thursday**, **friday**, **saturday**, **sunday**.\n\n",
            "items": {
              "enum": [
                "friday",
                "monday",
                "saturday",
                "sunday",
                "thursday",
                "tuesday",
                "wednesday"
              ],
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "DeliveryContact": {
        "properties": {
          "address": {
            "$ref": "#/components/schemas/Address-2",
            "description": "The address of the contact."
          },
          "email": {
            "description": "The email address of the contact.",
            "type": "string"
          },
          "fullPhoneNumber": {
            "description": "The full phone number of the contact provided as a single string. It will be handled as a landline phone.\n**Examples:** \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\"",
            "type": "string"
          },
          "name": {
            "$ref": "#/components/schemas/Name",
            "description": "The name of the contact."
          },
          "phoneNumber": {
            "$ref": "#/components/schemas/PhoneNumber",
            "description": "The phone number of the contact."
          },
          "webAddress": {
            "description": "The URL of the contact's website.",
            "type": "string"
          }
        },
        "required": [
          "name",
          "address"
        ],
        "type": "object"
      },
      "DifferentCurrenciesRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "Checks the currency of the payment against the currency of the payment instrument.\n\nPossible values:\n\n- **true**: The currency of the payment is different from the currency of the payment instrument.\n\n- **false**: The currencies are the same.\n\n",
            "type": "boolean"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "Duration": {
        "properties": {
          "unit": {
            "description": "The unit of time. You can only use **minutes** and **hours** if the `interval.type` is **sliding**.\n\nPossible values: **minutes**, **hours**, **days**, **weeks**, or **months**",
            "enum": [
              "days",
              "hours",
              "minutes",
              "months",
              "weeks"
            ],
            "type": "string"
          },
          "value": {
            "description": "The length of time by the unit. For example, 5 days.\n\nThe maximum duration is 90 days or an equivalent in other units. For example, 3 months.",
            "format": "int32",
            "type": "integer"
          }
        },
        "type": "object"
      },
      "EntryModesRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "List of point-of-sale entry modes.\n\nPossible values: **barcode**, **chip**, **cof**, **contactless**, **magstripe**, **manual**, **ocr**, **server**.\n\n",
            "items": {
              "enum": [
                "barcode",
                "chip",
                "cof",
                "contactless",
                "magstripe",
                "manual",
                "ocr",
                "server",
                "unknown"
              ],
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "Expiry": {
        "properties": {
          "month": {
            "description": "The month in which the card will expire.",
            "type": "string"
          },
          "year": {
            "description": "The year in which the card will expire.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "Fee": {
        "properties": {
          "amount": {
            "$ref": "#/components/schemas/Amount",
            "description": "An object containing the fee amount."
          }
        },
        "required": [
          "amount"
        ],
        "type": "object"
      },
      "GrantLimit": {
        "properties": {
          "amount": {
            "$ref": "#/components/schemas/Amount",
            "description": "The amount available on the grant account."
          }
        },
        "type": "object"
      },
      "GrantOffer": {
        "properties": {
          "accountHolderId": {
            "description": "The identifier of the account holder to which the grant is offered.",
            "type": "string"
          },
          "amount": {
            "$ref": "#/components/schemas/Amount",
            "description": "The principal amount of the grant."
          },
          "contractType": {
            "description": "The contract type of the grant offer. Possible value: **cashAdvance**, **loan**.",
            "enum": [
              "cashAdvance",
              "loan"
            ],
            "type": "string"
          },
          "expiresAt": {
            "$ref": "#/components/schemas/LocalDateTime",
            "description": "The end date of the grant offer validity period."
          },
          "fee": {
            "$ref": "#/components/schemas/Fee",
            "description": "Details of the fee configuration."
          },
          "id": {
            "description": "The unique identifier of the grant offer.",
            "type": "string"
          },
          "repayment": {
            "$ref": "#/components/schemas/Repayment",
            "description": "Details of the repayment configuration."
          },
          "startsAt": {
            "$ref": "#/components/schemas/LocalDateTime",
            "description": "The starting date of the grant offer validity period."
          }
        },
        "required": [
          "accountHolderId"
        ],
        "type": "object"
      },
      "GrantOffers": {
        "properties": {
          "grantOffers": {
            "description": "A list of available grant offers.",
            "items": {
              "$ref": "#/components/schemas/GrantOffer"
            },
            "type": "array"
          }
        },
        "required": [
          "grantOffers"
        ],
        "type": "object"
      },
      "HULocalAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The 24-digit bank account number, without separators or whitespace.",
            "maxLength": 24,
            "minLength": 24,
            "type": "string"
          },
          "type": {
            "default": "huLocal",
            "description": "**huLocal**",
            "enum": [
              "huLocal"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "accountNumber"
        ],
        "type": "object"
      },
      "IbanAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "iban": {
            "description": "The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.",
            "type": "string"
          },
          "type": {
            "default": "iban",
            "description": "**iban**",
            "enum": [
              "iban"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "iban"
        ],
        "type": "object"
      },
      "InternationalTransactionRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "Boolean indicating whether transaction is an international transaction.\n\nPossible values:\n\n- **true**: The transaction is an international transaction.\n\n- **false**: The transaction is a domestic transaction.\n\n",
            "type": "boolean"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "InvalidField": {
        "properties": {
          "message": {
            "description": "Description of the validation error.",
            "type": "string"
          },
          "name": {
            "description": "The field that has an invalid value.",
            "type": "string"
          },
          "value": {
            "description": "The invalid value.",
            "type": "string"
          }
        },
        "required": [
          "name",
          "value",
          "message"
        ],
        "type": "object"
      },
      "JSONObject": {
        "properties": {
          "paths": {
            "items": {
              "$ref": "#/components/schemas/JSONPath"
            },
            "type": "array"
          },
          "rootPath": {
            "$ref": "#/components/schemas/JSONPath"
          }
        },
        "type": "object"
      },
      "JSONPath": {
        "properties": {
          "content": {
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "LocalDateTime": {
        "type": "object"
      },
      "MatchingTransactionsRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "The number of transactions.",
            "format": "int32",
            "type": "integer"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "MccsRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "List of merchant category codes (MCCs).",
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "MerchantAcquirerPair": {
        "properties": {
          "acquirerId": {
            "description": "The acquirer ID.",
            "type": "string"
          },
          "merchantId": {
            "description": "The merchant identification number (MID).",
            "type": "string"
          }
        },
        "type": "object"
      },
      "MerchantNamesRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "items": {
              "$ref": "#/components/schemas/StringMatch"
            },
            "type": "array"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "MerchantsRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "List of merchant ID and acquirer ID pairs.",
            "items": {
              "$ref": "#/components/schemas/MerchantAcquirerPair"
            },
            "type": "array"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "NOLocalAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The 11-digit bank account number, without separators or whitespace.",
            "maxLength": 11,
            "minLength": 11,
            "type": "string"
          },
          "type": {
            "default": "noLocal",
            "description": "**noLocal**",
            "enum": [
              "noLocal"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "accountNumber"
        ],
        "type": "object"
      },
      "Name": {
        "properties": {
          "firstName": {
            "description": "The first name.",
            "type": "string"
          },
          "lastName": {
            "description": "The last name.",
            "type": "string"
          }
        },
        "required": [
          "firstName",
          "lastName"
        ],
        "type": "object"
      },
      "NumberAndBicAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The bank account number, without separators or whitespace. The length and format depends on the bank or country.",
            "maxLength": 34,
            "type": "string"
          },
          "additionalBankIdentification": {
            "$ref": "#/components/schemas/AdditionalBankIdentification",
            "description": "Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers."
          },
          "bic": {
            "description": "The bank's 8- or 11-character BIC or SWIFT code.",
            "maxLength": 11,
            "minLength": 8,
            "type": "string"
          },
          "type": {
            "default": "numberAndBic",
            "description": "**numberAndBic**",
            "enum": [
              "numberAndBic"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "accountNumber",
          "bic"
        ],
        "type": "object"
      },
      "PLLocalAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.",
            "maxLength": 26,
            "minLength": 26,
            "type": "string"
          },
          "type": {
            "default": "plLocal",
            "description": "**plLocal**",
            "enum": [
              "plLocal"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "accountNumber"
        ],
        "type": "object"
      },
      "PaginatedAccountHoldersResponse": {
        "properties": {
          "accountHolders": {
            "description": "List of account holders.",
            "items": {
              "$ref": "#/components/schemas/AccountHolder"
            },
            "type": "array"
          },
          "hasNext": {
            "description": "Indicates whether there are more items on the next page.",
            "type": "boolean"
          },
          "hasPrevious": {
            "description": "Indicates whether there are more items on the previous page.",
            "type": "boolean"
          }
        },
        "required": [
          "accountHolders",
          "hasPrevious",
          "hasNext"
        ],
        "type": "object"
      },
      "PaginatedBalanceAccountsResponse": {
        "properties": {
          "balanceAccounts": {
            "description": "List of balance accounts.",
            "items": {
              "$ref": "#/components/schemas/BalanceAccountBase"
            },
            "type": "array"
          },
          "hasNext": {
            "description": "Indicates whether there are more items on the next page.",
            "type": "boolean"
          },
          "hasPrevious": {
            "description": "Indicates whether there are more items on the previous page.",
            "type": "boolean"
          }
        },
        "required": [
          "balanceAccounts",
          "hasPrevious",
          "hasNext"
        ],
        "type": "object"
      },
      "PaginatedPaymentInstrumentsResponse": {
        "properties": {
          "hasNext": {
            "description": "Indicates whether there are more items on the next page.",
            "type": "boolean"
          },
          "hasPrevious": {
            "description": "Indicates whether there are more items on the previous page.",
            "type": "boolean"
          },
          "paymentInstruments": {
            "description": "List of payment instruments associated with the balance account.",
            "items": {
              "$ref": "#/components/schemas/PaymentInstrument"
            },
            "type": "array"
          }
        },
        "required": [
          "paymentInstruments",
          "hasPrevious",
          "hasNext"
        ],
        "type": "object"
      },
      "PaymentInstrument": {
        "properties": {
          "balanceAccountId": {
            "description": "The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.",
            "type": "string"
          },
          "bankAccount": {
            "description": "Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.",
            "oneOf": [
              {
                "$ref": "#/components/schemas/IbanAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/USLocalAccountIdentification"
              }
            ]
          },
          "card": {
            "$ref": "#/components/schemas/Card",
            "description": "Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**."
          },
          "description": {
            "description": "Your description for the payment instrument, maximum 300 characters.",
            "maxLength": 300,
            "type": "string"
          },
          "id": {
            "description": "The unique identifier of the payment instrument.",
            "type": "string"
          },
          "issuingCountryCode": {
            "description": "The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.",
            "type": "string"
          },
          "paymentInstrumentGroupId": {
            "description": "The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.",
            "type": "string"
          },
          "reference": {
            "description": "Your reference for the payment instrument, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "status": {
            "description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n",
            "enum": [
              "active",
              "closed",
              "inactive",
              "suspended"
            ],
            "type": "string",
            "x-enum": [
              {
                "description": "The payment instrument is active and can be used to make payments.",
                "value": "active"
              },
              {
                "description": "The payment instrument is inactive and cannot be used to make payments.",
                "value": "inactive"
              },
              {
                "description": "The payment instrument is suspended. Either because it was stolen or lost.",
                "value": "suspended"
              },
              {
                "description": "The payment instrument is permanently closed. This action cannot be undone.",
                "value": "closed"
              }
            ]
          },
          "statusReason": {
            "description": "The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.",
            "enum": [
              "accountClosure",
              "damaged",
              "endOfLife",
              "expired",
              "lost",
              "other",
              "stolen",
              "suspectedFraud"
            ],
            "type": "string",
            "x-addedInVersion": "2"
          },
          "type": {
            "description": "Type of payment instrument.\n\nPossible value: **card**, **bankAccount**. ",
            "enum": [
              "bankAccount",
              "card"
            ],
            "type": "string"
          }
        },
        "required": [
          "balanceAccountId",
          "issuingCountryCode",
          "type",
          "id"
        ],
        "type": "object"
      },
      "PaymentInstrumentGroup": {
        "properties": {
          "balancePlatform": {
            "description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.",
            "type": "string"
          },
          "description": {
            "description": "Your description for the payment instrument group, maximum 300 characters.",
            "maxLength": 300,
            "type": "string"
          },
          "id": {
            "description": "The unique identifier of the payment instrument group.",
            "type": "string"
          },
          "properties": {
            "additionalProperties": {
              "type": "string"
            },
            "description": "Properties of the payment instrument group.",
            "type": "object"
          },
          "reference": {
            "description": "Your reference for the payment instrument group, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "txVariant": {
            "description": "The tx variant of the payment instrument group.",
            "type": "string"
          }
        },
        "required": [
          "balancePlatform",
          "txVariant"
        ],
        "type": "object"
      },
      "PaymentInstrumentGroupInfo": {
        "properties": {
          "balancePlatform": {
            "description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.",
            "type": "string"
          },
          "description": {
            "description": "Your description for the payment instrument group, maximum 300 characters.",
            "maxLength": 300,
            "type": "string"
          },
          "properties": {
            "additionalProperties": {
              "type": "string"
            },
            "description": "Properties of the payment instrument group.",
            "type": "object"
          },
          "reference": {
            "description": "Your reference for the payment instrument group, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "txVariant": {
            "description": "The tx variant of the payment instrument group.",
            "type": "string"
          }
        },
        "required": [
          "balancePlatform",
          "txVariant"
        ],
        "type": "object"
      },
      "PaymentInstrumentInfo": {
        "properties": {
          "balanceAccountId": {
            "description": "The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.",
            "type": "string"
          },
          "card": {
            "$ref": "#/components/schemas/CardInfo",
            "description": "Contains information about the card. Required when you create a payment instrument of `type` **card**."
          },
          "description": {
            "description": "Your description for the payment instrument, maximum 300 characters.",
            "maxLength": 300,
            "type": "string"
          },
          "issuingCountryCode": {
            "description": "The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.",
            "type": "string"
          },
          "paymentInstrumentGroupId": {
            "description": "The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.",
            "type": "string"
          },
          "reference": {
            "description": "Your reference for the payment instrument, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "status": {
            "description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n",
            "enum": [
              "active",
              "closed",
              "inactive",
              "suspended"
            ],
            "type": "string",
            "x-enum": [
              {
                "description": "The payment instrument is active and can be used to make payments.",
                "value": "active"
              },
              {
                "description": "The payment instrument is inactive and cannot be used to make payments.",
                "value": "inactive"
              },
              {
                "description": "The payment instrument is suspended. Either because it was stolen or lost.",
                "value": "suspended"
              },
              {
                "description": "The payment instrument is permanently closed. This action cannot be undone.",
                "value": "closed"
              }
            ]
          },
          "statusReason": {
            "description": "The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.",
            "enum": [
              "accountClosure",
              "damaged",
              "endOfLife",
              "expired",
              "lost",
              "other",
              "stolen",
              "suspectedFraud"
            ],
            "type": "string",
            "x-addedInVersion": "2"
          },
          "type": {
            "description": "Type of payment instrument.\n\nPossible value: **card**, **bankAccount**. ",
            "enum": [
              "bankAccount",
              "card"
            ],
            "type": "string"
          }
        },
        "required": [
          "balanceAccountId",
          "issuingCountryCode",
          "type"
        ],
        "type": "object"
      },
      "PaymentInstrumentRevealInfo": {
        "properties": {
          "cvc": {
            "description": "The CVC2 value of the card.",
            "type": "string"
          },
          "expiration": {
            "$ref": "#/components/schemas/Expiry",
            "description": "The expiration date of the card."
          },
          "pan": {
            "description": "The primary account number (PAN) of the card.",
            "type": "string"
          }
        },
        "required": [
          "pan",
          "expiration",
          "cvc"
        ],
        "type": "object"
      },
      "PaymentInstrumentUpdateRequest": {
        "properties": {
          "balanceAccountId": {
            "description": "The unique identifier of the balance account associated with this payment instrument.\n>You can only change the balance account ID if the payment instrument has **inactive** status.",
            "type": "string"
          },
          "card": {
            "$ref": "#/components/schemas/CardInfo",
            "description": "Object that contains information about the card payment instrument."
          },
          "status": {
            "description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n",
            "enum": [
              "active",
              "closed",
              "inactive",
              "suspended"
            ],
            "type": "string",
            "x-enum": [
              {
                "description": "The payment instrument is active and can be used to make payments.",
                "value": "active"
              },
              {
                "description": "The payment instrument is inactive and cannot be used to make payments.",
                "value": "inactive"
              },
              {
                "description": "The payment instrument is suspended. Either because it was stolen or lost.",
                "value": "suspended"
              },
              {
                "description": "The payment instrument is permanently closed. This action cannot be undone.",
                "value": "closed"
              }
            ]
          },
          "statusComment": {
            "description": "Comment for the status of the payment instrument.\n\nRequired if `statusReason` is **other**.",
            "type": "string"
          },
          "statusReason": {
            "description": "The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.",
            "enum": [
              "accountClosure",
              "damaged",
              "endOfLife",
              "expired",
              "lost",
              "other",
              "stolen",
              "suspectedFraud"
            ],
            "type": "string",
            "x-addedInVersion": "2"
          }
        },
        "type": "object"
      },
      "Phone": {
        "properties": {
          "number": {
            "description": "The full phone number provided as a single string. \nFor example, **\"0031 6 11 22 33 44\"**, **\"+316/1122-3344\"**, \n\n or **\"(0031) 611223344\"**.",
            "type": "string"
          },
          "type": {
            "description": "Type of phone number.\nPossible values: \n**Landline**, **Mobile**.\n",
            "enum": [
              "landline",
              "mobile"
            ],
            "type": "string"
          }
        },
        "required": [
          "number",
          "type"
        ],
        "type": "object"
      },
      "PhoneNumber": {
        "properties": {
          "phoneCountryCode": {
            "description": "The two-character ISO-3166-1 alpha-2 country code of the phone number.\nFor example, **US** or **NL**.",
            "type": "string"
          },
          "phoneNumber": {
            "description": "The phone number.\nThe inclusion of the phone number country code is not necessary.",
            "type": "string"
          },
          "phoneType": {
            "description": "The type of the phone number.\nPossible values: **Landline**, **Mobile**, **SIP**, **Fax**.",
            "enum": [
              "Fax",
              "Landline",
              "Mobile",
              "SIP"
            ],
            "type": "string"
          }
        },
        "type": "object"
      },
      "ProcessingTypesRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "description": "List of processing types.\n\nPossible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **recurring**, **token**.\n\n",
            "items": {
              "enum": [
                "atmWithdraw",
                "balanceInquiry",
                "ecommerce",
                "moto",
                "pos",
                "recurring",
                "token",
                "unknown"
              ],
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "Repayment": {
        "properties": {
          "basisPoints": {
            "description": "The repayment that is deducted daily from incoming net volume, in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).",
            "format": "int32",
            "type": "integer"
          },
          "term": {
            "$ref": "#/components/schemas/RepaymentTerm",
            "description": "An object containing the details of the configuration for repayment term."
          },
          "threshold": {
            "$ref": "#/components/schemas/ThresholdRepayment",
            "description": "An object containing the details of the 30-day repayment threshold."
          }
        },
        "required": [
          "basisPoints"
        ],
        "type": "object"
      },
      "RepaymentTerm": {
        "properties": {
          "estimatedDays": {
            "description": "The estimated term for repaying the grant, in days.",
            "format": "int32",
            "type": "integer"
          },
          "maximumDays": {
            "description": "The maximum term for repaying the grant, in days. Only applies when `contractType` is **loan**.",
            "format": "int32",
            "type": "integer"
          }
        },
        "required": [
          "estimatedDays"
        ],
        "type": "object"
      },
      "RestServiceError": {
        "properties": {
          "detail": {
            "description": "A human-readable explanation specific to this occurrence of the problem.",
            "type": "string"
          },
          "errorCode": {
            "description": "A code that identifies the problem type.",
            "type": "string"
          },
          "instance": {
            "description": "A unique URI that identifies the specific occurrence of the problem.",
            "type": "string"
          },
          "invalidFields": {
            "description": "Detailed explanation of each validation error, when applicable.",
            "items": {
              "$ref": "#/components/schemas/InvalidField"
            },
            "type": "array"
          },
          "requestId": {
            "description": "A unique reference for the request, essentially the same as `pspReference`.",
            "type": "string"
          },
          "response": {
            "$ref": "#/components/schemas/JSONObject",
            "description": "JSON response payload."
          },
          "status": {
            "description": "The HTTP status code.",
            "format": "int32",
            "type": "integer"
          },
          "title": {
            "description": "A short, human-readable summary of the problem type.",
            "type": "string"
          },
          "type": {
            "description": "A URI that identifies the problem type, pointing to human-readable documentation on this problem type.",
            "type": "string"
          }
        },
        "required": [
          "type",
          "errorCode",
          "title",
          "detail",
          "status"
        ],
        "type": "object"
      },
      "SELocalAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.",
            "maxLength": 10,
            "minLength": 7,
            "type": "string"
          },
          "clearingNumber": {
            "description": "The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.",
            "maxLength": 5,
            "minLength": 4,
            "type": "string"
          },
          "type": {
            "default": "seLocal",
            "description": "**seLocal**",
            "enum": [
              "seLocal"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "accountNumber",
          "clearingNumber"
        ],
        "type": "object"
      },
      "SGLocalAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The 4- to 19-digit bank account number, without separators or whitespace.",
            "maxLength": 19,
            "minLength": 4,
            "type": "string"
          },
          "bic": {
            "description": "The bank's 8- or 11-character BIC or SWIFT code.",
            "maxLength": 11,
            "minLength": 8,
            "type": "string"
          },
          "type": {
            "default": "sgLocal",
            "description": "**sgLocal**",
            "enum": [
              "sgLocal"
            ],
            "type": "string"
          }
        },
        "required": [
          "accountNumber",
          "bic"
        ],
        "type": "object"
      },
      "StringMatch": {
        "properties": {
          "operation": {
            "description": "The type of string matching operation. Possible values:  **startsWith**, **endsWith**, **isEqualTo**, **contains**,",
            "enum": [
              "contains",
              "endsWith",
              "isEqualTo",
              "startsWith"
            ],
            "type": "string"
          },
          "value": {
            "description": "The string to be matched.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "SweepConfigurationV2": {
        "properties": {
          "category": {
            "description": "The type of transfer that results from the sweep.\n\nPossible values:\n\n - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\nRequired when setting `priorities`.",
            "enum": [
              "bank",
              "internal",
              "platformPayment"
            ],
            "type": "string",
            "x-addedInVersion": "2"
          },
          "counterparty": {
            "$ref": "#/components/schemas/SweepCounterparty",
            "description": "The destination or the source of the funds, depending on the `type`.\n\nEither a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required."
          },
          "currency": {
            "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.\n\nThe sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).",
            "type": "string"
          },
          "description": {
            "description": "The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.\n\nIf the message is longer after replacing placeholders, the message will be cut off at 140 characters.",
            "type": "string"
          },
          "id": {
            "description": "The unique identifier of the sweep.",
            "readOnly": true,
            "type": "string"
          },
          "priorities": {
            "description": "The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority listed first, and if that's not possible, it moves on to the next option in the order of provided priorities.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.\n\n* **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: High-value transfer to a recipient in a different country.\n\n* **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).\n\nSet `category` to **bank**. For more details, see [optional priorities setup](https://docs.adyen.com/marketplaces-and-platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).",
            "items": {
              "enum": [
                "crossBorder",
                "directDebit",
                "fast",
                "instant",
                "internal",
                "regular",
                "wire"
              ],
              "type": "string"
            },
            "type": "array",
            "x-addedInVersion": "2"
          },
          "reason": {
            "description": "The reason for disabling the sweep.",
            "enum": [
              "amountLimitExceeded",
              "approved",
              "counterpartyAccountBlocked",
              "counterpartyAccountClosed",
              "counterpartyAccountNotFound",
              "counterpartyAddressRequired",
              "counterpartyBankTimedOut",
              "counterpartyBankUnavailable",
              "error",
              "notEnoughBalance",
              "refusedByCounterpartyBank",
              "routeNotFound",
              "unknown"
            ],
            "readOnly": true,
            "type": "string"
          },
          "schedule": {
            "description": "The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.",
            "oneOf": [
              {
                "$ref": "#/components/schemas/CronSweepSchedule"
              },
              {
                "$ref": "#/components/schemas/SweepSchedule"
              }
            ]
          },
          "status": {
            "description": "The status of the sweep. If not provided, by default, this is set to **active**.\n\nPossible values: \n\n * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. \n\n * **inactive**: the sweep is disabled and cannot be triggered. \n\n",
            "enum": [
              "active",
              "inactive"
            ],
            "type": "string",
            "x-enum": [
              {
                "description": "The sweep is enabled and funds will be pulled in or pushed out based on the defined configuration",
                "value": "active"
              },
              {
                "description": "The sweep is disabled and cannot be triggered.",
                "value": "inactive"
              }
            ]
          },
          "sweepAmount": {
            "$ref": "#/components/schemas/Amount",
            "description": "The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both."
          },
          "targetAmount": {
            "$ref": "#/components/schemas/Amount",
            "description": "The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both."
          },
          "triggerAmount": {
            "$ref": "#/components/schemas/Amount",
            "description": "The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.\n\n* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.\n\n* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account."
          },
          "type": {
            "default": "push",
            "description": "The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.\n\nPossible values:\n\n * **push**: _push out funds_ to a destination balance account or transfer instrument.\n\n * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.",
            "enum": [
              "pull",
              "push"
            ],
            "type": "string"
          }
        },
        "required": [
          "id",
          "schedule",
          "currency",
          "counterparty"
        ],
        "type": "object"
      },
      "SweepCounterparty": {
        "properties": {
          "balanceAccountId": {
            "description": "The unique identifier of the destination or source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).\n\n You can only use this for periodic sweep schedules such as `schedule.type` **daily** or **monthly**.",
            "type": "string"
          },
          "merchantAccount": {
            "description": "The merchant account that will be the source of funds, if you are processing payments with Adyen. You can only use this with sweeps of `type` **pull** and `schedule.type` **balance**.",
            "type": "string"
          },
          "transferInstrumentId": {
            "description": "The unique identifier of the destination or source [transfer instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/transferInstruments__resParam_id).\n\nYou can also use this in combination with a `merchantAccount` and a `type` **pull** to start a direct debit request from the source transfer instrument. To use this feature, reach out to your Adyen contact.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "SweepSchedule": {
        "additionalProperties": false,
        "properties": {
          "type": {
            "description": "The schedule type.\n\nPossible values:\n\n* **cron**: push out funds based on a cron expression.\n\n* **daily**: push out funds daily at 07:00 AM CET.\n\n* **weekly**: push out funds every Monday at 07:00 AM CET.\n\n* **monthly**: push out funds every first of the month at 07:00 AM CET.\n\n* **balance**: pull in funds instantly if the balance is less than or equal to the `triggerAmount`. You can only use this for sweeps of `type` **pull** and when the source is a `merchantAccount` or `transferInstrument`.",
            "enum": [
              "daily",
              "weekly",
              "monthly",
              "balance",
              "cron"
            ],
            "type": "string"
          }
        },
        "type": "object"
      },
      "ThresholdRepayment": {
        "properties": {
          "amount": {
            "$ref": "#/components/schemas/Amount",
            "description": "The amount to be repaid on a 30-day basis."
          }
        },
        "required": [
          "amount"
        ],
        "type": "object"
      },
      "TimeOfDay": {
        "properties": {
          "endTime": {
            "description": "The end time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**.\n\n",
            "type": "string"
          },
          "startTime": {
            "description": "The start time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**.\n\n",
            "type": "string"
          }
        },
        "type": "object"
      },
      "TimeOfDayRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "$ref": "#/components/schemas/TimeOfDay"
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "TotalAmountRestriction": {
        "properties": {
          "operation": {
            "description": "Defines how the condition must be evaluated.",
            "type": "string"
          },
          "value": {
            "$ref": "#/components/schemas/Amount",
            "description": "The amount value and currency."
          }
        },
        "required": [
          "operation"
        ],
        "type": "object"
      },
      "TransactionRule": {
        "properties": {
          "aggregationLevel": {
            "description": "The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.\n\nIf not provided, by default, the rule will accumulate data at the **paymentInstrument** level.\n\nPossible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.",
            "type": "string",
            "x-addedInVersion": "2"
          },
          "description": {
            "description": "Your description for the transaction rule, maximum 300 characters.",
            "maxLength": 300,
            "type": "string"
          },
          "endDate": {
            "description": "The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided, the rule will be evaluated until the rule status is set to **inactive**.",
            "type": "string"
          },
          "entityKey": {
            "$ref": "#/components/schemas/TransactionRuleEntityKey",
            "description": "The type and unique identifier of the resource to which the rule applies.",
            "x-addedInVersion": "2"
          },
          "id": {
            "description": "The unique identifier of the transaction rule.",
            "type": "string"
          },
          "interval": {
            "$ref": "#/components/schemas/TransactionRuleInterval",
            "description": "The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply."
          },
          "outcomeType": {
            "description": "The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule. If not provided, by default, this is set to **hardBlock**.\n\nPossible values:\n\n * **hardBlock**: the transaction is declined.\n\n* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined.",
            "enum": [
              "hardBlock",
              "scoreBased"
            ],
            "type": "string",
            "x-addedInVersion": "2"
          },
          "reference": {
            "description": "Your reference for the transaction rule, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "requestType": {
            "description": "Indicates the type of request to which the rule applies.\n\nPossible values: **authorization**, **authentication**, **tokenization**.",
            "enum": [
              "authentication",
              "authorization",
              "tokenization"
            ],
            "type": "string",
            "x-addedInVersion": "2"
          },
          "ruleRestrictions": {
            "$ref": "#/components/schemas/TransactionRuleRestrictions",
            "description": "Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.\n\nFor example, a `countries` object can have a list of country codes **[\"US\", \"CA\"]** in the `value` field and **anyMatch** in the `operation` field.",
            "x-addedInVersion": "2"
          },
          "score": {
            "description": "A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.",
            "format": "int32",
            "type": "integer",
            "x-addedInVersion": "2"
          },
          "startDate": {
            "description": "The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. \n\n",
            "type": "string"
          },
          "status": {
            "description": "The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created \nwith an **active** status. \n\nPossible values: **active**, **inactive**.",
            "enum": [
              "active",
              "inactive"
            ],
            "type": "string"
          },
          "type": {
            "description": "The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.\n\nPossible values:\n * **blockList**: decline a transaction when the conditions are met.\n * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.\n * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.\n",
            "enum": [
              "allowList",
              "blockList",
              "maxUsage",
              "velocity"
            ],
            "type": "string",
            "x-enum": [
              {
                "description": "The rule provides categories (such as country and MCC) where payments must be allowed.",
                "value": "allowList"
              },
              {
                "description": "The rule provides categories (such as country and MCC) where payments must be blocked.",
                "value": "blockList"
              },
              {
                "description": "The rule sets limits for the maximum amount or maximum number of transactions for a given time interval.",
                "value": "velocity"
              },
              {
                "description": "The rule sets limits for the maximum amount or maximum number of transactions for the lifetime of the payment instrument.",
                "value": "maxUsage"
              }
            ]
          }
        },
        "required": [
          "type",
          "description",
          "reference",
          "entityKey",
          "interval",
          "ruleRestrictions"
        ],
        "type": "object"
      },
      "TransactionRuleEntityKey": {
        "properties": {
          "entityReference": {
            "description": "The unique identifier of the resource.",
            "type": "string"
          },
          "entityType": {
            "description": "The type of resource.\n\nPossible values: **balancePlatform**, **paymentInstrumentGroup**, **accountHolder**, **balanceAccount**, or **paymentInstrument**.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "TransactionRuleInfo": {
        "properties": {
          "aggregationLevel": {
            "description": "The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.\n\nIf not provided, by default, the rule will accumulate data at the **paymentInstrument** level.\n\nPossible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.",
            "type": "string",
            "x-addedInVersion": "2"
          },
          "description": {
            "description": "Your description for the transaction rule, maximum 300 characters.",
            "maxLength": 300,
            "type": "string"
          },
          "endDate": {
            "description": "The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided, the rule will be evaluated until the rule status is set to **inactive**.",
            "type": "string"
          },
          "entityKey": {
            "$ref": "#/components/schemas/TransactionRuleEntityKey",
            "description": "The type and unique identifier of the resource to which the rule applies.",
            "x-addedInVersion": "2"
          },
          "interval": {
            "$ref": "#/components/schemas/TransactionRuleInterval",
            "description": "The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply."
          },
          "outcomeType": {
            "description": "The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule. If not provided, by default, this is set to **hardBlock**.\n\nPossible values:\n\n * **hardBlock**: the transaction is declined.\n\n* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined.",
            "enum": [
              "hardBlock",
              "scoreBased"
            ],
            "type": "string",
            "x-addedInVersion": "2"
          },
          "reference": {
            "description": "Your reference for the transaction rule, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "requestType": {
            "description": "Indicates the type of request to which the rule applies.\n\nPossible values: **authorization**, **authentication**, **tokenization**.",
            "enum": [
              "authentication",
              "authorization",
              "tokenization"
            ],
            "type": "string",
            "x-addedInVersion": "2"
          },
          "ruleRestrictions": {
            "$ref": "#/components/schemas/TransactionRuleRestrictions",
            "description": "Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.\n\nFor example, a `countries` object can have a list of country codes **[\"US\", \"CA\"]** in the `value` field and **anyMatch** in the `operation` field.",
            "x-addedInVersion": "2"
          },
          "score": {
            "description": "A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.",
            "format": "int32",
            "type": "integer",
            "x-addedInVersion": "2"
          },
          "startDate": {
            "description": "The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. \n\n",
            "type": "string"
          },
          "status": {
            "description": "The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created \nwith an **active** status. \n\nPossible values: **active**, **inactive**.",
            "enum": [
              "active",
              "inactive"
            ],
            "type": "string"
          },
          "type": {
            "description": "The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.\n\nPossible values:\n * **blockList**: decline a transaction when the conditions are met.\n * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.\n * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.\n",
            "enum": [
              "allowList",
              "blockList",
              "maxUsage",
              "velocity"
            ],
            "type": "string",
            "x-enum": [
              {
                "description": "The rule provides categories (such as country and MCC) where payments must be allowed.",
                "value": "allowList"
              },
              {
                "description": "The rule provides categories (such as country and MCC) where payments must be blocked.",
                "value": "blockList"
              },
              {
                "description": "The rule sets limits for the maximum amount or maximum number of transactions for a given time interval.",
                "value": "velocity"
              },
              {
                "description": "The rule sets limits for the maximum amount or maximum number of transactions for the lifetime of the payment instrument.",
                "value": "maxUsage"
              }
            ]
          }
        },
        "required": [
          "type",
          "description",
          "reference",
          "entityKey",
          "interval",
          "ruleRestrictions"
        ],
        "type": "object"
      },
      "TransactionRuleInterval": {
        "properties": {
          "dayOfMonth": {
            "description": "The day of month, used when the `duration.unit` is **months**. If not provided, by default, this is set to **1**, the first day of the month.",
            "format": "int32",
            "type": "integer",
            "x-addedInVersion": "2"
          },
          "dayOfWeek": {
            "description": "The day of week, used when the `duration.unit` is **weeks**. If not provided, by default, this is set to **monday**.\n\nPossible values: **sunday**, **monday**, **tuesday**, **wednesday**, **thursday**, **friday**.",
            "enum": [
              "friday",
              "monday",
              "saturday",
              "sunday",
              "thursday",
              "tuesday",
              "wednesday"
            ],
            "type": "string",
            "x-addedInVersion": "2"
          },
          "duration": {
            "$ref": "#/components/schemas/Duration",
            "description": "The duration, which you can specify in hours, days, weeks, or months. The maximum duration is 90 days or an equivalent in other units. Required when the `type` is **rolling** or **sliding**.",
            "x-addedInVersion": "2"
          },
          "timeOfDay": {
            "description": "The time of day, in **hh:mm:ss** format, used when the `duration.unit` is **hours**. If not provided, by default, this is set to **00:00:00**.",
            "type": "string",
            "x-addedInVersion": "2"
          },
          "timeZone": {
            "description": "The [time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For example, **Europe/Amsterdam**. By default, this is set to **UTC**.",
            "type": "string",
            "x-addedInVersion": "2"
          },
          "type": {
            "description": "The [type of interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) during which the rule conditions and limits apply, and how often counters are reset.\n\nPossible values:\n  * **perTransaction**: conditions are evaluated and the counters are reset for every transaction.\n * **daily**: the counters are reset daily at 00:00:00 UTC.\n * **weekly**: the counters are reset every Monday at 00:00:00 UTC. \n * **monthly**: the counters reset every first day of the month at 00:00:00 UTC. \n * **lifetime**: conditions are applied to the lifetime of the payment instrument.\n * **rolling**: conditions are applied and the counters are reset based on a `duration`. If the reset date and time are not provided, Adyen applies the default reset time similar to fixed intervals. For example, if the duration is every two weeks, the counter resets every third Monday at 00:00:00 UTC.\n * **sliding**: conditions are applied and the counters are reset based on the current time and a `duration` that you specify.",
            "enum": [
              "daily",
              "lifetime",
              "monthly",
              "perTransaction",
              "rolling",
              "sliding",
              "weekly"
            ],
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "type": "object"
      },
      "TransactionRuleResponse": {
        "properties": {
          "transactionRule": {
            "$ref": "#/components/schemas/TransactionRule",
            "description": "The transaction rule."
          }
        },
        "type": "object"
      },
      "TransactionRuleRestrictions": {
        "properties": {
          "activeNetworkTokens": {
            "$ref": "#/components/schemas/ActiveNetworkTokensRestriction",
            "description": "The total number of tokens that a card can have across different kinds of digital wallets on the user's phones, watches, or other wearables.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**."
          },
          "brandVariants": {
            "$ref": "#/components/schemas/BrandVariantsRestriction",
            "description": "List of card brand variants and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**."
          },
          "countries": {
            "$ref": "#/components/schemas/CountriesRestriction",
            "description": "List of countries and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**."
          },
          "dayOfWeek": {
            "$ref": "#/components/schemas/DayOfWeekRestriction",
            "description": "List of week days and the operation. Supported operations: **anyMatch**, **noneMatch**."
          },
          "differentCurrencies": {
            "$ref": "#/components/schemas/DifferentCurrenciesRestriction",
            "description": "Compares the currency of the payment against the currency of the payment instrument, and specifies the operation.\n\nSupported operations: **equals**, **notEquals**."
          },
          "entryModes": {
            "$ref": "#/components/schemas/EntryModesRestriction",
            "description": "List of point-of-sale entry modes and the operation..\n\nSupported operations: **anyMatch**, **noneMatch**."
          },
          "internationalTransaction": {
            "$ref": "#/components/schemas/InternationalTransactionRestriction",
            "description": "Indicates whether transaction is an international transaction and specifies the operation.\n\nSupported operations: **equals**, **notEquals**."
          },
          "matchingTransactions": {
            "$ref": "#/components/schemas/MatchingTransactionsRestriction",
            "description": "The number of transactions and the operation.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**."
          },
          "mccs": {
            "$ref": "#/components/schemas/MccsRestriction",
            "description": "List of merchant category codes (MCCs) and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**."
          },
          "merchantNames": {
            "$ref": "#/components/schemas/MerchantNamesRestriction",
            "description": "List of names that will be compared to the merchant name according to the matching type.\n\nSupported operations: **anyMatch**, **noneMatch**."
          },
          "merchants": {
            "$ref": "#/components/schemas/MerchantsRestriction",
            "description": "List of merchant ID and acquirer ID pairs, and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**."
          },
          "processingTypes": {
            "$ref": "#/components/schemas/ProcessingTypesRestriction",
            "description": "List of processing types and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**."
          },
          "timeOfDay": {
            "$ref": "#/components/schemas/TimeOfDayRestriction",
            "description": "A start and end time in a time-only ISO-8601 extended offset format. Supported operations: **equals**, **notEquals**."
          },
          "totalAmount": {
            "$ref": "#/components/schemas/TotalAmountRestriction",
            "description": "The total amount and the operation.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**."
          }
        },
        "type": "object"
      },
      "TransactionRulesResponse": {
        "properties": {
          "transactionRules": {
            "description": "List of transaction rules.",
            "items": {
              "$ref": "#/components/schemas/TransactionRule"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "UKLocalAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The 8-digit bank account number, without separators or whitespace.",
            "maxLength": 8,
            "minLength": 8,
            "type": "string"
          },
          "sortCode": {
            "description": "The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.",
            "maxLength": 6,
            "minLength": 6,
            "type": "string"
          },
          "type": {
            "default": "ukLocal",
            "description": "**ukLocal**",
            "enum": [
              "ukLocal"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "accountNumber",
          "sortCode"
        ],
        "type": "object"
      },
      "USLocalAccountIdentification": {
        "additionalProperties": false,
        "properties": {
          "accountNumber": {
            "description": "The bank account number, without separators or whitespace.",
            "maxLength": 18,
            "minLength": 2,
            "type": "string"
          },
          "accountType": {
            "default": "checking",
            "description": "The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.",
            "enum": [
              "checking",
              "savings"
            ],
            "type": "string"
          },
          "routingNumber": {
            "description": "The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.",
            "maxLength": 9,
            "minLength": 9,
            "type": "string"
          },
          "type": {
            "default": "usLocal",
            "description": "**usLocal**",
            "enum": [
              "usLocal"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "accountNumber",
          "routingNumber"
        ],
        "type": "object"
      },
      "UpdatePaymentInstrument": {
        "properties": {
          "balanceAccountId": {
            "description": "The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.",
            "type": "string"
          },
          "bankAccount": {
            "description": "Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.",
            "oneOf": [
              {
                "$ref": "#/components/schemas/IbanAccountIdentification"
              },
              {
                "$ref": "#/components/schemas/USLocalAccountIdentification"
              }
            ]
          },
          "card": {
            "$ref": "#/components/schemas/Card",
            "description": "Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**."
          },
          "description": {
            "description": "Your description for the payment instrument, maximum 300 characters.",
            "maxLength": 300,
            "type": "string"
          },
          "id": {
            "description": "The unique identifier of the payment instrument.",
            "type": "string"
          },
          "issuingCountryCode": {
            "description": "The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.",
            "type": "string"
          },
          "paymentInstrumentGroupId": {
            "description": "The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.",
            "type": "string"
          },
          "reference": {
            "description": "Your reference for the payment instrument, maximum 150 characters.",
            "maxLength": 150,
            "type": "string"
          },
          "status": {
            "description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n",
            "enum": [
              "active",
              "closed",
              "inactive",
              "suspended"
            ],
            "type": "string",
            "x-enum": [
              {
                "description": "The payment instrument is active and can be used to make payments.",
                "value": "active"
              },
              {
                "description": "The payment instrument is inactive and cannot be used to make payments.",
                "value": "inactive"
              },
              {
                "description": "The payment instrument is suspended. Either because it was stolen or lost.",
                "value": "suspended"
              },
              {
                "description": "The payment instrument is permanently closed. This action cannot be undone.",
                "value": "closed"
              }
            ]
          },
          "statusComment": {
            "description": "Comment for the status of the payment instrument.\n\nRequired if `statusReason` is **other**.",
            "type": "string"
          },
          "statusReason": {
            "description": "The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.",
            "enum": [
              "accountClosure",
              "damaged",
              "endOfLife",
              "expired",
              "lost",
              "other",
              "stolen",
              "suspectedFraud"
            ],
            "type": "string",
            "x-addedInVersion": "2"
          },
          "type": {
            "description": "Type of payment instrument.\n\nPossible value: **card**, **bankAccount**. ",
            "enum": [
              "bankAccount",
              "card"
            ],
            "type": "string"
          }
        },
        "required": [
          "balanceAccountId",
          "issuingCountryCode",
          "type",
          "id"
        ],
        "type": "object"
      },
      "VerificationDeadline": {
        "properties": {
          "capabilities": {
            "description": "The names of the capabilities to be disallowed.",
            "items": {
              "enum": [
                "acceptExternalFunding",
                "acceptPspFunding",
                "acceptTransactionInRestrictedCountries",
                "acceptTransactionInRestrictedCountriesCommercial",
                "acceptTransactionInRestrictedCountriesConsumer",
                "acceptTransactionInRestrictedIndustries",
                "acceptTransactionInRestrictedIndustriesCommercial",
                "acceptTransactionInRestrictedIndustriesConsumer",
                "acquiring",
                "atmWithdrawal",
                "atmWithdrawalCommercial",
                "atmWithdrawalConsumer",
                "atmWithdrawalInRestrictedCountries",
                "atmWithdrawalInRestrictedCountriesCommercial",
                "atmWithdrawalInRestrictedCountriesConsumer",
                "authorisedPaymentInstrumentUser",
                "getGrantOffers",
                "issueBankAccount",
                "issueCard",
                "issueCardCommercial",
                "issueCardConsumer",
                "localAcceptance",
                "payout",
                "payoutToTransferInstrument",
                "processing",
                "receiveFromBalanceAccount",
                "receiveFromPlatformPayments",
                "receiveFromThirdParty",
                "receiveFromTransferInstrument",
                "receiveGrants",
                "receivePayments",
                "sendToBalanceAccount",
                "sendToThirdParty",
                "sendToTransferInstrument",
                "thirdPartyFunding",
                "useCard",
                "useCardCommercial",
                "useCardConsumer",
                "useCardInRestrictedCountries",
                "useCardInRestrictedCountriesCommercial",
                "useCardInRestrictedCountriesConsumer",
                "useCardInRestrictedIndustries",
                "useCardInRestrictedIndustriesCommercial",
                "useCardInRestrictedIndustriesConsumer",
                "withdrawFromAtm",
                "withdrawFromAtmCommercial",
                "withdrawFromAtmConsumer",
                "withdrawFromAtmInRestrictedCountries",
                "withdrawFromAtmInRestrictedCountriesCommercial",
                "withdrawFromAtmInRestrictedCountriesConsumer"
              ],
              "type": "string"
            },
            "readOnly": true,
            "type": "array"
          },
          "expiresAt": {
            "description": "The date that verification is due by before capabilities are disallowed.",
            "format": "date-time",
            "readOnly": true,
            "type": "string"
          }
        },
        "required": [
          "expiresAt",
          "capabilities"
        ],
        "type": "object"
      },
      "Void": {
        "type": "object"
      },
      "void": {
        "type": "object"
      }
    },
    "securitySchemes": {
      "ApiKeyAuth": {
        "in": "header",
        "name": "X-API-Key",
        "type": "apiKey"
      },
      "BasicAuth": {
        "scheme": "basic",
        "type": "http"
      }
    }
  },
  "x-groups": [
    "Platform",
    "Account holders",
    "Balance accounts",
    "Payment instruments",
    "Payment instrument groups",
    "Transaction rules",
    "Bank account validation",
    "Grant accounts",
    "Grant offers"
  ]
}

export const schema7 = {
    "openapi": "3.1.0",
    "servers": [
      {
        "url": "https://pal-test.adyen.com/pal/servlet/BinLookup/v54"
      }
    ],
    "info": {
      "contact": {
        "email": "developer-experience@adyen.com",
        "name": "Adyen Developer Experience team",
        "url": "https://www.adyen.help/hc/en-us/community/topics",
        "x-twitter": "Adyen"
      },
      "description": "The BIN Lookup API provides endpoints for retrieving information, such as cost estimates, and 3D Secure supported version based on a given BIN.\n\n## Authentication\nYou need an [API credential](https://docs.adyen.com/development-resources/api-credentials) to authenticate to the API.\n\nIf using an API key, add an `X-API-Key` header with the API key as the value, for example:\n\n ```\ncurl\n-H \"Content-Type: application/json\" \\\n-H \"X-API-Key: YOUR_API_KEY\" \\\n...\n```\n\nAlternatively, you can use the username and password to connect to the API using basic authentication, for example:\n\n```\ncurl\n-U \"ws@Company.YOUR_COMPANY_ACCOUNT\":\"YOUR_BASIC_AUTHENTICATION_PASSWORD\" \\\n-H \"Content-Type: application/json\" \\\n...\n```\n\n## Versioning\nThe BinLookup API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.\n\nFor example:\n```\nhttps://pal-test.adyen.com/pal/servlet/BinLookup/v54/get3dsAvailability\n```## Going live\n\nTo authneticate to the live endpoints, you need an [API credential](https://docs.adyen.com/development-resources/api-credentials) from your live Customer Area.\n\nThe live endpoint URLs contain a prefix which is unique to your company account:\n```\n\nhttps://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/BinLookup/v54/get3dsAvailability\n```\n\nGet your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** > **Prefix**.",
      "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
      "title": "Adyen BinLookup API",
      "version": "54",
      "x-apisguru-categories": [
        "payment"
      ],
      "x-logo": {
        "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
      },
      "x-origin": [
        {
          "format": "openapi",
          "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BinLookupService-v54.json",
          "version": "3.1"
        }
      ],
      "x-preferred": true,
      "x-providerName": "adyen.com",
      "x-publicVersion": true,
      "x-serviceName": "BinLookupService",
      "x-timestamp": "2023-04-11T19:23:59Z"
    },
    "tags": [
      {
        "name": "General"
      }
    ],
    "paths": {
      "/get3dsAvailability": {
        "post": {
          "description": "Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.\n\nFor more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).",
          "operationId": "post-get3dsAvailability",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "get3dsAvailability": {
                    "$ref": "#/components/examples/post-get3dsAvailability-get3dsAvailability"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/ThreeDSAvailabilityRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "get3dsAvailability": {
                      "$ref": "#/components/examples/post-get3dsAvailability-get3dsAvailability-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/ThreeDSAvailabilityResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "400": {
              "content": {
                "application/json": {
                  "examples": {
                    "generic": {
                      "$ref": "#/components/examples/generic-400"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Check if 3D Secure is available",
          "tags": [
            "General"
          ],
          "x-addedInVersion": "1",
          "x-groupName": "General",
          "x-methodName": "get3dsAvailability",
          "x-sortIndex": 0
        }
      },
      "/getCostEstimate": {
        "post": {
          "description": ">This API is available only for merchants operating in Australia, the EU, and the UK.\n\nUse the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.\n\nTo retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).\n\n> Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.",
          "operationId": "post-getCostEstimate",
          "requestBody": {
            "content": {
              "application/json": {
                "examples": {
                  "getCostEstimate": {
                    "$ref": "#/components/examples/post-getCostEstimate-getCostEstimate"
                  },
                  "getCostEstimateEncryptedCard": {
                    "$ref": "#/components/examples/post-getCostEstimate-getCostEstimateEncryptedCard"
                  },
                  "getCostEstimateMinimal": {
                    "$ref": "#/components/examples/post-getCostEstimate-getCostEstimateMinimal"
                  },
                  "getCostEstimateMinimal3DS": {
                    "$ref": "#/components/examples/post-getCostEstimate-getCostEstimateMinimal3DS"
                  },
                  "getCostEstimateRecurringContract": {
                    "$ref": "#/components/examples/post-getCostEstimate-getCostEstimateRecurringContract"
                  }
                },
                "schema": {
                  "$ref": "#/components/schemas/CostEstimateRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "examples": {
                    "getCostEstimate": {
                      "$ref": "#/components/examples/post-getCostEstimate-getCostEstimate-200"
                    },
                    "getCostEstimateEncryptedCard": {
                      "$ref": "#/components/examples/post-getCostEstimate-getCostEstimateEncryptedCard-200"
                    },
                    "getCostEstimateMinimal": {
                      "$ref": "#/components/examples/post-getCostEstimate-getCostEstimateMinimal-200"
                    },
                    "getCostEstimateMinimal3DS": {
                      "$ref": "#/components/examples/post-getCostEstimate-getCostEstimateMinimal3DS-200"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/CostEstimateResponse"
                  }
                }
              },
              "description": "OK - the request has succeeded."
            },
            "400": {
              "content": {
                "application/json": {
                  "examples": {
                    "generic": {
                      "$ref": "#/components/examples/generic-400"
                    }
                  },
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Bad Request - a problem reading or understanding the request."
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unauthorized - authentication required."
            },
            "403": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Forbidden - insufficient permissions to process the request."
            },
            "422": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Unprocessable Entity - a request validation error."
            },
            "500": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ServiceError"
                  }
                }
              },
              "description": "Internal Server Error - the server could not process the request."
            }
          },
          "security": [
            {
              "BasicAuth": []
            },
            {
              "ApiKeyAuth": []
            }
          ],
          "summary": "Get a fees cost estimate",
          "tags": [
            "General"
          ],
          "x-groupName": "General",
          "x-methodName": "getCostEstimate",
          "x-sortIndex": 0
        }
      }
    },
    "components": {
      "examples": {
        "generic-400": {
          "summary": "Response code 400. Bad Request.",
          "value": {
            "errorCode": "702",
            "errorType": "validation",
            "message": "Unexpected input: I",
            "status": 400
          }
        },
        "post-get3dsAvailability-get3dsAvailability": {
          "description": "Example request to check 3D Secure availability",
          "summary": "Get 3D Secure availability",
          "value": {
            "cardNumber": "4111111111111111",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          }
        },
        "post-get3dsAvailability-get3dsAvailability-200": {
          "summary": "Example response for request 'get3dsAvailability'",
          "value": {
            "threeDS1Supported": true,
            "threeDS2CardRangeDetails": [],
            "threeDS2supported": false
          }
        },
        "post-getCostEstimate-getCostEstimate": {
          "description": "Example request to get the estimated cost of a transaction",
          "summary": "Estimate the transaction cost",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 1234
            },
            "assumptions": {
              "assume3DSecureAuthenticated": true,
              "assumeLevel3Data": true
            },
            "cardNumber": "5101180000000007",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "merchantDetails": {
              "countryCode": "NL",
              "enrolledIn3DSecure": true,
              "mcc": "7411"
            },
            "shopperInteraction": "Ecommerce"
          }
        },
        "post-getCostEstimate-getCostEstimate-200": {
          "summary": "Example response for request 'getCostEstimate'",
          "value": {
            "costEstimateAmount": {
              "currency": "EUR",
              "value": 12
            },
            "resultCode": "Success",
            "surchargeType": "PASSTHROUGH"
          }
        },
        "post-getCostEstimate-getCostEstimateEncryptedCard": {
          "description": "Example request to get the estimated cost of a transaction",
          "summary": "Estimate the transaction cost using an encrypted card number",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 1234
            },
            "assumptions": {
              "assume3DSecureAuthenticated": true,
              "assumeLevel3Data": true
            },
            "encryptedCardNumber": "test_5101180000000007",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "merchantDetails": {
              "countryCode": "NL",
              "enrolledIn3DSecure": true,
              "mcc": "7411"
            },
            "shopperInteraction": "Ecommerce"
          }
        },
        "post-getCostEstimate-getCostEstimateEncryptedCard-200": {
          "summary": "Example response for request 'getCostEstimateEncryptedCard'",
          "value": {
            "costEstimateAmount": {
              "currency": "EUR",
              "value": 12
            },
            "resultCode": "Success",
            "surchargeType": "PASSTHROUGH"
          }
        },
        "post-getCostEstimate-getCostEstimateMinimal": {
          "description": "Example request to get the estimated cost of a transaction with minimum details",
          "summary": "Estimate the transaction cost (minimal)",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 1234
            },
            "cardNumber": "5101180000000007",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          }
        },
        "post-getCostEstimate-getCostEstimateMinimal-200": {
          "summary": "Example response for request 'getCostEstimateMinimal'",
          "value": {
            "costEstimateAmount": {
              "currency": "EUR",
              "value": 12
            },
            "resultCode": "Success",
            "surchargeType": "PASSTHROUGH"
          }
        },
        "post-getCostEstimate-getCostEstimateMinimal3DS": {
          "description": "Example request to get the estimated cost of a 3D Secure transaction with minimum details",
          "summary": "Estimate the transaction cost (minimal with 3DSecure)",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 1234
            },
            "assumptions": {
              "assume3DSecureAuthenticated": true,
              "assumeLevel3Data": true
            },
            "cardNumber": "5101180000000007",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          }
        },
        "post-getCostEstimate-getCostEstimateMinimal3DS-200": {
          "summary": "Example response for request 'getCostEstimateMinimal3DS'",
          "value": {
            "costEstimateAmount": {
              "currency": "EUR",
              "value": 12
            },
            "resultCode": "Success",
            "surchargeType": "PASSTHROUGH"
          }
        },
        "post-getCostEstimate-getCostEstimateRecurringContract": {
          "description": "Example request to get the estimated cost of a recurring transaction",
          "summary": "Estimate the transaction cost (recurring contract)",
          "value": {
            "amount": {
              "currency": "EUR",
              "value": 1234
            },
            "assumptions": {
              "assume3DSecureAuthenticated": true,
              "assumeLevel3Data": true
            },
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "merchantDetails": {
              "countryCode": "NL",
              "enrolledIn3DSecure": true,
              "mcc": "7411"
            },
            "selectedRecurringDetailReference": "1234567890123456",
            "shopperInteraction": "Ecommerce",
            "shopperReference": "123456"
          }
        }
      },
      "schemas": {
        "Amount": {
          "properties": {
            "currency": {
              "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).",
              "maxLength": 3,
              "minLength": 3,
              "type": "string"
            },
            "value": {
              "description": "The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
              "format": "int64",
              "type": "integer"
            }
          },
          "required": [
            "value",
            "currency"
          ],
          "type": "object"
        },
        "BinDetail": {
          "properties": {
            "issuerCountry": {
              "description": "The country where the card was issued.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "CardBin": {
          "properties": {
            "bin": {
              "description": "The first 6 digit of the card number. Enable this field via merchant account settings.",
              "type": "string"
            },
            "commercial": {
              "description": "If true, it indicates a commercial card. Enable this field via merchant account settings.",
              "type": "boolean"
            },
            "fundingSource": {
              "description": "The card funding source. Valid values are:\n* CHARGE\n* CREDIT\n* DEBIT\n* DEFERRED_DEBIT\n* PREPAID\n* PREPAID_RELOADABLE\n* PREPAID_NONRELOADABLE\n> Enable this field via merchant account settings.",
              "type": "string"
            },
            "fundsAvailability": {
              "description": "Indicates availability of funds.\n\nVisa:\n* \"I\" (fast funds are supported)\n* \"N\" (otherwise)\n\nMastercard:\n* \"I\" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)\n* \"N\" (otherwise)\n> Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from \"N\" or \"U\".",
              "type": "string"
            },
            "issuerBin": {
              "description": "The first 8 digit of the card number. Enable this field via merchant account settings.",
              "type": "string",
              "x-addedInVersion": "54"
            },
            "issuingBank": {
              "description": "The issuing bank of the card.",
              "type": "string"
            },
            "issuingCountry": {
              "description": "The country where the card was issued from.",
              "type": "string"
            },
            "issuingCurrency": {
              "description": "The currency of the card.",
              "type": "string"
            },
            "paymentMethod": {
              "description": "The payment method associated with the card (e.g. visa, mc, or amex).",
              "type": "string"
            },
            "payoutEligible": {
              "description": "Indicates whether a payout is eligible or not for this card.\n\nVisa:\n* \"Y\"\n* \"N\"\n\nMastercard:\n* \"Y\" (domestic and cross-border)\n* \"D\" (only domestic)\n* \"N\" (no MoneySend)\n* \"U\" (unknown)\n> Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from \"N\" or \"U\".",
              "type": "string"
            },
            "summary": {
              "description": "The last four digits of the card number.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "CostEstimateAssumptions": {
          "properties": {
            "assume3DSecureAuthenticated": {
              "description": "If true, the cardholder is expected to successfully authorise via 3D Secure.",
              "type": "boolean"
            },
            "assumeLevel3Data": {
              "description": "If true, the transaction is expected to have valid Level 3 data.",
              "type": "boolean"
            },
            "installments": {
              "description": "If not zero, the number of installments.",
              "format": "int32",
              "type": "integer"
            }
          },
          "type": "object"
        },
        "CostEstimateRequest": {
          "properties": {
            "amount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The transaction amount used as a base for the cost estimation."
            },
            "assumptions": {
              "$ref": "#/components/schemas/CostEstimateAssumptions",
              "description": "Assumptions made for the expected characteristics of the transaction, for which the charges are being estimated."
            },
            "cardNumber": {
              "description": "The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.\n\n> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.",
              "maxLength": 19,
              "minLength": 4,
              "type": "string"
            },
            "encryptedCardNumber": {
              "description": "Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data must be created with the Checkout Card Component or Secured Fields Component, and must contain the `encryptedCardNumber` field.\n\n> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.",
              "type": "string"
            },
            "merchantAccount": {
              "description": "The merchant account identifier you want to process the (transaction) request with.",
              "type": "string"
            },
            "merchantDetails": {
              "$ref": "#/components/schemas/MerchantDetails",
              "description": "Additional data for merchants who don't use Adyen as the payment authorisation gateway."
            },
            "recurring": {
              "$ref": "#/components/schemas/Recurring",
              "description": "The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/online-payments/tokenization)."
            },
            "selectedRecurringDetailReference": {
              "description": "The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can be used to select the most recently stored recurring detail.",
              "type": "string"
            },
            "shopperInteraction": {
              "description": "Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.\nFor the web service API, Adyen assumes Ecommerce shopper interaction by default.\n\nThis field has the following possible values:\n* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.\n* `ContAuth` - Card on file and/or subscription transactions, where the card holder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).\n* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.\n* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.",
              "enum": [
                "Ecommerce",
                "ContAuth",
                "Moto",
                "POS"
              ],
              "type": "string"
            },
            "shopperReference": {
              "description": "Required for recurring payments. \nYour reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.\n> Your reference must not include personally identifiable information (PII), for example name or email address.",
              "type": "string"
            }
          },
          "required": [
            "amount",
            "merchantAccount"
          ],
          "type": "object"
        },
        "CostEstimateResponse": {
          "properties": {
            "cardBin": {
              "$ref": "#/components/schemas/CardBin",
              "description": "Card BIN details."
            },
            "costEstimateAmount": {
              "$ref": "#/components/schemas/Amount",
              "description": "The estimated cost (scheme fee + interchange) in the settlement currency. If the settlement currency cannot be determined, the fee in EUR is returned."
            },
            "costEstimateReference": {
              "description": "Adyen's 16-character reference associated with the request.",
              "type": "string",
              "x-addedInVersion": "52"
            },
            "resultCode": {
              "description": "The result of the cost estimation.",
              "type": "string"
            },
            "surchargeType": {
              "description": "Indicates the way the charges can be passed on to the cardholder. The following values are possible:\n* `ZERO` - the charges are not allowed to pass on\n* `PASSTHROUGH` - the charges can be passed on\n* `UNLIMITED` - there is no limit on how much surcharge is passed on",
              "type": "string"
            }
          },
          "type": "object"
        },
        "DSPublicKeyDetail": {
          "properties": {
            "brand": {
              "description": "Card brand.",
              "type": "string"
            },
            "directoryServerId": {
              "description": "Directory Server (DS) identifier.",
              "type": "string"
            },
            "fromSDKVersion": {
              "description": "The version of the mobile 3D Secure 2 SDK. For the possible values, refer to the versions in [Adyen 3DS2 Android](https://github.com/Adyen/adyen-3ds2-android/releases) and [Adyen 3DS2 iOS](https://github.com/Adyen/adyen-3ds2-ios/releases).",
              "type": "string"
            },
            "publicKey": {
              "contentEncoding": "base64",
              "description": "Public key. The 3D Secure 2 SDK encrypts the device information by using the DS public key.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "MerchantDetails": {
          "properties": {
            "countryCode": {
              "description": "2-letter ISO 3166 country code of the card acceptor location.\n> This parameter is required for the merchants who don't use Adyen as the payment authorisation gateway.",
              "maxLength": 2,
              "minLength": 2,
              "type": "string"
            },
            "enrolledIn3DSecure": {
              "description": "If true, indicates that the merchant is enrolled in 3D Secure for the card network.",
              "type": "boolean"
            },
            "mcc": {
              "description": "The merchant category code (MCC) is a four-digit number which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.\n\nThe list of MCCs can be found [here](https://en.wikipedia.org/wiki/Merchant_category_code).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "Recurring": {
          "properties": {
            "contract": {
              "description": "The type of recurring contract to be used.\nPossible values:\n* `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).\n* `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).\n* `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.\n* `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/online-payments/online-payouts).",
              "enum": [
                "ONECLICK",
                "RECURRING",
                "PAYOUT"
              ],
              "type": "string"
            },
            "recurringDetailName": {
              "description": "A descriptive name for this detail.",
              "type": "string"
            },
            "recurringExpiry": {
              "description": "Date after which no further authorisations shall be performed. Only for 3D Secure 2.",
              "format": "date-time",
              "type": "string",
              "x-addedInVersion": "40"
            },
            "recurringFrequency": {
              "description": "Minimum number of days between authorisations. Only for 3D Secure 2.",
              "type": "string",
              "x-addedInVersion": "40"
            },
            "tokenService": {
              "description": "The name of the token service.",
              "enum": [
                "VISATOKENSERVICE",
                "MCTOKENSERVICE"
              ],
              "type": "string",
              "x-addedInVersion": "25"
            }
          },
          "type": "object"
        },
        "ServiceError": {
          "properties": {
            "additionalData": {
              "additionalProperties": {
                "type": "string"
              },
              "description": "Contains additional information about the payment. Some data fields are included only if you select them first. Go to **Customer Area** > **Developers** > **Additional data**.",
              "type": "object",
              "x-addedInVersion": "46"
            },
            "errorCode": {
              "description": "The error code mapped to the error message.",
              "type": "string"
            },
            "errorType": {
              "description": "The category of the error.",
              "type": "string"
            },
            "message": {
              "description": "A short explanation of the issue.",
              "type": "string"
            },
            "pspReference": {
              "description": "The PSP reference of the payment.",
              "type": "string"
            },
            "status": {
              "description": "The HTTP response status.",
              "format": "int32",
              "type": "integer"
            }
          },
          "type": "object"
        },
        "ThreeDS2CardRangeDetail": {
          "properties": {
            "acsInfoInd": {
              "description": "Provides additional information to the 3DS Server.\nPossible values:\n- 01 (Authentication is available at ACS)\n- 02 (Attempts supported by ACS or DS)\n- 03 (Decoupled authentication supported)\n- 04 (Whitelisting supported)",
              "items": {
                "type": "string"
              },
              "type": "array",
              "x-addedInVersion": "51"
            },
            "brandCode": {
              "description": "Card brand.",
              "type": "string"
            },
            "endRange": {
              "description": "BIN end range.",
              "type": "string"
            },
            "startRange": {
              "description": "BIN start range.",
              "type": "string"
            },
            "threeDS2Versions": {
              "description": "Supported 3D Secure protocol versions",
              "items": {
                "type": "string"
              },
              "type": "array",
              "x-addedInVersion": "53"
            },
            "threeDSMethodURL": {
              "description": "In a 3D Secure 2 browser-based flow, this is the URL where you should send the device fingerprint to.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "ThreeDSAvailabilityRequest": {
          "properties": {
            "additionalData": {
              "additionalProperties": {
                "type": "string"
              },
              "description": "This field contains additional data, which may be required for a particular request.\n\nThe `additionalData` object consists of entries, each of which includes the key and value.",
              "type": "object"
            },
            "brands": {
              "description": "List of brands.",
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            "cardNumber": {
              "description": "Card number or BIN.",
              "type": "string"
            },
            "merchantAccount": {
              "description": "The merchant account identifier.",
              "type": "string"
            },
            "recurringDetailReference": {
              "description": "A recurring detail reference corresponding to a card.",
              "type": "string"
            },
            "shopperReference": {
              "description": "The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).",
              "type": "string"
            }
          },
          "required": [
            "merchantAccount"
          ],
          "type": "object"
        },
        "ThreeDSAvailabilityResponse": {
          "properties": {
            "binDetails": {
              "$ref": "#/components/schemas/BinDetail",
              "description": "Bin Group Details",
              "x-addedInVersion": "50"
            },
            "dsPublicKeys": {
              "description": "List of Directory Server (DS) public keys.",
              "items": {
                "$ref": "#/components/schemas/DSPublicKeyDetail"
              },
              "type": "array"
            },
            "threeDS1Supported": {
              "description": "Indicator if 3D Secure 1 is supported.",
              "type": "boolean"
            },
            "threeDS2CardRangeDetails": {
              "description": "List of brand and card range pairs.",
              "items": {
                "$ref": "#/components/schemas/ThreeDS2CardRangeDetail"
              },
              "type": "array"
            },
            "threeDS2supported": {
              "description": "Indicator if 3D Secure 2 is supported.",
              "type": "boolean"
            }
          },
          "type": "object"
        }
      },
      "securitySchemes": {
        "ApiKeyAuth": {
          "in": "header",
          "name": "X-API-Key",
          "type": "apiKey"
        },
        "BasicAuth": {
          "scheme": "basic",
          "type": "http"
        }
      }
    },
    "x-groups": [
      "General"
    ]
}