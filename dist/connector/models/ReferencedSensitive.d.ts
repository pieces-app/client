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
import { EmbeddedModelSchema, FlattenedSensitive } from './';
/**
 * A reference to a sensitive which at minimum must have the Sensitive id. But in the case of a hydrated client API it may have a populated reference of type Sensitive.
 * @export
 * @interface ReferencedSensitive
 */
export interface ReferencedSensitive {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedSensitive
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReferencedSensitive
     */
    id: string;
    /**
     *
     * @type {FlattenedSensitive}
     * @memberof ReferencedSensitive
     */
    reference?: FlattenedSensitive;
}
export declare function ReferencedSensitiveFromJSON(json: any): ReferencedSensitive;
export declare function ReferencedSensitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedSensitive;
export declare function ReferencedSensitiveToJSON(value?: ReferencedSensitive | null): any;
