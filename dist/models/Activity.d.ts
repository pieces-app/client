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
import { Application, EmbeddedModelSchema, FlattenedAsset, FlattenedFormat, FlattenedUserProfile, GroupedTimestamp, MechanismEnum, SeededConnectorTracking } from './index';
/**
 * consider a rename to Event? That being said if we go with event we need to think about a word to pre/post fix event because it is likely to be a reserved word.
 *
 * additional documentation: https://www.notion.so/getpieces/Activity-4da8de193733441f85f87b510235fb74
 *
 *
 * Notes:
 * - user/asset/format are all optional, NOT required that one of these are present.
 * - if mechanism == internal we will not display to the user.
 *
 * Thoughts around additional properties.
 * - hmm dismissed array here, that is an array of strings, where the string is the userId that dismissed this notification? or we could potentially do it based on the os_ID.
 * -
 * @export
 * @interface Activity
 */
export interface Activity {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Activity
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof Activity
     */
    id: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Activity
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Activity
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {SeededConnectorTracking}
     * @memberof Activity
     */
    event: SeededConnectorTracking;
    /**
     *
     * @type {Application}
     * @memberof Activity
     */
    application: Application;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Activity
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {FlattenedAsset}
     * @memberof Activity
     */
    asset?: FlattenedAsset;
    /**
     *
     * @type {FlattenedUserProfile}
     * @memberof Activity
     */
    user?: FlattenedUserProfile;
    /**
     *
     * @type {FlattenedFormat}
     * @memberof Activity
     */
    format?: FlattenedFormat;
    /**
     *
     * @type {MechanismEnum}
     * @memberof Activity
     */
    mechanism: MechanismEnum;
    /**
     * This is the numeric value assigned for this activity event. This number is based off the the type of activity event calcaulated on the server side.DO NOT MODIFY. To see what the value qualilates to, please refer to the function within the common sdk. The number here is based on the fib series. from 0 -> infinity but rn there arnt any value over 8.
     * @type {number}
     * @memberof Activity
     */
    rank?: number;
}
export declare function ActivityFromJSON(json: any): Activity;
export declare function ActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Activity;
export declare function ActivityToJSON(value?: Activity | null): any;
