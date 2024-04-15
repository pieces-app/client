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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * A model to support revoking a Token Generated Through PKCE
 * 
 * The behaviour of this endpoint depends on the state of the Refresh Token Revocation Deletes Grant toggle.
 * 
 * If this toggle is enabled, then each revocation request invalidates not only the specific token, but all other tokens based on the same authorization grant.
 * 
 * This means that all Refresh Tokens that have been issued for the same user, application, and audience will be revoked. If this toggle is disabled, then only the refresh token is revoked, while the grant is left intact
 * @export
 * @interface RevokedPKCE
 */
export interface RevokedPKCE {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof RevokedPKCE
     */
    schema?: EmbeddedModelSchema;
    /**
     * Your application's Client ID. The application should match the one the Refresh Token was issued for.
     * @type {string}
     * @memberof RevokedPKCE
     */
    clientId: string;
    /**
     * The Refresh Token you want to revoke.
     * @type {string}
     * @memberof RevokedPKCE
     */
    token: string;
}

/**
 * Check if a given object implements the RevokedPKCE interface.
 */
export function instanceOfRevokedPKCE(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "clientId" in value;
    isInstance = isInstance && "token" in value;

    return isInstance;
}

export function RevokedPKCEFromJSON(json: any): RevokedPKCE {
    return RevokedPKCEFromJSONTyped(json, false);
}

export function RevokedPKCEFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevokedPKCE {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'clientId': json['client_id'],
        'token': json['token'],
    };
}

export function RevokedPKCEToJSON(value?: RevokedPKCE | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'client_id': value.clientId,
        'token': value.token,
    };
}

