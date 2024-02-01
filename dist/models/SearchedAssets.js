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
exports.SearchedAssetsToJSON = exports.SearchedAssetsFromJSONTyped = exports.SearchedAssetsFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function SearchedAssetsFromJSON(json) {
    return SearchedAssetsFromJSONTyped(json, false);
}
exports.SearchedAssetsFromJSON = SearchedAssetsFromJSON;
function SearchedAssetsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'iterable': (json['iterable'].map(index_1.SearchedAssetFromJSON)),
        'suggested': json['suggested'],
        'exact': json['exact'],
    };
}
exports.SearchedAssetsFromJSONTyped = SearchedAssetsFromJSONTyped;
function SearchedAssetsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'iterable': (value.iterable.map(index_1.SearchedAssetToJSON)),
        'suggested': value.suggested,
        'exact': value.exact,
    };
}
exports.SearchedAssetsToJSON = SearchedAssetsToJSON;
