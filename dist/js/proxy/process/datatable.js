
 import {get, post} from '../helper.js';
export const datatable = (url,columns = [],edit = true , remove = true,deleteUrl,updateUrl) => {

    get('admin/'+url,true,'application/json').then(res => {

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
        
    $(document).on('click','.edit' ,function(){

        var id = $(this).attr('value');
        var tr = $(this).parent().parent().parent().attr('id',id);

        $('#UpdateSubmit input[name=fullName]').val($(`#${id} .fullName`).text());
        $('#UpdateSubmit input[name=phoneNumber]').val( $(`#${id} .phoneNumber`).text());

        var gender = $(`#${id} .gender`).text();

        if(gender == 'انثى'){
            $('#UpdateSubmit input[name=gender][value='+gender+']').prop('checked', true);
        }
        if (gender == 'ذكر'){
            $('#UpdateSubmit input[name=gender][value='+gender+']').prop('checked', true);
        }

        $('#UpdateSubmit input[name=email]').val($(`#${id} .email`).text());
        $('#UpdateSubmit input[name=location]').val($(`#${id} .location`).text());
        $('#UpdateSubmit input[name=lat]').val($(`#${id} .lat`).text());
        $('#UpdateSubmit input[name=lng]').val($(`#${id} .lng`).text());

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

            for (let v of value) {
             console.log(v);
            }
            console.log(value);

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
                    if(res.errors){
                        return iziToast.error({
                            title: 'فشل',
                             message: res.errors,
                            timeout : 1000
                            })
                    }
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
                    iziToast.error({
                        title: 'فشل',
                        message: '',
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