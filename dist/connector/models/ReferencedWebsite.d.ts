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
import { EmbeddedModelSchema, FlattenedWebsite } from './';
/**
 *
 * @export
 * @interface ReferencedWebsite
 */
export interface ReferencedWebsite {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedWebsite
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReferencedWebsite
     */
    id: string;
    /**
     *
     * @type {FlattenedWebsite}
     * @memberof ReferencedWebsite
     */
    reference?: FlattenedWebsite;
}
export declare function ReferencedWebsiteFromJSON(json: any): ReferencedWebsite;
export declare function ReferencedWebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedWebsite;
export declare function ReferencedWebsiteToJSON(value?: ReferencedWebsite | null): any;
