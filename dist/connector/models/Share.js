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
exports.ShareToJSON = exports.ShareFromJSONTyped = exports.ShareFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function ShareFromJSON(json) {
    return ShareFromJSONTyped(json, false);
}
exports.ShareFromJSON = ShareFromJSON;
function ShareFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'user': !(0, runtime_1.exists)(json, 'user') ? undefined : json['user'],
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : (0, _1.FlattenedAssetFromJSON)(json['asset']),
        'assets': !(0, runtime_1.exists)(json, 'assets') ? undefined : (0, _1.FlattenedAssetsFromJSON)(json['assets']),
        'link': json['link'],
        'access': (0, _1.AccessEnumFromJSON)(json['access']),
        'accessors': (0, _1.AccessorsFromJSON)(json['accessors']),
        'created': (0, _1.GroupedTimestampFromJSON)(json['created']),
        '_short': json['short'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'distributions': !(0, runtime_1.exists)(json, 'distributions') ? undefined : (0, _1.DistributionsFromJSON)(json['distributions']),
    };
}
exports.ShareFromJSONTyped = ShareFromJSONTyped;
function ShareToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'user': value.user,
        'asset': (0, _1.FlattenedAssetToJSON)(value.asset),
        'assets': (0, _1.FlattenedAssetsToJSON)(value.assets),
        'link': value.link,
        'access': (0, _1.AccessEnumToJSON)(value.access),
        'accessors': (0, _1.AccessorsToJSON)(value.accessors),
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'short': value._short,
        'name': value.name,
        'distributions': (0, _1.DistributionsToJSON)(value.distributions),
    };
}
exports.ShareToJSON = ShareToJSON;
