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
 *
 * @export
 * @interface GraphicalOCRDescriptiveStatisticsConfidence
 */
export interface GraphicalOCRDescriptiveStatisticsConfidence {
    /**
     *
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatisticsConfidence
     */
    mean: string;
}
export declare function GraphicalOCRDescriptiveStatisticsConfidenceFromJSON(json: any): GraphicalOCRDescriptiveStatisticsConfidence;
export declare function GraphicalOCRDescriptiveStatisticsConfidenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalOCRDescriptiveStatisticsConfidence;
export declare function GraphicalOCRDescriptiveStatisticsConfidenceToJSON(value?: GraphicalOCRDescriptiveStatisticsConfidence | null): any;
