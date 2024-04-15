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
import type { ClassificationGenericEnum } from './ClassificationGenericEnum';
import {
    ClassificationGenericEnumFromJSON,
    ClassificationGenericEnumFromJSONTyped,
    ClassificationGenericEnumToJSON,
} from './ClassificationGenericEnum';
import type { ClassificationRenderingEnum } from './ClassificationRenderingEnum';
import {
    ClassificationRenderingEnumFromJSON,
    ClassificationRenderingEnumFromJSONTyped,
    ClassificationRenderingEnumToJSON,
} from './ClassificationRenderingEnum';
import type { ClassificationSpecificEnum } from './ClassificationSpecificEnum';
import {
    ClassificationSpecificEnumFromJSON,
    ClassificationSpecificEnumFromJSONTyped,
    ClassificationSpecificEnumToJSON,
} from './ClassificationSpecificEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * This is the specific classification of an Asset's Format.(This is on a per format basis b/c an asset could have different formats that are different format representations of the Asset.)
 * @export
 * @interface Classification
 */
export interface Classification {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Classification
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ClassificationGenericEnum}
     * @memberof Classification
     */
    generic: ClassificationGenericEnum;
    /**
     * 
     * @type {ClassificationSpecificEnum}
     * @memberof Classification
     */
    specific: ClassificationSpecificEnum;
    /**
     * 
     * @type {ClassificationRenderingEnum}
     * @memberof Classification
     */
    rendering?: ClassificationRenderingEnum;
}

/**
 * Check if a given object implements the Classification interface.
 */
export function instanceOfClassification(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "generic" in value;
    isInstance = isInstance && "specific" in value;

    return isInstance;
}

export function ClassificationFromJSON(json: any): Classification {
    return ClassificationFromJSONTyped(json, false);
}

export function ClassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Classification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'generic': ClassificationGenericEnumFromJSON(json['generic']),
        'specific': ClassificationSpecificEnumFromJSON(json['specific']),
        'rendering': !exists(json, 'rendering') ? undefined : ClassificationRenderingEnumFromJSON(json['rendering']),
    };
}

export function ClassificationToJSON(value?: Classification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'generic': ClassificationGenericEnumToJSON(value.generic),
        'specific': ClassificationSpecificEnumToJSON(value.specific),
        'rendering': ClassificationRenderingEnumToJSON(value.rendering),
    };
}

