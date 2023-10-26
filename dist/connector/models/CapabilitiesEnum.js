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
exports.CapabilitiesEnumToJSON = exports.CapabilitiesEnumFromJSONTyped = exports.CapabilitiesEnumFromJSON = exports.CapabilitiesEnum = void 0;
/**
 * This lets us know what capabilites in relation to ml/ cloud infrastructure you are opting into.
 * @export
 * @enum {string}
 */
var CapabilitiesEnum;
(function (CapabilitiesEnum) {
    CapabilitiesEnum["Local"] = "LOCAL";
    CapabilitiesEnum["Cloud"] = "CLOUD";
    CapabilitiesEnum["Blended"] = "BLENDED";
})(CapabilitiesEnum || (exports.CapabilitiesEnum = CapabilitiesEnum = {}));
function CapabilitiesEnumFromJSON(json) {
    return CapabilitiesEnumFromJSONTyped(json, false);
}
exports.CapabilitiesEnumFromJSON = CapabilitiesEnumFromJSON;
function CapabilitiesEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CapabilitiesEnumFromJSONTyped = CapabilitiesEnumFromJSONTyped;
function CapabilitiesEnumToJSON(value) {
    return value;
}
exports.CapabilitiesEnumToJSON = CapabilitiesEnumToJSON;
