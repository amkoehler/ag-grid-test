import React, { Component } from 'react';

import Grid from './Grid';

import './App.css';

const DATA = {
  'Empty': [],
  'Not Empty': [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ],
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
      ],
      rowSource: 'Empty',
    }
  }

  onRowSourceChange = (e) => {
    this.setState({
      rowSource: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <select onChange={this.onRowSourceChange}>
            { Object.keys(DATA).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            )) }
          </select>
          <br />
          <br />
          This will be Empty by default, and initially the 'No Rows To Show' overlay is not visible.
          If you toggle from Empty -> Not Empty -> Empty the overlay is then visible. Is this a bug?
        </div>
        <Grid
          rows={DATA[this.state.rowSource]}
          columns={this.state.columns}
        />
      </div>
    );
  }
}

export default App;
