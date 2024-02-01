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
exports.DiscoveredRelatedTagsToJSON = exports.DiscoveredRelatedTagsFromJSONTyped = exports.DiscoveredRelatedTagsFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function DiscoveredRelatedTagsFromJSON(json) {
    return DiscoveredRelatedTagsFromJSONTyped(json, false);
}
exports.DiscoveredRelatedTagsFromJSON = DiscoveredRelatedTagsFromJSON;
function DiscoveredRelatedTagsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'application': json['application'],
        'iterable': (json['iterable'].map(index_1.DiscoveredRelatedTagFromJSON)),
    };
}
exports.DiscoveredRelatedTagsFromJSONTyped = DiscoveredRelatedTagsFromJSONTyped;
function DiscoveredRelatedTagsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'application': value.application,
        'iterable': (value.iterable.map(index_1.DiscoveredRelatedTagToJSON)),
    };
}
exports.DiscoveredRelatedTagsToJSON = DiscoveredRelatedTagsToJSON;
