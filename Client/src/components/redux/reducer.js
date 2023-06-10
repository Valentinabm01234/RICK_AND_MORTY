import { ADD_FAV,FILTER, ORDER, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload
            }    

            case REMOVE_FAV:
                return { 
                    ...state, 
                    myFavorites: payload
                }

            case FILTER:
                const allCharactersFiltered = state.allCharacters.filter(character => 
                character.gender === payload)
                return{
                    ...state, 
                    myFavorites: 
                    payload === 'allCharacters' 
                    ? [...state.allCharactersFav]
                    : allCharactersFiltered
                }
                
            case ORDER:
                const allCharactersFavCopy = [...state.allCharactersFav]
                return {
                    ...state,
                    myFavorites: 
                        payload === 'A'
                        ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                        : allCharactersFavCopy.short((a, b) => b.id - a.id)
                }    

        default:
            return {...state}
    }
}


export default reducer;