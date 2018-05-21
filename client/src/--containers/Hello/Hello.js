import React, { Component } from "react";
import API from "../../utils/API";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSamples()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return <h1 className="hello"> Hello, {this.props.name}</h1>;

    // {this.state.sampleData.map(test =>
    //   (<h1>test.name</h1>))}
    }
}

export default Books;
