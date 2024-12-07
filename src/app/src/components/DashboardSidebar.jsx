import Nav from 'react-bootstrap/Nav';
import { useMatch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function DashboardSidebar () {
  const navigateTo = useNavigate();

  const [taskLists, setTaskLists] = useState([]);

  const nav = [
    {
      name: 'Lists',
      items: [
        {
          name: 'task',
          link: '/tasks',
        },
        {
          name: 'lists',
          link: '/lists',
        },
        {
          name: 'go',
          link: '/go',
        },
        {
          name: 'here',
          link: '/here',
        },
      ],
    },
    {
      name: 'Users',
      link: '/users',
    },
  ];

  return <>
  <h3 class="mt-3">app.name</h3>
  <Nav variant="pills" className="flex-sm-column mt-3">
    {nav.map((item) => Object.hasOwn(item, 'items')
      ? <><span className="ms-3">{item.name}</span>
        {item.items.map((item) => <Nav.Item>
        <Nav.Link
          className="text-dark ms-3"
          key={item.link}
          activeKey={() => useMatch(item.link ? item.link : '')}
          onClick={() => navigateTo(item.link)}
        >{item.name}
        </Nav.Link>
        </Nav.Item>)}</>
      : <Nav.Item>
        <Nav.Link
          className="text-dark"
          key={item.link}
          activeKey={() => useMatch(item.link ? item.link : '')}
          onClick={() => navigateTo(item.link)}
        >{item.name}
        </Nav.Link>
      </Nav.Item>)}
  </Nav>
  </>;

}
