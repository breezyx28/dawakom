
export const SideNav = (access) => {
console.log(access);
let sidenav =  `<nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div class="sb-sidenav-menu">
        <div class="nav">
            <a class="nav-link" href="index.html">
                 الصفحة الرئيسية </a>

            <div class="sb-sidenav-menu-heading">الصفحات</div>
            ${access.position.setting ? ' <a class="nav-link" href="setting.html">الضبط</a>' : ''}

            ${access.position.usersDrop ? 
           '<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="true">المستخدمين</a>'
                : ''}
                
                
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                
           <li class="dropdown-item">${access.position.user ? '<a  href="user.html">المستخدمين</a>' : ''}</li>
           <li class="dropdown-item">${access.position.captain ? '<a  href="captain.html">الكباتن</a>' : ''}</li>
           <li class="dropdown-item">${access.position.pharmacy ? '<a  href="pharmacy.html">الصيدليات</a>' : ''}</li>
           <li class="dropdown-item">${access.position.agent ? '<a  href="agent.html">الوكلاء</a>' : ''}</li>

           </ul>

            ${access.position.bills ? '<a class="nav-link" href="bills.html">الفواتير </a>' : ''}
            ${access.position.accounts ? '<a class="nav-link" href="accounts.html">الحسابات الإلكترونية</a>' : ''}
            ${access.position.requests ? '<a class="nav-link" href="requests.html">الطلبات</a>' : ''}
            ${access.position.supplier ? '<a class="nav-link" href="supplier.html">التوريدات</a>' : ''}
            ${access.position.medicine ? '<a class="nav-link" href="medicine.html">الدواء</a>' : ''}
            
        </div>
    </div>
    <div class="sb-sidenav-footer">
        <div class="small">تسجيل دخولك</div>
        <div id="username" style="color:#eeb312;"></div>
    </div>
</nav>`;

document.getElementById('layoutSidenav_nav').innerHTML = sidenav;

};