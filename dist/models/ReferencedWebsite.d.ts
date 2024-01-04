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
