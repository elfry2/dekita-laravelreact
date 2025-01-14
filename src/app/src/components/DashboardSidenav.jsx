import { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGlobal as useGlobalContext } from '../contexts/Global.jsx';
import { BoxArrowLeft } from 'react-bootstrap-icons';
import { Check2Square } from 'react-bootstrap-icons';
import { EmojiSmile } from 'react-bootstrap-icons';
import { MoonStars } from 'react-bootstrap-icons';
import { People } from 'react-bootstrap-icons';
import { Sun } from 'react-bootstrap-icons';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import axiosInstance from '../utilities/axios-instance.js';
import config from '../config.js';
import Avatar from 'boring-avatars';
import Button from '../components/Button.jsx';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from '../components/DropdownToggle.jsx';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

export default function DashboardSidenav() {
  const navigateTo = useNavigate();

  const [taskLists, setTaskLists] = useState([]);

  const [authenticatedUser, setAuthenticatedUser] = useState({
    name: 'aU.name',
    role: {
      name: 'aU.r.name',
    },
  });

  const {
    global: globalContext,
    setGlobal: setGlobalContext
  } = useGlobalContext();

  const nav = [
    {
      name: 'Hello',
      icon: EmojiSmile,
      link: '/hello',
    },
    {
      name: 'Lists',
      icon: Check2Square,
      items: [ // To be replaced with taskLists.
        {
          name: 'task',
          link: '/task-lists/1',
        },
        {
          name: 'lists',
          link: '/task-lists/2',
        },
        {
          name: 'go',
          link: '/task-lists/3',
        },
        {
          name: 'here',
          link: '/task-lists/4',
        },
      ],
    },
    {
      name: 'Users',
      icon: People,
      link: '/users',
    },
  ];

  const toggleAppTheme = () => {
    const appTheme = (globalContext.app.theme == 'light' ? 'dark' : 'light');

    axiosInstance.post('/preferences', {
      key: 'app.theme',
      value: appTheme,
    });

    setGlobalContext({
      ...globalContext,
      app: {
        ...globalContext.app,
        theme: appTheme,
      },
    });
  }

  useEffect(() => {
    axiosInstance.get('/user')
      .then(({data}) => setAuthenticatedUser(data))
      .catch(error => console.error(error));
  }, []);

  return <>
    <Stack direction="horizontal">
      <Avatar
        name={"" + Math.random()}
        title={Math.random()}
        variant="beam"
        style={{
          height: "48px",
          width: "48px",
          borderRadius: "50%",
        }}
      />
      <div className="ms-2 flex-grow-1">
        <h5 className="m-0 fw-bold">{ authenticatedUser.name }</h5>
        <small>{ authenticatedUser.role.name }</small>
      </div>
      {/* <Button */}
      {/*   className="ms-auto" */}
      {/*   to="/logout" */}
      {/*   title="Sign out" */}
      {/* ><BoxArrowLeft /></Button> */}
      <Dropdown>
        <DropdownToggle />
        <Dropdown.Menu>
          <Dropdown.Item onClick={toggleAppTheme}>{ globalContext.app.theme == 'light' ? <Sun /> : <MoonStars />}<span className="ms-2">{globalContext.app.name == 'light' ? 'Dark' : 'Light'} Mode</span></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => navigateTo('/logout')}>
            <BoxArrowLeft />
            <span className="ms-2">Sign Out</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Stack>
    <div className="mt-3" />
    {nav.map((item) => <ListGroup><ListGroup.Item
      action={!Object.hasOwn(item, 'items')}
      active={Object.hasOwn(item, 'link') && useMatch(item.link)}
      className="border-0 pe-0"
      variant={(Object.hasOwn(item, 'link') && useMatch(item.link)) ? 'secondary' : ''}
      key={item.name}
      onClick={() => !Object.hasOwn(item, 'items') && navigateTo(item.link)}
    >
      {item.icon && <item.icon className="me-2" />}
      {item.name}
      {Object.hasOwn(item, 'items') && <ListGroup className="mt-2">
        {item.items.map((item) => <ListGroup.Item
          action
          active={Object.hasOwn(item, 'link') && useMatch(item.link)}
          className="border-0"
          key={item.link}
          onClick={() => navigateTo(item.link)}
        >{item.name}</ListGroup.Item>)}</ListGroup>}
    </ListGroup.Item></ListGroup>)}
  </>
}
