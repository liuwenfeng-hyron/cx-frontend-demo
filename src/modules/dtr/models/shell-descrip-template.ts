export enum ShellDescriptorTemplate {
  withoutSubmodel = `{
	"idShort": "shellxxx01",
	"id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx1111",
	"specificAssetIds": [
		{
			"name": "CustomerPartId",
			"value": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx10",
			"externalSubjectId": {
				"type": "ExternalReference",
				"keys": [
					{
						"type": "Submodel",
						"value": "xxx"
					}
				]
			}
		}
	]
}`

}