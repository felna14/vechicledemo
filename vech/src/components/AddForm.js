import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  edittedVehicleData,
  editVehicleData,
  postVehicleData,
} from '../actions';

const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { editData } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (id) {
      dispatch(editVehicleData(id));
    }
  }, []);
  return (
    <div>
      <Formik
        initialValues={{
          vechno: id ? editData.vechno : '',
          lastName: id ? editData.lastName : '',
          colors: id ? editData.colors : '',
        }}
        validationSchema={Yup.object({
          vechno: Yup.string().required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          colors: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          if (id) {
            dispatch(edittedVehicleData(values, id));
            navigate('/');
          } else {
            dispatch(postVehicleData(values));
            navigate('/');
            resetForm();
          }
        }}
        enableReinitialize
      >
        <Form>
          <label htmlFor="firstName">Vehicle No.</label>
          <Field name="vechno" type="text" />
          <ErrorMessage name="vechno" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />

          <label htmlFor="model">Model</label>
          <Field name="colors" as="select" className="my-select">
            <option value="">Select model</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="colors" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddForm;
