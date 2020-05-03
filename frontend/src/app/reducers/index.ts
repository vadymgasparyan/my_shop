import {combineReducers} from 'redux';
import trashState from './../../pages/Main/reducers';
import adminState from './../../pages/Admin/reducers';
import modalState from './../../components/Modals/redusers';

const rootReducer = combineReducers({
    trashState,
    modalState,
    adminState
});

export interface AppState {}

export default rootReducer;