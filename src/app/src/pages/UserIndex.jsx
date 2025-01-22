import { createSearchParams } from 'react-router-dom';
import { titleCase } from 'title-case';
import { useEffect } from 'react';
import { useGlobal as useGlobalContext } from '../contexts/Global.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft } from 'react-bootstrap-icons';
import { ChevronRight } from 'react-bootstrap-icons';
import { Helmet } from 'react-helmet';
import { PencilSquare } from 'react-bootstrap-icons';
import { PlusLg } from 'react-bootstrap-icons';
import { Trash } from 'react-bootstrap-icons';
import axiosInstance from '../utilities/axios-instance.js';
import pluralize from 'pluralize';
import queryString from 'query-string';
import Button from '../components/Button.jsx';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from '../components/DropdownItem.jsx';
import DropdownToggle from '../components/DropdownToggle.jsx';
import Form from 'react-bootstrap/Form';
import LoadingCenteredParagraph from '../components/LoadingCenteredParagraph.jsx';
import NoDataCenteredParagraph from '../components/NoDataCenteredParagraph.jsx';
// import DataTableStyleBootstrap5 from 'datatables.net-bs5';
import Stack from 'react-bootstrap/Stack';
// import Table from 'datatables.net-react';
import Table from 'react-bootstrap/Table';

export default function UserIndex() {

  /**
   * Definition order:
   * - Utilities, hooks, contexts, and other imported properties
   * - States and other local properties
   * - Handlers and other methods
   * = Side effects
   * - Constructive effects
   * - View header
   * - View body
   */


  const navigateTo = useNavigate();

  const {
    global: globalContext,
    setGlobal: setGlobalContext
  } = useGlobalContext();

  const [object, setObject] = useState('user');
  
  const [query, setQuery] = useState(queryString.parse(location.search));

  const [isLoading, setIsLoading] = useState(false);

  const [collection, setCollection] = useState([]);

  const [title, setTitle] = useState(pluralize(titleCase(object)));

  // Table.use(DataTableStyleBootstrap5);


  const onCreationButtonClick = () => {
    navigateTo('new');
  }

  const onShowButtonClick = (id) => {
    navigateTo(id);
  }

  const onModificationButtonClick = (id) => {
    navigateTo(id + '/edit');
  }

  const onDeletionButtonClick = (id) => {
    navigateTo(id + '/delete');
  }

  const onPreviousPageButtonClick = () => {
    const page = Number(query.page || 1);

    if (page <= 1) return;

    setQuery({
      ...query,
      page: page - 1,
    });
  }

  const onNextPageButtonClick = () => {
    const page = Number(query.page || 1);

    if (page >= collection.last_page) return;

    setQuery({
      ...query,
      page: page + 1,
    });
  }

  const onPageNumberNumberInputChange = (event) => {
    setQuery({
      ...query,
      page: event.target.value,
    });
  }

  useEffect(() => {
    /**
      * Same URL doesn't cause reload.
      */
    navigateTo({
      search: createSearchParams(query).toString(),
    });

    setIsLoading(true);

    axiosInstance.get('/' + pluralize(object), {
      params: {
        page: query.page,
        perPage: globalContext.app.perPage,
      }
    })
      .catch(error => console.error(error))
      .then(({data}) => {
        console.log(data);

        setCollection(data);

        setIsLoading(false);
      });
  }, [query]);


  return <div>
    <Helmet>
      <title>{title + ' | ' + globalContext.app.name}</title>
    </Helmet>
    <Stack direction="horizontal">
      <h2 className="flex-grow-1 fw-bold m-0 p-0">{title}</h2>
      <Button onClick={onCreationButtonClick}><PlusLg /><span class="ms-2">New</span></Button>
      <ButtonGroup aria-label="Basic example">
        <Button onClick={onPreviousPageButtonClick} disabled={query.page <= 1}><ChevronLeft /></Button>
        <Form.Control type="number" min="1" max={Object.hasOwn(collection, 'last_page' ? collection.last_page : 1)} value={query.page || 1} style={{maxWidth: "4em"}} className="text-center" onChange={() => onPageNumberNumberInputChange(event)}/>
        <Button onClick={onNextPageButtonClick} disabled={query.page >= collection.last_page}><ChevronRight /></Button>
      </ButtonGroup>
    </Stack>
    { !Object.hasOwn(collection, 'data') || collection.data.length == 0 ? <NoDataCenteredParagraph suggestCreating /> :
      isLoading ? <LoadingCenteredParagraph /> : 
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
              {collection.data && collection.data.map((item, index) => <tr key={item.id}>
                <td>{((query.page || 1) - 1) * (globalContext.app.perPage || 10) + index + 1}</td>
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
        </div>
      
    }
  </div>;
}
