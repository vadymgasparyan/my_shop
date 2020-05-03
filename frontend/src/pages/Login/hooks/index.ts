import {useDispatch} from 'react-redux';

import {userLogin} from '../actions';
import {LoginInterface, LoginPageActionsType} from '../types/indes';

export default function (): LoginPageActionsType {
    const dispatch = useDispatch();

    return {
        login: (value: LoginInterface) =>
            dispatch(userLogin(value)),
    };
}
