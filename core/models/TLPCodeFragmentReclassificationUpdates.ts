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

import { exists, mapValues } from '../runtime';
import type { Classification } from './Classification';
import {
    ClassificationFromJSON,
    ClassificationFromJSONTyped,
    ClassificationToJSON,
} from './Classification';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * 
 * @export
 * @interface TLPCodeFragmentReclassificationUpdates
 */
export interface TLPCodeFragmentReclassificationUpdates {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentReclassificationUpdates
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Classification}
     * @memberof TLPCodeFragmentReclassificationUpdates
     */
    previous: Classification;
    /**
     * 
     * @type {Classification}
     * @memberof TLPCodeFragmentReclassificationUpdates
     */
    current: Classification;
}

/**
 * Check if a given object implements the TLPCodeFragmentReclassificationUpdates interface.
 */
export function instanceOfTLPCodeFragmentReclassificationUpdates(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "previous" in value;
    isInstance = isInstance && "current" in value;

    return isInstance;
}

export function TLPCodeFragmentReclassificationUpdatesFromJSON(json: any): TLPCodeFragmentReclassificationUpdates {
    return TLPCodeFragmentReclassificationUpdatesFromJSONTyped(json, false);
}

export function TLPCodeFragmentReclassificationUpdatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentReclassificationUpdates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'previous': ClassificationFromJSON(json['previous']),
        'current': ClassificationFromJSON(json['current']),
    };
}

export function TLPCodeFragmentReclassificationUpdatesToJSON(value?: TLPCodeFragmentReclassificationUpdates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'previous': ClassificationToJSON(value.previous),
        'current': ClassificationToJSON(value.current),
    };
}

