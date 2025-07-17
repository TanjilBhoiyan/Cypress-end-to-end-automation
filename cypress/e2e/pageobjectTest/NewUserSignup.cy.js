import visitepage from '../pages/visitpage'
import SignUpPage from '../pages/signuppage'

const inputdata = require('../../fixtures/example.json');

describe('New User Signup!',()=>{
    beforeEach('Open website',()=>{
        visitepage.visitWebsite()
    })

    it('Successful Signup',()=>{
        //go to the signup page 
        SignUpPage.signup().click();

        // Step 1: name & email
        SignUpPage.name().type(inputdata.name);
        SignUpPage.email().type(inputdata.email);
        SignUpPage.signupbutto().click();

        // Step 2: Account Information
        SignUpPage.title().click();
        SignUpPage.password().type(inputdata.Password);
        SignUpPage.dateofbirthday().select(inputdata.dateofbirthday);
        SignUpPage.dateofbirthmonth().select(inputdata.dateofbirthmonth);
        SignUpPage.dateofbirthyear().select(inputdata.dateofbirthyear);
        SignUpPage.newsletterChekBox().click();
        SignUpPage.specialoffersCheckBox().click();

        // step 3: Address Information
        SignUpPage.firstname().type(inputdata.firstname);
        SignUpPage.lastname().type(inputdata.lastname);
        SignUpPage.company().type(inputdata.company);
        SignUpPage.address().type(inputdata.address);
        SignUpPage.address2().type(inputdata.address2);
        SignUpPage.country().select(inputdata.country);
        SignUpPage.state().type(inputdata.state);
        SignUpPage.city().type(inputdata.city);
        SignUpPage.zipcode().type(inputdata.zipcode);
        SignUpPage.mobilenumber().type(inputdata.mobile_number);
        SignUpPage.createAccoutnButton().click();
        SignUpPage.successmgs().should('contain','Account Created!')
    })
})