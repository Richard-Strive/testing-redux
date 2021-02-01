import { myFirstState } from "../states-storage";

//All'interno del mio paccheto switch case vado a definire la parole "magiche e le loro funzioni" da poterle chiamare cosi direttamente nelle funzioni.

export const myReducer = (state = myFirstState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

// il "default" server a mandare qualcosa, qualora non venisse chiamata una delle suddette "parole magiche", nel suo stato inziale cioe' intatto.
