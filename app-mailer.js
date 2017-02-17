(() => {
  "use strict";
  //============================
  const __ = require("timeengine");
  const _ = require("immutable");
  const util = require("util");

  var google = require('googleapis');
  const google_key = require("/home/ken/kenec01/google-key-test.json");

  const port = 2995;


  const __runMailer = __
    .intervalSeq(_.Seq.of(true), 0)
    .__(() => {
      //=========================================
      console.info("app-mailer.js started", port);


      const io = require("socket.io")(port);
      io
        .on("connection", function(socket) {
          __.log.t = "###################app-op.js connected";
          socket
            .on("disconnect", function() {
              __.log.t = "###################app-op.js disconnected";
            });

        });


      const __google = __
        .intervalSeq(_.Seq.of(true), 0)
        .__(() => {
          //----------------------------------------
          const jwtClient = new google.auth.JWT(
            google_key.client_email,
            null,
            google_key.private_key,
            ["https://www.googleapis.com/auth/gmail.compose",
              "https://www.googleapis.com/auth/gmail.labels"],
            null
          );

          jwtClient.authorize((err, tokens) => {
            if (err) {
              console.log(err);
            } else {
              __.log.t = "Google-API Authed!";

              listLabels(jwtClient);
            }
          });

          function listLabels(auth) {
            __.log.t = "list api";
            var gmail = google.gmail('v1');
            gmail.users.labels.list({
              auth: auth,
              userId: 'adm@bizencoating.com',
            }, function(err, response) {
              if (err) {
                console.log('The API returned an error: ' + err);
                console.log(response);
                return;
              }
              var labels = response.labels;
              if (labels.length == 0) {
                console.log('No labels found.');
              } else {
                console.log('Labels:');
                for (var i = 0; i < labels.length; i++) {
                  var label = labels[i];
                  console.log('- %s', label.name);
                }
              }
            });
          }
        //-------------------------------------------
        }); //--------------------


    });




//============================
})();
