import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const defaultObj = {
    count:0,
    menu:{
        toggle:false,
    }
}
const reducer = (state = defaultObj,action) => {
    switch (action.type) {
        case 'add':
            state.count += 1;
            return Object.assign({}, state) 
        case 'del':
            state.count -= 1;
            return Object.assign({}, state) 
        case 'changeToggle':
            state.menu.toggle = !state.menu.toggle;
            return Object.assign({}, state)
        case 'asyncCount':
            state.count = Date.now();
            return Object.assign({}, state) 
            
        default:
            return state;

    }
}

const store = createStore(reducer, applyMiddleware(thunk,logger));
export default store;