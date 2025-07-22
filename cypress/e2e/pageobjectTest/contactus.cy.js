import login from "../function/loginfunction";
import contactus from "../pages/contactus";

import 'cypress-file-upload';

const inputdata = require('../../fixtures/example.json');
const inputdata2 = require('../../fixtures/contact.json');
const inputpicture= 'file/picture1.jpg';


describe('',()=>{
    beforeEach('',()=>{
        login();
    })
    it('Success Contact Us',()=>{
        contactus.contactbutton().click();
        contactus.coutact_name().type(inputdata.name);
        contactus.contrac_email().type(inputdata.email);
        contactus.contact_subject().type(inputdata2.contact_subject);
        contactus.contact_message().type(inputdata2.contact_message);
        contactus.choose_file().attachFile(inputpicture);
        contactus.submit_button().click();
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
    })
})