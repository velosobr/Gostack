//ES6: Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
   // responseFromServer represents a response from a server
   let responseFromServer;
     
   if(responseFromServer) {
     resolve("We got the data");
   } else {  
     reject("Data not received");
   }
 });
 
//ES6: Handle a Fulfilled Promise with then
 const makeServerRequest = new Promise((resolve, reject) => {
   // responseFromServer is set to true to represent a successful response from a server
   let responseFromServer = true;
     
   if(responseFromServer) {
     resolve("We got the data");
   } else {  
     reject("Data not received");
   }
 });

 makeServerRequest.then(result => {
   console.log(result);
 });
 //ES6: Handle a Rejected Promise with catch

 makeServerRequest.catch(error =>{
   console.log(error);
 });