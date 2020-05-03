export interface LoginPageActionsType {
    login: (valueType: LoginInterface) => any;
}

export interface LoginInterface {
    email: string;
    password: string;
}
