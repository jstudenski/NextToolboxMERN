import React from 'react';
import './Hello.css';
import API from '../../utils/API';

class Hello extends React.Component {
  state = {
    sampleData: [{
      "name":"hello"},{"name":"world"}],
  }

  componentDidMount() {
    console.log(this.state.sampleData)
    API.getSamples().then((res) => {
      this.setState({
        needsData: res.data
      });
    }).catch((err) => {
      console.log('Error while getting needs: ', err);
    });
  }

  render() {
    return <h1 className="hello"> Hello, {this.props.name}</h1>;

    {this.state.sampleData.map(test =>
      (<h1>test.name</h1>))}
    }
}

export default Hello; 
