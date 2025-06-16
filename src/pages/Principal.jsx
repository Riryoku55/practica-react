import Cartilla from '../components/Cartilla';

const Principal = () => {
  const actores = [
    {
      nombre: 'Leonardo DiCaprio',
      imagen: 'https://i.pinimg.com/736x/a5/3e/ce/a53eced7c8f64dba141f32287fef7127.jpg',
    },
    {
      nombre: 'Scarlett Johansson',
      imagen: 'https://i.pinimg.com/736x/2e/81/60/2e816084a940630f5766dc4623ca6128.jpg',
    },
    {
      nombre: 'Morgan Freeman',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXR1lWsl0oNlAMuAo9SSL3if4PkC4qchdPgA&s',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {actores.map((actor, i) => (
        <Cartilla key={i} nombre={actor.nombre} imagen={actor.imagen} />
      ))}
    </div>
  );
};

export default Principal;
