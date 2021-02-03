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

        let newParagraph = document.createElement("li");
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.innerHTML = `
        <a  class="nav-link fas fa-fingerprint fa-lg" aria-current="page" href="human-resources.html">Human Resources</a>
        `;
        let mainContent = document.getElementById("navAbout");
        mainContent.appendChild(newParagraph);


        // let paragraphDiv = document.createElement('div');
        // let paragraphThree =  `<p id = "paragraphThree" class = "fs-7 fw-bold">...And this is the Third paragraph</p>`;
        // paragraphDiv.innerHTML = paragraphThree;
        // mainContent.innerHTML = paragraphThree;
        // console.log(paragraphOneElement);

        //insertion before node
        //newParagraph.before(paragraphDiv);

        //insertion after node
        newParagraph.after(paragraphDiv);
        // navTextElement = document.getElementById("navHumanResources").innerHTML = `
        //     <a  class="nav-link fas fa-fingerprint fa-lg" aria-current="page" href="human-resources.html">Human Resources</a>
        //     `;
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

        //About Andre
        let aboutElement = document.getElementById("aboutTitle").textContent = "About Us";
        aboutElement = document.getElementById("aboutAText");
        aboutElement.innerHTML = `<h1>Andre Agrippa:</h1>
        <p class = "">I'm a 2nd year student at Durham College in the Computer Programming and Analysis program. I've been
        coding for several years now because I enjoy it and always looking to improve in this aspect.</p>
        <a class = "fa-lg" href="andre_resume.pdf" download>Resume Download</a></br></br>
        <img src="../images/morpheus.JPG" alt="" style="width:500px;height:250px;">`;

    }
    function displayProjects()
    {
        DisplayNav();

        //Projects 1
        let projectsElement = document.getElementById("projectsTitle").textContent = "Projects";
        projectsElement = document.getElementById("projectsText").innerHTML = 
        `<h3>Project One: COBOL Item List</h3>
        <p>This project reads records from a .dat file, performs calculations on the data then outputs it to a .out file neatly formatted.</p>
        <img src="../images/p1.PNG" alt="" style="width:800px;height:500px;">`;

        //Projects 2
        projectsElement = document.getElementById("projectsText").innerHTML += 
        `<h3>Project Two: C#, XAML, MDF  Preferred Shares and Common Shares</h3>
        <p>This project uses XAML for the windows form and a database to keep track of common and preferred shares.
        The database keeps track of how many shares(common/preferred) are  available and validation is applied.</p>
        <img src="../images/p2.PNG" alt="" style="width:800px;height:500px;">`;

        //Projects 3
        projectsElement = document.getElementById("projectsText").innerHTML += 
        `<h3>Project Three: ASP.NET and MVC Framework Animal Shelter</h3>
        <p>This project is a web application that keeps track of animals, owners, appointment and login info in a database. 
        Relational database concepts are applied.</p>
        <img src="../images/p3.PNG" alt="" style="width:800px;height:500px;">`;
        
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
        let servicesElement = document.getElementById("servicesTitle").textContent = "Web Development";
        servicesElement = document.getElementById("servicesText").innerHTML = 
        `<h3>Web Development:</h3>
        <p>We offer a variety of different web development (Front-end, Back-end, Databases). Languages (PHP, ASP.NET, JavaScript)</p>
        <img src="../images/s1.jpg" alt="" style="width:800px;height:500px;">`;

        //Services 2
        servicesElement = document.getElementById("servicesText").innerHTML += 
        `<h3>OOP Programming</h3>
        <p>We offer a variety of different Object Oriented Programming. We're experienced with C#, C++, Java etc.
        Whether it be windows forms applications, console applications GUI, etc.</p>
        <img src="../images/s2.png" alt="" style="width:800px;height:500px;">`;

        //Services 3
        servicesElement = document.getElementById("servicesText").innerHTML += 
        `<h3>Database Management System</h3>
        <p>It's been almost 3 years since we've had experience in database development. We've used software such as
        Microsoft SQL Server and PgAdmin4. Experienced with relational database concepts.</p>
        <img src="../images/s3.jpg" alt="" style="width:800px;height:500px;">`;

        
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
        let navTextElement = document.getElementById("navHumanResources").innerHTML = `
            <a  class="nav-link fas fa-fingerprint fa-lg active" aria-current="page" href="human-resources.html">Human Resources</a>
            `;
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