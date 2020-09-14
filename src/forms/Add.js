import React from 'react';
import * as Constants from '../Constants.js';

class AddForm extends React.Component {
  render() {
    const productTypes = Constants.PRODUCT_NAME_OPTIONS.map((v) => {
      return <option key={v[0]} value={v[0]}>{v[1]}</option>;
    });
    return (
      <form onSubmit={this.props.handleAdd}>
        <div className="form-group">
          <label>Customer ID</label>
          <input type="text" maxLength="20" name="customer_id" required onChange={this.props.handleChange} />
        </div>
        <div className="form-group">
          <label>Product type</label>
          <select name="product_type" required onChange={this.props.handleChangeProductType}>
            {productTypes}
          </select>
        </div>
        <div className="form-group">
          <label>Domain</label>
          <input type="url" maxLength="253" name="domain" required onChange={this.props.handleChange} />
        </div>
        <div className="form-group">
          <label>Duration (months)</label>
          <input type="number" id="duration" name="duration" min={this.props.min} step={this.props.step} onChange={this.props.handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    );
  }
}

export default AddForm;