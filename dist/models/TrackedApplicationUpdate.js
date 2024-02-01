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
exports.TrackedApplicationUpdateToJSON = exports.TrackedApplicationUpdateFromJSONTyped = exports.TrackedApplicationUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function TrackedApplicationUpdateFromJSON(json) {
    return TrackedApplicationUpdateFromJSONTyped(json, false);
}
exports.TrackedApplicationUpdateFromJSON = TrackedApplicationUpdateFromJSON;
function TrackedApplicationUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'current': (0, index_1.TrackedApplicationFromJSON)(json['current']),
        'previous': !(0, runtime_1.exists)(json, 'previous') ? undefined : (0, index_1.TrackedApplicationFromJSON)(json['previous']),
        'user': !(0, runtime_1.exists)(json, 'user') ? undefined : (0, index_1.TrackedUserProfileFromJSON)(json['user']),
    };
}
exports.TrackedApplicationUpdateFromJSONTyped = TrackedApplicationUpdateFromJSONTyped;
function TrackedApplicationUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'current': (0, index_1.TrackedApplicationToJSON)(value.current),
        'previous': (0, index_1.TrackedApplicationToJSON)(value.previous),
        'user': (0, index_1.TrackedUserProfileToJSON)(value.user),
    };
}
exports.TrackedApplicationUpdateToJSON = TrackedApplicationUpdateToJSON;
