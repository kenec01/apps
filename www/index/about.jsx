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
            $.get(myPath + "/" + key + ".jsx",
              (data) => {
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
  const TopElement = (<div>{accordion}</div>);
  window[myPath] = TopElement ;
//==========================================
})();
