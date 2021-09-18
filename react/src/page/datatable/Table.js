import React from 'react';
import 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
const $ = require('jquery');

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notes: []
    };
  }

  componentDidMount() {
    fetch("http://demos/php/api/note/getNotes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            //notes: result.notes
            notes: result
          });
          $(document).ready(function() {
            $('#tab').DataTable( );
          } );
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, notes } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <table id='tab' className='table table-striped table-bordered table-sm' >
                <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">text</th>
                </tr>
                </thead>
                <tbody>
                {notes.map(note => (
                  <tr key={note.id}>
                    <td>{note.id}</td>
                    <td>{note.text}</td>
                  </tr>
                ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Table;
