import React from "react";
import { connect } from "react-redux";
import { modifyUsers } from "./../redux/actions/users";

const Users = ({ nombre, apellido, modify }) => {
  // función encargada de ejecutar modify
  const handlerInput = (e) => {
    // le pasamos de manera dinamica el value a cada name
    modify({ [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>
        Usuario: {nombre} {apellido}
      </h2>
      <input
        type="text"
        name="nombre"
        placeholder="nombre"
        onChange={handlerInput}
      />
      <input
        type="text"
        name="apellido"
        placeholder="apellido"
        onChange={handlerInput}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // alias de las props de state.users
    nombre: state.users.nombre,
    apellido: state.users.apellido,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // modify recibe el payload
    modify: (payload) => {
      dispatch(modifyUsers(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
