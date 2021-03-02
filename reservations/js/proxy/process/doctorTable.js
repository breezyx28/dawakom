
 import {get, post, DELETE , put} from '../helper.js';
 import {notify} from '../common/notification.js';

 export const doctorTable = (url, columns = [], edit = true , remove = true, deleteUrl, updateUrl) => {
 
     get('admin/'+url, true,'application/json').then(res => {
 
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
         "order": [[ 6, "desc" ]],
         orderCellsTop: true,
         fixedHeader: true,
     });

     $(".modal").on("hidden.bs.modal", function(){
         $(".modal-body1").html("");
     });
 
     if(edit){
         
        $(document).on('click','.edit' ,function(){

 
         var id = $(this).attr('value');
         var tr = $(this).parent().parent().parent().attr('id',id);
 
         $('#UpdateSubmit input[name=name]').val($(`#${id} .name`).text());
         $('#UpdateSubmit input[name=phone]').val( $(`#${id} .phone`).text());
         $('#UpdateSubmit input[name=gender]').val($(`#${id} .gender`).val());
         $('#UpdateSubmit input[name=email]').val($(`#${id} .email`).text());

         var active = $(`#${id} .activity`).text();

        if(active == "1"){
            $('#UpdateSubmit input[name=activity]').attr('checked', true);
            $('#UpdateSubmit input[name=activity]').attr('value',active);
        }if(active == "0"){
            $('#UpdateSubmit input[name=activity]').attr('checked', false);
            $('#UpdateSubmit input[name=activity]').attr('value',active);
        }
 
         console.log(tr);
 
         $('#UpdateSubmit').submit(function (e) {
             e.preventDefault();
             var value = new FormData(this);
 
             iziToast.info({
                     title: 'انتظر',
                     message: 'انتظر الى حين المعالجة',
                     timeout : 1000,
                 });
 
             put(`admin/${updateUrl}/${id}`,value, true, 'application/json')
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
                     
                     DELETE(`admin/${deleteUrl}/${id}`, true, 'application/json').then(res => {
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