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
exports.AnchorPointsToJSON = exports.AnchorPointsFromJSONTyped = exports.AnchorPointsFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function AnchorPointsFromJSON(json) {
    return AnchorPointsFromJSONTyped(json, false);
}
exports.AnchorPointsFromJSON = AnchorPointsFromJSON;
function AnchorPointsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'iterable': (json['iterable'].map(index_1.AnchorPointFromJSON)),
        'indices': !(0, runtime_1.exists)(json, 'indices') ? undefined : json['indices'],
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, index_1.ScoreFromJSON)(json['score']),
    };
}
exports.AnchorPointsFromJSONTyped = AnchorPointsFromJSONTyped;
function AnchorPointsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'iterable': (value.iterable.map(index_1.AnchorPointToJSON)),
        'indices': value.indices,
        'score': (0, index_1.ScoreToJSON)(value.score),
    };
}
exports.AnchorPointsToJSON = AnchorPointsToJSON;
