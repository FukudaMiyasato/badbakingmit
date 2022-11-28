import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { useContext,useState } from 'react';
import UserContext from '../Context.jsx';
import Modal from 'react-bootstrap/Modal';

const Withdraw = () => {
    const context = useContext(UserContext);
    let [amount, setAmount] = useState(context.users[0].balance);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const validate = values => {
        const errors = {};
        if (!values.inputAmount) {
            errors.inputAmount = 'ingresa un número';
        } else if (values.inputAmount>amount) {
          errors.inputAmount = 'Te falta plata';
        }else if(values.inputAmount<0){
            errors.inputAmount = 'No negativos';
        }
        return errors;
      };
      
    const formik = useFormik({
        initialValues: {
          inputAmount:'',
        },
        validate,
        onSubmit: (values,{resetForm}) => {
          const newAmount = amount-=values.inputAmount;
          setAmount(newAmount);
          resetForm();
          setShow(true);
          context.users[0].balance=newAmount;
        },
      });
    return (
        <Card className='card'>
            <Card.Body>
                <Card.Title>Sacar</Card.Title>
                    <Form onSubmit={formik.handleSubmit}>
              <Form.Label>(Tienes {amount} Soles)</Form.Label>
                        <Form.Group className='mb-3'>
                            <Form.Label></Form.Label>
                            <Form.Control id="inputAmount"
                            name="inputAmount"
                            type="number" 
                            onChange={formik.handleChange}
                            value={formik.values.inputAmount}
                            placeholder='Sacar'
                            />
                            {formik.errors.inputAmount ? <div className='error'>{formik.errors.inputAmount}</div> : null}
                        </Form.Group>
                        <Button type='submit' disabled={formik.errors.inputAmount || !formik.values.inputAmount}>Sacar</Button>
                    </Form> 
            </Card.Body>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Felicidades!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu saldo ahora es de {amount} soles</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Regresar
          </Button>
        </Modal.Footer>
      </Modal>
        </Card>
    );
}

export default Withdraw;