import login from "../function/loginfunction";
import Productpage from "../pages/productpage";
const inputdata = require('../../fixtures/product.json');
describe('Product search',()=>{
    beforeEach('Login the webstite',()=>{
        login();
    })
    
    it('Searching product from all products',()=>{
        Productpage.products_button().click();
        Productpage.search_product().type(inputdata.first_product_search);
        Productpage.search_button().click();
        cy.contains(inputdata.first_product_search).should('exist');
    })
})