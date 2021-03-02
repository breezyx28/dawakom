import {settingTable} from '../process/settingTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "commissionTime",className :'commissionTime',render : function(data,type){
        return data;
    }},
    { data: "commissionFromSearch",className :'commissionFromSearch',render : function(data,type){
       
        return data;
    } },
    { data: "maxAmountOfMedicine",className :'maxAmountOfMedicine',render : function(data,type){
        return data;
    } },
    { data:"deliverAmount",className :'deliverAmount',render : function(data,type){
        return data;
    } },
    { data: "created_at",className :'created_at',render : function(data,type){
       return '<small class="text-muted">'+ new Date(data).toLocaleString()+'</small>';
    } },
  
    { data: "id",
        render : function(data,type,row,meta){
            if(data){
                return `<div class="d-flex justify-content-center">
                                <i value="${data}" name="${data}" data-toggle="modal" data-target="#updateModal" class="btn text-muted fal fa-pen edit"></i>
                                <i value="${data}" name="${data}" class="btn text-muted fal fa-trash delete"></i></div>` ;
            }
        }}
]   

switch (pageName) {
            case 'setting':
              settingTable('allSetting',column,true,true,'deleteSetting/delete','updateSetting/update');
                break;
}

})



