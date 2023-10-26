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
    FlattenedShare,
    FlattenedShareFromJSON,
    FlattenedShareFromJSONTyped,
    FlattenedShareToJSON,
} from './';

/**
 * This is a [DAG SAFE] version of a share. with just a required share ID.
 * @export
 * @interface ReferencedShare
 */
export interface ReferencedShare {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedShare
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedShare
     */
    id: string;
    /**
     * 
     * @type {FlattenedShare}
     * @memberof ReferencedShare
     */
    reference?: FlattenedShare;
}

export function ReferencedShareFromJSON(json: any): ReferencedShare {
    return ReferencedShareFromJSONTyped(json, false);
}

export function ReferencedShareFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedShare {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedShareFromJSON(json['reference']),
    };
}

export function ReferencedShareToJSON(value?: ReferencedShare | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedShareToJSON(value.reference),
    };
}


