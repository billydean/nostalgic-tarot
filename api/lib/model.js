const db = require('../data/config');

async function getCardInfo(card_id) {
    const cardQuery = await db('cards')
        .where('cards.id', card_id)
        .first()
    
    const card = {
        title: cardQuery.card_title,
        reading: cardQuery.card_text,
        url: cardQuery.image_url
    }

    return card;
}

module.exports = { getCardInfo }