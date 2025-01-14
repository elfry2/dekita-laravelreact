import { useNavigate } from 'react-router-dom';
import { useGlobal as useGlobalContext } from '../contexts/Global.jsx';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import classnames from 'classnames';
import config from '../config.js';
import Dropdown from 'react-bootstrap/Dropdown';

export default function DropdownItem(props) {
  const { global: globalContext } = useGlobalContext();

  const navigateTo = useNavigate();

  let _props = {...props};

  if(typeof _props.to !== 'undefined') _props.onClick = () => {
    navigateTo(_props.to);
  }

  return <Dropdown.Item {..._props}>
    {_props.children}
  </Dropdown.Item>;
}
