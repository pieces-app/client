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
exports.TLPCodeFragmentClassificationMetadataToJSON = exports.TLPCodeFragmentClassificationMetadataFromJSONTyped = exports.TLPCodeFragmentClassificationMetadataFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function TLPCodeFragmentClassificationMetadataFromJSON(json) {
    return TLPCodeFragmentClassificationMetadataFromJSONTyped(json, false);
}
exports.TLPCodeFragmentClassificationMetadataFromJSON = TLPCodeFragmentClassificationMetadataFromJSON;
function TLPCodeFragmentClassificationMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'context': !(0, runtime_1.exists)(json, 'context') ? undefined : (0, _1.ClassificationFromJSON)(json['context']),
        'prior': !(0, runtime_1.exists)(json, 'prior') ? undefined : (0, _1.ClassificationFromJSON)(json['prior']),
    };
}
exports.TLPCodeFragmentClassificationMetadataFromJSONTyped = TLPCodeFragmentClassificationMetadataFromJSONTyped;
function TLPCodeFragmentClassificationMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'context': (0, _1.ClassificationToJSON)(value.context),
        'prior': (0, _1.ClassificationToJSON)(value.prior),
    };
}
exports.TLPCodeFragmentClassificationMetadataToJSON = TLPCodeFragmentClassificationMetadataToJSON;
