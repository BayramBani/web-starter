import $ from 'jquery';

export default function Ajax() {
   $(document).ready(function () {
      $.ajax({
         type: 'POST',
         url : './data/data.php',
         success :function (d) {
            $('#ajax').html(d);
         }
      })
   });
}
