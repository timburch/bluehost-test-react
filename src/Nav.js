import React from 'react';

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">Bluehost Products</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <input type="radio" name="view" value="0" checked={!props.view} onChange={props.handleChangeView} />List
          </li>
          <li className="nav-item">
            <input type="radio" name="view" value="1" checked={props.view} onChange={props.handleChangeView} />Email
          </li>
          <li className="nav-item float-right">
            <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#add-form">Add</button>
          </li>
          <li className="nav-item float-right">
            <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#load-form">Load</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;