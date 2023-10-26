/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AllocationStatus, GroupedTimestamp } from './';
/**
 * connected: This is the last time that we connected to our cloud.
 * updated: This is the last time that this pod was updated.
 * @export
 * @interface Cloud
 */
export interface Cloud {
    /**
     * This is the identification of
     * @type {string}
     * @memberof Cloud
     */
    id: string;
    /**
     * This is a reference to a UserUuid
     * @type {string}
     * @memberof Cloud
     */
    user: string;
    /**
     *
     * @type {AllocationStatus}
     * @memberof Cloud
     */
    status: AllocationStatus;
    /**
     * this is the url to the specific users pod. ie userUUID.pieces.cloud
     * @type {string}
     * @memberof Cloud
     */
    address: string;
    /**
     * This is the specific ip that we can ping of our specific pod ie. 12.34.1234
     * @type {string}
     * @memberof Cloud
     */
    ip: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Cloud
     */
    connected: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Cloud
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {string}
     * @memberof Cloud
     */
    version: string;
}
export declare function CloudFromJSON(json: any): Cloud;
export declare function CloudFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cloud;
export declare function CloudToJSON(value?: Cloud | null): any;
