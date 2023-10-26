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
import { EmbeddedModelSchema, GitHubGistDistribution } from './';
/**
 *
 * @export
 * @interface GitHubDistribution
 */
export interface GitHubDistribution {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof GitHubDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {GitHubGistDistribution}
     * @memberof GitHubDistribution
     */
    gist?: GitHubGistDistribution;
}
export declare function GitHubDistributionFromJSON(json: any): GitHubDistribution;
export declare function GitHubDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitHubDistribution;
export declare function GitHubDistributionToJSON(value?: GitHubDistribution | null): any;
