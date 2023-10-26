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
import { EmbeddedModelSchema, ReferencedConversationMessage } from './';
/**
 * This is a flattened plural version of ConversationMessages
 * @export
 * @interface FlattenedConversationMessages
 */
export interface FlattenedConversationMessages {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedConversationMessages
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ReferencedConversationMessage>}
     * @memberof FlattenedConversationMessages
     */
    iterable: Array<ReferencedConversationMessage>;
    /**
     * This is a Map<String, int> where the the key is an ConversationMessage id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedConversationMessages
     */
    indices?: {
        [key: string]: number;
    };
}
export declare function FlattenedConversationMessagesFromJSON(json: any): FlattenedConversationMessages;
export declare function FlattenedConversationMessagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedConversationMessages;
export declare function FlattenedConversationMessagesToJSON(value?: FlattenedConversationMessages | null): any;
