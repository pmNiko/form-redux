// importación de la acción
import { MODIFY_USER } from "../actions/users";

const initialState = {
  nombre: "",
  apellido: "",
};
// reducer counter
const users = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case MODIFY_USER:
      return {
        // estado previo para guardarlo
        ...state,
        // payload viene dentro de action
        ...action.payload,
      };
    default:
      return state;
  }
};

export default users;
