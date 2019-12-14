import React, { Component } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  componentWillUnMount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    return ReactDOM.createPortal(
      <div
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      >
        {this.props.children}
      </div>,
      this.el
    );
  }
}

export default Portal;
