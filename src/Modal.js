import React from 'react';

function Modal(props) {
  return (
    <div className="modal" id={props.id} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.error &&
              <div className="alert alert-danger" role="alert">
                {props.error}
              </div>
            }
            {props.form}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;