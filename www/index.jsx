/*global React io ReactBootstrap moment __ marked*/
/*global React ReactDOM __ Immutable __Element*/

(() => {
  "use strict";
  console.log("index.js running");
  const _ = require("immutable");
  const __ = require("timeengine");
  const __Element = require("timeengine-react");

  const React = require("react");
  const ReactDOM = require("react-dom");
  const ReactBootstrap = require("react-bootstrap");

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




  const __run = __
    .intervalSeq(_.Seq.of(true), 0)
    .__(() => {
      const socket = require("socket.io-client")();
      const TopElement = (
      <div>
          {navbar0Instance}
          {navbarInstance}
          {NavTab0()}
        {NavTab()}
    <NavTab99/>
          {jumbotronInstance}
          {tableInstance}
      </div>
      );
      const mount = ReactDOM
        .render(TopElement, document.getElementById("container"));
    });


  const TimerElement = () => __Element(__
    .intervalSeq(_.Range(), 1000)
    //  .__((count) => (/*__.log.t = count*/)) //console.log
    .__((count) => (<div>{"Timer : "}{count}</div>)));


  const navbar0Instance = (
  <Navbar></Navbar>
  );


  const NavTab99 = React.createClass({
    handleSelect(selectedKey) {
      alert("selected " + selectedKey);
    },

    render() {
      return (
        <Nav bsStyle="pills" justified activeKey={3} onSelect={this.handleSelect}>
              <NavItem eventKey={1} href="/home">買いたいリスト</NavItem>
              <NavItem eventKey={2} title="Item">アマッチ オンラインについて</NavItem>
              <NavItem eventKey={2} title="Item">取引ナビ</NavItem>
              <NavItem eventKey={4} title="Item">アカウント</NavItem>
            </Nav>);
    }
  });
  const navbarInstance = (
  <Navbar fixedTop={true}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">amatch.online</a>
              </Navbar.Brand>
            </Navbar.Header>

          </Navbar>
  );

  const NavTab0 = () => (
    <Nav bsStyle="pills"></Nav>
  );

  const NavTab = () => (
    <Nav bsStyle="pills" fixedTop={true}></Nav>
  );






  const jumbotronInstance = (
  <Jumbotron>
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




  const tableInstance = (
  <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>


        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
  );



  //alert
  //Closeable alerts


  // for FAQ
  //Accordions
  const accordionInstance = (
  <Accordion>
      <Panel header="Collapsible Group Item #1" eventKey="1">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </Panel>
      <Panel header="Collapsible Group Item #2" eventKey="2">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </Panel>
      <Panel header="Collapsible Group Item #3" eventKey="3">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </Panel>
    </Accordion>
  );


//===========================================================================
})();
