// acción del reducer userReducer
export const MODIFY_USER = "MODIFY_USER";

// acción que ejecutará el dispatcher
// payload llegara como param a nuestro actionCreator
// payload es el data que llega desde la vista
export const modifyUsers = (payload) => {
  return {
    type: MODIFY_USER,
    payload,
  };
};
