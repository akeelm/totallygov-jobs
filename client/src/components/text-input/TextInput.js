import React from 'react';
import './text-input.scss';

function TextInput({  label, onChange }) {
    return (
      <div className="text-input">
        <span className="text-input__label">{label}</span>
        <input
          className="text-input__input"
          type="text"
          placeholder={label}
          onChange={onChange}
          data-testid={label}
        ></input>
      </div>
    );
}

export default TextInput;