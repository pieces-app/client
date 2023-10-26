"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalMLProviderEnumToJSON = exports.ExternalMLProviderEnumFromJSONTyped = exports.ExternalMLProviderEnumFromJSON = exports.ExternalMLProviderEnum = void 0;
/**
 * This is a Model used for the Model class. This will be used to describe the provider in which this Mode lcam from IE meta, google, apple, ...etc
 * @export
 * @enum {string}
 */
var ExternalMLProviderEnum;
(function (ExternalMLProviderEnum) {
    ExternalMLProviderEnum["Apple"] = "APPLE";
    ExternalMLProviderEnum["Amazon"] = "AMAZON";
    ExternalMLProviderEnum["Google"] = "GOOGLE";
    ExternalMLProviderEnum["Meta"] = "META";
    ExternalMLProviderEnum["Openai"] = "OPENAI";
    ExternalMLProviderEnum["Lmsys"] = "LMSYS";
    ExternalMLProviderEnum["Salesforce"] = "SALESFORCE";
    ExternalMLProviderEnum["HuggingFace"] = "HUGGING_FACE";
    ExternalMLProviderEnum["UniversityOfWashington"] = "UNIVERSITY_OF_WASHINGTON";
    ExternalMLProviderEnum["OpenLmResearch"] = "OPEN_LM_RESEARCH";
    ExternalMLProviderEnum["Microsoft"] = "MICROSOFT";
    ExternalMLProviderEnum["UcBerkley"] = "UC_BERKLEY";
    ExternalMLProviderEnum["PekingUniversity"] = "PEKING_UNIVERSITY";
    ExternalMLProviderEnum["RenminUniversityOfChina"] = "RENMIN_UNIVERSITY_OF_CHINA";
    ExternalMLProviderEnum["TogetherAi"] = "TOGETHER_AI";
    ExternalMLProviderEnum["Databricks"] = "DATABRICKS";
    ExternalMLProviderEnum["EleutherAi"] = "ELEUTHER_AI";
    ExternalMLProviderEnum["FudanUniversity"] = "FUDAN_UNIVERSITY";
    ExternalMLProviderEnum["Blickdl"] = "BLICKDL";
    ExternalMLProviderEnum["HongKongBaptistUniversity"] = "HONG_KONG_BAPTIST_UNIVERSITY";
    ExternalMLProviderEnum["Bigcode"] = "BIGCODE";
})(ExternalMLProviderEnum || (exports.ExternalMLProviderEnum = ExternalMLProviderEnum = {}));
function ExternalMLProviderEnumFromJSON(json) {
    return ExternalMLProviderEnumFromJSONTyped(json, false);
}
exports.ExternalMLProviderEnumFromJSON = ExternalMLProviderEnumFromJSON;
function ExternalMLProviderEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ExternalMLProviderEnumFromJSONTyped = ExternalMLProviderEnumFromJSONTyped;
function ExternalMLProviderEnumToJSON(value) {
    return value;
}
exports.ExternalMLProviderEnumToJSON = ExternalMLProviderEnumToJSON;
