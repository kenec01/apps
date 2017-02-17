(() => {
  "use strict";
  //============================
  const __ = require("timeengine");
  const _ = require("immutable");
  const util = require("util");
  const url = require('url');
  const path = require("path");
  const fs = require('fs');

  const port = 2990;
  const dbDir = "/home/ken/kenec01/__DB_dir/";

  const __runDB = __
    .intervalSeq(_.Seq.of(true), 0)
    .__(() => {
      //=========================================
      console.info("app-dbfiles.js started", port);

      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
      __.log.t = "==== populate from DB files ===";

      const db = {};
      const __runSeek = __
        .intervalSeq(_.Seq.of(true), 0)
        .__(() => {
          seekDir(dbDir);
        });
      const seekDir = (dir) => {
        __.log.t = "seekDir:" + dir;

        const key = dir.split(dbDir)[1];
        __.log.t = "key:" + key;

        fs.readdir(dir, (err, dirA) => {
          if (err) {
            __.log.t = "readdir error indicates a file:" + dir;

            fs.readFile(dir, (err, data) => {
              if (err) {
                __.log.t = 'fileLoadError!';
              } else {


              }
            });
          } else { // dir is cpnfirmed as a directory
            __.log.t = "dir confirmed------------";
            __.log.t = dir;
            __.log.t = dirA;
            const __run = __
              .intervalSeq(_.Seq.of(true), 0)
              .__(() => {
                check();
                const dummy = dirA.map((dirOrFile) => {
                  seekDir(path.join(dir, dirOrFile));
                });
              });
            const check = (key === "") //root DB / root Obj
              ? () => {
                __.log.t = "-------root DB / root Obj";

                __.log.t = db;
              }
              : () => {
                __.log.t = "new DB directory / Obj{}";
                __.log.t = key;
                //    __obj.t = {};

                __.log.t = db;
              };


          }
        });
      };

      const pointObjFromKey = (key) => {
        //    cons
      };
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      const io = require("socket.io")(port);
      io
        .on("connection", function(socket) {
          __.log.t = "###################app-op connected";
          socket
            .on("disconnect", function() {
              __.log.t = "###################app-op disconnected";
            });

        });




    //==========================================
    });



//============================
})();
