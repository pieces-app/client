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
    TrackedAssetEventCreationMetadataClipboard,
    TrackedAssetEventCreationMetadataClipboardFromJSON,
    TrackedAssetEventCreationMetadataClipboardFromJSONTyped,
    TrackedAssetEventCreationMetadataClipboardToJSON,
    TrackedAssetEventCreationMetadataFile,
    TrackedAssetEventCreationMetadataFileFromJSON,
    TrackedAssetEventCreationMetadataFileFromJSONTyped,
    TrackedAssetEventCreationMetadataFileToJSON,
} from './';

/**
 * Metadata attached to a creation event on an Asset
 * @export
 * @interface TrackedAssetEventCreationMetadata
 */
export interface TrackedAssetEventCreationMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetEventCreationMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TrackedAssetEventCreationMetadataClipboard}
     * @memberof TrackedAssetEventCreationMetadata
     */
    clipboard?: TrackedAssetEventCreationMetadataClipboard;
    /**
     * 
     * @type {TrackedAssetEventCreationMetadataFile}
     * @memberof TrackedAssetEventCreationMetadata
     */
    file?: TrackedAssetEventCreationMetadataFile;
}

export function TrackedAssetEventCreationMetadataFromJSON(json: any): TrackedAssetEventCreationMetadata {
    return TrackedAssetEventCreationMetadataFromJSONTyped(json, false);
}

export function TrackedAssetEventCreationMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventCreationMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'clipboard': !exists(json, 'clipboard') ? undefined : TrackedAssetEventCreationMetadataClipboardFromJSON(json['clipboard']),
        'file': !exists(json, 'file') ? undefined : TrackedAssetEventCreationMetadataFileFromJSON(json['file']),
    };
}

export function TrackedAssetEventCreationMetadataToJSON(value?: TrackedAssetEventCreationMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'clipboard': TrackedAssetEventCreationMetadataClipboardToJSON(value.clipboard),
        'file': TrackedAssetEventCreationMetadataFileToJSON(value.file),
    };
}


