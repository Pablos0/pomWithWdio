// const DashboardPage = require('./../po/pages/dashboard.page');
/*
import DashboardPage from "../po/pages/dashboard.page";
import DoctorsPage from "../po/pages/doctors.page";
import pages from "./../po";

const dashboardPage = new DashboardPage(); // review if these two lines are necesary 
const doctorsPage = new DoctorsPage();
*/ 

import {pages} from './../po';

describe('Doctors page', () => {
    beforeEach( async () => {
        await pages.dashboard.open();
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
        await pages.dashboard.sideMenu.item('doctors').click();
        // click on add new doctor btn
        await pages.doctors.doctorsListHeader.addNewDoctorBtn.click();
        // check that a model window is displayed
        await expect(pages.doctors.addDoctorModal.rootEl).toBeDisplayed();
    });

    it('Add a new doctor', async () => {
        // click on doctors item in the side menu
        await pages.dashboard.sideMenu.item('doctors').click();
        // click on add new doctor btn
        await pages.doctors.doctorsListHeader.addNewDoctorBtn.click();
        // await pages('doctors').doctorsListHeader.addNewDoctorBtn.click();
        // wait for visibility of modal window
        await expect(pages.doctors.addDoctorModal.rootEl).toBeDisplayed();
        //await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();

        await pages.doctors.addDoctorModal.input('name').setValue('John Doe');
        await pages.doctors.addDoctorModal.input('phone').setValue('11111111111111');
        await pages.doctors.addDoctorModal.input('email').setValue('test@test.com');
        await pages.doctors.addDoctorModal.input('education').setValue('Basic');
        await pages.doctors.addDoctorModal.input('designation').setValue('Test');

        await pages.doctors.addDoctorModal.saveBtn.click();

        await expect(pages.doctors.addDoctorModal.rootEl).not.toBeDisplayed();

        await expect(pages.doctors.specialistCard(8).name).toHaveText('Dr. John Doe');
        await expect(pages.doctors.specialistCard(8).education).toHaveText('Basic', {ignoreCase: true}); // ignoreCase will ignore lower and upper case.
    });

    it('Close a modal window for adding a new doctor', async () => {
        await pages.dashboard.sideMenu.item('doctors').click();
        await pages.doctors.doctorsListHeader.addNewDoctorBtn.click();
        await pages.doctors.addDoctorModal.rootEl.waitForDisplayed();
        // await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await pages.doctors.addDoctorModal.closeBtn.click();
        await expect(pages.doctors.addDoctorModal.rootEl).not.toBeDisplayed();
    });
})