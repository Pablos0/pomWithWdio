import BaseComponent from './base.component';

class SideMenuComponent extends BaseComponent {

    constructor() {
        super('#plannerSiderBar');
    }
    
   /* get rootEl() {
        return $('#plannerSideBar');
    } */
    
    get name() {
       // return this.rootEl.$('.name');
       return $('#plannerSiderBar .name');
    }

    item(param) {
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            schedule: '[routerlink="/calendar"]',
            doctors: '[routerlink="/doctors"]'
        };
       return this.rootEl.$(selectors[param.toLowerCase()]);
      //  return $(`#plannerSideBar ${selectors[param.toLowerCase()]}`);
    }
}

// module.exports = SideMenuComponent;
export default SideMenuComponent;