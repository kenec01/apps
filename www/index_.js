"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*global React io ReactBootstrap moment __ marked*/
/*global React ReactDOM __ Immutable __Element*/

(function () {
  "use strict";

  console.log("index.js running");
  alert("running");
  var _ = require("immutable");
  var __ = require("timeengine");
  var __Element = require("timeengine-react");

  var ReactDOM = require("react-dom");
  var ReactBootstrap = require("react-bootstrap");

  var socket = io();

  var __run = __.intervalSeq(_.Seq.of(true), 0).__(function () {
    var TopElement = React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "HelloElement!!"
      ),
      TextElement(),
      "=====================",
      TimerElement(),
      "=====================",
      React.createElement(
        "div",
        null,
        CounterElementStateHistory()
      ),
      "=====================",
      CounterReloadElement(),
      "=====================",
      CounterElement(),
      "=====================",
      ButtonElement(),
      "====================="
    );
    var mount = ReactDOM.render(TopElement, document.getElementById("container"));
  });

  var TextElement = function TextElement() {
    var __value = __();
    var onChange = function onChange(e) {
      __value.t = e.target.value;
      __value.log("__value");
    };

    var __seqEl = __([__value]).__(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          value = _ref2[0];

      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", value: value, onChange: onChange })
      );
    });

    __value.t = "default text";
    return __Element(__seqEl);
  };

  // `.intervalSeq` is to map Immutable-js infinite Sequence
  //                       on TimeEngine infinite Sequence
  // map natural numbers sequence on intervalSeq(1000)
  var TimerElement = function TimerElement() {
    return __Element(__.intervalSeq(Immutable.Range(), 1000).__(function (count) {
      return __.log.t = count;
    }) //console.log
    .__(function (count) {
      return React.createElement(
        "div",
        null,
        "Timer : ",
        count
      );
    }));
  };

  // memory leak, performance issue
  //how about games? memoized_reduce is needed
  // to calculate many elemnents of the long array
  var CounterElementStateHistory = function CounterElementStateHistory() {
    var __updn = __(true); //1 or -1 or initially 0
    var __seqEl = __([__updn]).__(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
          updn = _ref4[0];

      return __updn.reduce(function (a, b) {
        return a + b;
      });
    }) //js Array.reduce
    .__(function (count) {
      return React.createElement(
        "span",
        null,
        count
      );
    });
    var init = function init() {
      return __updn.t = 0;
    }; //just trigger to view the init
    var __runNow = __.intervalSeq(Immutable.Seq.of(true), 0).__(init);
    return React.createElement(
      "span",
      null,
      React.createElement(
        "button",
        {
          onClick: function onClick() {
            return __updn.t = 1;
          } },
        "Up"
      ),
      React.createElement(
        "button",
        {
          onClick: function onClick() {
            return __updn.t = -1;
          } },
        "Down"
      ),
      __Element(__seqEl)
    );
  };

  // no seq object destroy
  var CounterReloadElement = function CounterReloadElement() {
    var __clicked = __();
    var onClick = function onClick() {
      __clicked.t = true;
    };
    var __runNow = __.intervalSeq(Immutable.Seq.of(true), 0).__(onClick);
    var __seqEl = __([__clicked]).__(function () {
      return React.createElement(
        "span",
        null,
        CounterElementStateHistory()
      );
    });
    return React.createElement(
      "div",
      null,
      __Element(__seqEl),
      React.createElement(
        "button",
        { onClick: onClick },
        "Reload"
      )
    );
  };

  var CounterElement = function CounterElement() {
    var __updn = __();
    var __count = __([__updn]).__(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
          updn = _ref6[0];

      return updn === 0 ? 0 : __count.t + updn;
    });
    var init = function init() {
      return __updn.t = 0;
    }; //initial value of count
    var __runNow = __.intervalSeq(Immutable.Seq.of(true), 0).__(init);
    var __seqEl = __([__count]).__(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 1),
          count = _ref8[0];

      return React.createElement(
        "span",
        null,
        count
      );
    });
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        {
          onClick: function onClick() {
            return __updn.t = 1;
          } },
        "Up"
      ),
      React.createElement(
        "button",
        {
          onClick: function onClick() {
            return __updn.t = -1;
          } },
        "Down"
      ),
      __Element(__seqEl),
      React.createElement(
        "button",
        {
          onClick: init },
        "Reset"
      )
    );
  };

  var PhysicsElement = function PhysicsElement() {
    //MKS system of units
    var V0 = 85.0; // m/s
    var DEG = 40; //degree
    var THETA = DEG / 180 * Math.PI; //radian
    var G = 9.8; //gravity const
    //t seconds elapsed 0msec time resolution
    var t = __([__.intervalSeq(Immutable.Range(), 10)]).__(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 1),
          count = _ref10[0];

      return count * 10 / 1000;
    });
    var x = __([t]).__(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 1),
          t = _ref12[0];

      return V0 * Math.cos(THETA) * t;
    });
    var y = __([t]).__(function (_ref13) {
      var _ref14 = _slicedToArray(_ref13, 1),
          t = _ref14[0];

      return V0 * Math.sin(THETA) * t - 1 / 2 * G * Math.pow(t, 2);
    }).log();
    //==================================
    var Drawscale = 1; //1 dot = 1 meter
    var __seqEl = __([x, y]) //atomic update
    .__(function (_ref15) {
      var _ref16 = _slicedToArray(_ref15, 2),
          x = _ref16[0],
          y = _ref16[1];

      return React.createElement(
        "div",
        null,
        React.createElement(
          "svg",
          { height: "250", width: "100%" },
          React.createElement("circle", { r: "2", fill: "red",
            cx: 50 + x * Drawscale, cy: 250 - y * Drawscale })
        )
      );
    });
    return __Element(__seqEl);
  };

  var ButtonElement = function ButtonElement() {
    var __clicked = __();
    var onClick = function onClick() {
      __clicked.t = true;
    };
    var __seqEl = __([__clicked]).__(function () {
      return React.createElement(
        "div",
        null,
        PhysicsElement()
      );
    });

    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: onClick },
          "Physics Start"
        )
      ),
      __Element(__seqEl)
    );
  };
})();
