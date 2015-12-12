var uri = 'http://localhost:49492/api/Actividad?periodo=2015-03&estado=A';

function CursosxActividad() {
    jQuery.support.cors = true;
    $.ajax({
        url: 'http://localhost:49492/api/Actividad?periodo=2015-03&estado=A',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}


function WriteResponse(cursos) {
    var strResult = "<table><th>Codigo</th><th>Curso</th><th>Fecha</th><th>Periodo</th><th>Modalidad</th><th>Docente</th><th>Estado</th>";
    $.each(cursos, function (index, cursos) {
        strResult += "<tr><td>" + cursos.Codigo + "</td><td> " + cursos.Curso + "</td><td>" + cursos.Fecha + "</td><td>" + cursos.Periodo + "</td><td>" + cursos.Modalidad + "</td><td>" + cursos.Docente +"</td><td>" + cursos.Estado+ "</td></tr>";
    });
    strResult += "</table>";
    $("#divResult").html(strResult);
}

function find() {
    var periodo = $('#periodo').val();
    var estado = $('#estado').val();


    $.getJSON(uri + 'periodo=' + periodo + '&estado=' + estado)
      .done(function (data) {
          $.each(data, function (key, item) {
              // Add a list item for the product.
              $('<li>', { text: formatItem(item) }).appendTo($('#products'));
          });
      });
}

function guardarActividad(event) {
    jQuery.support.cors = true;
    event.preventDefault();
    var errorCount = 0;
    $('#guardarActividad input').each(function (index, val) {
        if ($(this).val() === '') { errorCount++; }
    });
    if (errorCount === 0) {

        var nuevaActividad = {
            'codigoCurso': '20', //$('#guardarActividad select#selectCurso').val(),
            'codigoTipoCurso':'32',// $('#guardarActividad select#selectTipo').val(),
            'titulo': $('#guardarActividad input#inputTitulo').val(),
            'fechaInicio': $('#guardarActividad input#datepicker1').val(),
            'fechaFin': $('#guardarActividad input#datepicker2').val(),
            'codigoSesion': '26',// $('#guardarActividad select#selectSesion').val(),
            'codigoEstado':'18', //$('#guardarActividad select#selectEstado').val(),
            'descripcion': $('#guardarActividad select#textareaDesc').val(),
            'usuarioCreacion': 'admin',
            'codigoModalidad': '17',
            'codigoPeriodo':'17'
        }

        $.ajax({
            type: 'GET',
            data: nuevaActividad,
            url: 'http://localhost:49492/api/Actividad/crearActividad?codigoCurso=20&codigoModalidad=17&codigoPeriodo=17&codigoTipoCurso=32&titulo=Test&fechaInicio=2015-04-12%2020:44:55.000&fechaFin=2015-04-16%2020:44:55.000&codigoSesion=26&codigoEstado=18&descripcion=xyz&usuarioCreacion=datas',

          //  dataType: 'JSON'
            data: JSON.stringify(nuevaActividad),
            contentType: "application/json;charset=utf-8"

          
        }).done(function (response) {
            // Check for successful (blank) response
            if (response.msg === '') {
                // Clear the form inputs
                $('#guardarActividad input').val('');
                $('#guardarActividad select').val('');
                // Update the table
                alert('actualizar vista');
            }
            else {
                alert('Error: ' + response.msg);
            }
        });

    } else {
        // If errorCount is more than 0, error out
        alert('Por favor, ingresar todos los campos');
        return false;
    }
}

$(document).ready(function () {
    // Add Team button click
    $('#btnGuardarActividad').on('click', guardarActividad);
});