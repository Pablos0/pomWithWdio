import BaseComponent from "../common/base.component";

class ListHeaderComponent extends BaseComponent {
    
    /* get rootEl() {
        return $('.specialization-types');
    } */

    constructor() {
        super('.specialization-types');
    } 

    get addNewDoctorBtn() {
        return this.rootEl.$('button.e-control');
    }
}

export default ListHeaderComponent;