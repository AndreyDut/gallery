import { initialStateApp } from "./appSlice";

const reducers = {

    setAppState(state, {payload}) {
        return {...state, ...payload}
    },

    resetAppState(state, {payload}) {
        switch (payload) {
            case "selectAlbum":
                state.selectAlbum = null;
                break;      
            default:
                return initialStateApp;
        }
    }
        
};

export default reducers;