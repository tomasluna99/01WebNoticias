import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

const ListaNoticias = () => {
  return ( 
    <>
    <aside className="col-12 col-md-4 bg-ligth ">
    <Card className="my-1">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <h4>
        <Badge bg="secondary">
        </Badge>
        </h4>
        <Card.Title>Titulo Noticia</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
    </aside>
    </>);
}
 
export default ListaNoticias;