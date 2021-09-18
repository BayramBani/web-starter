import $ from 'jquery';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css';

export default function Table() {
   $(document).ready( function () {
     var dt = $('#example').DataTable({
         ajax: {
            url: "./data/data.php",
            dataSrc: ''
         },
         columns: [
            {data: "firstname"},
            {data: "lastname"},
            {data: "email"},
         ]
      });
   });
}
