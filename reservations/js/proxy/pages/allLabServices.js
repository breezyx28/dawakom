import {allLabServicesTable} from '../process/allLabServicesTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "token",className :'token',render : function(data,type){
        return data;
    }},
    { data: "name",className :'name',render : function(data,type){
        return data;
    }},
    { data: "price",className :'price',render : function(data,type){
        return `<i class="text-success">${data}</i>`;
    } },
    { data: "note",className :'note',render : function(data,type){
        return data;
    } },
    { data: "activity",className :'activity',render : function(data,type){
        if(data == 1){
            return '<p class="text-primary">نشط</p>';
        }else{
            return '<p class="text-danger">غير نشط</p>';
        }
    } },
]   

switch (pageName) {
            case 'allLabServices':
                allLabServicesTable('labsServices', column, true, true, null, null);
                break;
}

})



