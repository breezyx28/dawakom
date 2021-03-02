
 import {get, post} from '../helper.js';
 export const settingTable = (url,columns = [],edit = true , remove = true,deleteUrl,updateUrl) => {
 
     get('admin/'+url,true,'application/json').then(res => {
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
 
         $('#UpdateSubmit input[name=commissionTime]').val($(`#${id} .commissionTime`).text());
         $('#UpdateSubmit input[name=commissionFromSearch]').val( $(`#${id} .commissionFromSearch`).text());
         $('#UpdateSubmit input[name=maxAmountOfMedicine]').val($(`#${id} .maxAmountOfMedicine`).text());
         $('#UpdateSubmit input[name=deliverAmount]').val($(`#${id} .deliverAmount`).text());

         console.log(tr);
 
         $('#UpdateSubmit').submit(function (e) {
             e.preventDefault();
             var value = new FormData(this);
 
             iziToast.info({
                     title: 'انتظر',
                     message: 'انتظر الى حين المعالجة',
                     timeout : 1000,
                 });
 
 
             post(`admin/${updateUrl}/${id}`,value, true, 'application/json')
                 .then(res => {
                     console.log(res);
                     if(res.success == true){
                         iziToast.success({
                               title: 'نجاح',
                                message: 'تم بنجاح',
                               timeout : 1000,
                           });
                           return res;
                       }
                       if(res.success == false){
                           iziToast.error({
                               title: 'فشل',
                                message: res.message,
                               timeout : 1000
                               })
                               return res;
                           };
                     if(res.error){
                        return iziToast.error({
                             title: 'فشل',
                              message: res.error,
                             timeout : 1000
                             })
                     }
                 })
                 .catch(err => {
                     console.log(err);
                     return iziToast.error({
                         title: 'فشل',
                         message: err.error,
                         timeout : 1000
                       });
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
                     
                     get(`admin/${deleteUrl}/${id}`, true, 'application/json').then(res => {
                         window.location.reload();
                         // alert
                         if(res.data.success == true){
                             iziToast.success({
                                   title: 'نجاح',
                                    message: 'تم بنجاح',
                                   timeout : 1000,
                               });
                               return res;
                           }
                           if(res.data.success == false){
                               iziToast.error({
                                   title: 'فشل',
                                    message: res.message,
                                   timeout : 1000
                                   })
                                   return res;
                               };
                         if(res.error){
                         iziToast.error({
                                 title: 'فشل',
                                  message: res.error,
                                 timeout : 1000
                                 })
                         }
                      
                     }).catch(err => {
                         console.log(err);
                             iziToast.error({
                                 title: 'فشل',
                                     message: '',
                                 timeout : 1000
                               });
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