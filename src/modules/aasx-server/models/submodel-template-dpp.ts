export enum SubmodelTemplateDpp {
  submodel_battery_pass = `{
  "idShort": "DigitalProductPassport",
  "description": [
    {
      "language": "en",
      "text": "The Digital Product Passport (DPP)."
    }
  ],
  "administration": {},
  "id": "www.nri.com/DigitalProductPassport/submodel/001",
  "kind": "Instance",
  "semanticId": {
    "type": "ExternalReference",
    "keys": [
      {
        "type": "GlobalReference",
        "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#DigitalProductPassport"
      }
    ]
  },
  "supplementalSemanticIds": [
    {
      "type": "ExternalReference",
      "keys": [
        {
          "type": "GlobalReference",
          "value": "https://environment.ec.europa.eu/publications/proposal-ecodesign-sustainable-products-regulation_en"
        }
      ]
    },
    {
      "type": "ExternalReference",
      "keys": [
        {
          "type": "GlobalReference",
          "value": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1542qid=1693215264963"
        }
      ]
    }
  ],
  "submodelElements": [
    {
      "idShort": "metadata",
      "displayName": [
        {
          "language": "en",
          "text": "Metadata"
        }
      ],
      "description": [
        {
          "language": "en",
          "text": "Metadata of the product passport. These are mentioned in the ESPR proposal from March 30th, 2022 and some changed by the provisional agreement from January 9th, 2024."
        }
      ],
      "value": [
        {
          "idShort": "version",
          "displayName": [
            {
              "language": "en",
              "text": "Version"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#version"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "1.0.0",
          "modelType": "Property"
        },
        {
          "idShort": "specVersion",
          "displayName": [
            {
              "language": "en",
              "text": "Digital Product Passport Specification Version"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#specVersion"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "urn:io.catenax.generic.digital_product_passport:6.1.0",
          "modelType": "Property"
        },
        {
          "idShort": "status",
          "displayName": [
            {
              "language": "en",
              "text": "Status"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#status"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "draft",
          "modelType": "Property"
        },
        {
          "idShort": "expirationDate",
          "displayName": [
            {
              "language": "en",
              "text": "Expiration Date"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#expirationDate"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "2030-01-01",
          "modelType": "Property"
        },
        {
          "idShort": "issueDate",
          "displayName": [
            {
              "language": "en",
              "text": "Issue Date"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#issueDate"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "2000-01-01",
          "modelType": "Property"
        },
        {
          "idShort": "economicOperatorId",
          "displayName": [
            {
              "language": "en",
              "text": "Economic Operator Id"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#economicOperatorId"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "BPNL0123456789ZZ",
          "modelType": "Property"
        },
        {
          "idShort": "passportIdentifier",
          "displayName": [
            {
              "language": "en",
              "text": "Passport Identifier"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#passportIdentifier"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "urn:uuid:550e8400-e29b-41d4-a716-446655440000",
          "modelType": "Property"
        },
        {
          "idShort": "predecessor",
          "displayName": [
            {
              "language": "en",
              "text": "Predecessor"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#predecessor"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "urn:uuid:00000000-0000-0000-0000-000000000000",
          "modelType": "Property"
        },
        {
          "idShort": "backupReference",
          "displayName": [
            {
              "language": "en",
              "text": "Backup Reference"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#backupReference"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "https://dummy.link",
          "modelType": "Property"
        },
        {
          "idShort": "registrationIdentifier",
          "displayName": [
            {
              "language": "en",
              "text": "Registration Identifier"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#registrationIdentifier"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "https://dummy.link/ID8283746239078",
          "modelType": "Property"
        },
        {
          "idShort": "lastModification",
          "displayName": [
            {
              "language": "en",
              "text": "Last Modification"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#lastModification"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "2000-01-01",
          "modelType": "Property"
        },
        {
          "idShort": "language",
          "displayName": [
            {
              "language": "en",
              "text": "Language"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#language"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "EN",
          "modelType": "Property"
        }
      ],
      "modelType": "SubmodelElementCollection"
    },
    {
      "idShort": "identification",
      "displayName": [
        {
          "language": "en",
          "text": "Identification"
        }
      ],
      "description": [
        {
          "language": "en",
          "text": "Identification information of the product, especially identifiers and codes. "
        }
      ],
      "value": [
        {
          "idShort": "serialInformation",
          "displayName": [
            {
              "language": "en",
              "text": "Serial Information"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Identifier for a serial part if available. "
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.serial_part:3.0.1#LocalIdentifierCharacteristic"
              }
            ]
          },
          "orderRelevant": false,
          "typeValueListElement": "SubmodelElementCollection",
          "value": [
            {
              "idShort": "serialInformation",
              "displayName": [
                {
                  "language": "en",
                  "text": "Serial Information"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Identifier for a serial part if available. "
                }
              ],
              "value": [
                {
                  "idShort": "key",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Identifier Key"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.serial_part:3.0.1#key"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "partInstanceId",
                  "modelType": "Property"
                },
                {
                  "idShort": "value",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Identifier Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.serial_part:3.0.1#value"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "SN12345678",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            }
          ],
          "modelType": "SubmodelElementList"
        },
        {
          "idShort": "batchInformation",
          "displayName": [
            {
              "language": "en",
              "text": "Batch Information"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Identifier for a batch part if available. Identifier for a serial part if available."
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.batch:3.0.1#LocalIdentifierCharacteristic"
              }
            ]
          },
          "orderRelevant": false,
          "typeValueListElement": "SubmodelElementCollection",
          "value": [
            {
              "idShort": "batchInformation",
              "displayName": [
                {
                  "language": "en",
                  "text": "Batch Information"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Identifier for a batch part if available."
                }
              ],
              "value": [
                {
                  "idShort": "key",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Identifier Key"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.batch:3.0.1#key"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "batchId",
                  "modelType": "Property"
                },
                {
                  "idShort": "value",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Identifier Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.batch:3.0.1#value"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "BID12345678",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            }
          ],
          "modelType": "SubmodelElementList"
        },
        {
          "idShort": "partTypeInformation",
          "displayName": [
            {
              "language": "en",
              "text": "Part Type Information"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Identifier on the level of a part model or type. Identifier for a serial part if available. "
            }
          ],
          "value": [
            {
              "idShort": "manufacturerPartId",
              "displayName": [
                {
                  "language": "en",
                  "text": "Manufacturer Part ID"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.part_type_information:1.0.0#manufacturerPartId"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "123-0.740-3434-A",
              "modelType": "Property"
            },
            {
              "idShort": "nameAtManufacturer",
              "displayName": [
                {
                  "language": "en",
                  "text": "Name at manufacturer"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.part_type_information:1.0.0#nameAtManufacturer"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "Mirror left",
              "modelType": "Property"
            }
          ],
          "modelType": "SubmodelElementCollection"
        },
        {
          "idShort": "codes",
          "displayName": [
            {
              "language": "en",
              "text": "Codes"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Codes for identification."
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#CodeList"
              }
            ]
          },
          "orderRelevant": false,
          "typeValueListElement": "SubmodelElementCollection",
          "value": [
            {
              "idShort": "codes",
              "displayName": [
                {
                  "language": "en",
                  "text": "Codes"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Codes for identification."
                }
              ],
              "value": [
                {
                  "idShort": "codeKey",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Code Key"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#codeKey"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "TARIC",
                  "modelType": "Property"
                },
                {
                  "idShort": "codeValue",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Code Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#codeValue"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "8703 24 10 00",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            }
          ],
          "modelType": "SubmodelElementList"
        },
        {
          "idShort": "dataCarrier",
          "displayName": [
            {
              "language": "en",
              "text": "Data Carrier"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "The type and layout of the data carrier on the product. "
            }
          ],
          "value": [
            {
              "idShort": "carrierType",
              "displayName": [
                {
                  "language": "en",
                  "text": "Carrier Type"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#carrierType"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "QR",
              "modelType": "Property"
            },
            {
              "idShort": "carrierLayout",
              "displayName": [
                {
                  "language": "en",
                  "text": "Carrier Layout"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#carrierLayout"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "upper-left side",
              "modelType": "Property"
            }
          ],
          "modelType": "SubmodelElementCollection"
        },
        {
          "idShort": "partClassification",
          "displayName": [
            {
              "language": "en",
              "text": "Part Classification"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Property describing the classification of a part."
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.shared.part_classification:1.0.0#ClassificationCharacteristic"
              }
            ]
          },
          "orderRelevant": false,
          "typeValueListElement": "SubmodelElementCollection",
          "value": [
            {
              "idShort": "partClassification",
              "displayName": [
                {
                  "language": "en",
                  "text": "Part Classification"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Property describing the classification of a part."
                }
              ],
              "value": [
                {
                  "idShort": "classificationStandard",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Classification Standard"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.part_classification:1.0.0#classificationStandard"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "GIN 20510-21513",
                  "modelType": "Property"
                },
                {
                  "idShort": "classificationID",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Classification ID"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.part_classification:1.0.0#classificationID"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "1004712",
                  "modelType": "Property"
                },
                {
                  "idShort": "classificationDescription",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Classification Description"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.part_classification:1.0.0#classificationDescription"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "Generic standard for classification of parts in the automotive industry.",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            }
          ],
          "modelType": "SubmodelElementList"
        }
      ],
      "modelType": "SubmodelElementCollection"
    },
    {
      "idShort": "operation",
      "displayName": [
        {
          "language": "en",
          "text": "Operation"
        }
      ],
      "description": [
        {
          "language": "en",
          "text": "Operational information of the product."
        }
      ],
      "value": [
        {
          "idShort": "manufacturer",
          "displayName": [
            {
              "language": "en",
              "text": "Manufacturer"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Manufacturing information of the product."
            }
          ],
          "value": [
            {
              "idShort": "facilityIdentification",
              "displayName": [
                {
                  "language": "en",
                  "text": "Facility Identification"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The identifier used for a location."
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#FacilityList"
                  }
                ]
              },
              "orderRelevant": false,
              "typeValueListElement": "SubmodelElementCollection",
              "value": [
                {
                  "idShort": "facilityIdentification",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Facility Identification"
                    }
                  ],
                  "description": [
                    {
                      "language": "en",
                      "text": "The identifier used for a location."
                    }
                  ],
                  "value": [
                    {
                      "idShort": "facility",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Facility"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#facility"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "BPNA1234567890AA",
                      "modelType": "Property"
                    }
                  ],
                  "modelType": "SubmodelElementCollection"
                }
              ],
              "modelType": "SubmodelElementList"
            },
            {
              "idShort": "manufacturerIdentification",
              "displayName": [
                {
                  "language": "en",
                  "text": "Manufacturer Identification"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#manufacturerIdentification"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "BPNL1bVQKsz1Ci8l",
              "modelType": "Property"
            },
            {
              "idShort": "manufacturingDate",
              "displayName": [
                {
                  "language": "en",
                  "text": "Manufacturing Date"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#manufacturingDate"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "2000-01-31",
              "modelType": "Property"
            }
          ],
          "modelType": "SubmodelElementCollection"
        },
        {
          "idShort": "import",
          "displayName": [
            {
              "language": "en",
              "text": "Import"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Importer details such as the identification."
            }
          ],
          "value": [
            {
              "idShort": "importer",
              "displayName": [
                {
                  "language": "en",
                  "text": "Importer"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Information regarding the importer of the product, if different from the owner of the passport."
                }
              ],
              "value": [
                {
                  "idShort": "eori",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "EORI"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#eori"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export-0/customs-procedures/economic-operators-registration-and-identification-number-eori_en"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "GB123456789000",
                  "modelType": "Property"
                },
                {
                  "idShort": "importerIdentification",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Importer Identification"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#importerIdentification"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "BPNL0123456789ZZ",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            },
            {
              "idShort": "applicable",
              "displayName": [
                {
                  "language": "en",
                  "text": "Applicable"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#applicable"
                  }
                ]
              },
              "valueType": "xs:boolean",
              "value": "true",
              "modelType": "Property"
            }
          ],
          "modelType": "SubmodelElementCollection"
        },
        {
          "idShort": "otherOperators",
          "displayName": [
            {
              "language": "en",
              "text": "Other Operators"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Other operators relevant for the product."
            }
          ],
          "value": [
            {
              "idShort": "otherOperatorId",
              "displayName": [
                {
                  "language": "en",
                  "text": "Other Operator Id"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#otherOperatorId"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "BPNL0123456789XX",
              "modelType": "Property"
            },
            {
              "idShort": "otherOperatorRole",
              "displayName": [
                {
                  "language": "en",
                  "text": "Other Operator Role"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#otherOperatorRole"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "distributor",
              "modelType": "Property"
            }
          ],
          "modelType": "SubmodelElementCollection"
        }
      ],
      "modelType": "SubmodelElementCollection"
    },
    {
      "idShort": "handling",
      "displayName": [
        {
          "language": "en",
          "text": "handling"
        }
      ],
      "description": [
        {
          "language": "en",
          "text": "Properties connected with the handling of the product."
        }
      ],
      "value": [
        {
          "idShort": "spareParts",
          "displayName": [
            {
              "language": "en",
              "text": "spareParts"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "The list of spare parts available for the product from various suppliers."
            }
          ],
          "value": [
            {
              "idShort": "sparePartSources",
              "displayName": [
                {
                  "language": "en",
                  "text": "Spare Part Sources"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Sources of possible spare parts."
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#SourcesList"
                  }
                ]
              },
              "orderRelevant": false,
              "typeValueListElement": "SubmodelElementCollection",
              "value": [
                {
                  "idShort": "sparePartSources",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Spare Part Sources"
                    }
                  ],
                  "description": [
                    {
                      "language": "en",
                      "text": "Sources of possible spare parts."
                    }
                  ],
                  "value": [
                    {
                      "idShort": "sourcesIdentification",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Sources Identification"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#sourcesIdentification"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "BPNL0123456789ZZ",
                      "modelType": "Property"
                    }
                  ],
                  "modelType": "SubmodelElementCollection"
                }
              ],
              "modelType": "SubmodelElementList"
            },
            {
              "idShort": "sparePart",
              "displayName": [
                {
                  "language": "en",
                  "text": "Spare Part"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Possible spare parts of the product."
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#PartList"
                  }
                ]
              },
              "orderRelevant": false,
              "typeValueListElement": "SubmodelElementCollection",
              "value": [
                {
                  "idShort": "sparePart",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Spare Part"
                    }
                  ],
                  "description": [
                    {
                      "language": "en",
                      "text": "Possible spare parts of the product."
                    }
                  ],
                  "value": [
                    {
                      "idShort": "manufacturerPartId",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Manufacturer Part ID"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.part_type_information:1.0.0#manufacturerPartId"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "123-0.740-3434-A",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "nameAtManufacturer",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Name at manufacturer"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.part_type_information:1.0.0#nameAtManufacturer"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "Mirror left",
                      "modelType": "Property"
                    }
                  ],
                  "modelType": "SubmodelElementCollection"
                }
              ],
              "modelType": "SubmodelElementList"
            }
          ],
          "modelType": "SubmodelElementCollection"
        },
        {
          "idShort": "applicable",
          "displayName": [
            {
              "language": "en",
              "text": "Applicable"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#applicable"
              }
            ]
          },
          "valueType": "xs:boolean",
          "value": "true",
          "modelType": "Property"
        }
      ],
      "modelType": "SubmodelElementCollection"
    },
    {
      "idShort": "characteristics",
      "displayName": [
        {
          "language": "en",
          "text": "Characteristics"
        }
      ],
      "description": [
        {
          "language": "en",
          "text": "Defines specific characteristics of a product."
        }
      ],
      "value": [
        {
          "idShort": "lifespan",
          "displayName": [
            {
              "language": "en",
              "text": "Lifespan"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "The type of lifespan represented with the values guaranteed lifetime, technical lifetime and mean time between failures."
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#LifespanList"
              }
            ]
          },
          "orderRelevant": false,
          "typeValueListElement": "SubmodelElementCollection",
          "value": [
            {
              "idShort": "lifespan",
              "displayName": [
                {
                  "language": "en",
                  "text": "Lifespan"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The type of lifespan represented with the values guaranteed lifetime"
                }
              ],
              "value": [
                {
                  "idShort": "lifeUnit",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Life Unit"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#lifeUnit"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "unit:day",
                  "modelType": "Property"
                },
                {
                  "idShort": "lifeValue",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Life Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#lifeValue"
                      }
                    ]
                  },
                  "valueType": "xs:integer",
                  "value": "36",
                  "modelType": "Property"
                },
                {
                  "idShort": "lifeType",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Life Type"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#lifeType"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "guaranteed lifetime",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            }
          ],
          "modelType": "SubmodelElementList"
        },
        {
          "idShort": "physicalDimension",
          "displayName": [
            {
              "language": "en",
              "text": "Physical Dimension"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Physical dimensions are properties  associated with physical quantities for purposes of classification or differentiation. "
            }
          ],
          "value": [
            {
              "idShort": "width",
              "displayName": [
                {
                  "language": "en",
                  "text": "Width"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The width of the item measured in a specific linear unit which can be declared in the corresponding unit attribute."
                }
              ],
              "value": [
                {
                  "idShort": "quantityValue",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Quantity Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#quantityValue"
                      }
                    ]
                  },
                  "valueType": "xs:float",
                  "value": "20.0",
                  "modelType": "Property"
                },
                {
                  "idShort": "linearUnit",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Linear Unit"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#linearUnit"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "unit:millimetre",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            },
            {
              "idShort": "length",
              "displayName": [
                {
                  "language": "en",
                  "text": "Length"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The length of the item measured in a specific linear unit which can be declared in the corresponding unit attribute."
                }
              ],
              "value": [
                {
                  "idShort": "quantityValue",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Quantity Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#quantityValue"
                      }
                    ]
                  },
                  "valueType": "xs:float",
                  "value": "20.0",
                  "modelType": "Property"
                },
                {
                  "idShort": "linearUnit",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Linear Unit"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#linearUnit"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "unit:millimetre",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            },
            {
              "idShort": "diameter",
              "displayName": [
                {
                  "language": "en",
                  "text": "Diameter"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The diameter of the item, if applicable, measured in a specific linear unit which can be declared in the corresponding unit attribute."
                }
              ],
              "value": [
                {
                  "idShort": "quantityValue",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Quantity Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#quantityValue"
                      }
                    ]
                  },
                  "valueType": "xs:float",
                  "value": "20.0",
                  "modelType": "Property"
                },
                {
                  "idShort": "linearUnit",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Linear Unit"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#linearUnit"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "unit:millimetre",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            },
            {
              "idShort": "height",
              "displayName": [
                {
                  "language": "en",
                  "text": "Height"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The height of the item measured in a specific linear unit which can be declared in the corresponding unit attribute."
                }
              ],
              "value": [
                {
                  "idShort": "quantityValue",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Quantity Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#quantityValue"
                      }
                    ]
                  },
                  "valueType": "xs:float",
                  "value": "20.0",
                  "modelType": "Property"
                },
                {
                  "idShort": "linearUnit",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Linear Unit"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#linearUnit"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "unit:millimetre",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            },
            {
              "idShort": "grossWeight",
              "displayName": [
                {
                  "language": "en",
                  "text": "Gross Weight"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The gross weight of the item measured in a specific mass unit which can be declared in the corresponding unit attribute. Gross weight refers to the total weight of a product, including the weight of the packaging. "
                }
              ],
              "value": [
                {
                  "idShort": "quantityValue",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Quantity Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#quantityValue"
                      }
                    ]
                  },
                  "valueType": "xs:float",
                  "value": "20.0",
                  "modelType": "Property"
                },
                {
                  "idShort": "massUnit",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Mass Unit"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#massUnit"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "unit:gram",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            },
            {
              "idShort": "grossVolume",
              "displayName": [
                {
                  "language": "en",
                  "text": "Gross Volume"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The gross volume of the item, if possible, measured in a specific capacity unit which can be declared in the corresponding unit attribute. "
                }
              ],
              "value": [
                {
                  "idShort": "quantityValue",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Quantity Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#quantityValue"
                      }
                    ]
                  },
                  "valueType": "xs:float",
                  "value": "20.0",
                  "modelType": "Property"
                },
                {
                  "idShort": "volumeUnit",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Volume Unit"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#volumeUnit"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "unit:cubicMetre",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            },
            {
              "idShort": "weight",
              "displayName": [
                {
                  "language": "en",
                  "text": "Weight"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Weight of the product measured in a specific mass unit which can be declared in the corresponding unit attribute. "
                }
              ],
              "value": [
                {
                  "idShort": "quantityValue",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Quantity Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#quantityValue"
                      }
                    ]
                  },
                  "valueType": "xs:float",
                  "value": "20.0",
                  "modelType": "Property"
                },
                {
                  "idShort": "massUnit",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Mass Unit"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#massUnit"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "unit:gram",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            },
            {
              "idShort": "volume",
              "displayName": [
                {
                  "language": "en",
                  "text": "Volume"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Volume of the product, if possible, measured in a specific capacity unit which can be declared in the corresponding unit attribute. "
                }
              ],
              "value": [
                {
                  "idShort": "quantityValue",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Quantity Value"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#quantityValue"
                      }
                    ]
                  },
                  "valueType": "xs:float",
                  "value": "20.0",
                  "modelType": "Property"
                },
                {
                  "idShort": "volumeUnit",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Volume Unit"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.shared.quantity:2.0.0#volumeUnit"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "unit:cubicMetre",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            }
          ],
          "modelType": "SubmodelElementCollection"
        },
        {
          "idShort": "physicalState",
          "displayName": [
            {
              "language": "en",
              "text": "Physical State"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#physicalState"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "solid",
          "modelType": "Property"
        },
        {
          "idShort": "generalPerformanceClass",
          "displayName": [
            {
              "language": "en",
              "text": "General Performance Class"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#generalPerformanceClass"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "A",
          "modelType": "Property"
        }
      ],
      "modelType": "SubmodelElementCollection"
    },
    {
      "idShort": "commercial",
      "displayName": [
        {
          "language": "en",
          "text": "Commercial"
        }
      ],
      "description": [
        {
          "language": "en",
          "text": "Commercial information of the product."
        }
      ],
      "value": [
        {
          "idShort": "placedOnMarket",
          "displayName": [
            {
              "language": "en",
              "text": "Placed on Market"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#placedOnMarket"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "2000-01-01",
          "modelType": "Property"
        },
        {
          "idShort": "purpose",
          "displayName": [
            {
              "language": "en",
              "text": "Purpose"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "One or more intended industry/industries of the product described by the digital product passport. If exchanged via Catena-X, 'automotive ' is a must choice included in the list."
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#StringList"
              }
            ]
          },
          "orderRelevant": false,
          "typeValueListElement": "SubmodelElementCollection",
          "value": [
            {
              "idShort": "purpose",
              "displayName": [
                {
                  "language": "en",
                  "text": "Purpose"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#purpose"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "automotive",
              "modelType": "Property"
            }
          ],
          "modelType": "SubmodelElementList"
        },
        {
          "idShort": "purchaseOrder",
          "displayName": [
            {
              "language": "en",
              "text": "Purchase Order"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#purchaseOrder"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "eOMtThyhVNLWUZNRcBaQKxI",
          "modelType": "Property"
        },
        {
          "idShort": "recallInformation",
          "displayName": [
            {
              "language": "en",
              "text": "Recall Information"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Information regarding the recall of the product."
            }
          ],
          "value": [
            {
              "idShort": "applicable",
              "displayName": [
                {
                  "language": "en",
                  "text": "Applicable"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#applicable"
                  }
                ]
              },
              "valueType": "xs:boolean",
              "value": "true",
              "modelType": "Property"
            },
            {
              "idShort": "recallInformationDocumentation",
              "displayName": [
                {
                  "language": "en",
                  "text": "Recall Information Documentation"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Documentation of the recall information of the product."
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#DocumentList"
                  }
                ]
              },
              "orderRelevant": false,
              "typeValueListElement": "SubmodelElementCollection",
              "value": [
                {
                  "idShort": "recallInformationDocumentation",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Recall Information Documentation"
                    }
                  ],
                  "description": [
                    {
                      "language": "en",
                      "text": "Documentation of the recall information of the product."
                    }
                  ],
                  "value": [
                    {
                      "idShort": "content",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Content"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#content"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "https://dummy.link",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "contentType",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Content Type"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#contentType"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "URL",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "header",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Header"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#header"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "Example Document XYZ",
                      "modelType": "Property"
                    }
                  ],
                  "modelType": "SubmodelElementCollection"
                }
              ],
              "modelType": "SubmodelElementList"
            }
          ],
          "modelType": "SubmodelElementCollection"
        }
      ],
      "modelType": "SubmodelElementCollection"
    },
    {
      "idShort": "materials",
      "displayName": [
        {
          "language": "en",
          "text": "Materials"
        }
      ],
      "description": [
        {
          "language": "en",
          "text": "Properties which are relevant for the materials of the product."
        }
      ],
      "value": [
        {
          "idShort": "substancesOfConcern",
          "displayName": [
            {
              "language": "en",
              "text": "Substances of Concern"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Information regarding substances of concern in the product."
            }
          ],
          "value": [
            {
              "idShort": "applicable",
              "displayName": [
                {
                  "language": "en",
                  "text": "Applicable"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#applicable"
                  }
                ]
              },
              "valueType": "xs:boolean",
              "value": "true",
              "modelType": "Property"
            },
            {
              "idShort": "substanceOfConcern",
              "displayName": [
                {
                  "language": "en",
                  "text": "Substance of Concern"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Information regarding substances of concern in the product. Attributes are among others substance names, ids, concentration, location and hazard class."
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#SubstanceList"
                  }
                ]
              },
              "orderRelevant": false,
              "typeValueListElement": "SubmodelElementCollection",
              "value": [
                {
                  "idShort": "substanceOfConcern",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Substance of Concern"
                    }
                  ],
                  "description": [
                    {
                      "language": "en",
                      "text": "Information regarding substances of concern in the product. "
                    }
                  ],
                  "value": [
                    {
                      "idShort": "location",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Location"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#location"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "Housing",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "materialUnit",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Material Unit"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#materialUnit"
                          }
                        ]
                      },
                      "supplementalSemanticIds": [
                        {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                            }
                          ]
                        }
                      ],
                      "valueType": "xs:string",
                      "value": "unit:partPerMillion",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "concentration",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Concentration"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#concentration"
                          }
                        ]
                      },
                      "valueType": "xs:float",
                      "value": "5.3",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "exemption",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Exemption"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#exemption"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "shall not apply to product x containing not more than 1,5 ml of liquid",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "hazardClassification",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Hazard Classification"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The specification of the hazard class."
                        }
                      ],
                      "supplementalSemanticIds": [
                        {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02008R1272-20231201"
                            }
                          ]
                        }
                      ],
                      "value": [
                        {
                          "idShort": "hazardCategory",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Hazard Category"
                            }
                          ],
                          "semanticId": {
                            "type": "ExternalReference",
                            "keys": [
                              {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#hazardCategory"
                              }
                            ]
                          },
                          "supplementalSemanticIds": [
                            {
                              "type": "ExternalReference",
                              "keys": [
                                {
                                  "type": "GlobalReference",
                                  "value": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02008R1272-20231201"
                                }
                              ]
                            }
                          ],
                          "valueType": "xs:string",
                          "value": "category 1A",
                          "modelType": "Property"
                        },
                        {
                          "idShort": "hazardClass",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Hazard Class"
                            }
                          ],
                          "semanticId": {
                            "type": "ExternalReference",
                            "keys": [
                              {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#hazardClass"
                              }
                            ]
                          },
                          "supplementalSemanticIds": [
                            {
                              "type": "ExternalReference",
                              "keys": [
                                {
                                  "type": "GlobalReference",
                                  "value": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02008R1272-20231201"
                                }
                              ]
                            }
                          ],
                          "valueType": "xs:string",
                          "value": "Skin corrosion",
                          "modelType": "Property"
                        },
                        {
                          "idShort": "hazardStatement",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Hazard Statement"
                            }
                          ],
                          "semanticId": {
                            "type": "ExternalReference",
                            "keys": [
                              {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#hazardStatement"
                              }
                            ]
                          },
                          "supplementalSemanticIds": [
                            {
                              "type": "ExternalReference",
                              "keys": [
                                {
                                  "type": "GlobalReference",
                                  "value": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02008R1272-20231201"
                                }
                              ]
                            }
                          ],
                          "valueType": "xs:string",
                          "value": "Causes severe skin burns and eye damage.",
                          "modelType": "Property"
                        }
                      ],
                      "modelType": "SubmodelElementCollection"
                    },
                    {
                      "idShort": "concentrationRange",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Concentration Range"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The concentration range for the substance of concern. "
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#RangeCharacteristic"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "concentrationRange",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Concentration Range"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The concentration range for the substance of concern. "
                            }
                          ],
                          "value": [
                            {
                              "idShort": "minConcentration",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Minimum Concentration"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#minConcentration"
                                  }
                                ]
                              },
                              "valueType": "xs:float",
                              "value": "2.1",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "maxConcentration",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Maximum Concentration"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#maxConcentration"
                                  }
                                ]
                              },
                              "valueType": "xs:float",
                              "value": "2.6",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    },
                    {
                      "idShort": "materialIdentification",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Material Identification"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The chemical material name and identification, in accordance with the specification in the attribute for the list type."
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#MaterialIdList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "materialIdentification",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Material Identification"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The chemical material name and identification, in accordance with the specification in the attribute for the list type. "
                            }
                          ],
                          "value": [
                            {
                              "idShort": "chemicalId",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Chemical Id"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#chemicalId"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "201-004-7",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "listTypeId",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "List Type Id"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#listTypeId"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "CAS",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "chemicalName",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Chemical Name"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#chemicalName"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "phenolphthalein",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    },
                    {
                      "idShort": "documentation",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Documentation"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "Documentation accompanying the material."
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#DocumentList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "documentation",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Documentation"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "Documentation accompanying the material."
                            }
                          ],
                          "value": [
                            {
                              "idShort": "content",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#content"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "https://dummy.link",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "contentType",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content Type"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#contentType"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "URL",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "header",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Header"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#header"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "Example Document XYZ",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    }
                  ],
                  "modelType": "SubmodelElementCollection"
                }
              ],
              "modelType": "SubmodelElementList"
            }
          ],
          "modelType": "SubmodelElementCollection"
        },
        {
          "idShort": "materialComposition",
          "displayName": [
            {
              "language": "en",
              "text": "Material Composition"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Material composition of the product with information on recycled and renewable materials."
            }
          ],
          "value": [
            {
              "idShort": "applicable",
              "displayName": [
                {
                  "language": "en",
                  "text": "Applicable"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#applicable"
                  }
                ]
              },
              "valueType": "xs:boolean",
              "value": "true",
              "modelType": "Property"
            },
            {
              "idShort": "chemicalMaterial",
              "displayName": [
                {
                  "language": "en",
                  "text": "Material"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Information on different materials in the product."
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#MaterialList"
                  }
                ]
              },
              "orderRelevant": false,
              "typeValueListElement": "SubmodelElementCollection",
              "value": [
                {
                  "idShort": "chemicalMaterial",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Material"
                    }
                  ],
                  "description": [
                    {
                      "language": "en",
                      "text": "Information on different materials in the product."
                    }
                  ],
                  "value": [
                    {
                      "idShort": "recycled",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Recycled"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#recycled"
                          }
                        ]
                      },
                      "valueType": "xs:float",
                      "value": "12.5",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "renewable",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Renewable"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#renewable"
                          }
                        ]
                      },
                      "valueType": "xs:float",
                      "value": "23.5",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "materialUnit",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Material Unit"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#materialUnit"
                          }
                        ]
                      },
                      "supplementalSemanticIds": [
                        {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                            }
                          ]
                        }
                      ],
                      "valueType": "xs:string",
                      "value": "unit:partPerMillion",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "materialIdentification",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Material Identification"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The chemical material name and identification, in accordance with the specification in the attribute for the list type. Preference is given to the IUPAC name."
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#MaterialIdList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "materialIdentification",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Material Identification"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The chemical material name and identification, in accordance with the specification in the attribute for the list type. Preference is given to the IUPAC name. "
                            }
                          ],
                          "value": [
                            {
                              "idShort": "chemicalId",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Chemical Id"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#chemicalId"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "201-004-7",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "listTypeId",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "List Type Id"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#listTypeId"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "CAS",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "chemicalName",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Chemical Name"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#chemicalName"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "phenolphthalein",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    },
                    {
                      "idShort": "critical",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Critical"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#critical"
                          }
                        ]
                      },
                      "supplementalSemanticIds": [
                        {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=COM:2023:0160:FIN"
                            }
                          ]
                        }
                      ],
                      "valueType": "xs:boolean",
                      "value": "true",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "concentration",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Concentration"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#concentration"
                          }
                        ]
                      },
                      "valueType": "xs:float",
                      "value": "5.3",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "documentation",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Documentation"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "Documentation accompanying the material."
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#DocumentList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "documentation",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Documentation"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "Documentation accompanying the material."
                            }
                          ],
                          "value": [
                            {
                              "idShort": "content",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#content"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "https://dummy.link",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "contentType",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content Type"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#contentType"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "URL",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "header",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Header"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#header"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "Example Document XYZ",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    }
                  ],
                  "modelType": "SubmodelElementCollection"
                }
              ],
              "modelType": "SubmodelElementList"
            }
          ],
          "modelType": "SubmodelElementCollection"
        }
      ],
      "modelType": "SubmodelElementCollection"
    },
    {
      "idShort": "sustainability",
      "displayName": [
        {
          "language": "en",
          "text": "Sustainability"
        }
      ],
      "description": [
        {
          "language": "en",
          "text": "Sustainability related attributes."
        }
      ],
      "value": [
        {
          "idShort": "state",
          "displayName": [
            {
              "language": "en",
              "text": "State"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#state"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "original",
          "modelType": "Property"
        },
        {
          "idShort": "productFootprint",
          "displayName": [
            {
              "language": "en",
              "text": "Product Footprint"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "The carbon and environmental footprint or material footprint of the product. "
            }
          ],
          "value": [
            {
              "idShort": "environmentalFootprint",
              "displayName": [
                {
                  "language": "en",
                  "text": "Environmental Footprint"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The environmental footprint of the product. "
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#FootprintList"
                  }
                ]
              },
              "orderRelevant": false,
              "typeValueListElement": "SubmodelElementCollection",
              "value": [
                {
                  "idShort": "environmentalFootprint",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Environmental Footprint"
                    }
                  ],
                  "description": [
                    {
                      "language": "en",
                      "text": "The environmental footprint of the product. "
                    }
                  ],
                  "value": [
                    {
                      "idShort": "footprintValue",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Value"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintValue"
                          }
                        ]
                      },
                      "valueType": "xs:float",
                      "value": "12.678",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "footprintRulebook",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Rulebook"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The applied rulebook for the environmental footprint of the product."
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#DocumentList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "footprintRulebook",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Footprint Rulebook"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The applied rulebook for the environmental footprint of the product."
                            }
                          ],
                          "value": [
                            {
                              "idShort": "content",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#content"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "https://dummy.link",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "contentType",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content Type"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#contentType"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "URL",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "header",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Header"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#header"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "Example Document XYZ",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    },
                    {
                      "idShort": "footprintLifecycle",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Lifecycle"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintLifecycle"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "main product production",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "footprintUnit",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Unit"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintUnit"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "kg CO2 / kWh",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "footprintType",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Type"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintType"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "Climate Change Total",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "performanceClass",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Performance Class"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#performanceClass"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "A",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "manufacturingPlant",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Manufacturing Plant"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The manufacturing plant of the footprint in the specific lifecycle phase."
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#FacilityList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "manufacturingPlant",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Manufacturing Plant"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The manufacturing plant of the footprint in the specific lifecycle phase."
                            }
                          ],
                          "value": [
                            {
                              "idShort": "facility",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Facility"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#facility"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "BPNA1234567890AA",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    },
                    {
                      "idShort": "declaration",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Declaration"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The footprint declaration in the format of a link "
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#DocumentList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "declaration",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Declaration"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The footprint declaration in the format of a link "
                            }
                          ],
                          "value": [
                            {
                              "idShort": "content",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#content"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "https://dummy.link",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "contentType",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content Type"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#contentType"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "URL",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "header",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Header"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#header"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "Example Document XYZ",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    }
                  ],
                  "modelType": "SubmodelElementCollection"
                }
              ],
              "modelType": "SubmodelElementList"
            },
            {
              "idShort": "carbonFootprint",
              "displayName": [
                {
                  "language": "en",
                  "text": "Carbon Footprint"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The carbon footprint of the product. "
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#FootprintList"
                  }
                ]
              },
              "orderRelevant": false,
              "typeValueListElement": "SubmodelElementCollection",
              "value": [
                {
                  "idShort": "carbonFootprint",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Carbon Footprint"
                    }
                  ],
                  "description": [
                    {
                      "language": "en",
                      "text": "The carbon footprint of the product."
                    }
                  ],
                  "value": [
                    {
                      "idShort": "footprintValue",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Value"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintValue"
                          }
                        ]
                      },
                      "valueType": "xs:float",
                      "value": "12.678",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "footprintRulebook",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Rulebook"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The applied rulebook for the environmental footprint of the product."
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#DocumentList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "footprintRulebook",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Footprint Rulebook"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The applied rulebook for the environmental footprint of the product."
                            }
                          ],
                          "value": [
                            {
                              "idShort": "content",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#content"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "https://dummy.link",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "contentType",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content Type"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#contentType"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "URL",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "header",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Header"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#header"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "Example Document XYZ",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    },
                    {
                      "idShort": "footprintLifecycle",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Lifecycle"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintLifecycle"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "main product production",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "footprintUnit",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Unit"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintUnit"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "kg CO2 / kWh",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "footprintType",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Type"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintType"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "Climate Change Total",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "performanceClass",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Performance Class"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#performanceClass"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "A",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "manufacturingPlant",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Manufacturing Plant"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The manufacturing plant of the footprint in the specific lifecycle phase."
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#FacilityList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "manufacturingPlant",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Manufacturing Plant"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The manufacturing plant of the footprint in the specific lifecycle phase."
                            }
                          ],
                          "value": [
                            {
                              "idShort": "facility",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Facility"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#facility"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "BPNA1234567890AA",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    },
                    {
                      "idShort": "declaration",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Declaration"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The footprint declaration in the format of a link "
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#DocumentList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "declaration",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Declaration"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The footprint declaration in the format of a link "
                            }
                          ],
                          "value": [
                            {
                              "idShort": "content",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#content"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "https://dummy.link",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "contentType",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content Type"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#contentType"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "URL",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "header",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Header"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#header"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "Example Document XYZ",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    }
                  ],
                  "modelType": "SubmodelElementCollection"
                }
              ],
              "modelType": "SubmodelElementList"
            },
            {
              "idShort": "materialFootprint",
              "displayName": [
                {
                  "language": "en",
                  "text": "Material Footprint"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The material footprint of the product. "
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#FootprintList"
                  }
                ]
              },
              "orderRelevant": false,
              "typeValueListElement": "SubmodelElementCollection",
              "value": [
                {
                  "idShort": "materialFootprint",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Material Footprint"
                    }
                  ],
                  "description": [
                    {
                      "language": "en",
                      "text": "The material footprint of the product. "
                    }
                  ],
                  "value": [
                    {
                      "idShort": "footprintValue",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Value"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintValue"
                          }
                        ]
                      },
                      "valueType": "xs:float",
                      "value": "12.678",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "footprintRulebook",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Rulebook"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The applied rulebook for the environmental footprint of the product."
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#DocumentList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "footprintRulebook",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Footprint Rulebook"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The applied rulebook for the environmental footprint of the product."
                            }
                          ],
                          "value": [
                            {
                              "idShort": "content",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#content"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "https://dummy.link",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "contentType",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content Type"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#contentType"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "URL",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "header",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Header"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#header"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "Example Document XYZ",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    },
                    {
                      "idShort": "footprintLifecycle",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Lifecycle"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintLifecycle"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "main product production",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "footprintUnit",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Unit"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintUnit"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "kg CO2 / kWh",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "footprintType",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Footprint Type"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#footprintType"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "Climate Change Total",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "performanceClass",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Performance Class"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#performanceClass"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "A",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "manufacturingPlant",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Manufacturing Plant"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The manufacturing plant of the footprint in the specific lifecycle phase."
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#FacilityList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "manufacturingPlant",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Manufacturing Plant"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The manufacturing plant of the footprint in the specific lifecycle phase."
                            }
                          ],
                          "value": [
                            {
                              "idShort": "facility",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Facility"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#facility"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "BPNA1234567890AA",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    },
                    {
                      "idShort": "declaration",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Declaration"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The footprint declaration in the format of a link "
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#DocumentList"
                          }
                        ]
                      },
                      "orderRelevant": false,
                      "typeValueListElement": "SubmodelElementCollection",
                      "value": [
                        {
                          "idShort": "declaration",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Declaration"
                            }
                          ],
                          "description": [
                            {
                              "language": "en",
                              "text": "The footprint declaration in the format of a link "
                            }
                          ],
                          "value": [
                            {
                              "idShort": "content",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#content"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "https://dummy.link",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "contentType",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Content Type"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#contentType"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "URL",
                              "modelType": "Property"
                            },
                            {
                              "idShort": "header",
                              "displayName": [
                                {
                                  "language": "en",
                                  "text": "Header"
                                }
                              ],
                              "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                  {
                                    "type": "GlobalReference",
                                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#header"
                                  }
                                ]
                              },
                              "valueType": "xs:string",
                              "value": "Example Document XYZ",
                              "modelType": "Property"
                            }
                          ],
                          "modelType": "SubmodelElementCollection"
                        }
                      ],
                      "modelType": "SubmodelElementList"
                    }
                  ],
                  "modelType": "SubmodelElementCollection"
                }
              ],
              "modelType": "SubmodelElementList"
            }
          ],
          "modelType": "SubmodelElementCollection"
        },
        {
          "idShort": "reparabilityScore",
          "displayName": [
            {
              "language": "en",
              "text": "Reparability Score"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#reparabilityScore"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "B",
          "modelType": "Property"
        },
        {
          "idShort": "durabilityScore",
          "displayName": [
            {
              "language": "en",
              "text": "Durability Score"
            }
          ],
          "semanticId": {
            "type": "ExternalReference",
            "keys": [
              {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#durabilityScore"
              }
            ]
          },
          "valueType": "xs:string",
          "value": "A",
          "modelType": "Property"
        }
      ],
      "modelType": "SubmodelElementCollection"
    },
    {
      "idShort": "sources",
      "displayName": [
        {
          "language": "en",
          "text": "Sources"
        }
      ],
      "description": [
        {
          "language": "en",
          "text": "Documents that are mandatory if applicable for the product."
        }
      ],
      "semanticId": {
        "type": "ExternalReference",
        "keys": [
          {
            "type": "GlobalReference",
            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#SourceList"
          }
        ]
      },
      "orderRelevant": false,
      "typeValueListElement": "SubmodelElementCollection",
      "value": [
        {
          "idShort": "sources",
          "displayName": [
            {
              "language": "en",
              "text": "Sources"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Documents that are mandatory if applicable for the product."
            }
          ],
          "value": [
            {
              "idShort": "content",
              "displayName": [
                {
                  "language": "en",
                  "text": "Content"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#content"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "https://dummy.link",
              "modelType": "Property"
            },
            {
              "idShort": "category",
              "displayName": [
                {
                  "language": "en",
                  "text": "Category"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#category"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "Product Specifications",
              "modelType": "Property"
            },
            {
              "idShort": "contentType",
              "displayName": [
                {
                  "language": "en",
                  "text": "Content Type"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#contentType"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "URL",
              "modelType": "Property"
            },
            {
              "idShort": "header",
              "displayName": [
                {
                  "language": "en",
                  "text": "Header"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#header"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "Example Document XYZ",
              "modelType": "Property"
            }
          ],
          "modelType": "SubmodelElementCollection"
        }
      ],
      "modelType": "SubmodelElementList"
    },
    {
      "idShort": "additionalData",
      "displayName": [
        {
          "language": "en",
          "text": "Additional Data"
        }
      ],
      "description": [
        {
          "language": "en",
          "text": "Data in form of open fields which need to be transferred in addition."
        }
      ],
      "semanticId": {
        "type": "ExternalReference",
        "keys": [
          {
            "type": "GlobalReference",
            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#AdditionalDataList"
          }
        ]
      },
      "orderRelevant": false,
      "typeValueListElement": "SubmodelElementCollection",
      "value": [
        {
          "idShort": "additionalData",
          "displayName": [
            {
              "language": "en",
              "text": "Additional Data"
            }
          ],
          "description": [
            {
              "language": "en",
              "text": "Data in form of open fields which need to be transferred in addition. "
            }
          ],
          "value": [
            {
              "idShort": "label",
              "displayName": [
                {
                  "language": "en",
                  "text": "Label"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#label"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "Maximum permitted battery power",
              "modelType": "Property"
            },
            {
              "idShort": "description",
              "displayName": [
                {
                  "language": "en",
                  "text": "Description"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#description"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "Description of an attribute",
              "modelType": "Property"
            },
            {
              "idShort": "type",
              "displayName": [
                {
                  "language": "en",
                  "text": "Type"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "The complex description of the type."
                }
              ],
              "value": [
                {
                  "idShort": "typeUnit",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Type Unit"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#typeUnit"
                      }
                    ]
                  },
                  "valueType": "xs:string",
                  "value": "unit:volume",
                  "modelType": "Property"
                },
                {
                  "idShort": "dataType",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "Data Type"
                    }
                  ],
                  "semanticId": {
                    "type": "ExternalReference",
                    "keys": [
                      {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#dataType"
                      }
                    ]
                  },
                  "supplementalSemanticIds": [
                    {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                        }
                      ]
                    }
                  ],
                  "valueType": "xs:string",
                  "value": "array",
                  "modelType": "Property"
                }
              ],
              "modelType": "SubmodelElementCollection"
            },
            {
              "idShort": "data",
              "displayName": [
                {
                  "language": "en",
                  "text": "Data"
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#data"
                  }
                ]
              },
              "valueType": "xs:string",
              "value": "23",
              "modelType": "Property"
            },
            {
              "idShort": "children",
              "displayName": [
                {
                  "language": "en",
                  "text": "children"
                }
              ],
              "description": [
                {
                  "language": "en",
                  "text": "Children of the hierarchy."
                }
              ],
              "semanticId": {
                "type": "ExternalReference",
                "keys": [
                  {
                    "type": "GlobalReference",
                    "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#AdditionalDataList"
                  }
                ]
              },
              "orderRelevant": false,
              "typeValueListElement": "SubmodelElementCollection",
              "value": [
                {
                  "idShort": "children",
                  "displayName": [
                    {
                      "language": "en",
                      "text": "children"
                    }
                  ],
                  "description": [
                    {
                      "language": "en",
                      "text": "Children of the hierarchy."
                    }
                  ],
                  "value": [
                    {
                      "idShort": "label",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Label"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#label"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "Maximum permitted battery power",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "description",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Description"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#description"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "Description of an attribute",
                      "modelType": "Property"
                    },
                    {
                      "idShort": "type",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Type"
                        }
                      ],
                      "description": [
                        {
                          "language": "en",
                          "text": "The complex description of the type."
                        }
                      ],
                      "value": [
                        {
                          "idShort": "typeUnit",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Type Unit"
                            }
                          ],
                          "semanticId": {
                            "type": "ExternalReference",
                            "keys": [
                              {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#typeUnit"
                              }
                            ]
                          },
                          "valueType": "xs:string",
                          "value": "unit:volume",
                          "modelType": "Property"
                        },
                        {
                          "idShort": "dataType",
                          "displayName": [
                            {
                              "language": "en",
                              "text": "Data Type"
                            }
                          ],
                          "semanticId": {
                            "type": "ExternalReference",
                            "keys": [
                              {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#dataType"
                              }
                            ]
                          },
                          "supplementalSemanticIds": [
                            {
                              "type": "ExternalReference",
                              "keys": [
                                {
                                  "type": "GlobalReference",
                                  "value": "https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html"
                                }
                              ]
                            }
                          ],
                          "valueType": "xs:string",
                          "value": "array",
                          "modelType": "Property"
                        }
                      ],
                      "modelType": "SubmodelElementCollection"
                    },
                    {
                      "idShort": "data",
                      "displayName": [
                        {
                          "language": "en",
                          "text": "Data"
                        }
                      ],
                      "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                          {
                            "type": "GlobalReference",
                            "value": "urn:samm:io.catenax.generic.digital_product_passport:6.1.0#data"
                          }
                        ]
                      },
                      "valueType": "xs:string",
                      "value": "23",
                      "modelType": "Property"
                    }
                  ],
                  "modelType": "SubmodelElementCollection"
                }
              ],
              "modelType": "SubmodelElementList"
            }
          ],
          "modelType": "SubmodelElementCollection"
        }
      ],
      "modelType": "SubmodelElementList"
    }
  ],
  "modelType": "Submodel"
}`
  ,
}