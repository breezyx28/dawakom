import { Store } from '../http/requests.js';
import {get} from '../helper.js';

$(document).ready(function(){
    
    get('admin/adminProfile', true,'application/json').then(res => {
        //info
        $('.adminName').html(res.data.fullName);
        $('.adminPhone').html(res.data.phoneNumber);
        $('.adminEmail').html(res.data.email);

        //inputs
        $('#adminId').val(res.data.id);
        $('#fullName').val(res.data.fullName);
        $('#email').val(res.data.phoneNumber);
        $('#phoneNumber').val(res.data.email);
    }).catch(err => {
        console.log(err.data);
    });

})