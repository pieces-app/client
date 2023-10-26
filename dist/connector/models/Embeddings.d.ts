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
import { Embedding } from './';
/**
 *
 * @export
 * @interface Embeddings
 */
export interface Embeddings {
    /**
     *
     * @type {Array<Embedding>}
     * @memberof Embeddings
     */
    iterable: Array<Embedding>;
}
export declare function EmbeddingsFromJSON(json: any): Embeddings;
export declare function EmbeddingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Embeddings;
export declare function EmbeddingsToJSON(value?: Embeddings | null): any;
