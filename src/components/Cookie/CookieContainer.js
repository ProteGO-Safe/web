import React from 'react';
import { useCookies } from 'react-cookie';
import Cookie from './Cookie';

const CookieContainer = () => {
  const [cookies, setCookie] = useCookies();
  const handleClick = () => {
    setCookie('cookieAccepted', true, { path: '/' });
  };
  return (
    cookies.cookieAccepted === undefined && (
      <Cookie onClick={handleClick}>
        Aplikacja ProteGO Safe używa ciasteczka (cookie). Więcej informacji
        znajduje się w polityce prywatności. Korzystanie z aplikacji oznacza
        zgodę na użycie ciasteczka.
      </Cookie>
    )
  );
};

export default CookieContainer;
