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
    Application,
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FlattenedUserProfile,
    FlattenedUserProfileFromJSON,
    FlattenedUserProfileFromJSONTyped,
    FlattenedUserProfileToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    ReferencedAsset,
    ReferencedAssetFromJSON,
    ReferencedAssetFromJSONTyped,
    ReferencedAssetToJSON,
    ReferencedFormat,
    ReferencedFormatFromJSON,
    ReferencedFormatFromJSONTyped,
    ReferencedFormatToJSON,
    SeededConnectorTracking,
    SeededConnectorTrackingFromJSON,
    SeededConnectorTrackingFromJSONTyped,
    SeededConnectorTrackingToJSON,
} from './';

/**
 * Note:
 * - if mechanism == internal we will not display to the user.
 * @export
 * @interface FlattenedActivity
 */
export interface FlattenedActivity {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedActivity
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedActivity
     */
    id: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedActivity
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedActivity
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {SeededConnectorTracking}
     * @memberof FlattenedActivity
     */
    event: SeededConnectorTracking;
    /**
     * 
     * @type {Application}
     * @memberof FlattenedActivity
     */
    application: Application;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedActivity
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {ReferencedAsset}
     * @memberof FlattenedActivity
     */
    asset?: ReferencedAsset;
    /**
     * 
     * @type {ReferencedFormat}
     * @memberof FlattenedActivity
     */
    format?: ReferencedFormat;
    /**
     * 
     * @type {FlattenedUserProfile}
     * @memberof FlattenedActivity
     */
    user?: FlattenedUserProfile;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof FlattenedActivity
     */
    mechanism: MechanismEnum;
    /**
     * 
     * @type {number}
     * @memberof FlattenedActivity
     */
    rank?: number;
}

export function FlattenedActivityFromJSON(json: any): FlattenedActivity {
    return FlattenedActivityFromJSONTyped(json, false);
}

export function FlattenedActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedActivity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'event': SeededConnectorTrackingFromJSON(json['event']),
        'application': ApplicationFromJSON(json['application']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'asset': !exists(json, 'asset') ? undefined : ReferencedAssetFromJSON(json['asset']),
        'format': !exists(json, 'format') ? undefined : ReferencedFormatFromJSON(json['format']),
        'user': !exists(json, 'user') ? undefined : FlattenedUserProfileFromJSON(json['user']),
        'mechanism': MechanismEnumFromJSON(json['mechanism']),
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
    };
}

export function FlattenedActivityToJSON(value?: FlattenedActivity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'event': SeededConnectorTrackingToJSON(value.event),
        'application': ApplicationToJSON(value.application),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'asset': ReferencedAssetToJSON(value.asset),
        'format': ReferencedFormatToJSON(value.format),
        'user': FlattenedUserProfileToJSON(value.user),
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'rank': value.rank,
    };
}


