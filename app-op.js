(() => {
  "use strict";
  //============================
  const __ = require("timeengine");
  const _ = require("immutable");

  const util = require("util");
  const url = require("url");
  const path = require("path");
  const fs = require("fs");
  const rimraf = require("rimraf");

  const _info = (info, val) => (console.info(info + ": ",
    util.inspect(val, false, null)));

  const port = 2950;
  const port_mailer = 2900;
  const __app_mailer_online = __();

  const dbDir = "/hdd1000/db/";

  const isArray = (item) => (Object.prototype.toString.call(item) === "[object Array]");

  const isObject = (item) => (typeof item === "object" && item !== null && !isArray(item));


  const __runOP = __
    .intervalSeq(_.Seq.of(true), 0)
    .__(() => {
      //=========================================
      _info("app-op started", port);

      // socket to db app-op/js
      __app_mailer_online.t = false;

      const mailer = require("socket.io-client")("http://localhost:" + port_mailer);
      mailer
        .on("connect", () => {
          __.log.t = "#####################app-mailer connected";
          __app_mailer_online.t = true;
        })
        .on("event", (data) => {
          __.log.t = "some mailer event";
        })
        .on("disconnect", () => {
          __.log.t = "#####################app-mailer disconnected";
          __app_mailer_online.t = false;
        });


      const __runDB_Mailer_check = __
        .intervalSeq(_.Seq.of(true), 1000)
        .__(() => {
          __.log.t = "mailer:" + __app_mailer_online.t;
          //=========================================
          const check = (__app_mailer_online.t)
            ? __opRun.t = true
            : () => {
              __.log.t = "!! appMailer FIRST !!";
              process.exit();
            }; //==========================================
        });

      const __opRun = __()
        .__(() => {
          //==============================================
          __.log.t = "op Running";

          const db = {};

          //OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

          const __runDB = __
            .intervalSeq(_.Seq.of(true), 0)
            .__(() => {
              //=========================================
              _info("app-dbfiles.js started", port);
              //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
              __.log.t = "==== populate from DB files ===";

              const __runSeek = __
                .intervalSeq(_.Seq.of(true), 0)
                .__(() => {
                  seekDir(dbDir);
                });
              const seekDir = (dir) => {
                __.log.t = "seekDir:" + dir;
                const key = dir.split(dbDir)[1];
                __.log.t = "key:" + key;

                fs.readdir(dir, "utf8", (err, dirA) => {
                  if (err) {
                    __.log.t = "readdir error indicates a file:" + dir;

                    fs.readFile(dir, "utf8", (err, data) => {
                      if (err) {
                        __.log.t = "fileLoadError!";
                      } else {
                        __.log.t = "key:" + key;
                        const val = pointObjFromKey(key);
                        val.obj[val.key1] = data;
                        __.log.t = db;
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
                        __.log.t = "key:" + key;

                        const val = pointObjFromKey(key);
                        val.obj[val.key1] = {};

                        __.log.t = db;

                      };


                  }
                });
              };

              const pointObjFromKey = (key) => {
                __.log.t = "----pointObjFromKey";
                const keyA0 = key.split("/");
                __.log.t = "===keyA0====";
                console.log(util.inspect(keyA0, false, null));
                const key1 = keyA0[keyA0.length - 1];
                __.log.t = "key1:" + key1;
                const keyA1 = _.List(keyA0).pop().toArray();
                __.log.t = keyA1;
                const obj = keyA1
                  .reduce((previousValue, currentValue, index, array) => {
                    return previousValue[currentValue];
                  }, db);

                return {
                  obj: obj,
                  key1: key1
                };
              };
              //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

            //==========================================
            });

          //+++++++++++++++++++++++++++++++++++++++++++++++++++++
          const __runMain = __
            .intervalSeq(_.Seq.of(true), 2000)
            .__(() => {
              //=========================================
              __.log.t = "@@@@@ runMain@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@";

              const __dbW = __();

              __dbW.__((data) => {
                __.log.t = "dbW ________________";
                __.log.t = data;

                //===============================

                const f = (obj) => { //for quick object on mem
                  _info("obj", obj);
                  Object.keys(obj.data)
                    .map((key) => {
                      _info("key", key);

                      const f1 = () => {
                        //------------------------
                        if (isObject(obj.data[key])) {
                          const obj1 = {
                            data: obj.data[key],
                            point: obj.point[key]
                          };
                          f(obj1);
                        } else {
                          obj.point[key] = obj.data[key];
                        }
                      //------------------------
                      };


                      if (obj.point[key]) {
                        if (isObject(obj.point[key])) {

                          f1();
                        } else {

                          obj.point[key] = {}; //???
                          f1();
                        }

                      } else {
                        obj.point[key] = {};
                        _info("!!!!!!!!!new key obj", key);
                        _info("new db", db);
                        f1();
                      }


                    });


                };

                const ff = (obj) => { //for file system

                  _info("PATH++++++++++++++++", obj.path);
                  fs.mkdir(obj.path, (err) => {
                    if (err) {

                      fs.stat(obj.path, (err, stats) => {
                        if (err)
                          throw err;
                        if (stats.isFile()) { // file
                          __.log.t = "was file";
                          _info("path", obj.path);

                          fs.unlink(obj.path, (err) => {
                            if (err)
                              throw err;

                            fs.mkdir(obj.path, (err) => {
                              if (err)
                                throw err;

                              ff1(obj);
                            });


                          });

                        } else { //dir exist

                          __.log.t = "dir exists";
                          ff1(obj);
                        }
                      });

                    } else {
                      __.log.t = "dir created";
                      ff1(obj);
                    }
                  });

                };





                //====================

                const ff1 = (obj) => {
                  Object.keys(obj.data)
                    .map((key) => {
                      const data1 = obj.data[key];
                      const path1 = path.join(obj.path, key);
                      if (isObject(data1)) {
                        _info("isObject", data1);
                        const objF1 = {
                          data: data1,
                          path: path1
                        };
                        ff(objF1);
                      } else {
                        _info("isVal>file", path1);
                        //----------------
                        const write = () => {
                          fs.writeFile(path1,
                            obj.data[key], "utf8", (err) => {
                              if (err)
                                throw err;
                              else {
                                __.log.t = "file saved";
                              }

                            });
                        };

                        // clean up FIRST
                        fs.stat(path1, (err, stats) => {
                          if (err)
                            throw err;
                          if (stats.isDirectory()) { // file
                            __.log.t = "was directory";
                            _info("path", path1);
                            rimraf(path1, (err) => {
                              if (err)
                                throw err;

                              write();
                            });
                          } else {
                            __.log.t = "was directory";
                            _info("path", obj.path);
                            write();
                          }

                        });
                        //---------------


                      //----------------
                      }
                    });
                };

                const obj = {
                  data: data,
                  point: db
                };

                f(obj);
                //---------------------


                const __run = __
                  .intervalSeq(_.Seq.of(true), 2000)
                  .__(() => {
                    const objF = {
                      data: data,
                      path: dbDir
                    };
                    __.log.t = "//////////////////////////////////////////";
                    _info("db", db);
                    ff(objF);
                  });

                  //==============================

              });

              //  _info("isobject", isObject("jhjjhj"));
              /*

                            _info("db", db);
                            __.log.t = "dbWriting!!!!!!!!!!!!!!!!!";
                            __dbW.t = {
                              "users": {
                                "10000999": {
                                  "email": "user999@amtch.online"
                                }
                              },
                              "log": "test1"
                            };
                            _info("db", db);


              */


              __.log.t = "dbWriting!!!!!!!!!!!!!!!!!";
              __dbW.t = {
                "log": "test2"
              };
              _info("db", db);

              /*
                            _info("db", db);
                            __.log.t = "dbWriting!!!!!!!!!!!!!!!!!";
                            __dbW.t = {

                              "log": {
                                test: ""
                              }
                            };
                            _info("db", db);


              */




            });
            //+++++++++++++++++++++++++++++++++++++++++++++++++++++

          const io = require("socket.io")(port);
          io
            .on("connection", function(socket) {
              __.log.t = "###################app-www connected";
              socket
                .on("disconnect", function() {
                  __.log.t = "###################app-www disconnected";
                });


                //www specific >>>>>>>>>>>>>>>>>>>>>>>>>


                //www specific >>>>>>>>>>>>>>>>>>>>>>>>>

            });



        //==========================================
        });

        //==============================================

    });




//============================
})();
