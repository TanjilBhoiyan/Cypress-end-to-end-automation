class addtocard{
    first_product(){
        return cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn');
    }
    second_product(){
        return cy.get('.features_items > :nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn');
    }
    continue_shopping(){
        return cy.get('.modal-footer > .btn');
    }
    view_cart(){
        return cy.get('u');
    }
}
export default new addtocard;