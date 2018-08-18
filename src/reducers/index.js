export default (state, action) => {
  
    switch (action.type) {
      
      case "WITHDRAW":
        return {
          ...state,
          totalAmount: state.totalAmount - action.payload
        };
      case "BANKRUPTCY":
        return {
          ...state,
          totalAmount: state.totalAmount - action.payload,
          
        }
      default:
        return state;
    }
   }
   