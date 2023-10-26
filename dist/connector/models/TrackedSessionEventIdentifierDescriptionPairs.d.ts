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
import { EmbeddedModelSchema } from './';
/**
 * These are all of the available event types that are permitted in an object pair notation.
 * @export
 * @interface TrackedSessionEventIdentifierDescriptionPairs
 */
export interface TrackedSessionEventIdentifierDescriptionPairs {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    schema?: EmbeddedModelSchema;
    /**
     * The key value pair for an application being opened.
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionInitialized?: TrackedSessionEventIdentifierDescriptionPairsSessionInitializedEnum;
    /**
     * There was a successful connection locally
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionLocalConnectionSucceeded?: TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionSucceededEnum;
    /**
     * There was a failed connection locally
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionLocalConnectionFailed?: TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionFailedEnum;
    /**
     * If the current application is in the background or not, could also be minimized.
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionInactive?: TrackedSessionEventIdentifierDescriptionPairsSessionInactiveEnum;
    /**
     * If the application has been brought to the forground.
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionActive?: TrackedSessionEventIdentifierDescriptionPairsSessionActiveEnum;
    /**
     * If the user has closed the application, thus ending the session.
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionTerminated?: TrackedSessionEventIdentifierDescriptionPairsSessionTerminatedEnum;
    /**
     * A user has signed into this session with a an external account
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionAuthenticatedWithSignIn?: TrackedSessionEventIdentifierDescriptionPairsSessionAuthenticatedWithSignInEnum;
    /**
     * A user has signed out of this session
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionUnauthenticatedWithSignOut?: TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithSignOutEnum;
    /**
     * A user did not sign into the session with a dismissal
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionUnauthenticatedWithDismiss?: TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithDismissEnum;
    /**
     * A user did not sign into the session with a reminder
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionUnauthenticatedWithRemind?: TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithRemindEnum;
    /**
     * Onboarding has been initialized for this session
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionOnboardingInitialized?: TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingInitializedEnum;
    /**
     * Onboarding has been completed for this session
     * @type {string}
     * @memberof TrackedSessionEventIdentifierDescriptionPairs
     */
    sessionOnboardingCompleted?: TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingCompletedEnum;
}
/**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionInitializedEnum {
    ASessionHasBeenInitializedAndTheApplicationHasBeenOpened = "a_session_has_been_initialized_and_the_application_has_been_opened"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionSucceededEnum {
    OneOrMoreApplicationsHasSuccessfullyConnected = "one_or_more_applications_has_successfully_connected"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionFailedEnum {
    OneOrMoreApplicationsHasFailedToConnectLocally = "one_or_more_applications_has_failed_to_connect_locally"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionInactiveEnum {
    ASessionIsInactiveBecauseTheApplicationIsNotInTheForeground = "a_session_is_inactive_because_the_application_is_not_in_the_foreground"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionActiveEnum {
    ASessionIsActiveBecauseTheApplicationIsInTheForeground = "a_session_is_active_because_the_application_is_in_the_foreground"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionTerminatedEnum {
    ASessionHasBeenEndedAndTheApplicationHasBeenClosed = "a_session_has_been_ended_and_the_application_has_been_closed"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionAuthenticatedWithSignInEnum {
    AUserHasSignedIntoThisSessionWithAAnExternalAccount = "a_user_has_signed_into_this_session_with_a_an_external_account"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithSignOutEnum {
    AUserHasSignedOutOfThisSession = "a_user_has_signed_out_of_this_session"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithDismissEnum {
    AUserDidNotSignIntoTheSessionWithADismissal = "a_user_did_not_sign_into_the_session_with_a_dismissal"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithRemindEnum {
    AUserDidNotSignIntoTheSessionWithAReminder = "a_user_did_not_sign_into_the_session_with_a_reminder"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingInitializedEnum {
    OnboardingHasBeenInitializedForThisSession = "onboarding_has_been_initialized_for_this_session"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingCompletedEnum {
    OnboardingHasBeenCompletedForThisSession = "onboarding_has_been_completed_for_this_session"
}
export declare function TrackedSessionEventIdentifierDescriptionPairsFromJSON(json: any): TrackedSessionEventIdentifierDescriptionPairs;
export declare function TrackedSessionEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedSessionEventIdentifierDescriptionPairs;
export declare function TrackedSessionEventIdentifierDescriptionPairsToJSON(value?: TrackedSessionEventIdentifierDescriptionPairs | null): any;
