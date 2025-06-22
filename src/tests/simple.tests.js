// const DashboardPage = require('./../po/pages/dashboard.page');

import DashboardPage from "../../po/pages/dashboard.page";
import DoctorsPage from "../../po/pages/doctors.page";

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe('Doctors page', () => {
    beforeEach( async () => {
        await dashboardPage.open();
      //  await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    });

    it('Check page title', async () => {
        /* const title = await browser.getTitle()
        console.log(title);

            if (title !== 'Appointment Planner - Syncfusion Angular Components Showcase App') {
            throw new Error('Page title isn"t correct')
        } */
       await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it('Open modal window for adding a new doctor', async () => {
        // click on doctors item in the side menu
        await dashboardPage.sideMenu.item('doctors').click();
        // click on add new doctor btn
        await doctorsPage.doctorsListHeader.addNewDoctorBtn.click();
        // check that a model window is displayed
        await expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed();
    });

    it('Add a new doctor', async () => {
        // click on doctors item in the side menu
        await dashboardPage.sideMenu.item('doctors').click();
        // click on add new doctor btn
        await doctorsPage.doctorsListHeader.addNewDoctorBtn.click();
        // wait for visibility of modal window
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();

        await $('[name="Name"]').setValue('John Doe');
        await $('#DoctorMobile').setValue('11111111111111');
        await $('[name="Email"]').setValue('test@test.com');
        await $('[name="Education"]').setValue('Basic');
        await $('[name="Designation"]').setValue('Test');

        await $('.e-footer-content button.e-primary').click();

        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();

        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8').$('.education')).toHaveText('Basic', {ignoreCase: true}); // ignoreCase will ignore lower and upper case.
    });

    it('Close a modal window for adding a new doctor', async () => {
        await dashboardPage.sideMenu.item('doctors').click();
        await doctorsPage.doctorsListHeader.addNewDoctorBtn.click();
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
    });
})