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
exports.GraphicalOCRProcessingToJSON = exports.GraphicalOCRProcessingFromJSONTyped = exports.GraphicalOCRProcessingFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function GraphicalOCRProcessingFromJSON(json) {
    return GraphicalOCRProcessingFromJSONTyped(json, false);
}
exports.GraphicalOCRProcessingFromJSON = GraphicalOCRProcessingFromJSON;
function GraphicalOCRProcessingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'statistics': !(0, runtime_1.exists)(json, 'statistics') ? undefined : (0, _1.GraphicalOCRStatisticsFromJSON)(json['statistics']),
    };
}
exports.GraphicalOCRProcessingFromJSONTyped = GraphicalOCRProcessingFromJSONTyped;
function GraphicalOCRProcessingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'statistics': (0, _1.GraphicalOCRStatisticsToJSON)(value.statistics),
    };
}
exports.GraphicalOCRProcessingToJSON = GraphicalOCRProcessingToJSON;
