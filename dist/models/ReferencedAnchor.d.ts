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
import { EmbeddedModelSchema, FlattenedAnchor } from './index';
/**
 * This is the referenced version of a Anchor, main used for the uuid.
 * @export
 * @interface ReferencedAnchor
 */
export interface ReferencedAnchor {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedAnchor
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReferencedAnchor
     */
    id: string;
    /**
     *
     * @type {FlattenedAnchor}
     * @memberof ReferencedAnchor
     */
    reference?: FlattenedAnchor;
}
export declare function ReferencedAnchorFromJSON(json: any): ReferencedAnchor;
export declare function ReferencedAnchorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedAnchor;
export declare function ReferencedAnchorToJSON(value?: ReferencedAnchor | null): any;
