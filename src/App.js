import { useReducer } from 'react';
import { Button } from './Button';
import './App.scss';
import jokers from './assets/Jokers.png';

export const ACTIONS = {
  ADD_CHIPS: 'ADD_CHIPS',
  ADD_MULT: 'ADD_MULT',
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
        currentMult: 0

      }
  }
}


const jcardsDiv = document.getElementById('jokers');


function jokerString(i, j, modifiers) {
  // let jmodifierClass = '';

  // let jmodifierString = 'url(assets/Jokers.png) 0px -855px, ';
  // let jmodifierPostString = '';

  // if(modifiers.foil) {
  //   jmodifierPostString = 'url(assets/Editions.png) -71px 0, ';
  // }
  // else if(modifiers.holographic) {
  //   jmodifierPostString = 'url(assets/Editions.png) -142px 0, ';
  // }
  // else if(modifiers.polychrome) {
  //   jmodifierClass = ' polychrome';
  //   jmodifierPostString = 'url(assets/Editions.png) -213px 0, ';
  // }
  // else if(modifiers.disabled) {
  //   jmodifierPostString = 'url(assets/Editions.png) 71px 0, ';
  // }
  // else {
  //   jmodifierPostString = '';
  // }

  // switch(`${i},${j}`) {
  //   case '8,3': jmodifierString = `url(assets/Jokers.png) -${71*3}px -${95*9}px, `; break;
  //   case '8,4': jmodifierString = `url(assets/Jokers.png) -${71*4}px -${95*9}px, `; break;
  //   case '8,5': jmodifierString = `url(assets/Jokers.png) -${71*5}px -${95*9}px, `; break;
  //   case '8,6': jmodifierString = `url(assets/Jokers.png) -${71*6}px -${95*9}px, `; break;
  //   case '8,7': jmodifierString = `url(assets/Jokers.png) -${71*7}px -${95*9}px, `; break;
  //   case '12,4': jmodifierString = `url(assets/Jokers.png) -${71*2}px -${95*9}px, `; break;
  // }
  return `style="mask-position:  -${71*j}px -${95*i}px; background: url(assets/Jokers.png) -${71*j}px -${95*i}px"`;
}

function JokerList() {

  const Jokers = [] 

  for(let i = 0; i < 16; i++) {
    if(i === 9) {i++;}
    for(let j = 0; j < 10; j++) {
      Jokers.push(<div className="jokerCard" style={{backgroundPositionX: "-" + (i * 71) + "px", backgroundPositionY: "-" + (j * 95) + "px"}}></div>)
    }
  }
  return (
    <div className="jokers">
      {Jokers}
    </div>
  )
}

// function drawJokers() {
//   let txt = '<div className="flex">';
//   let count = 0;
//   for(let i = 0; i < 16; i++) {
//     if(i === 9) {i++;}
//     for(let j = 0; j < 10; j++) {
//       // const title = (jokerTexts.length > i && jokerTexts[i].length > j) ? jokerTexts[i][j][0] : 'WIP';
//       // const description = (jokerTexts.length > i && jokerTexts[i].length > j) ? eval('`' + jokerTexts[i][j][1] + '`') : 'WIP';
//         txt += `<div class="jokerCard" ${jokerString(i, j)}></div>`;
//         count++;
//         if(count >= 10) {
//           count = 0;
//           txt += '</div><div>';
//         }
//       }
//     }
//   }
//   txt += '</div>';
  // jcardsDiv.innerHTML = txt;



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
        <JokerList />
        {/* <img src={jokers} className="jokers"/> */}
        </div>
    </div>
  );
}

export default App;
