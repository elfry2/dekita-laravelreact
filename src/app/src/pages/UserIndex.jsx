import { titleCase } from 'title-case';
import { useEffect } from 'react';
import { useGlobal as useGlobalContext } from '../contexts/Global.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { PencilSquare } from 'react-bootstrap-icons';
import { PlusLg } from 'react-bootstrap-icons';
import { Trash } from 'react-bootstrap-icons';
import axiosInstance from '../utilities/axios-instance.js';
import pluralize from 'pluralize';
import Button from '../components/Button.jsx';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from '../components/DropdownItem.jsx';
import DropdownToggle from '../components/DropdownToggle.jsx';
import NoDataCenteredParagraph from '../components/NoDataCenteredParagraph.jsx';
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
  }, []);

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

  const {
    global: globalContext,
    setGlobal: setGlobalContext
  } = useGlobalContext();

  return <div>
    <Helmet>
      <title>{title + ' | ' + globalContext.app.name}</title>
    </Helmet>
    <Stack direction="horizontal">
      <h2 className="flex-grow-1 fw-bold m-0 p-0">{title}</h2>
      <Button onClick={onCreationButtonClick}><PlusLg /><span class="ms-2">New</span></Button>
    </Stack>
    { collection.length == 0 ? <NoDataCenteredParagraph suggestCreating /> :
    <div className="rounded border mt-3">
      <Table striped className="m-0 align-middle">
         <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>username</th>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            {collection.map((item, index) => <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.role.name}</td>
              <td className="align-middle text-end">
                <Dropdown>
                  <DropdownToggle />
                  <Dropdown.Menu>
                    <DropdownItem to={item.id + '/edit'}><PencilSquare /><span className="ms-2">Edit</span></DropdownItem>
                    <Dropdown.Divider />
                    <DropdownItem to={item.id + '/delete'}>
                      <Trash />
                      <span className="ms-2">Delete</span>
                    </DropdownItem>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>)}
          </tbody>
      </Table>
    </div> }
  </div>;
}
