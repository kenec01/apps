"use strict";

/*global React io ReactBootstrap moment __ marked*/
/*global React ReactDOM __ Immutable __Element*/

(function () {
  "use strict";

  console.log("index.js running");
  var _ = require("immutable");
  var __ = require("timeengine");
  var __Element = require("timeengine-react");

  var React = require("react");
  var ReactDOM = require("react-dom");
  var ReactBootstrap = require("react-bootstrap");

  var Button = ReactBootstrap.Button;

  var Navbar = ReactBootstrap.Navbar;

  var Nav = ReactBootstrap.Nav;
  var NavItem = ReactBootstrap.NavItem;
  var MenuItem = ReactBootstrap.MenuItem;
  var NavDropdown = ReactBootstrap.NavDropdown;

  var Table = ReactBootstrap.Table;

  var Jumbotron = ReactBootstrap.Jumbotron;
  var Panel = ReactBootstrap.Panel;

  var Accordion = ReactBootstrap.Accordion;

  var __run = __.intervalSeq(_.Seq.of(true), 0).__(function () {
    var socket = require("socket.io-client")();
    var TopElement = React.createElement(
      "div",
      null,
      navbar0Instance,
      navbarInstance,
      NavTab0(),
      NavTab(),
      React.createElement(NavTab99, null),
      jumbotronInstance,
      tableInstance
    );
    var mount = ReactDOM.render(TopElement, document.getElementById("container"));
  });

  var TimerElement = function TimerElement() {
    return __Element(__.intervalSeq(_.Range(), 1000)
    //  .__((count) => (/*__.log.t = count*/)) //console.log
    .__(function (count) {
      return React.createElement(
        "div",
        null,
        "Timer : ",
        count
      );
    }));
  };

  var navbar0Instance = React.createElement(Navbar, null);

  var NavTab99 = React.createClass({
    displayName: "NavTab99",
    handleSelect: function handleSelect(selectedKey) {
      alert("selected " + selectedKey);
    },
    render: function render() {
      return React.createElement(
        Nav,
        { bsStyle: "pills", justified: true, activeKey: 3, onSelect: this.handleSelect },
        React.createElement(
          NavItem,
          { eventKey: 1, href: "/home" },
          "\u8CB7\u3044\u305F\u3044\u30EA\u30B9\u30C8"
        ),
        React.createElement(
          NavItem,
          { eventKey: 2, title: "Item" },
          "\u30A2\u30DE\u30C3\u30C1 \u30AA\u30F3\u30E9\u30A4\u30F3\u306B\u3064\u3044\u3066"
        ),
        React.createElement(
          NavItem,
          { eventKey: 2, title: "Item" },
          "\u53D6\u5F15\u30CA\u30D3"
        ),
        React.createElement(
          NavItem,
          { eventKey: 4, title: "Item" },
          "\u30A2\u30AB\u30A6\u30F3\u30C8"
        )
      );
    }
  });
  var navbarInstance = React.createElement(
    Navbar,
    { fixedTop: true },
    React.createElement(
      Navbar.Header,
      null,
      React.createElement(
        Navbar.Brand,
        null,
        React.createElement(
          "a",
          { href: "#" },
          "amatch.online"
        )
      )
    )
  );

  var NavTab0 = function NavTab0() {
    return React.createElement(Nav, { bsStyle: "pills" });
  };

  var NavTab = function NavTab() {
    return React.createElement(Nav, { bsStyle: "pills", fixedTop: true });
  };

  var jumbotronInstance = React.createElement(
    Jumbotron,
    null,
    React.createElement(
      "h2",
      null,
      "\u30A2\u30DE\u30C3\u30C1 \u30AA\u30F3\u30E9\u30A4\u30F3\u3078\u3088\u3046\u3053\u305D!"
    ),
    React.createElement(
      "h5",
      null,
      "\u30A2\u30DE\u30C3\u30C1 \u30AA\u30F3\u30E9\u30A4\u30F3\u306F\u3001",
      React.createElement("br", null),
      "\u624B\u6301\u3061\u306EAmazon\u30AE\u30D5\u30C8\u5238\u3092\u4F7F\u3063\u3066\u5831\u916C\u3092\u5F97\u305F\u3044\u4EBA",
      React.createElement("br", null),
      "\u3068",
      React.createElement("br", null),
      "Amazon\u3067\u58F2\u3089\u308C\u3066\u3044\u308B\u5546\u54C1\u3092\u73FE\u5728\u4FA1\u683C\u3088\u308A\u5B89\u304F\u8CFC\u5165\u3057\u305F\u3044\u4EBA",
      React.createElement("br", null),
      "\u3092\u3064\u306A\u3052\u308B\u65B0\u3057\u3044\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30A4\u30C8\u3067\u3059\u3002",
      React.createElement("br", null)
    ),
    React.createElement(
      "p",
      null,
      React.createElement(
        Button,
        { bsStyle: "primary" },
        "\u3053\u306E\u30D0\u30CA\u30FC\u3092\u9589\u3058\u308B"
      )
    )
  );

  var tableInstance = React.createElement(
    Table,
    { responsive: true },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "#"
        ),
        React.createElement(
          "th",
          null,
          "Table heading"
        ),
        React.createElement(
          "th",
          null,
          "Table heading"
        ),
        React.createElement(
          "th",
          null,
          "Table heading"
        ),
        React.createElement(
          "th",
          null,
          "Table heading"
        ),
        React.createElement(
          "th",
          null,
          "Table heading"
        ),
        React.createElement(
          "th",
          null,
          "Table heading"
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "1"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "2"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "3"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "1"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "2"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "3"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "1"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "2"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "3"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        ),
        React.createElement(
          "td",
          null,
          "Table cell"
        )
      )
    )
  );

  //alert
  //Closeable alerts


  // for FAQ
  //Accordions
  var accordionInstance = React.createElement(
    Accordion,
    null,
    React.createElement(
      Panel,
      { header: "Collapsible Group Item #1", eventKey: "1" },
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    ),
    React.createElement(
      Panel,
      { header: "Collapsible Group Item #2", eventKey: "2" },
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    ),
    React.createElement(
      Panel,
      { header: "Collapsible Group Item #3", eventKey: "3" },
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    )
  );

  //===========================================================================
})();
