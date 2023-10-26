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
 * These are all of the available event types that are permitted in an object pair notation.
 * @export
 * @interface TrackedAssetsEventIdentifierDescriptionPairs
 */
export interface TrackedAssetsEventIdentifierDescriptionPairs {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetsEventIdentifierDescriptionPairs
     */
    schema?: EmbeddedModelSchema;
    /**
     * A If the assets were searched
     * @type {string}
     * @memberof TrackedAssetsEventIdentifierDescriptionPairs
     */
    assetsSearched?: TrackedAssetsEventIdentifierDescriptionPairsAssetsSearchedEnum;
}

/**
* @export
* @enum {string}
*/
export enum TrackedAssetsEventIdentifierDescriptionPairsAssetsSearchedEnum {
    AssetsWereSearched = 'assets_were_searched'
}

export function TrackedAssetsEventIdentifierDescriptionPairsFromJSON(json: any): TrackedAssetsEventIdentifierDescriptionPairs {
    return TrackedAssetsEventIdentifierDescriptionPairsFromJSONTyped(json, false);
}

export function TrackedAssetsEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetsEventIdentifierDescriptionPairs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'assetsSearched': !exists(json, 'assets_searched') ? undefined : json['assets_searched'],
    };
}

export function TrackedAssetsEventIdentifierDescriptionPairsToJSON(value?: TrackedAssetsEventIdentifierDescriptionPairs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'assets_searched': value.assetsSearched,
    };
}


