
 import {get, post, DELETE , put} from '../helper.js';
 import {notify} from '../common/notification.js';

 export const docScheduleTable = (url, columns = [], edit = true , remove = true, deleteUrl, updateUrl) => {
 
     get('user/'+url, true,'application/json').then(res => {
         console.log(res);
 
     $(document).ready(function(){
     
             // Setup - add a text input to each footer cell
     $('#dataTable thead tr').clone(true).appendTo( '#dataTable thead' );
     $('#dataTable thead tr:eq(1) th').each( function (i) {
         $(this).addClass('p-0 m-0');

         var title = $(this).text();

         $(this).html( '<input type="text" style="width: 100%;" class="text-center" placeholder="بحث" />' );
     
         $( 'input', this ).on( 'keyup', function () {
             console.log(table.column(i).search());
             if ( table.column(i).search() !== this.value ) {
                 table
                     .column(i)
                     .search( this.value )
                     .draw();
             }
         } );
     });
 
     var table = $('#dataTable').DataTable({
         search: {
             smart: true
          },
         data : res.data,
         columns: columns,
         "order": [[ 9, "desc" ]],
         orderCellsTop: true,
         fixedHeader: true,
     });

     $(".modal").on("hidden.bs.modal", function(){
         $(".modal-body1").html("");
     });
 
     if(edit){
         
        $(document).on('click', '.edit' ,function(){

 
         var id = $(this).attr('value');
         var tr = $(this).parent().parent().parent().attr('id',id);
 
         
         var saturday = $(`#${id} .saturday`).text();
         var sunday = $(`#${id} .sunday`).text();
         var monday = $(`#${id} .monday`).text();
         var tuesday = $(`#${id} .tuesday`).text();
         var wednesday = $(`#${id} .wednesday`).text();
         var thursday = $(`#${id} .thursday`).text();
         var friday = $(`#${id} .friday`).text();
         var off = $(`#${id} .off`).text();

         if(saturday == "متوفر"){
            $('#UpdateSubmit input[name=saturday]').attr('checked', true);
            $('#UpdateSubmit input[name=saturday]').attr('value',1);
        }if(saturday == "غير متوفر"){
            $('#UpdateSubmit input[name=saturday]').attr('checked', false);
            $('#UpdateSubmit input[name=saturday]').attr('value',0);
        }

        if(sunday == "متوفر"){
            $('#UpdateSubmit input[name=sunday]').attr('checked', true);
            $('#UpdateSubmit input[name=sunday]').attr('value',1);
        }if(sunday == "غير متوفر"){
            $('#UpdateSubmit input[name=sunday]').attr('checked', false);
            $('#UpdateSubmit input[name=sunday]').attr('value',0);
        }

        if(monday == "متوفر"){
            $('#UpdateSubmit input[name=monday]').attr('checked', true);
            $('#UpdateSubmit input[name=monday]').attr('value',1);
        }if(monday == "غير متوفر"){
            $('#UpdateSubmit input[name=monday]').attr('checked', false);
            $('#UpdateSubmit input[name=monday]').attr('value',0);
        }

        if(tuesday == "متوفر"){
            $('#UpdateSubmit input[name=tuesday]').attr('checked', true);
            $('#UpdateSubmit input[name=tuesday]').attr('value',1);
        }if(tuesday == "غير متوفر"){
            $('#UpdateSubmit input[name=tuesday]').attr('checked', false);
            $('#UpdateSubmit input[name=tuesday]').attr('value',0);
        }

        if(wednesday == "متوفر"){
            $('#UpdateSubmit input[name=wednesday]').attr('checked', true);
            $('#UpdateSubmit input[name=wednesday]').attr('value',1);
        }if(wednesday == "غير متوفر"){
            $('#UpdateSubmit input[name=wednesday]').attr('checked', false);
            $('#UpdateSubmit input[name=wednesday]').attr('value',0);
        }

        if(thursday == "متوفر"){
            $('#UpdateSubmit input[name=thursday]').attr('checked', true);
            $('#UpdateSubmit input[name=thursday]').attr('value',1);
        }if(thursday == "غير متوفر"){
            $('#UpdateSubmit input[name=thursday]').attr('checked', false);
            $('#UpdateSubmit input[name=thursday]').attr('value',0);
        }

        if(friday == "متوفر"){
            $('#UpdateSubmit input[name=friday]').attr('checked', true);
            $('#UpdateSubmit input[name=friday]').attr('value',1);
        }if(friday == "غير متوفر"){
            $('#UpdateSubmit input[name=friday]').attr('checked', false);
            $('#UpdateSubmit input[name=friday]').attr('value',0);
        }

        if(off == "نعم"){
            $('#UpdateSubmit input[name=off]').attr('checked', true);
            $('#UpdateSubmit input[name=off]').attr('value',1);
        }if(off == "لا"){
            $('#UpdateSubmit input[name=off]').attr('checked', false);
            $('#UpdateSubmit input[name=off]').attr('value',0);
        }
 
         console.log(tr);
 
         $('#UpdateSubmit').submit(function (e) {
             e.preventDefault();
             var value = new FormData(this);
             let week = {
                saturday:0,
                sunday:0,
                monday:0,
                tuesday:0,
                wednesday:0,
                thursday:0,
                friday:0,
                off:0,
             }

             value.forEach((val,key)=>{
                 if(val == 1){
                    week[key] = 1;
                 }else{
                     week[key] = 0;
                 }
             });

             iziToast.info({
                     title: 'انتظر',
                     message: 'انتظر الى حين المعالجة',
                     timeout : 1000,
                 });
 
             put(`user/${updateUrl}/${id}`, week, true, 'application/json')
                 .then(res => {
                    console.log(res);
                    notify(res);
                 })
                 .catch(err => {
                     console.log(err);
                     return notify(err);
                 });
           });
     })
     }
 
     if(remove){
        $(document).on('click','.delete' ,function(){
         var id = $(this).attr('value');
         console.log(id);
 
         iziToast.question({
             timeout: 20000,
             close: false,
             overlay: true,
             displayMode: 'once',
             id: 'question',
             zindex: 999,
             title: 'Hey',
             message: 'هل انت موافق على عملية الحذف ؟',
             position: 'center',
             buttons: [
                 ['<button><b>نعم</b></button>', function (instance, toast) {
                     
                     DELETE(`user/${deleteUrl}/${id}`, true, 'application/json').then(res => {
                         window.location.reload();
                         // alert
                        return notify(res);
                      
                     }).catch(err => {
                         console.log(err);

                         return notify(err);

                     });
 
                     instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
          
                 }, true],
                 ['<button>لا</button>', function (instance, toast) {
                     
 
                     instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
          
                 }],
             ],
         });
      
     })

     $("*[data-dismiss=modal]").click(function(){
        window.location.reload();
    })

     }
     })
 
 }).catch(err => {
     console.log(err);
     return err;
 })
 
 
 }