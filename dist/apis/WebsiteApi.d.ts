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
import { SeededScoreIncrement, Website } from '../models';
export interface AssociateAssetRequest {
    asset: string;
    website: string;
}
export interface AssociatePersonRequest {
    website: string;
    person: string;
}
export interface DisassociateAssetRequest {
    website: string;
    asset: string;
}
export interface DisassociatePersonRequest {
    website: string;
    person: string;
}
export interface WebsiteScoresIncrementRequest {
    website: string;
    seededScoreIncrement?: SeededScoreIncrement;
}
export interface WebsiteUpdateRequest {
    transferables?: boolean;
    website?: Website;
}
export interface WebsitesSpecificWebsiteSnapshotRequest {
    website: string;
    transferables?: boolean;
}
/**
 *
 */
export declare class WebsiteApi extends runtime.BaseAPI {
    /**
     * This will associate a website with a asset.
     * /website/{website}/assets/associate/{asset} [POST]
     */
    associateAssetRaw(requestParameters: AssociateAssetRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will associate a website with a asset.
     * /website/{website}/assets/associate/{asset} [POST]
     */
    associateAsset(requestParameters: AssociateAssetRequest): Promise<void>;
    /**
     * This will associate a website with a person.
     * /website/{website}/persons/associate/{person} [POST]
     */
    associatePersonRaw(requestParameters: AssociatePersonRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will associate a website with a person.
     * /website/{website}/persons/associate/{person} [POST]
     */
    associatePerson(requestParameters: AssociatePersonRequest): Promise<void>;
    /**
     * This will enable us to dissassociate a website from a asset.
     * /website/{website}/assets/disassociate/{asset} [POST]
     */
    disassociateAssetRaw(requestParameters: DisassociateAssetRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will enable us to dissassociate a website from a asset.
     * /website/{website}/assets/disassociate/{asset} [POST]
     */
    disassociateAsset(requestParameters: DisassociateAssetRequest): Promise<void>;
    /**
     * This will enable us to dissassociate a website from a person.
     * /website/{website}/persons/disassociate/{person} [POST]
     */
    disassociatePersonRaw(requestParameters: DisassociatePersonRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will enable us to dissassociate a website from a person.
     * /website/{website}/persons/disassociate/{person} [POST]
     */
    disassociatePerson(requestParameters: DisassociatePersonRequest): Promise<void>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/website/{website}/scores/increment\' [POST]
     */
    websiteScoresIncrementRaw(requestParameters: WebsiteScoresIncrementRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/website/{website}/scores/increment\' [POST]
     */
    websiteScoresIncrement(requestParameters: WebsiteScoresIncrementRequest): Promise<void>;
    /**
     * This will update a specific website.
     * /website/update [POST]
     */
    websiteUpdateRaw(requestParameters: WebsiteUpdateRequest): Promise<runtime.ApiResponse<Website>>;
    /**
     * This will update a specific website.
     * /website/update [POST]
     */
    websiteUpdate(requestParameters: WebsiteUpdateRequest): Promise<Website>;
    /**
     * This will get a snapshot of a single website.
     * /website/{website} [GET]
     */
    websitesSpecificWebsiteSnapshotRaw(requestParameters: WebsitesSpecificWebsiteSnapshotRequest): Promise<runtime.ApiResponse<Website>>;
    /**
     * This will get a snapshot of a single website.
     * /website/{website} [GET]
     */
    websitesSpecificWebsiteSnapshot(requestParameters: WebsitesSpecificWebsiteSnapshotRequest): Promise<Website>;
}
