/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    ExternalProvider,
    ExternalProviderFromJSON,
    ExternalProviderFromJSONTyped,
    ExternalProviderToJSON,
} from './';

/**
 * 
 * @export
 * @interface ExternalProviders
 */
export interface ExternalProviders {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ExternalProviders
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ExternalProvider>}
     * @memberof ExternalProviders
     */
    iterable: Array<ExternalProvider>;
}

export function ExternalProvidersFromJSON(json: any): ExternalProviders {
    return ExternalProvidersFromJSONTyped(json, false);
}

export function ExternalProvidersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalProviders {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ExternalProviderFromJSON)),
    };
}

export function ExternalProvidersToJSON(value?: ExternalProviders | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ExternalProviderToJSON)),
    };
}


