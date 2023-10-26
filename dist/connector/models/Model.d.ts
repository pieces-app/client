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
import { ByteDescriptor, EmbeddedModelSchema, ExternalMLProviderEnum, GroupedTimestamp, ModelFoundationEnum, ModelTypeEnum, ModelUsageEnum } from './';
/**
 * This is a Machine Learning Model, that will give readable information about the Machine Learning Model Used.
 * @export
 * @interface Model
 */
export interface Model {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Model
     */
    schema?: EmbeddedModelSchema;
    /**
     * uuid
     * @type {string}
     * @memberof Model
     */
    id: string;
    /**
     * this is a version of the model.
     * @type {string}
     * @memberof Model
     */
    version: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Model
     */
    created: GroupedTimestamp;
    /**
     * This is an Optional Name of the Model.
     * @type {string}
     * @memberof Model
     */
    name: string;
    /**
     * An Optional Description of the model itself.
     * @type {string}
     * @memberof Model
     */
    description?: string;
    /**
     * This will inform the user if this was a model that is hosted in the cloud
     * @type {boolean}
     * @memberof Model
     */
    cloud: boolean;
    /**
     *
     * @type {ModelTypeEnum}
     * @memberof Model
     */
    type: ModelTypeEnum;
    /**
     *
     * @type {ModelUsageEnum}
     * @memberof Model
     */
    usage: ModelUsageEnum;
    /**
     *
     * @type {ByteDescriptor}
     * @memberof Model
     */
    bytes?: ByteDescriptor;
    /**
     *
     * @type {ByteDescriptor}
     * @memberof Model
     */
    ram?: ByteDescriptor;
    /**
     * quantization is a string like: q8f16_0,  q4f16_1, etc...
     * @type {string}
     * @memberof Model
     */
    quantization?: string;
    /**
     *
     * @type {ModelFoundationEnum}
     * @memberof Model
     */
    foundation?: ModelFoundationEnum;
    /**
     * This is an optional bool to let us know if this model has been downloaded locally.
     * @type {boolean}
     * @memberof Model
     */
    downloaded?: boolean;
    /**
     * This is a boolean that represents if the model is loaded into memory.(this is not persisted, and is calculated on the fly.)
     * @type {boolean}
     * @memberof Model
     */
    loaded?: boolean;
    /**
     * This is the unique model name used to load the model.
     * @type {string}
     * @memberof Model
     */
    unique?: string;
    /**
     * This is the number of parameters in terms of billions.
     * @type {number}
     * @memberof Model
     */
    parameters?: number | null;
    /**
     *
     * @type {ExternalMLProviderEnum}
     * @memberof Model
     */
    provider?: ExternalMLProviderEnum;
    /**
     * This is an optional bool that is optimized for CPU usage.
     * @type {boolean}
     * @memberof Model
     */
    cpu?: boolean;
    /**
     * This is a calculated property, that will say if this is currently downloading.
     * @type {boolean}
     * @memberof Model
     */
    downloading?: boolean;
}
export declare function ModelFromJSON(json: any): Model;
export declare function ModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): Model;
export declare function ModelToJSON(value?: Model | null): any;
