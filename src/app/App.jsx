import React from "react";

import ShortAnswer from "_components/ShortAnswer";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputs: ["input-0"],
      vals: {
        "input-0": ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // Logic here to submit when online, and store when offline
  }

  appendInput() {
    let newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({inputs: prevState.inputs.concat([newInput])}));
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <h1>Inputs are here!</h1>
          <div id="dynamicInput">
            {this.state.inputs.map(input => (
              <ShortAnswer
                key={input}
                name={input}
              />
            ))}
          </div>
          <button onClick={this.appendInput()}>New Input</button>
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }

}

export default App;
