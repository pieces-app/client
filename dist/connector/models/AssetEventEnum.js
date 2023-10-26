"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetEventEnumToJSON = exports.AssetEventEnumFromJSONTyped = exports.AssetEventEnumFromJSON = exports.AssetEventEnum = void 0;
/**
 * This is an enum that will determine if this was sent via copied/pasted events from user actions.
 * @export
 * @enum {string}
 */
var AssetEventEnum;
(function (AssetEventEnum) {
    AssetEventEnum["Copied"] = "COPIED";
    AssetEventEnum["Pasted"] = "PASTED";
})(AssetEventEnum || (exports.AssetEventEnum = AssetEventEnum = {}));
function AssetEventEnumFromJSON(json) {
    return AssetEventEnumFromJSONTyped(json, false);
}
exports.AssetEventEnumFromJSON = AssetEventEnumFromJSON;
function AssetEventEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AssetEventEnumFromJSONTyped = AssetEventEnumFromJSONTyped;
function AssetEventEnumToJSON(value) {
    return value;
}
exports.AssetEventEnumToJSON = AssetEventEnumToJSON;
