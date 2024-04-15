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
import type { Anchor } from './Anchor';
import {
    AnchorFromJSON,
    AnchorFromJSONTyped,
    AnchorToJSON,
} from './Anchor';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is the plural of Anchor.
 * @export
 * @interface Anchors
 */
export interface Anchors {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Anchors
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Anchor>}
     * @memberof Anchors
     */
    iterable: Array<Anchor>;
    /**
     * This is a Map<String, int> where the the key is an Anchor id.
     * @type {{ [key: string]: number; }}
     * @memberof Anchors
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof Anchors
     */
    score?: Score;
}

/**
 * Check if a given object implements the Anchors interface.
 */
export function instanceOfAnchors(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function AnchorsFromJSON(json: any): Anchors {
    return AnchorsFromJSONTyped(json, false);
}

export function AnchorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Anchors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(AnchorFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function AnchorsToJSON(value?: Anchors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(AnchorToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}

