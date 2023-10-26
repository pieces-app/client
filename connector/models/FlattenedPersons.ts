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
    ReferencedPerson,
    ReferencedPersonFromJSON,
    ReferencedPersonFromJSONTyped,
    ReferencedPersonToJSON,
} from './';

/**
 * This is the plural of Person. will have top level meta about the person including an iterable of all the person.
 * @export
 * @interface FlattenedPersons
 */
export interface FlattenedPersons {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedPersons
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedPerson>}
     * @memberof FlattenedPersons
     */
    iterable: Array<ReferencedPerson>;
    /**
     * This is a Map<String, int> where the the key is an person id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedPersons
     */
    indices?: { [key: string]: number; };
}

export function FlattenedPersonsFromJSON(json: any): FlattenedPersons {
    return FlattenedPersonsFromJSONTyped(json, false);
}

export function FlattenedPersonsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedPersons {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedPersonFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
    };
}

export function FlattenedPersonsToJSON(value?: FlattenedPersons | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ReferencedPersonToJSON)),
        'indices': value.indices,
    };
}


