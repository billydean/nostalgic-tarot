const data = require('../data/data');

const {cardData} = data;
async function getCardInfo(card_id) {

    const card = cardData[card_id];

    return card;
}

module.exports = { getCardInfo }