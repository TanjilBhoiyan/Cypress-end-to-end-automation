import visitpage from "../pages/visitpage"
import SignUpPage from "../pages/signuppage";

const inputdata = require('../../fixtures/example.json');

function login(){
    visitpage.visitWebsite();
    SignUpPage.signup().click();
    SignUpPage.login_email().type(inputdata.email);
    SignUpPage.login_password().type(inputdata.Password);
    SignUpPage.login_button().click();  
}
export default login;