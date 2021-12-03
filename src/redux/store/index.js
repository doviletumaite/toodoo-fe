import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import userReducer from "../reducers/user.js"
import postReducer from "../reducers/post.js";
import commentReducer from "../reducers/genericUserReducer.js";
import genericUserReducer from "../reducers/genericUserReducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
    userInfo: {
        _id: "",
        username: "",
        email: "",
        profilePicture: "",
        bio: ""
      },
      post: {
        posts: [] ,
        comments: []
      },
      genericUserInfo: {
        user: {}
      },
      // post: {
      //   _id:"",
      //   text:"",
      //   picture: "",
      //   user: {},
      //   comments: []
      // },
    
};

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};
const bigReducer = combineReducers({
    userInfo: userReducer,
    post: postReducer,
    genericUserInfo: genericUserReducer
  })
const persistedReducer = persistReducer(persistConfig, bigReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(configureStore)

export { configureStore, persistor }