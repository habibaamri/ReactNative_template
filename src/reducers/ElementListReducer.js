// ElementListReducer.js

import * as actionTypes from '../actions/actionsTypes';

export default (state = listArray, action) => {

    switch (action.type){

      case actionTypes.REMOVE_ElEMENT:
            return state.filter((data, i) => i !== action.id);
            
      default:
            return state;
    }
};
  //array
const listArray = [
    { "id" : 1, "word": "JAVA"},
    { "id" : 2, "word": "JAVA EE"},
    { "id" : 3, "word": "JAVA ME"},
    { "id" : 4, "word": "Spring"},
    { "id" : 5, "word": "Sping MVC"},
    { "id" : 6, "word": "Spring Boot"},
    { "id" : 7, "word": "JSF"},
    { "id" : 8, "word": "EJB"},
    { "id" : 9, "word": "Hibernate"},
    { "id" : 10, "word": "Maven"},
    { "id" : 11, "word": "JPA"},
    { "id" : 12, "word": "Struts"},
    { "id" : 13, "word": "Angular"},
    { "id" : 14, "word": "Electron"},
    { "id" : 15, "word": "ReactJs"},
    { "id" : 16, "word": "React Native"},
    { "id" : 17, "word": "Native Script"},
    { "id" : 18, "word": "Ionic"},
    { "id" : 19, "word": "Android"},
    { "id" : 20, "word": "Objective C"},
    { "id" : 21, "word": "C"},
    { "id" : 22, "word": "Angular"},
    { "id" : 23, "word": "Electron"},
    { "id" : 24, "word": "ReactJs"},
    { "id" : 25, "word": "React Native"},
    { "id" : 26, "word": "Native Script"},
    { "id" : 27, "word": "Ionic"},
    { "id" : 28, "word": "Android"},
    { "id" : 29, "word": "Objective C"},
    { "id" : 30, "word": "C"},
    { "id" : 31, "word": "Angular"},
    { "id" : 32, "word": "Electron"},
    { "id" : 33, "word": "ReactJs"},
    { "id" : 34, "word": "React Native"},
    { "id" : 35, "word": "Native Script"},
    { "id" : 36, "word": "Ionic"},
    { "id" : 37, "word": "Android"},
    { "id" : 38, "word": "Objective C"},
    { "id" : 39, "word": "C"},
  ];
