//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ datos }) {
  return (
    <div>
        <h2>Resultados</h2>
        {datos.map((dato, index) => (
          <div key={index} className="card">
            <h3>{dato.nombre} tu banda favorita es ¡{dato.banda}!</h3>
          </div>
        ))}
    </div>
  );
}

export default Card;
