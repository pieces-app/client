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
import type { BrowserSelection } from './BrowserSelection';
import {
    BrowserSelectionFromJSON,
    BrowserSelectionFromJSONTyped,
    BrowserSelectionToJSON,
} from './BrowserSelection';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { TransferableString } from './TransferableString';
import {
    TransferableStringFromJSON,
    TransferableStringFromJSONTyped,
    TransferableStringToJSON,
} from './TransferableString';

/**
 * snippet: these are extracted code blocks
 * selection: here is a copy/paste/selection
 * 
 * note: recommended that you pass in the md version of the webpage
 * 
 * note: please dont pass in all three html,md,text, just pass in 1.
 * @export
 * @interface BrowserTabValue
 */
export interface BrowserTabValue {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof BrowserTabValue
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TransferableString}
     * @memberof BrowserTabValue
     */
    html?: TransferableString;
    /**
     * 
     * @type {TransferableString}
     * @memberof BrowserTabValue
     */
    md?: TransferableString;
    /**
     * 
     * @type {TransferableString}
     * @memberof BrowserTabValue
     */
    text?: TransferableString;
    /**
     * 
     * @type {BrowserSelection}
     * @memberof BrowserTabValue
     */
    snippet?: BrowserSelection;
    /**
     * 
     * @type {BrowserSelection}
     * @memberof BrowserTabValue
     */
    selection?: BrowserSelection;
}

/**
 * Check if a given object implements the BrowserTabValue interface.
 */
export function instanceOfBrowserTabValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BrowserTabValueFromJSON(json: any): BrowserTabValue {
    return BrowserTabValueFromJSONTyped(json, false);
}

export function BrowserTabValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowserTabValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'html': !exists(json, 'html') ? undefined : TransferableStringFromJSON(json['html']),
        'md': !exists(json, 'md') ? undefined : TransferableStringFromJSON(json['md']),
        'text': !exists(json, 'text') ? undefined : TransferableStringFromJSON(json['text']),
        'snippet': !exists(json, 'snippet') ? undefined : BrowserSelectionFromJSON(json['snippet']),
        'selection': !exists(json, 'selection') ? undefined : BrowserSelectionFromJSON(json['selection']),
    };
}

export function BrowserTabValueToJSON(value?: BrowserTabValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'html': TransferableStringToJSON(value.html),
        'md': TransferableStringToJSON(value.md),
        'text': TransferableStringToJSON(value.text),
        'snippet': BrowserSelectionToJSON(value.snippet),
        'selection': BrowserSelectionToJSON(value.selection),
    };
}

