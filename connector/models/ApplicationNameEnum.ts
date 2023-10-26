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
 * This is a running enumeration for the Names of all the Applications that can be Registered
 * @export
 * @enum {string}
 */
export enum ApplicationNameEnum {
    Sublime = 'SUBLIME',
    VsCode = 'VS_CODE',
    Jetbrains = 'JETBRAINS',
    FirefoxAddonMv2 = 'FIREFOX_ADDON_MV2',
    FirefoxAddonMv3 = 'FIREFOX_ADDON_MV3',
    SafariExtensionMv2 = 'SAFARI_EXTENSION_MV2',
    SafariExtensionMv3 = 'SAFARI_EXTENSION_MV3',
    PiecesForDevelopers = 'PIECES_FOR_DEVELOPERS',
    PiecesForDevelopersCli = 'PIECES_FOR_DEVELOPERS_CLI',
    OsServer = 'OS_SERVER',
    GoogleChromeExtensionMv2 = 'GOOGLE_CHROME_EXTENSION_MV2',
    GoogleChromeExtensionMv3 = 'GOOGLE_CHROME_EXTENSION_MV3',
    UltraEdit = 'ULTRA_EDIT',
    AtomPackage = 'ATOM_PACKAGE',
    AdobeIllustratorPiecesColorShare = 'ADOBE_ILLUSTRATOR_PIECES_COLOR_SHARE',
    MicrosoftTeams = 'MICROSOFT_TEAMS',
    ChatGpt = 'CHAT_GPT',
    Obsidian = 'OBSIDIAN',
    JupyterHub = 'JUPYTER_HUB',
    VisualStudio = 'VISUAL_STUDIO',
    MicrosoftEdge = 'MICROSOFT_EDGE',
    Brave = 'BRAVE',
    GoogleChat = 'GOOGLE_CHAT',
    Slack = 'SLACK'
}

export function ApplicationNameEnumFromJSON(json: any): ApplicationNameEnum {
    return ApplicationNameEnumFromJSONTyped(json, false);
}

export function ApplicationNameEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationNameEnum {
    return json as ApplicationNameEnum;
}

export function ApplicationNameEnumToJSON(value?: ApplicationNameEnum | null): any {
    return value as any;
}

