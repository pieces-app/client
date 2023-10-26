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
import { AnnotationTypeEnum, EmbeddedModelSchema, MechanismEnum } from './';
/**
 * This is the percursor to a fully referenced Annotation.
 * @export
 * @interface SeededAnnotation
 */
export interface SeededAnnotation {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededAnnotation
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {MechanismEnum}
     * @memberof SeededAnnotation
     */
    mechanism?: MechanismEnum;
    /**
     *
     * @type {string}
     * @memberof SeededAnnotation
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof SeededAnnotation
     */
    person?: string;
    /**
     *
     * @type {AnnotationTypeEnum}
     * @memberof SeededAnnotation
     */
    type: AnnotationTypeEnum;
    /**
     * This is the text of the annotation.
     * @type {string}
     * @memberof SeededAnnotation
     */
    text: string;
    /**
     *
     * @type {string}
     * @memberof SeededAnnotation
     */
    model?: string;
    /**
     *
     * @type {boolean}
     * @memberof SeededAnnotation
     */
    pseudo?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SeededAnnotation
     */
    favorited?: boolean;
    /**
     *
     * @type {string}
     * @memberof SeededAnnotation
     */
    anchor?: string;
    /**
     *
     * @type {string}
     * @memberof SeededAnnotation
     */
    conversation?: string;
}
export declare function SeededAnnotationFromJSON(json: any): SeededAnnotation;
export declare function SeededAnnotationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAnnotation;
export declare function SeededAnnotationToJSON(value?: SeededAnnotation | null): any;
