import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function Listado() {

    const navigate = useNavigate()

    useEffect(() => {
      
        const token = localStorage.getItem('token');
      if(token === null ){
        console.log(token,'vacio');
        navigate('/')
      }
    }, [])
    

  return (
    <div>
        <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

    </div>
  )
}

export default Listado