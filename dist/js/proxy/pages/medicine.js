import {get, post} from '../helper.js';


get('user/getYourMeds',true,'application/json').then(res => {
    console.log(res);
    if(res.error){
        console.log(res);
    }

    $(document).ready(function() {

        $('#dataTable').empty();

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
    } );


        var table = $('#dataTable').DataTable({
            search: {
                smart: true
             },
            data : res.data,
            columns: [
                { data: "tradeName",className :'tradeName',render : function(data,type){
                    
                    return data;
                }},
                { data: "publicName",className :'publicName',render : function(data,type){
                    return data;
                } },
                { data: "compnayName",className :'compnayName',render : function(data,type){
                    return data;
                } },
                { data: "price",className :'price',render : function(data,type){
                    return `<b class="text-success">${data}</b>`;
                } },
                { data: "thumbnail",className :'thumbnail',render : function(data,type,row,meta){
                if(data){
                    return '<img src="https://www.maqsood.com.sd/api/v1/storage/Medicines/'+data+'" width="40" height="50" />' ;
                }else{
                    return '<small class="text-muted">لا توجد صورة</small>' ;
                }
            } },
                { data: "description",className :'description',render : function(data,type){
                    return data == null ? '' : `<i>${data}</i>`;
                } },
                { data: "id",
                    render : function(data,type,row,meta){
                        if(data){
                            return `<div class="d-flex justify-content-center">
                                            <i value="${data}" name="${data}" data-toggle="modal" data-target="#updateMedicineModal" class="btn text-muted fal fa-pen edit"></i>
                                            <i value="${data}" name="${data}" class="btn text-muted fal fa-trash delete"></i></div>` ;
                        }
                    }}
            ],
            orderCellsTop: true,
            fixedHeader: true,
        });

        $(document).on('click','.edit' ,function(){

            var id = $(this).attr('value');
            var tr = $(this).parent().parent().parent().attr('id',id);

            $('#medicineUpdateSubmit input[name=tradeName]').val($(`#${id} .tradeName`).text());
            $('#medicineUpdateSubmit input[name=publicName]').val( $(`#${id} .publicName`).text());
            $('#medicineUpdateSubmit input[name=compnayName]').val($(`#${id} .compnayName`).text());
            $('#medicineUpdateSubmit input[name=price]').val($(`#${id} .price`).text());
            $('#medicineUpdateSubmit textarea[name=description]').val($(`#${id} .description`).text());

            console.log(tr);

            $('#medicineUpdateSubmit').submit(function (e) {
                e.preventDefault();
                var value = new FormData(this);

                iziToast.info({
                        title: 'انتظر',
                        message: 'انتظر الى حين المعالجة',
                        timeout : 1000,
                    });


                post('user/medicine/update/'+id,value, true, 'application/json')
                    .then(res => {
                        console.log(res);
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
                        
                        get('user/medicine/delete/'+id, true, 'application/json').then(res => {
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

    } );

})