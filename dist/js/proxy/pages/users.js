import {get, post} from '../helper.js';
import {datatable} from '../process/datatable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: pageName == 'user' ? "userID" : "id",className :'id',render : function(data,type){
        return '<b>'+data+'</b>';
    }},
    { data: "fullName",className :'fullName',render : function(data,type){
        return data;
    }},
    { data: "phoneNumber",className :'phoneNumber',render : function(data,type){
        return data;
    } },
    { data: "gender",className :'gender',render : function(data,type){
        return data;
    } },
    { data: "email",className :'email',render : function(data,type){
        return `<email class="text-success">${data}</email>`;
    } },
    { data: "signature",className :'signature',render : function(data,type,row,meta){
        return data;
    }
} ,
    { data: "location",className :'location',render : function(data,type){
        return data;
    } },
    { data: "lat",className :'lat',render : function(data,type){
        return data;
    } },
    { data: "lng",className :'lng',render : function(data,type){
        return data;
    } },
    { data: "activity",className :'activity',render : function(data,type){
        return data;
    } },
    { data: pageName == 'user' ? "userID" : "id",
        render : function(data,type,row,meta){
            if(data){
                return `<div class="d-flex justify-content-center">
                                <i value="${data}" name="${data}" data-toggle="modal" data-target="#updateModal" class="btn text-muted fal fa-pen edit"></i>
                                <i value="${data}" name="${data}" class="btn text-muted fal fa-trash delete"></i></div>` ;
            }
        }}
]   



switch (pageName) {
    case 'user':
         datatable('allUsers',column,true,true,'deleteUsers/delete','updateUsers/update');
        break;
    case 'captain':
         datatable('allCaptains',column,true,true,'deleteCaptains/delete','updateCaptains/update');
        break;
    case 'agent':
         datatable('allAgents',column,true,true,'deleteAgents/delete','updateAgents/update');
        break;
}

})



