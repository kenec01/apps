(() => {
  "use strict";
  //============================
  const __ = require("timeengine");
  const Immutable = require("immutable");
  const util = require("util");

  const amazon_key = require("/home/ken/p/aws-rootkey.json");

  const scheme = require("/home/ken/p/site-test.json").url;
  const google_id = require("/home/ken/p/google-id-test.json");
  const google_key = require("/home/ken/p/google-key-test.json");

  const port = 2999;

  const __runDB = __
    .intervalSeq(Immutable.Seq.of(true), 0)
    .__(() => {
      //=========================================
      console.info("app-db started", port);

      const io = require("socket.io")(port);
      io
        .on("connection", function(socket) {
          __.log.t = "###################db-client connected";
          socket
            .on("disconnect", function() {
              __.log.t = "db-client disconnected";
            });

        });
      //---------------------------------------
      //amazon
      const __amazon = __
        .intervalSeq(Immutable.Seq.of(true), 0)
        .__(() => {
          const {OperationHelper} = require("apac");
          const opHelper = new OperationHelper({
            awsId: amazon_key.awsId,
            awsSecret: amazon_key.awsSecret,
            assocId: amazon_key.assocId,
            locale: amazon_key.locale
          });

          opHelper.execute("ItemSearch", {
            "SearchIndex": "Electronics",
            //    "SearchIndex.2": "Hobbies",
            //  "SearchIndex.3": "Toys",
            "Keywords": "ドローン drone",
            //  "ResponseGroup": "Images,ItemAttributes,Offers"
            "sort": "reviewrank",
            "ItemPage": "1"
          }).then((response) => {
            console.log(response);
            const items = response.result.ItemSearchResponse.Items.Item;
            //  __.log.t = items;
            const a = items.map((x) => ([x.ASIN, x.ItemAttributes]));
            __.log.t = a;

          }).catch((err) => {
            console.error("Something went wrong! ", err);
          });

        }); //--------------------


      const __google = __
        .intervalSeq(Immutable.Seq.of(true), 0)
        .__(() => {
          //---------------------

          const google = require("googleapis");
          const authClient = new google.auth.JWT(
            google_key.client_email,
            null,
            google_key.private_key,
            ["https://www.googleapis.com/auth/content"],
            null);

          authClient.authorize((err, tokens) => {
            if (err) {
              console.log(err);
              return;
            } else {
              __.log.t = "Google-API Authed!";
              const content = google.content({
                version: "v2",
                auth: authClient
              });


              const product = {
                "offerId": "book001", //sku=amazonID
                "gtin": "123456789098", //upc
                "contentLanguage": "ja",
                "targetCountry": "JP",
                "channel": "online",

                "title": "Abc Tale of Two Cities",
                "description": "A classic novel about the French Revolution",
                "link": scheme + "tale-of-two-cities.html",
                "imageLink": "https://images-fe.ssl-images-amazon.com/images/I/41O-P%2B1PX%2BL._SL160_.jpg",
                "availability": "in stock",
                "condition": "new",
                "googleProductCategory": "Media > Books",

                "mpn": "9780007350896",
                "price": {
                  "value": "250",
                  "currency": "JPY"
                },
                "shipping": [{
                  "country": "JP",
                  "service": "Standard shipping",
                  "price": {
                    "value": "0.99",
                    "currency": "JPY"
                  }
                }],
                "shippingWeight": {
                  "value": "200",
                  "unit": "grams"
                }
              };

              /*
                            content.products.insert({
                              merchantId: google_id.merchantId,
                              resource: product
                            },
                              (err, resp) => {
                                // handle err and response
                                console.log(err);
                                console.log(resp);

                                //---------------
                                content.products.list({
                                  merchantId: google_id.merchantId
                                },
                                  (err, resp) => {
                                    // handle err and response
                                    console.log(err);
                                    console.log(resp);
                                  });

                              //---------------
                              });


              */

            }

          });

        }); //--------------------



    //==========================================
    });



//============================
})();
