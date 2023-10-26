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
import { EmbeddedModelSchema, MechanismEnum, TagCategoryEnum } from './';
/**
 * This is the minimum information needed when creating a Tag.
 *
 * Default we will attach manual to a tag unless otherwise specified for mechanism.
 *
 * you can optionally add an asset, format, or person uuid to attach this tag directly to it
 *
 * TODO consider updating these asset,format to referenced Models
 * @export
 * @interface SeededTag
 */
export interface SeededTag {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededTag
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the description of the tag.
     * @type {string}
     * @memberof SeededTag
     */
    text: string;
    /**
     * this is a uuid that references an asset.
     * @type {string}
     * @memberof SeededTag
     */
    asset?: string;
    /**
     *
     * @type {MechanismEnum}
     * @memberof SeededTag
     */
    mechanism?: MechanismEnum;
    /**
     * (optionally) you can attach a tag to a format. so when you delete a format this tag will get removed from the asset as well.
     * @type {string}
     * @memberof SeededTag
     */
    format?: string;
    /**
     *
     * @type {TagCategoryEnum}
     * @memberof SeededTag
     */
    category?: TagCategoryEnum;
    /**
     * uuid of the person, you want to add this tag too
     * @type {string}
     * @memberof SeededTag
     */
    person?: string;
}
export declare function SeededTagFromJSON(json: any): SeededTag;
export declare function SeededTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTag;
export declare function SeededTagToJSON(value?: SeededTag | null): any;
