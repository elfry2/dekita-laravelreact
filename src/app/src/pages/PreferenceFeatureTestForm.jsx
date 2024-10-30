import { useRef } from "react";
import { useState } from "react";
import axiosInstance from '../utilities/axios-instance.js';

export default function PreferenceFeatureTestForm() {

  const keyRef = useRef();
  const valueRef = useRef();

  const [value, setValue] = useState(null);

  const get = () => {
    axiosInstance.get('preferences/' + keyRef.current.value)
      .then(({data}) => {
        setValue(data);
      });
  }

  const set = () => {
    axiosInstance.post('preferences', {
      key: keyRef.current.value,
      value: valueRef.current.value,
    });
  }

  return <>
    <h1>{value}</h1>
    <div>
      <label for="keyTextInput">Key</label>
      <input type="text" name="key" id="keyTextInput" required autoFocus ref={keyRef} />
    </div>
    <div>
      <label for="valueTextInput">Value</label>
      <input type="text" name="value" id="valueTextInput" ref={valueRef} />
    </div>
    <div>
      <button onClick={get}>Get</button>
      <button onClick={set}>Set</button>
    </div>
  </>;
}
