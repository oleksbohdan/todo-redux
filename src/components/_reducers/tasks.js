let taskIndexes = 0;
const initialState = [];
export default function tasks(state = initialState, action){
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: taskIndexes++,
                    task: action.payload,
                    isDone: false
                }];
        case 'MARK_AS_DONE':
            // const search = state.find(task => task.id === Number(action.payload));
            // const index = state.indexOf(search);
            // let found = state.splice(index, 1);
            // found[0].isDone = true;
            // state.splice(index, 0, found[0]);
            state.find(task => task.id === Number(action.payload)).isDone = true;
            return [...state];
        case 'DELETE_TASK':
            const search = state.find(task => task.id === Number(action.payload));
            const index = state.indexOf(search);
            state.splice(index, 1);
            return [...state];
        default: return state;
    }
}