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
    SeededAnchor,
    SeededAnchorFromJSON,
    SeededAnchorFromJSONTyped,
    SeededAnchorToJSON,
    SeededAnnotation,
    SeededAnnotationFromJSON,
    SeededAnnotationFromJSONTyped,
    SeededAnnotationToJSON,
    SeededAssetSensitive,
    SeededAssetSensitiveFromJSON,
    SeededAssetSensitiveFromJSONTyped,
    SeededAssetSensitiveToJSON,
    SeededAssetTag,
    SeededAssetTagFromJSON,
    SeededAssetTagFromJSONTyped,
    SeededAssetTagToJSON,
    SeededAssetWebsite,
    SeededAssetWebsiteFromJSON,
    SeededAssetWebsiteFromJSONTyped,
    SeededAssetWebsiteToJSON,
    SeededHint,
    SeededHintFromJSON,
    SeededHintFromJSONTyped,
    SeededHintToJSON,
    SeededPerson,
    SeededPersonFromJSON,
    SeededPersonFromJSONTyped,
    SeededPersonToJSON,
} from './index';

/**
 * This is optional metadata sent with the SeededAsset and other SeededAssets ie (UE, Jetbrains...)
 * 
 * Note: if a user/develop didnt explicitly state a mechanism we will default to manual(user Driven only)
 * @export
 * @interface SeededAssetMetadata
 */
export interface SeededAssetMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededAssetMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the name of the asset.
     * @type {string}
     * @memberof SeededAssetMetadata
     */
    name?: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededAssetMetadata
     */
    mechanism?: MechanismEnum;
    /**
     * (optional) can add some tags to associate to this asset.
     * @type {Array<SeededAssetTag>}
     * @memberof SeededAssetMetadata
     */
    tags?: Array<SeededAssetTag>;
    /**
     * 
     * @type {Array<SeededAssetWebsite>}
     * @memberof SeededAssetMetadata
     */
    websites?: Array<SeededAssetWebsite>;
    /**
     * 
     * @type {Array<SeededAssetSensitive>}
     * @memberof SeededAssetMetadata
     */
    sensitives?: Array<SeededAssetSensitive>;
    /**
     * 
     * @type {Array<SeededPerson>}
     * @memberof SeededAssetMetadata
     */
    persons?: Array<SeededPerson>;
    /**
     * 
     * @type {Array<SeededAnnotation>}
     * @memberof SeededAssetMetadata
     */
    annotations?: Array<SeededAnnotation>;
    /**
     * 
     * @type {Array<SeededHint>}
     * @memberof SeededAssetMetadata
     */
    hints?: Array<SeededHint>;
    /**
     * 
     * @type {Array<SeededAnchor>}
     * @memberof SeededAssetMetadata
     */
    anchors?: Array<SeededAnchor>;
}

export function SeededAssetMetadataFromJSON(json: any): SeededAssetMetadata {
    return SeededAssetMetadataFromJSONTyped(json, false);
}

export function SeededAssetMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAssetMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(SeededAssetTagFromJSON)),
        'websites': !exists(json, 'websites') ? undefined : ((json['websites'] as Array<any>).map(SeededAssetWebsiteFromJSON)),
        'sensitives': !exists(json, 'sensitives') ? undefined : ((json['sensitives'] as Array<any>).map(SeededAssetSensitiveFromJSON)),
        'persons': !exists(json, 'persons') ? undefined : ((json['persons'] as Array<any>).map(SeededPersonFromJSON)),
        'annotations': !exists(json, 'annotations') ? undefined : ((json['annotations'] as Array<any>).map(SeededAnnotationFromJSON)),
        'hints': !exists(json, 'hints') ? undefined : ((json['hints'] as Array<any>).map(SeededHintFromJSON)),
        'anchors': !exists(json, 'anchors') ? undefined : ((json['anchors'] as Array<any>).map(SeededAnchorFromJSON)),
    };
}

export function SeededAssetMetadataToJSON(value?: SeededAssetMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'name': value.name,
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(SeededAssetTagToJSON)),
        'websites': value.websites === undefined ? undefined : ((value.websites as Array<any>).map(SeededAssetWebsiteToJSON)),
        'sensitives': value.sensitives === undefined ? undefined : ((value.sensitives as Array<any>).map(SeededAssetSensitiveToJSON)),
        'persons': value.persons === undefined ? undefined : ((value.persons as Array<any>).map(SeededPersonToJSON)),
        'annotations': value.annotations === undefined ? undefined : ((value.annotations as Array<any>).map(SeededAnnotationToJSON)),
        'hints': value.hints === undefined ? undefined : ((value.hints as Array<any>).map(SeededHintToJSON)),
        'anchors': value.anchors === undefined ? undefined : ((value.anchors as Array<any>).map(SeededAnchorToJSON)),
    };
}


