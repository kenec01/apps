/*global React io ReactBootstrap moment $ Babel*/
/*global React ReactDOM __ _  _i Immutable __Element*/

(() => {
  "use strict";
  //==============================
  const myPath = "index/about";
  //--------------------------------
  const __tabSelected = [];
  const genAccordionChild = (key) => {
    const __seqEl = __();
    const __dummy = __([__tabSelected[key]])
      .__(() => {
        const dummy2 = (typeof __seqEl.t !== "undefined")
          ? true
          : (() => {
            _i("loading",myPath + "/" + key);
            $.get(myPath + "/" + key + ".jsx",
              (data) => {
                //  _i("data",data);
                //------------------------
                eval(Babel.transform(data, {
                  presets: ["latest", "react"]
                }).code);
                //------------------------
                __seqEl.t = window[myPath + "/" + key];
              });
          })();
      });
    return __Element(__seqEl);
  };

  __tabSelected["site"] = __();
  __tabSelected["hyoki"] = __();
  __tabSelected["company"] = __();

  const accordion = (
  <Accordion
  onSelect={(eventKey) => {
    __tabSelected[eventKey].t = true;
  }}>
              <Panel eventKey={"site"} header="サイト情報" >
                {genAccordionChild("site") }
              </Panel>
              <Panel eventKey={"hyoki"} header="特定商取引法の表記" >
                {genAccordionChild("hyoki") }
              </Panel>
              <Panel eventKey={"company"} header="会社情報" >
                {genAccordionChild("company") }
              </Panel>
            </Accordion>
  );

  //================
  const jumbotronInstance = (
  <Jumbotron center-block>
        <h2>アマッチ オンラインへようこそ!</h2>
        <h5>
          アマッチ オンラインは、<br/>
        手持ちのAmazonギフト券を使って報酬を得たい人<br/>
        と<br/>
        Amazonで売られている商品を現在価格より安く購入したい人<br/>
        をつなげる新しいマッチングサイトです。<br/>
      </h5>

        <p><Button bsStyle="primary">このバナーを閉じる</Button></p>
      </Jumbotron>
  );

  const TopElement = (<div>
    {jumbotronInstance}
    {accordion}</div>);
  window[myPath] = TopElement ;
//==========================================
})();
