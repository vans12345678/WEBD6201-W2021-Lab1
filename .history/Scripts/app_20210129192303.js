/* Custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";


(function(){

    function displayHome()
    {
        
        let introText = "This is a simple site to demonstrate the specified requirements for Lab 1 WEBD 6201 - Client Side Scripting"; 
        let introTextElement = document.getElementById("introParagraph");
        
        introTextElement.textContent = introText;
        introTextElement.className = "fs-5 fw-bold text-center";

        mainContent.innerHTML =
        `<h1 id = "firstHeading">Welcome to WEBD6201 - Lab 1</h1>
        <p id = "paragraphOne" class = "fs-3 fw-bold">This is my first paragraph</p>
        `;
        
    }
    function displayAbout()
    {
        
    }
    function displayProjects()
    {
        //Define text and id's
        let p1Text = "Project One: COBOL Item List"; 
        let p2Text = "Project Two: C#, XAML, MDF  Preferred Shares and Common Shares";
        let p3Text = "Project Three: ASP.NET and MVC Framework Animal Shelter";
        let p1Description = "This project reads records from a .dat file, performs calculations on the data" +
        " then outputs it to a .out file neatly formatted.";
        let p2Description = "This project uses XAML for the windows form and a database to keep track of common and preferred shares." +
        " The database keeps track of how many shares(common/preferred) are  available and validation is applied.";
        let p3Description = "This project is a web application that keeps track of animals, owners, appointment and login info in a database." +
        " Relational database concepts are applied.";

        let p1TextElement = document.getElementById("p1");
        let p1DescriptionElement = document.getElementById("p1Description");
        p1TextElement.textContent = p1Text;
        p1DescriptionElement.textContent = p1Description;

        let p2TextElement = document.getElementById("p2");
        let p2DescriptionElement = document.getElementById("p2Description");
        p2TextElement.textContent = p2Text;
        p2DescriptionElement.textContent = p2Description
        
        let p3TextElement = document.getElementById("p3");
        let p3DescriptionElement = document.getElementById("p3Description");
        p3TextElement.textContent = p3Text;
        p3DescriptionElement.textContent = p3Description


        
        
        
        //Assign text content

        
       

        //Assign styles        
        

        
    }
    function displayServices()
    {
        
    }
    function displayContact()
    {

        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        //form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function()
        {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger warnMessage";
                messageArea.textContent = "Please enter an appropriate name > 2 characters";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });
            let sendButton = document.getElementById("sendButton");
            sendButton.addEventListener("click", function(event)
            {
                //event.preventDefault();
                // //Displays twice?

                let contact = new Contact(fullName.value,contactNumber.value, emailAddress.value);

                //console.log(contact.serialize());
                if(contact.serialize())
                {
                    localStorage.setItem((localStorage.length + 1).toString(),contact.serialize());
                }     
            });
    }
    function displayContactList()
    {
        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");
            let data = "";

            for (let index = 0; index < localStorage.length; index++) 
            {
                let contactData = localStorage.getItem((index + 1).toString());
                let contact = new Contact();

                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row">${index + 1}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
              </tr>`;
            }
            contactList.innerHTML = data;
        }
         
    }
    
    function Start()
    {
        console.log("App Started...");

        switch(document.title)
        {
            case "Index":
                displayHome();
                break;
            case "About":
                displayAbout();
                break;
            case "Projects":
                displayProjects();  
                break;
            case "Services":
                displayServices();  
                break;   
            case "Contact Us":
                displayContact();  
                break; 
            case "Contact-List":
                displayContactList();  
                break; 
        }
        

    }

    window.addEventListener("load", Start);

})();