import restApi from '../../../services';

import {LoginInterface} from '../types/indes';

export function userLogin(data: LoginInterface): any {
    return function (dispatch: any): Promise<any> {
        return new Promise((resolve, reject) => {
            restApi
                .post('/login', {email: data.email, password: data.password})
                .then((response) => {
                    resolve();
                })
                .catch(reject)
        });
    };
}
