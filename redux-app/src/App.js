import { connect } from "react-redux";
import { Icon, InlineIcon } from "@iconify/react";
import reduxIcon from "@iconify-icons/simple-icons/redux";

import "./App.css";

// Nella mia componente vengo a connettere ed utlizzare, se e' necessario, le "parole magiche" dentro il mio file reducer

//mapStateToProps e' una funzione che ritorna un obj che contiene gli stati
const mapStateToProps = (state) => ({ count: state.counter });

//Qui andiamo a chiamare tutte le nostre parole magiche senza specificare la loro funzioni.
const mapDispatchToProps = (dispatch) => ({
  increment: () =>
    dispatch({
      type: "INCREMENT",
    }),

  decrement: () =>
    dispatch({
      type: "DECREMENT",
    }),
});

//MI CHIAMO LE MIE PAROLE MAGICE DENTRO LA MIA COMPONENTE PASSANDOLE COME PARAMETRI
function App({ increment, decrement, count }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>REDUX TESTING</h1>
        <Icon icon={reduxIcon} className="redux_app" />
        <button onClick={increment} style={{ marginTop: "0px" }}>
          CLICK ME AND SEE
        </button>
        <p className="counter">{count}</p>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//qui colleghiamo lo stato e le parole magiche alla nostra applicazione
