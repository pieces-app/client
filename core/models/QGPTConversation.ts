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
    QGPTConversationMessage,
    QGPTConversationMessageFromJSON,
    QGPTConversationMessageFromJSONTyped,
    QGPTConversationMessageToJSON,
} from './';

/**
 * 
 * @export
 * @interface QGPTConversation
 */
export interface QGPTConversation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTConversation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<QGPTConversationMessage>}
     * @memberof QGPTConversation
     */
    iterable?: Array<QGPTConversationMessage>;
}

export function QGPTConversationFromJSON(json: any): QGPTConversation {
    return QGPTConversationFromJSONTyped(json, false);
}

export function QGPTConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTConversation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': !exists(json, 'iterable') ? undefined : ((json['iterable'] as Array<any>).map(QGPTConversationMessageFromJSON)),
    };
}

export function QGPTConversationToJSON(value?: QGPTConversation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': value.iterable === undefined ? undefined : ((value.iterable as Array<any>).map(QGPTConversationMessageToJSON)),
    };
}


