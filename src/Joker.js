/*
A Joker has:
enumName: ie Joker.JOKER, Joker.BULL, Joker.WEE
triggerCondition: when does the joker's effect activate ie. certain suit is scored, certain rank is scored
chipAdd: How many chips are added when this is scored
multAdd: How many mult are added when this is scored
multMult: How much the current mult will be multiplied by when this is scored
These three values can be functions ie. Bull joker scales off current $$$ -> chipAdd = 2*MONEY

*/


/**
 * Example Jokers
 * 
 * Name: Queen Bee Joker
 * enum: Joker.QUEEN_BEE
 * desc: +4 mult when Queen is scored, +20 chips when Jack is scored
 * triggerCondition: OR(RankIs(Queen), RankIs(Jack))
 * chipAdd: +20*(RankIs(Jack))
 * multAdd: +4*(RankIs(Queen))
 * multMult: 1
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
import { Tooltip } from 'react-tooltip';

import JokersData from './JokersData';
import jokers from './assets/Jokers.png';
import editions from './assets/Editions.png';
import {useState} from 'react';

const jokerSpriteSheetURL = "url(" + jokers + ") ";
const editionSpriteSheetURL = "url(" + editions + ") ";

function xyCoordinates(x, y) {

  return ("-" + (x * 71) + "px -" + (y * 94) + "px;");
}

function X(x) {
  return "-" + (x * 71) + "px ";
}

function Y(y) {
  return " -" + (y * 95) + "px";
}


export const EDITIONS = {
    COMMON: '',
    FOIL: editionSpriteSheetURL + "-71px 0px, ",
    HOLOGRAPHIC: editionSpriteSheetURL + "-142px 0px, ",
    POLYCHROME: editionSpriteSheetURL + "-213px 0px, ",
  }


export function CardDesc ({ name, desc, anchor }) {
    return (<Tooltip anchorSelect={ anchor } place="top" className='hoverDescription' noArrow={true} opacity="1.0" style={{ width: "200px" }}>
        <h2>{name}</h2>
        <p>{desc}</p>
    </Tooltip>)
}

export function Joker({ x, y , dispatch, action, hoverTilt = false, edition = EDITIONS.COMMON, negative = false, debuffed = false}) {
    const jokerData = JokersData[y][x];
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const onMouseMove = (e) => {
        let rect = e.currentTarget.getBoundingClientRect();
        let mx = e.clientX - rect.left;
        let my = e.clientY - rect.top;
        setMouseY((mx - rect.width / 2) / 4);
        setMouseX(- (my - rect.height / 2) / 4);

    };

    const onMouseLeave = (e) => {
        setMouseX(0);
        setMouseY(0);

    };
    const background = edition + jokerSpriteSheetURL + X(x) + Y(y);
    
    return (
        <div className="JokerCardContainer" onClick={() => dispatch({ type: action , payload: { x, y, edition }})}>
            <div className={jokerData.name.replace(/\s+/g, '') + " JokerCard"} style={{ background: background, backgroundBlendMode: "color", transform: "perspective(100px) rotateX(" + mouseX + "deg) rotateY(" + mouseY + "deg)"}} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}></div>
        </div>
    )
} 