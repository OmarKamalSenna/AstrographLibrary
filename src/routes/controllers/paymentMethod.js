import _ from 'lodash';
import jwt from '../../auth/jwt';


export default ({ api, db }) => {
    api.get('/paysucess',function(req,res){
        res.render('paymentSucess',{
     });
    });

    api.post('/charge',function(req,res){
        var token = req.body.stripeToken;
        var chargeAmount = req.body.chargeAmount;
        var charge = stripe.charge.create({
            amount : chargeAmount,
            currency : "egp",
            source : token
        },function(err,charge){
            if(err & err.type == "StripeCardError"){
                console.log("Invalid");
            }
        });
        console.log("yes")
        res.redirect('/paysucess')
    });
};