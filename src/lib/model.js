const db = require('../data/config');

async function getCardInfo(card_id) {
    const card = await db('cards')
        .where('cards.id', card_id)
        .select();

    return {
        title: card.card_title,
        reading: card.card_text,
        url: card.image_url
    }
}

module.exports = { getCardInfo }