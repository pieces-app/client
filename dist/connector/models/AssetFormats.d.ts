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
import { EmbeddedModelSchema, FlattenedAsset, Format } from './';
/**
 * A collection of Formats for a specific asset.
 *
 * Formats used at runtime have the capability (and are likely cross-polinated) with a deep reference to the asset meaning asset is not a String but actually a ReferencedAsset, which at minimum contains a id representing the asset as well as a reference which is undefined/null or a FlattenedAsset
 * @export
 * @interface AssetFormats
 */
export interface AssetFormats {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof AssetFormats
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<Format>}
     * @memberof AssetFormats
     */
    iterable?: Array<Format>;
    /**
     *
     * @type {FlattenedAsset}
     * @memberof AssetFormats
     */
    asset: FlattenedAsset;
}
export declare function AssetFormatsFromJSON(json: any): AssetFormats;
export declare function AssetFormatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFormats;
export declare function AssetFormatsToJSON(value?: AssetFormats | null): any;
