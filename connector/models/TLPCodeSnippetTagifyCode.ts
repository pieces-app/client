/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

/**
 * 
 * @export
 * @interface TLPCodeSnippetTagifyCode
 */
export interface TLPCodeSnippetTagifyCode {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeSnippetTagifyCode
     */
    schema?: EmbeddedModelSchema;
    /**
     * stringified array of numbers
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    distribution: string;
    /**
     * stringified array of numbers
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    inferredDistribution: string;
    /**
     * stringified array of strings
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    tags: string;
    /**
     * stringified array of strings
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    inferredTags: string;
    /**
     * this is the model version
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    model: string;
    /**
     * This is the version of the file that we are using that contains all the possible tags
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    labelVersion: string;
    /**
     * this is the minimum score from the model that a tag needs to have to be included in the tags array.
     * @type {number}
     * @memberof TLPCodeSnippetTagifyCode
     */
    threshold: number;
    /**
     * this is the minimum score from the postprocessing that a tag needs to have to be included in the inferred_tags array.
     * @type {number}
     * @memberof TLPCodeSnippetTagifyCode
     */
    inferredThreshold: number;
    /**
     * this is the origin in which this asset was created, application(string representation)
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    context: string;
    /**
     * This is the asset id.
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    asset: string;
}

export function TLPCodeSnippetTagifyCodeFromJSON(json: any): TLPCodeSnippetTagifyCode {
    return TLPCodeSnippetTagifyCodeFromJSONTyped(json, false);
}

export function TLPCodeSnippetTagifyCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeSnippetTagifyCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'distribution': json['distribution'],
        'inferredDistribution': json['inferred_distribution'],
        'tags': json['tags'],
        'inferredTags': json['inferred_tags'],
        'model': json['model'],
        'labelVersion': json['label_version'],
        'threshold': json['threshold'],
        'inferredThreshold': json['inferred_threshold'],
        'context': json['context'],
        'asset': json['asset'],
    };
}

export function TLPCodeSnippetTagifyCodeToJSON(value?: TLPCodeSnippetTagifyCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'distribution': value.distribution,
        'inferred_distribution': value.inferredDistribution,
        'tags': value.tags,
        'inferred_tags': value.inferredTags,
        'model': value.model,
        'label_version': value.labelVersion,
        'threshold': value.threshold,
        'inferred_threshold': value.inferredThreshold,
        'context': value.context,
        'asset': value.asset,
    };
}


