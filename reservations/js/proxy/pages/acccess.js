import {auth,userProfile} from '../http/auth.js';
import {SideNav} from '../common/sideNav.js';


auth.then(res => {


    // if(res.data.accountType == 'pharmacy'){

    //     let pos = {
    //             position : {
    //                 "acounts" : false,
    //                 "bills" : true,
    //                 "user" : false,
    //                 "index" : true,
    //                 "usersDrop" :false,
    //                 "medicine" : true,
    //                 "profile" : true,
    //                 "requests" : false,
    //                 "setting" : false,
    //                 "supplier" : false,
    //                 }
    //     }       

        

    //     return SideNav(pos);

    // }

    if(res.data.accountType == 'hospital'){

        let pos = {
                position : {
                    "usersDrop" :false,
                    "hospitals" : false,
                    "hospitalDoctors" : true,
                    "labs" : false,
                    "doctors" : true,
                    "index" :true,
                    "reservations" : true,
                    "profile" : true,
                    "hospitalServices" : true,
                    "labServices" : false,
                    "setting" : false,
                    "labDiagnosis" : false,

                    "docSchedule" : true,
                    "hospitalInfo" : true,
                    "docInfo" : true,
                    "labSchedule" : false,
                    "labInvoices" : true,
                    "hospitalInvoices" : true,
                    "labReservations" : false,
                    "hospitalReservations" : true,

                    "allLabInvoices" : false,
                    "allHospitalInvoices" : false,
                    "allLabServices" : false,
                    "allHospitalServices" : false,
                    "allLabReservations" : false,
                    "allHospitalReservations" : false,
                    "allDoctors" : false,
                    }
        }       

        

        return SideNav(pos);

    }

    if(res.data.accountType == 'lab'){

        let pos = {
                position : {
                    "usersDrop" :false,
                    "hospitals" : false,
                    "labs" : false,
                    "hospitalDoctors" : false,
                    "doctors" : false,
                    "invoices" : true,
                    "index" :true,
                    "reservations" : false,
                    "profile" : true,
                    "hospitalServices" : false,
                    "labServices" : true,
                    "setting" : false,
                    "labDiagnosis" : true,
                    "docSchedule" : false,
                    "hospitalInfo" : false,
                    "docInfo" : false,
                    "labInvoices" : true,
                    "hospitalInvoices" : true,
                    "labReservations" : true,
                    "hospitalReservations" : false,
                    "labSchedule" : true,

                    "allLabInvoices" : false,
                    "allHospitalInvoices" : false,
                    "allLabServices" : false,
                    "allHospitalServices" : false,
                    "allLabReservations" : false,
                    "allHospitalReservations" : false,
                    "allDoctors" : false,
                    }
        }       

        return SideNav(pos);

    }

    if(res.data.accountType == 'admin'){

        let pos = {
            
            position : {
                "usersDrop" :true,

                "index" : true,
                "medicine" : false,
                "profile" : true,
                "requests" : false,
                "setting" : true,

                "allLabInvoices" : true,
                "allHospitalInvoices" : true,
                "allLabServices" : true,
                "allHospitalServices" : true,
                "allLabReservations" : true,
                "allHospitalReservations" : true,

                "hospitals" : true,
                "labs" : true,
                "doctors" : false,
                "hospitalDoctors" : false,
                "invoices" : false,
                "reservations" : false,
                "hospitalServices" : false,
                "labServices" : false,
                "labDiagnosis" : false,

                "docSchedule" : false,
                "hospitalInfo" : false,
                "docInfo" : false,
                "labInvoices" : false,
                "hospitalInvoices" : false,
                "labReservations" : false,
                "hospitalReservations" : false,
                "labSchedule" : false,
                "allDoctors" : true,
                }
    }

    
        return SideNav(pos);

    }

});



