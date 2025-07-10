import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  constructor() { }

  /**
   * get payload
   * @param data
   * @returns
   */
  extractPayload(data: any): { [key: string]: any }[] {
    const payloadItems: { [key: string]: any }[] = [];

    if (data) {
      data.forEach((element: any) => {
        if (element.value !== undefined) {
          payloadItems.push({
            [element.idShort ]: this.extractNestedValue(element.value)
          });
        } else {
          payloadItems.push({
            [element.idShort ]: ""
          });
        }
      });
    }

    return payloadItems;
  }

  /**
   * get value
   * @param value
   * @returns
   */
  private extractNestedValue(value: any): any {
    if (Array.isArray(value)) {
      return value.map((item: any) => this.extractNestedValue(item));
    } else if (typeof value === "object" && value !== null) {
      if (value.value !== undefined) {
        return this.extractNestedValue(value.value);
      } else {
        const result: any = {};
        // Object.keys(value).forEach((key) => {
        //   result[key] = this.extractNestedValue(value[key]);
        // });
        // return result;
        return this.extractNestedValue(value["idShort"]);
      }      
    } else {
      return value;
    }
  }
}