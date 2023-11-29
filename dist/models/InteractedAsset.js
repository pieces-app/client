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
exports.InteractedAssetToJSON = exports.InteractedAssetFromJSONTyped = exports.InteractedAssetFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function InteractedAssetFromJSON(json) {
    return InteractedAssetFromJSONTyped(json, false);
}
exports.InteractedAssetFromJSON = InteractedAssetFromJSON;
function InteractedAssetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : json['asset'],
        'interactions': !(0, runtime_1.exists)(json, 'interactions') ? undefined : (0, index_1.InteractedAssetInteractionsFromJSON)(json['interactions']),
    };
}
exports.InteractedAssetFromJSONTyped = InteractedAssetFromJSONTyped;
function InteractedAssetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'asset': value.asset,
        'interactions': (0, index_1.InteractedAssetInteractionsToJSON)(value.interactions),
    };
}
exports.InteractedAssetToJSON = InteractedAssetToJSON;
