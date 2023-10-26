"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalysisToJSON = exports.AnalysisFromJSONTyped = exports.AnalysisFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function AnalysisFromJSON(json) {
    return AnalysisFromJSONTyped(json, false);
}
exports.AnalysisFromJSON = AnalysisFromJSON;
function AnalysisFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : (0, _1.CodeAnalysisFromJSON)(json['code']),
        'id': json['id'],
        'format': json['format'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : (0, _1.ImageAnalysisFromJSON)(json['image']),
    };
}
exports.AnalysisFromJSONTyped = AnalysisFromJSONTyped;
function AnalysisToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'code': (0, _1.CodeAnalysisToJSON)(value.code),
        'id': value.id,
        'format': value.format,
        'image': (0, _1.ImageAnalysisToJSON)(value.image),
    };
}
exports.AnalysisToJSON = AnalysisToJSON;
