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
 * 
 * @export
 * @enum {string}
 */
export enum Ext {
    Csv = 'csv',
    Doc = 'doc',
    Docm = 'docm',
    Docx = 'docx',
    Exe = 'exe',
    Gif = 'gif',
    Ico = 'ico',
    Jpe = 'jpe',
    Jpeg = 'jpeg',
    Jpg = 'jpg',
    Jpgm = 'jpgm',
    Jpgv = 'jpgv',
    Log = 'log',
    Mp2 = 'mp2',
    Mp2a = 'mp2a',
    Mp3 = 'mp3',
    Mp4 = 'mp4',
    Mp4a = 'mp4a',
    Oga = 'oga',
    Ogg = 'ogg',
    Ogv = 'ogv',
    Ogx = 'ogx',
    Ppt = 'ppt',
    Pptx = 'pptx',
    Pptm = 'pptm',
    Qt = 'qt',
    Text = 'text',
    Tif = 'tif',
    Tiff = 'tiff',
    Txt = 'txt',
    Wav = 'wav',
    Weba = 'weba',
    Webm = 'webm',
    Webp = 'webp',
    Xla = 'xla',
    Xlam = 'xlam',
    Xlc = 'xlc',
    Xlm = 'xlm',
    Xls = 'xls',
    Xlsb = 'xlsb',
    Xlsm = 'xlsm',
    Xlsx = 'xlsx',
    Xlt = 'xlt',
    Xltm = 'xltm',
    Xltx = 'xltx',
    Pdf = 'pdf',
    Png = 'png',
    Rpm = 'rpm',
    Zip = 'zip',
    Woff = 'woff',
    Woff2 = 'woff2',
    Svg = 'svg',
    Svgz = 'svgz',
    Bin = 'bin',
    Bmp = 'bmp',
    Eot = 'eot',
    Gz = 'gz',
    Jar = 'jar',
    Mpkg = 'mpkg',
    Ai = 'ai',
    Eps = 'eps',
    Zsh = 'zsh',
    Dmg = 'dmg',
    List = 'list',
    Rtx = 'rtx',
    Uri = 'uri',
    Uris = 'uris',
    Urls = 'urls',
    Css = 'css',
    Dart = 'dart',
    Html = 'html',
    Htm = 'htm',
    Java = 'java',
    Js = 'js',
    Json = 'json',
    Jsonml = 'jsonml',
    Ps = 'ps',
    Ssml = 'ssml',
    Wasm = 'wasm',
    Xaml = 'xaml',
    Rss = 'rss',
    Rtf = 'rtf',
    Cco = 'cco',
    Pl = 'pl',
    Pm = 'pm',
    Xhtml = 'xhtml',
    Xml = 'xml',
    Ecma = 'ecma',
    Node = 'node',
    Php = 'php',
    Py = 'py',
    Pyc = 'pyc',
    Class = 'class',
    Cpp = 'cpp',
    Cc = 'cc',
    C = 'c',
    P = 'p',
    Pas = 'pas',
    Curl = 'curl',
    Cxx = 'cxx',
    Hh = 'hh',
    Mcurl = 'mcurl',
    Go = 'go',
    Rs = 'rs',
    Sh = 'sh',
    Swift = 'swift',
    Ts = 'ts',
    Rb = 'rb',
    Cs = 'cs',
    Bat = 'bat',
    Coffee = 'coffee',
    Erl = 'erl',
    Hs = 'hs',
    Lua = 'lua',
    Md = 'md',
    Matlab = 'matlab',
    M = 'm',
    Ps1 = 'ps1',
    R = 'r',
    Scala = 'scala',
    Sql = 'sql',
    Tex = 'tex',
    Yaml = 'yaml',
    Toml = 'toml'
}

export function ExtFromJSON(json: any): Ext {
    return ExtFromJSONTyped(json, false);
}

export function ExtFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ext {
    return json as Ext;
}

export function ExtToJSON(value?: Ext | null): any {
    return value as any;
}

