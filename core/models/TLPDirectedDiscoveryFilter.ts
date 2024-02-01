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
    TLPDirectedDiscoveryFilterEnum,
    TLPDirectedDiscoveryFilterEnumFromJSON,
    TLPDirectedDiscoveryFilterEnumFromJSONTyped,
    TLPDirectedDiscoveryFilterEnumToJSON,
} from './index';

/**
 * Contains enum which represents code block type
 * @export
 * @interface TLPDirectedDiscoveryFilter
 */
export interface TLPDirectedDiscoveryFilter {
    /**
     * 
     * @type {TLPDirectedDiscoveryFilterEnum}
     * @memberof TLPDirectedDiscoveryFilter
     */
    name: TLPDirectedDiscoveryFilterEnum;
}

export function TLPDirectedDiscoveryFilterFromJSON(json: any): TLPDirectedDiscoveryFilter {
    return TLPDirectedDiscoveryFilterFromJSONTyped(json, false);
}

export function TLPDirectedDiscoveryFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPDirectedDiscoveryFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': TLPDirectedDiscoveryFilterEnumFromJSON(json['name']),
    };
}

export function TLPDirectedDiscoveryFilterToJSON(value?: TLPDirectedDiscoveryFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': TLPDirectedDiscoveryFilterEnumToJSON(value.name),
    };
}


