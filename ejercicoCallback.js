function add(a, b, callback) {
    callback(a + b);
  }
  
  console.log('Antes de la ejecucion');
  add(3, 5, function(result) {
    console.log(result);
  });
  console.log('Despues de la ejecucion');
  
  // Resultado en pantalla
  // Antes de la ejecucion
  // 8
  // Despues de la ejecucion