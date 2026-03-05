import {Component, Inject, OnInit} from '@angular/core';
import {PolicyDefinitionInput, PolicyInput} from "../../../mgmt-api-client/model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { PolicyType } from "../../models/policy-type";
import { PermissionsDefault } from "../../models/permissions-default";

@Component({
  selector: 'app-new-policy-dialog',
  templateUrl: './new-policy-dialog.component.html',
  styleUrls: ['./new-policy-dialog.component.scss']
})
export class NewPolicyDialogComponent implements OnInit {
  editMode: boolean = false;
  policy: PolicyInput = {
    "@type": "Set"
  };

  policyDefinition= {
    "policy": this.policy,
    "id": '',
    "@id": ''    
  };

  policyTypeId: string = '';
  policyAction: string = 'access';
  permissionsJson: string = '';
  prohibitionsJson: string = '';
  obligationsJson: string = '';

  constructor(private dialogRef: MatDialogRef<NewPolicyDialogComponent>,
    @Inject('POLICY_TYPES') public policyTypes: PolicyType[]) {
  }

  ngOnInit(): void {
    //this.editMode = true;
    this.editMode = false;
  }

  onChangePolicyType() {
    this.updatePermissionsJson();
  }

  onChangeAction() {
    this.updatePermissionsJson();
  }

  private updatePermissionsJson() {
    let template = PermissionsDefault[this.policyTypeId as keyof typeof PermissionsDefault];
    if (template) {
      try {
        let permissions = JSON.parse(template);
        if (Array.isArray(permissions)) {
          permissions.forEach(p => p.action = this.policyAction);
          this.permissionsJson = JSON.stringify(permissions, null, 2);
        } else {
          this.permissionsJson = template;
        }
      } catch (e) {
        this.permissionsJson = template;
      }
    }
  }

  onSave() {
    if (this.permissionsJson && this.permissionsJson !== '') {
      this.policy.permission = JSON.parse(this.permissionsJson);
    }

    if (this.prohibitionsJson && this.prohibitionsJson !== '') {
      this.policy.prohibition = JSON.parse(this.prohibitionsJson);
    }

    if (this.obligationsJson && this.obligationsJson !== '') {
      this.policy.obligation = JSON.parse(this.obligationsJson);
    }

    this.dialogRef.close({
      "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        "https://w3id.org/catenax/2025/9/policy/context.jsonld",
        {
          "@vocab": "https://w3id.org/edc/v0.0.1/ns/"
        }
      ],
      "@type": "PolicyDefinition",
      "@id": this.policyDefinition.id,
      "policy": this.policy
    });
  }
}
