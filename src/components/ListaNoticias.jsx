import React from "react"; 
import { Card, Button, Badge } from "react-bootstrap"; 


//al principio tuve problemas para que me tome los valores de la API al llamarlos mediante el prop "noticia"

const ListaNoticias = ({nuevo}) => { 
  
  return ( 
    <>
    <aside className="col-12 col-md-4 bg-ligth">
    <Card className="m-4 py-4" >
      <Card.Img variant="top" src={nuevo.image_url}/>
      <Card.Body>
        <h4>
        <Badge bg="secondary">{nuevo.category}
        </Badge>
        </h4>
        <Card.Title>{nuevo.title}</Card.Title>
        <Card.Text>
          {nuevo.description}
        </Card.Text>
        <Button variant="primary">Leer</Button> 
      </Card.Body>
    </Card> 
    </aside>
    </>
    );
};
 
export default ListaNoticias;