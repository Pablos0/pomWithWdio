import DashboardPage from "./dashboard.page.js";
import DoctorsPage from "./doctors.page.js";


/** 
 * 
 * @param name {'dashboard' | 'doctors'}  
 * @returns {DashboardPage | DoctorsPage}
 */


function pages(name) {

    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage()
    }
    return items[name.toLowerCase()];
}

export default {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage()
}