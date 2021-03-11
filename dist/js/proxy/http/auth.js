import {get} from '../helper.js';

export const auth = get('user/userHolder',true).then(res => {
    let access = ['admin', 'pharmacy', 'hospital', 'lab'];

    // i have to send a response to tell if im admin or somthing else
    if(access.includes(res.accountType)){
        if(res.accountType == 'admin'){
            $("#reservationSys").css("visibility","visible");
        }

        if(res.accountType == 'hospital' || res.accountType == 'lab'){
            console.log(res.accountType);
            window.location.href = '../reservations/index.html';
            return 0;
        }
        console.log(res);

        document.getElementById("loading").classList.remove("loading");

        return res;

    }else{

        window.location.href = "forbidden.html";

    }
    
}).catch(err => {

    console.log(err);
});

export const userProfile = get('user/userProfile',true).then(res => {

    document.getElementById('username').innerHTML = res.data.fullName || res.data.name;
    
    return res.data;

}).catch(err => {

    console.log(err);
    
});
