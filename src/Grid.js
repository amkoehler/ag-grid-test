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

  onGridReady = ({ api }) => {
    this.api = api;

    // I can toggle the no rows overlay right here, but it doesn't seem like this
    // should be necessary. Keeping it commented so that the issue is visible.
    if (this.props.rows.length === 0) {
      // this.api.showNoRowsOverlay();
    }
  }

  render() {
    return (
      <div className="ag-fresh" style={{ height: '100%' }}>
        <AgGridReact
          columnDefs={this.props.columns}
          rowData={this.props.rows}
          onGridReady={this.onGridReady}
        />
      </div>
    );
  }
}

export default Grid;