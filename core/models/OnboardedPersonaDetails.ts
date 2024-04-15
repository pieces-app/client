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
import type { Seeds } from './Seeds';
import {
    SeedsFromJSON,
    SeedsFromJSONTyped,
    SeedsToJSON,
} from './Seeds';

/**
 * This is an out body for the /machine_learning/text/technical_processing/generators/personification endpoint.
 * 
 * This will have accepted some of the personal details (in the input body) ie languages/personas && will transform this in to onbaording snippets that we will return with this model
 * @export
 * @interface OnboardedPersonaDetails
 */
export interface OnboardedPersonaDetails {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OnboardedPersonaDetails
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Seeds}
     * @memberof OnboardedPersonaDetails
     */
    seeds: Seeds;
}

/**
 * Check if a given object implements the OnboardedPersonaDetails interface.
 */
export function instanceOfOnboardedPersonaDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "seeds" in value;

    return isInstance;
}

export function OnboardedPersonaDetailsFromJSON(json: any): OnboardedPersonaDetails {
    return OnboardedPersonaDetailsFromJSONTyped(json, false);
}

export function OnboardedPersonaDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnboardedPersonaDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'seeds': SeedsFromJSON(json['seeds']),
    };
}

export function OnboardedPersonaDetailsToJSON(value?: OnboardedPersonaDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'seeds': SeedsToJSON(value.seeds),
    };
}

