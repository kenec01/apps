(() => {
  'use strict';
  //============================
  const __ = require("timeengine");
  const Immutable = require("immutable");
  const port = 3000;
  const directory = 'www';
  const http = require('http');
  const url = require('url');
  const path = require("path");
  const fs = require('fs');
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
  __.log.t = 'app.es started!';
  const addObj = (baseObj, newIdx, newEl) => {
    baseObj[newIdx] = newEl;
    return baseObj;
  };

  const wwwObj = __();
  const wwwLoad = (wwwDir) => {
    __.log.t = "==== wwwLoad ===";
    const wwwObj = __();
    wwwObj.t = {};
    const seekDir = (dir) => {
      __.log.t = dir;
      fs.readdir(dir, (err, dirA) => {
        if (err) {
          const path0 = err.path;
          const path1 = path0.split(wwwDir)[1];
          //  console.log(path1);

          fs.readFile(path0, (err, file) => {
            if (err) {
              __.log.t = 'fileLoadError!';
            } else {
              __.log.t = "key is " + path1;

              wwwObj.t = addObj(wwwObj.t, path1, file);
            }
          });
        } else {
          const dummy = dirA.map((file) => {
            seekDir(dir + "/" + file);
          });
        }
      });
    };
    seekDir(wwwDir);

    return wwwObj.t;
  };



  //======================================================


  const request = (req, res) => {



    const writeOut = (contentKey) => {
      res
        .writeHead(200, {
          'Content-Type': mimeTypes[path.extname(contentKey).split(".")[1]]
        });

      const content = wwwObj.t[contentKey];
      res.end(content);

      return;
    };

    const uri = url.parse(req.url).pathname;
    __.log.t = uri;

    if (uri.split("/")[1] === "i") {
      __.log.t = "item page requested!";
    } else if (!wwwObj.t[uri]) {
      __.log.t = 'no-requestedfile -> index.html';
      writeOut('/index.html');
    } else {
      __.log.t = 'file requested -> wrieteout';
      writeOut(uri);
    }

    return;
  };



  const serverUp = () => {
    console.info('HTTP server listening', port);

  };

  const __runNow = __
    .intervalSeq(Immutable.Seq.of(true), 0)
    .__(() => {
      __.log.t = 'wwwLoading';
      wwwObj.t = wwwLoad(__dirname + "/" + directory);
    });


  const __delay = __
    .intervalSeq(Immutable.Seq.of(true), 500)
    .__(() => {
      //=========================================
      __.log.t = 'server starting';

      // socket to db server
      const db = require('socket.io-client')('http://localhost:2999');
      db
        .on('connect', () => {
          __.log.t = "#####################db connected";
        })
        .on('event', (data) => {
          __.log.t = "some db event";
        })
        .on('disconnect', () => {
          __.log.t = "#####################db disconnected";
        });

      //www server
      const wwwserver = http
        .createServer(request)
        .listen(port, serverUp);

      const io = require('socket.io')(wwwserver);
      io
        .on('connection', (socket) => {
          __.log.t = 'a user connected';
          socket
            .on('disconnect', () => {
              __.log.t = 'a user disconnected';
            });
        });
        //=========================================


    });


//============================
})();
