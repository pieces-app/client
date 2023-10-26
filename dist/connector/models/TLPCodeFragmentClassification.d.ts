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
import { EmbeddedModelSchema, SystemExecutionInformation, TLPCodeFragmentClassificationMetadata } from './';
/**
 * Model for ML big query classification.
 * @export
 * @interface TLPCodeFragmentClassification
 */
export interface TLPCodeFragmentClassification {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentClassification
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof TLPCodeFragmentClassification
     */
    asset: string;
    /**
     *
     * @type {string}
     * @memberof TLPCodeFragmentClassification
     */
    model: string;
    /**
     *
     * @type {string}
     * @memberof TLPCodeFragmentClassification
     */
    created: string;
    /**
     *
     * @type {string}
     * @memberof TLPCodeFragmentClassification
     */
    classification: string;
    /**
     *
     * @type {number}
     * @memberof TLPCodeFragmentClassification
     */
    probability: number;
    /**
     *
     * @type {string}
     * @memberof TLPCodeFragmentClassification
     */
    context: string;
    /**
     *
     * @type {string}
     * @memberof TLPCodeFragmentClassification
     */
    distribution?: string;
    /**
     *
     * @type {TLPCodeFragmentClassificationMetadata}
     * @memberof TLPCodeFragmentClassification
     */
    metadata?: TLPCodeFragmentClassificationMetadata;
    /**
     * identifier for the user
     * @type {string}
     * @memberof TLPCodeFragmentClassification
     */
    user: string;
    /**
     * this is the time it takes to run this model.
     * @type {number}
     * @memberof TLPCodeFragmentClassification
     */
    latency?: number;
    /**
     *
     * @type {SystemExecutionInformation}
     * @memberof TLPCodeFragmentClassification
     */
    system?: SystemExecutionInformation;
}
export declare function TLPCodeFragmentClassificationFromJSON(json: any): TLPCodeFragmentClassification;
export declare function TLPCodeFragmentClassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentClassification;
export declare function TLPCodeFragmentClassificationToJSON(value?: TLPCodeFragmentClassification | null): any;
