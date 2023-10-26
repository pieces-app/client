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
import { EmbeddedModelSchemaSemanticVersionEnum } from './';
/**
 * This is a model that will keep track of all of our version related to our models. ie (1) the database migration and (2) the global semantic version of the api.
 * @export
 * @interface EmbeddedModelSchema
 */
export interface EmbeddedModelSchema {
    /**
     * this is the current database version that this model was used for.
     * @type {number}
     * @memberof EmbeddedModelSchema
     */
    migration: number;
    /**
     *
     * @type {EmbeddedModelSchemaSemanticVersionEnum}
     * @memberof EmbeddedModelSchema
     */
    semantic: EmbeddedModelSchemaSemanticVersionEnum;
}
export declare function EmbeddedModelSchemaFromJSON(json: any): EmbeddedModelSchema;
export declare function EmbeddedModelSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedModelSchema;
export declare function EmbeddedModelSchemaToJSON(value?: EmbeddedModelSchema | null): any;
