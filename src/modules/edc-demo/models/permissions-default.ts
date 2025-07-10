export enum PermissionsDefault {
  Duration = `[
  {
      "action": "use",
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
      "action": "use",
      "constraint": [
          {
              "leftOperand": "tx:BusinessPartnerNumber",
              "operator": "eq",
              "rightOperand": "<bpnNumber>"
          }
      ]
  }
]`,
  BusinessPartnerGroup = `[
  {
      "action": "use",
      "constraint": [
          {
              "leftOperand": "tx:BusinessPartnerGroup",
              "operator": "isAnyOf",
              "rightOperand": ["<groupName>"]
          }
      ]
  }
]`,
  Purpose = `[
  {
      "action": "use",
      "constraint": [
          {
              "leftOperand": "cx-policy:UsagePurpose",
              "operator": "eq",
              "rightOperand": "cx.core.legalRequirementForThirdparty:1"
          }
      ]
  }
]`,
  ContractReference = `[
    {
        "action": "use",
        "constraint": [
            {
                "leftOperand": "cx-policy:ContractReference",
                "operator": "eq",
                "rightOperand": "<ContractName>"
            }
        ]
    }
  ]`,
  FrameworkAgreement = `[
    {
        "action": "use",
        "constraint": [
            {
                "leftOperand": "cx-policy:FrameworkAgreement",
                "operator": "eq",
                "rightOperand": "DataExchangeGovernance:1.0"
            }
        ]
    }
  ]`,
  Other = `[
    {
        "action": "use",
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