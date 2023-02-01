import { deleteData, editData, getData, postData } from '../service';

export const getVehicleData = () => async (dispatch) => {
  const { data } = await getData('vehicle');
  dispatch({
    type: 'VEHICLE_DATA',
    payload: data,
  });
};

export const postVehicleData = (data) => async (dispatch) => {
  await postData('vehicle', data);
  dispatch(getVehicleData());
};

export const deleteVehicleData = (id) => async (dispatch) => {
  await deleteData(`vehicle/${id}`);
  dispatch(getVehicleData());
};

export const editVehicleData = (id) => async (dispatch) => {
  const { data } = await getData(`vehicle/${id}`);
  //   console.log(data);
  dispatch({
    type: 'EDIT_VEHICLE_DATA',
    payload: data,
  });
};

export const edittedVehicleData = (data, id) => async (dispatch) => {
  await editData(`vehicle/${id}`, data);
  dispatch(getVehicleData());
};
