const router = require('express').Router();
const model = require('./model');

router.get('/:card_id', (req,res,next)=>{
  model.getCardInfo(req.params.card_id)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.use((err,req,res,next)=> { // eslint-disable-line
  res.status(500).json({
    debugMessage: 'Something happened in the router',
    message: err.message,
    stack: err.stack,
  })
})

// router.get('/hello', async (_req, res) => {
//   res.status(200).json({ message: 'Hello World!' });
// });

module.exports = router;