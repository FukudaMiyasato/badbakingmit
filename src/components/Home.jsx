import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
    <Card className='card'>
        <Card.Body>
          <Card.Title>Home</Card.Title>
          <Card.Text>
            Bienvenidos a la ...

            <img className='banca' src={require('../img/banca.png')}/>
       

          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Home;