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
    Application,
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    ByteDescriptor,
    ByteDescriptorFromJSON,
    ByteDescriptorFromJSONTyped,
    ByteDescriptorToJSON,
    Classification,
    ClassificationFromJSON,
    ClassificationFromJSONTyped,
    ClassificationToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FileFormat,
    FileFormatFromJSON,
    FileFormatFromJSONTyped,
    FileFormatToJSON,
    FlattenedActivities,
    FlattenedActivitiesFromJSON,
    FlattenedActivitiesFromJSONTyped,
    FlattenedActivitiesToJSON,
    FlattenedAnalysis,
    FlattenedAnalysisFromJSON,
    FlattenedAnalysisFromJSONTyped,
    FlattenedAnalysisToJSON,
    FlattenedTags,
    FlattenedTagsFromJSON,
    FlattenedTagsFromJSONTyped,
    FlattenedTagsToJSON,
    FlattenedWebsites,
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
    FragmentFormat,
    FragmentFormatFromJSON,
    FragmentFormatFromJSONTyped,
    FragmentFormatToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    Relationship,
    RelationshipFromJSON,
    RelationshipFromJSONTyped,
    RelationshipToJSON,
    Role,
    RoleFromJSON,
    RoleFromJSONTyped,
    RoleToJSON,
} from './';

/**
 * A representation of Data for a particular Form Factor of an Asset.[DAG Compatible - Directed Acyclic Graph Data Structure]
 * 
 * FlattenedFormats prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.
 * 
 * i.e. FlattenedFormat.asset is Type String
 * 
 * fragment or file will always be defined. Even thought they are both optional.
 * @export
 * @interface FlattenedFormat
 */
export interface FlattenedFormat {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedFormat
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedFormat
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedFormat
     */
    creator: string;
    /**
     * 
     * @type {Classification}
     * @memberof FlattenedFormat
     */
    classification: Classification;
    /**
     * 
     * @type {string}
     * @memberof FlattenedFormat
     */
    icon?: string;
    /**
     * 
     * @type {Role}
     * @memberof FlattenedFormat
     */
    role: Role;
    /**
     * 
     * @type {Application}
     * @memberof FlattenedFormat
     */
    application: Application;
    /**
     * A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters) 
     * @type {string}
     * @memberof FlattenedFormat
     */
    asset: string;
    /**
     * 
     * @type {ByteDescriptor}
     * @memberof FlattenedFormat
     */
    bytes: ByteDescriptor;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedFormat
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedFormat
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedFormat
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedFormat
     */
    synced?: GroupedTimestamp;
    /**
     * This is a path used to determine what path this format lives at within the cloud.
     * @type {string}
     * @memberof FlattenedFormat
     */
    cloud?: string;
    /**
     * 
     * @type {FragmentFormat}
     * @memberof FlattenedFormat
     */
    fragment?: FragmentFormat;
    /**
     * 
     * @type {FileFormat}
     * @memberof FlattenedFormat
     */
    file?: FileFormat;
    /**
     * 
     * @type {FlattenedAnalysis}
     * @memberof FlattenedFormat
     */
    analysis?: FlattenedAnalysis;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof FlattenedFormat
     */
    websites?: FlattenedWebsites;
    /**
     * 
     * @type {FlattenedTags}
     * @memberof FlattenedFormat
     */
    tags?: FlattenedTags;
    /**
     * 
     * @type {Relationship}
     * @memberof FlattenedFormat
     */
    relationship?: Relationship;
    /**
     * 
     * @type {FlattenedActivities}
     * @memberof FlattenedFormat
     */
    activities?: FlattenedActivities;
}

export function FlattenedFormatFromJSON(json: any): FlattenedFormat {
    return FlattenedFormatFromJSONTyped(json, false);
}

export function FlattenedFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedFormat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'creator': json['creator'],
        'classification': ClassificationFromJSON(json['classification']),
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'role': RoleFromJSON(json['role']),
        'application': ApplicationFromJSON(json['application']),
        'asset': json['asset'],
        'bytes': ByteDescriptorFromJSON(json['bytes']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'synced': !exists(json, 'synced') ? undefined : GroupedTimestampFromJSON(json['synced']),
        'cloud': !exists(json, 'cloud') ? undefined : json['cloud'],
        'fragment': !exists(json, 'fragment') ? undefined : FragmentFormatFromJSON(json['fragment']),
        'file': !exists(json, 'file') ? undefined : FileFormatFromJSON(json['file']),
        'analysis': !exists(json, 'analysis') ? undefined : FlattenedAnalysisFromJSON(json['analysis']),
        'websites': !exists(json, 'websites') ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'tags': !exists(json, 'tags') ? undefined : FlattenedTagsFromJSON(json['tags']),
        'relationship': !exists(json, 'relationship') ? undefined : RelationshipFromJSON(json['relationship']),
        'activities': !exists(json, 'activities') ? undefined : FlattenedActivitiesFromJSON(json['activities']),
    };
}

export function FlattenedFormatToJSON(value?: FlattenedFormat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'creator': value.creator,
        'classification': ClassificationToJSON(value.classification),
        'icon': value.icon,
        'role': RoleToJSON(value.role),
        'application': ApplicationToJSON(value.application),
        'asset': value.asset,
        'bytes': ByteDescriptorToJSON(value.bytes),
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'synced': GroupedTimestampToJSON(value.synced),
        'cloud': value.cloud,
        'fragment': FragmentFormatToJSON(value.fragment),
        'file': FileFormatToJSON(value.file),
        'analysis': FlattenedAnalysisToJSON(value.analysis),
        'websites': FlattenedWebsitesToJSON(value.websites),
        'tags': FlattenedTagsToJSON(value.tags),
        'relationship': RelationshipToJSON(value.relationship),
        'activities': FlattenedActivitiesToJSON(value.activities),
    };
}


