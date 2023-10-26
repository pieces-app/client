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
import { Aesthetics, AllocationCloud, Auth0UserMetadata, EmbeddedModelSchema, ExternalProviders, GroupedTimestamp } from './';
/**
 * This is the model for a user logged into Pieces.
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof UserProfile
     */
    schema?: EmbeddedModelSchema;
    /**
     * mapped from picture.URL pointing to the user's profile picture.
     * @type {string}
     * @memberof UserProfile
     */
    picture?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    email?: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof UserProfile
     */
    created?: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof UserProfile
     */
    updated?: GroupedTimestamp;
    /**
     * 	(unique) User's username.
     *
     * @type {string}
     * @memberof UserProfile
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    id: string;
    /**
     * This is the name of the User.
     * @type {string}
     * @memberof UserProfile
     */
    name?: string;
    /**
     *
     * @type {Aesthetics}
     * @memberof UserProfile
     */
    aesthetics: Aesthetics;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    vanityname?: string;
    /**
     *
     * @type {AllocationCloud}
     * @memberof UserProfile
     */
    allocation?: AllocationCloud;
    /**
     *
     * @type {ExternalProviders}
     * @memberof UserProfile
     */
    providers?: ExternalProviders;
    /**
     *
     * @type {Auth0UserMetadata}
     * @memberof UserProfile
     */
    auth0?: Auth0UserMetadata;
}
export declare function UserProfileFromJSON(json: any): UserProfile;
export declare function UserProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfile;
export declare function UserProfileToJSON(value?: UserProfile | null): any;
