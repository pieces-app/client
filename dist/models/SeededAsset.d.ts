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
import { Application, AvailableFormats, EmbeddedModelSchema, SeededAssetMetadata, SeededFormat } from './index';
/**
 * This is seed data that will be come an asset.
 *
 * discovered: if set to true this seededAsset was discovered using one of our discovery endpoints.
 *
 * pseudo: if this is an asset that a user did NOT explicitly save.
 *
 * available: This is a model that is used within our '/assets/draft' endpoint that will emitt a seed with all the available format that one can generate based on the original seed that was passed in. ie if a png was passed in, we may  say that there is a text/code format available. If available formats is passed into the '/assets/create' we will short curcuit certain operations to speed up the process, for instance, if we determine that there is no text within this image then there is no sense in running ocr.
 * @export
 * @interface SeededAsset
 */
export interface SeededAsset {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {SeededAssetMetadata}
     * @memberof SeededAsset
     */
    metadata?: SeededAssetMetadata;
    /**
     *
     * @type {Application}
     * @memberof SeededAsset
     */
    application: Application;
    /**
     *
     * @type {SeededFormat}
     * @memberof SeededAsset
     */
    format: SeededFormat;
    /**
     *
     * @type {boolean}
     * @memberof SeededAsset
     */
    discovered?: boolean;
    /**
     *
     * @type {AvailableFormats}
     * @memberof SeededAsset
     */
    available?: AvailableFormats;
    /**
     *
     * @type {boolean}
     * @memberof SeededAsset
     */
    pseudo?: boolean;
}
export declare function SeededAssetFromJSON(json: any): SeededAsset;
export declare function SeededAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAsset;
export declare function SeededAssetToJSON(value?: SeededAsset | null): any;
