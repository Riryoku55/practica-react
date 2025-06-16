import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const peliculas = [
  {
    titulo: 'El Padrino',
    resumen: 'La historia de una familia mafiosa italoamericana liderada por Vito Corleone.',
  },
  {
    titulo: 'Forrest Gump',
    resumen: 'Un hombre con un coeficiente intelectual bajo presencia eventos históricos de EE.UU.',
  },
  {
    titulo: 'Interestelar',
    resumen: 'Exploradores viajan a través de un agujero de gusano para salvar a la humanidad.',
  },
  {
    titulo: 'El Señor de los Anillos',
    resumen: 'Un hobbit debe destruir un anillo maligno para salvar la Tierra Media.',
  },
  {
    titulo: 'Titanic',
    resumen: 'Una historia de amor a bordo del famoso barco que naufragó en 1912.',
  },
];

const ModalesPeliculas = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const abrirModal = (index) => setModalIndex(index);
  const cerrarModal = () => setModalIndex(null);

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {peliculas.map((pelicula, i) => (
        <div key={i}>
          <Button color="primary" onClick={() => abrirModal(i)}>
            {pelicula.titulo}
          </Button>

          <Modal isOpen={modalIndex === i} toggle={cerrarModal}>
            <ModalHeader toggle={cerrarModal}>{pelicula.titulo}</ModalHeader>
            <ModalBody>{pelicula.resumen}</ModalBody>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default ModalesPeliculas;
