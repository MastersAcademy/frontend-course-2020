export function createStore(reducer, initialState) {
    let state = initialState;
    return {
        dispatch: (action, payload) => {
            state = reducer(state, { action, payload });
        },
        getState: () => state,
    };
}
