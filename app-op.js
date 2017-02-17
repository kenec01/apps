(() => {
  "use strict";
  //============================
  const __ = require("timeengine");
  const _ = require("immutable");
  const util = require("util");

  var google = require('googleapis');
  const google_key = require("/home/ken/kenec01/google-key-test.json");

  const port = 2999;
  const port_dbfiles = 2998;
  const __app_dbfiles_online = __();

  const db = {};

  db["users"] = [];


  const newemail = (id) => (__()
    .__((data) => {
      __.log.t = "email:" + id + " data changed : " + data;
    }));

  db.users[10000034] = {};


  db.users[10000034]["__email"] = newemail(10000034);

  db.users[10000034].__email.t = "tester@gmail.com";
  db.users[10000034].__email.t = "tester2@gmail.com";
  db.users[10000035] = {};




  const __runDB = __
    .intervalSeq(_.Seq.of(true), 0)
    .__(() => {
      //=========================================
      console.info("app-op.js started", port);

      // socket to db app-op/js
      __app_dbfiles_online.t = false;
      const dbfiles = require('socket.io-client')('http://localhost:' + port_dbfiles);
      dbfiles
        .on('connect', () => {
          __.log.t = "#####################app-op connected";
          __app_dbfiles_online.t = true;
        })
        .on('event', (data) => {
          __.log.t = "some db event";
        })
        .on('disconnect', () => {
          __.log.t = "#####################app-op disconnected";
          __app_dbfiles_online.t = false;
        });


      const __runDBcheck = __
        .intervalSeq(_.Seq.of(true), 1000)
        .__(() => {
          //=========================================
          const check = (__app_dbfiles_online.t)
            ? __opRun.t = true
            : __.log.t = "!! app-dbfiles FIRST !!";
        //==========================================
        });

      const __opRun = __()
        .__(() => {
          //==============================================
          __.log.t = "op Running";
          const io = require("socket.io")(port);
          io
            .on("connection", function(socket) {
              __.log.t = "###################app.js connected";
              socket
                .on("disconnect", function() {
                  __.log.t = "###################app.js disconnected";
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







        //==========================================
        });

        //==============================================

    });




//============================
})();
