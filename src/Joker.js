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