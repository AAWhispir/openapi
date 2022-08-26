/**
 * Whispir Platform API
 * Whispir Platform API for cross channel and multi channel communications. Documentation on each endpoint is available at https://developers.whispir.com.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@whispir.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class FieldMapping {
    /**
    * First Name of the Contact. Value of this field is used to map the field within the resource.
    */
    'firstName': string;
    /**
    * Last Name of the Contact. Value of this field is used to map the field within the resource.
    */
    'lastName': string;
    /**
    * The mobile phone number of the Contact. Value of this field is used to map the field within the newly created resource.
    */
    'workMobilePhone1': string;
    /**
    * The country field of the contact. The value of this field is used to map to the field within the newly created contact.
    */
    'workCountry': string;
    /**
    * The timezone field of the contact. The value of this field is used to map to the timezone field within the newly created contact.
    */
    'timezone': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "workMobilePhone1",
            "baseName": "workMobilePhone1",
            "type": "string"
        },
        {
            "name": "workCountry",
            "baseName": "workCountry",
            "type": "string"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FieldMapping.attributeTypeMap;
    }
}

