import AddDoctorComponent from "../components/doctors/add-doctor.component";
import ListHeaderComponent from "../components/doctors/list-header.component";

class DoctorsPage {

    constructor() {
        this.doctorsListHeader = new ListHeaderComponent();
        this.addDoctorModal = new AddDoctorComponent();
    }

    async open() {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    }
}

export default DoctorsPage;