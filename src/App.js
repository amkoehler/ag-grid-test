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
        },
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <div style={{padding: '15px'}}>
          Bug description: The Make and Model columns use custom header components (copied from the&nbsp;
          <a href="https://github.com/ceolter/ag-grid-react-example/blob/master/src/richGridExample/SortableHeaderComponent.jsx">react example</a>).
          The Price column is not a custom header component. On a touch device (tested on iPad) I can drag Price to the row grouping panel, but I
          can't drag Make and Model without the drag getting stuck once my drag enters the row grouping element. I don't have this issue on
          desktop though.
          </div>
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
