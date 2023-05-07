import React, { Component } from "react";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="http://www.hackboy.shop" className="navbar-brand">
                도훈 테스트 환경입니다.
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
