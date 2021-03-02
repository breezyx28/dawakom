import { get, post, put, DELETE} from '../helper.js';
import { Local } from '../localStorage.js';
import { notify } from '../common/notification.js';

let pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

export const Store = (value) => {
  switch (pageName) {
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
        case 'profile':
          put('user/updateProfile', value, true,'application/json')
            .then((res) => {
            
              notify(res);

              return res;
            })
            .catch((err) => { 
              notify(err);
              console.log(err.response.data);
              });
            break;

            case 'hospitals':

              iziToast.info({
                    title: 'انتظر',
                     message: `انتظر ريثما يتم الحفظ`
                });

            post('admin/hospitals',value, true,'application/json').then(res => {
              console.log(res);
              notify(res);

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
            })
            break;

            case 'labs':
              iziToast.info({
                    title: 'انتظر',
                    message: `انتظر ريثما يتم تسجيل المعمل`,
                    timeout: 30000,
                });

            post('admin/labs',value, true,'application/json').then(res => {
              

              console.log(res);

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

              notify(res);

            })
            break;

            case 'hospitalDoctors':
              iziToast.info({
                    title: 'انتظر',
                    message: `انتظر ريثما يتم تسجيل الطبيب`,
                    timeout: 30000,
                });

            post('user/createDoctor',value, true,'application/json').then(res => {
              console.log(res);

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
              notify(res);
             
            });
            break;

            case 'hospitalServices':

              iziToast.info({
                    title: 'انتظر',
                    message: `انتظر ريثما يتم إجراء العملية`,
                    timeout: 30000,
                });

            post('user/createHospitalServices', value, true,'application/json').then(res => {
              console.log(res);

      
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

             notify(res);

            })
            break;

            case 'labServices':

              iziToast.info({
                    title: 'انتظر',
                    message: `انتظر ريثما يتم تسجيل المورد`,
                    timeout: 30000,
                });

            post('user/createLabServices',value, true,'application/json').then(res => {
              console.log(res);

           
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

              notify(res);

            })
            break;

            case 'diagnosis':
              iziToast.info({
                    title: 'انتظر',
                    message: `انتظر ريثما يتم تسجيل الكابتن`,
                    timeout: 30000,
                });

            post('user/createLabDiagnosis',value, true,'application/json').then(res => {
              console.log(res);

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
            
              notify(res);

            })
            break;
    default: iziToast.error({
          title: 'خطأ',
          message: 'خطأ في الصفحة'+`${pageName}`,
      });
      break;
  }
};
