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
import { EmbeddedModelSchema, Person, Score } from './index';
/**
 * This is the plural of Person. will have top level meta about the person including an iterable of all the person.
 * @export
 * @interface Persons
 */
export interface Persons {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Persons
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<Person>}
     * @memberof Persons
     */
    iterable: Array<Person>;
    /**
     * This is a Map<String, int> where the the key is an person id.
     * @type {{ [key: string]: number; }}
     * @memberof Persons
     */
    indices?: {
        [key: string]: number;
    };
    /**
     *
     * @type {Score}
     * @memberof Persons
     */
    score?: Score;
}
export declare function PersonsFromJSON(json: any): Persons;
export declare function PersonsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Persons;
export declare function PersonsToJSON(value?: Persons | null): any;
