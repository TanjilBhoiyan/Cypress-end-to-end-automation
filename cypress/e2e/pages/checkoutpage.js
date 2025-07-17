class checkout{
    proceedtocheckout(){
        return cy.get('.col-sm-6 > .btn');
    }
    placeorder(){
        return cy.get(':nth-child(7) > .btn');
    }
    nameOncard(){
        return cy.get('[data-qa="name-on-card"]');
    }
    cardnumber(){
        return cy.get('[data-qa="card-number"]');
    }
    cvc(){
        return cy.get('[data-qa="cvc"]');
    }
    expire_month(){
        return cy.get('[data-qa="expiry-month"]');
    }
    expire_year(){
        return cy.get('[data-qa="expiry-year"]');
    }
    confirm_order(){
        return cy.get('[data-qa="pay-button"]');
    }
}
export default new checkout;