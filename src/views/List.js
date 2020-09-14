import React from 'react';

class ProductList extends React.Component {
  render() {
    let tbody;
    if (this.props.data.length === 0) {
      tbody = <tr><td colSpan="5">No data to display</td></tr>;
    } else {
      tbody = this.props.data.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.customer_id}</td>
            <td>{row.product_type}</td>
            <td>{row.domain}</td>
            <td>{row.start_date}</td>
            <td>{row.duration}</td>
          </tr>
        );
      });
    }
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Product type</th>
            <th>Domain</th>
            <th>Start date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </table>
    );
  }
}

export default ProductList;