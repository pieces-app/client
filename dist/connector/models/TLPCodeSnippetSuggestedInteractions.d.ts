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
import { EmbeddedModelSchema, TLPCodeFragmentSuggestedReuse, TLPCodeFragmentSuggestedSave } from './';
/**
 *
 * @export
 * @interface TLPCodeSnippetSuggestedInteractions
 */
export interface TLPCodeSnippetSuggestedInteractions {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeSnippetSuggestedInteractions
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {TLPCodeFragmentSuggestedSave}
     * @memberof TLPCodeSnippetSuggestedInteractions
     */
    save?: TLPCodeFragmentSuggestedSave;
    /**
     *
     * @type {TLPCodeFragmentSuggestedReuse}
     * @memberof TLPCodeSnippetSuggestedInteractions
     */
    reuse?: TLPCodeFragmentSuggestedReuse;
}
export declare function TLPCodeSnippetSuggestedInteractionsFromJSON(json: any): TLPCodeSnippetSuggestedInteractions;
export declare function TLPCodeSnippetSuggestedInteractionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeSnippetSuggestedInteractions;
export declare function TLPCodeSnippetSuggestedInteractionsToJSON(value?: TLPCodeSnippetSuggestedInteractions | null): any;
