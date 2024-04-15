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
import type { QGPTConversation } from './QGPTConversation';
import {
    QGPTConversationFromJSON,
    QGPTConversationFromJSONTyped,
    QGPTConversationToJSON,
} from './QGPTConversation';
import type { Seed } from './Seed';
import {
    SeedFromJSON,
    SeedFromJSONTyped,
    SeedToJSON,
} from './Seed';

/**
 * This is used for /qgpt/persons/related.
 * 
 * will accept a seed, or conversation all optionally.
 * 
 * @export
 * @interface QGPTPersonsRelatedInput
 */
export interface QGPTPersonsRelatedInput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTPersonsRelatedInput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Seed}
     * @memberof QGPTPersonsRelatedInput
     */
    seed?: Seed;
    /**
     * 
     * @type {QGPTConversation}
     * @memberof QGPTPersonsRelatedInput
     */
    conversation?: QGPTConversation;
    /**
     * optional application id
     * @type {string}
     * @memberof QGPTPersonsRelatedInput
     */
    application?: string;
    /**
     * optional model id
     * @type {string}
     * @memberof QGPTPersonsRelatedInput
     */
    model?: string;
}

/**
 * Check if a given object implements the QGPTPersonsRelatedInput interface.
 */
export function instanceOfQGPTPersonsRelatedInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QGPTPersonsRelatedInputFromJSON(json: any): QGPTPersonsRelatedInput {
    return QGPTPersonsRelatedInputFromJSONTyped(json, false);
}

export function QGPTPersonsRelatedInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTPersonsRelatedInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'seed': !exists(json, 'seed') ? undefined : SeedFromJSON(json['seed']),
        'conversation': !exists(json, 'conversation') ? undefined : QGPTConversationFromJSON(json['conversation']),
        'application': !exists(json, 'application') ? undefined : json['application'],
        'model': !exists(json, 'model') ? undefined : json['model'],
    };
}

export function QGPTPersonsRelatedInputToJSON(value?: QGPTPersonsRelatedInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'seed': SeedToJSON(value.seed),
        'conversation': QGPTConversationToJSON(value.conversation),
        'application': value.application,
        'model': value.model,
    };
}

