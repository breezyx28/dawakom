export const notify = (response, msg = null) => {

    let status = response.success;
    let message = response.message;
    let error = response.error;

    if(status){
        iziToast.success({
                title: 'نجاح',
                 message: message || msg,
                timeout : 1000,
            });

        return 0;
    }
    if(!status){
        iziToast.error({
                title: 'فشل',
                 message: error || msg,
                timeout : 1000
                })
        return 0;
    }

}