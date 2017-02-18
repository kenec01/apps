(() => {
  "use strict";
  //============================
  const google = require("googleapis");
  const google_key = require("/home/ken/kenec01/google-key-test.json");

  const jwtClient = new google.auth.JWT(
    google_key.client_email,
    null,
    google_key.private_key,
    ["https://mail.google.com/"],
    "adm@bizencoating.com" // subject (or sub)
  );

  jwtClient.authorize((err, tokens) => (err
    ? console.log(err)
    : (() => { //--------------------------------
      console.log("Google-API Authed!");
      const gmail = google.gmail({
        version: "v1",
        auth: jwtClient
      });
      gmail.users.messages.list({
        userId: "adm@bizencoating.com"
      }, (err, messages) => {
        //will print out an array of messages plus the next page token
        console.log(err);
        console.dir(messages);
      });
    })() //--------------------------------
  //======================
  ));



  /*      const listLabels = (auth) => {
          __.log.t = "list api";
          var gmail = google.gmail("v1");
          gmail.users.labels.list({
            auth: auth,
            userId: "adm@bizencoating.com",
          }, function(err, response) {
            if (err) {
              console.log("The API returned an error: " + err);
              console.log(response);
              return;
            }
            var labels = response.labels;
            if (labels.length == 0) {
              console.log("No labels found.");
            } else {
              console.log("Labels:");
              for (var i = 0; i < labels.length; i++) {
                var label = labels[i];
                console.log("- %s", label.name);
              }
            }
          });
        };*/
  //-------------------------------------------




//============================
})();
