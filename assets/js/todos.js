//Marcar las tareas hechas
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

//Click a la X para borrar la tarea
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });

  event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    //coger el texto del input
    let todoText = $(this).val();
    $(this).val('');
    //crear nuevo li y añadirlo al ul
    $('ul').append('<li><span>X</span>' + todoText + '</li>');
  }
});
