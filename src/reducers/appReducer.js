const initialState = {
    comments: [{
        name: 'jam',
        comment: 'bla bla bla'
    }]
};
export default function appReducer(
    state =  initialState,
    action
) {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case 'ADD_COMMENT':
        return {
            ...state,
            comments: [
                ...state.comments,
                {
                    name: action.name,
                    comment: action.comment
                }
            ]
        };

        default:
            return state;
    }
}
