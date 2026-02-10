export enum SubmodelDescriptorTemplate {
  pcf5 = `{
        "idShort": "submodelxxx",
        "id": "xxxxxx-xxxx-xxxx-xxxx-aaaaaaa",
        "semanticId": {
          "type": "ExternalReference",
          "keys": [
            {
              "type": "GlobalReference",
              "value": "urn:bamm:io.catenax.pcf:5.0.0#productcfp"
            }
          ]
        },
        "endpoints": [
          {
            "interface": "SUBMODEL-3.0",
            "protocolInformation": {
              "https://edc-xxx.us.nri-caas.com/api/public/submodel_Id_Base64/$value",
              "endpointProtocol": "HTTP",
              "endpointProtocolVersion": [
                "1.1"
              ],
              "subprotocol": "DSP",
              "subprotocolBody": "id=AssetId_for_Submodel;dspEndpoint=https://edc-xxx.us.nri-caas.com/api/v1/dsp",
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
              "type": "GlobalReference",
              "value": "urn:bamm:io.catenax.pcf:7.0.0#productcfp"
            }
          ]
        },
        "endpoints": [
          {
            "interface": "SUBMODEL-3.0",
            "protocolInformation": {
              "https://edc-xxx.com/api/public/submodel_Id_Base64/$value",
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
}`,
  delivery2 = `
          {
            "id": "https://www.nri.com/sm/Delivery001",
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "urn:samm:io.delivery_information:2.0.0#DeliveryInformation"
                }
              ]
            },
            "endpoints": [
              {
                "interface": "SUBMODEL-3.0",
                "protocolInformation": {
                  "https://edc-xxx.com/api/public/submodel_Id_Base64/$value",
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
  `
}