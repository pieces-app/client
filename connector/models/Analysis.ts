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
    CodeAnalysis,
    CodeAnalysisFromJSON,
    CodeAnalysisFromJSONTyped,
    CodeAnalysisToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    ImageAnalysis,
    ImageAnalysisFromJSON,
    ImageAnalysisFromJSONTyped,
    ImageAnalysisToJSON,
} from './';

/**
 * This the the MlAnalysis Object, that will go on a format.
 * 
 * this will hold all the different analysis models!
 * 
 * ** keep format just a uuid for now **
 * @export
 * @interface Analysis
 */
export interface Analysis {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Analysis
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {CodeAnalysis}
     * @memberof Analysis
     */
    code?: CodeAnalysis;
    /**
     * 
     * @type {string}
     * @memberof Analysis
     */
    id: string;
    /**
     * this is a reference to the format that it belongs too.
     * @type {string}
     * @memberof Analysis
     */
    format: string;
    /**
     * 
     * @type {ImageAnalysis}
     * @memberof Analysis
     */
    image?: ImageAnalysis;
}

export function AnalysisFromJSON(json: any): Analysis {
    return AnalysisFromJSONTyped(json, false);
}

export function AnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): Analysis {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'code': !exists(json, 'code') ? undefined : CodeAnalysisFromJSON(json['code']),
        'id': json['id'],
        'format': json['format'],
        'image': !exists(json, 'image') ? undefined : ImageAnalysisFromJSON(json['image']),
    };
}

export function AnalysisToJSON(value?: Analysis | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'code': CodeAnalysisToJSON(value.code),
        'id': value.id,
        'format': value.format,
        'image': ImageAnalysisToJSON(value.image),
    };
}


