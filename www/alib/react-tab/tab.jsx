/*global React timeengine __ Immutable __Element*/
//this file need to be transpiled to js
//npm test
(() => {
  "use strict";
  //===================================
  const Tabs = React.createClass({
    displayName: "Tabs",
    propTypes: {
      selected: React.PropTypes.number,
      children: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.element
      ]).isRequired
    },
    getDefaultProps() {
      return {
        selected: 0
      };
    },
    getInitialState() {
      return {
        selected: this.props.selected
      };
    },
    handleClick(index, event) {
      event.preventDefault();
      this.setState({
        selected: index
      });
    },
    _renderTitles() {
      function labels(child, index) {
        let activeClass = (this.state.selected === index ? "active" : "");
        return (
          <li key={index}>
          <a href="#"
          className={activeClass}
          onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
          );
      }
      return (
        <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
        );
    },
    _renderContent() {
      console.log("@@@@@@:" + this.state.selected);
      return (
        <div>
        {this.props.children.map((el, index) => (
          <div className={this.state.selected === index ? "" : "hidden"}>
            <div className="tabs__content">
              {el}
            </div>
          </div>))}
      </div>
        );
    },
    render() {
      return (
        <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
        );
    }
  });

  const Pane = React.createClass({
    displayName: "Pane",
    propTypes: {
      label: React.PropTypes.string.isRequired,
      children: React.PropTypes.element.isRequired
    },
    render() {
      return (
        <div>
        {this.props.children}
      </div>
        );
    }
  });
  //============================
  window.Tabs = Tabs;
  window.Pane = Pane;

})();
