/************************************************************
 * Name: Andre Agrippa, Michai Pryce
 * Date: 01/20/2021
 * Description: This file adds functionality to the Home,
 * About Us, Human Resources, Contact Us, Projects and Services
 * pages.
 * Date Completed:
 */

"use strict";


(function(){

    function DisplayNav()
    {
        let navTextElement = document.getElementById("navHome").textContent = "WEBD 6201";
        navTextElement = document.getElementById("navIndex").textContent = "Home";
        navTextElement = document.getElementById("navAbout").textContent = "About Us";
        navTextElement = document.getElementById("navHumanResources").textContent = "Human Resources";
        navTextElement = document.getElementById("navContact").textContent = "Contact Us";
        navTextElement = document.getElementById("navProjects").textContent = "Projects";
        navTextElement = document.getElementById("navServices").textContent = "Services";
        navTextElement = document.getElementById("footer").textContent = "Copyright 2021.";
    }

    function displayHome()
    {
        DisplayNav();
        let introText = "This is a simple site to demonstrate the specified requirements for Lab 1 WEBD 6201 - Client Side Scripting"; 
        let titleText = "Welcome to WEBD 6201";
        
        let introTextElement = document.getElementById("indexTitle").textContent = titleText;
        introTextElement = document.getElementById("indexParagraph").textContent = introText;

    }
    function displayAbout()
    {
        DisplayNav();
        let andreHeader = "Andre Agrippa:";
        let andreText = "I'm a 2nd year student at Durham College in the Computer Programming and Analysis program.";

        //About Andre
        let aboutElement = document.getElementById("aboutTitle").textContent = "About Us";
        aboutElement = document.getElementById("aboutAText");
        aboutElement.innerHTML = `<h3>Andre Agrippa:</h3>
        <p>I'm a 2nd year student at Durham College in the Computer Programming and Analysis program.</p>
        <a class = "fa-lg" href="andre_resume.pdf" download>Resume Download</a></br>
        <img src="../images/morpheus.JPG" alt="" style="width:500px;height:250px;">`;

    }
    function displayProjects()
    {
        DisplayNav();
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

        //Projects 1
        let projectsElement = document.getElementById("p1Description");
        boutElement.innerHTML = `<h3>Andre Agrippa:</h3>
        <p>I'm a 2nd year student at Durham College in the Computer Programming and Analysis program.</p>
        <a class = "fa-lg" href="andre_resume.pdf" download>Resume Download</a></br>
        <img src="../images/morpheus.JPG" alt="" style="width:500px;height:250px;">`;
      

        //Assign styles        
        

        
    }
    function displayServices()
    {
        DisplayNav();
        let s1Header = "Web Development:";
        let s1Text = "We offer a variety of different web development (Front-end, Back-end, Databases). Languages (PHP, ASP.NET, JavaScript)";
        let s2Header = "Service 2:";
        let s2Text = "Service 2 text";
        let s3Header = "Service 3:";
        let s3Text = "Service 3 text";

        //Services 1
        let headerElement = document.getElementById("s1Header").textContent = s1Header;
        let descriptionElement = document.getElementById("s1Description").textContent = s1Text;

        //Service 2
        headerElement = document.getElementById("s2Header").textContent = s2Header;
        descriptionElement = document.getElementById("s2Description").textContent = s2Text;

        //Service 3
        headerElement = document.getElementById("s3Header").textContent = s3Header;
        descriptionElement = document.getElementById("s3Description").textContent = s3Text;

        
    }
    function displayContact()
    {
        DisplayNav();

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

                let contact = new Contact(fullName.value,contactNumber.value, emailAddress.value, shortMessage.value);

                console.log(contact.serialize());
                if(contact.serialize())
                {
                    localStorage.setItem((localStorage.length + 1).toString(),contact.serialize());
                }     
            });
    }
    function displayContactList()
    {
        DisplayNav();
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
                <td>${contact.ShortMessage}</td>
              </tr>`;
            }
            contactList.innerHTML = data;
        }
         
    }
    function displayHumanResources()
    {
        DisplayNav();
    }
    
    function Start()
    {
        console.log("App Started...");

        //Based of title of html
        switch(document.title)
        {
            case "Index":
                displayHome();
                break;
            case "About Us":
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
            case "Human Resources":
                displayHumanResources();  
                break; 
        }
        

    }

    window.addEventListener("load", Start);

})();