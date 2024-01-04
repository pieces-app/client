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
    ExportedDatabaseFormats,
    ExportedDatabaseFormatsFromJSON,
    ExportedDatabaseFormatsFromJSONTyped,
    ExportedDatabaseFormatsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ExportedDatabase
 */
export interface ExportedDatabase {
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    analyses: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    applications: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    assets: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    codeAnalyses: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    files: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    formatMetrics: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    formats: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    fragments: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    imageAnalyses: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    models: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    ocrAnalyses: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    persons: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    sensitives: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    tags: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    websites: Array<number>;
    /**
     * 
     * @type {ExportedDatabaseFormats}
     * @memberof ExportedDatabase
     */
    values: ExportedDatabaseFormats;
    /**
     * This is the version of your os_server or cloud_server that we we exporting from.
     * @type {string}
     * @memberof ExportedDatabase
     */
    version: string;
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ExportedDatabase
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    relationships?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    activities?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    annotations?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    hints?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    anchors?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    anchorPoints?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    conversations?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    conversationMessages?: Array<number>;
    /**
     * 
     * @type {ExportedDatabaseFormats}
     * @memberof ExportedDatabase
     */
    messageValues?: ExportedDatabaseFormats;
}

export function ExportedDatabaseFromJSON(json: any): ExportedDatabase {
    return ExportedDatabaseFromJSONTyped(json, false);
}

export function ExportedDatabaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportedDatabase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'analyses': json['analyses'],
        'applications': json['applications'],
        'assets': json['assets'],
        'codeAnalyses': json['codeAnalyses'],
        'files': json['files'],
        'formatMetrics': json['formatMetrics'],
        'formats': json['formats'],
        'fragments': json['fragments'],
        'imageAnalyses': json['imageAnalyses'],
        'models': json['models'],
        'ocrAnalyses': json['ocrAnalyses'],
        'persons': json['persons'],
        'sensitives': json['sensitives'],
        'tags': json['tags'],
        'websites': json['websites'],
        'values': ExportedDatabaseFormatsFromJSON(json['values']),
        'version': json['version'],
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'relationships': !exists(json, 'relationships') ? undefined : json['relationships'],
        'activities': !exists(json, 'activities') ? undefined : json['activities'],
        'annotations': !exists(json, 'annotations') ? undefined : json['annotations'],
        'hints': !exists(json, 'hints') ? undefined : json['hints'],
        'anchors': !exists(json, 'anchors') ? undefined : json['anchors'],
        'anchorPoints': !exists(json, 'anchorPoints') ? undefined : json['anchorPoints'],
        'conversations': !exists(json, 'conversations') ? undefined : json['conversations'],
        'conversationMessages': !exists(json, 'conversationMessages') ? undefined : json['conversationMessages'],
        'messageValues': !exists(json, 'messageValues') ? undefined : ExportedDatabaseFormatsFromJSON(json['messageValues']),
    };
}

export function ExportedDatabaseToJSON(value?: ExportedDatabase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'analyses': value.analyses,
        'applications': value.applications,
        'assets': value.assets,
        'codeAnalyses': value.codeAnalyses,
        'files': value.files,
        'formatMetrics': value.formatMetrics,
        'formats': value.formats,
        'fragments': value.fragments,
        'imageAnalyses': value.imageAnalyses,
        'models': value.models,
        'ocrAnalyses': value.ocrAnalyses,
        'persons': value.persons,
        'sensitives': value.sensitives,
        'tags': value.tags,
        'websites': value.websites,
        'values': ExportedDatabaseFormatsToJSON(value.values),
        'version': value.version,
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'relationships': value.relationships,
        'activities': value.activities,
        'annotations': value.annotations,
        'hints': value.hints,
        'anchors': value.anchors,
        'anchorPoints': value.anchorPoints,
        'conversations': value.conversations,
        'conversationMessages': value.conversationMessages,
        'messageValues': ExportedDatabaseFormatsToJSON(value.messageValues),
    };
}


