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
import { EmbeddedModelSchema, ReferencedSensitive, Score } from './index';
/**
 * This is a flattened representation of multiple sensitive pieces of data.
 * @export
 * @interface FlattenedSensitives
 */
export interface FlattenedSensitives {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedSensitives
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ReferencedSensitive>}
     * @memberof FlattenedSensitives
     */
    iterable: Array<ReferencedSensitive>;
    /**
     *
     * @type {Score}
     * @memberof FlattenedSensitives
     */
    score?: Score;
}
export declare function FlattenedSensitivesFromJSON(json: any): FlattenedSensitives;
export declare function FlattenedSensitivesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedSensitives;
export declare function FlattenedSensitivesToJSON(value?: FlattenedSensitives | null): any;
