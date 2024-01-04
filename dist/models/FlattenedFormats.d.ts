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
import { EmbeddedModelSchema, ReferencedFormat } from './';
/**
 * A collection of Formats specific to the authenticated user. [DAG Compatible - Directed Acyclic Graph Data Structure]
 *
 * FlattenedFormats prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.
 * @export
 * @interface FlattenedFormats
 */
export interface FlattenedFormats {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedFormats
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ReferencedFormat>}
     * @memberof FlattenedFormats
     */
    iterable: Array<ReferencedFormat>;
}
export declare function FlattenedFormatsFromJSON(json: any): FlattenedFormats;
export declare function FlattenedFormatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedFormats;
export declare function FlattenedFormatsToJSON(value?: FlattenedFormats | null): any;
