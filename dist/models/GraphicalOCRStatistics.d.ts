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
import { EmbeddedModelSchema, GraphicalOCRDescriptiveStatistics } from './index';
/**
 *
 * @export
 * @interface GraphicalOCRStatistics
 */
export interface GraphicalOCRStatistics {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalOCRStatistics
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {GraphicalOCRDescriptiveStatistics}
     * @memberof GraphicalOCRStatistics
     */
    descriptive?: GraphicalOCRDescriptiveStatistics;
}
export declare function GraphicalOCRStatisticsFromJSON(json: any): GraphicalOCRStatistics;
export declare function GraphicalOCRStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalOCRStatistics;
export declare function GraphicalOCRStatisticsToJSON(value?: GraphicalOCRStatistics | null): any;
