

function Regfunction(){

  var userDetail ={};  
  var errorCount = 0;    
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var phoneno = document.getElementById("phoneno").value;
  var email = document.getElementById("email").value;
  var DOB = document.getElementById("DOB").value; 
  var Experience = document.getElementById("experience").value;
  var ExperHave="";
  var degree = document.getElementById("degree").value;
  var course = document.getElementById("course").value;
  var DOG = document.getElementById("DOG").value;
  var gender = document.getElementById("gender").value;
  var role = document.getElementById("role").value;
  var salary = document.getElementById("salary").value;

  //       firstname and lastname validation 

  if(isNaN(firstname)){
    document.getElementById("firstname").style.borderColor="green";
  }
  else{
    document.getElementById("firstname").style.borderColor="red";
    errorCount++
  }

  if(isNaN(lastname)){
    document.getElementById("lastname").style.borderColor="green";
  }
  else{
    document.getElementById("lastname").style.borderColor="red";
    errorCount++
  }


  //      phonenumber and email validation 
  
  if(phoneno.length==0){
    document.getElementById("phoneno").style.borderColor="red";
    errorCount++
  }
  else{
    document.getElementById("phoneno").style.borderColor="green";
  } 

  if((email.includes('@')&&email.includes('.'))&&(email.includes('com')||email.includes('in'))){
    document.getElementById("email").style.borderColor="green";
  }
  else{
    document.getElementById("email").style.borderColor="red";
    errorCount++
  }


  // DOB and DOG validation

    if(DOB.length==0){
        document.getElementById("DOB").style.borderColor="red";
        errorCount++
    }
    else{
       document.getElementById("DOB").style.borderColor="green";
    } 

    if(DOG.length==0){
        document.getElementById("DOG").style.borderColor="red";
        errorCount++
    }
    else{
       document.getElementById("DOG").style.borderColor="green";
    }
  
  //  experience or not validation  and  how many year experience


        if(document.getElementById('yes').checked==true){
          ExperHave = "YES";
        }
        else if(document.getElementById('no').checked==true){
          ExperHave = "NO"; 
        }
        else{
            errorCount++
            alert("please select the Experience")
        }
    

   if(Experience=="How much experience you have"){
    document.getElementById("experience").style.borderColor="red";
    errorCount++
   }
   else{
    document.getElementById("experience").style.borderColor="green";
   }


   //   degree and course validation

   if(degree=="Qualification"){
     document.getElementById('degree').style.borderColor="red";
     errorCount++
   }
   else{
     document.getElementById('degree').style.borderColor="green"; 
   }
   
   if(course=="Please select course.."){
    document.getElementById('course').style.borderColor="red";
    errorCount++
  }
  else{
    document.getElementById('course').style.borderColor="green"; 
  }

  //   gender validation

    if(gender=="Gender"){
    document.getElementById('gender').style.borderColor="red";
    errorCount++
    }
    else{
    document.getElementById("gender").style.borderColor="green";
    }

//   technologies validation
    
    var html = document.getElementById("html").checked;
    var css = document.getElementById("css").checked;
    var javascript = document.getElementById("javascript").checked;
    var reactjs = document.getElementById("reactjs").checked;
    var tech = "";

    if(html==true){
       tech += "Html";
    }
    if(css==true){
       tech += " "+ "Css";
    }
    if(javascript==true){
       tech += " "+ "Javascript";
    }
    if(reactjs==true){
       tech += " "+ "ReactJS";
    }
    

//   role  and salary validation

  if(role=="Role you Looking"){
    document.getElementById("role").style.borderColor="red";
    errorCount++
   }
   else{
    document.getElementById("role").style.borderColor="green";
   }


  if(salary=="Esitmated Salary"){
    document.getElementById('salary').style.borderColor="red";
    errorCount++
   }
   else{
    document.getElementById("salary").style.borderColor="green";
   }

if(errorCount==0){

    userDetail = { firstname, lastname, phoneno, email, DOB, Experience, ExperHave, degree, course, DOG, gender, tech, role, salary }
    console.log(userDetail); 
    localStorage.setItem("user_detail", JSON.stringify(userDetail)) 
    document.location.href = "finalOut.html";
    
}

}


function selectyes(){
    var selectyes = document.getElementById('yes').value;

    if(selectyes=="yes"){
        document.getElementById("experience").innerHTML =
        "<option>"+"0-1 years"+"</option>"+
        "<option>"+"2-3 years"+"</option>"+
        "<option>"+"4-6 years"+"</option>";
    }
}

function selectno(){
    var selectno = document.getElementById('no').value;
    if(selectno=="no"){
        document.getElementById("experience").innerHTML =
        "<option>"+"Fresher"+"</option>";
    }
}

function selectDegree(){

    var selectdegree = document.getElementById("degree").value;

    if(selectdegree == "B.E"){
        document.getElementById("course").innerHTML = 
        "<option>"+"Civil"+"</option>"+
        "<option>"+"EEE"+"</option>"+
        "<option>"+"Mechanical"+"</option>";
    }
    if(selectdegree == "BSc"){
        document.getElementById("course").innerHTML = 
        "<option>"+"Computer Sci"+"</option>"+
        "<option>"+"Chemistry"+"</option>"+
        "<option>"+"Physics"+"</option>";
    }
    if(selectdegree == "B.com"){
        document.getElementById("course").innerHTML = 
        "<option>"+"Gendral"+"</option>"+
        "<option>"+"Corporate secratryship"+"</option>"+
        "<option>"+"Accounting finance"+"</option>";
    }
}


function selectRole(){
var selectrole = document.getElementById("role").value;

if(selectrole == "Devops Engineer"){
    document.getElementById("salary").innerHTML =
       "<option>"+"60K to 70K"+"</option>";
}

if(selectrole == "Software Developer"){
    document.getElementById("salary").innerHTML =
       "<option>"+"30K to 50K"+"</option>";
}

if(selectrole == "Tester"){
    document.getElementById("salary").innerHTML =
       "<option>"+"25K to 45K"+"</option>";
}
}
