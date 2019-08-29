import React from 'react';

const SingleInputActions = ({
  label,
  inputValue,

  inputProps,
  onConfirm,
  onCancel,
}) => {
  const [localInputValue, setInputValue] = React.useState(inputValue);

  React.useEffect(() => {
    setInputValue(inputValue);
  }, [inputValue]);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <hr />
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            className="input"
            value={localInputValue}
            type="text"
            {...inputProps}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            onClick={() => {
              onConfirm(localInputValue);
              setInputValue('');
            }}
          >
            Confirm
          </button>
        </div>
        <div className="control">
          <button className="button is-text" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleInputActions;
