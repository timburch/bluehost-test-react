import React from 'react';

function LoadForm(props) {
  return (
    <form onSubmit={props.handleLoad}>
      <div className="form-group">
        <label htmlFor="file">File</label>
        <input type="file" className="form-control" id="file" required onChange={props.prepareLoad} />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
}

export default LoadForm;