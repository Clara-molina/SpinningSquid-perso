export const UPDATE_FIELD = "UPDATE_FIELD";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";

export const updateField = (fieldName, fieldValue) => ({
  type: UPDATE_FIELD,
  fieldName: fieldName,
  fieldValue: fieldValue,
});
export const successLogin = (name) => ({
  type: SUCCESS_LOGIN,
  name: name,
});
