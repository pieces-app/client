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


import * as runtime from '../runtime';
import type {
  SeededScoreIncrement,
  Sensitive,
} from '../models/index';
import {
    SeededScoreIncrementFromJSON,
    SeededScoreIncrementToJSON,
    SensitiveFromJSON,
    SensitiveToJSON,
} from '../models/index';

export interface SensitiveScoresIncrementRequest {
    sensitive: string;
    seededScoreIncrement?: SeededScoreIncrement;
}

export interface SensitiveSnapshotRequest {
    sensitive: string;
}

export interface UpdateSensitiveRequest {
    sensitive?: Sensitive;
}

/**
 * 
 */
export class SensitiveApi extends runtime.BaseAPI {

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/sensitive/{sensitive}/scores/increment\' [POST]
     */
    async sensitiveScoresIncrementRaw(requestParameters: SensitiveScoresIncrementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.sensitive === null || requestParameters.sensitive === undefined) {
            throw new runtime.RequiredError('sensitive','Required parameter requestParameters.sensitive was null or undefined when calling sensitiveScoresIncrement.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/sensitive/{sensitive}/scores/increment`.replace(`{${"sensitive"}}`, encodeURIComponent(String(requestParameters.sensitive))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededScoreIncrementToJSON(requestParameters.seededScoreIncrement),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/sensitive/{sensitive}/scores/increment\' [POST]
     */
    async sensitiveScoresIncrement(requestParameters: SensitiveScoresIncrementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.sensitiveScoresIncrementRaw(requestParameters, initOverrides);
    }

    /**
     * This will get a specific sensitive via the sensitive uuid.
     * /sensitive/{sensitive} [GET]
     */
    async sensitiveSnapshotRaw(requestParameters: SensitiveSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Sensitive>> {
        if (requestParameters.sensitive === null || requestParameters.sensitive === undefined) {
            throw new runtime.RequiredError('sensitive','Required parameter requestParameters.sensitive was null or undefined when calling sensitiveSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/sensitive/{sensitive}`.replace(`{${"sensitive"}}`, encodeURIComponent(String(requestParameters.sensitive))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SensitiveFromJSON(jsonValue));
    }

    /**
     * This will get a specific sensitive via the sensitive uuid.
     * /sensitive/{sensitive} [GET]
     */
    async sensitiveSnapshot(requestParameters: SensitiveSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Sensitive> {
        const response = await this.sensitiveSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will update a specific sensitive
     * /sensitive/update [POST]
     */
    async updateSensitiveRaw(requestParameters: UpdateSensitiveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Sensitive>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/sensitive/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SensitiveToJSON(requestParameters.sensitive),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SensitiveFromJSON(jsonValue));
    }

    /**
     * This will update a specific sensitive
     * /sensitive/update [POST]
     */
    async updateSensitive(requestParameters: UpdateSensitiveRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Sensitive> {
        const response = await this.updateSensitiveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
