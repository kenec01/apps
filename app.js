(() => {
  "use strict";
  //============================
  const __ = require("timeengine");
  const _ = require("immutable");
  const port = 3000;
  const port_op = 2990;
  const wwwDir = "www/";
  const http = require("http");
  const url = require("url");
  const path = require("path");
  const fs = require("fs");
  const mimeTypes = {
    "html": "text/html",
    "js": "text/javascript",
    "css": "text/css",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "gif": "image/gif",
    "svg": "image/svg+xml",
    "ico": "image/vnd.microsoft.icon"
  // more
  };
  __.log.t = "app.js started!";

  const wwwObj = __();
  const wwwLoad = (wwwDir) => {
    __.log.t = "==== wwwLoad ===";
    const wwwObj = __();
    wwwObj.t = {};

    const __runSeek = __
      .intervalSeq(_.Seq.of(true), 0)
      .__(() => {
        seekDir(wwwDir);
      });
    const seekDir = (dir) => {
      __.log.t = "seekDir:" + dir;
      fs.readdir(dir, (err, dirA) => { //readdir error indicates a file
        if (err) {
          const uri = dir.split(wwwDir)[1];
          const key = path.join("/", uri);
          console.log("key:" + key); //under wwwDir
          const file = dir;
          fs.readFile(file, (err, data) => {
            if (err) {
              __.log.t = "fileLoadError!";
            } else {
              wwwObj.t = addObj(wwwObj.t, key, data);
            }
          });
        } else {
          const dummy = dirA.map((dirOrFile) => {
            seekDir(path.join(dir, dirOrFile));
          });
        }
      });
    };
    const addObj = (baseObj, newIdx, newEl) => {
      baseObj[newIdx] = newEl;
      return baseObj;
    };


    return wwwObj.t;
  };



  //======================================================


  const request = (req, res) => {



    const writeOut = (contentKey) => {
      res
        .writeHead(200, {
          "Content-Type": mimeTypes[path.extname(contentKey).split(".")[1]]
        });

      const content = wwwObj.t[contentKey];
      res.end(content);

      return;
    };

    const uri = url.parse(req.url).pathname;
    __.log.t = "uri:" + uri;

    if (uri.split("/")[1] === "i") {
      __.log.t = "item page requested!";
    } else if (!wwwObj.t[uri]) {
      __.log.t = "no-requestedfile -> index.html";
      writeOut("/index.html");
    } else {
      __.log.t = "file requested -> wrieteout";
      writeOut(uri);
    }

    return;
  };



  const serverUp = () => {
    console.info("HTTP server listening", port);

  };

  const __runNow = __
    .intervalSeq(_.Seq.of(true), 0)
    .__(() => {
      __.log.t = "wwwLoading";
      wwwObj.t = wwwLoad(__dirname + "/" + wwwDir);
    });


  const __delay = __
    .intervalSeq(_.Seq.of(true), 500)
    .__(() => {
      //=========================================
      __.log.t = "www server starting";

      // socket to db app-op/js
      const db = require("socket.io-client")("http://localhost:" + port_op);
      db
        .on("connect", () => {
          __.log.t = "#####################app-op connected";
        })
        .on("event", (data) => {
          __.log.t = "some db event";
        })
        .on("disconnect", () => {
          __.log.t = "#####################app-op disconnected";
        });

      //www server
      const wwwserver = http
        .createServer(request)
        .listen(port, serverUp);

      const io = require("socket.io")(wwwserver);
      io
        .on("connection", (socket) => {
          __.log.t = "a user connected";
          socket
            .on("disconnect", () => {
              __.log.t = "a user disconnected";
            });
        });
        //=========================================


    });


//============================
})();
