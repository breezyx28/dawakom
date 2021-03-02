import { get, post} from '../helper.js';
import { Local } from '../localStorage.js';

let pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

export const Store = (value) => {
  switch (pageName) {
    case 'login':
      iziToast.info({
            title: 'انتظر',
            message: "انتظر حتى يتم تسجيلك"
      });
      
      post('admin/adminLogin', value, false, 'application/json')
        .then((res) => {

          console.log(res);
          if(res.error){
            return iziToast.error({
                  title: 'خطأ',
                  message: `${res.error}`
          });
          }

          iziToast.success({
                title: 'نجاح',
                message: "نجاح"
        });

         try {
          Local('set', 'token', res.data.token);
          window.location.href = 'systems.html';
        } catch (error) {
          console.log(error);
          window.location.reload();
        }  


        }).catch(err => {
          console.log(err);
        });
      
      break;
      case 'main':
          iziToast.info({
              title: 'انتظر',
              message: "انتظر حتى يتم تسجيلك"
          });
        post('user/login', value, false, 'application/json')
          .then((res) => {
            console.log(res);
            if(res.error){
              return iziToast.error({
                    title: 'خطأ',
                    message: `${res.error}`
            });
            }
            iziToast.success({
                  title: 'نجاح',
                  message: "نجاح"
          });

          Local('set', 'token', res.data.token);

          setTimeout(()=> {
            window.location.href = 'index.html';
          },1000);


          });
        
        break;
      case 'setting':
        post('admin/settings', value, true,'application/json')
        .then((res) => {
          if(res.error){
            iziToast.error({
                  title: 'خطأ',
                   message: `${res.error}`
              });
              return 0;
          }
          if(res.errors){
            iziToast.error({
                  title: 'خطأ',
                   message: `${res.error}`,
              onOpening: function () {
                for (let v in res.errors) {
                  console.log(res.errors.v);
                  document.querySelector(`input[name=${v}]`).style.borderColor = 'red';
                }
              },
              });
              return 0;
          }
          if(res.error){
            iziToast.error({
                  title: 'خطأ',
                   message: `${res.error}`
              });
              return 0;
          }
          iziToast.success({
                title: 'نجاح',
                message: 'تم اضافة الضبط الجديد',
            });
          return res;
        })
        .catch((err) => console.log(err.response.data));
        break;
        case 'profile':
          post('admin/updateAdmin',value, true,'application/json')
            .then((res) => {
              if(res.error){

                iziToast.error({
                      title: 'خطأ',
                       message: `${res.error}`
                  });
                  return 0;
              }

              return res;
            })
            .catch((err) => console.log(err.response.data));
            break;
            case 'medicine':
              iziToast.info({
                    title: 'انتظر',
                     message: `انتظر ريثما يتم الحفظ`
                });
            post('user/createMedicine',value, true,'application/json').then(res => {
              if(res.error){
                iziToast.error({
                      title: 'خطأ',
                       message: `${res.error}`
                  });
                  return 0;
              }
              if(res.errors){
                return iziToast.error({
                      title: 'خطأ',
                       message: `راجع بعض الحقول`,
                      onOpening: function () {
                        for (let v in res.errors) {
                          console.log(res.errors.v);
                          document.querySelector(`input[name=${v}]`).style.borderColor = 'red';
                        }
                      },
                })
              }

              iziToast.success({
                    title: 'نجاح',
                     message: `تم اضافة الدواء بنجاح`,
                    timeout : 1000,
                    onClosing:function(){
                      document.getElementById("form_submit").reset();
                    }
                });

              return res;
            })
            break;
            case 'registerPharmacy':
              iziToast.info({
                    title: 'انتظر',
                    message: `انتظر ريثما يتم تسجيل الصيدلية`,
                    timeout: 30000,
                });
            post('user/registerPharmacy',value, true,'application/json').then(res => {
              

              console.log(res);

              if(res.error){  
                console.log(res.error);
                iziToast.error({
                      title: 'خطأ',
                       message: `${res.error}`,
                  });
                  return 0;
              }
              if(res.errors){
                return iziToast.error({
                      title: 'خطأ',
                       message: `راجع بعض الحقول`,
                      onOpening: function () {
                        for (let v in res.errors) {
                          console.log(res.errors.v);
                          document.querySelector(`input[name=${v}]`).style.borderColor = 'red';
                        }
                      },
                })
              }
              console.log(res);
              iziToast.success({
                    title: 'نجاح',
                     message: `تم انشاء حساب الصيدلية بنجاح`,
                onClosing: function () {
                  window.location.href = '/';
                }
                });

            })
            break;
            case 'pharmacy':
              iziToast.info({
                    title: 'انتظر',
                    message: `انتظر ريثما يتم تسجيل الصيدلية`,
                    timeout: 30000,
                });
            post('user/registerPharmacy',value, true,'application/json').then(res => {
              console.log(res);

              if(res.error){  
                iziToast.error({
                      title: 'خطأ',
                       message: `${res.error}`,
                  });
                  return 0;
              }
              if(res.errors){
                return iziToast.error({
                      title: 'خطأ',
                       message: `راجع بعض الحقول`,
                      onOpening: function () {
                        for (let v in res.errors) {
                          console.log(res.errors.v);
                          document.querySelector(`input[name=${v}]`).style.borderColor = 'red';
                        }
                      },
                })
              }
              if(res.success == true){
                return iziToast.success({
                      title: 'نجاح',
                       message: `تم انشاء حساب الصيدلية بنجاح`,
                  });
              }

            })
            break;
            case 'user':
              iziToast.info({
                    title: 'انتظر',
                    message: `انتظر ريثما يتم تسجيل المستخدم`,
                    timeout: 30000,
                });
            post('user/registerUser',value, true,'application/json').then(res => {
              console.log(res);

              if(res.error){  
                console.log(res.error);
                iziToast.error({
                      title: 'خطأ',
                       message: `${res.error}`,
                  });
                  return 0;
              }
              if(res.errors){
                return iziToast.error({
                      title: 'خطأ',
                       message: `راجع بعض الحقول`,
                      onOpening: function () {
                        for (let v in res.errors) {
                          console.log(res.errors.v);
                          document.querySelector(`input[name=${v}]`).style.borderColor = 'red';
                        }
                      },
                })
              }
              console.log(res);
              if(res.success == true){
                return iziToast.success({
                      title: 'نجاح',
                       message: `تم انشاء حساب المستخدم بنجاح`,
                  });

              }

            })
            break;
            case 'agent':
              iziToast.info({
                    title: 'انتظر',
                    message: `انتظر ريثما يتم تسجيل المورد`,
                    timeout: 30000,
                });
            post('user/registerAgent',value, true,'application/json').then(res => {
              console.log(res);

              if(res.error){  
                console.log(res.error);
                iziToast.error({
                      title: 'خطأ',
                       message: `${res.error}`,
                  });
                  return 0;
              }
              if(res.errors){
                return iziToast.error({
                      title: 'خطأ',
                       message: `راجع بعض الحقول`,
                      onOpening: function () {
                        for (let v in res.errors) {
                          console.log(res.errors.v);
                          document.querySelector(`input[name=${v}]`).style.borderColor = 'red';
                        }
                      },
                })
              }
              console.log(res);
              if(res.success == true){
                return iziToast.success({
                        title: 'نجاح',
                        message: `تم انشاء حساب المورد بنجاح`,
                    });
              }
             

            })
            break;
            case 'captain':
              iziToast.info({
                    title: 'انتظر',
                    message: `انتظر ريثما يتم تسجيل الكابتن`,
                    timeout: 30000,
                });
            post('user/registerCaptain',value, true,'application/json').then(res => {
              console.log(res);

              if(res.data.error){  
                console.log(res.error);
                iziToast.error({
                      title: 'خطأ',
                       message: `${res.error}`,
                  });
                  return 0;
              }
              if(res.data.errors){
                return iziToast.error({
                      title: 'خطأ',
                       message: `راجع بعض الحقول`,
                      onOpening: function () {
                        for (let v in res.errors) {
                          console.log(res.errors.v);
                          document.querySelector(`input[name=${v}]`).style.borderColor = 'red';
                        }
                      },
                })
              }
              console.log(res);
              if(res.data.success == true){
                return iziToast.success({
                      title: 'نجاح',
                       message: `تم انشاء حساب الكابتن بنجاح`,
                  });
              }

            })
            break;
    default: iziToast.error({
          title: 'خطأ',
          message: 'خطأ في الصفحة'+`${pageName}`,
      });
      break;
  }
};
