var aboutMe = {
  title1: "About Me",
  title2: "Hello, I'm Felipe Hinojosa",
  title3: "I'm working as Financial IT Specialist.",
  title4: `
    Senior engineer with fifteen years of experience in multinational and Chilean financial industry. 
    Experience in leading projects, developing solutions, infrastructure and IT operations for Home Banking, 
    Core Banking, Regulatory Reports, Accounting, Operations and Credit Risk. Responsible professional, enthusiastic, 
    dedicated and self-taught, driven to perform with excellence in everything that is undertaken, 
    with a vision to improve and optimize the processes of the areas managed.  
  `
}

var myServices = {
  title1: "My Services",
  title2: "",
  title3: `
  Optimize and automate your process
  `,
  title4: `
    I can analyze the processes of your company and deliver an optimization according to your needs and requirements,
    either by building excel macros or developing complex systems such as ETL processes, Web applications,
    database modeling and implementation, etc.
  `,
  title5:`Development Excel Macros`,
  title6:`Development Web Applications`,
  title7:`ETL Process Development`,
  title8:`Modeling and Development of Database`
}

var myFeatureSkill = {
  title1: "My Featured Skills",
  title2: "",
  title3: `I'm using top technologies`,
  title4: `
  I am constantly training and specializing in new technologies, participating in online courses 
  and bootcamps. And I'm always ready to take on any challenge.
  `,
  title6:`some technologies that I know and handle.....`
}

var tecnologies = [
  {
    id: 1,
    title: `talend`,
    src: `/assets/talend/openStudio.jpg`,
    description: `
    A company data integration software to connect, access and transform any type of data in the cloud or 
    locally. Develop and deploy reusable data integration tasks 10 times faster than manual scheduling with
    a simple point-and-click interface.
    `,
    url: `https://www.talend.com/`
  },
  {
    id: 2,
    title: `SQL Server`,
    src: `/assets/sql/logo.jpg`,
    description: `
    Microsoft SQL Server is a relational database management system, developed by the Microsoft company.
    The development language used is Transact-SQL, an implementation of the ANSI standard of the SQL 
    language, used to manipulate and retrieve data, create tables and define relationships between them.
    `,
    url:`https://www.microsoft.com/es-es/sql-server/sql-server-2019`
  },
  {
    id: 3,
    title: `Node Js`,
    src: `/assets/node/logo.svg`,
    description: `
    Is a JavaScript runtime built with Chrome's V8 JavaScript engine.
    `,
    url: `https://nodejs.org/`
  },
  {
    id: 4,
    title: `React js`,
    src: `/assets/react/logo.png`,
    description: `
    React helps you create interactive user interfaces easily. Design simple views for each state in your app, and React will efficiently update and render the correct components when the data changes.
    `,
    url: `https://reactjs.org/`
  }
]

var contactMe = {
  title1: `Get in touche with Me`,
  title2: ``,
  title3: `Are you ready to work together?`,
  title4: `Let's start a Project! Hire Me.`,
  title5: `
    I'm open to any communication! Feel free to conctac me any convenient way! I'm
    always interested in hearing about new projects, opportunities and challenges.
  `,
  phone: `+ 56-9-64296221`,
  email: `fepipe82@hotmail.com`
}

document.addEventListener("DOMContentLoaded", function(e) {
   
   var title1 = document.getElementById('aboutMe_title1');
   var title2 = document.getElementById('aboutMe_title2');
   var title3 = document.getElementById('aboutMe_title3');
   var title4 = document.getElementById('aboutMe_title4');

   var title1_1 = document.getElementById('myServices_title1');
   var title3_3 = document.getElementById('myServices_title3');
   var title4_4 = document.getElementById('myServices_title4');
   var title5_5 = document.getElementById('myServices_title5');
   var title6_6 = document.getElementById('myServices_title6');
   var title7_7 = document.getElementById('myServices_title7');
   var title8_8 = document.getElementById('myServices_title8');

   var title1_1_1 = document.getElementById('myFeaturedSkills-title1');
   var title3_3_3 = document.getElementById('myFeaturedSkills-title3');
   var title4_4_4 = document.getElementById('myFeaturedSkills-title4');
   var title6_6_6 = document.getElementById('myFeaturedSkills-title6');

   var contact_title1 = document.getElementById('contactMe-title1');
   var contact_title3 = document.getElementById('contactMe-title3');
   var contact_title4 = document.getElementById('contactMe-title4');
   var contact_title5 = document.getElementById('contactMe-title5');
   var phone = document.getElementById('phone');
   var email = document.getElementById('email');


   title1.innerHTML = aboutMe.title1;   
   title2.innerHTML = aboutMe.title2;   
   title3.innerHTML = aboutMe.title3;   
   title4.innerHTML = aboutMe.title4;   

   title1_1.innerHTML = myServices.title1;
   title3_3.innerHTML = myServices.title3;
   title4_4.innerHTML = myServices.title4;
   title5_5.innerHTML = myServices.title5;
   title6_6.innerHTML = myServices.title6;
   title7_7.innerHTML = myServices.title7;
   title8_8.innerHTML = myServices.title8;

   title1_1_1.innerHTML = myFeatureSkill.title1;
   title3_3_3.innerHTML = myFeatureSkill.title3;
   title4_4_4.innerHTML = myFeatureSkill.title4;
   title6_6_6.innerHTML = myFeatureSkill.title6;

   contact_title1.innerHTML = contactMe.title1
   contact_title3.innerHTML = contactMe.title3
   contact_title4.innerHTML = contactMe.title4
   contact_title5.innerHTML = contactMe.title5
   phone.innerHTML = contactMe.phone
   email.innerHTML = contactMe.email
   
  setTecnologies();
   
});

function setTecnologies(){
  var divTecnologies = document.getElementById('myTecnologies');
  divTecnologies.innerHTML = '';

  for(var i = 0; i < tecnologies.length; i++) {
     var img = document.createElement('img');
     var pDescription = document.createElement('p');
     var pTitle = document.createElement('p');

     var div = document.createElement('div');

     var a = document.createElement('a');

     a.setAttribute('href', tecnologies[i].url);
     a.setAttribute('target','_blank');
     a.setAttribute('class','p-link');

     img.setAttribute('src', tecnologies[i].src);
     img.setAttribute('class', 'p-img');
     
     pTitle.setAttribute('class', 'p-title');
     pTitle.innerHTML = tecnologies[i].title;

     pDescription.setAttribute('class', 'p-descripcion');
     pDescription.innerHTML = tecnologies[i].description;

     div.setAttribute('class','card-container');

     div.appendChild(img);
     div.appendChild(pTitle);
     div.appendChild(pDescription);

     a.appendChild(div);

     divTecnologies.appendChild(a);
  }
}

function handleContact() {
  
  //  VARIABLES

   var contactName = document.getElementById('contactName');
   var contactEmail = document.getElementById('contactEmail');
   var subject = document.getElementById('subject');
   var message = document.getElementById('message');
   var alert_nameEmail = document.getElementById('alert_nameEmail');
   var alert_subject = document.getElementById('alert_subject');
   var alert_message = document.getElementById('alert_message');

  //  VALIDACION DE DATOS REQUERIDOS

   if ( contactName.value == '' || contactName.value == null || contactEmail.value == '' || contactEmail.value == null ) {
       alert_nameEmail.style.display = 'flex';
   } else {
       alert_nameEmail.style.display = 'none';     
   }

   if ( subject.value == '' || subject.value == null ) {
       alert_subject.style.display = 'flex';
   } else {
       alert_subject.style.display = 'none';     
   }

   if ( message.value == '' || message.value == null ) {
       alert_message.style.display = 'flex';
   } else {
       alert_message.style.display = 'none';     
   }

   if ( contactName.value !== '' && contactName.value !== null && contactEmail.value !== '' && contactEmail.value !== null && subject.value !== '' && subject.value !== null && message.value !== '' && message.value !== null ) {
     contactName.value = '';
     contactEmail.value = '';
     subject.value = '';
     message.value = '';
   }

   
}