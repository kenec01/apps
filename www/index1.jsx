/*global React io ReactBootstrap moment $ Babel*/
/*global React ReactDOM __ Immutable __Element*/

(() => {
  "use strict";
  console.log("index.jsx running");

  const Grid = ReactBootstrap.Grid;
  const Row = ReactBootstrap.Row;
  const Col = ReactBootstrap.Col;

  const Button = ReactBootstrap.Button;
  const Navbar = ReactBootstrap.Navbar;
  const Nav = ReactBootstrap.Nav;
  const NavItem = ReactBootstrap.NavItem;
  const MenuItem = ReactBootstrap.MenuItem;
  const Table = ReactBootstrap.Table;

  const Jumbotron = ReactBootstrap.Jumbotron;
  const Panel = ReactBootstrap.Panel;

  const Accordion = ReactBootstrap.Accordion;

  const _ = Immutable;

  const myPath = "index";


  const _i = (info, val) => (console.info(info + ": ", val));
  const __tabSelected = __()
    .__((tab) => {
      _i("tab", tab);
    });

  const __run = __
    .intervalSeq(_.Seq.of(true), 0)
    .__(() => {
      //const socket = require("socket.io-client")();

      //  __tabSelected.t = "request";

    });
  //--------------------------------
  const tabs = [];
  const __tab = __();

  const __dummy = __([__tabSelected])
    .__(([tabSelected]) => {
      //---------------
      _i("tabSelected", tabSelected);

      const dummy2 = (typeof tabs[tabSelected] !== "undefined")
        ? __tab.t = tabSelected
        : (() => {
          _i("loadingJSX", tabSelected);
          $.get(myPath + "/" + tabSelected + ".jsx",
            (data) => {
              //------------------------
              eval(Babel.transform(data, {
                presets: ["latest", "react"]
              }).code);
              //------------------------
              __tab.t = tabs[tabSelected] = tabSelected;
            });
          return true;
        })();
        //----------------

      return tabSelected;
    });
    //================





  const TabElement = (<div>
      <Tabs selected={2}>
        <Pane label="アマッチについて">
          <div>アマッチについて</div>
        </Pane>
        <Pane label="リクエストリスト">
          <div>    <div>
              <p>site!!!!!!!</p>
                <p>site!!!!!!!</p>
                  <p>site!!!!!!!</p>
                    <p>site!!!!!!!</p>
                      <p>site!!!!!!!</p>
                        <p>site!!!!!!!</p>
                        <p>site!!!!!!!</p>
                          <p>site!!!!!!!</p>
                            <p>site!!!!!!!</p>
                              <p>site!!!!!!!</p>
                                <p>site!!!!!!!</p>
                                  <p>site!!!!!!!</p>
                                  <p>site!!!!!!!</p>
                                    <p>site!!!!!!!</p>
                                      <p>site!!!!!!!</p>
                                        <p>site!!!!!!!</p>
                                          <p>site!!!!!!!</p>
                                            <p>site!!!!!!!</p></div>
                                            <div>
                                            <p>site!!!!!!!</p>
                                              <p>site!!!!!!!</p>
                                                <p>site!!!!!!!</p>
                                                  <p>site!!!!!!!</p>
                                                    <p>site!!!!!!!</p>
                                                      <p>site!!!!!!!</p>
                                                      <p>site!!!!!!!</p>
                                                        <p>site!!!!!!!</p>
                                                          <p>site!!!!!!!</p>
                                                            <p>site!!!!!!!</p>
                                                              <p>site!!!!!!!</p>
                                                                <p>site!!!!!!!</p>
                                                                <p>site!!!!!!!</p>
                                                                  <p>site!!!!!!!</p>
                                                                    <p>site!!!!!!!</p>
                                                                      <p>site!!!!!!!</p>
                                                                        <p>site!!!!!!!</p>
                                                                          <p>site!!!!!!!</p></div>
                                                                        </div>
        </Pane>
        <Pane label="取引ナビ">
          <div>  ナビ</div>
        </Pane>
        <Pane label="アカウント">
          <div>アカウント情報!</div>
        </Pane>
      </Tabs>
        </div>);




  const TopElement = (<div>
      {navbar}
      {TabElement}
      </div>);

  const mount = ReactDOM
    .render(TabElement, document.getElementById("container"));

//===========================================================================
})();
