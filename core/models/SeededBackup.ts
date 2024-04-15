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
 * This is a precursor to a Backup, for now this will not need to take any properties.
 * @export
 * @interface SeededBackup
 */
export interface SeededBackup {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededBackup
     */
    schema?: EmbeddedModelSchema;
}

/**
 * Check if a given object implements the SeededBackup interface.
 */
export function instanceOfSeededBackup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SeededBackupFromJSON(json: any): SeededBackup {
    return SeededBackupFromJSONTyped(json, false);
}

export function SeededBackupFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededBackup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
    };
}

export function SeededBackupToJSON(value?: SeededBackup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
    };
}

