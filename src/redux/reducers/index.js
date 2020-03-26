import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { modal } from './modalReducer';
import { property } from './propertyReducer';

const rootReducer = combineReducers({ auth, modal, property });

export default rootReducer;
