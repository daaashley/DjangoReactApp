import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "../actions/types.js";

const initialState = {
  leads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state, //includes everything in initialState object (spread operator)
        leads: action.payload
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload) //Return current leads, with payload(deleted) filtered out
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload] //Add current state plus new lead payload
      };
    default:
      return state;
  }
}
