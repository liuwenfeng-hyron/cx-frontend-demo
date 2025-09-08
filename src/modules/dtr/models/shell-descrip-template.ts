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
	],
	"submodelDescriptors": [
		{
			"id": "e5c96ab5-896a-xxxx-8761-efd74777ca97",
			"semanticId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "Submodel",
						"value": "urn:bamm:io.catenax.pcf:7.0.0#productcfp"
					}
				]
			},
			"endpoints": [
				{
					"interface": "SUBMODEL-3.0",
					"protocolInformation": {
						"href": "https://edc.data.plane/mypath/submodel",
						"endpointProtocol": "HTTP",
						"endpointProtocolVersion": [
							"1.1"
						],
						"subprotocol": "DSP",
						"subprotocolBody": "id=AssetId_of_EDC;dspEndpoint=http://edc.control.plane/api/v1/dsp",
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