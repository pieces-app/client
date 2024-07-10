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
import type { UpdatingStatusEnum } from './UpdatingStatusEnum';
import {
    UpdatingStatusEnumFromJSON,
    UpdatingStatusEnumFromJSONTyped,
    UpdatingStatusEnumToJSON,
} from './UpdatingStatusEnum';

/**
 * This is the model for the progress of the current update of Pieces os.
 * 
 * /os/update/check/stream && /os/update/check/
 * 
 * we will emit on a progress update
 * 
 * updated: is an optional property that will let us know when the update was checked last.
 * 
 * NOTE: it is reccommended to use the stream instead of pulling.
 * NOTE: lets think about if we want to have a closing(as well as how we want to handle restarts)
 * @export
 * @interface OSServerUpdateStatus
 */
export interface OSServerUpdateStatus {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OSServerUpdateStatus
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {UpdatingStatusEnum}
     * @memberof OSServerUpdateStatus
     */
    status: UpdatingStatusEnum;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof OSServerUpdateStatus
     */
    updated?: GroupedTimestamp;
    /**
     * Optionally if the update is in progress you will recieve a download percent(from 0-100).
     * @type {number}
     * @memberof OSServerUpdateStatus
     */
    percentage?: number | null;
}

/**
 * Check if a given object implements the OSServerUpdateStatus interface.
 */
export function instanceOfOSServerUpdateStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function OSServerUpdateStatusFromJSON(json: any): OSServerUpdateStatus {
    return OSServerUpdateStatusFromJSONTyped(json, false);
}

export function OSServerUpdateStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSServerUpdateStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'status': UpdatingStatusEnumFromJSON(json['status']),
        'updated': !exists(json, 'updated') ? undefined : GroupedTimestampFromJSON(json['updated']),
        'percentage': !exists(json, 'percentage') ? undefined : json['percentage'],
    };
}

export function OSServerUpdateStatusToJSON(value?: OSServerUpdateStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'status': UpdatingStatusEnumToJSON(value.status),
        'updated': GroupedTimestampToJSON(value.updated),
        'percentage': value.percentage,
    };
}

