import { DoctorListHeader, AddDoctorModel } from '../components';

class DoctorsPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/doctors')
        this.doctorsListHeader = new DoctorListHeader();
        this.addDoctorModal = new AddDoctorModel();
    }
}

export default DoctorsPage;