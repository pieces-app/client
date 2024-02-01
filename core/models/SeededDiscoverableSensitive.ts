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
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    SensitiveCategoryEnum,
    SensitiveCategoryEnumFromJSON,
    SensitiveCategoryEnumFromJSONTyped,
    SensitiveCategoryEnumToJSON,
    SensitiveMetadata,
    SensitiveMetadataFromJSON,
    SensitiveMetadataFromJSONTyped,
    SensitiveMetadataToJSON,
    SensitiveSeverityEnum,
    SensitiveSeverityEnumFromJSON,
    SensitiveSeverityEnumFromJSONTyped,
    SensitiveSeverityEnumToJSON,
} from './index';

/**
 * This is the SeededDiscoverableSensitive, this has every property that the seededSensitive has except this one is all optionally passed in. and will override our classification if provided.
 * @export
 * @interface SeededDiscoverableSensitive
 */
export interface SeededDiscoverableSensitive {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableSensitive
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof SeededDiscoverableSensitive
     */
    asset: string;
    /**
     * this is the string representative of the sensative piece of data.
     * @type {string}
     * @memberof SeededDiscoverableSensitive
     */
    text: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededDiscoverableSensitive
     */
    mechanism?: MechanismEnum;
    /**
     * 
     * @type {SensitiveCategoryEnum}
     * @memberof SeededDiscoverableSensitive
     */
    category?: SensitiveCategoryEnum;
    /**
     * 
     * @type {SensitiveSeverityEnum}
     * @memberof SeededDiscoverableSensitive
     */
    severity?: SensitiveSeverityEnum;
    /**
     * 
     * @type {string}
     * @memberof SeededDiscoverableSensitive
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SeededDiscoverableSensitive
     */
    description?: string;
    /**
     * 
     * @type {SensitiveMetadata}
     * @memberof SeededDiscoverableSensitive
     */
    metadata?: SensitiveMetadata;
}

export function SeededDiscoverableSensitiveFromJSON(json: any): SeededDiscoverableSensitive {
    return SeededDiscoverableSensitiveFromJSONTyped(json, false);
}

export function SeededDiscoverableSensitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableSensitive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': json['asset'],
        'text': json['text'],
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'category': !exists(json, 'category') ? undefined : SensitiveCategoryEnumFromJSON(json['category']),
        'severity': !exists(json, 'severity') ? undefined : SensitiveSeverityEnumFromJSON(json['severity']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'metadata': !exists(json, 'metadata') ? undefined : SensitiveMetadataFromJSON(json['metadata']),
    };
}

export function SeededDiscoverableSensitiveToJSON(value?: SeededDiscoverableSensitive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'asset': value.asset,
        'text': value.text,
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'category': SensitiveCategoryEnumToJSON(value.category),
        'severity': SensitiveSeverityEnumToJSON(value.severity),
        'name': value.name,
        'description': value.description,
        'metadata': SensitiveMetadataToJSON(value.metadata),
    };
}


