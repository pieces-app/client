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
exports.RecipientsToJSON = exports.RecipientsFromJSONTyped = exports.RecipientsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function RecipientsFromJSON(json) {
    return RecipientsFromJSONTyped(json, false);
}
exports.RecipientsFromJSON = RecipientsFromJSON;
function RecipientsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'iterable': (json['iterable'].map(_1.PersonBasicTypeFromJSON)),
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
    };
}
exports.RecipientsFromJSONTyped = RecipientsFromJSONTyped;
function RecipientsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'iterable': (value.iterable.map(_1.PersonBasicTypeToJSON)),
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
    };
}
exports.RecipientsToJSON = RecipientsToJSON;
