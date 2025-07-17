import login from "../function/loginfunction";
import addtocart from '../pages/addtocart';
import checkout from "../function/checkoutfunchtion";
describe('',()=>{
    beforeEach('Visite the website',()=>{
        login();
    })
    it('Adding item to cart',()=>{
        addtocart.first_product().click();
        cy.contains('Added!').should('be.visible');
        cy.contains('Your product has been added to cart').should('be.visible');
        addtocart.continue_shopping().click();
        addtocart.second_product().click();
        addtocart.view_cart().click();
        checkout();
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
    })
})