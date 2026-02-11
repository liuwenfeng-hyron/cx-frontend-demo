export enum ShellDescriptorTemplateDPP {
DPP = `{
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
    "idShort": "shellDescriptorDpp001",
    "id": "urn:uuid:8cb11ccd-bbc0-4fdd-b174-8af3d8948b89",
    "specificAssetIds": [
        {
            "supplementalSemanticIds": [],
            "name": "partInstanceId",
            "value": "part-01",
            "externalSubjectId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "GlobalReference",
                        "value": "BPNL0000000MOUR8"
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
                        "href": "https://edc-beta.us.nri-caas.com/api-beta1/public/submodels/dXJuOnNhbW06aW8uY2F0ZW5heC5iYXR0ZXJ5LmJhdHRlcnlfcGFzczo2LjEuMCNCYXR0ZXJ5UGFzcy9zdWJtb2RlbA==/$value",
                        "endpointProtocol": "HTTP",
                        "endpointProtocolVersion": [
                            "1.1"
                        ],
                        "subprotocol": "DSP",
                        "subprotocolBody": "id=testPart-01;dspEndpoint=https://edc-beta.us.nri-caas.com/api-beta1/v1/dsp",
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
            "idShort": "shell-submodel-001",
            "id": "urn:samm:io.catenax.battery.battery_pass:6.1.0#BatteryPass/submodel",
            "semanticId": {
                "type": "ExternalReference",
                "keys": [
                    {
                        "type": "Submodel",
                        "value": "urn:samm:io.catenax.battery.battery_pass:6.1.0#BatteryPass/submodel"
                    }
                ]
            },
            "supplementalSemanticId": [],
            "description": [],
            "displayName": []
        }
    ],
    "createdAt": "2026-01-14T06:03:30.201516Z"
}`

}