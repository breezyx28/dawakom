import {post} from '../helper.js';
import {Local} from '../localStorage.js';

const token = Local("get","token");

$(document).ready(function(){

    $('#logout').click(function(){
    //     var r = confirm("هل تريد الخروج ؟");
    //         if(r == true){

    //             iziToast.info({
    //                     title: 'انتظر',
    //                     message: `انتظر لحظة !!`,
    //                     timeout: 10000,
    //                 });

    //             post("user/logout", {token},true).then(res => {
    //                 if(res.error){

    //                     iziToast.error({
    //                             title: 'خطأ',
    //                              message: `${res.error}`
    //                         });
    //                     return 0;
    //                 }
    //                 console.log(res);

    //                 iziToast.success({
    //                         title: 'خطأ',
    //                          message: `تم تسجيل خروجك بنجاح`
    //                     });

    //                 setTimeout(()=>{
    //                     window.location.href = "main.html";
    //                 },1000);
    //             }).catch(err => console.log(err));
    //         }
    // })

    iziToast.question({
        timeout: 20000,
        close: false,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'تسجيل خروج',
        message: "هل تريد الخروج ؟",
        position: 'center',
        buttons: [
            ['<button><b>نعم</b></button>', function (instance, toast) {
                
                post("user/logout", {token},true).then(res => {
                    if(res.error){

                        iziToast.error({
                                title: 'خطأ',
                                 message: `${res.error}`
                            });
                        return 0;
                    }
                    console.log(res);

                    iziToast.success({
                            title: 'خطأ',
                             message: `تم تسجيل خروجك بنجاح`
                        });

                    setTimeout(()=>{
                        window.location.href = "main.html";
                    },1000);
                 
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
})