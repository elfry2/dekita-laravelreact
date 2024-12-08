import { useMatch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Check2Square } from 'react-bootstrap-icons';
import { EmojiSmile } from 'react-bootstrap-icons';
import { People } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DashboardSidebar () {
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

  return <div className="me-5">
    <h3>app.name</h3>
    <div className="mt-3" />
    {nav.map((item) => <ListGroup><ListGroup.Item
      action={!Object.hasOwn(item, 'items')}
      active={Object.hasOwn(item, 'link') && useMatch(item.link)}
      className="border-0 pe-0"
      key={item.name}
      onClick={() => navigateTo(item.link)}
    >
      {!item.icon ? '' : <item.icon className="me-2" />}
      {item.name}
      {!Object.hasOwn(item, 'items') ? '' : 
        <ListGroup className="mt-2">
          {item.items.map((item) => <ListGroup.Item
          action
          active={Object.hasOwn(item, 'link') && useMatch(item.link)}
          className="border-0"
          key={item.link}
          onClick={() => navigateTo(item.link)}
        >{item.name}</ListGroup.Item>)}</ListGroup>
      }
    </ListGroup.Item></ListGroup>)}
  </div>;

}
