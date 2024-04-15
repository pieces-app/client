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

/**
 * if reuse was used in the reaction then we can provide the uuid of the asset that was reused.
 * @export
 * @interface ReuseReaction
 */
export interface ReuseReaction {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReuseReaction
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReuseReaction
     */
    asset: string;
}

/**
 * Check if a given object implements the ReuseReaction interface.
 */
export function instanceOfReuseReaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "asset" in value;

    return isInstance;
}

export function ReuseReactionFromJSON(json: any): ReuseReaction {
    return ReuseReactionFromJSONTyped(json, false);
}

export function ReuseReactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReuseReaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': json['asset'],
    };
}

export function ReuseReactionToJSON(value?: ReuseReaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'asset': value.asset,
    };
}

