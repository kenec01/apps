(() => {
  "use strict";
  //============================
  const __ = require("timeengine");
  const _ = require("immutable");
  const util = require("util");

  const port = 2999;
  const port_mailer = 2995;
  const port_dbfiles = 2990;
  const __app_dbfiles_online = __();
  const __app_mailer_online = __();

  const db = {};

  db["users"] = [];




  const __runDB = __
    .intervalSeq(_.Seq.of(true), 0)
    .__(() => {
      //=========================================
      console.info("app-op.js started", port);

      // socket to db app-op/js
      __app_dbfiles_online.t = false;
      __app_mailer_online.t = false;
      const dbfiles = require('socket.io-client')('http://localhost:' + port_dbfiles);

      dbfiles
        .on('connect', () => {
          __.log.t = "#####################app-dbfiles connected";
          __app_dbfiles_online.t = true;


          const newemail = (id) => (__()
            .__((data) => {
              __.log.t = "email:" + id + " data changed : " + data;

              dbfiles.emit('write',
                ["users", id, {
                  email: data
                }],
                (data) => {
                  __.log.t = ('result: ' + data);
                });

            }));

          db.users[10000034] = {};


          db.users[10000034]["__email"] = newemail(10000034);

          db.users[10000034].__email.t = "tester@gmail.com";
          db.users[10000034].__email.t = "tester2@gmail.com";
          db.users[10000035] = {};


        })
        .on('event', (data) => {
          __.log.t = "some db event";
        })
        .on('disconnect', () => {
          __.log.t = "#####################app-dbfiles disconnected";
          __app_dbfiles_online.t = false;
        });

      const mailer = require('socket.io-client')('http://localhost:' + port_mailer);
      mailer
        .on('connect', () => {
          __.log.t = "#####################app-mailer connected";
          __app_mailer_online.t = true;
        })
        .on('event', (data) => {
          __.log.t = "some mailer event";
        })
        .on('disconnect', () => {
          __.log.t = "#####################app-mailer disconnected";
          __app_mailer_online.t = false;
        });


      const __runDB_Mailer_check = __
        .intervalSeq(_.Seq.of(true), 1000)
        .__(() => {
          __.log.t = "dbfile:" + __app_dbfiles_online.t;
          __.log.t = "mailer:" + __app_mailer_online.t;
          __.log.t = "AND:" + (__app_dbfiles_online.t && __app_mailer_online.t);
          //=========================================
          const check = (__app_dbfiles_online.t && __app_mailer_online.t)
            ? __opRun.t = true
            : () => {
              __.log.t = "!! app-dbfiles && appMailer FIRST !!";
              process.exit();
            }; //==========================================
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


                //>>>>>>>>>>>>>>>>>>>>>>>>>


                //>>>>>>>>>>>>>>>>>>>>>>>>>

            });








        //==========================================
        });

        //==============================================

    });




//============================
})();
