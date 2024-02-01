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
    ByteDescriptor,
    ByteDescriptorFromJSON,
    ByteDescriptorFromJSONTyped,
    ByteDescriptorToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    ExternalMLProviderEnum,
    ExternalMLProviderEnumFromJSON,
    ExternalMLProviderEnumFromJSONTyped,
    ExternalMLProviderEnumToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    ModelFoundationEnum,
    ModelFoundationEnumFromJSON,
    ModelFoundationEnumFromJSONTyped,
    ModelFoundationEnumToJSON,
    ModelMaxTokens,
    ModelMaxTokensFromJSON,
    ModelMaxTokensFromJSONTyped,
    ModelMaxTokensToJSON,
    ModelTypeEnum,
    ModelTypeEnumFromJSON,
    ModelTypeEnumFromJSONTyped,
    ModelTypeEnumToJSON,
    ModelUsageEnum,
    ModelUsageEnumFromJSON,
    ModelUsageEnumFromJSONTyped,
    ModelUsageEnumToJSON,
} from './index';

/**
 * This is Precursor to a Model.
 * 
 * bytes: here is the size of the model in a file local on your computer.
 * ram: is the amount of ram usage when the model is loaded into memory.
 * @export
 * @interface SeededModel
 */
export interface SeededModel {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededModel
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is a version of the model.
     * @type {string}
     * @memberof SeededModel
     */
    version: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof SeededModel
     */
    created: GroupedTimestamp;
    /**
     * This is an Optional Name of the Model.
     * @type {string}
     * @memberof SeededModel
     */
    name: string;
    /**
     * An Optional Description of the model itself.
     * @type {string}
     * @memberof SeededModel
     */
    description?: string;
    /**
     * This will inform the user if this was a model that is hosted in the cloud
     * @type {boolean}
     * @memberof SeededModel
     */
    cloud: boolean;
    /**
     * 
     * @type {ModelTypeEnum}
     * @memberof SeededModel
     */
    type: ModelTypeEnum;
    /**
     * 
     * @type {ModelUsageEnum}
     * @memberof SeededModel
     */
    usage: ModelUsageEnum;
    /**
     * 
     * @type {ByteDescriptor}
     * @memberof SeededModel
     */
    bytes?: ByteDescriptor;
    /**
     * 
     * @type {ByteDescriptor}
     * @memberof SeededModel
     */
    ram?: ByteDescriptor;
    /**
     * quantization is a string like: q8f16_0,  q4f16_1, etc...
     * @type {string}
     * @memberof SeededModel
     */
    quantization?: string;
    /**
     * 
     * @type {ModelFoundationEnum}
     * @memberof SeededModel
     */
    foundation?: ModelFoundationEnum;
    /**
     * This is an optional bool to let us know if this model has been downloaded locally.
     * @type {boolean}
     * @memberof SeededModel
     */
    downloaded?: boolean;
    /**
     * This is the unique model name used to load the model.
     * @type {string}
     * @memberof SeededModel
     */
    unique?: string;
    /**
     * This is the number of parameters in terms of billions.
     * @type {number}
     * @memberof SeededModel
     */
    parameters?: number | null;
    /**
     * 
     * @type {ExternalMLProviderEnum}
     * @memberof SeededModel
     */
    provider?: ExternalMLProviderEnum;
    /**
     * This is an optional bool that is optimized for CPU usage.
     * @type {boolean}
     * @memberof SeededModel
     */
    cpu?: boolean;
    /**
     * 
     * @type {ModelMaxTokens}
     * @memberof SeededModel
     */
    maxTokens?: ModelMaxTokens;
    /**
     * This is reserved to custommly registed models.
     * @type {boolean}
     * @memberof SeededModel
     */
    custom?: boolean;
}

export function SeededModelFromJSON(json: any): SeededModel {
    return SeededModelFromJSONTyped(json, false);
}

export function SeededModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'version': json['version'],
        'created': GroupedTimestampFromJSON(json['created']),
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'cloud': json['cloud'],
        'type': ModelTypeEnumFromJSON(json['type']),
        'usage': ModelUsageEnumFromJSON(json['usage']),
        'bytes': !exists(json, 'bytes') ? undefined : ByteDescriptorFromJSON(json['bytes']),
        'ram': !exists(json, 'ram') ? undefined : ByteDescriptorFromJSON(json['ram']),
        'quantization': !exists(json, 'quantization') ? undefined : json['quantization'],
        'foundation': !exists(json, 'foundation') ? undefined : ModelFoundationEnumFromJSON(json['foundation']),
        'downloaded': !exists(json, 'downloaded') ? undefined : json['downloaded'],
        'unique': !exists(json, 'unique') ? undefined : json['unique'],
        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
        'provider': !exists(json, 'provider') ? undefined : ExternalMLProviderEnumFromJSON(json['provider']),
        'cpu': !exists(json, 'cpu') ? undefined : json['cpu'],
        'maxTokens': !exists(json, 'maxTokens') ? undefined : ModelMaxTokensFromJSON(json['maxTokens']),
        'custom': !exists(json, 'custom') ? undefined : json['custom'],
    };
}

export function SeededModelToJSON(value?: SeededModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'version': value.version,
        'created': GroupedTimestampToJSON(value.created),
        'name': value.name,
        'description': value.description,
        'cloud': value.cloud,
        'type': ModelTypeEnumToJSON(value.type),
        'usage': ModelUsageEnumToJSON(value.usage),
        'bytes': ByteDescriptorToJSON(value.bytes),
        'ram': ByteDescriptorToJSON(value.ram),
        'quantization': value.quantization,
        'foundation': ModelFoundationEnumToJSON(value.foundation),
        'downloaded': value.downloaded,
        'unique': value.unique,
        'parameters': value.parameters,
        'provider': ExternalMLProviderEnumToJSON(value.provider),
        'cpu': value.cpu,
        'maxTokens': ModelMaxTokensToJSON(value.maxTokens),
        'custom': value.custom,
    };
}


