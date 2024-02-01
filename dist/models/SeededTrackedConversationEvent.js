"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeededTrackedConversationEventToJSON = exports.SeededTrackedConversationEventFromJSONTyped = exports.SeededTrackedConversationEventFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function SeededTrackedConversationEventFromJSON(json) {
    return SeededTrackedConversationEventFromJSONTyped(json, false);
}
exports.SeededTrackedConversationEventFromJSON = SeededTrackedConversationEventFromJSON;
function SeededTrackedConversationEventFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'identifierDescriptionPair': (0, index_1.TrackedConversationEventIdentifierDescriptionPairsFromJSON)(json['identifier_description_pair']),
        'conversation': (0, index_1.ReferencedConversationFromJSON)(json['conversation']),
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : (0, index_1.TrackedConversationEventMetadataFromJSON)(json['metadata']),
    };
}
exports.SeededTrackedConversationEventFromJSONTyped = SeededTrackedConversationEventFromJSONTyped;
function SeededTrackedConversationEventToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'identifier_description_pair': (0, index_1.TrackedConversationEventIdentifierDescriptionPairsToJSON)(value.identifierDescriptionPair),
        'conversation': (0, index_1.ReferencedConversationToJSON)(value.conversation),
        'metadata': (0, index_1.TrackedConversationEventMetadataToJSON)(value.metadata),
    };
}
exports.SeededTrackedConversationEventToJSON = SeededTrackedConversationEventToJSON;
