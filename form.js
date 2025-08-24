$(document).ready(function() {
  // Agregar fila
  $("#formulario").submit(function(e) {
    e.preventDefault();
    let nombre = $("#nombre").val();
    let cedula = $("#cedula").val();
    let correo = $("#correo").val();
    let direccion = $("#direccion").val();

    let fila = `
      <tr>
        <td>${nombre}</td>
        <td>${cedula}</td>
        <td>${correo}</td>
        <td>${direccion}</td>
        <td>
          <button class="btn btn-danger btn-sm eliminar">
            <i class="bi bi-trash"></i> Eliminar
          </button>
        </td>
      </tr>`;

    $("#tabla-datos").append(fila);
    $("#formulario")[0].reset();
  });

  // Eliminar fila
  $(document).on("click", ".eliminar", function() {
    $(this).closest("tr").remove();
  });
});