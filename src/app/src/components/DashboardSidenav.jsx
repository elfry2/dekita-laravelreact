import { BoxArrowLeft } from 'react-bootstrap-icons';
import { useMatch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Check2Square } from 'react-bootstrap-icons';
import { EmojiSmile } from 'react-bootstrap-icons';
import { People } from 'react-bootstrap-icons';
import Avatar from 'boring-avatars';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

export default function DashboardSidenav() {
  const navigateTo = useNavigate();

  const [taskLists, setTaskLists] = useState([]);

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

  return <>
    <Stack direction="horizontal">
      {/* <img */}
      {/*   style={{ */}
      {/*     height: "48px", */}
      {/*     width: "48px", */}
      {/*     borderRadius: "50%", */}
      {/*     backgroundColor: "#EEE" */}
      {/*   }} */}
      {/*   src={ "authContext.user.avatar" } */}
      {/*   alt={ "" } */}
      {/* /> */}
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
      <div className="ms-2">
      <p className="m-0 fw-bold">{ "full name" }</p>
      <p className="m-0 fw-light">{ "role" }</p>
      </div>
      <Button
        variant="outline-primary"
        className="border-0 ms-auto"
        title="Sign out"
        onClick={ "AuthContext.logout" }><BoxArrowLeft /></Button>
    </Stack>
    <div className="mt-3" />
    {nav.map((item) => <ListGroup><ListGroup.Item
      action={!Object.hasOwn(item, 'items')}
      active={Object.hasOwn(item, 'link') && useMatch(item.link)}
      className="border-0 pe-0"
      key={item.name}
      onClick={() => navigateTo(item.link)}
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
  </>;

}
