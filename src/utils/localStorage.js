export const token_key = 'OASM_TOKEN';

export const setToken = (token) => {
  window.localStorage.setItem(token_key, token);
};

export const getToken = () => {
  return window.localStorage.getItem(token_key);
};

export const isLogin = () => {
  return getToken();
};

export const logout = () => {
  window.localStorage.clear();
};
