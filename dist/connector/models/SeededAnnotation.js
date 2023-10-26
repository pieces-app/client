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
exports.SeededAnnotationToJSON = exports.SeededAnnotationFromJSONTyped = exports.SeededAnnotationFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function SeededAnnotationFromJSON(json) {
    return SeededAnnotationFromJSONTyped(json, false);
}
exports.SeededAnnotationFromJSON = SeededAnnotationFromJSON;
function SeededAnnotationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'mechanism': !(0, runtime_1.exists)(json, 'mechanism') ? undefined : (0, _1.MechanismEnumFromJSON)(json['mechanism']),
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : json['asset'],
        'person': !(0, runtime_1.exists)(json, 'person') ? undefined : json['person'],
        'type': (0, _1.AnnotationTypeEnumFromJSON)(json['type']),
        'text': json['text'],
        'model': !(0, runtime_1.exists)(json, 'model') ? undefined : json['model'],
        'pseudo': !(0, runtime_1.exists)(json, 'pseudo') ? undefined : json['pseudo'],
        'favorited': !(0, runtime_1.exists)(json, 'favorited') ? undefined : json['favorited'],
        'anchor': !(0, runtime_1.exists)(json, 'anchor') ? undefined : json['anchor'],
        'conversation': !(0, runtime_1.exists)(json, 'conversation') ? undefined : json['conversation'],
    };
}
exports.SeededAnnotationFromJSONTyped = SeededAnnotationFromJSONTyped;
function SeededAnnotationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'mechanism': (0, _1.MechanismEnumToJSON)(value.mechanism),
        'asset': value.asset,
        'person': value.person,
        'type': (0, _1.AnnotationTypeEnumToJSON)(value.type),
        'text': value.text,
        'model': value.model,
        'pseudo': value.pseudo,
        'favorited': value.favorited,
        'anchor': value.anchor,
        'conversation': value.conversation,
    };
}
exports.SeededAnnotationToJSON = SeededAnnotationToJSON;
