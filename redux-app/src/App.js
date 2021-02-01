import logo from "./logo.svg";
import { connect } from "react-redux";
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//qui colleghiamo lo stato e le parole magiche alla nostra applicazione
