import React from 'react'
import swAlert from '@sweetalert/with-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function Login() {

    const navigate = useNavigate();

    const submitHandler= (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        console.log(password)
        console.log(email)


        if(email === '' || password === ''){
            swAlert(
                <h2>los campos no pueden estar vacíos</h2>
            )
        }

        if(email !== '' && !regexEmail.test(email)) {
            swAlert(
                <h2>No es un correo válido</h2>
            )
        }
        
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert(
                <h2>Credenciales inválidas, revisa por favor</h2>
            )
        }    

        axios
            .post('http://challenge-react.alkemy.org', { email,password })
            .then(respuesta=> {
                swAlert(<h2>Perfecto!</h2>)
                const tokenRecibido = respuesta.data.token
                console.log(tokenRecibido)
                localStorage.setItem('token', tokenRecibido);
                navigate("/listado")
            })

    }

  return (

    <Card style={{ width: '18rem' }} className ="mx-auto py-2 mt-10 justify-content-center align-items-center">
    
    <Card.Title>Login</Card.Title>

    <form onSubmit={submitHandler}>
        <label>
            <Card.Subtitle className="mb-2 text-muted">Correo electrónico</Card.Subtitle>
            <input type='text' name='email' />
        </label>
        <br/>
        <label>
            <Card.Subtitle className="mb-2 text-muted">Contraseña</Card.Subtitle>
            <input type='password' name='password' />
        </label>
        <br/> <br/>
        <Button type='submit' variant="outline-success">Ingresar</Button>
    </form>

    </Card>

  )
}

export default Login