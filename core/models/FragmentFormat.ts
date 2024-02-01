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
    FragmentMetadata,
    FragmentMetadataFromJSON,
    FragmentMetadataFromJSONTyped,
    FragmentMetadataToJSON,
    TransferableBytes,
    TransferableBytesFromJSON,
    TransferableBytesFromJSONTyped,
    TransferableBytesToJSON,
    TransferableString,
    TransferableStringFromJSON,
    TransferableStringFromJSONTyped,
    TransferableStringToJSON,
} from './index';

/**
 * This will be either a TransferableString or TransferableBytes that represent your fragment. ONLY Pass one or the other DONT pass both or neither.
 * @export
 * @interface FragmentFormat
 */
export interface FragmentFormat {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FragmentFormat
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TransferableString}
     * @memberof FragmentFormat
     */
    string?: TransferableString;
    /**
     * 
     * @type {TransferableBytes}
     * @memberof FragmentFormat
     */
    bytes?: TransferableBytes;
    /**
     * 
     * @type {FragmentMetadata}
     * @memberof FragmentFormat
     */
    metadata?: FragmentMetadata;
}

export function FragmentFormatFromJSON(json: any): FragmentFormat {
    return FragmentFormatFromJSONTyped(json, false);
}

export function FragmentFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): FragmentFormat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'string': !exists(json, 'string') ? undefined : TransferableStringFromJSON(json['string']),
        'bytes': !exists(json, 'bytes') ? undefined : TransferableBytesFromJSON(json['bytes']),
        'metadata': !exists(json, 'metadata') ? undefined : FragmentMetadataFromJSON(json['metadata']),
    };
}

export function FragmentFormatToJSON(value?: FragmentFormat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'string': TransferableStringToJSON(value.string),
        'bytes': TransferableBytesToJSON(value.bytes),
        'metadata': FragmentMetadataToJSON(value.metadata),
    };
}


