export enum SubmodelTemplateDpp {
  submodel_battery_pass = `{
    "idShort": "BatteryPass",
    "description": [
        {
            "language": "en",
            "text": "The battery pass describes information collected during the lifecycle of a battery. The battery passport is heavily based on the Regulation (EU) 2023/1542 of the European Parliament and of the Council of 12 July 2023 concerning batteries and waste batteries, amending Directive 2008/98/EC and Regulation (EU) 2019/1020 and repealing Directive 2006/66/EC.Additionally attributes come from the Proposal for Ecodesign for Sustainable Products Regulation."
        }
    ],
    "administration": {},
    "id": "urn:samm:io.catenax.battery.battery_pass:6.1.0#BatteryPass/submodel",
    "kind": "Instance",
    "semanticId": {
        "type": "ExternalReference",
        "keys": [
            {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#BatteryPass"
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
            "idShort": "specVersion",
            "displayName": [
                {
                    "language": "en",
                    "text": "Battery Product Passport Specification Version"
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#specVersion"
                    }
                ]
            },
            "valueType": "xs:string",
            "value": "test1111",
            "modelType": "Property"
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
                    "text": "Consider additional available sources to enhance the content of the battery passport."
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#SourceList"
                    }
                ]
            },
            "orderRelevant": false,
            "typeValueListElement": "SubmodelElementCollection",
            "valueTypeListElement": "xs:anyURI",
            "value": [
                {
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Sources"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Consider additional available sources to enhance the content of the battery passport."
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                    }
                                ]
                            },
                            "valueType": "xs:string",
                            "value": "test222",
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#category"
                                    }
                                ]
                            },
                            "valueType": "xs:string",
                            "value": "test333",
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                    }
                                ]
                            },
                            "valueType": "xs:string",
                            "value": "qwe",
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                    }
                                ]
                            },
                            "valueType": "xs:string",
                            "value": "asd",
                            "modelType": "Property"
                        }
                    ],
                    "modelType": "SubmodelElementCollection"
                }
            ],
            "modelType": "SubmodelElementList"
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
                    "text": "Battery identification involves specific battery identifiers."
                }
            ],
            "value": [
                {
                    "idShort": "batteryCategory",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Battery Category"
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#batteryCategory"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "zxc",
                    "modelType": "Property"
                },
                {
                    "idShort": "idDmc",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Id DMC"
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#idDmc"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "ert",
                    "modelType": "Property"
                },
                {
                    "idShort": "batteryChemistry",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Battery Chemistry"
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#batteryChemistry"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "dfg",
                    "modelType": "Property"
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
                                        "value": "urn:samm:io.catenax.serial_part:3.0.0#LocalIdentifierCharacteristic"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
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
                                                        "value": "urn:samm:io.catenax.serial_part:3.0.0#key"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "aaa",
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
                                                        "value": "urn:samm:io.catenax.serial_part:3.0.0#value"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "sss",
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
                                    "text": "Identifier for a batch part if available. "
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.batch:3.0.0#LocalIdentifierCharacteristic"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Batch Information"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Identifier for a batch part if available. "
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
                                                        "value": "urn:samm:io.catenax.batch:3.0.0#key"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "ddd",
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
                                                        "value": "urn:samm:io.catenax.batch:3.0.0#value"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "fff",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#CodeList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#codeKey"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "qqq",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#codeValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "eee",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
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
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
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
                                            "value": "zzz",
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
                                            "value": "ccc",
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
                                            "value": "xxx",
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
                                    "text": "Identifier on the level of a part model or type. "
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
                                    "value": "tgb",
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
                                    "value": "rfv",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
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
                                    "text": "The type and layout of the data carrier on the product."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#carrierType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "edc",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#carrierLayout"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "wsx",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        }
                    ],
                    "modelType": "SubmodelElementCollection"
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
                    "text": "General operation information includes details such as the manufacturers identification and the date of production. "
                }
            ],
            "value": [
                {
                    "idShort": "intoServiceDate",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Into Service Date"
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#intoServiceDate"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "yhn",
                    "modelType": "Property"
                },
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#manufacturerIdentification"
                                    }
                                ]
                            },
                            "valueType": "xs:string",
                            "value": "ujm",
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#manufacturingDate"
                                    }
                                ]
                            },
                            "valueType": "xs:string",
                            "value": "edf",
                            "modelType": "Property"
                        },
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#FacilityList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#facility"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "456",
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
                    "text": "Characteristics of the battery, such as the warranty and the physical dimensions."
                }
            ],
            "value": [
                {
                    "idShort": "warranty",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Warranty"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "The warranty of the battery."
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#lifeUnit"
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
                            "value": "1",
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#lifeValue"
                                    }
                                ]
                            },
                            "valueType": "xs:integer",
                            "value": "1000000000000",
                            "modelType": "Property"
                        }
                    ],
                    "modelType": "SubmodelElementCollection"
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
                            "text": "The weight of the battery."
                        }
                    ],
                    "value": [
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
                                    "value": "asd",
                                    "modelType": "Property"
                                },
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
                                    "value": "123",
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
                                    "value": "zxc",
                                    "modelType": "Property"
                                },
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
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
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
                                    "value": "qwe",
                                    "modelType": "Property"
                                },
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
                                    "value": "0",
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
                                    "text": "Weight of the product measured in a specific mass unit which can be declared in the corresponding unit attribute."
                                }
                            ],
                            "value": [
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
                                    "value": "sad",
                                    "modelType": "Property"
                                },
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
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
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
                    "text": "Sustainability includes information on the carbon footprint, sustainability documents and the status of the battery."
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#state"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
                    "modelType": "Property"
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
                            "text": "The carbon footprint of the battery calculated."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#FootprintList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Carbon Footprint"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The carbon footprint of the battery calculated"
                                }
                            ],
                            "value": [
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#footprintLifecycle"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#footprintUnit"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#footprintType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#performanceClass"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
                                },
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#footprintValue"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
                                                    "modelType": "Property"
                                                }
                                            ],
                                            "modelType": "SubmodelElementCollection"
                                        }
                                    ],
                                    "modelType": "SubmodelElementList"
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#FacilityList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#facility"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                    "idShort": "sustainabilityDocuments",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "sustainability Documents"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Sustainability documents of the battery."
                        }
                    ],
                    "value": [
                        {
                            "idShort": "separateCollection",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Separate Collection"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Documentation about separate collection of batteries."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Separate Collection"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Documentation about separate collection of batteries involve information on how to properly collect."
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
                        },
                        {
                            "idShort": "wastePrevention",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Waste Prevention"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Documentation about waste prevention for batteries which include guidelines."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Waste Prevention"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Documentation about waste prevention for batteries which include guidelines."
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
                        },
                        {
                            "idShort": "euTaxonomyDisclosureStatement",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "EU Taxonomy Disclosure Statement"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Optional disclosure regarding the EU taxonomy."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "EU Taxonomy Disclosure Statement"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Optional disclosure regarding the EU taxonomy."
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
                        },
                        {
                            "idShort": "sustainabilityReport",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Sustainability Report"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Voluntarily making the Sustainability Report available via the battery passport. "
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Sustainability Report"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Voluntarily making the Sustainability Report available via the battery passport. "
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                    "text": "Chemical materials relevant for the composition of the battery. These include active, hazardous and critical materials."
                }
            ],
            "value": [
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
                            "text": "The materials which are necessary to describe the material composition, especially if they are active, critical or hazardous. "
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#MaterialCompositionList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Material Composition"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The materials which are necessary to describe the material composition."
                                }
                            ],
                            "value": [
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#materialUnit"
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
                                    "value": "",
                                    "modelType": "Property"
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#critical"
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
                                    "value": "",
                                    "modelType": "Property"
                                },
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#location"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#concentration"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
                                    "modelType": "Property"
                                },
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#recycled"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#renewable"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
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
                                            "text": "The chemical material name and identification."
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#MaterialIdList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Material Identification"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "The chemical material name and identification."
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#chemicalId"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#listTypeId"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#chemicalName"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                    "idShort": "activeMaterials",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Active Materials"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "The active materials included in the battery."
                        }
                    ],
                    "value": [
                        {
                            "idShort": "otherActiveMaterials",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Other Active Materials"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Other active materials in the battery."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#OtherActiveMaterialsList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Other Active Materials"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Other active materials in the battery."
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#location"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
                                            "modelType": "Property"
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#critical"
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
                                            "value": "",
                                            "modelType": "Property"
                                        },
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#recycled"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:float",
                                            "value": "0",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                                    }
                                                ]
                                            },
                                            "orderRelevant": false,
                                            "typeValueListElement": "SubmodelElementCollection",
                                            "valueTypeListElement": "xs:anyURI",
                                            "value": [
                                                {
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                    "text": "The chemical material name and identification."
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#MaterialIdList"
                                                    }
                                                ]
                                            },
                                            "orderRelevant": false,
                                            "typeValueListElement": "SubmodelElementCollection",
                                            "valueTypeListElement": "xs:anyURI",
                                            "value": [
                                                {
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Material Identification"
                                                        }
                                                    ],
                                                    "description": [
                                                        {
                                                            "language": "en",
                                                            "text": "The chemical material name and identification."
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#chemicalId"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#listTypeId"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#chemicalName"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                            "idShort": "nickel",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Nickel"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Information about the percentage of recovered nickel from waste."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#location"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#critical"
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
                                    "value": "",
                                    "modelType": "Property"
                                },
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#recycled"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                            "idShort": "lithium",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Lithium"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Information about the percentage of recovered lithium from waste."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#location"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#critical"
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
                                    "value": "",
                                    "modelType": "Property"
                                },
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#recycled"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                            "idShort": "cobalt",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Cobalt"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Information about the percentage of recovered cobalt from waste."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#location"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#critical"
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
                                    "value": "",
                                    "modelType": "Property"
                                },
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#recycled"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                            "idShort": "lead",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Lead"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Information about the lead in the battery."
                                }
                            ],
                            "value": [
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#critical"
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
                                    "value": "",
                                    "modelType": "Property"
                                },
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#location"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#materialUnit"
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
                                    "value": "",
                                    "modelType": "Property"
                                },
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#recycled"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#concentration"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "impactOfSubstances",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Impact of Substances"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "An accumulation of documents that refer to the impact, especially hazardous substances, on the battery."
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Impact of Substances"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "An accumulation of documents that refer to the impact, especially hazardous substances, on the battery."
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                    "idShort": "hazardousSubstance",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Hazardous Substance"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Hazardous substances like lead, cadmium and mercury."
                        }
                    ],
                    "value": [
                        {
                            "idShort": "otherHazardousMaterial",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Other Hazardous Material"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Other hazardous materials."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#OtherHazardousMaterialList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Other Hazardous Material"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Other hazardous materials."
                                        }
                                    ],
                                    "value": [
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#materialUnit"
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
                                            "value": "",
                                            "modelType": "Property"
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#critical"
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
                                            "value": "",
                                            "modelType": "Property"
                                        },
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#location"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#concentration"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:float",
                                            "value": "0",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "impactOfSubstances",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Impact of Substances"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "An accumulation of documents that refer to the impact, especially hazardous substances, on the battery."
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                                    }
                                                ]
                                            },
                                            "orderRelevant": false,
                                            "typeValueListElement": "SubmodelElementCollection",
                                            "valueTypeListElement": "xs:anyURI",
                                            "value": [
                                                {
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Impact of Substances"
                                                        }
                                                    ],
                                                    "description": [
                                                        {
                                                            "language": "en",
                                                            "text": "An accumulation of documents that refer to the impact, especially hazardous substances, on the battery."
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#MaterialIdList"
                                                    }
                                                ]
                                            },
                                            "orderRelevant": false,
                                            "typeValueListElement": "SubmodelElementCollection",
                                            "valueTypeListElement": "xs:anyURI",
                                            "value": [
                                                {
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#chemicalId"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#listTypeId"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#chemicalName"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                                    }
                                                ]
                                            },
                                            "orderRelevant": false,
                                            "typeValueListElement": "SubmodelElementCollection",
                                            "valueTypeListElement": "xs:anyURI",
                                            "value": [
                                                {
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "",
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
                            "idShort": "hazardousCadmium",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Hazardous Cadmium"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Information about the presence of cadmium in the battery."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#location"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#materialUnit"
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
                                    "value": "",
                                    "modelType": "Property"
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#critical"
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
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#concentration"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "impactOfSubstances",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Impact of Substances"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "An accumulation of documents that refer to the impact, especially hazardous substances, on the battery."
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Impact of Substances"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "An accumulation of documents that refer to the impact, especially hazardous substances, on the battery."
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                            "idShort": "hazardousMercury",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Hazardous Mercury"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Information about the presence of mercury in the battery."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#location"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#materialUnit"
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
                                    "value": "",
                                    "modelType": "Property"
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#critical"
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
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#concentration"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "impactOfSubstances",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Impact of Substances"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "An accumulation of documents that refer to the impact, especially hazardous substances, on the battery."
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Impact of Substances"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "An accumulation of documents that refer to the impact, especially hazardous substances, on the battery."
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                            "idShort": "lead",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Lead"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Information about the lead in the battery."
                                }
                            ],
                            "value": [
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#critical"
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
                                    "value": "",
                                    "modelType": "Property"
                                },
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#location"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#materialUnit"
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
                                    "value": "",
                                    "modelType": "Property"
                                },
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#recycled"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#concentration"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:float",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "impactOfSubstances",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Impact of Substances"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "An accumulation of documents that refer to the impact, especially hazardous substances, on the battery."
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Impact of Substances"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "An accumulation of documents that refer to the impact, especially hazardous substances, on the battery."
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                }
            ],
            "modelType": "SubmodelElementCollection"
        },
        {
            "idShort": "performance",
            "displayName": [
                {
                    "language": "en",
                    "text": "Performance"
                }
            ],
            "description": [
                {
                    "language": "en",
                    "text": "Performance attributes of the battery including rated and dynamic values."
                }
            ],
            "value": [
                {
                    "idShort": "ratedPerformance",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Rated Performance"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Rated performance values of the battery such as voltage, round trip efficiency, energy, resistance, power, capacity, temperature ranges and self-discharging rate."
                        }
                    ],
                    "value": [
                        {
                            "idShort": "selfDischargingRate",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Self Discharging Rate"
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#selfDischargingRate"
                                    }
                                ]
                            },
                            "valueType": "xs:double",
                            "value": "0",
                            "modelType": "Property"
                        },
                        {
                            "idShort": "performanceDocument",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Performance Document"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The performance document lists information regarding the performance of the battery."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Performance Document"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The performance document lists information regarding the performance of the battery."
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
                        },
                        {
                            "idShort": "testReport",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Test Report"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The test reports refer to the testing conducted during the determination of the rated values of the battery."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Test Report"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The test reports refer to the testing conducted during the determination of the rated values of the battery."
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
                        },
                        {
                            "idShort": "voltage",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Voltage"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Voltage values are mandatory for the battery, with the option to include temperature values voluntarily."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "minVoltage",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Minimum Voltage"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#minVoltage"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "maxVoltage",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Maximum Voltage"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#maxVoltage"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "nominalVoltage",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Nominal Voltage"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#nominalVoltage"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "testingTemperature",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Testing Temperature"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#testingTemperature"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "ratedRoundTripEfficiency",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Rated Round Trip Efficiency"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The efficiency value of a battery refers to the ratio of useful output energy to the input energy, expressed as a percentage."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "depthOfDischarge",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Depth of Discharge"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#depthOfDischarge"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "initialRoundTripEfficiency",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Initial Round Trip Efficiency"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#initialRoundTripEfficiency"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "roundTripEfficiency50Percent",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Round Trip Efficiency 50 Percent"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#roundTripEfficiency50Percent"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "testingTemperature",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Testing Temperature"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#testingTemperature"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "ratedEnergy",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Rated Energy"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Representation of the total amount of energy that the battery can store and subsequently deliver during its discharge cycle. It is necessary to calculate the SOCE."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "energyValue",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Energy Value"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#energyValue"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "testingTemperature",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Testing Temperature"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#testingTemperature"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "ratedResistance",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Rated Resistance"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Rated resistance of the battery on the level of the pack, module (optional) and cell."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "cellResistance",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Cell Resistance"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#cellResistance"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "moduleResistance",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Module Resistance"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#moduleResistance"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "packResistance",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Pack Resistance"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#packResistance"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "testingTemperature",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Testing Temperature"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#testingTemperature"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "ratedPower",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Rated Power"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The power value is the rate at which energy is delivered or consumed."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "powerValue",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Power Value"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#powerValue"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "capabilityAt20SoC",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Capability at 20 SoC"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#capabilityAt20SoC"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "capabilityAt80SoC",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Capability at 80 SoC"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#capabilityAt80SoC"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "testingTemperature",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Testing Temperature"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#testingTemperature"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "ratedCapacity",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Rated Capacity"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Capacity value refers to the amount of electric charge that a battery can store and subsequently deliver when needed."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "capacityValue",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Capacity Value"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#capacityValue"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "capacityThresholdExhaustion",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Capacity Threshold Exhaustion"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#capacityThresholdExhaustion"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "testingTemperature",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Testing Temperature"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#testingTemperature"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "performanceTemperature",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Performance Temperature"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The battery temperatures."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "lowerTemperatureBoundary",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Lower Temperature Boundary"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#lowerTemperatureBoundary"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "upperTemperatureBoundary",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Upper Temperature Boundary"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#upperTemperatureBoundary"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "lifetime",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Lifetime"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Attributes for the lifetime evaluation of a battery."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "expectedYears",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Expected Years"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#expectedYears"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:integer",
                                    "value": "0",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "testReport",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Test Report"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The test reports refer to the testing conducted during the determination of the rated values of the battery."
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Test Report"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "The test reports refer to the testing conducted during the determination of the rated values of the battery."
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
                                                    "modelType": "Property"
                                                }
                                            ],
                                            "modelType": "SubmodelElementCollection"
                                        }
                                    ],
                                    "modelType": "SubmodelElementList"
                                },
                                {
                                    "idShort": "cycleLifeTesting",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Cycle Life Testing"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The cycle life testing of the battery."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "cycles",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Cycles"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#cycles"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:integer",
                                            "value": "0",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "testingTemperature",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Testing Temperature"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#testingTemperature"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "depthOfDischarge",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Depth of Discharge"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#depthOfDischarge"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "appliedChargeRate",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Applied Charge Rate"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#appliedChargeRate"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "appliedDischargeRate",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Applied Discharge Rate"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#appliedDischargeRate"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        }
                    ],
                    "modelType": "SubmodelElementCollection"
                },
                {
                    "idShort": "dynamicPerformance",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Dynamic Performance"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Dynamic performance values of the battery."
                        }
                    ],
                    "value": [
                        {
                            "idShort": "selfDischargingRate",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Self Discharging Rate"
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#selfDischargingRate"
                                    }
                                ]
                            },
                            "valueType": "xs:double",
                            "value": "0",
                            "modelType": "Property"
                        },
                        {
                            "idShort": "performanceDocument",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Performance Document"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The performance document lists information regarding the performance of the battery."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Performance Document"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The performance document lists information regarding the performance of the battery."
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
                        },
                        {
                            "idShort": "negativeEvents",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Negative Events"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Mandatory if applicable."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Negative Events"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Mandatory if applicable."
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
                        },
                        {
                            "idShort": "operatingEnvironment",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Operating Environment"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Mandatory if applicable."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Operating Environment"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Mandatory if applicable. "
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
                        },
                        {
                            "idShort": "stateOfCharge",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "State of Charge"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "State of Charge (SOC) refers to the amount of energy remaining in a battery at a given point in time"
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "dataRecordTime",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Data Record Time"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:dateTime",
                                    "value": "",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "percentValue",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Percent Value"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#percentValue"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:double",
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "fullCycles",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Full Cycles"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Full cycles include the cumulative and equivalent count of complete charge and discharge cycles experienced by the battery over its entire life."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "dataRecordTime",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Data Record Time"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:dateTime",
                                    "value": "",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "cycles",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Cycles"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#cycles"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:integer",
                                    "value": "0",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "dynamicPower",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Dynamic Power"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Values that describe dynamically captured power values."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "powerFade",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "PowerFade"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Power fade refers to a reduction in the power of the battery system over time expressed as a percentage in reference to the initial value."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "dataRecordTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Data Record Time"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "percentValue",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Percent Value"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#percentValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                },
                                {
                                    "idShort": "remainingPower",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Remaining Power"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The remaining power capability in the battery expressed in watt."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "dataRecordTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Data Record Time"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "powerValue",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Power Value"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#powerValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "dynamicCapacity",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Dynamic Capacity"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Values that describe dynamically captured capacity values."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "capacityFade",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Capacity Fade"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Capacity fade refers to a reduction in the capacity of the battery system over time expressed as a percentage in reference to the initial value."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "dataRecordTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Data Record Time"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "percentValue",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Percent Value"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#percentValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                },
                                {
                                    "idShort": "capacityThroughput",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Capacity Throughput"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Capacity throughput refers to the total amount of energy that a battery has delivered over its lifetime."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "dataRecordTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Data Record Time"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "capacityValue",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Capacity Value"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#capacityValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                },
                                {
                                    "idShort": "remainingCapacity",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Remaining Capacity"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The remaining capacity in the battery expressed in ampere hours."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "dataRecordTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Data Record Time"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "capacityValue",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Capacity Value"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#capacityValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "dynamicRoundTripEfficiency",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Dynamic Round Trip Efficiency"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Dynamic round trip efficiency values."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "roundTripEfficiencyFade",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Round Trip Efficiency Fade"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Round trip efficiency fade refers to a reduction in the round trip efficiency of the battery system over time expressed as a percentage in reference to the initial value."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "dataRecordTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Data Record Time"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "percentValue",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Percent Value"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#percentValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                },
                                {
                                    "idShort": "remainingRoundTripEfficiency",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Remaining Round Trip Efficiency"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The remaining round trip efficiency in the battery expressed as percentage."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "dataRecordTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Data Record Time"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "percentValue",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Percent Value"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#percentValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "dynamicInternalResistance",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Dynamic Internal Resistance"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Values that describe dynamically captured internal resistance values."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "resistanceIncrease",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Resistance Increase"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The increase as percentage in the battery resistance on the level of the pack, module (optional) and cell."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "packResistanceIncrease",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Pack Resistance Increase"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "Pack resistance increase refers to the overall electrical resistance within a battery pack."
                                                }
                                            ],
                                            "value": [
                                                {
                                                    "idShort": "dataRecordTime",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Data Record Time"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:dateTime",
                                                    "value": "",
                                                    "modelType": "Property"
                                                },
                                                {
                                                    "idShort": "percentValue",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Percent Value"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#percentValue"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:double",
                                                    "value": "0",
                                                    "modelType": "Property"
                                                }
                                            ],
                                            "modelType": "SubmodelElementCollection"
                                        },
                                        {
                                            "idShort": "moduleResistanceIncrease",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "module Resistance Increase"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "The module resistance increase includes the internal resistance of each cell within the module as well as the resistance introduced by interconnecting components such as busbars, connectors, and thermal management systems. The rise in the module resistance is expressed as a percentage in reference to the initial value."
                                                }
                                            ],
                                            "value": [
                                                {
                                                    "idShort": "dataRecordTime",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Data Record Time"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:dateTime",
                                                    "value": "",
                                                    "modelType": "Property"
                                                },
                                                {
                                                    "idShort": "percentValue",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Percent Value"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#percentValue"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:double",
                                                    "value": "0",
                                                    "modelType": "Property"
                                                }
                                            ],
                                            "modelType": "SubmodelElementCollection"
                                        },
                                        {
                                            "idShort": "cellResistanceIncrease",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Cell Resistance Increase"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "Cell resistance increase refers to the internal resistance of an individual battery cell."
                                                }
                                            ],
                                            "value": [
                                                {
                                                    "idShort": "dataRecordTime",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Data Record Time"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:dateTime",
                                                    "value": "",
                                                    "modelType": "Property"
                                                },
                                                {
                                                    "idShort": "percentValue",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Percent Value"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#percentValue"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:double",
                                                    "value": "0",
                                                    "modelType": "Property"
                                                }
                                            ],
                                            "modelType": "SubmodelElementCollection"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                },
                                {
                                    "idShort": "remainingResistance",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Remaining Resistance"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The remaining resistance in ohms in the battery on the level of the pack, module (optional) and cell."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "remainingPackResistance",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Remaining Pack Resistance"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "Pack resistance refers to the overall electrical resistance within a battery pack."
                                                }
                                            ],
                                            "value": [
                                                {
                                                    "idShort": "dataRecordTime",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Data Record Time"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:dateTime",
                                                    "value": "",
                                                    "modelType": "Property"
                                                },
                                                {
                                                    "idShort": "remainingResistanceValue",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Remaining Resistance Value"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#remainingResistanceValue"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:double",
                                                    "value": "0",
                                                    "modelType": "Property"
                                                }
                                            ],
                                            "modelType": "SubmodelElementCollection"
                                        },
                                        {
                                            "idShort": "remainingModuleResistance",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Remaining Module Resistance"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "Module resistance in ohms includes the internal resistance of each cell within the module as well as the resistance introduced by interconnecting components such as busbars, connectors, and thermal management systems."
                                                }
                                            ],
                                            "value": [
                                                {
                                                    "idShort": "dataRecordTime",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Data Record Time"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:dateTime",
                                                    "value": "",
                                                    "modelType": "Property"
                                                },
                                                {
                                                    "idShort": "remainingResistanceValue",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Remaining Resistance Value"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#remainingResistanceValue"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:double",
                                                    "value": "0",
                                                    "modelType": "Property"
                                                }
                                            ],
                                            "modelType": "SubmodelElementCollection"
                                        },
                                        {
                                            "idShort": "remainingCellResistance",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Remaining Cell Resistance"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "Cell resistance refers to the internal resistance of an individual battery cell expressed in ohms."
                                                }
                                            ],
                                            "value": [
                                                {
                                                    "idShort": "dataRecordTime",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Data Record Time"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:dateTime",
                                                    "value": "",
                                                    "modelType": "Property"
                                                },
                                                {
                                                    "idShort": "remainingResistanceValue",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Remaining Resistance Value"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#remainingResistanceValue"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:double",
                                                    "value": "0",
                                                    "modelType": "Property"
                                                }
                                            ],
                                            "modelType": "SubmodelElementCollection"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        },
                        {
                            "idShort": "dynamicEnergy",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Dynamic Energy"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Values that describe dynamically captured energy values."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "soce",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "SOCE"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The state of certified energy (SOCE) refers to the current measured or on-board usable battery energy (UBE) performance expressed as a percentage."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "dataRecordTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Data Record Time"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "percentValue",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Percent Value"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#percentValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                },
                                {
                                    "idShort": "remainingEnergy",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Remaining Energy"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "The remaining energy in the battery expressed in kilowatt-hours."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "dataRecordTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Data Record Time"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "energyValue",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Energy Value"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#energyValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                },
                                {
                                    "idShort": "energyThroughput",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Energy Throughput"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Energy throughput refers to the total amount of energy that passes through a system over a specific period. This measure encompasses both the energy input (during charging) and the energy output (during discharging)."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "dataRecordTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Data Record Time"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#dataRecordTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "energyValue",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Energy Value"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#energyValue"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "0",
                                            "modelType": "Property"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        }
                    ],
                    "modelType": "SubmodelElementCollection"
                }
            ],
            "modelType": "SubmodelElementCollection"
        },
        {
            "idShort": "conformity",
            "displayName": [
                {
                    "language": "en",
                    "text": "Conformity"
                }
            ],
            "description": [
                {
                    "language": "en",
                    "text": "Conformity documents for the battery passport."
                }
            ],
            "value": [
                {
                    "idShort": "declarationOfConformityId",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Declaration of Conformity Id"
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#declarationOfConformityId"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
                    "modelType": "Property"
                },
                {
                    "idShort": "declarationOfConformity",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Declaration of Conformity"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "The EU Declaration of Conformity is a document in which the manufacturer or their authorized representative declares that the battery complies with all relevant European Union product safety directives and regulations."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Declaration of Conformity"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The EU Declaration of Conformity is a document in which the manufacturer or their authorized representative declares that the battery complies with all relevant European Union product safety directives and regulations."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        }
                    ],
                    "modelType": "SubmodelElementList"
                },
                {
                    "idShort": "resultOfTestReport",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Result of Test Report"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "The result of tests reports refers to the results of various tests conducted with the battery, testing its life cycle, life span, c-rate and various other aspects."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Result of Test Report"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The result of tests reports refers to the results of various tests conducted with the battery, testing its life cycle, life span, c-rate and various other aspects."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        }
                    ],
                    "modelType": "SubmodelElementList"
                },
                {
                    "idShort": "thirdPartyAssurance",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Third Party Assurance"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "A summary report from third-parties, covering the verifications."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Third Party Assurance"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "A summary report from third-parties, covering the verifications."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        }
                    ],
                    "modelType": "SubmodelElementList"
                },
                {
                    "idShort": "dueDiligencePolicy",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Due Diligence Policy"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "A report containing the information concerning the due diligence policy, a set of procedures and guidelines the organization follows to thoroughly assess and evaluate the various aspects of the battery."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Due Diligence Policy"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "A report containing the information concerning the due diligence policy, a set of procedures and guidelines the organization follows to thoroughly assess and evaluate the various aspects of the battery."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
            "idShort": "safety",
            "displayName": [
                {
                    "language": "en",
                    "text": "Safety"
                }
            ],
            "description": [
                {
                    "language": "en",
                    "text": "Safety information on the battery. Included are the attributes safety measurements, meaning of labels, safe discharging and dismantling. These are all documents. Additionally information about usable extinguish agent can be provided."
                }
            ],
            "value": [
                {
                    "idShort": "usableExtinguishAgent",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Usable Extinguish Agent"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "The usable extinguish agents for the battery in case of a fire."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#ExtinguishAgentList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Usable Extinguish Agent"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The usable extinguish agents for the battery in case of a fire."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "usableExtinguishingMedia",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Usable Extinguishing Media"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#usableExtinguishingMedia"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "fireClass",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Fire Class"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#fireClass"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "agentDocument",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Agent Document"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Documentation about the extinguishing agent."
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                                            }
                                        ]
                                    },
                                    "orderRelevant": false,
                                    "typeValueListElement": "SubmodelElementCollection",
                                    "valueTypeListElement": "xs:anyURI",
                                    "value": [
                                        {
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Agent Document"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "Documentation about the extinguishing agent."
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                                            }
                                                        ]
                                                    },
                                                    "valueType": "xs:string",
                                                    "value": "",
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
                    "idShort": "safetyMeasures",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Safety Measures"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Safety instruction in the form of a documentation. "
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Safety Measures"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Safety instruction in the form of a documentation."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        }
                    ],
                    "modelType": "SubmodelElementList"
                },
                {
                    "idShort": "meaningOfLabels",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Meaning of Labels"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Documentation on the meaning of labels on a battery which provide information to help users understand the various symbols, markings, and information present on the batterys label."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Meaning of Labels"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Documentation on the meaning of labels on a battery which provide information to help users understand the various symbols, markings, and information present on the batterys label."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        }
                    ],
                    "modelType": "SubmodelElementList"
                },
                {
                    "idShort": "safeDischarging",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Safe Discharging"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Safe discharging documentation explaining for example the setting of a minimum voltage threshold for the battery. Discharging a battery below this threshold can lead to damage, reduced capacity, and safety hazards."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Safe Discharging"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Safe discharging documentation explaining for example the setting of a minimum voltage threshold for the battery. Discharging a battery below this threshold can lead to damage, reduced capacity, and safety hazards."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        }
                    ],
                    "modelType": "SubmodelElementList"
                },
                {
                    "idShort": "dismantling",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Dismantling"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Dismantling refers to the proper way of dismantling the battery itself. It refers to the process of taking apart the battery for various purposes, such as recycling, disposal, or examination of its components."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Dismantling"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Dismantling refers to the proper way of dismantling the battery itself. It refers to the process of taking apart the battery for various purposes, such as recycling, disposal, or examination of its components."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
                        }
                    ],
                    "modelType": "SubmodelElementList"
                },
                {
                    "idShort": "removalFromAppliance",
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Removal From Appliance"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Removal refers to the proper process of disassembling a battery from an appliance, typically for purposes such as repairs, replacements, or disposal."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#DocumentList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Removal From Appliance"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Removal refers to the proper process of disassembling a battery from an appliance, typically for purposes such as repairs, replacements, or disposal."
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#content"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#contentType"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#header"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#version"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#status"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#expirationDate"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#issueDate"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#economicOperatorId"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#passportIdentifier"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#predecessor"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#backupReference"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#registrationIdentifier"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#lastModification"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#placedOnMarket"
                            }
                        ]
                    },
                    "valueType": "xs:string",
                    "value": "",
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
                            "text": "One or more intended industry/industries of the product described by the digital product passport. If exchanged via Catena-X, automotive is a must choice included in the list."
                        }
                    ],
                    "semanticId": {
                        "type": "ExternalReference",
                        "keys": [
                            {
                                "type": "GlobalReference",
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#StringList"
                            }
                        ]
                    },
                    "orderRelevant": false,
                    "typeValueListElement": "SubmodelElementCollection",
                    "valueTypeListElement": "xs:anyURI",
                    "value": [
                        {
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#purpose"
                                    }
                                ]
                            },
                            "valueType": "xs:string",
                            "value": "",
                            "modelType": "Property"
                        }
                    ],
                    "modelType": "SubmodelElementList"
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
                                "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#applicable"
                            }
                        ]
                    },
                    "valueType": "xs:boolean",
                    "value": "",
                    "modelType": "Property"
                },
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#SourcesList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
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
                                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#sourcesIdentification"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "",
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
                                        "value": "urn:samm:io.catenax.generic.digital_product_passport:5.0.0#PartList"
                                    }
                                ]
                            },
                            "orderRelevant": false,
                            "typeValueListElement": "SubmodelElementCollection",
                            "valueTypeListElement": "xs:anyURI",
                            "value": [
                                {
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
                                            "value": "",
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
                                            "value": "",
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
        }
    ],
    "modelType": "Submodel"
}`
  ,
}