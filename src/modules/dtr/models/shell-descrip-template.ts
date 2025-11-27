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
	"id": "urn:uuid:f47ac10b-58cc-4372-a567-0e02b2c3d001",
	"idShort": "shellDescriptor001",
	"specificAssetIds": [
		{
			"name": "manufacturerPartId",
			"value": "123-000-567001",
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
						"href": "https://edc-beta.us.nri-caas.com/api-beta1/public",
						"endpointProtocol": "HTTP",
						"endpointProtocolVersion": [
							"1.1"
						],
						"subprotocol": "DSP",
						"subprotocolBody": "id=submodel001;dspEndpoint=https://edc-beta.us.nri-caas.com/api-beta1/v1/dsp",
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