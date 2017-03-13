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
                                                                        <p>site!!!!!!!</p></div>  <div>
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
                                                                                                        <p>site!!!!!!!</p></div>  <div>
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
                                                                                                                                        <p>site!!!!!!!</p></div></div>
      </Pane>
      <Pane label="取引ナビ">
        <div>  ナビ</div>
      </Pane>
      <Pane label="アカウント">
        <div>アカウント情報!</div>
      </Pane>
    </Tabs>
      </div>);


//===========================================================================
})();
