import { titleCase } from 'title-case';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { PlusLg } from 'react-bootstrap-icons';
import axiosInstance from '../utilities/axios-instance.js';
import pluralize from 'pluralize';
import Button from '../components/Button.jsx';
// import DataTableStyleBootstrap5 from 'datatables.net-bs5';
import Stack from 'react-bootstrap/Stack';
// import Table from 'datatables.net-react';
import Table from 'react-bootstrap/Table';

export default function UserIndex() {

  /**
   * The object being manipulated. In lower-case singular.
   */
  const [object, setObject] = useState('user');

  /**
   * The fetched collection of the object being manipulated.
   */
  const [collection, setCollection] = useState([]);

  /**
   * Fetch collection on mount.
   */
  useEffect(() => {
    axiosInstance.get('/' + pluralize(object))
      .then(({data}) => setCollection(data))
      .catch(error => console.error(error));
  }, [])

  /**
    * The title that is shown on top of the page and on the browser tab.
    */
  const [title, setTitle] = useState(pluralize(titleCase(object)));

  const navigateTo = useNavigate();

  /**
    * Handle creation button click.
    */
  const onCreationButtonClick = () => {
    navigateTo('create')
  }

  /**
    * Handle show button click.
    */
  const onShowButtonClick = (id) => {
    navigateTo(id)
  }

  /**
    * Handle modification button click.
    */
  const onModificationButtonClick = (id) => {
    navigateTo(id + '/edit')
  }

  /**
    * Handle deletion button click.
    */
  const onDeletionButtonClick = (id) => {
    navigateTo(id + '/delete')
  }

  // Table.use(DataTableStyleBootstrap5);

  return <div>
    <Stack direction="horizontal">
      <h1 className="flex-grow-1">{title}</h1>
      <Button onClick={onCreationButtonClick}><PlusLg /><span class="ms-2">New</span></Button>
    </Stack>
    <div className="rounded border">
      <Table striped hover className="m-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {collection.map(item => <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.role.name}</td>
          </tr>)}
        </tbody>
      </Table>
    </div>
  </div>;
}
