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
    DiscoveredHtmlWebpage,
    DiscoveredHtmlWebpageFromJSON,
    DiscoveredHtmlWebpageFromJSONTyped,
    DiscoveredHtmlWebpageToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './index';

/**
 * Assumption: The iterable will be in the exact same order as it was passed in within the seededDiscoveredHtmlWebpages
 * @export
 * @interface DiscoveredHtmlWebpages
 */
export interface DiscoveredHtmlWebpages {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredHtmlWebpages
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<DiscoveredHtmlWebpage>}
     * @memberof DiscoveredHtmlWebpages
     */
    iterable: Array<DiscoveredHtmlWebpage>;
    /**
     * 
     * @type {string}
     * @memberof DiscoveredHtmlWebpages
     */
    application: string;
}

export function DiscoveredHtmlWebpagesFromJSON(json: any): DiscoveredHtmlWebpages {
    return DiscoveredHtmlWebpagesFromJSONTyped(json, false);
}

export function DiscoveredHtmlWebpagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredHtmlWebpages {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(DiscoveredHtmlWebpageFromJSON)),
        'application': json['application'],
    };
}

export function DiscoveredHtmlWebpagesToJSON(value?: DiscoveredHtmlWebpages | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(DiscoveredHtmlWebpageToJSON)),
        'application': value.application,
    };
}


