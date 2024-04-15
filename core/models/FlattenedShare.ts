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
import type { Accessors } from './Accessors';
import {
    AccessorsFromJSON,
    AccessorsFromJSONTyped,
    AccessorsToJSON,
} from './Accessors';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
} from './FlattenedAssets';
import type { FlattenedDistributions } from './FlattenedDistributions';
import {
    FlattenedDistributionsFromJSON,
    FlattenedDistributionsFromJSONTyped,
    FlattenedDistributionsToJSON,
} from './FlattenedDistributions';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is a dag safe version of the Share.
 * 
 * if user is undefined && access is public then we have an asset that is publicly available.
 * @export
 * @interface FlattenedShare
 */
export interface FlattenedShare {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedShare
     */
    schema?: EmbeddedModelSchema;
    /**
     * This references the share it self.
     * @type {string}
     * @memberof FlattenedShare
     */
    id: string;
    /**
     * this is the asset id on the flattened share.
     * @type {string}
     * @memberof FlattenedShare
     */
    asset?: string;
    /**
     * this is the uuid of the user that the share is created for.
     * @type {string}
     * @memberof FlattenedShare
     */
    user?: string;
    /**
     * this is the prebuilt link.
     * @type {string}
     * @memberof FlattenedShare
     */
    link: string;
    /**
     * 
     * @type {AccessEnum}
     * @memberof FlattenedShare
     */
    access: AccessEnum;
    /**
     * 
     * @type {Accessors}
     * @memberof FlattenedShare
     */
    accessors: Accessors;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedShare
     */
    created: GroupedTimestamp;
    /**
     * This is a shortened version of our uuid.
     * @type {string}
     * @memberof FlattenedShare
     */
    _short: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedShare
     */
    name?: string;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof FlattenedShare
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {FlattenedDistributions}
     * @memberof FlattenedShare
     */
    distributions?: FlattenedDistributions;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedShare
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedShare interface.
 */
export function instanceOfFlattenedShare(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "link" in value;
    isInstance = isInstance && "access" in value;
    isInstance = isInstance && "accessors" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "_short" in value;

    return isInstance;
}

export function FlattenedShareFromJSON(json: any): FlattenedShare {
    return FlattenedShareFromJSONTyped(json, false);
}

export function FlattenedShareFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedShare {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'asset': !exists(json, 'asset') ? undefined : json['asset'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'link': json['link'],
        'access': AccessEnumFromJSON(json['access']),
        'accessors': AccessorsFromJSON(json['accessors']),
        'created': GroupedTimestampFromJSON(json['created']),
        '_short': json['short'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'assets': !exists(json, 'assets') ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'distributions': !exists(json, 'distributions') ? undefined : FlattenedDistributionsFromJSON(json['distributions']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedShareToJSON(value?: FlattenedShare | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'asset': value.asset,
        'user': value.user,
        'link': value.link,
        'access': AccessEnumToJSON(value.access),
        'accessors': AccessorsToJSON(value.accessors),
        'created': GroupedTimestampToJSON(value.created),
        'short': value._short,
        'name': value.name,
        'assets': FlattenedAssetsToJSON(value.assets),
        'distributions': FlattenedDistributionsToJSON(value.distributions),
        'score': ScoreToJSON(value.score),
    };
}

