import { useNavigate } from 'react-router-dom';
import { useGlobal as useGlobalContext } from '../contexts/Global.jsx';
import classnames from 'classnames';
import config from '../config.js';
import ReactBootstrapButton from 'react-bootstrap/Button';

export default function Button(props) {
  const { global: globalContext } = useGlobalContext();

  const navigateTo = useNavigate();

  let _props = {...props};

  if(typeof _props.to !== 'undefined') _props.onClick = () => {
    navigateTo(_props.to);
  }

  _props.className += ' border-0';

  _props.variant = 'outline-' + (globalContext.app.theme == 'light' ? 'dark' : 'light');

  return <ReactBootstrapButton {..._props}>
    {_props.children}
  </ReactBootstrapButton>;
}
