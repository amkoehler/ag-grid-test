import React, { Component } from 'react';

import Grid from './Grid';
import HeaderCellRenderer from './HeaderCellRenderer';
import 'ag-grid-enterprise';

import './App.css';

const DATA = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 },
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          headerName: "Make",
          field: "make",
          enableRowGroup: true,
          headerComponentFramework: HeaderCellRenderer,
        },
        {
          headerName: "Model",
          field: "model",
          enableRowGroup: true,
          headerComponentFramework: HeaderCellRenderer,
        },
        {
          headerName: "Price",
          field: "price",
          enableRowGroup: true,
          headerComponentFramework: HeaderCellRenderer,
        },
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <Grid
          rows={DATA}
          rowGroupPanelShow="always"
          columns={this.state.columns}
        />
      </div>
    );
  }
}

export default App;
