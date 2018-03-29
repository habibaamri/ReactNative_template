
  // ElementListActions.js

  import * as actionTypes from './actionsTypes';



  export const deleteElement = (id) => {
      return {
          type: actionTypes.REMOVE_ElEMENT,
          id: id
      }
  }
