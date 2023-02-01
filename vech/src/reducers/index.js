import { combineReducers } from 'redux';

const dummy = () => '';
const initial = {
  data: [],
  editData: {},
};

export const postReducer = (state = initial, action) => {
  switch (action.type) {
    case 'VEHICLE_DATA':
      return { ...state, data: action.payload };
    case 'EDIT_VEHICLE_DATA':
      return { ...state, editData: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ dummy, postReducer });
