function easyHTTP() {
  this.http = new XMLHttpRequest();
}

/* GET Request
   Some notes:
   
   We need to 'let self = this' because of function
   scope issues that were later mitigated using arrow
   functions. Using 'this' inside of a function would
   make 'this' actually refer to the function, not
   the 'this' in 'this.http'. Arrow functions fixed this
   issue.

   We need to send a callback function, otherwise the
   client will receive an 'undefined' response. This is
   because the response, which is 'undefined' when declared,
   will be returned to the client prior to the data 
   actually being retrieved from the server.
*/
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};

// // POST Request
// easyHTTP.prototype.get = function (url) {
//   this.http.open('POST', url, true);

//   this.http.send();
// };

// // PUT Request
// easyHTTP.prototype.get = function (url) {
//   this.http.open('PUT', url, true);

//   this.http.send();
// };

// // DELETE Request
// easyHTTP.prototype.get = function (url) {
//   this.http.open('DELETE', url, true);

//   this.http.send();
// };
