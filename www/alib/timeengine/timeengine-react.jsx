/*global React timeengine __ Immutable __Element*/
//this file need to be transpiled to js
//npm test
(() => {
  "use strict";

  const mode = typeof module !== "undefined" && module.exports;
  const React = (mode)
    ? require("react")
    : window.React;
  const ReactDOM = (mode)
    ? require("react-dom")
    : window.ReactDOM;
  const __ = (mode)
    ? require("timeengine")
    : window.__;

  //***React state with life cycle is stateless sequence*****
  const __Element = (__seqEl, f = () => 0) => {

    class SeqComponent extends React.Component {
      constructor() {
        super();
        this.state = {
          seqEl: __seqEl.t
        };
        const __timeseq = __([__seqEl])
          .__(([val]) => {

            console.info("@@@@@@@@@@@@@@@@@@@@", val);
            this.setState({
              seqEl: val
            });
            f(ReactDOM.findDOMNode(this).children[0]);
            return true;
          });
      }
      componentWillUnmount() {
        __seqEl.done = 1;
      }
      render() {
        return (<span>{this.state.seqEl}</span>);
      }
    }
    return (<SeqComponent/>);
  };
  //------------------
  const binder = (mode)
    ? (() => {
      module.exports = __Element;
    })()
    : (() => {
      window.__Element = __Element;
    })();

})();
