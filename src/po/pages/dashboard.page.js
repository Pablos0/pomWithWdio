import SideMenuComponent from "../components/common/sidemenu.component";
import BasePage from "./base.page";


class DashboardPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/dashboard')
        this.sideMenu = new SideMenuComponent();
    }

    /* async open() {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    }
     constructor() {
        super('/showcase/angular/appointmentplanner/#/dashboard');
    } */

}

export default DashboardPage; // has to be neccesary use ECMA rules
// module.exports = DashboardPage;