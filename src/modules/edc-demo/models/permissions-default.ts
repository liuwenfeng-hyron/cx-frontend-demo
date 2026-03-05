export enum PermissionsDefault {
  Duration = `[
  {
      "action": "access",
      "constraint": [
          {
            "leftOperand": "inForceDate",
            "operator": "gteq",
            "rightOperand": "2024-11-20T00:00:00Z"
          },
          {
            "leftOperand": "inForceDate",
            "operator": "lteq",
            "rightOperand": "2025-12-31T00:00:00Z"
          }
      ]
  }
]`,
  BusinessPartnerNumber = `[
  {
      "action": "access",
      "constraint": [
          {
              "leftOperand": "BusinessPartnerNumber",
              "operator": "eq",
              "rightOperand": "<bpnNumber>"
          }
      ]
  }
]`,
  BusinessPartnerGroup = `[
  {
      "action": "access",
      "constraint": [
          {
              "leftOperand": "BusinessPartnerGroup",
              "operator": "isAnyOf",
              "rightOperand": ["<groupName>"]
          }
      ]
  }
]`,
  Purpose = `[
  {
      "action": "access",
      "constraint": [
          {
              "leftOperand": "UsagePurpose",
              "operator": "eq",
              "rightOperand": "cx.core.legalRequirementForThirdparty:1"
          }
      ]
  }
]`,
  ContractReference = `[
    {
        "action": "access",
        "constraint": [
            {
                "leftOperand": "ContractReference",
                "operator": "eq",
                "rightOperand": "<ContractName>"
            }
        ]
    }
  ]`,
  FrameworkAgreement = `[
    {
        "action": "access",
        "constraint": [
            {
                "leftOperand": "FrameworkAgreement",
                "operator": "eq",
                "rightOperand": "DataExchangeGovernance:1.0"
            }
        ]
    }
  ]`,
  Other = `[
    {
        "action": "access",
        "constraint": [
            {
                "leftOperand": "xxx",
                "operator": "eq",
                "rightOperand": "xxxx"
            }
        ]
    }
  ]`,
    
}