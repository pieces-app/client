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
exports.TLPCodeFragmentDescriptionToJSON = exports.TLPCodeFragmentDescriptionFromJSONTyped = exports.TLPCodeFragmentDescriptionFromJSON = void 0;
const runtime_1 = require("../runtime");
function TLPCodeFragmentDescriptionFromJSON(json) {
    return TLPCodeFragmentDescriptionFromJSONTyped(json, false);
}
exports.TLPCodeFragmentDescriptionFromJSON = TLPCodeFragmentDescriptionFromJSON;
function TLPCodeFragmentDescriptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'asset': json['asset'],
        'created': json['created'],
        'model': json['model'],
        'latency': !(0, runtime_1.exists)(json, 'latency') ? undefined : json['latency'],
        'user': json['user'],
        'context': !(0, runtime_1.exists)(json, 'context') ? undefined : json['context'],
        'os': !(0, runtime_1.exists)(json, 'os') ? undefined : json['os'],
    };
}
exports.TLPCodeFragmentDescriptionFromJSONTyped = TLPCodeFragmentDescriptionFromJSONTyped;
function TLPCodeFragmentDescriptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'asset': value.asset,
        'created': value.created,
        'model': value.model,
        'latency': value.latency,
        'user': value.user,
        'context': value.context,
        'os': value.os,
    };
}
exports.TLPCodeFragmentDescriptionToJSON = TLPCodeFragmentDescriptionToJSON;
