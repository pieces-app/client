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
    ReferencedAnchor,
    ReferencedAnchorFromJSON,
    ReferencedAnchorFromJSONTyped,
    ReferencedAnchorToJSON,
} from './';

/**
 * 
 * @export
 * @interface FlattenedAnchors
 */
export interface FlattenedAnchors {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAnchors
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedAnchor>}
     * @memberof FlattenedAnchors
     */
    iterable: Array<ReferencedAnchor>;
    /**
     * This is a Map<String, int> where the the key is an Anchor id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedAnchors
     */
    indices?: { [key: string]: number; };
}

export function FlattenedAnchorsFromJSON(json: any): FlattenedAnchors {
    return FlattenedAnchorsFromJSONTyped(json, false);
}

export function FlattenedAnchorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAnchors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedAnchorFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
    };
}

export function FlattenedAnchorsToJSON(value?: FlattenedAnchors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ReferencedAnchorToJSON)),
        'indices': value.indices,
    };
}


