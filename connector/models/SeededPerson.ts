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

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    PersonAccess,
    PersonAccessFromJSON,
    PersonAccessFromJSONTyped,
    PersonAccessToJSON,
    PersonModel,
    PersonModelFromJSON,
    PersonModelFromJSONTyped,
    PersonModelToJSON,
    PersonType,
    PersonTypeFromJSON,
    PersonTypeFromJSONTyped,
    PersonTypeToJSON,
    SeededAnnotation,
    SeededAnnotationFromJSON,
    SeededAnnotationFromJSONTyped,
    SeededAnnotationToJSON,
} from './';

/**
 * This is a per-cursor to a full person.
 * 
 * Will throw an error, if asset is passed in but acces.scope is undefined.
 * 
 * can optionally pass in our mechanism here, as the default will be manual unless specified.
 * 
 * TODO consider updating these asset, format to referenced Models
 * 
 * Note: model, access, mechanism will only be added if the asset is passed in.
 * @export
 * @interface SeededPerson
 */
export interface SeededPerson {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededPerson
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof SeededPerson
     */
    asset?: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededPerson
     */
    mechanism?: MechanismEnum;
    /**
     * 
     * @type {PersonAccess}
     * @memberof SeededPerson
     */
    access?: PersonAccess;
    /**
     * 
     * @type {PersonType}
     * @memberof SeededPerson
     */
    type: PersonType;
    /**
     * 
     * @type {PersonModel}
     * @memberof SeededPerson
     */
    model?: PersonModel;
    /**
     * 
     * @type {Array<SeededAnnotation>}
     * @memberof SeededPerson
     */
    annotations?: Array<SeededAnnotation>;
}

export function SeededPersonFromJSON(json: any): SeededPerson {
    return SeededPersonFromJSONTyped(json, false);
}

export function SeededPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededPerson {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': !exists(json, 'asset') ? undefined : json['asset'],
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'access': !exists(json, 'access') ? undefined : PersonAccessFromJSON(json['access']),
        'type': PersonTypeFromJSON(json['type']),
        'model': !exists(json, 'model') ? undefined : PersonModelFromJSON(json['model']),
        'annotations': !exists(json, 'annotations') ? undefined : ((json['annotations'] as Array<any>).map(SeededAnnotationFromJSON)),
    };
}

export function SeededPersonToJSON(value?: SeededPerson | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'asset': value.asset,
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'access': PersonAccessToJSON(value.access),
        'type': PersonTypeToJSON(value.type),
        'model': PersonModelToJSON(value.model),
        'annotations': value.annotations === undefined ? undefined : ((value.annotations as Array<any>).map(SeededAnnotationToJSON)),
    };
}


