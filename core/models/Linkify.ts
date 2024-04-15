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
import type { AccessEnum } from './AccessEnum';
import {
    AccessEnumFromJSON,
    AccessEnumFromJSONTyped,
    AccessEnumToJSON,
} from './AccessEnum';
import type { Asset } from './Asset';
import {
    AssetFromJSON,
    AssetFromJSONTyped,
    AssetToJSON,
} from './Asset';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { Seed } from './Seed';
import {
    SeedFromJSON,
    SeedFromJSONTyped,
    SeedToJSON,
} from './Seed';
import type { SeededDistributions } from './SeededDistributions';
import {
    SeededDistributionsFromJSON,
    SeededDistributionsFromJSONTyped,
    SeededDistributionsToJSON,
} from './SeededDistributions';
import type { SeededUser } from './SeededUser';
import {
    SeededUserFromJSON,
    SeededUserFromJSONTyped,
    SeededUserToJSON,
} from './SeededUser';

/**
 * This is the incoming linkify model.
 * 
 * if access is PRIVATE then please provide and array of users to enable the link for.
 * 
 * @export
 * @interface Linkify
 */
export interface Linkify {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Linkify
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Seed}
     * @memberof Linkify
     */
    seed?: Seed;
    /**
     * 
     * @type {Asset}
     * @memberof Linkify
     */
    asset?: Asset;
    /**
     * this is an array of users.
     * @type {Array<SeededUser>}
     * @memberof Linkify
     */
    users?: Array<SeededUser>;
    /**
     * 
     * @type {AccessEnum}
     * @memberof Linkify
     */
    access: AccessEnum;
    /**
     * 
     * @type {SeededDistributions}
     * @memberof Linkify
     */
    distributions?: SeededDistributions;
}

/**
 * Check if a given object implements the Linkify interface.
 */
export function instanceOfLinkify(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "access" in value;

    return isInstance;
}

export function LinkifyFromJSON(json: any): Linkify {
    return LinkifyFromJSONTyped(json, false);
}

export function LinkifyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Linkify {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'seed': !exists(json, 'seed') ? undefined : SeedFromJSON(json['seed']),
        'asset': !exists(json, 'asset') ? undefined : AssetFromJSON(json['asset']),
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(SeededUserFromJSON)),
        'access': AccessEnumFromJSON(json['access']),
        'distributions': !exists(json, 'distributions') ? undefined : SeededDistributionsFromJSON(json['distributions']),
    };
}

export function LinkifyToJSON(value?: Linkify | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'seed': SeedToJSON(value.seed),
        'asset': AssetToJSON(value.asset),
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(SeededUserToJSON)),
        'access': AccessEnumToJSON(value.access),
        'distributions': SeededDistributionsToJSON(value.distributions),
    };
}

