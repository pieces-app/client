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
import { GroupedTimestamp, Model } from './';
/**
 *
 * @export
 * @interface Embedding
 */
export interface Embedding {
    /**
     * this is the raw value of the embedding
     * @type {Array<number>}
     * @memberof Embedding
     */
    raw: Array<number>;
    /**
     *
     * @type {Model}
     * @memberof Embedding
     */
    model: Model;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Embedding
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Embedding
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Embedding
     */
    deleted?: GroupedTimestamp;
}
export declare function EmbeddingFromJSON(json: any): Embedding;
export declare function EmbeddingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Embedding;
export declare function EmbeddingToJSON(value?: Embedding | null): any;
