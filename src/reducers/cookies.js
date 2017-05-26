export const getCookies = (name) => {
  const result = document.cookie.match(new RegExp(`${name}=([^;]+)`));
  if (result !== null) {
    return JSON.parse(result[1]);
  }

  return [];
};

export const bakeCookie = (name, value, date) => {
  const cookies = getCookies(name);
  let json = '';
  if (Array.isArray(value)) {
    json = JSON.stringify(value);
  } else {
    cookies.push(value);
    json = JSON.stringify(cookies);
  }

  const expirey = date instanceof Date ? `; expires=${date}` : null;
  const cookie = [
    name,
    '=',
    json,
    '; domain_.',
    window.location.host.toString(),
    '; path=/;',
    expirey,
  ].join('');

  document.cookie = cookie;
};
