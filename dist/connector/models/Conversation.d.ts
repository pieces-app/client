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
import { Application, ConversationGrounding, ConversationTypeEnum, EmbeddedModelSchema, FlattenedAnchors, FlattenedAnnotations, FlattenedAssets, FlattenedConversationMessages, GroupedTimestamp, ReferencedModel } from './';
/**
 * This is a fully referenced Conversation.
 *
 * This will hold together a conversation. Ie allthe message within a conversation.
 *
 * All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.
 *
 * model is a calculated property, and will be the model of the last message sent if applicable.
 * @export
 * @interface Conversation
 */
export interface Conversation {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Conversation
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof Conversation
     */
    id: string;
    /**
     * This is a name that is customized.
     * @type {string}
     * @memberof Conversation
     */
    name?: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Conversation
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Conversation
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Conversation
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {boolean}
     * @memberof Conversation
     */
    favorited?: boolean;
    /**
     *
     * @type {Application}
     * @memberof Conversation
     */
    application?: Application;
    /**
     *
     * @type {FlattenedAnnotations}
     * @memberof Conversation
     */
    annotations?: FlattenedAnnotations;
    /**
     *
     * @type {FlattenedConversationMessages}
     * @memberof Conversation
     */
    messages: FlattenedConversationMessages;
    /**
     *
     * @type {ReferencedModel}
     * @memberof Conversation
     */
    model?: ReferencedModel;
    /**
     *
     * @type {FlattenedAssets}
     * @memberof Conversation
     */
    assets?: FlattenedAssets;
    /**
     *
     * @type {FlattenedAnchors}
     * @memberof Conversation
     */
    anchors?: FlattenedAnchors;
    /**
     *
     * @type {ConversationTypeEnum}
     * @memberof Conversation
     */
    type: ConversationTypeEnum;
    /**
     *
     * @type {ConversationGrounding}
     * @memberof Conversation
     */
    grounding?: ConversationGrounding;
}
export declare function ConversationFromJSON(json: any): Conversation;
export declare function ConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Conversation;
export declare function ConversationToJSON(value?: Conversation | null): any;
