
 import {get, post, DELETE , put} from '../helper.js';
 import {notify} from '../common/notification.js';

 export const hospitalReservationsTable = (url, columns = [], edit = true , remove = true, deleteUrl, updateUrl) => {

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
         "order": [[ 6, "desc" ]],
         orderCellsTop: true,
         fixedHeader: true,
     });

     $(".modal").on("hidden.bs.modal", function(){
         $(".modal-body1").html("");
     });

     if(edit){
         
        $(document).on('click','.edit' ,function(){

 
        //  var id = $(this).attr('value');
        //  var tr = $(this).parent().parent().parent().attr('id',id);
 
        //  $('#UpdateSubmit input[name=reservationsToken]').val($(`#${id} .reservationsToken`).text());
        //  $('#UpdateSubmit input[name=note]').val( $(`#${id} .note`).text());

        //  var active = $(`#${id} .response`).text();

        // if(active == "on"){
        //     $('#UpdateSubmit input[name=response]').attr('checked', true);
        //     $('#UpdateSubmit input[name=response]').attr('value',1);
        // }if(active == "off"){
        //     $('#UpdateSubmit input[name=response]').attr('checked', false);
        //     $('#UpdateSubmit input[name=response]').attr('value',0);
        // }
 
 
         $('#UpdateSubmit').submit(function (e) {
             e.preventDefault();
             var value = new FormData(this);

                if(value.get('response') == "on"){
                    value.set('response',1);
                }else{
                    value.set('response',0);
                }
 
             iziToast.info({
                     title: 'انتظر',
                     message: 'انتظر الى حين المعالجة',
                     timeout : 1000,
                 });
 
             put(`user/${updateUrl}`,value, true, 'application/json')
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

     })
 
 }).catch(err => {
     console.log(err);
     return err;
 })
 
 
 }