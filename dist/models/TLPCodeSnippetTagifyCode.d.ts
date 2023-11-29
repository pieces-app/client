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
import { EmbeddedModelSchema } from './index';
/**
 *
 * @export
 * @interface TLPCodeSnippetTagifyCode
 */
export interface TLPCodeSnippetTagifyCode {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeSnippetTagifyCode
     */
    schema?: EmbeddedModelSchema;
    /**
     * stringified array of numbers
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    distribution: string;
    /**
     * stringified array of numbers
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    inferredDistribution: string;
    /**
     * stringified array of strings
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    tags: string;
    /**
     * stringified array of strings
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    inferredTags: string;
    /**
     * this is the model version
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    model: string;
    /**
     * This is the version of the file that we are using that contains all the possible tags
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    labelVersion: string;
    /**
     * this is the minimum score from the model that a tag needs to have to be included in the tags array.
     * @type {number}
     * @memberof TLPCodeSnippetTagifyCode
     */
    threshold: number;
    /**
     * this is the minimum score from the postprocessing that a tag needs to have to be included in the inferred_tags array.
     * @type {number}
     * @memberof TLPCodeSnippetTagifyCode
     */
    inferredThreshold: number;
    /**
     * this is the origin in which this asset was created, application(string representation)
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    context: string;
    /**
     * This is the asset id.
     * @type {string}
     * @memberof TLPCodeSnippetTagifyCode
     */
    asset: string;
}
export declare function TLPCodeSnippetTagifyCodeFromJSON(json: any): TLPCodeSnippetTagifyCode;
export declare function TLPCodeSnippetTagifyCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeSnippetTagifyCode;
export declare function TLPCodeSnippetTagifyCodeToJSON(value?: TLPCodeSnippetTagifyCode | null): any;
