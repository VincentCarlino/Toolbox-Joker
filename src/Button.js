import { ACTIONS } from "./App";

export function Button({ dispatch, action, number, buttonText  }) {

    return (
        <div onClick={() => dispatch({ type: action , payload: { number }})}  className={"btn " + (action == ACTIONS.ADD_CHIPS ? 'btn-blue' : action == ACTIONS.ADD_MULT ? 'btn-red' : 'btn-red')}>
            {buttonText}
        </div>
    )

}