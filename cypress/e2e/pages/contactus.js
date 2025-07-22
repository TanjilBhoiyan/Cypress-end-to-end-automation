class contactus{
    contactbutton(){
        return cy.get(':nth-child(9) > a');
    }
    coutact_name(){
        return cy.get('[data-qa="name"]');
    }
    contrac_email(){
        return cy.get('[data-qa="email"]');
    }
    contact_subject(){
        return cy.get('[data-qa="subject"]');
    }
    contact_message(){
        return cy.get('[data-qa="message"]');
    }
    choose_file(){
        return cy.get(':nth-child(6) > .form-control');
    }
    submit_button(){
        return cy.get('[data-qa="submit-button"]');
    }
}
export default new contactus;