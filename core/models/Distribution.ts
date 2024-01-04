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
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FlattenedShare,
    FlattenedShareFromJSON,
    FlattenedShareFromJSONTyped,
    FlattenedShareToJSON,
    GitHubDistribution,
    GitHubDistributionFromJSON,
    GitHubDistributionFromJSONTyped,
    GitHubDistributionToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    MailgunDistribution,
    MailgunDistributionFromJSON,
    MailgunDistributionFromJSONTyped,
    MailgunDistributionToJSON,
} from './';

/**
 * This is a fully referenced version of a Distribution.
 * TODO add additional distributions such as slack, google_chat, ...etc
 * @export
 * @interface Distribution
 */
export interface Distribution {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Distribution
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof Distribution
     */
    id: string;
    /**
     * 
     * @type {FlattenedShare}
     * @memberof Distribution
     */
    share: FlattenedShare;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Distribution
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Distribution
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Distribution
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {MailgunDistribution}
     * @memberof Distribution
     */
    mailgun?: MailgunDistribution;
    /**
     * 
     * @type {GitHubDistribution}
     * @memberof Distribution
     */
    github?: GitHubDistribution;
}

export function DistributionFromJSON(json: any): Distribution {
    return DistributionFromJSONTyped(json, false);
}

export function DistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Distribution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'share': FlattenedShareFromJSON(json['share']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'mailgun': !exists(json, 'mailgun') ? undefined : MailgunDistributionFromJSON(json['mailgun']),
        'github': !exists(json, 'github') ? undefined : GitHubDistributionFromJSON(json['github']),
    };
}

export function DistributionToJSON(value?: Distribution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'share': FlattenedShareToJSON(value.share),
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'mailgun': MailgunDistributionToJSON(value.mailgun),
        'github': GitHubDistributionToJSON(value.github),
    };
}


