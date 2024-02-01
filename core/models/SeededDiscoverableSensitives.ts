/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
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
    SeededDiscoverableSensitive,
    SeededDiscoverableSensitiveFromJSON,
    SeededDiscoverableSensitiveFromJSONTyped,
    SeededDiscoverableSensitiveToJSON,
} from './index';

/**
 * 
 * @export
 * @interface SeededDiscoverableSensitives
 */
export interface SeededDiscoverableSensitives {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableSensitives
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SeededDiscoverableSensitive>}
     * @memberof SeededDiscoverableSensitives
     */
    iterable: Array<SeededDiscoverableSensitive>;
    /**
     * 
     * @type {string}
     * @memberof SeededDiscoverableSensitives
     */
    application: string;
}

export function SeededDiscoverableSensitivesFromJSON(json: any): SeededDiscoverableSensitives {
    return SeededDiscoverableSensitivesFromJSONTyped(json, false);
}

export function SeededDiscoverableSensitivesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableSensitives {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SeededDiscoverableSensitiveFromJSON)),
        'application': json['application'],
    };
}

export function SeededDiscoverableSensitivesToJSON(value?: SeededDiscoverableSensitives | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(SeededDiscoverableSensitiveToJSON)),
        'application': value.application,
    };
}


