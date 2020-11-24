import React from "react";
import { connect } from "react-redux";
// importación de las acciones redux counter para setear dispatch
import { increment, decrement } from "../redux/actions/counter";

// destructuro las props que recibe a través del decorador
const Counter = ({ counter, inc, dec }) => {
  return (
    <>
      <h2>Contador: {counter} </h2>
      <button type="button" onClick={inc}>
        +
      </button>
      <button type="button" onClick={dec}>
        -
      </button>
    </>
  );
};

// map de las props, accedo a state y recupero counter
const mapStateToProps = (state) => {
  return { counter: state.counter };
};

// map de las props, seteo dispatch con
// las acciones importadas y les asigno un alias
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
  };
};

// Decora Counter con las props que recibira
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
