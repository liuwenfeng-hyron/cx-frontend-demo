export enum ShellDescriptorTemplate {
  withoutSubmodel = `{
	"id": "urn:uuid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx1111",
	"idShort": "shellxxx01",
	"specificAssetIds": [
		{
			"name": "manufacturerPartId",
			"value": "123-xxx-567103",
			"externalSubjectId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "{{BPN of the party privileged}}"
					}
				]
			}
		}
	]
}`,
withSubmodel = `{
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
	"globalAssetId": "860fb504-b884-4009-9313-c6fb6cdc111b",
	"id": "urn:uuid:f47ac10b-58cc-4372-a567-0e02b2c3d001",
	"idShort": "shellDescriptor001",
	"specificAssetIds": [
		{
			"supplementalSemanticIds": [],
			"name": "manufacturerPartId",
			"value": "MNR-7307-AU340474.001",
			"externalSubjectId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "BPN_COMPANY_1"
					}
				]
			}
		},
		{
			"supplementalSemanticIds": [],
			"name": "manufacturerId",
			"value": "BPNL0000000AAAA8",
			"externalSubjectId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "BPN_COMPANY_1"
					}
				]
			}
		},
		{
			"supplementalSemanticIds": [],
			"name": "customerPartId",
			"value": "MNR-7307-AU340474.001",
			"externalSubjectId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "BPN_COMPANY_1"
					}
				]
			}
		},
		{
			"supplementalSemanticIds": [],
			"name": "digitalTwinType",
			"value": "PartInstance",
			"externalSubjectId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "GlobalReference",
						"value": "BPN_COMPANY_1"
					}
				]
			}
		}
	],
	"submodelDescriptors": [
		{
			"id": "https://www.nri.com/sm/00001",
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "Submodel",
						"value": "urn:bamm:io.catenax.pcf:7.0.0#Pcf"
					}
				]
			},
			"endpoints": [
				{
					"interface": "SUBMODEL-3.0",
					"protocolInformation": {
						"href": "https://edc-xxx.com/api/public/submodel_Id_Base64/$value",
						"endpointProtocol": "HTTP",
						"endpointProtocolVersion": [
							"1.1"
						],
						"subprotocol": "DSP",
						"subprotocolBody": "id=AssetId_for_Submodel;dspEndpoint=https://edc-xxx.com/api/v1/dsp",
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
			]
		}
	]
}`

}