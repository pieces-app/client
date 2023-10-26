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
    ReferencedTag,
    ReferencedTagFromJSON,
    ReferencedTagFromJSONTyped,
    ReferencedTagToJSON,
} from './';

/**
 * This is multiple ReferencedTags(which includes an optional FlattenedTag Model within the reference model).
 * @export
 * @interface FlattenedTags
 */
export interface FlattenedTags {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedTags
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedTag>}
     * @memberof FlattenedTags
     */
    iterable: Array<ReferencedTag>;
    /**
     * This is a Map<String, int> where the the key is an tag id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedTags
     */
    indices?: { [key: string]: number; };
}

export function FlattenedTagsFromJSON(json: any): FlattenedTags {
    return FlattenedTagsFromJSONTyped(json, false);
}

export function FlattenedTagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedTags {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedTagFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
    };
}

export function FlattenedTagsToJSON(value?: FlattenedTags | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ReferencedTagToJSON)),
        'indices': value.indices,
    };
}


