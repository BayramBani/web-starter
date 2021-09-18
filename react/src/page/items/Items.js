import React from 'react';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount');

    fetch("http://localhost:3000/items.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          console.log('result: ' + result);
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log('error: ' + error);
        }
      )
  }

  render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <div className={'container mt-5'}>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div className={'container mt-5'}>Chargement…</div>;
    } else {
      return (
        <div className={'container mt-5'}>
          <div className={'row'}>
            <div className={'col'}>
              <ul>
                {items.map(item => (
                  <li key={item.name}>
                    {item.name} {item.price}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Items;
