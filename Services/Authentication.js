export const TOKEN_KEY = 'TOKEN';

export const isAuthenticated = _ => {
    return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = _ => {
    return localStorage.getItem(TOKEN_KEY);
};

export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const logout = _ => {
    localStorage.removeItem(TOKEN_KEY);
}