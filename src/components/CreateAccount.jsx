import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { useContext,useState } from 'react';
import UserContext from '../Context.jsx';
import Modal from 'react-bootstrap/Modal';

const CreateAccount = () => {
  const context = useContext(UserContext);
  const [name,setName] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const validate = values => {
    const errors = {};
    if (!values.inputName) {
      errors.inputName = 'Obligatorio';
    } else if (values.inputName.length > 15) {
      errors.inputName = 'Ta muy largo tu nombre';
    }
    if (!values.inputPassword) {
      errors.inputPassword = 'Obligatorio';
    } else if (values.inputPassword.length < 8) {
      errors.inputPassword = 'Ta muy chico tu contraseña';
    }
    if (!values.inputEMail) {
      errors.inputEMail = 'Obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.inputEMail)) {
      errors.inputEMail = 'Tu correo ta mal';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      inputName:'',
      inputPassword:'',
      inputEMail:''
    },     
    validate,
    onSubmit: (values, { resetForm }) => {
      
      setName(values.inputName);

      resetForm();
      setShow(true);
      context.users.push({
        username:values.inputName,
        email:values.inputEMail,
        password:values.inputPassword,
        balance:0});
    },
  });

    return (

    <Card className='card'>
      <Card.Body>
        <Card.Title>Create Account</Card.Title>

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasic'>
            <Form.Label>Name</Form.Label>  
            <Form.Control 
                          name="inputName"
                          type="name" 
                          onChange={formik.handleChange}
                          value={formik.values.inputName}
                          placeholder='Pon tu nombre' />
                          {formik.errors.inputName ? <div className='error'>{formik.errors.inputName}</div> : null}
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>  
            <Form.Control 
                            name="inputEMail"
                            type="email" 
                            onChange={formik.handleChange}
                            value={formik.values.inputEMail}
                            placeholder='Tu correo'/>
                            {formik.errors.inputEMail ? <div className='error'>{formik.errors.inputEMail}</div> : null}
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>  
            <Form.Control 
                            name="inputPassword"
                            type="password" 
                            onChange={formik.handleChange}
                            value={formik.values.inputPassword}
                            placeholder='Tu contraseña'/>
                            {formik.errors.inputPassword ? <div className='error'>{formik.errors.inputPassword}</div> : null}
          </Form.Group>
          
            <Button type='submit' disabled={formik.errors.inputName || formik.errors.inputPassword || formik.errors.inputEMail || !formik.values.inputName}>
              Crear cuenta
            </Button>
        </Form>
      </Card.Body>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Felicidades {name}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu cuenta fue creada con exito</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Crear una cuenta nueva
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
    
    );
}

export default CreateAccount;