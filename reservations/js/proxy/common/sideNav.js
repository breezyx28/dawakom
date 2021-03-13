
export const SideNav = (access) => {
    
let sidenav =  `<nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div class="sb-sidenav-menu">
        <div class="nav">
            <a class="nav-link" href="index.html">
                 الصفحة الرئيسية </a>

            <div class="sb-sidenav-menu-heading">الصفحات</div>

            ${access.position.usersDrop ? 
           '<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="true">المستخدمين</a>'
                : ''}
                
                
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                
           <li class="dropdown-item">${access.position.hospitals ? '<a  href="hospitals.html">المستشفيات</a>' : ''}</li>
           <li class="dropdown-item">${access.position.labs ? '<a  href="labs.html">المعامل</a>' : ''}</li>

           </ul>

            ${access.position.doctors ? '<a class="nav-link" href="doctors.html">الأطباء </a>' : ''}
            ${access.position.allDoctors ? '<a class="nav-link" href="allDoctors.html">الأطباء </a>' : ''}
            ${access.position.hospitalDoctors ? '<a class="nav-link" href="hospitalDoctors.html">أطبائي</a>' : ''}
            ${access.position.labInvoices ? '<a class="nav-link" href="labInvoices.html">فواتير المعمل</a>' : ''}
            ${access.position.hospitalnvoices ? '<a class="nav-link" href="hospitalInvoices.html">فواتير المستشفى</a>' : ''}
            ${access.position.hospitalReservations ? '<a class="nav-link" href="hospitalReservations.html">حجوزات المستشفى</a>' : ''}
            ${access.position.labServices ? '<a class="nav-link" href="labServices.html">خدمات المعامل</a>' : ''}
            ${access.position.hospitalServices ? '<a class="nav-link" href="hospitalServices.html">خدمات المستشفيات</a>' : ''}
            ${access.position.labDiagnosis ? '<a class="nav-link" href="labDiagnosis.html">فحوصات المعامل</a>' : ''}
            ${access.position.docSchedule ? '<a class="nav-link" href="docSchedule.html">جدول الأطباء</a>' : ''}
            ${access.position.hospitalInfo ? '<a class="nav-link" href="hospitalInfo.html">معلومات  المستشفى</a>' : ''}
            ${access.position.docInfo ? '<a class="nav-link" href="docInfo.html">معلومات الطبيب</a>' : ''}
            ${access.position.labReservations ? '<a class="nav-link" href="labReservations.html">حجوزات المعامل</a>' : ''}
            ${access.position.labSchedule ? '<a class="nav-link" href="labSchedule.html">جدول المعامل</a>' : ''}

            ${access.position.allLabInvoices ? '<a class="nav-link" href="allLabInvoices.html">فواتير المعامل</a>' : ''}
            ${access.position.allHospitalInvoices ? '<a class="nav-link" href="allHospitalInvoices.html">فواتير المستشفيات</a>' : ''}
            ${access.position.allLabServices ? '<a class="nav-link" href="allLabServices.html">خدمات المعامل</a>' : ''}
            ${access.position.allHospitalServices ? '<a class="nav-link" href="allHospitalServices.html">خدمات المستشفيات</a>' : ''}
            ${access.position.allLabReservations ? '<a class="nav-link" href="allLabsReservations.html">حجوزات المعامل</a>' : ''}
            ${access.position.allHospitalReservations ? '<a class="nav-link" href="allHospitalReservations.html">حجوزات المستشفيات</a>' : ''}
            
        </div>
    </div>
    <div class="sb-sidenav-footer">
        <div class="small">تسجيل دخولك</div>
        <div id="username" style="color:#eeb312;"></div>
    </div>
</nav>`;

document.getElementById('layoutSidenav_nav').innerHTML = sidenav;

};