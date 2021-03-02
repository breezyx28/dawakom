// import { post, get } from './helper.js';
import { Store } from './http/requests.js';

$(document).ready(function () {
  $('#form_submit').submit(function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    Store(formData);
  });
});

