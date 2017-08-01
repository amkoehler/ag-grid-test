import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';

import React from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';

class Grid extends React.Component {

  static propTypes = {
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="ag-fresh" style={{ height: '100%' }}>
        <AgGridReact
          columnDefs={this.props.columns}
          rowData={this.props.rows}
          rowGroupPanelShow="always"
          onGridReady={this.onGridReady}
        />
      </div>
    );
  }
}

export default Grid;