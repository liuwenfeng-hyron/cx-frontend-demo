export enum ShellDescriptorTemplatePuris {
PURIS = `{
	"description": [
        {
            "language": "en",
            "text": "example text"
        }
    ],
    "displayName": [
        {
            "language": "en",
            "text": "this is an example name"
        }
    ],
    "globalAssetId": "de7ebf62-0ca6-4e61-832d-a2375da217bf",
    "idShort": "ShellDescriptor_puris",
    "id": "urn:uuid:e47ac10b-58cc-4372-a567-0e02b2c3d003",
    "specificAssetIds": [
        {
            "supplementalSemanticIds": [],
            "name": "digitalTwinType",
            "value": "PartType",
            "externalSubjectId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "BPNL0000000L3MA9"
                    }
                ]
            }
        },
        {
            "supplementalSemanticIds": [],
            "name": "manufacturerPartId",
            "value": "MNR-7307-AU340474.002",
            "externalSubjectId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "BPNL0000000L3MA9"
                    }
                ]
            }
        },
        {
            "supplementalSemanticIds": [],
            "name": "customerPartId",
            "value": "MNR-7307-AU340474.002",
            "externalSubjectId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "BPNL0000000L3MA9"
                    }
                ]
            }
        },
        {
            "supplementalSemanticIds": [],
            "name": "manufacturerId",
            "value": "BPNL0000000MOUR8",
            "externalSubjectId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "BPNL0000000L3MA9"
                    }
                ]
            }
        }
    ],
    "submodelDescriptors": [
        {
            "endpoints": [
                {
                    "interface": "SUBMODEL-3.0",
                    "protocolInformation": {
                        "href": "http://aisin-edc-phoenix.nri-caas.com/api/public/aHR0cHM6Ly93d3cubnJpLmNvbS9zbS9EYXlzT2ZTdXBwbHkvMDAwMQ==",
                        "endpointProtocol": "HTTP",
                        "endpointProtocolVersion": [
                            "1.1"
                        ],
                        "subprotocol": "DSP",
                        "subprotocolBody": "id=smDaysOfSupply001;dspEndpoint=http://aisin-edc-phoenix.nri-caas.com/api/v1/dsp",
                        "subprotocolBodyEncoding": "plain",
                        "securityAttributes": [
                            {
                                "type": "NONE",
                                "key": "NONE",
                                "value": "NONE"
                            }
                        ]
                    }
                }
            ],
            "id": "https://www.nri.com/sm/DaysOfSupply/0001",
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.days_of_supply:2.0.0#DaysOfSupply"
                    }
                ]
            },
            "supplementalSemanticId": [],
            "description": [],
            "displayName": []
        },
        {
            "endpoints": [
                {
                    "interface": "SUBMODEL-3.0",
                    "protocolInformation": {
                        "href": "http://aisin-edc-phoenix.nri-caas.com/api/public/aHR0cHM6Ly93d3cubnJpLmNvbS9zbS9QYXJ0VHlwZUluZm9ybWF0aW9uMDAz",
                        "endpointProtocol": "HTTP",
                        "endpointProtocolVersion": [
                            "1.1"
                        ],
                        "subprotocol": "DSP",
                        "subprotocolBody": "id=subModelPartTypeInformation002;dspEndpoint=http://aisin-edc-phoenix.nri-caas.com/api/v1/dsp",
                        "subprotocolBodyEncoding": "plain",
                        "securityAttributes": [
                            {
                                "type": "NONE",
                                "key": "NONE",
                                "value": "NONE"
                            }
                        ]
                    }
                }
            ],
            "id": "https://www.nri.com/sm/PartTypeInformation003",
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.part_type_information:1.0.0#PartTypeInformation"
                    }
                ]
            },
            "supplementalSemanticId": [],
            "description": [],
            "displayName": []
        },
        {
            "endpoints": [
                {
                    "interface": "SUBMODEL-3.0",
                    "protocolInformation": {
                        "href": "http://aisin-edc-phoenix.nri-caas.com/api/public/aHR0cHM6Ly93d3cubnJpLmNvbS9zbS9JdGVtU3RvY2swMDE=",
                        "endpointProtocol": "HTTP",
                        "endpointProtocolVersion": [
                            "1.1"
                        ],
                        "subprotocol": "DSP",
                        "subprotocolBody": "id=smItemStock001;dspEndpoint=http://aisin-edc-phoenix.nri-caas.com/api/v1/dsp",
                        "subprotocolBodyEncoding": "plain",
                        "securityAttributes": [
                            {
                                "type": "NONE",
                                "key": "NONE",
                                "value": "NONE"
                            }
                        ]
                    }
                }
            ],
            "id": "https://www.nri.com/sm/ItemStock001",
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.item_stock:2.0.0#ItemStock"
                    }
                ]
            },
            "supplementalSemanticId": [],
            "description": [],
            "displayName": []
        },
        {
            "endpoints": [
                {
                    "interface": "SUBMODEL-3.0",
                    "protocolInformation": {
                        "href": "http://aisin-edc-phoenix.nri-caas.com/api/public/IGh0dHBzOi8vd3d3Lm5yaS5jb20vc20vRGVsaXZlcnkwMDU=",
                        "endpointProtocol": "HTTP",
                        "endpointProtocolVersion": [
                            "1.1"
                        ],
                        "subprotocol": "DSP",
                        "subprotocolBody": "id=submodel-DeliveryInformation002;dspEndpoint=http://aisin-edc-phoenix.nri-caas.com/api/v1/dsp",
                        "subprotocolBodyEncoding": "plain",
                        "securityAttributes": [
                            {
                                "type": "NONE",
                                "key": "NONE",
                                "value": "NONE"
                            }
                        ]
                    }
                }
            ],
            "id": "https://www.nri.com/sm/Delivery002",
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.delivery_information:2.0.0#DeliveryInformation"
                    }
                ]
            },
            "supplementalSemanticId": [],
            "description": [],
            "displayName": []
        },
        {
            "endpoints": [
                {
                    "interface": "SUBMODEL-3.0",
                    "protocolInformation": {
                        "href": "http://aisin-edc-phoenix.nri-caas.com/api/public/aHR0cHM6Ly93d3cubnJpLmNvbS9zbS9QbGFubmVkUHJvZHVjdGlvbk91dHB1dDAwMQ==",
                        "endpointProtocol": "HTTP",
                        "endpointProtocolVersion": [
                            "1.1"
                        ],
                        "subprotocol": "DSP",
                        "subprotocolBody": "id=smPlannedProductionOutput001;dspEndpoint=http://aisin-edc-phoenix.nri-caas.com/api/v1/dsp",
                        "subprotocolBodyEncoding": "plain",
                        "securityAttributes": [
                            {
                                "type": "NONE",
                                "key": "NONE",
                                "value": "NONE"
                            }
                        ]
                    }
                }
            ],
            "id": "https://www.nri.com/sm/PlannedProductionOutput001",
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "urn:samm:io.catenax.planned_production_output:2.0.0#PlannedProductionOutput"
                    }
                ]
            },
            "supplementalSemanticId": [],
            "description": [],
            "displayName": []
        }
    ],
    "createdAt": "2026-02-09T09:14:39.545825Z"
}`

}