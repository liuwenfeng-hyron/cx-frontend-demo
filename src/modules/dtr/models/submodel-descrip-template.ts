export enum SubmodelDescriptorTemplate {
  pcf5 = `{
        "idShort": "submodelxxx",
        "id": "xxxxxx-xxxx-xxxx-xxxx-aaaaaaa",
        "semanticId": {
          "type": "ExternalReference",
          "keys": [
            {
              "type": "Submodel",
              "value": "urn:bamm:io.catenax.pcf:5.0.0#productcfp"
            }
          ]
        },
        "endpoints": [
          {
            "interface": "SUBMODEL-3.0",
            "protocolInformation": {
              "href": "http://111.111.111.110/api/public",
              "endpointProtocol": "HTTP",
              "endpointProtocolVersion": [
                "1.1"
              ],
              "subprotocol": "DSP",
              "subprotocolBody": "id=AssetId_of_EDC;dspEndpoint=http://111.111.111.110/api/v1/dsp",
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
}`,
  pcf7 = `{
        "idShort": "submodelxxx",
        "id": "xxxxxx-xxxx-xxxx-xxxx-aaaaaaa",
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
              "href": "http://111.111.111.110/api/public",
              "endpointProtocol": "HTTP",
              "endpointProtocolVersion": [
                "1.1"
              ],
              "subprotocol": "DSP",
              "subprotocolBody": "id=AssetId_of_EDC;dspEndpoint=http://111.111.111.110/api/v1/dsp",
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
}`,

}