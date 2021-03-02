import { Store } from '../http/requests.js';
import {get} from '../helper.js';

$(document).ready(function(){
    
    get('user/Profile', true,'application/json').then(res => {

        console.log(res);
        //info
        $('.userName').html(res.data[0].name);
        $('.userPhone').html(res.data[0].phone);
        $('.userEmail').html(res.data.email);

        //inputs
        $('#name').val(res.data[0].name);
        $('#email').val(res.data[0].email);
        $('#address').val(res.data[0].address);
        $('#lat').val(res.data[0].lat);
        $('#lng').val(res.data[0].lng);
        $('#companyEarns').val(res.data[0].companyEarns);
        
    }).catch(err => {
        console.log(err.data);
    });

})