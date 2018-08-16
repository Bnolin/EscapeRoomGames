function updateDatabase() {
 
    /* -------------------------------------------*/
    /* PSEUDO CODE */
    /* -------------------------------------------*/
    /*
        1) Create and send request to get all emails from database
        3) Compare emails with input
        4) If unique:
            - Create and send request to add email to database
            - Alert with success!
           If already there:
            - Alert with try again!
    */
    /* -------------------------------------------*/
    
    // Create XMLHttpRequest
    // var getRequest = new XMLHttpRequest();
    // getRequest.open("GET", "database.xml", true);
    // getRequest.send();
    // var xml = getRequest.responseXML;

    // var emails = xml.getElementsByTagName("email"); 
    // var input = document.getElementById("inputEmail").value;
    // var unique = true;
    
    // Determine if email submitted is unique
    // for (var i in emails) {
        // if (i == input) {
            // unique = false;
        // }
    // }
    
    // if (unique){
        // Create email string
        // var data = '<email>' + input + '</email>';
        // var postRequest = new XMLHttpRequest();
        // postRequest.post("POST", "database.xml", true);
        // postRequest.send(data);
        // alert("Thank you for subscribing to the newsletter!");
    // }
    // else {
        // alert("Email address already in use, please use another email!");
    // }
}
  
