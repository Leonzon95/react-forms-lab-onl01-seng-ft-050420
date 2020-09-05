import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsLeft: props.maxChars,
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      charsLeft: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <div>{this.state.charsLeft}</div>
      </div>
    );
  }
}

export default TwitterMessage;
