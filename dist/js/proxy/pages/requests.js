import {requestTable,userData} from '../process/requestTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: {userName : "userName",userID : "userID"},className :'userName',render : function(data,type){
        return `<a href="#" class="userInfoModal" value="${data.userID}" name="users" data-toggle="modal" data-target="#usersModal">${data.userName}</a>`;
    }},
    { data: "captainID",className :'captainID',render : function(data,type){
        if(data == '' || data == null){
            return '<div class="text-muted"><i>الطلب معلق إلى حين قبوله</i><small></small></div>';
        }
        return `<a href="#" class="userInfoModal" value="${data}" name="captain" data-toggle="modal" data-target="#usersModal">${data}</a>`;
    } },
    { data: {takeLng :"takeLng",takeLat:'takeLat'},name:'take',className :'take',render : function(data,type){

        return data.takeLng+' - '+data.takeLng;
    } },
    { data:{dropLng :"dropLng",dropLat:'dropLat'},name:'drop',className :'dropLng',render : function(data,type){
        return data.dropLng+' - '+data.dropLat;
    } },
    { data: "statu",className :'statu',render : function(data,type){
        if(data == 'live'){
            return `<p class="text-primary">${data}</p>`;
        }else if(data == 'accepted'){
            return `<p class="text-success">${data}</p>`;
        }else{
            return `<p class="text-danger">${data}</p>`;
        }
    } },
  
    // { data: "id",
    //     render : function(data,type,row,meta){
    //         if(data){
    //             return `<div class="d-flex justify-content-center">
    //                             <i value="${data}" name="${data}" data-toggle="modal" data-target="#updateModal" class="btn text-muted fal fa-pen edit"></i>
    //                             <i value="${data}" name="${data}" class="btn text-muted fal fa-trash delete"></i></div>` ;
    //         }
    //     }}
]   

switch (pageName) {
            case 'requests':
                requestTable('allOrders',column,true,true,'deleteOrders/delete','updateOrders/update');
                break;
}

    $(document).on('click',".userInfoModal",function(){
    //   $(".userData").html('<i class="fal fa-spinner fa-spin"></i>')
        var id = $(this).attr('value');
        var accountType = $(this).attr('name');
        

        let data = {
            id:id,
            accountType:accountType
        }

        userData(data).then(res => console.log(res))
            .catch(err => console.log(err));

    })

})



