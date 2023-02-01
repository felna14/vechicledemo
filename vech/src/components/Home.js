import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVehicleData } from '../actions';

import DataTable from 'react-data-table-component';

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getVehicleData());
  }, []);

  const columns = [
    {
      name: 'VehicleNum',
      selector: (row) => row.vechno,
    },
    {
      name: 'Lastname',
      selector: (row) => row.lastName,
    },
    {
      name: 'Model',
      selector: (row) => row.colors,
    },
    {
      name: 'Action',
      selector: (row) => (
        <Link
          to={`edit-form/${row.id}`}
          type="button"
          className="btn btn-success"
        >
          EDIT
        </Link>
      ),
      //   selector: (row) => (
      //     <Link
      //       to={`edit-form/${row.id}`}
      //       type="button"
      //       className="btn btn-success"
      //     >
      //       DELETE
      //     </Link>
      //   ),
    },
  ];
  return (
    <div>
      <button>
        <Link to="/add-form">Add</Link>
      </button>
      {/* <div className="row"> */}
      <div className="mt-5 d-flex justify-content-around">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
    //  </div>
  );
};

export default Home;
