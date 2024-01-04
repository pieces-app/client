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
import { EmbeddedModelSchema, TextLocation } from './';
/**
 * Thext Match currently used for sensitive for scales for people, and anything related to text matching.
 *
 * group: is the entire match
 * subgroup is the inner match within the group.(optional)
 * @export
 * @interface TextMatch
 */
export interface TextMatch {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TextMatch
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {TextLocation}
     * @memberof TextMatch
     */
    group: TextLocation;
    /**
     *
     * @type {TextLocation}
     * @memberof TextMatch
     */
    subgroup?: TextLocation;
}
export declare function TextMatchFromJSON(json: any): TextMatch;
export declare function TextMatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextMatch;
export declare function TextMatchToJSON(value?: TextMatch | null): any;
