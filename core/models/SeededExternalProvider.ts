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
    ExternalProviderTypeEnum,
    ExternalProviderTypeEnumFromJSON,
    ExternalProviderTypeEnumFromJSONTyped,
    ExternalProviderTypeEnumToJSON,
} from './';

/**
 * This is the minimum information needed to connect an additional provider.
 * @export
 * @interface SeededExternalProvider
 */
export interface SeededExternalProvider {
    /**
     * 
     * @type {ExternalProviderTypeEnum}
     * @memberof SeededExternalProvider
     */
    type: ExternalProviderTypeEnum;
}

export function SeededExternalProviderFromJSON(json: any): SeededExternalProvider {
    return SeededExternalProviderFromJSONTyped(json, false);
}

export function SeededExternalProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededExternalProvider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': ExternalProviderTypeEnumFromJSON(json['type']),
    };
}

export function SeededExternalProviderToJSON(value?: SeededExternalProvider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': ExternalProviderTypeEnumToJSON(value.type),
    };
}


