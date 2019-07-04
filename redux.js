const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
	key: 1,
	value: 125
};

//reducer

const rootReducer = (state = initialState, action) => {
	if (action.type === "INCREMENT") return action.payload;
	return state;
};

//store

const store = createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(() => {
	console.log("[Subscription]", store.getState());
});

//dispatching action

store.dispatch({
	type: "INCREMENT",
	payload: {
		key: 2,
		value: 550
	}
});
console.log(store.getState());
