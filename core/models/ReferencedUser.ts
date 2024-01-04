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
    FlattenedUserProfile,
    FlattenedUserProfileFromJSON,
    FlattenedUserProfileFromJSONTyped,
    FlattenedUserProfileToJSON,
} from './';

/**
 * A object to reference a user's ID and optionally a FlattenedUserProfile Instance 
 * @export
 * @interface ReferencedUser
 */
export interface ReferencedUser {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedUser
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedUser
     */
    id: string;
    /**
     * 
     * @type {FlattenedUserProfile}
     * @memberof ReferencedUser
     */
    reference?: FlattenedUserProfile;
}

export function ReferencedUserFromJSON(json: any): ReferencedUser {
    return ReferencedUserFromJSONTyped(json, false);
}

export function ReferencedUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedUserProfileFromJSON(json['reference']),
    };
}

export function ReferencedUserToJSON(value?: ReferencedUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedUserProfileToJSON(value.reference),
    };
}


