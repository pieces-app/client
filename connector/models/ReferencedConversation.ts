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
    FlattenedConversation,
    FlattenedConversationFromJSON,
    FlattenedConversationFromJSONTyped,
    FlattenedConversationToJSON,
} from './';

/**
 * This is a DAG-Safe Minimal version of a Conversation.
 * @export
 * @interface ReferencedConversation
 */
export interface ReferencedConversation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedConversation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedConversation
     */
    id: string;
    /**
     * 
     * @type {FlattenedConversation}
     * @memberof ReferencedConversation
     */
    reference?: FlattenedConversation;
}

export function ReferencedConversationFromJSON(json: any): ReferencedConversation {
    return ReferencedConversationFromJSONTyped(json, false);
}

export function ReferencedConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedConversation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedConversationFromJSON(json['reference']),
    };
}

export function ReferencedConversationToJSON(value?: ReferencedConversation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedConversationToJSON(value.reference),
    };
}


