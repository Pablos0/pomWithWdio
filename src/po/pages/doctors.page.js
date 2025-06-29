import BasePage from './base.page';

import { DoctorListHeader, AddDoctorModal, SpecialistCard} from './../components';
import SpecialistCardComponent from '../components/doctors/specialist-card.component.js';
// import ListHeaderComponent from '../components/doctors/list-header.component.js';
// import AddDoctorComponent from '../components/doctors/add-doctor.component.js';


class DoctorsPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/doctors')
        this.doctorsListHeader = new DoctorListHeader();
        this.addDoctorModal = new AddDoctorModal();
    }

    specialistCard(id) {
        return new SpecialistCard(id);
    } 

        async open() {
            await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
        }
}

export default DoctorsPage;