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
import {
    Auth0User,
    Auth0UserFromJSON,
    Auth0UserToJSON,
    ReturnedUserProfile,
    ReturnedUserProfileFromJSON,
    ReturnedUserProfileToJSON,
    UserProfile,
    UserProfileFromJSON,
    UserProfileToJSON,
} from '../models';

export interface SelectUserRequest {
    auth0User?: Auth0User;
}

export interface UpdateUserRequest {
    userProfile?: UserProfile;
}

export interface UserUpdateVanityRequest {
    userProfile?: UserProfile;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * An endpoint to clear the current user. 
     * /user/clear
     */
    async clearUserRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/clear`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * An endpoint to clear the current user. 
     * /user/clear
     */
    async clearUser(): Promise<void> {
        await this.clearUserRaw();
    }

    /**
     * This will refresh a user.
     * /user/refresh [GET]
     */
    async refreshUserRaw(): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/refresh`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * This will refresh a user.
     * /user/refresh [GET]
     */
    async refreshUser(): Promise<UserProfile> {
        const response = await this.refreshUserRaw();
        return await response.value();
    }

    /**
     * This will select the current user.
     * /user/select [POST]
     */
    async selectUserRaw(requestParameters: SelectUserRequest): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("auth0", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("auth0", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("auth0", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/user/select`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: Auth0UserToJSON(requestParameters.auth0User),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * This will select the current user.
     * /user/select [POST]
     */
    async selectUser(requestParameters: SelectUserRequest): Promise<UserProfile> {
        const response = await this.selectUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will stream in the current user, not quiet sure yet how we want to do this.
     * /user/stream [GET]
     */
    async streamUserRaw(): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/stream`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * This will stream in the current user, not quiet sure yet how we want to do this.
     * /user/stream [GET]
     */
    async streamUser(): Promise<UserProfile> {
        const response = await this.streamUserRaw();
        return await response.value();
    }

    /**
     * This will update a specific user in the database.
     * /user/update [POST]
     */
    async updateUserRaw(requestParameters: UpdateUserRequest): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserProfileToJSON(requestParameters.userProfile),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * This will update a specific user in the database.
     * /user/update [POST]
     */
    async updateUser(requestParameters: UpdateUserRequest): Promise<UserProfile> {
        const response = await this.updateUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh && get your access tokens to access these providers.
     * Your GET endpoint
     */
    async userProvidersRaw(): Promise<runtime.ApiResponse<ReturnedUserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/providers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ReturnedUserProfileFromJSON(jsonValue));
    }

    /**
     * This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh && get your access tokens to access these providers.
     * Your GET endpoint
     */
    async userProviders(): Promise<ReturnedUserProfile> {
        const response = await this.userProvidersRaw();
        return await response.value();
    }

    /**
     * This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.
     * /user [GET]
     */
    async userSnapshotRaw(): Promise<runtime.ApiResponse<ReturnedUserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ReturnedUserProfileFromJSON(jsonValue));
    }

    /**
     * This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.
     * /user [GET]
     */
    async userSnapshot(): Promise<ReturnedUserProfile> {
        const response = await this.userSnapshotRaw();
        return await response.value();
    }

    /**
     * This is a local route to update your vanityname. ie mark.pieces.cloud, where \"mark\" is the vanityname.
     * /user/update/vanity [POST]
     */
    async userUpdateVanityRaw(requestParameters: UserUpdateVanityRequest): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/update/vanity`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserProfileToJSON(requestParameters.userProfile),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * This is a local route to update your vanityname. ie mark.pieces.cloud, where \"mark\" is the vanityname.
     * /user/update/vanity [POST]
     */
    async userUpdateVanity(requestParameters: UserUpdateVanityRequest): Promise<UserProfile> {
        const response = await this.userUpdateVanityRaw(requestParameters);
        return await response.value();
    }

}
