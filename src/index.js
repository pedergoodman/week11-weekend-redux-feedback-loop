import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux imports
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'

// SURVEY REDUCER
const survey = (state = { feeling: '', understanding: '', support: '', comment: '' }, action) => {
    switch (action.type) {
        case 'FEELING':
            return { ...state, feeling: action.payload }
            break;
        case 'UNDERSTANDING':
            return { ...state, feeling: action.payload }
            break;
            case 'SUPPORT':
            return { ...state, feeling: action.payload }
            break;
        case 'COMMENT':
            return { ...state, feeling: action.payload }
            break;
        case 'CLEAR':
            return { feeling: '', understanding: '', support: '', comment: '' }
            break;
        default:
            return state;
            break;
    }
}

// STORE
const store = createStore(
    combineReducers({
        survey
    }), applyMiddleware(logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
