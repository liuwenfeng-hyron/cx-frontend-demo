export enum SubmodelTemplatePcf {
  submodel_pcf = `{
	"idShort": "Pcf001",
	"description": [
		{
			"language": "en",
			"text": "Product (Carbon) Footprint."
		}
	],
	"administration": {},
	"id": "https://www.nri.com/sm/00001",
	"kind": "Instance",
	"semanticId": {
		"type": "ExternalReference",
		"keys": [
			{
				"type": "GlobalReference",
				"value": "urn:samm:io.catenax.pcf:7.0.0#Pcf"
			}
		]
	},
	"supplementalSemanticIds": [
		{
			"type": "ExternalReference",
			"keys": [
				{
					"type": "GlobalReference",
					"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
				}
			]
		}
	],
	"submodelElements": [
		{
			"idShort": "id",
			"displayName": [
				{
					"language": "en",
					"text": "Product Footprint Identifier"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#id"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:string",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "specVersion",
			"displayName": [
				{
					"language": "en",
					"text": "Product Footprint Specification Version"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#specVersion"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:string",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "partialFullPcf",
			"displayName": [
				{
					"language": "en",
					"text": "Partial Or Full PCF (Product Carbon Footprint)"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#partialFullPcf"
					}
				]
			},
			"valueType": "xs:string",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "precedingPfIds",
			"displayName": [
				{
					"language": "en",
					"text": "Previous PCF (Product Carbon Footprint) Identifiers"
				}
			],
			"description": [
				{
					"language": "en",
					"text": "Optional: Set of preceding PCF (Product Carbon Footprint) identifiers without duplicates as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the WBCSD (World Business Council for Sustainable Development) Pathfinder framework and the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD/ PACT initiative. Declared as optional in WBCSD, needs to be covered by application."
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#PrecedingPfIdsCharacteristic"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"orderRelevant": false,
			"typeValueListElement": "SubmodelElementCollection",
			"value": [
				{
					"idShort": "precedingPfIds",
					"displayName": [
						{
							"language": "en",
							"text": "Previous PCF (Product Carbon Footprint) Identifiers"
						}
					],
					"description": [
						{
							"language": "en",
							"text": "Optional: Set of preceding PCF (Product Carbon Footprint) identifiers without duplicates as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the WBCSD (World Business Council for Sustainable Development) Pathfinder framework and the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD/ PACT initiative. Declared as optional in WBCSD, needs to be covered by application."
						}
					],
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"value": [
						{
							"idShort": "id",
							"displayName": [
								{
									"language": "en",
									"text": "Product Footprint Identifier"
								}
							],
							"semanticId": {
								"type": "ExternalReference",
								"keys": [
									{
										"type": "GlobalReference",
										"value": "urn:samm:io.catenax.pcf:7.0.0#id"
									}
								]
							},
							"supplementalSemanticIds": [
								{
									"type": "ExternalReference",
									"keys": [
										{
											"type": "GlobalReference",
											"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
										}
									]
								}
							],
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
			"idShort": "version",
			"displayName": [
				{
					"language": "en",
					"text": "Product (Carbon) Footprint Version"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#version"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:nonNegativeInteger",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "created",
			"displayName": [
				{
					"language": "en",
					"text": "Creation of the Product (Carbon) Footprint"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#created"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:dateTime",
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
						"value": "urn:samm:io.catenax.pcf:7.0.0#status"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:string",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "validityPeriodStart",
			"displayName": [
				{
					"language": "en",
					"text": "Validity Period Start"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#validityPeriodStart"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:dateTime",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "validityPeriodEnd",
			"displayName": [
				{
					"language": "en",
					"text": "Validity Period End"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#validityPeriodEnd"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:dateTime",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "comment",
			"displayName": [
				{
					"language": "en",
					"text": "Comment"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#comment"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:string",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "companyName",
			"displayName": [
				{
					"language": "en",
					"text": "Company Name"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#companyName"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:string",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "companyIds",
			"displayName": [
				{
					"language": "en",
					"text": "Company IDs"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#companyIds"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "urn:samm:io.catenax.shared.business_partner_number:2.0.0#bpnlProperty"
						}
					]
				}
			],
			"valueType": "xs:anyURI",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "productDescription",
			"displayName": [
				{
					"language": "en",
					"text": "Product Description"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#productDescription"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:string",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "productIds",
			"displayName": [
				{
					"language": "en",
					"text": "Product IDs"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#productIds"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "urn:samm:io.catenax.part_type_information:1.0.0#manufacturerPartId"
						}
					]
				}
			],
			"valueType": "xs:anyURI",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "productCategoryCpc",
			"displayName": [
				{
					"language": "en",
					"text": "Product Category"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#productCategoryCpc"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"valueType": "xs:string",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "productNameCompany",
			"displayName": [
				{
					"language": "en",
					"text": "Product Trade Name"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#productNameCompany"
					}
				]
			},
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "urn:samm:io.catenax.part_type_information:1.0.0#nameAtManufacturer"
						}
					]
				}
			],
			"valueType": "xs:string",
			"value": "",
			"modelType": "Property"
		},
		{
			"idShort": "pcf",
			"displayName": [
				{
					"language": "en",
					"text": "PCF (Product Carbon Footprint)"
				}
			],
			"description": [
				{
					"language": "en",
					"text": "A PCF (Product Carbon Footprint) represents the carbon footprint of a product and related data as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD (World Business Council for Sustainable Development)/ PACT initiative."
				}
			],
			"supplementalSemanticIds": [
				{
					"type": "ExternalReference",
					"keys": [
						{
							"type": "GlobalReference",
							"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
						}
					]
				}
			],
			"value": [
				{
					"idShort": "declaredUnit",
					"displayName": [
						{
							"language": "en",
							"text": "Unit of measurement"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#declaredUnit"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:string",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "unitaryProductAmount",
					"displayName": [
						{
							"language": "en",
							"text": "Unitary Product Amount"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#unitaryProductAmount"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:float",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "productMassPerDeclaredUnit",
					"displayName": [
						{
							"language": "en",
							"text": "Product Mass Per Declared Unit"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#productMassPerDeclaredUnit"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "exemptedEmissionsPercent",
					"displayName": [
						{
							"language": "en",
							"text": "Exempted Emissions Percent"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#exemptedEmissionsPercent"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "exemptedEmissionsDescription",
					"displayName": [
						{
							"language": "en",
							"text": "Exempted Emissions Description"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#exemptedEmissionsDescription"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:string",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "boundaryProcessesDescription",
					"displayName": [
						{
							"language": "en",
							"text": "Boundary Processes Description"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#boundaryProcessesDescription"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:string",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "geographyCountrySubdivision",
					"displayName": [
						{
							"language": "en",
							"text": "Geography Country Subdivision"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#geographyCountrySubdivision"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:string",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "geographyCountry",
					"displayName": [
						{
							"language": "en",
							"text": "Geography Country"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#geographyCountry"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:string",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "geographyRegionOrSubregion",
					"displayName": [
						{
							"language": "en",
							"text": "Region"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#geographyRegionOrSubregion"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:string",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "referencePeriodStart",
					"displayName": [
						{
							"language": "en",
							"text": "Reference Period Start"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#referencePeriodStart"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:dateTime",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "referencePeriodEnd",
					"displayName": [
						{
							"language": "en",
							"text": "Reference Period End"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#referencePeriodEnd"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:dateTime",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "crossSectoralStandardsUsed",
					"displayName": [
						{
							"language": "en",
							"text": "Cross Sectoral Standards Used"
						}
					],
					"description": [
						{
							"language": "en",
							"text": "Mandatory: Discloses the cross-sectoral standards applied for calculating or allocating GHG (Greenhouse Gas) emissions as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD (World Business Council for Sustainable Development)/ PACT initiative."
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#CrossSectoralStandardSet"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"orderRelevant": false,
					"typeValueListElement": "SubmodelElementCollection",
					"value": [
						{
							"idShort": "crossSectoralStandardsUsed",
							"displayName": [
								{
									"language": "en",
									"text": "Cross Sectoral Standards Used"
								}
							],
							"description": [
								{
									"language": "en",
									"text": "Mandatory: Discloses the cross-sectoral standards applied for calculating or allocating GHG (Greenhouse Gas) emissions as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD (World Business Council for Sustainable Development)/ PACT initiative."
								}
							],
							"supplementalSemanticIds": [
								{
									"type": "ExternalReference",
									"keys": [
										{
											"type": "GlobalReference",
											"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
										}
									]
								}
							],
							"value": [
								{
									"idShort": "crossSectoralStandard",
									"displayName": [
										{
											"language": "en",
											"text": "Cross Sectoral Standard"
										}
									],
									"semanticId": {
										"type": "ExternalReference",
										"keys": [
											{
												"type": "GlobalReference",
												"value": "urn:samm:io.catenax.pcf:7.0.0#crossSectoralStandard"
											}
										]
									},
									"supplementalSemanticIds": [
										{
											"type": "ExternalReference",
											"keys": [
												{
													"type": "GlobalReference",
													"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
												}
											]
										}
									],
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
					"idShort": "productOrSectorSpecificRules",
					"displayName": [
						{
							"language": "en",
							"text": "Product or Sector Specific Rules"
						}
					],
					"description": [
						{
							"language": "en",
							"text": "Mandatory: Product or sector specific rules applied for calculating or allocating GHG (Greenhouse Gas) emissions, e.g. PCRs (Product Category Rules), including operators or publishers and according rule names as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD (World Business Council for Sustainable Development)/ PACT initiative."
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#ProductOrSectorSpecificRuleSet"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"orderRelevant": false,
					"typeValueListElement": "SubmodelElementCollection",
					"value": [
						{
							"idShort": "productOrSectorSpecificRules",
							"displayName": [
								{
									"language": "en",
									"text": "Product or Sector Specific Rules"
								}
							],
							"description": [
								{
									"language": "en",
									"text": "Mandatory: Product or sector specific rules applied for calculating or allocating GHG (Greenhouse Gas) emissions, e.g. PCRs (Product Category Rules), including operators or publishers and according rule names as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD (World Business Council for Sustainable Development)/ PACT initiative."
								}
							],
							"supplementalSemanticIds": [
								{
									"type": "ExternalReference",
									"keys": [
										{
											"type": "GlobalReference",
											"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
										}
									]
								}
							],
							"value": [
								{
									"idShort": "operator",
									"displayName": [
										{
											"language": "en",
											"text": "Operator or Publisher of Sector Specific Rules"
										}
									],
									"semanticId": {
										"type": "ExternalReference",
										"keys": [
											{
												"type": "GlobalReference",
												"value": "urn:samm:io.catenax.pcf:7.0.0#operator"
											}
										]
									},
									"supplementalSemanticIds": [
										{
											"type": "ExternalReference",
											"keys": [
												{
													"type": "GlobalReference",
													"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
												}
											]
										}
									],
									"valueType": "xs:string",
									"value": "",
									"modelType": "Property"
								},
								{
									"idShort": "ruleNames",
									"displayName": [
										{
											"language": "en",
											"text": "Product or Sector Specific Rule Names"
										}
									],
									"description": [
										{
											"language": "en",
											"text": "Mandatory: Product-specific or sector-specific set of rules used for calculating or allocating GHG (Greenhouse Gas) emissions applied from the specified operator as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD (World Business Council for Sustainable Development)/ PACT initiative."
										}
									],
									"supplementalSemanticIds": [
										{
											"type": "ExternalReference",
											"keys": [
												{
													"type": "GlobalReference",
													"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
												}
											]
										}
									],
									"value": [
										{
											"idShort": "ruleName",
											"displayName": [
												{
													"language": "en",
													"text": "Rule Name"
												}
											],
											"semanticId": {
												"type": "ExternalReference",
												"keys": [
													{
														"type": "GlobalReference",
														"value": "urn:samm:io.catenax.pcf:7.0.0#ruleName"
													}
												]
											},
											"supplementalSemanticIds": [
												{
													"type": "ExternalReference",
													"keys": [
														{
															"type": "GlobalReference",
															"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
														}
													]
												}
											],
											"valueType": "xs:string",
											"value": "",
											"modelType": "Property"
										}
									],
									"modelType": "SubmodelElementCollection"
								},
								{
									"idShort": "otherOperatorName",
									"displayName": [
										{
											"language": "en",
											"text": "Other Operator Name"
										}
									],
									"semanticId": {
										"type": "ExternalReference",
										"keys": [
											{
												"type": "GlobalReference",
												"value": "urn:samm:io.catenax.pcf:7.0.0#otherOperatorName"
											}
										]
									},
									"supplementalSemanticIds": [
										{
											"type": "ExternalReference",
											"keys": [
												{
													"type": "GlobalReference",
													"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
												}
											]
										}
									],
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
					"idShort": "characterizationFactors",
					"displayName": [
						{
							"language": "en",
							"text": "Characterization Factors"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#characterizationFactors"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:string",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "allocationRulesDescription",
					"displayName": [
						{
							"language": "en",
							"text": "Allocation Rules Description"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#allocationRulesDescription"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:string",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "allocationWasteIncineration",
					"displayName": [
						{
							"language": "en",
							"text": "Allocation Waste Incineration"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#allocationWasteIncineration"
							}
						]
					},
					"valueType": "xs:string",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "primaryDataShare",
					"displayName": [
						{
							"language": "en",
							"text": "Primary Data Share"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#primaryDataShare"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "secondaryEmissionFactorSources",
					"displayName": [
						{
							"language": "en",
							"text": "Secondary Emission Factor Sources"
						}
					],
					"description": [
						{
							"language": "en",
							"text": "Mandatory: Emission factors used for the PCF (Product Carbon Footprint) calculation as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD (World Business Council for Sustainable Development)/ PACT initiative."
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#EmissionFactorDSSet"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"orderRelevant": false,
					"typeValueListElement": "SubmodelElementCollection",
					"value": [
						{
							"idShort": "secondaryEmissionFactorSources",
							"displayName": [
								{
									"language": "en",
									"text": "Secondary Emission Factor Sources"
								}
							],
							"description": [
								{
									"language": "en",
									"text": "Mandatory: Emission factors used for the PCF (Product Carbon Footprint) calculation as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD (World Business Council for Sustainable Development)/ PACT initiative."
								}
							],
							"supplementalSemanticIds": [
								{
									"type": "ExternalReference",
									"keys": [
										{
											"type": "GlobalReference",
											"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
										}
									]
								}
							],
							"value": [
								{
									"idShort": "emissionFactorDS",
									"displayName": [
										{
											"language": "en",
											"text": "Emission Factor Data Source"
										}
									],
									"semanticId": {
										"type": "ExternalReference",
										"keys": [
											{
												"type": "GlobalReference",
												"value": "urn:samm:io.catenax.pcf:7.0.0#emissionFactorDS"
											}
										]
									},
									"supplementalSemanticIds": [
										{
											"type": "ExternalReference",
											"keys": [
												{
													"type": "GlobalReference",
													"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
												}
											]
										}
									],
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
					"idShort": "dqi",
					"displayName": [
						{
							"language": "en",
							"text": "DQI (Data Quality Indicators)"
						}
					],
					"description": [
						{
							"language": "en",
							"text": "Mandatory starting 2025: Quantitative data quality indicators of a PCF (Product Carbon Footprint) as specified in the Catena-X PCF Rulebook (Version 3.0.0) in accordance with the technical specifications for PCF Data Exchange (Version 2.0.0) from the WBCSD (World Business Council for Sustainable Development)/ PACT initiative."
						}
					],
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"value": [
						{
							"idShort": "coveragePercent",
							"displayName": [
								{
									"language": "en",
									"text": "Coverage Percent"
								}
							],
							"semanticId": {
								"type": "ExternalReference",
								"keys": [
									{
										"type": "GlobalReference",
										"value": "urn:samm:io.catenax.pcf:7.0.0#coveragePercent"
									}
								]
							},
							"supplementalSemanticIds": [
								{
									"type": "ExternalReference",
									"keys": [
										{
											"type": "GlobalReference",
											"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
										}
									]
								}
							],
							"valueType": "xs:decimal",
							"value": "",
							"modelType": "Property"
						},
						{
							"idShort": "technologicalDQR",
							"displayName": [
								{
									"language": "en",
									"text": "Technological DQR (Data Quality Rating)"
								}
							],
							"semanticId": {
								"type": "ExternalReference",
								"keys": [
									{
										"type": "GlobalReference",
										"value": "urn:samm:io.catenax.pcf:7.0.0#technologicalDQR"
									}
								]
							},
							"supplementalSemanticIds": [
								{
									"type": "ExternalReference",
									"keys": [
										{
											"type": "GlobalReference",
											"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
										}
									]
								}
							],
							"valueType": "xs:decimal",
							"value": "",
							"modelType": "Property"
						},
						{
							"idShort": "temporalDQR",
							"displayName": [
								{
									"language": "en",
									"text": "Temporal DQR (Data Quality Rating)"
								}
							],
							"semanticId": {
								"type": "ExternalReference",
								"keys": [
									{
										"type": "GlobalReference",
										"value": "urn:samm:io.catenax.pcf:7.0.0#temporalDQR"
									}
								]
							},
							"supplementalSemanticIds": [
								{
									"type": "ExternalReference",
									"keys": [
										{
											"type": "GlobalReference",
											"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
										}
									]
								}
							],
							"valueType": "xs:decimal",
							"value": "",
							"modelType": "Property"
						},
						{
							"idShort": "geographicalDQR",
							"displayName": [
								{
									"language": "en",
									"text": "Geographical DQR (Data Quality Rating)"
								}
							],
							"semanticId": {
								"type": "ExternalReference",
								"keys": [
									{
										"type": "GlobalReference",
										"value": "urn:samm:io.catenax.pcf:7.0.0#geographicalDQR"
									}
								]
							},
							"supplementalSemanticIds": [
								{
									"type": "ExternalReference",
									"keys": [
										{
											"type": "GlobalReference",
											"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
										}
									]
								}
							],
							"valueType": "xs:decimal",
							"value": "",
							"modelType": "Property"
						},
						{
							"idShort": "completenessDQR",
							"displayName": [
								{
									"language": "en",
									"text": "Completeness DQR (Data Quality Rating)"
								}
							],
							"semanticId": {
								"type": "ExternalReference",
								"keys": [
									{
										"type": "GlobalReference",
										"value": "urn:samm:io.catenax.pcf:7.0.0#completenessDQR"
									}
								]
							},
							"supplementalSemanticIds": [
								{
									"type": "ExternalReference",
									"keys": [
										{
											"type": "GlobalReference",
											"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
										}
									]
								}
							],
							"valueType": "xs:decimal",
							"value": "",
							"modelType": "Property"
						},
						{
							"idShort": "reliabilityDQR",
							"displayName": [
								{
									"language": "en",
									"text": "Reliability DQR (Data Quality Rating)"
								}
							],
							"semanticId": {
								"type": "ExternalReference",
								"keys": [
									{
										"type": "GlobalReference",
										"value": "urn:samm:io.catenax.pcf:7.0.0#reliabilityDQR"
									}
								]
							},
							"supplementalSemanticIds": [
								{
									"type": "ExternalReference",
									"keys": [
										{
											"type": "GlobalReference",
											"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
										}
									]
								}
							],
							"valueType": "xs:decimal",
							"value": "",
							"modelType": "Property"
						}
					],
					"modelType": "SubmodelElementCollection"
				},
				{
					"idShort": "packagingEmissionsIncluded",
					"displayName": [
						{
							"language": "en",
							"text": "Packaging Emissions Included"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#packagingEmissionsIncluded"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:boolean",
					"value": "true",
					"modelType": "Property"
				},
				{
					"idShort": "pcfExcludingBiogenic",
					"displayName": [
						{
							"language": "en",
							"text": "PCF (Product Carbon Footprint) Excluding Biogenic"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#pcfExcludingBiogenic"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "pcfIncludingBiogenic",
					"displayName": [
						{
							"language": "en",
							"text": "PCF (Product Carbon Footprint) Including Biogenic"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#pcfIncludingBiogenic"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "fossilGhgEmissions",
					"displayName": [
						{
							"language": "en",
							"text": "Fossil Emissions"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#fossilGhgEmissions"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "biogenicCarbonEmissionsOtherThanCO2",
					"displayName": [
						{
							"language": "en",
							"text": "Biogenic Carbon Emissions Other Than CO2"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#biogenicCarbonEmissionsOtherThanCO2"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "biogenicCarbonWithdrawal",
					"displayName": [
						{
							"language": "en",
							"text": "Biogenic Carbon Withdrawal"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#biogenicCarbonWithdrawal"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20231207/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "dlucGhgEmissions",
					"displayName": [
						{
							"language": "en",
							"text": "dLUC (direct land use change) GHG (Greenhouse Gas) Emissions"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#dlucGhgEmissions"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "luGhgEmissions",
					"displayName": [
						{
							"language": "en",
							"text": "LU (Land Use) GHG (Greenhouse Gas) Emissions"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#luGhgEmissions"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "aircraftGhgEmissions",
					"displayName": [
						{
							"language": "en",
							"text": "Aircraft GHG Emissions"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#aircraftGhgEmissions"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "packagingGhgEmissions",
					"displayName": [
						{
							"language": "en",
							"text": "Packaging GHG (Greenhouse Gas) Emissions"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#packagingGhgEmissions"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "distributionStagePcfExcludingBiogenic",
					"displayName": [
						{
							"language": "en",
							"text": "Distribution Stage PCF (Product Carbon Footprint) Excluding Biogenic"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#distributionStagePcfExcludingBiogenic"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "distributionStagePcfIncludingBiogenic",
					"displayName": [
						{
							"language": "en",
							"text": "Distribution Stage PCF (Product Carbon Footprint) Including Biogenic"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#distributionStagePcfIncludingBiogenic"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "distributionStageFossilGhgEmissions",
					"displayName": [
						{
							"language": "en",
							"text": "Distribution Stage Fossil GHG (Greenhouse Gas) Emissions"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#distributionStageFossilGhgEmissions"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "distributionStageBiogenicCarbonEmissionsOtherThanCO2",
					"displayName": [
						{
							"language": "en",
							"text": "Distribution Stage Biogenic Carbon Emissions Other Than CO2"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#distributionStageBiogenicCarbonEmissionsOtherThanCO2"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "distributionStageBiogenicCarbonWithdrawal",
					"displayName": [
						{
							"language": "en",
							"text": "Distribution Stage Biogenic Carbon Withdrawal"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#distributionStageBiogenicCarbonWithdrawal"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "distributionStageDlucGhgEmissions",
					"displayName": [
						{
							"language": "en",
							"text": "Distribution Stage dLUC (direct land use change) GHG (Greenhouse Gas) Emissions"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#distributionStageDlucGhgEmissions"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "distributionStageLuGhgEmissions",
					"displayName": [
						{
							"language": "en",
							"text": "Distribution Stage LU (Land Use) GHG (Greenhouse Gas) Emissions"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#distributionStageLuGhgEmissions"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "carbonContentTotal",
					"displayName": [
						{
							"language": "en",
							"text": "Carbon Content Total"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#carbonContentTotal"
							}
						]
					},
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "fossilCarbonContent",
					"displayName": [
						{
							"language": "en",
							"text": "Fossil Carbon Content"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#fossilCarbonContent"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20231207/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "biogenicCarbonContent",
					"displayName": [
						{
							"language": "en",
							"text": "Biogenic Carbon Content"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#biogenicCarbonContent"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20231207/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				},
				{
					"idShort": "distributionStageAircraftGhgEmissions",
					"displayName": [
						{
							"language": "en",
							"text": "Distribution Stage Aircraft GHG Emissions"
						}
					],
					"semanticId": {
						"type": "ExternalReference",
						"keys": [
							{
								"type": "GlobalReference",
								"value": "urn:samm:io.catenax.pcf:7.0.0#distributionStageAircraftGhgEmissions"
							}
						]
					},
					"supplementalSemanticIds": [
						{
							"type": "ExternalReference",
							"keys": [
								{
									"type": "GlobalReference",
									"value": "https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221/"
								}
							]
						}
					],
					"valueType": "xs:decimal",
					"value": "",
					"modelType": "Property"
				}
			],
			"modelType": "SubmodelElementCollection"
		},
		{
			"idShort": "pcfLegalStatement",
			"displayName": [
				{
					"language": "en",
					"text": "PCF (Product Carbon Footprint) Legal Statement"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.pcf:7.0.0#pcfLegalStatement"
					}
				]
			},
			"valueType": "xs:string",
			"value": "",
			"modelType": "Property"
		}
	],
	"modelType": "Submodel"
}
  `
  ,
}