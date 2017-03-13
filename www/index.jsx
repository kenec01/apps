/*global React io ReactBootstrap moment $ Babel*/
/*global React ReactDOM __ Immutable __Element*/

(() => {
  "use strict";
  __.log.t = "index.jsx running";
  const _i = (info, val) => (console.info(info + ": ", val));

  const myPath = "index";
  const _ = Immutable;
  const Navbar = ReactBootstrap.Navbar;
  const Nav = ReactBootstrap.Nav;
  const NavItem = ReactBootstrap.NavItem;
  const Accordion = ReactBootstrap.Accordion;

  const Table = ReactBootstrap.Table;

  const Button = ReactBootstrap.Button;
  const Jumbotron = ReactBootstrap.Jumbotron;
  const Panel = ReactBootstrap.Panel;

  const __run = __
    .intervalSeq(_.Seq.of(true), 0)
    .__(() => {
      //const socket = require("socket.io-client")();
      const TopElement = (<div>
          {navbar}
          {spacer}
          {TabElement}
          </div>);
      const mount = ReactDOM
        .render(TopElement, document.getElementById("container"));

    //  __tabSelected.t = "request";
    });

  const fixedStyle = {
    "background-color": "white"
  };
  const navbar = (
  <Navbar fixedTop={true} style ={fixedStyle}>
                    <Navbar.Brand>
                      <a href="#">amatch.online</a>
                    </Navbar.Brand>
        </Navbar>
  );
  const spacerStyle = {
    "height": "50px"
  };
  const spacer = (<div style ={spacerStyle}></div>);

  const getTabContent = (key) => {
    _i("new Accordion", key);
    const __seqEl = __()
      .log("__seqEl!!!");

    $.get(myPath + "/" + key + ".jsx",
      (data) => {
        _i("data", data);
        //------------------------
        eval(Babel
          .transform(data, {
            presets: ["latest", "react"]
          })
          .code);
        //------------------------
        _i("x", __seqEl.t = window[myPath + "/" + key]);
      });

    return __Element(__seqEl);
  };

  const TabElement = (<div>
    <Tabs selected={1}>
      <Pane label="アマッチについて">
          {getTabContent("about")}
      </Pane>
      <Pane label="リクエストリスト">
          {getTabContent("request")}
      </Pane>
      <Pane label="取引ナビ">
          {getTabContent("navi")}
      </Pane>
      <Pane label="アカウント">
          {getTabContent("account")}
      </Pane>
    </Tabs>
      </div>);
//===========================================================================
})();
