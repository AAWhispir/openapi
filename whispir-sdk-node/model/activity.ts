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

export class Activity {
    /**
    * Specifies the action performed during this activity. The following are the list of actions that can be performed <ul><li>Create</li><li>Update</li><li>Move</li><li>Copy</li><li>Draft</li><li>Send</li><li>Modified </li><li>Delete</li><li>Contact Import File</li><li>Login </li><li>Approve</li><li>Reject</li><li>Dispatch</li><li>Register</li><li>Accept</li><li>Closed</li><li>Map</li><li>Un-map</li></ul>
    */
    'action': string;
    /**
    * Specifies the module to which this activity belongs to. The following are the list of actions that can be performed<ul><li>System</li><li>Message</li><li>Scheduled Message</li><li>User</li><li>Contact</li><li>DistributionList</li><li>Template</li><li>Workspace</li><li>Event</li><li>WebService</li><li>Settings</li> <li>Conversation</li><li>Gateway</li><li>Workspace Mapping</li><li>Folders</li><li>Team</li><li>RSS</li><li>API Mapping </li><li>Asset</li><li>Instruction</li></ul>
    */
    'module': string;
    /**
    * The workspace in which this activity is performed. This will usually be the API user’s default workspace
    */
    'workspace'?: string;
    /**
    * The username of the person who performed this activity. This will usually be the API user invoking the creation.
    */
    'user'?: string;
    /**
    * Specifies the status of the activity. The status can be one of 1)Successful 2)Failed 3)Rejected
    */
    'status': string;
    /**
    * The description of the activity. This is a free text that details about the activity.
    */
    'description'?: string;
    /**
    * The date and time of the activity in the format:dd/mm/yy hh:mm. This will be defaulted to the time at which this activity is created.
    */
    'time'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "module",
            "baseName": "module",
            "type": "string"
        },
        {
            "name": "workspace",
            "baseName": "workspace",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Activity.attributeTypeMap;
    }
}

