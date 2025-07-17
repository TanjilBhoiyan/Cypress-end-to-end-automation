class SignUpPage{
    signup(){
       return cy.get('.fa.fa-lock');
    }
    name(){
        return cy.get('[data-qa="signup-name"]');
    }
    email(){
        return cy.get('[data-qa="signup-email"]');
    }
    signupbutto(){
        return cy.get('[data-qa="signup-button"]');
    }
    title(){
        return cy.get(':nth-child(3) > .top > [data-qa="title"]')
    }
    password(){
        return cy.get('[data-qa="password"]');
    }
    dateofbirthday(){
        return cy.get('[data-qa="days"]');
    }
    dateofbirthmonth(){
        return cy.get('[data-qa="months"]')
    }
    dateofbirthyear(){
        return cy.get('[data-qa="years"]');
    }
    newsletterChekBox(){
        return cy.get('#newsletter');
    }
    specialoffersCheckBox(){
        return cy.get('#optin');
    }
    firstname(){
        return cy.get('[data-qa="first_name"]');
    }
    lastname(){
        return cy.get('[data-qa="last_name"]')
    }
    company(){
        return cy.get('[data-qa="company"]');
    }
    address(){
        return cy.get('[data-qa="address"]');
    }
    address2(){
        return cy.get('[data-qa="address2"]');
    }
    country(){
        return cy.get('[data-qa="country"]');
    }
    state(){
        return cy.get('[data-qa="state"]');
    }
    city(){
        return cy.get('[data-qa="city"]');
    }
    zipcode(){
        return cy.get('[data-qa="zipcode"]');
    }
    mobilenumber(){
        return cy.get('[data-qa="mobile_number"]');
    }
    createAccoutnButton(){
        return cy.get('[data-qa="create-account"]');
    }
    successmgs(){
        return cy.get('b');
    }
}
export default new SignUpPage;