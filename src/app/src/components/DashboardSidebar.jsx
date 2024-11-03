import { ListGroup } from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function DashboardSidebar () {
  const navigateTo = useNavigate();

  const [taskLists, setTaskLists] = useState([]);

  const listGroups = [
    {
      name: 'Lists',
      items: taskLists,
    },
    {
      name: 'Users',
      link: '/users',
    },
  ];

  return <div>
    {listGroups.map(listGroup => Object.hasOwn(listGroup, 'items')
    ? <div>
        <h5>{listGroup.name}</h5>
        <ListGroup key={listGroup.name}>
          {listGroup.items.map(item => 
            <ListGroup.Item
              key={item.name}
              onClick={() => navigateTo(item.link)}
            >{item.name}</ListGroup.Item>
          )}
        </ListGroup>
      </div>
    : <ListGroup key={listGroup.name}>
        <ListGroup.Item onClick={navigateTo(listGroup.link)}
        >{listGroup.name}</ListGroup.Item>
      </ListGroup>
    }
  </div>

}
