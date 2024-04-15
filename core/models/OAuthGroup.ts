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
import type { OAuthAccount } from './OAuthAccount';
import {
    OAuthAccountFromJSON,
    OAuthAccountFromJSONTyped,
    OAuthAccountToJSON,
} from './OAuthAccount';
import type { OAuthToken } from './OAuthToken';
import {
    OAuthTokenFromJSON,
    OAuthTokenFromJSONTyped,
    OAuthTokenToJSON,
} from './OAuthToken';

/**
 * A model to group all of the properties associated with OAuthGroup
 * @export
 * @interface OAuthGroup
 */
export interface OAuthGroup {
    /**
     * 
     * @type {OAuthToken}
     * @memberof OAuthGroup
     */
    token?: OAuthToken;
    /**
     * 
     * @type {OAuthAccount}
     * @memberof OAuthGroup
     */
    account?: OAuthAccount;
}

/**
 * Check if a given object implements the OAuthGroup interface.
 */
export function instanceOfOAuthGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OAuthGroupFromJSON(json: any): OAuthGroup {
    return OAuthGroupFromJSONTyped(json, false);
}

export function OAuthGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : OAuthTokenFromJSON(json['token']),
        'account': !exists(json, 'account') ? undefined : OAuthAccountFromJSON(json['account']),
    };
}

export function OAuthGroupToJSON(value?: OAuthGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': OAuthTokenToJSON(value.token),
        'account': OAuthAccountToJSON(value.account),
    };
}

