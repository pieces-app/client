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
} from './';

/**
 * A model that Generates A PKCE Challenge Object with the needed requirements.
 * @export
 * @interface ChallengedPKCE
 */
export interface ChallengedPKCE {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ChallengedPKCE
     */
    schema?: EmbeddedModelSchema;
    /**
     * An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks.
     * @type {string}
     * @memberof ChallengedPKCE
     */
    state: string;
    /**
     * A local key that is held as the comparator to state, thus they should be the same.
     * @type {string}
     * @memberof ChallengedPKCE
     */
    nonce: string;
    /**
     * Generated challenge from the code_verifier.
     * @type {string}
     * @memberof ChallengedPKCE
     */
    challenge: string;
    /**
     * Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged.
     * @type {string}
     * @memberof ChallengedPKCE
     */
    method: ChallengedPKCEMethodEnum;
    /**
     * Cryptographically random key that was used to generate the code_challenge passed to /authorize.
     * @type {string}
     * @memberof ChallengedPKCE
     */
    verifier: string;
}

/**
* @export
* @enum {string}
*/
export enum ChallengedPKCEMethodEnum {
    S256 = 'S256'
}

export function ChallengedPKCEFromJSON(json: any): ChallengedPKCE {
    return ChallengedPKCEFromJSONTyped(json, false);
}

export function ChallengedPKCEFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChallengedPKCE {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'state': json['state'],
        'nonce': json['nonce'],
        'challenge': json['challenge'],
        'method': json['method'],
        'verifier': json['verifier'],
    };
}

export function ChallengedPKCEToJSON(value?: ChallengedPKCE | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'state': value.state,
        'nonce': value.nonce,
        'challenge': value.challenge,
        'method': value.method,
        'verifier': value.verifier,
    };
}


