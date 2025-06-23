// import SideMenuComponent from "../components/common/sidemenu.component"; this file has be sento to base.page.js
import BasePage from "./base.page";


class DashboardPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/dashboard');
    }

}

export default DashboardPage; // has to be neccesary use ECMA rules
// module.exports = DashboardPage;