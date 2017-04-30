export default ({ api }) => {
  api.get('/paysucess', (req, res) => {
    res.render('paymentSucess', {});
  });

  api.post('/charge', (req, res) => {
    const token = req.body.stripeToken;
    const chargeAmount = req.body.chargeAmount;
    const charge = stripe.charge.create(
      {
        amount: chargeAmount,
        currency: 'egp',
        source: token
      },
      (err, charge) => {
        if (err & (err.type === 'StripeCardError')) {
          console.log('Invalid');
        }
      }
    );
    console.log('yes');
    res.redirect('/paysucess');
  });
};
