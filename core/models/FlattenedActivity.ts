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
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
} from './Application';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedUserProfile } from './FlattenedUserProfile';
import {
    FlattenedUserProfileFromJSON,
    FlattenedUserProfileFromJSONTyped,
    FlattenedUserProfileToJSON,
} from './FlattenedUserProfile';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';
import type { ReferencedAsset } from './ReferencedAsset';
import {
    ReferencedAssetFromJSON,
    ReferencedAssetFromJSONTyped,
    ReferencedAssetToJSON,
} from './ReferencedAsset';
import type { ReferencedFormat } from './ReferencedFormat';
import {
    ReferencedFormatFromJSON,
    ReferencedFormatFromJSONTyped,
    ReferencedFormatToJSON,
} from './ReferencedFormat';
import type { SeededConnectorTracking } from './SeededConnectorTracking';
import {
    SeededConnectorTrackingFromJSON,
    SeededConnectorTrackingFromJSONTyped,
    SeededConnectorTrackingToJSON,
} from './SeededConnectorTracking';

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

/**
 * Check if a given object implements the FlattenedActivity interface.
 */
export function instanceOfFlattenedActivity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;
    isInstance = isInstance && "event" in value;
    isInstance = isInstance && "application" in value;
    isInstance = isInstance && "mechanism" in value;

    return isInstance;
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

