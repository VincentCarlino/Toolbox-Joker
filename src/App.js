import { useReducer } from 'react';
import { Button } from './Button';
import './App.scss';
import jokers from './assets/Jokers.png';

export const ACTIONS = {
  ADD_CHIPS: 'add_chips',
  ADD_MULT: 'add_mult',
  RESET: 'reset'
}

export const PARAMETERS = {
  CHIPS: 'chips',
  MULT: 'mult'
}

function reducer(state, { type, payload }) {
  switch(type) {
    case ACTIONS.ADD_CHIPS:
      return {
        ...state,
        currentChips: state.currentChips + payload.number

      }
      case ACTIONS.ADD_MULT:
      return {
        ...state,
        currentMult: state.currentMult + payload.number

      }
      case ACTIONS.RESET:
      return {
        ...state,
        currentChips: 0,
        currentMult: 0

      }
  }
}

function App() {
  const [{ currentChips, currentMult }, dispatch] = useReducer(reducer, { currentChips: 0, currentMult: 0 });
  return (
    <div className="app">
      <div className="crt crt-flicker"></div>
      <div className="page-container crt-bloom">
        <div className="flex scores">
          <div className="score total">{ (currentChips * currentMult).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</div>
        </div>
        <div className="flex scores">
          <div className="score score-chips">
            { currentChips }
          </div>
          <div className="times">
            X
          </div>
          <div className="score score-mult">
            { currentMult }
          </div>
        </div>
        <div className="buttons flex"> 
        <Button number={1} action={ACTIONS.ADD_CHIPS} buttonText='+1' dispatch={dispatch} />
        <Button number={10} action={ACTIONS.ADD_CHIPS} buttonText='+10' dispatch={dispatch} />
        <Button number={100} action={ACTIONS.ADD_CHIPS} buttonText='+100' dispatch={dispatch} />
        <Button number={100} action={ACTIONS.ADD_MULT} buttonText='+100' dispatch={dispatch} />
        <Button number={10} action={ACTIONS.ADD_MULT} buttonText='+10' dispatch={dispatch} />
        <Button number={1} action={ACTIONS.ADD_MULT}buttonText='+1'  dispatch={dispatch} />

        </div>
        <div className="flex">
          <Button action={ ACTIONS.RESET } buttonText="Reset" dispatch={dispatch} />
        </div>
        <div className="flex">
          <h1>Jokers</h1>
        </div>
        <img src={jokers} className="jokers"/>
        </div>
    </div>
  );
}

export default App;
