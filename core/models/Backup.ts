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
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { PlatformEnum } from './PlatformEnum';
import {
    PlatformEnumFromJSON,
    PlatformEnumFromJSONTyped,
    PlatformEnumToJSON,
} from './PlatformEnum';

/**
 * This is a cloud Backup. This is specific metadata needed inorder to retrieve a Backup.
 * @export
 * @interface Backup
 */
export interface Backup {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Backup
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    timestamp: string;
    /**
     * 
     * @type {number}
     * @memberof Backup
     */
    bytes: number;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Backup
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    deviceName: string;
    /**
     * 
     * @type {PlatformEnum}
     * @memberof Backup
     */
    platform: PlatformEnum;
}

/**
 * Check if a given object implements the Backup interface.
 */
export function instanceOfBackup(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "bytes" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "deviceName" in value;
    isInstance = isInstance && "platform" in value;

    return isInstance;
}

export function BackupFromJSON(json: any): Backup {
    return BackupFromJSONTyped(json, false);
}

export function BackupFromJSONTyped(json: any, ignoreDiscriminator: boolean): Backup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'version': json['version'],
        'timestamp': json['timestamp'],
        'bytes': json['bytes'],
        'created': GroupedTimestampFromJSON(json['created']),
        'deviceName': json['device_name'],
        'platform': PlatformEnumFromJSON(json['platform']),
    };
}

export function BackupToJSON(value?: Backup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'version': value.version,
        'timestamp': value.timestamp,
        'bytes': value.bytes,
        'created': GroupedTimestampToJSON(value.created),
        'device_name': value.deviceName,
        'platform': PlatformEnumToJSON(value.platform),
    };
}

