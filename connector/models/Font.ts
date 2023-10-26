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
 * This will describe the font that the user sees.
 * @export
 * @interface Font
 */
export interface Font {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Font
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {number}
     * @memberof Font
     */
    size: number;
}

export function FontFromJSON(json: any): Font {
    return FontFromJSONTyped(json, false);
}

export function FontFromJSONTyped(json: any, ignoreDiscriminator: boolean): Font {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'size': json['size'],
    };
}

export function FontToJSON(value?: Font | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'size': value.size,
    };
}


