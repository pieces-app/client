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
exports.TrackedApplicationToJSON = exports.TrackedApplicationFromJSONTyped = exports.TrackedApplicationFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function TrackedApplicationFromJSON(json) {
    return TrackedApplicationFromJSONTyped(json, false);
}
exports.TrackedApplicationFromJSON = TrackedApplicationFromJSON;
function TrackedApplicationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'name': (0, index_1.ApplicationNameEnumFromJSON)(json['name']),
        'version': json['version'],
        'platform': (0, index_1.PlatformEnumFromJSON)(json['platform']),
        'automaticUnload': !(0, runtime_1.exists)(json, 'automaticUnload') ? undefined : json['automaticUnload'],
    };
}
exports.TrackedApplicationFromJSONTyped = TrackedApplicationFromJSONTyped;
function TrackedApplicationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'name': (0, index_1.ApplicationNameEnumToJSON)(value.name),
        'version': value.version,
        'platform': (0, index_1.PlatformEnumToJSON)(value.platform),
        'automaticUnload': value.automaticUnload,
    };
}
exports.TrackedApplicationToJSON = TrackedApplicationToJSON;
