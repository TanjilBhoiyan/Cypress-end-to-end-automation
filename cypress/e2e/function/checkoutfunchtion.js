import checkoutpage from '../pages/checkoutpage';

const inputdata = require('../../fixtures/checkout.json');

function checkout(){
    checkoutpage.proceedtocheckout().click();
    checkoutpage.placeorder().click();
    checkoutpage.nameOncard().type(inputdata.nameOnCard);
    checkoutpage.cardnumber().type(inputdata.cardNumber);
    checkoutpage.cvc().type(inputdata.CVC);
    checkoutpage.expire_month().type(inputdata.expair_month);
    checkoutpage.expire_year().type(inputdata.expair_year);
    checkoutpage.confirm_order().click();
}
export default checkout;