import { useNavigate } from 'react-router-dom';
import { useGlobal as useGlobalContext } from '../contexts/Global.jsx';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import classnames from 'classnames';
import config from '../config.js';
import Dropdown from 'react-bootstrap/Dropdown';

export default function DropdownToggle(props) {
  const { global: globalContext } = useGlobalContext();

  const navigateTo = useNavigate();

  let _props = {...props};

  if(typeof _props.to !== 'undefined') _props.onClick = () => {
    navigateTo(_props.to);
  }

  _props.className += ' border-0';

  _props.variant = 'outline-' + (globalContext.app.theme == 'light' ? 'dark' : 'light');

  _props.title = 'Menu';

  return <Dropdown.Toggle {..._props}>
    <ThreeDotsVertical />
  </Dropdown.Toggle>;
}
