export const FILL_STATE_BOOL = 'FILL_STATE_BOOL';
export const FILL_STATE_USERDATA = 'FILL_STATE_USERDATA';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_UPDATE_PROFILE = 'SUBMIT_UPDATE_PROFILE';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';

export const fillStateUserData = (userData) => ({
  type: FILL_STATE_USERDATA,
  token: userData.token,
  displayName: userData.user_display_name,
  email: userData.user_email,
  nicename: userData.user_nicename,
});
export const fillState = (userData) => ({
  type: FILL_STATE_BOOL,
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
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});
export const submitUpdateProfile = () => ({
  type: SUBMIT_UPDATE_PROFILE,
});
