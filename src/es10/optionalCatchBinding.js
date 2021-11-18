// Optional catch binding
// Esta funcion de ES10 nos permite pasar opcionalmente el parametro de error
// en el try ctach de excepcion de errores, veamos un ejemplo:

// Normalmente debiamos devolver un error en el catch
try {
    // Code block
} catch (error) { // <- Anteriormente debiamos devolver un error
    console.log('error: ', error);
}

// Ahora el parametro de error ya no es obligatorio en el catch
try {
    // Code block
} catch { // <- Ya es opcional si queremos devolver un error o no :)
    // Code block
}