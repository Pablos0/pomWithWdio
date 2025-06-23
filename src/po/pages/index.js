import DashboardPage from "./dashboard.page";
import DoctorsPage from "./doctors.page";


/**
 * 
 * @param {'dashboard' | 'doctors'} name 
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
    DashboardPage,
    DoctorsPage,
    pages,
}