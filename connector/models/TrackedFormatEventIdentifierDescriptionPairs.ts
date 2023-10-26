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
 * This is a model that allows us to send send over super specific format related events such as copied, deleted, downloaded, etc
 * @export
 * @interface TrackedFormatEventIdentifierDescriptionPairs
 */
export interface TrackedFormatEventIdentifierDescriptionPairs {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    schema?: EmbeddedModelSchema;
    /**
     * The key value pair for an asset being created.
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatCreated?: TrackedFormatEventIdentifierDescriptionPairsFormatCreatedEnum;
    /**
     * If a format was copied entirely
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatCopied?: TrackedFormatEventIdentifierDescriptionPairsFormatCopiedEnum;
    /**
     * If a format was copied partially
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatPartiallyCopied?: TrackedFormatEventIdentifierDescriptionPairsFormatPartiallyCopiedEnum;
    /**
     * If a format was downloaded
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatDownloaded?: TrackedFormatEventIdentifierDescriptionPairsFormatDownloadedEnum;
    /**
     * If an format was deleted
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatDeleted?: TrackedFormatEventIdentifierDescriptionPairsFormatDeletedEnum;
    /**
     * If a generic classification was changed on a format
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatGenericClassificationUpdated?: TrackedFormatEventIdentifierDescriptionPairsFormatGenericClassificationUpdatedEnum;
    /**
     * If a specific classification was changed on a format
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatSpecificClassificationUpdated?: TrackedFormatEventIdentifierDescriptionPairsFormatSpecificClassificationUpdatedEnum;
    /**
     * a format was updated, generic update.
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatUpdated?: TrackedFormatEventIdentifierDescriptionPairsFormatUpdatedEnum;
    /**
     * a format was inserted
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatInserted?: TrackedFormatEventIdentifierDescriptionPairsFormatInsertedEnum;
    /**
     * a format's value was update ie, the text, etc...
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatValueEdited?: TrackedFormatEventIdentifierDescriptionPairsFormatValueEditedEnum;
}

/**
* @export
* @enum {string}
*/
export enum TrackedFormatEventIdentifierDescriptionPairsFormatCreatedEnum {
    AFormatWasCreated = 'a_format_was_created'
}/**
* @export
* @enum {string}
*/
export enum TrackedFormatEventIdentifierDescriptionPairsFormatCopiedEnum {
    IfAFormatWasEntirelyCopied = 'if_a_format_was_entirely_copied'
}/**
* @export
* @enum {string}
*/
export enum TrackedFormatEventIdentifierDescriptionPairsFormatPartiallyCopiedEnum {
    IfAFormatWasPartiallyCopied = 'if_a_format_was_partially_copied'
}/**
* @export
* @enum {string}
*/
export enum TrackedFormatEventIdentifierDescriptionPairsFormatDownloadedEnum {
    IfAFormatWasDownloaded = 'if_a_format_was_downloaded'
}/**
* @export
* @enum {string}
*/
export enum TrackedFormatEventIdentifierDescriptionPairsFormatDeletedEnum {
    IfAFormatWasDeleted = 'if_a_format_was_deleted'
}/**
* @export
* @enum {string}
*/
export enum TrackedFormatEventIdentifierDescriptionPairsFormatGenericClassificationUpdatedEnum {
    IfAGenericClassificationWasChangedOnAFormat = 'if_a_generic_classification_was_changed_on_a_format'
}/**
* @export
* @enum {string}
*/
export enum TrackedFormatEventIdentifierDescriptionPairsFormatSpecificClassificationUpdatedEnum {
    IfASpecificClassificationWasChangedOnAFormat = 'if_a_specific_classification_was_changed_on_a_format'
}/**
* @export
* @enum {string}
*/
export enum TrackedFormatEventIdentifierDescriptionPairsFormatUpdatedEnum {
    AFormatWasUpdated = 'a_format_was_updated'
}/**
* @export
* @enum {string}
*/
export enum TrackedFormatEventIdentifierDescriptionPairsFormatInsertedEnum {
    AFormatWasInserted = 'a_format_was_inserted'
}/**
* @export
* @enum {string}
*/
export enum TrackedFormatEventIdentifierDescriptionPairsFormatValueEditedEnum {
    AFormatValueWasEdited = 'a_format_value_was_edited'
}

export function TrackedFormatEventIdentifierDescriptionPairsFromJSON(json: any): TrackedFormatEventIdentifierDescriptionPairs {
    return TrackedFormatEventIdentifierDescriptionPairsFromJSONTyped(json, false);
}

export function TrackedFormatEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedFormatEventIdentifierDescriptionPairs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'formatCreated': !exists(json, 'format_created') ? undefined : json['format_created'],
        'formatCopied': !exists(json, 'format_copied') ? undefined : json['format_copied'],
        'formatPartiallyCopied': !exists(json, 'format_partially_copied') ? undefined : json['format_partially_copied'],
        'formatDownloaded': !exists(json, 'format_downloaded') ? undefined : json['format_downloaded'],
        'formatDeleted': !exists(json, 'format_deleted') ? undefined : json['format_deleted'],
        'formatGenericClassificationUpdated': !exists(json, 'format_generic_classification_updated') ? undefined : json['format_generic_classification_updated'],
        'formatSpecificClassificationUpdated': !exists(json, 'format_specific_classification_updated') ? undefined : json['format_specific_classification_updated'],
        'formatUpdated': !exists(json, 'format_updated') ? undefined : json['format_updated'],
        'formatInserted': !exists(json, 'format_inserted') ? undefined : json['format_inserted'],
        'formatValueEdited': !exists(json, 'format_value_edited') ? undefined : json['format_value_edited'],
    };
}

export function TrackedFormatEventIdentifierDescriptionPairsToJSON(value?: TrackedFormatEventIdentifierDescriptionPairs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'format_created': value.formatCreated,
        'format_copied': value.formatCopied,
        'format_partially_copied': value.formatPartiallyCopied,
        'format_downloaded': value.formatDownloaded,
        'format_deleted': value.formatDeleted,
        'format_generic_classification_updated': value.formatGenericClassificationUpdated,
        'format_specific_classification_updated': value.formatSpecificClassificationUpdated,
        'format_updated': value.formatUpdated,
        'format_inserted': value.formatInserted,
        'format_value_edited': value.formatValueEdited,
    };
}


