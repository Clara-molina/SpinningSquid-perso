export const CHECK_USER = 'CHECK_USER';
export const GET_USER_INFO = 'GET_USER_INFO';
export const FILL_STATE_USERDATA = 'FILL_STATE_USERDATA';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_UPDATE_PROFILE = 'SUBMIT_UPDATE_PROFILE';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER';

export const fillState = (userData) => ({
  type: FILL_STATE_USERDATA,
  userData: userData,
});

export const updateField = (fieldName, fieldValue) => ({
  type: UPDATE_FIELD,
  fieldName: fieldName,
  fieldValue: fieldValue,
});

export const successLogin = (tokenAPI, isLogged, usernameConnexion) => ({
  type: SUCCESS_LOGIN,
  token: tokenAPI,
  isLogged: isLogged,
  username: usernameConnexion,
});

export const submitLogout = (tokenAPI, isLogged, usernameConnexion) => ({
  type: SUCCESS_LOGOUT,
  token: tokenAPI,
  isLogged: isLogged,
  username: usernameConnexion,
});

export const successRegister = (
  isLogged,
  usernameInscription,
  passwordInscription,
  email,
  lastname,
  firstname,
  street,
  postal,
  city,
) => ({
  type: SUCCESS_REGISTER,
  isLogged: isLogged,
  username: usernameInscription,
  password: passwordInscription,
  email: email,
  lastname: lastname,
  firstname: firstname,
  street: street,
  postal: postal,
  city: city,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});

export const submitUpdateProfile = () => ({
  type: SUBMIT_UPDATE_PROFILE,
});
export const checkUserUpdateProfile = () => ({
  type: CHECK_USER,
});
export const getUserDataProfile = () => ({
  type: GET_USER_INFO,
});
