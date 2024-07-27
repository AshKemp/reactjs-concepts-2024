import { Component } from "react";

class ClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      changeColor: false,
    };
  }

  handleClick = () => {
    console.log("button clicked");
    const { showText, changeColor } = this.state;
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };
  render() {
    console.log(this.state);
    const { showText, changeColor } = this.state;
    return (
      <div>
        {showText ? (
          <h4 style={{ color: changeColor ? "red" : "black" }}>
            Class Based Component
          </h4>
        ) : null}
        <button onClick={this.handleClick}>Toggle text</button>
      </div>
    );
  }
}

export default ClassBasedComponent;
