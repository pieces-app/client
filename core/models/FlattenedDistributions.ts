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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { ReferencedDistribution } from './ReferencedDistribution';
import {
    ReferencedDistributionFromJSON,
    ReferencedDistributionFromJSONTyped,
    ReferencedDistributionToJSON,
} from './ReferencedDistribution';

/**
 * 
 * @export
 * @interface FlattenedDistributions
 */
export interface FlattenedDistributions {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedDistributions
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedDistribution>}
     * @memberof FlattenedDistributions
     */
    iterable: Array<ReferencedDistribution>;
}

/**
 * Check if a given object implements the FlattenedDistributions interface.
 */
export function instanceOfFlattenedDistributions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function FlattenedDistributionsFromJSON(json: any): FlattenedDistributions {
    return FlattenedDistributionsFromJSONTyped(json, false);
}

export function FlattenedDistributionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedDistributions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedDistributionFromJSON)),
    };
}

export function FlattenedDistributionsToJSON(value?: FlattenedDistributions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ReferencedDistributionToJSON)),
    };
}

