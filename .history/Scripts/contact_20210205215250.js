/************************************************************
 * Name: Andre Agrippa, Michai Pryce
 * Date: 01/20/2021
 * Description: This file creates a contact class used to
 * create/display contacts for the web application 
 */
"use strict";
class Contact {
    
    //Getters and setters
    get FullName() {
        return this.m_fullName;
    }
    set FullName(value) {
        this.m_fullName = value;
    }
    get ContactNumber() {
        return this.m_contactNumber;
    }
    set ContactNumber(value) {
        this.m_contactNumber = value;
    }
    get EmailAddress() {
        return this.m_emailAddress;
    }
    set EmailAddress(value) {
        this.m_emailAddress = value;
    }
    get ShortMessage(){
        return this.m_shortMessage;
    }
    set ShortMessage(value) {
        this.m_shortMessage = value;
    }
    /**
     * 
     * @param {string} fullName 
     * @param {string} contactNumber 
     * @param {string} emailAddress
     * @param {string} shortMessage 
     */
    constructor(fullName = "", contactNumber = "", emailAddress = "", shortMessage = "") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
        this.ShortMessage = shortMessage;
    }

    /**
     *This method overrides the built-in toString() method for Contact class
     *
     * @return {*} 
     * @memberof Contact
     */
    toString()
    {
        return `Full Name       : ${this.FullName} \nContactNumber       : ${this.ContactNumber} 
        \nEmailAddress       :${this.EmailAddress} \nShortMessage       :${this.ShortMessage}`;
    }
    /**
     *This method returns a JSON object made up of the properties of the Contact class
     *
     * @return {Object} 
     * @memberof Contact
     */
    toJSON()
    {
        return{
            "fullName": this.FirstName,
            "contactNumber": this.ContactNumber,
            "emailAddress": this.EmailAddress, 
            "shortMessage": this.ShortMessage
        }
    }
    /**
     *
     *This method returns the Contact into a comma-separated value string
     * @return {string} 
     * @memberof Contact
     */
    serialize()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "" && this.ShortMessage !== "")
        {
            return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}, ${this.ShortMessage}`;
        }
        else
        {
            console.error("One or more properties of the Contact is empty");
            return null;
        }    
    }
    /**
     *This method takes a comma-separated data string assigns values to the Contact class properties
     *
     * @param {string} data
     * @returns {void}
     * @memberof Contact
     */
    deserialize(data)
    {
        let propertyArray = data.split(",");
        
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
        this.ShortMessage = propertyArray[3];

    }
}