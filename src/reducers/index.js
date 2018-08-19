export default (state, action) => {
  
    switch (action.type) {
      
      case "WITHDRAW":
        return {
          ...state,
          totalAmount: state.totalAmount - action.payload
        };
      case "BANKRUPTCY":
      console.log("action: ", action.payload, "state amount: ", state.totalAmount)
        return {
          ...state,
          totalAmount: state.totalAmount - action.payload,
          
        }
      default:
        return state;
    }
   }
   