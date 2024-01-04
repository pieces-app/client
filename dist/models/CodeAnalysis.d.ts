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
import { ClassificationGenericEnum, EmbeddedModelSchema, Model } from './';
/**
 * This is the ML Analysis object Specific to code.
 *
 * prediction and similarity are custom types {[string]: number}. ** please dont not modify **
 * @export
 * @interface CodeAnalysis
 */
export interface CodeAnalysis {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof CodeAnalysis
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<string>}
     * @memberof CodeAnalysis
     */
    tokenized?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CodeAnalysis
     */
    language?: string;
    /**
     *
     * @type {ClassificationGenericEnum}
     * @memberof CodeAnalysis
     */
    type: ClassificationGenericEnum;
    /**
     *
     * @type {{ [key: string]: number; }}
     * @memberof CodeAnalysis
     */
    prediction?: {
        [key: string]: number;
    };
    /**
     *
     * @type {{ [key: string]: number; }}
     * @memberof CodeAnalysis
     */
    similarity?: {
        [key: string]: number;
    };
    /**
     *
     * @type {Array<number>}
     * @memberof CodeAnalysis
     */
    top5Colors?: Array<number>;
    /**
     *
     * @type {Array<string>}
     * @memberof CodeAnalysis
     */
    top5Sorted?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CodeAnalysis
     */
    id: string;
    /**
     * this is just a reference to the analysis parent object.
     * @type {string}
     * @memberof CodeAnalysis
     */
    analysis: string;
    /**
     *
     * @type {Model}
     * @memberof CodeAnalysis
     */
    model: Model;
}
export declare function CodeAnalysisFromJSON(json: any): CodeAnalysis;
export declare function CodeAnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): CodeAnalysis;
export declare function CodeAnalysisToJSON(value?: CodeAnalysis | null): any;
