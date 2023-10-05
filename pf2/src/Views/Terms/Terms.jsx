import React from "react";
import { Link } from "react-router-dom";
import "./Terms.css";

function TerminosYCondiciones() {
  return (
    <div className="politik">
      <h2>Términos y Condiciones</h2>
      <p className="pepito">
        {" "}
        Fecha de entrada en vigencia: 3 de Octubre de 2023.
      </p>
      <p className="pepito"> Bienvenido a Wanderluxe.</p>
      <p className="pepito">
        {" "}
        Por favor, lea atentamente estos Términos y Condiciones antes de
        utilizar nuestro sitio web y nuestros servicios.
      </p>
      <p className="pepito">
        {" "}
        Aceptación de los Términos Al utilizar nuestro sitio web y nuestros
        servicios, usted acepta cumplir y quedar legalmente vinculado por estos
        Términos. Si no está de acuerdo con estos Términos, no utilice nuestro
        sitio web ni nuestros servicios. Le recomendamos que revise estos
        Términos periódicamente.
      </p>
      <p className="pepito">
        Reservas y Pagos A: El sitio web permite a los usuarios buscar y
        reservar alojamientos temporarios. Al hacer una reserva, usted acepta
        pagar el precio total de la reserva según las tarifas y políticas de
        cancelación aplicables.
      </p>
      <p className="pepito">
        {" "}
        B: Los precios y la disponibilidad de los alojamientos están sujetos a
        cambios sin previo aviso.
      </p>
      <p className="pepito">
        {" "}
        Política de Cancelación A: Las políticas de cancelación varían según el
        alojamiento y están claramente indicadas en la página de cada propiedad.
        Lea y comprenda la política de cancelación antes de realizar una
        reserva.
      </p>
      <p className="pepito">
        {" "}
        Responsabilidades del Usuario A: Usted acepta que será responsable de su
        conducta en nuestro sitio web y durante su estancia en los alojamientos
        reservados a través de nuestro servicio.
      </p>
      <p className="pepito">
        {" "}
        B: No está permitido el uso de nuestro sitio web para fines ilegales o
        no autorizados.
      </p>
      <p className="pepito">
        Política de Privacidad A: Nuestra{" "}
        <Link to="/Privacy" target="_blank">
          Política de Privacidad
        </Link>{" "}
        describe cómo recopilamos, utilizamos y protegemos su información
        personal. Al utilizar nuestro sitio web, usted acepta nuestra Política
        de Privacidad.
      </p>
      <p className="pepito">
        {" "}
        Propiedad Intelectual A: Todo el contenido y los materiales en nuestro
        sitio web están protegidos por derechos de autor y otros derechos de
        propiedad intelectual.
      </p>
      <p className="pepito">
        {" "}
        Limitación de Responsabilidad A: El sitio web no se hace responsable de
        pérdidas, daños o lesiones sufridos durante su estancia en un
        alojamiento reservado a través de nuestro servicio.
      </p>
      <p className="pepito">
        {" "}
        Modificaciones de los Términos A: Nos reservamos el derecho de modificar
        estos Términos en cualquier momento. Las modificaciones entrarán en
        vigencia tan pronto como se publiquen en nuestro sitio web.
      </p>
      <p className="pepito">
        {" "}
        Ley Aplicable y Jurisdicción A: Estos Términos se rigen por las leyes de
        la Republica Argentina, y cualquier disputa que surja de ellos se
        someterá a la jurisdicción exclusiva de los tribunales de la Republica
        Argentina.
      </p>
      <p className="pepito"></p>
    </div>
  );
}

export default TerminosYCondiciones;
