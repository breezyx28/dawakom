import {docScheduleTable} from '../process/docScheduleTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "doctor",className :'doctor',render : function(data,type){
        return data.fullName;
    }},
    { data: "doctor",className :'doctor',render : function(data,type){
        return data.phone;
    }},
    { data: "saturday",className :'saturday',render : function(data,type){
        if(data){
            return '<p class="text-success">متوفر</p>';
        }
        return '<p class="text-danger">غير متوفر</p>';
    }},
    { data: "sunday",className :'sunday',render : function(data,type){
        if(data){
            return '<p class="text-success">متوفر</p>';
        }
        return '<p class="text-danger">غير متوفر</p>';
    }},
    { data: "monday",className :'monday',render : function(data,type){
        if(data){
            return '<p class="text-success">متوفر</p>';
        }
        return '<p class="text-danger">غير متوفر</p>';
    } },
    { data: "tuesday",className :'tuesday',render : function(data,type){
        if(data){
            return '<p class="text-success">متوفر</p>';
        }
        return '<p class="text-danger">غير متوفر</p>';
    } },
    { data: "wednesday",className :'wednesday',render : function(data,type){
        if(data){
            return '<p class="text-success">متوفر</p>';
        }
        return '<p class="text-danger">غير متوفر</p>';
    } },
    { data: "thursday",className :'thursday',render : function(data,type){
        if(data){
            return '<p class="text-success">متوفر</p>';
        }
        return '<p class="text-danger">غير متوفر</p>';
    } },
    { data: "friday",className :'friday',render : function(data,type){
        if(data){
            return '<p class="text-success">متوفر</p>';
        }
        return '<p class="text-danger">غير متوفر</p>';
    } },
    { data: "off",className :'off',render : function(data,type){
        if(data){
            return '<b class="text-danger">نعم</b>';
        }
        return '<b class="text-success">لا</b>';
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
            case 'docSchedule':
                docScheduleTable('docSchedule', column, true, true, 'delete/docSchedule', 'update/docSchedule');
                break;
}

})



