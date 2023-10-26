/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * This is the enum used to describe the severity of our sensitive model. ie low, moderate, high
 * @export
 * @enum {string}
 */
export enum SensitiveSeverityEnum {
    Low = 'LOW',
    Moderate = 'MODERATE',
    High = 'HIGH'
}

export function SensitiveSeverityEnumFromJSON(json: any): SensitiveSeverityEnum {
    return SensitiveSeverityEnumFromJSONTyped(json, false);
}

export function SensitiveSeverityEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensitiveSeverityEnum {
    return json as SensitiveSeverityEnum;
}

export function SensitiveSeverityEnumToJSON(value?: SensitiveSeverityEnum | null): any {
    return value as any;
}

