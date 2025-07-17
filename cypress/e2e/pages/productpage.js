class Productpage{
    products_button(){
        return cy.get('.shop-menu > .nav > :nth-child(2) > a');
    }
    search_product(){
        return cy.get('#search_product');
    }
    search_button(){
        return cy.get('#submit_search');
    }
}
export default new Productpage;