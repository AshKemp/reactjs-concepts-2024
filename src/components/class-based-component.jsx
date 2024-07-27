import { Component } from "react";

class ClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      changeColor: false,
      count: 0,
      changeCountStyle: false,
    };
  }

  componentDidMount() {
    console.log("This is called first time on page load");
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState);
    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  componentWillUnmount() {
    console.log("this is called when component gets destroyed");
  }

  handleClick = () => {
    console.log("button clicked");
    const { showText, changeColor } = this.state;
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };
  render() {
    // console.log(this.state);
    const { showText, changeColor, count, changeCountStyle } = this.state;
    return (
      <div>
        {showText ? (
          <h4 style={{ color: changeColor ? "red" : "black" }}>
            Class Based Component
          </h4>
        ) : null}
        <button onClick={this.handleClick}>Toggle text</button>
        <button onClick={this.handleCount}>Increase the count</button>
        <h3
          style={{
            color: changeCountStyle ? "blue" : "black",
            fontSize: changeCountStyle ? "30px" : "12px",
          }}
        >
          Count is: {count}
        </h3>
      </div>
    );
  }
}

export default ClassBasedComponent;
