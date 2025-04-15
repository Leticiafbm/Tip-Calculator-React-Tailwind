import { useState } from "react";

const Input = (props) => {
  const [touched, setTouched] = useState(false);

  function isEmpty(input) {
    return input <= 0;
  }

  const showError = touched && isEmpty(props.value);

  return (
    <div className="flex flex-col relative gap-1.5">
      <div className="flex justify-between">
        <label htmlFor={props.id} className="text-label font-bold lg:text-lg">
          {props.name}
        </label>
        <p className={`font-bold text-error ${showError ? 'block' : 'hidden'}`} id="error">
          Can't be zero
        </p>
      </div>

      <input
        type="number"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={() => setTouched(true)}
        placeholder={props.placeholder}
        className={`outline-none py-1.5 pr-6 text-right bg-input rounded-md placeholder:font-bold placeholder:text-lightgrey text-dark font-bold text-2xl transition-all focus:ring-2 ${showError ? 'ring-error' : 'ring-cyan'} lg:py-2.5 lg:text-3xl lg:pr-4.5 lg:caret-cyan`}
      />
      <img
        src={props.image}
        alt={props.description}
        className="w-3 h-4 absolute top-11 left-4 lg:w-3.5 lg:h-4.5 lg:top-13.5 lg:left-6"
      />
    </div>
  );
};

export default Input;
