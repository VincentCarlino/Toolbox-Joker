/**
 * 
 * A Hand has:
 * 
 * Name
 * Criteria
 * Chips
 * Mult
 * Number Times Played
 * 
 */



/**
 * Example Hand:
 * 
 * Name: Straight
 * Criteria: isStraight(playedHand)
 * Chips: 
 * Mult:
 */

/**
 * On card selection:
 * 
 * For each hand type in order of priority:
 * - Does the played hand meet the criteria?  Set hand name, base chips and mult
 * 
 * Hand type ranks:
 * - Straight Flush
 * - Four of a Kind
 * - Full House
 * - Flush
 * - Straight
 * - Three of a Kind
 * - Two Pair
 * - Pair
 * - High Card
 * 
 */


/**
 * Example scoring:
 * 
 * Determine what hand is being scored
 * 
 * For each card in hand:
 * - Add chips (Base + Enhancements)
 * - Add mult (Base + Enhancements)
 * - Mult mult (polychrome)
 * - For each joker:
 *      - Does the card satisfy a trigger condition?
 *      - If so, execute joker effect
 * 
 * For each joker:
 * - Did the hand trigger an effect?
 * - If so, execute joker effect
 * 
 * Score = Chips * Mult
 * 
 * TotalScore += Score
 * TotalScore >= Blind ? CashOut()
 */