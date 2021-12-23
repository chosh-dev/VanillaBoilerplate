const post = (url, body) =>
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

export const login = ({ id }) => post('/auth/login', { id });
export const test = () => fetch('/api/example');
