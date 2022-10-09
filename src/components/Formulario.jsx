import React from "react";
import { Form, Col } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form className="container border rounded py-3 ">
      <Form.Group
        className="justify-content-center"
        controlId="Form.ControlInput2"
      >
        <Col sm="2">
          <Form.Label sm="2" className="lead fs-5">
            Buscar por categoria
          </Form.Label>
        </Col>
        <Col sm="8">
          <Form.Select sm="4" aria-label="Default select">
            <option value="">Seleccione una opción...</option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="environment">Medio Ambiente</option>
            <option value="food">Comida</option>
            <option value="health">Salud</option>
            <option value="politics">Politica</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnología</option>
            <option value="top">Mas leídas</option>
            <option value="world">Mundo</option>
          </Form.Select>
        </Col>
        <Form.Text className="text-muted">
          Mantenete al tanto con nuestra App.
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
