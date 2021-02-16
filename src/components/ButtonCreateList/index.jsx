import React from 'react';
import getToken from 'lib/tokens';
import { useHistory } from 'react-router-dom';

function ButtonCreateList() {
  let history = useHistory();
  const createNewList = function () {
    const Token = getToken();
    localStorage.setItem('tcl18-token', Token);
    history.push('/list-view');
  };

  return <button onClick={createNewList}>Create shopping list</button>;
}

export default ButtonCreateList;
