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
 * A helper classs to wrap Date-Time Values with Useful Helper Properties
 * @export
 * @interface GroupedTimestamp
 */
export interface GroupedTimestamp {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof GroupedTimestamp
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Date}
     * @memberof GroupedTimestamp
     */
    value: Date;
    /**
     * 
     * @type {string}
     * @memberof GroupedTimestamp
     */
    readable?: string;
}

export function GroupedTimestampFromJSON(json: any): GroupedTimestamp {
    return GroupedTimestampFromJSONTyped(json, false);
}

export function GroupedTimestampFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupedTimestamp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'value': (new Date(json['value'])),
        'readable': !exists(json, 'readable') ? undefined : json['readable'],
    };
}

export function GroupedTimestampToJSON(value?: GroupedTimestamp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'value': (value.value.toISOString()),
        'readable': value.readable,
    };
}


