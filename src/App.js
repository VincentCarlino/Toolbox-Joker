import { useReducer } from 'react';
import { Tooltip } from 'react-tooltip';

import JokersData from './JokersData';
import { Joker, CardDesc, EDITIONS } from './Joker';
import { Button } from './Button';
import { TextTransition } from './TextTransition';
import './App.scss';
import jokers from './assets/Jokers.png';

export const ACTIONS = {
  ADD_CHIPS: 'ADD_CHIPS',
  ADD_MULT: 'ADD_MULT',
  MULT_MULT: 'MULT_MULT',
  ADD_JOKER: 'ADD_JOKER',
  REMOVE_JOKER: 'REMOVE_JOKER',
  RESET: 'RESET'
}

export const HANDS = {
FLUSH_FIVE : 'FLUSH_FIVE',
FLUSH_HOUSE : 'FLUSH_HOUSE',
FIVE_OF_A_KIND : 'FIVE_OF_A_KIND',
STRAIGHT_FLUSH : 'STRAIGHT_FLUSH',
FOUR_OF_A_KIND : 'FOUR_OF_A_KIND',
FULL_HOUSE : 'FULL_HOUSE',
FLUSH : 'FLUSH',
STRAIGHT : 'STRAIGHT',
THREE_OF_A_KIND : 'THREE_OF_A_KIND',
TWO_PAIR : 'TWO_PAIR',
PAIR : 'PAIR',
HIGH_CARD : 'HIGH_CARD'
}

export const PARAMETERS = {
  CHIPS: 'CHIPS',
  MULT: 'MULT'
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
        currentMult: 0,
        currentJokers: []

      }
      case ACTIONS.ADD_JOKER:
      return {
        ...state,
        currentJokers: [...state.currentJokers, payload]
      }
      case ACTIONS.REMOVE_JOKER:
        state.currentJokers.pop();
      return {
        ...state,
        currentJokers: [...state.currentJokers]
      }
  }
}

const jokerSpriteSheet = "url(" + jokers + ") "

function xyCoordinates(x, y) {

  return ("-" + (x * 71) + "px -" + (y * 94) + "px;");
}

function X(x) {
  return "-" + (x * 71) + "px ";
}

function Y(y) {
  return " -" + (y * 95) + "px";
}

function App() {
  const [{ currentChips, currentMult, currentJokers }, dispatch] = useReducer(reducer, { currentChips: 0, currentMult: 0, currentJokers: [] });

  const JokerList = () => {

    const Jokers = [];
    const CardDescriptions = [];

    for(let i = 0; i < 13; i++) {
      if(i === 9) {i++;}
      for(let j = 0; j < 10; j++) {
        let jokerData = JokersData[i][j];
        if (i == 8 && j == 3) {
          Jokers.push(<div className="jokerCard" style={{ background: jokerSpriteSheet + X(j) + Y(i + 1) + ", url(" + jokers + ") " + "-" + (j * 71) + "px " + "-" + (i * 95) + "px"}}></div>)
        }
        else {
            
            CardDescriptions.push(<CardDesc name={jokerData.name} desc={jokerData.description} anchor={"." + jokerData.name.replace(/\s+/g, '')} />)
          Jokers.push(<Joker x={ j } y={ i } action={ACTIONS.ADD_JOKER} dispatch={dispatch}/>)
        }
      }
    }
    return (
      <>
      <>{CardDescriptions}</>
      <div className="jokers">
        {Jokers}
      </div>
      </>
    )
  }

  const currentJokerListItems = currentJokers.map(joker =>
    <Joker {...joker} action={ACTIONS.ADD_CHIPS} dispatch={dispatch} />
  );


  return (
    <div className="app">
      <div className=""></div>
      <div className="page-container crt-bloom">
        <div className="flex scores">
          <div className="score total shake">{ (currentChips * currentMult).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</div>
        </div>
        <div className="flex scores">
          <TextTransition text={ currentChips } className="score score-chips" />
          <div className="times">
            X
          </div>
          <TextTransition text={ currentMult } className="score score-mult" />
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
        <div className="flex flexCenter" style={{maxWidth: "360px", flexWrap: "wrap"}}>
          { currentJokers.map(joker =>
              <Joker {...joker} action={ACTIONS.REMOVE_JOKER} dispatch={dispatch}/>
  ) }
        </div>
        <div className="flex">
          <h1>Jokers</h1>
        </div>
        <JokerList />
        {/* <img src={jokers} className="jokers"/> */}
        </div>
    </div>
  );
}

export default App;
