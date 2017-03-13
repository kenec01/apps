/*global React io ReactBootstrap moment $ Babel*/
/*global React ReactDOM __ _  _i Immutable __Element*/


(() => {
  "use strict";
  //==============================
  const myPath = "index/navi/navi1";
  //--------------------------------
  const __tabSelected = [];
  const genAccordionChild = (key) => {
    const __seqEl = __();
    const __dummy = __([__tabSelected[key]])
      .__(() => {
        const dummy2 = (typeof __seqEl.t !== "undefined")
          ? true
          : (() => {
            _i("loading", myPath + "/" + key);
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


  __tabSelected["navi1"] = __();
  __tabSelected["navi2"] = __();
  __tabSelected["navi3"] = __();

  const accordion = (
  <Accordion
  onSelect={(eventKey) => {
    __tabSelected[eventKey].t = true;
  }}>
              <Panel eventKey={"navi1"} header="ナビ１" >
                {genAccordionChild("navi1") }
              </Panel>
              <Panel eventKey={"navi2"} header="ナビ２" >
                {genAccordionChild("navi2") }
              </Panel>
              <Panel eventKey={"navi3"} header="ナビ３" >
                {genAccordionChild("navi3") }
              </Panel>
            </Accordion>
  );

  //================


  const TopElement = (<div>
    {accordion}</div>);
  window[myPath] = TopElement ;
//==========================================
})();
