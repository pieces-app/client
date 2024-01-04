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
import { EmbeddedModelSchema, FlattenedPerson } from './';
/**
 * [DAG Safe] version of a Person Model.
 * @export
 * @interface ReferencedPerson
 */
export interface ReferencedPerson {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedPerson
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReferencedPerson
     */
    id: string;
    /**
     *
     * @type {FlattenedPerson}
     * @memberof ReferencedPerson
     */
    reference?: FlattenedPerson;
}
export declare function ReferencedPersonFromJSON(json: any): ReferencedPerson;
export declare function ReferencedPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedPerson;
export declare function ReferencedPersonToJSON(value?: ReferencedPerson | null): any;
