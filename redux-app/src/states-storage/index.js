import { createStore } from "redux";
import { myReducer } from "../reducer";
// Definsisco le proprieta' del mio state ed i loro valori
export const myFirstState = {
  counter: 0,
};

//La configurazione prende 3 parametri
/**
 * IL REDUCERE
 * LO STATE INIZIALE
 * IL CONFIGURATORE DEL DEVTOOL
 */
const configStore = () =>
  createStore(
    myReducer,
    myFirstState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configStore;
