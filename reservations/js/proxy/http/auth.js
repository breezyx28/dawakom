import {get} from '../helper.js';

export const auth = get('user/checkUser',true).then(res => {
    let access = ['admin','pharmacy','hospital','lab'];

    if(res.data.accountType == 'admin'){
        $("#userDropdown").parent().html('<button class="btn btn-light"><a href="../../dist/index.html">الرجوع لدواكم</a></button>');
    }
    // i have to send a response to tell if im admin or somthing else
    if(access.includes(res.data.accountType)){


        document.getElementById("loading").classList.remove("loading");

        return res;

    }else{

        window.location.href = "forbidden.html";

    }
    
}).catch(err => {

    console.log(err);
});

export const userProfile = get('user/Profile',true).then(res => {
    
    document.getElementById('username').innerHTML = res.data[0].name || res.data[0].fullName;
    
    return res.data;

}).catch(err => {

    console.log(err);
    
});
