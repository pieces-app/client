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
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    TrackedApplication,
    TrackedApplicationFromJSON,
    TrackedApplicationFromJSONTyped,
    TrackedApplicationToJSON,
    TrackedUserProfile,
    TrackedUserProfileFromJSON,
    TrackedUserProfileFromJSONTyped,
    TrackedUserProfileToJSON,
} from './index';

/**
 * A model that allows for us to specifically track Application Installs & Related Data
 * @export
 * @interface TrackedApplicationInstall
 */
export interface TrackedApplicationInstall {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedApplicationInstall
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TrackedApplication}
     * @memberof TrackedApplicationInstall
     */
    application: TrackedApplication;
    /**
     * 
     * @type {TrackedUserProfile}
     * @memberof TrackedApplicationInstall
     */
    user?: TrackedUserProfile;
}

export function TrackedApplicationInstallFromJSON(json: any): TrackedApplicationInstall {
    return TrackedApplicationInstallFromJSONTyped(json, false);
}

export function TrackedApplicationInstallFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedApplicationInstall {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'application': TrackedApplicationFromJSON(json['application']),
        'user': !exists(json, 'user') ? undefined : TrackedUserProfileFromJSON(json['user']),
    };
}

export function TrackedApplicationInstallToJSON(value?: TrackedApplicationInstall | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'application': TrackedApplicationToJSON(value.application),
        'user': TrackedUserProfileToJSON(value.user),
    };
}


