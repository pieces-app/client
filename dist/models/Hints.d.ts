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
import { EmbeddedModelSchema, Hint, Score } from './index';
/**
 * This is the plural of a Hint.
 * @export
 * @interface Hints
 */
export interface Hints {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Hints
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<Hint>}
     * @memberof Hints
     */
    iterable: Array<Hint>;
    /**
     * This is a Map<String, int> where the the key is an hint id.
     * @type {{ [key: string]: number; }}
     * @memberof Hints
     */
    indices?: {
        [key: string]: number;
    };
    /**
     *
     * @type {Score}
     * @memberof Hints
     */
    score?: Score;
}
export declare function HintsFromJSON(json: any): Hints;
export declare function HintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hints;
export declare function HintsToJSON(value?: Hints | null): any;
