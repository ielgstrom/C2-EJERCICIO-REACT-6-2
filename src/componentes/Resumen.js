import PropTypes from "prop-types";

export const Resumen = (props) => {
  const { retrocedePaso, datosRegistro, datosPersonales, datosAcceso } = props;
  return (
    <>
      <h2>Resumen</h2>

      <div>Nombre: {datosPersonales.nombre}</div>
      <div>Apellido: {datosPersonales.apellido}</div>
      <div>Fecha de Nacimiento: {datosPersonales.fechaNacimiento}</div>
      <div>Email: {datosPersonales.email}</div>
      <div>Nombre de Usuario: {datosRegistro.username}</div>
      <div>Contraseña: {datosRegistro.password}</div>

      <button className="btn btn-info" onClick={retrocedePaso}>
        Anterior
      </button>
    </>
  );
};

Resumen.propTypes = {
  retrocedePaso: PropTypes.func.isRequired,
};
