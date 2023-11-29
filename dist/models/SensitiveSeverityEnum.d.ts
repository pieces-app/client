/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
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
export declare enum SensitiveSeverityEnum {
    Low = "LOW",
    Moderate = "MODERATE",
    High = "HIGH"
}
export declare function SensitiveSeverityEnumFromJSON(json: any): SensitiveSeverityEnum;
export declare function SensitiveSeverityEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensitiveSeverityEnum;
export declare function SensitiveSeverityEnumToJSON(value?: SensitiveSeverityEnum | null): any;
