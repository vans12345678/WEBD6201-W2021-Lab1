/************************************************************\
 * Name: Andre Agrippa, Michai Pryce
 * Date: 01/20/2021
 * Description: This file adds functionality to the Home,
 * About Us, Human Resources, Contact Us, Projects and Services
 * pages.
 * Date Completed: 02/05/2021
 ************************************************************\

"use strict";


(function(){

    /**
     * This function displays the navbar as well as the footer. Called on all pages
     */
    function DisplayNav()
    {
        let navTextElement = document.getElementById("navHome").textContent = "WEBD 6201";
        navTextElement = document.getElementById("navIndex").textContent = "Home";
        navTextElement = document.getElementById("navAboutItem").textContent = "About Us";

        //Set human resources via js
        let navAboutElement = document.getElementById("navAbout");
        let hrListItem = document.createElement("li");
        hrListItem.setAttribute("id", "liHumanResources");
        hrListItem.setAttribute("class", "nav-item");
        let navbar = document.getElementById("ulNav").appendChild(hrListItem);
        hrListItem.innerHTML = `<a class="nav-link" aria-current="page" href="human-resources.html">
        <i id ="navHumanResources" class ="fas fa-project-diagram fa-lg">Human Resources</i></a>`;
        if(document.title === "Human Resources"){
            hrListItem.innerHTML = `<a class="nav-link active" aria-current="page" href="human-resources.html">
            <i id ="navHumanResources" class ="fas fa-project-diagram fa-lg">Human Resources</i></a>`;
        }
        
        
        navAboutElement.after(hrListItem);

        navTextElement = document.getElementById("navContact").textContent = "Contact Us";
        navTextElement = document.getElementById("navProjects").textContent = "Projects";
        navTextElement = document.getElementById("navServices").textContent = "Services";
        navTextElement = document.getElementById("footer").textContent = "Copyright 2021.";
    }

    /**
     * Displays index for website
     */
    function displayHome()
    {
        DisplayNav();
        let introText = "This is a simple site to demonstrate the specified requirements for Lab 1 WEBD 6201 - Client Side Scripting"; 
        let titleText = "Welcome to WEBD 6201";
        
        let introTextElement = document.getElementById("indexTitle").textContent = titleText;
        introTextElement = document.getElementById("indexParagraph").textContent = introText;

    }
    /**
     * Displays about us page for website
     */
    function displayAbout()
    {
        DisplayNav();

        //About Andre
        let aboutElement = document.getElementById("aboutTitle").textContent = "About Us";
        aboutElement = document.getElementById("aboutAText");
        aboutElement.innerHTML = `<h1>Andre Agrippa:</h1>
        <p class = "">I'm a 2nd year student at Durham College in the Computer Programming and Analysis program. I've been
        coding for several years now because I enjoy it and always looking to improve in this aspect.</p>
        <a class = "fa-lg" href="../resumes/andre_resume.pdf" download>Resume Download</a></br></br>
        <img src="../images/morpheus.JPG" alt="" style="width:500px;height:250px;">`;

    }
    /**
     * Displays top 3 projects
     */
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
    /**
     * Displays top 3 services
     */
    function displayServices()
    {
        DisplayNav();

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
    /**
     * Contact creation page, has a form and button for submission
     */
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
                event.preventDefault();
                // //Displays twice?
                
                let contact = new Contact(fullName.value,contactNumber.value, emailAddress.value, shortMessage.value);

                console.log(contact.serialize());
                if(contact.serialize())
                {
                    localStorage.setItem((localStorage.length + 1).toString(),contact.serialize());

                    window.location.href = "index.html";
                }
                   
            });
            
    }
    
    /**
     * Displays human resources page
     */
    function displayHumanResources()
    {
        DisplayNav();
    }
    
    /**
     * Upon start of website, loads page depending on document title
     */
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