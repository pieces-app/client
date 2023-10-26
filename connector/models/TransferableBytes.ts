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
} from './';

/**
 * Bytes is a Model for A FileFormat. Raw and file are the only 2 that are currently supported. Raw and file are an array of integers that represent the file.Typical conversion UTF8 -> array[int] or UTF8 -> array[bytes(in hexidecimal)] -> array[int]. Either way you convert is up to you but the type we need here is an array of integers.
 * 
 * [NOT IMPLEMENTED] base64, base64_url, data_url
 * [IMPLEMENTED] raw
 * @export
 * @interface TransferableBytes
 */
export interface TransferableBytes {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TransferableBytes
     */
    schema?: EmbeddedModelSchema;
    /**
     * IMPLEMENTED
     * @type {Array<number>}
     * @memberof TransferableBytes
     */
    raw?: Array<number>;
    /**
     * NOT IMPLEMENTED
     * @type {Array<number>}
     * @memberof TransferableBytes
     */
    base64?: Array<number>;
    /**
     * NOT IMPLEMENTED
     * @type {Array<number>}
     * @memberof TransferableBytes
     */
    base64Url?: Array<number>;
    /**
     * NOT IMPLEMENTED
     * @type {Array<number>}
     * @memberof TransferableBytes
     */
    dataUrl?: Array<number>;
}

export function TransferableBytesFromJSON(json: any): TransferableBytes {
    return TransferableBytesFromJSONTyped(json, false);
}

export function TransferableBytesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferableBytes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'raw': !exists(json, 'raw') ? undefined : json['raw'],
        'base64': !exists(json, 'base64') ? undefined : json['base64'],
        'base64Url': !exists(json, 'base64_url') ? undefined : json['base64_url'],
        'dataUrl': !exists(json, 'data_url') ? undefined : json['data_url'],
    };
}

export function TransferableBytesToJSON(value?: TransferableBytes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'raw': value.raw,
        'base64': value.base64,
        'base64_url': value.base64Url,
        'data_url': value.dataUrl,
    };
}


