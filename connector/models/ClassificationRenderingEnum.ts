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

/**
 * Specifically supported renderings...usually between generic types
 * @export
 * @enum {string}
 */
export enum ClassificationRenderingEnum {
    Html = 'HTML',
    TwentyFourBitAnsiEscapedSequences = 'TWENTY_FOUR_BIT_ANSI_ESCAPED_SEQUENCES',
    HighlightJsHtml = 'HIGHLIGHT_JS_HTML'
}

export function ClassificationRenderingEnumFromJSON(json: any): ClassificationRenderingEnum {
    return ClassificationRenderingEnumFromJSONTyped(json, false);
}

export function ClassificationRenderingEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClassificationRenderingEnum {
    return json as ClassificationRenderingEnum;
}

export function ClassificationRenderingEnumToJSON(value?: ClassificationRenderingEnum | null): any {
    return value as any;
}

