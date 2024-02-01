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
import { EmbeddedModelSchema, ModelDownloadProgressStatusEnum } from './index';
/**
 * This is the model that is sent over our ws for streaming the progress of a model that is being downloaded.
 *
 * can eventually add a number that display the percent downloaded an so on.(this is called percent 0-100)
 * @export
 * @interface ModelDownloadProgress
 */
export interface ModelDownloadProgress {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ModelDownloadProgress
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {ModelDownloadProgressStatusEnum}
     * @memberof ModelDownloadProgress
     */
    status?: ModelDownloadProgressStatusEnum;
    /**
     * Optionally if the download is in progress you will recieve a download percent(from 0-100).
     * @type {number}
     * @memberof ModelDownloadProgress
     */
    percentage?: number | null;
}
export declare function ModelDownloadProgressFromJSON(json: any): ModelDownloadProgress;
export declare function ModelDownloadProgressFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelDownloadProgress;
export declare function ModelDownloadProgressToJSON(value?: ModelDownloadProgress | null): any;
