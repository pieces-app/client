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
    ExternalProviderProfileData,
    ExternalProviderProfileDataFromJSON,
    ExternalProviderProfileDataFromJSONTyped,
    ExternalProviderProfileDataToJSON,
    ExternalProviderTypeEnum,
    ExternalProviderTypeEnumFromJSON,
    ExternalProviderTypeEnumFromJSONTyped,
    ExternalProviderTypeEnumToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './';

/**
 * I know that profileData and user_id have differeing casing but they are done because they map to Auth0's projeecties.
 * @export
 * @interface ExternalProvider
 */
export interface ExternalProvider {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ExternalProvider
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ExternalProviderTypeEnum}
     * @memberof ExternalProvider
     */
    type: ExternalProviderTypeEnum;
    /**
     * This is the user_id within the provider.
     * @type {string}
     * @memberof ExternalProvider
     */
    userId: string;
    /**
     * This is optional here, but will be present for BB, Github, and google.
     * @type {string}
     * @memberof ExternalProvider
     */
    accessToken?: string;
    /**
     * Some providers have an expiration on their access token. IE BB, Google, NOT Github.
     * @type {number}
     * @memberof ExternalProvider
     */
    expiresIn?: number;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof ExternalProvider
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof ExternalProvider
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {ExternalProviderProfileData}
     * @memberof ExternalProvider
     */
    profileData?: ExternalProviderProfileData;
    /**
     * This is an optional field that will be provided onentreprise connections. ie is type == waad then connection might be PiecesApp. However is other cases,you my find your provider and connection is the exact same string. To decifer between the two, you can use the isSocial bool.
     * @type {string}
     * @memberof ExternalProvider
     */
    connection?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExternalProvider
     */
    isSocial?: boolean;
}

export function ExternalProviderFromJSON(json: any): ExternalProvider {
    return ExternalProviderFromJSONTyped(json, false);
}

export function ExternalProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalProvider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'type': ExternalProviderTypeEnumFromJSON(json['type']),
        'userId': json['user_id'],
        'accessToken': !exists(json, 'access_token') ? undefined : json['access_token'],
        'expiresIn': !exists(json, 'expires_in') ? undefined : json['expires_in'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'profileData': !exists(json, 'profileData') ? undefined : ExternalProviderProfileDataFromJSON(json['profileData']),
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
        'isSocial': !exists(json, 'isSocial') ? undefined : json['isSocial'],
    };
}

export function ExternalProviderToJSON(value?: ExternalProvider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'type': ExternalProviderTypeEnumToJSON(value.type),
        'user_id': value.userId,
        'access_token': value.accessToken,
        'expires_in': value.expiresIn,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'profileData': ExternalProviderProfileDataToJSON(value.profileData),
        'connection': value.connection,
        'isSocial': value.isSocial,
    };
}


