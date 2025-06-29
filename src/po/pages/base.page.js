
import { Header, SideMenu } from './../components/index.js'
// import Header from './../components/common/header.component';
//import SideMenuComponent from '../components/common/sidemenu.component';

class BasePage {
    
    constructor(url) {
        this.url = url;
        this.header = new Header();
        this.sideMenu = new SideMenu();
    }

    open() {
        return browser.url(this.url);
    }
}

export default BasePage;
