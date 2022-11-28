import React from 'react';
import { useContext } from 'react';
import UserContext from '../Context.jsx';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const AllData = () => {
    const context = useContext(UserContext);
    const allData = context.users;
    console.log(allData);
    return (
        <Card className='card'>
            <Card.Body>
                <Card.Title>Toda la información</Card.Title>
                <Card.Text>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>usuario</th>
                        <th>email</th>
                        <th>contraseña</th>
                        <th>cantidad</th>
                    </tr>
                </thead>
      <tbody>
    
                {context.users.map((user,i) => (
                    <tr>
                    <td>{i}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.balance}</td>
                  </tr>
                    ))}
</tbody>
                </Table>    
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AllData;