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
    Asset,
    AssetFromJSON,
    AssetFromJSONTyped,
    AssetToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    SearchedMatchEnum,
    SearchedMatchEnumFromJSON,
    SearchedMatchEnumFromJSONTyped,
    SearchedMatchEnumToJSON,
} from './';

/**
 * This is a modle that will represent a searched asset!
 * @export
 * @interface SearchedAsset
 */
export interface SearchedAsset {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Asset}
     * @memberof SearchedAsset
     */
    asset?: Asset;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedAsset
     */
    exact: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchedAsset
     */
    score: number;
    /**
     * 
     * @type {SearchedMatchEnum}
     * @memberof SearchedAsset
     */
    match: SearchedMatchEnum;
    /**
     * This is the uuid of the asset.
     * @type {string}
     * @memberof SearchedAsset
     */
    identifier: string;
    /**
     * If this is a pseudo asset that was also returned.
     * @type {boolean}
     * @memberof SearchedAsset
     */
    pseudo?: boolean;
}

export function SearchedAssetFromJSON(json: any): SearchedAsset {
    return SearchedAssetFromJSONTyped(json, false);
}

export function SearchedAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': !exists(json, 'asset') ? undefined : AssetFromJSON(json['asset']),
        'exact': json['exact'],
        'score': json['score'],
        'match': SearchedMatchEnumFromJSON(json['match']),
        'identifier': json['identifier'],
        'pseudo': !exists(json, 'pseudo') ? undefined : json['pseudo'],
    };
}

export function SearchedAssetToJSON(value?: SearchedAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'asset': AssetToJSON(value.asset),
        'exact': value.exact,
        'score': value.score,
        'match': SearchedMatchEnumToJSON(value.match),
        'identifier': value.identifier,
        'pseudo': value.pseudo,
    };
}


