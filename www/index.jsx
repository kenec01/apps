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
  const NavDropdown = ReactBootstrap.NavDropdown;

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
      const TopElement = (<div>
        {navbar0}
        {navbar}

        {mainPanel()}
          </div>);

      const mount = ReactDOM
        .render(TopElement, document.getElementById("container"));
      __tabSelected.t = "request";

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


  const mainPanel = () => {
    const __seqEl = __([__tab])
      .__(([tab]) => (

        <Grid>
          {window[myPath + "/" + tab]}
        </Grid>

      ));

    return __Element(__seqEl);
  };

  const tabMenu0 = (
  <Nav bsStyle="tabs">
            <NavItem >About</NavItem>
            <NavItem >リクエストテーブル</NavItem>
            <NavItem >取引ナビ</NavItem>
            <NavItem >アカウント</NavItem>
  </Nav>
  );

  const tabMenu = () => {

    const __seqEl = __([__tabSelected])
      .__(([tabSelected]) => (
        <Nav bsStyle="tabs"
        activeKey={tabSelected}
        onSelect={(eventKey) => {
          event.preventDefault();
          __tabSelected.t = eventKey;
        }}>
                <NavItem eventKey={"about"} >About</NavItem>
                <NavItem eventKey={"request"} >リクエストテーブル</NavItem>
                <NavItem eventKey={"navi"} >取引ナビ</NavItem>
                <NavItem eventKey={"account"} >アカウント</NavItem>
      </Nav>
      ));

    return __Element(__seqEl);

  };


  const navbar0 = (
  <Navbar><Navbar.Header>
      <Navbar.Brand>
        <a href="#">amatch.online</a>
      </Navbar.Brand>
  </Navbar.Header>
  {tabMenu0}</Navbar>
  );

  const fixedStyle = {

    "background-color": "white"
  };

  const navbar = (
  <Navbar fixedTop={true}
  style ={fixedStyle}>
          <Navbar.Header>
              <Navbar.Brand>
                <a href="#">amatch.online</a>
              </Navbar.Brand>
          </Navbar.Header>
          {tabMenu()}
  </Navbar>
  );







//===========================================================================
})();
