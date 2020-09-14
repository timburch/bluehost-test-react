import React from 'react';
import './App.css';
import * as Constants from './Constants.js';
import Modal from './Modal.js';
import Nav from './Nav.js';
import AddForm from './forms/Add.js';
import LoadForm from './forms/Load.js';
import Product from './Product.js';
import ProductList from './views/List.js';

class App extends React.Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeProductType = this.handleChangeProductType.bind(this);
    this.handleChangeView = this.handleChangeView.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.prepareLoad = this.prepareLoad.bind(this);
    this.state = { data: [], error: null, newProduct: {}, min: 1, step: 1, view: 0 };
  }
  addProduct(obj) {
    if (typeof obj.start_date === 'undefined') {
      const date = new Date();
      obj.start_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay();
    }  
    var product = new Product();
    try {
      product.validate(this.state.data, obj);
      var arr = this.state.data;
      arr.push(obj);
      this.setState({ data: arr, error: null });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }
  handleAdd(event) {
    event.preventDefault();
    this.addProduct(this.state.newProduct);
  }
  handleChange(event) {
    var newProduct = this.state.newProduct;
    newProduct[event.target.name] = event.target.value;
    this.setState({newProduct: newProduct});
  }
  handleChangeProductType(event) {
    const multiple = event.target.value.match(/domain/) === null ? 1 : 12;
    var newProduct = this.state.newProduct;
    newProduct[event.target.name] = event.target.value;
    this.setState({ min: multiple, newProduct: newProduct, step: multiple });
  }
  handleChangeView(event) {
    this.setState({view: event.target.value});
  }
  handleLoad(event) {
    event.preventDefault();
    var reader = new FileReader();
    var self = this;
    reader.onload = () => {
      const rows = reader.result.split(/\r\n|\n/);
      rows.map((row) => {
        if (row.length === 0) {
          return;
        }
        const columns = row.split(',');
        return self.addProduct({
          customer_id: columns[0],
          product_type: columns[1] || '',
          domain: columns[2] || '',
          start_date: columns[3] || '',
          duration: columns[4] || ''
        });
      });
      return;
    }
    reader.readAsText(this.state.file);
  }
  prepareLoad(event) {
    const files = event.target.files;
    this.setState({ file: files[0] });
  }
  render() {
    const addForm = <AddForm handleAdd={this.handleAdd} handleChange={this.handleChange} handleChangeProductType={this.handleChangeProductType} min={this.state.min} step={this.state.step} />;
    const loadForm = <LoadForm prepareLoad={this.prepareLoad} handleLoad={this.handleLoad} />;
    return (
      <div className="App">
        <Nav handleChangeView={this.handleChangeView} />
        <ProductList data={this.state.data} />
        <Modal id={Constants.ADD_FORM} title="Add Product" form={addForm} handler={this.handleAdd} error={this.state.error} />
        <Modal id={Constants.LOAD_FORM} title="Load Product(s)" form={loadForm} handler={this.handleLoad} error={this.state.error} />
      </div>
    );
  }
}

export default App;
