/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    SeededClassification,
    SeededClassificationFromJSON,
    SeededClassificationFromJSONTyped,
    SeededClassificationToJSON,
    SeededFile,
    SeededFileFromJSON,
    SeededFileFromJSONTyped,
    SeededFileToJSON,
    SeededFragment,
    SeededFragmentFromJSON,
    SeededFragmentFromJSONTyped,
    SeededFragmentToJSON,
} from './index';

/**
 * This is seeded data that will be come a format.
 * 
 * We will throw an Error if, 1) file and fragment are both defined, 2) file and fragment are both null.
 * 
 * if this is being used within the /assets/create endpoint or the /{application}/create endpoint, we will not take the classificaiton into account, as it is only used in the syntax highlighting related endpoints.That being said if you do want to override your classification, please look at the metadata within the file or the fragment.
 * @export
 * @interface SeededFormat
 */
export interface SeededFormat {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededFormat
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededFile}
     * @memberof SeededFormat
     */
    file?: SeededFile;
    /**
     * 
     * @type {SeededFragment}
     * @memberof SeededFormat
     */
    fragment?: SeededFragment;
    /**
     * 
     * @type {SeededClassification}
     * @memberof SeededFormat
     */
    classification?: SeededClassification;
}

export function SeededFormatFromJSON(json: any): SeededFormat {
    return SeededFormatFromJSONTyped(json, false);
}

export function SeededFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededFormat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'file': !exists(json, 'file') ? undefined : SeededFileFromJSON(json['file']),
        'fragment': !exists(json, 'fragment') ? undefined : SeededFragmentFromJSON(json['fragment']),
        'classification': !exists(json, 'classification') ? undefined : SeededClassificationFromJSON(json['classification']),
    };
}

export function SeededFormatToJSON(value?: SeededFormat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'file': SeededFileToJSON(value.file),
        'fragment': SeededFragmentToJSON(value.fragment),
        'classification': SeededClassificationToJSON(value.classification),
    };
}


