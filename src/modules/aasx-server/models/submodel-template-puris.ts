export enum SubmodelTemplatePuris {
  submodel_ItemStock = `{
	"idShort": "ItemStock001",
	"description": [
		{
			"language": "en",
			"text": "This aspect represents the latest quantities of a partner's items that are on stock. The stock represent the build-to-order (BTO) stocks already available."
		}
	],
	"administration": {},
	"id": "https://www.nri.com/sm/ItemStock001",
	"kind": "Instance",
	"semanticId": {
		"type": "ExternalReference",
		"keys": [
			{
				"type": "GlobalReference",
				"value": "urn:samm:io.catenax.item_stock:2.0.0#ItemStock"
			}
		]
	},
	"submodelElements": [
		{
			"idShort": "materialGlobalAssetId",
			"displayName": [
				{
					"language": "en",
					"text": "UUID of the Part Type Twin"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.item_stock:2.0.0#materialGlobalAssetId"
					}
				]
			},
			"valueType": "xs:string",
			"value": "860fb504-b884-4009-9313-c6fb6cdc776b",
			"modelType": "Property"
		},
		{
			"idShort": "direction",
			"displayName": [
				{
					"language": "en",
					"text": "Direction of Stock"
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.item_stock:2.0.0#direction"
					}
				]
			},
			"valueType": "xs:string",
			"value": "OUTBOUND",
			"modelType": "Property"
		},
		{
			"idShort": "positions",
			"displayName": [
				{
					"language": "en",
					"text": "Positions"
				}
			],
			"description": [
				{
					"language": "en",
					"text": "In case of a supplier's stocks for a customer, positions MUST be empty."
				}
			],
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "urn:samm:io.catenax.item_stock:2.0.0#PositionsSet"
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
							"text": "Positions"
						}
					],
					"description": [
						{
							"language": "en",
							"text": "In case of a supplier's stocks for a customer, positions MUST be empty."
						}
					],
					"value": [
						{
							"idShort": "allocatedStocks",
							"displayName": [
								{
									"language": "en",
									"text": "Allocated Stocks"
								}
							],
							"description": [
								{
									"language": "en",
									"text": "Stocks that have been already allocated to the customer or delivered by a specific supplier. An allocated stock always refers to a stock location."
								}
							],
							"semanticId": {
								"type": "ExternalReference",
								"keys": [
									{
										"type": "GlobalReference",
										"value": "urn:samm:io.catenax.item_stock:2.0.0#AllocatedStockSet"
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
											"text": "Allocated Stocks"
										}
									],
									"description": [
										{
											"language": "en",
											"text": "Stocks that have been already allocated to the customer or delivered by a specific supplier. An allocated stock always refers to a stock location."
										}
									],
									"value": [
										{
											"idShort": "stockLocationBPNS",
											"displayName": [
												{
													"language": "en",
													"text": "BPNS of Stock Location"
												}
											],
											"semanticId": {
												"type": "ExternalReference",
												"keys": [
													{
														"type": "GlobalReference",
														"value": "urn:samm:io.catenax.item_stock:2.0.0#stockLocationBPNS"
													}
												]
											},
											"supplementalSemanticIds": [
												{
													"type": "ExternalReference",
													"keys": [
														{
															"type": "GlobalReference",
															"value": "https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/5_BPDM/CX_-_0010_BUSINESS_PARTNER_NUMBER_PlatformCapabilityBPDM_v_1.0.1.pdf"
														}
													]
												}
											],
											"valueType": "xs:string",
											"value": "BPNS0000000MOUR8",
											"modelType": "Property"
										},
										{
											"idShort": "isBlocked",
											"displayName": [
												{
													"language": "en",
													"text": "Is Blocked"
												}
											],
											"semanticId": {
												"type": "ExternalReference",
												"keys": [
													{
														"type": "GlobalReference",
														"value": "urn:samm:io.catenax.item_stock:2.0.0#isBlocked"
													}
												]
											},
											"valueType": "xs:boolean",
											"value": "false",
											"modelType": "Property"
										},
										{
											"idShort": "stockLocationBPNA",
											"displayName": [
												{
													"language": "en",
													"text": "BPNA of Stock Location"
												}
											],
											"semanticId": {
												"type": "ExternalReference",
												"keys": [
													{
														"type": "GlobalReference",
														"value": "urn:samm:io.catenax.item_stock:2.0.0#stockLocationBPNA"
													}
												]
											},
											"supplementalSemanticIds": [
												{
													"type": "ExternalReference",
													"keys": [
														{
															"type": "GlobalReference",
															"value": "https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/5_BPDM/CX_-_0010_BUSINESS_PARTNER_NUMBER_PlatformCapabilityBPDM_v_1.0.1.pdf"
														}
													]
												}
											],
											"valueType": "xs:string",
											"value": "BPNA0000000MOUR8",
											"modelType": "Property"
										},
										{
											"idShort": "lastUpdatedOnDateTime",
											"displayName": [
												{
													"language": "en",
													"text": "Lasted Updated on Date"
												}
											],
											"semanticId": {
												"type": "ExternalReference",
												"keys": [
													{
														"type": "GlobalReference",
														"value": "urn:samm:io.catenax.item_stock:2.0.0#lastUpdatedOnDateTime"
													}
												]
											},
											"valueType": "xs:dateTime",
											"value": "2025-11-17T00:20",
											"modelType": "Property"
										},
										{
											"idShort": "quantityOnAllocatedStock",
											"displayName": [
												{
													"language": "en",
													"text": "Quantity on Allocated Stock"
												}
											],
											"description": [
												{
													"language": "en",
													"text": "This is the quantity of the material on stock. the stock may refer to an order position of a customer."
												}
											],
											"value": [
												{
													"idShort": "unit",
													"displayName": [
														{
															"language": "en",
															"text": "unit"
														}
													],
													"semanticId": {
														"type": "ExternalReference",
														"keys": [
															{
																"type": "GlobalReference",
																"value": "urn:samm:io.catenax.shared.quantity:2.0.0#itemUnit"
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
													"value": "unit:piece",
													"modelType": "Property"
												},
												{
													"idShort": "value",
													"displayName": [
														{
															"language": "en",
															"text": "value"
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
													"value": "160.6",
													"modelType": "Property"
												}
											],
											"modelType": "SubmodelElementCollection"
										}
									],
									"modelType": "SubmodelElementCollection"
								}
							],
							"modelType": "SubmodelElementList"
						},
						{
							"idShort": "orderPositionReference",
							"displayName": [
								{
									"language": "en",
									"text": "Order Position Reference"
								}
							],
							"description": [
								{
									"language": "en",
									"text": "The order position reference contains information to identify a position within an order."
								}
							],
							"value": [
								{
									"idShort": "supplierOrderId",
									"displayName": [
										{
											"language": "en",
											"text": "Supplier Order ID"
										}
									],
									"semanticId": {
										"type": "ExternalReference",
										"keys": [
											{
												"type": "GlobalReference",
												"value": "urn:samm:io.catenax.item_stock:2.0.0#supplierOrderId"
											}
										]
									},
									"valueType": "xs:string",
									"value": "M-Nbr-4712",
									"modelType": "Property"
								},
								{
									"idShort": "customerOrderId",
									"displayName": [
										{
											"language": "en",
											"text": "Customer Order ID"
										}
									],
									"semanticId": {
										"type": "ExternalReference",
										"keys": [
											{
												"type": "GlobalReference",
												"value": "urn:samm:io.catenax.item_stock:2.0.0#customerOrderId"
											}
										]
									},
									"valueType": "xs:string",
									"value": "C-Nbr-4712",
									"modelType": "Property"
								},
								{
									"idShort": "customerOrderPositionId",
									"displayName": [
										{
											"language": "en",
											"text": "Customer Order Position ID"
										}
									],
									"semanticId": {
										"type": "ExternalReference",
										"keys": [
											{
												"type": "GlobalReference",
												"value": "urn:samm:io.catenax.item_stock:2.0.0#customerOrderPositionId"
											}
										]
									},
									"valueType": "xs:string",
									"value": "PositionId-01",
									"modelType": "Property"
								}
							],
							"modelType": "SubmodelElementCollection"
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
  submodel_Delivery = `{
    "idShort": "Delivery001",
    "description": [
        {
            "language": "en",
            "text": "This aspect represents the estimated and actual delivery information of one specific item, which is being shipped from the supplier to the customer."
        }
    ],
    "administration": {},
    "id": "https://www.nri.com/sm/Delivery001",
    "kind": "Instance",
    "semanticId": {
        "type": "ExternalReference",
        "keys": [
            {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.delivery_information:2.0.0#DeliveryInformation"
            }
        ]
    },
    "submodelElements": [
        {
            "idShort": "materialGlobalAssetId",
            "displayName": [
                {
                    "language": "en",
                    "text": "UUID of the Part Type Twin"
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.delivery_information:2.0.0#materialGlobalAssetId"
                    }
                ]
            },
            "valueType": "xs:string",
            "value": "860fb504-b884-4009-9313-c6fb6cdc776b",
            "modelType": "Property"
        },
        {
            "idShort": "positions",
            "displayName": [
                {
                    "language": "en",
                    "text": "Positions"
                }
            ],
            "description": [
                {
                    "language": "en",
                    "text": "The positions refer to positions within an order of the given item (see material number supplier, material number customer and material global asset ID) for which the delivery information is exchanged. The positions can be differentiated by the order position reference. If no order position reference is given, then there is only one position containing all estimated deliveries of the item."
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.delivery_information:2.0.0#PositionsSet"
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
                            "text": "Positions"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "The positions refer to positions within an order of the given item (see material number supplier, material number customer and material global asset ID) for which the delivery information is exchanged. The positions can be differentiated by the order position reference. If no order position reference is given, then there is only one position containing all estimated deliveries of the item."
                        }
                    ],
                    "value": [
                        {
                            "idShort": "deliveries",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Estimated or actual delivery from supplier to a customer"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Deliveries are referred to the deliveries of an order position. One order position can be split into multiple deliveries. One delivery can have a different origin and destination than another delivery."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.delivery_information:2.0.0#DeliverySet"
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
                                            "text": "Estimated or actual delivery from supplier to a customer"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Deliveries are referred to the deliveries of an order position. One order position can be split into multiple deliveries. One delivery can have a different origin and destination than another delivery."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "lastUpdatedOnDateTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Lasted Updated on Date"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.delivery_information:2.0.0#lastUpdatedOnDateTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "2025-11-12T09:29",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "trackingNumber",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Tracking Number"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.delivery_information:2.0.0#trackingNumber"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:string",
                                            "value": "1Z9829WDE02130",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "incoterm",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Incoterm"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.delivery_information:2.0.0#incoterm"
                                                    }
                                                ]
                                            },
                                            "supplementalSemanticIds": [
                                                {
                                                    "type": "ExternalReference",
                                                    "keys": [
                                                        {
                                                            "type": "GlobalReference",
                                                            "value": "https://iccwbo.org/business-solutions/intoterms-rules/"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "valueType": "xs:string",
                                            "value": "DPU",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "transitEvents",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Date of departure or arrival"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "Transit dates provide date and time of departure and date and time of arrival for a specific delivery. Date and time are set according to the timezone."
                                                }
                                            ],
                                            "orderRelevant": true,
                                            "typeValueListElement": "SubmodelElementCollection",
                                            "valueTypeListElement": "xs:anyURI",
                                            "value": [
                                                {
                                                    "value": [
                                                        {
                                                            "idShort": "dateTimeOfEvent",
                                                            "valueType": "xs:dateTime",
                                                            "value": "2025-11-15T09:20",
                                                            "modelType": "Property"
                                                        },
                                                        {
                                                            "idShort": "eventType",
                                                            "valueType": "xs:string",
                                                            "value": "estimated-departure",
                                                            "modelType": "Property"
                                                        }
                                                    ],
                                                    "modelType": "SubmodelElementCollection"
                                                },
                                                {
                                                    "value": [
                                                        {
                                                            "idShort": "dateTimeOfEvent",
                                                            "valueType": "xs:dateTime",
                                                            "value": "2025-11-17T09:50",
                                                            "modelType": "Property"
                                                        },
                                                        {
                                                            "idShort": "eventType",
                                                            "valueType": "xs:string",
                                                            "value": "estimated-arrival",
                                                            "modelType": "Property"
                                                        }
                                                    ],
                                                    "modelType": "SubmodelElementCollection"
                                                }
                                            ],
                                            "modelType": "SubmodelElementList"
                                        },
                                        {
                                            "idShort": "deliveryQuantity",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Delivery Quantity"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "Amount of items of a delivery between a supplier and a customer."
                                                }
                                            ],
                                            "value": [
                                                {
                                                    "idShort": "unit",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "unit"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.shared.quantity:2.0.0#itemUnit"
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
                                                    "value": "unit:piece",
                                                    "modelType": "Property"
                                                },
                                                {
                                                    "idShort": "value",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "value"
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
                                                    "value": "500",
                                                    "modelType": "Property"
                                                }
                                            ],
                                            "modelType": "SubmodelElementCollection"
                                        },
                                        {
                                            "idShort": "transitLocations",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Transit Locations"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "Physical locations of the origin and destination."
                                                }
                                            ],
                                            "value": [
                                                {
                                                    "idShort": "origin",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Origin"
                                                        }
                                                    ],
                                                    "description": [
                                                        {
                                                            "language": "en",
                                                            "text": "Origin refers to the starting point or the location from which the items are being shipped to the customer. "
                                                        }
                                                    ],
                                                    "value": [
                                                        {
                                                            "idShort": "bpnaProperty",
                                                            "displayName": [
                                                                {
                                                                    "language": "en",
                                                                    "text": "Business Partner Number Address Property"
                                                                }
                                                            ],
                                                            "semanticId": {
                                                                "type": "ExternalReference",
                                                                "keys": [
                                                                    {
                                                                        "type": "GlobalReference",
                                                                        "value": "urn:samm:io.catenax.shared.business_partner_number:2.0.0#bpnaProperty"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "BPNA0000000MOUR8",
                                                            "modelType": "Property"
                                                        },
                                                        {
                                                            "idShort": "bpnsProperty",
                                                            "displayName": [
                                                                {
                                                                    "language": "en",
                                                                    "text": "Business Partner Number Site Property"
                                                                }
                                                            ],
                                                            "semanticId": {
                                                                "type": "ExternalReference",
                                                                "keys": [
                                                                    {
                                                                        "type": "GlobalReference",
                                                                        "value": "urn:samm:io.catenax.shared.business_partner_number:2.0.0#bpnsProperty"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "BPNS0000000MOUR8",
                                                            "modelType": "Property"
                                                        }
                                                    ],
                                                    "modelType": "SubmodelElementCollection"
                                                },
                                                {
                                                    "idShort": "destination",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Destination"
                                                        }
                                                    ],
                                                    "description": [
                                                        {
                                                            "language": "en",
                                                            "text": "Destination refers to the final endpoint or intended location where the items are meant to arrive (i.e. customer factory)."
                                                        }
                                                    ],
                                                    "value": [
                                                        {
                                                            "idShort": "bpnaProperty",
                                                            "displayName": [
                                                                {
                                                                    "language": "en",
                                                                    "text": "Business Partner Number Address Property"
                                                                }
                                                            ],
                                                            "semanticId": {
                                                                "type": "ExternalReference",
                                                                "keys": [
                                                                    {
                                                                        "type": "GlobalReference",
                                                                        "value": "urn:samm:io.catenax.shared.business_partner_number:2.0.0#bpnaProperty"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "BPNA0000000L3MA9",
                                                            "modelType": "Property"
                                                        },
                                                        {
                                                            "idShort": "bpnsProperty",
                                                            "displayName": [
                                                                {
                                                                    "language": "en",
                                                                    "text": "Business Partner Number Site Property"
                                                                }
                                                            ],
                                                            "semanticId": {
                                                                "type": "ExternalReference",
                                                                "keys": [
                                                                    {
                                                                        "type": "GlobalReference",
                                                                        "value": "urn:samm:io.catenax.shared.business_partner_number:2.0.0#bpnsProperty"
                                                                    }
                                                                ]
                                                            },
                                                            "valueType": "xs:string",
                                                            "value": "BPNS0000000L3MA9",
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
                            "modelType": "SubmodelElementList"
                        },
                        {
                            "idShort": "orderPositionReference",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Order Position Reference"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The order position reference contains information to identify a position within an order."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "supplierOrderId",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Supplier Order ID"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.delivery_information:2.0.0#supplierOrderId"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "M-Nbr-4711",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "customerOrderId",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Customer Order ID"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.delivery_information:2.0.0#customerOrderId"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "C-Nbr-4711",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "customerOrderPositionId",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Customer Order Position ID"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.delivery_information:2.0.0#customerOrderPositionId"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "PositionId-01",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
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
  submodel_DaysOfSupply = `{
    "idShort": "DaysOfSupply001",
    "description": [
        {
            "language": "en",
            "text": "Days of Supply refers to the amount of days where item stock is sufficient for the demand. The incoming deliveries are not considered in the main days-of-supply-equation, but they can still be included in the projection of days-of-supply for the future days."
        }
    ],
    "administration": {},
    "id": "https://www.nri.com/sm/DaysOfSupply/0001",
    "kind": "Instance",
    "semanticId": {
        "type": "ExternalReference",
        "keys": [
            {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.days_of_supply:2.0.0#DaysOfSupply"
            }
        ]
    },
    "submodelElements": [
        {
            "idShort": "materialGlobalAssetId",
            "displayName": [
                {
                    "language": "en",
                    "text": "UUID of the Part Type Twin"
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.days_of_supply:2.0.0#materialGlobalAssetId"
                    }
                ]
            },
            "valueType": "xs:string",
            "value": "860fb504-b884-4009-9313-c6fb6cdc776b",
            "modelType": "Property"
        },
        {
            "idShort": "direction",
            "displayName": [
                {
                    "language": "en",
                    "text": "Direction of Stock"
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.days_of_supply:2.0.0#direction"
                    }
                ]
            },
            "valueType": "xs:string",
            "value": "INBOUND",
            "modelType": "Property"
        },
        {
            "idShort": "allocatedDaysOfSupply",
            "displayName": [
                {
                    "language": "en",
                    "text": "Allocated Days of Supply"
                }
            ],
            "description": [
                {
                    "language": "en",
                    "text": "Days of supply that have been already allocated to the customer. "
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.days_of_supply:2.0.0#AllocatedDaysOfSupplySet"
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
                            "text": "Allocated Days of Supply"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "Days of supply that have been already allocated to the customer. "
                        }
                    ],
                    "value": [
                        {
                            "idShort": "stockLocationBPNS",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "BPNS of Stock Location"
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.days_of_supply:2.0.0#stockLocationBPNS"
                                    }
                                ]
                            },
                            "supplementalSemanticIds": [
                                {
                                    "type": "ExternalReference",
                                    "keys": [
                                        {
                                            "type": "GlobalReference",
                                            "value": "https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/5_BPDM/CX_-_0010_BUSINESS_PARTNER_NUMBER_PlatformCapabilityBPDM_v_1.0.1.pdf"
                                        }
                                    ]
                                }
                            ],
                            "valueType": "xs:string",
                            "value": "BPNS0000000MOUR8",
                            "modelType": "Property"
                        },
                        {
                            "idShort": "stockLocationBPNA",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "BPNA of Stock Location"
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.days_of_supply:2.0.0#stockLocationBPNA"
                                    }
                                ]
                            },
                            "supplementalSemanticIds": [
                                {
                                    "type": "ExternalReference",
                                    "keys": [
                                        {
                                            "type": "GlobalReference",
                                            "value": "https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/5_BPDM/CX_-_0010_BUSINESS_PARTNER_NUMBER_PlatformCapabilityBPDM_v_1.0.1.pdf"
                                        }
                                    ]
                                }
                            ],
                            "valueType": "xs:string",
                            "value": "BPNA0000000MOUR8",
                            "modelType": "Property"
                        },
                        {
                            "idShort": "lastUpdatedOnDateTime",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Lasted Updated on Date"
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.days_of_supply:2.0.0#lastUpdatedOnDateTime"
                                    }
                                ]
                            },
                            "valueType": "xs:dateTime",
                            "value": "2025-11-08T11:16",
                            "modelType": "Property"
                        },
                        {
                            "idShort": "amountOfAllocatedDaysOfSupply",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Amount of Allocated Days Of Supply"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Amount of Days of supply of a given allocated item stock in a given location."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.days_of_supply:2.0.0#QuantityCharacteristic"
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
                                            "text": "Amount of Allocated Days Of Supply"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Amount of Days of supply of a given allocated item stock in a given location."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "date",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Date of Days of Supply"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.days_of_supply:2.0.0#date"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "2025-11-08T15:16",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "daysOfSupply",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Days of Supply"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.days_of_supply:2.0.0#daysOfSupply"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:double",
                                            "value": "6",
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
  submodel_PlannedProductionOutput= `{
    "idShort": "PlannedProductionOutput001",
    "description": [
        {
            "language": "en",
            "text": "This aspect represents the remaining and planned production outputs of a supplier allocated to a customer. An allocated planned production output is described by a quantity, the site of the supplier and the date with time at which a production of a certain material for a certain customer is planned to be finished. The allocated planned production outputs may be linked to customer order position they have been scheduled for."
        }
    ],
    "administration": {},
    "id": "https://www.nri.com/sm/PlannedProductionOutput001",
    "kind": "Instance",
    "semanticId": {
        "type": "ExternalReference",
        "keys": [
            {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.planned_production_output:2.0.0#PlannedProductionOutput"
            }
        ]
    },
    "submodelElements": [
        {
            "idShort": "materialGlobalAssetId",
            "displayName": [
                {
                    "language": "en",
                    "text": "UUID of the Part Type Twin"
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.planned_production_output:2.0.0#materialGlobalAssetId"
                    }
                ]
            },
            "valueType": "xs:string",
            "value": "860fb504-b884-4009-9313-c6fb6cdc776b",
            "modelType": "Property"
        },
        {
            "idShort": "positions",
            "displayName": [
                {
                    "language": "en",
                    "text": "Positions"
                }
            ],
            "description": [
                {
                    "language": "en",
                    "text": "The positions refer to positions within an order of the given product (see material number supplier, materialNumber customer and material global Asset Id) for which the production outputs are transferred. The positions can be differentiated by the order position reference. If no order position reference is given, then there is only one position containing all planned production outputs of the product."
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.planned_production_output:2.0.0#PositionsSet"
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
                            "text": "Positions"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "The positions refer to positions within an order of the given product (see material number supplier, materialNumber customer and material global Asset Id) for which the production outputs are transferred. The positions can be differentiated by the order position reference. If no order position reference is given, then there is only one position containing all planned production outputs of the product."
                        }
                    ],
                    "value": [
                        {
                            "idShort": "allocatedPlannedProductionOutputs",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Planned and Allocated Production Outputs"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "Planned Production Outputs already allocated to the customer."
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.planned_production_output:2.0.0#AllocatedPlannedProductionOutputSet"
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
                                            "text": "Planned and Allocated Production Outputs"
                                        }
                                    ],
                                    "description": [
                                        {
                                            "language": "en",
                                            "text": "Planned Production Outputs already allocated to the customer."
                                        }
                                    ],
                                    "value": [
                                        {
                                            "idShort": "productionSiteBpns",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "BPNS of Suppliers Production Site"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.planned_production_output:2.0.0#productionSiteBpns"
                                                    }
                                                ]
                                            },
                                            "supplementalSemanticIds": [
                                                {
                                                    "type": "ExternalReference",
                                                    "keys": [
                                                        {
                                                            "type": "GlobalReference",
                                                            "value": "https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/5_BPDM/CX_-_0010_BUSINESS_PARTNER_NUMBER_PlatformCapabilityBPDM_v_1.0.1.pdf"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "valueType": "xs:string",
                                            "value": "BPNS0000000MOUR8",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "estimatedTimeOfCompletion",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Estimated Time of Completion"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.planned_production_output:2.0.0#estimatedTimeOfCompletion"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "2025-11-17T07:10",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "lastUpdatedOnDateTime",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Lasted Updated on Date"
                                                }
                                            ],
                                            "semanticId": {
                                                "type": "ExternalReference",
                                                "keys": [
                                                    {
                                                        "type": "GlobalReference",
                                                        "value": "urn:samm:io.catenax.planned_production_output:2.0.0#lastUpdatedOnDateTime"
                                                    }
                                                ]
                                            },
                                            "valueType": "xs:dateTime",
                                            "value": "2025-11-16T22:06",
                                            "modelType": "Property"
                                        },
                                        {
                                            "idShort": "plannedProductionQuantity",
                                            "displayName": [
                                                {
                                                    "language": "en",
                                                    "text": "Planned Production Quantity"
                                                }
                                            ],
                                            "description": [
                                                {
                                                    "language": "en",
                                                    "text": "Quantity of a product that a supplier plans to produce on a certain date and time for a specific customer"
                                                }
                                            ],
                                            "value": [
                                                {
                                                    "idShort": "unit",
                                                    "displayName": [
                                                        {
                                                            "language": "en",
                                                            "text": "Item Unit"
                                                        }
                                                    ],
                                                    "semanticId": {
                                                        "type": "ExternalReference",
                                                        "keys": [
                                                            {
                                                                "type": "GlobalReference",
                                                                "value": "urn:samm:io.catenax.shared.quantity:2.0.0#itemUnit"
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
                                                    "value": "unit:piece",
                                                    "modelType": "Property"
                                                },
                                                {
                                                    "idShort": "value",
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
                                                    "value": "122.5",
                                                    "modelType": "Property"
                                                }
                                            ],
                                            "modelType": "SubmodelElementCollection"
                                        }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                }
                            ],
                            "modelType": "SubmodelElementList"
                        },
                        {
                            "idShort": "orderPositionReference",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Order Position Reference"
                                }
                            ],
                            "description": [
                                {
                                    "language": "en",
                                    "text": "The order position reference contains information to identify a position within an order."
                                }
                            ],
                            "value": [
                                {
                                    "idShort": "supplierOrderId",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Supplier Order ID"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.planned_production_output:2.0.0#supplierOrderId"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "M-Nbr-4712",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "customerOrderId",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Customer Order ID"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.planned_production_output:2.0.0#customerOrderId"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "C-Nbr-4712",
                                    "modelType": "Property"
                                },
                                {
                                    "idShort": "customerOrderPositionId",
                                    "displayName": [
                                        {
                                            "language": "en",
                                            "text": "Customer Order Position ID"
                                        }
                                    ],
                                    "semanticId": {
                                        "type": "ExternalReference",
                                        "keys": [
                                            {
                                                "type": "GlobalReference",
                                                "value": "urn:samm:io.catenax.planned_production_output:2.0.0#customerOrderPositionId"
                                            }
                                        ]
                                    },
                                    "valueType": "xs:string",
                                    "value": "PositionId-01",
                                    "modelType": "Property"
                                }
                            ],
                            "modelType": "SubmodelElementCollection"
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
  submodel_PartType = `{
    "idShort": "PartTypeInformation002",
    "description": [
        {
            "language": "en",
            "text": "A Part Type Information represents an item in the Catena-X Bill of Material (BOM) on a type level in a specific version."
        }
    ],
    "administration": {},
    "id": "https://www.nri.com/sm/PartTypeInformation002",
    "kind": "Instance",
    "semanticId": {
        "type": "ExternalReference",
        "keys": [
            {
                "type": "GlobalReference",
                "value": "urn:samm:io.catenax.part_type_information:1.0.0#PartTypeInformation"
            }
        ]
    },
    "submodelElements": [
        {
            "idShort": "catenaXId",
            "displayName": [
                {
                    "language": "en",
                    "text": "Catena-X ID"
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.part_type_information:1.0.0#catenaXId"
                    }
                ]
            },
            "valueType": "xs:string",
            "value": "ae66f32e-1a2a-4bb8-a04a-823f75fe3439",
            "modelType": "Property"
        },
        {
            "idShort": "partSitesInformationAsPlanned",
            "displayName": [
                {
                    "language": "en",
                    "text": "Part Sites Information as Planned"
                }
            ],
            "description": [
                {
                    "language": "en",
                    "text": "A site is a delimited geographical area where a legal entity does business (geographical address with geo coordinates). A site always has a primary physical address. It is possible that further physical addresses are specified for the site. P.O. box details are only possible in addition to the physical address. A site has a 1:n relation to addresses, means at least one address is necessary and multiple addresses are possible."
                }
            ],
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.part_type_information:1.0.0#partSitesInformationAsPlannedCharacteristic"
                    }
                ]
            },
            "supplementalSemanticIds": [
                {
                    "type": "ExternalReference",
                    "keys": [
                        {
                            "type": "GlobalReference",
                            "value": "https://confluence.catena-x.net/x/QkBHAw"
                        }
                    ]
                }
            ],
            "orderRelevant": false,
            "typeValueListElement": "SubmodelElementCollection",
            "valueTypeListElement": "xs:anyURI",
            "value": [
                {
                    "displayName": [
                        {
                            "language": "en",
                            "text": "Part Sites Information as Planned"
                        }
                    ],
                    "description": [
                        {
                            "language": "en",
                            "text": "A site is a delimited geographical area where a legal entity does business (geographical address with geo coordinates). A site always has a primary physical address. It is possible that further physical addresses are specified for the site. P.O. box details are only possible in addition to the physical address. A site has a 1:n relation to addresses, means at least one address is necessary and multiple addresses are possible."
                        }
                    ],
                    "value": [
                        {
                            "idShort": "catenaXsiteId",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Catena-X site identifier"
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.part_type_information:1.0.0#catenaXsiteId"
                                    }
                                ]
                            },
                            "valueType": "xs:string",
                            "value": "",
                            "modelType": "Property"
                        },
                        {
                            "idShort": "function",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Function"
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.part_type_information:1.0.0#function"
                                    }
                                ]
                            },
                            "valueType": "xs:string",
                            "value": "",
                            "modelType": "Property"
                        },
                        {
                            "idShort": "functionValidFrom",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Function valid from"
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.part_type_information:1.0.0#functionValidFrom"
                                    }
                                ]
                            },
                            "valueType": "xs:string",
                            "value": "",
                            "modelType": "Property"
                        },
                        {
                            "idShort": "functionValidUntil",
                            "displayName": [
                                {
                                    "language": "en",
                                    "text": "Function valid until"
                                }
                            ],
                            "semanticId": {
                                "type": "ExternalReference",
                                "keys": [
                                    {
                                        "type": "GlobalReference",
                                        "value": "urn:samm:io.catenax.part_type_information:1.0.0#functionValidUntil"
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
                    "text": "The part type from which the serialized part has been instantiated."
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
                    "value": "MNR-7307-AU340474.002",
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
                    "value": "MNR.002",
                    "modelType": "Property"
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
                                    "value": "classificationStandard002",
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
                                    "value": "classification002",
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
                                    "value": "classificationStandard002",
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
    "modelType": "Submodel"
}`
  ,
}