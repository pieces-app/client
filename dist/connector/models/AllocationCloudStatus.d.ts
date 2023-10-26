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
import { AllocationStatusEnum, EmbeddedModelSchema } from './';
/**
 *
 * @export
 * @interface AllocationCloudStatus
 */
export interface AllocationCloudStatus {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof AllocationCloudStatus
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {AllocationStatusEnum}
     * @memberof AllocationCloudStatus
     */
    cloud: AllocationStatusEnum;
}
export declare function AllocationCloudStatusFromJSON(json: any): AllocationCloudStatus;
export declare function AllocationCloudStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocationCloudStatus;
export declare function AllocationCloudStatusToJSON(value?: AllocationCloudStatus | null): any;
