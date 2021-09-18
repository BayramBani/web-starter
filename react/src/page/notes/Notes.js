import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notes: []
    };
  }

  componentDidMount() {
    /*fetch("http://devb/projects/github/php-starter/starter/api/note")*/
    fetch("http://localhost:8000/api/notes")
    //fetch("https://localhost:44356/api/note")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            notes: result
          });
          console.log(result);
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
          console.log(error);
        }
      )
  }

  render() {
    const {error, isLoaded, notes} = this.state;
    if (error) {
      return <div className={'container mt-5'}>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div className={'container mt-5'}>Chargement…</div>;
    } else {
      return (
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12'>
              <table className='table'>
                <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">title</th>
                  <th scope="col">content</th>
                </tr>
                </thead>
                <tbody>
                {notes.map(note => (
                  <tr key={note.id}>
                    <td>{note.id}</td>
                    <td>{note.title}</td>
                    <td>{note.content}</td>
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

export default Note;
