import actions from 'store/actions.store'
/**
 * Case reducers for manipulate global store context
 * @param {Object} state
 * @param {Object} action
 * */
export default function Reducer(state, action) {
    const { type, payload } = action

    // Verify action reducer type
    switch (type) {
        case actions.HISTORY_SET:
            return { ...state, history: payload }

        /**
         * Append new joke to history start
         */
        case actions.HISTORY_APPEND:
            const historyAppend = [payload, ...state.history]
            return { ...state, history: historyAppend }

        /**
         * Removing last element from history
         */
        case actions.HISTORY_POP:
            const historyPop = Array.from(state.history).splice(-1, 1)
            return { ...state, history: historyPop }

        /**
         * Storing categories list
         */
        case actions.CATEGORIES_SET:
            return { ...state, categories: payload }

        default:
            return state
    }
}
