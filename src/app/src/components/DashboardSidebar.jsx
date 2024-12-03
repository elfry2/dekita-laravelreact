import { Nav } from 'react-bootstrap/Nav';
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

  return <Nav variant="pills" className="flex-sm-column">
    {nav.map((item) => Object.hasOwn('items')
    ? <h5 key={item.name}>{item.name}</h5>
      {item.items.map((item) => <Nav.Item>
        <Nav.Link
          key={item.link}
          activeKey={useMatch({item.link})}
          onClick={navigateTo({item.link})}
        >{item.name}
        </Nav.Link>
      </Nav.Item>}
    : <Nav.Item>
        <Nav.Link
          key={item.link}
          activeKey={useMatch({item.link})}
          onClick={navigateTo({item.link})}
        >{item.name}
        </Nav.Link>
      </Nav.Item>
    )}
  </Nav>;

}
