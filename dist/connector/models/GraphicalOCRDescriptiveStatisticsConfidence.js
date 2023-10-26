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
exports.GraphicalOCRDescriptiveStatisticsConfidenceToJSON = exports.GraphicalOCRDescriptiveStatisticsConfidenceFromJSONTyped = exports.GraphicalOCRDescriptiveStatisticsConfidenceFromJSON = void 0;
function GraphicalOCRDescriptiveStatisticsConfidenceFromJSON(json) {
    return GraphicalOCRDescriptiveStatisticsConfidenceFromJSONTyped(json, false);
}
exports.GraphicalOCRDescriptiveStatisticsConfidenceFromJSON = GraphicalOCRDescriptiveStatisticsConfidenceFromJSON;
function GraphicalOCRDescriptiveStatisticsConfidenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mean': json['mean'],
    };
}
exports.GraphicalOCRDescriptiveStatisticsConfidenceFromJSONTyped = GraphicalOCRDescriptiveStatisticsConfidenceFromJSONTyped;
function GraphicalOCRDescriptiveStatisticsConfidenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mean': value.mean,
    };
}
exports.GraphicalOCRDescriptiveStatisticsConfidenceToJSON = GraphicalOCRDescriptiveStatisticsConfidenceToJSON;
