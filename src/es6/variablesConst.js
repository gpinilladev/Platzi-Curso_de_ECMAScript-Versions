
// Const es muy similar a let con una pequeña gran diferencia: No puedes re asignar su valor
function explainConst1() {
    const x = 10;
    console.log('x: ', x); // Output 10
}
explainConst1();

// Que pasa si tratamos de reasignar la variable const
// Nos arrojara un error ya que una variable const no puede reasignar su valor
function explainConst2() {
    const x = 10;
    console.log('x: ', x); // Output 10
    x = 20; // TypeError: Assignment to constant variable.
    console.log('x: ', x); // Output Error - TypeError: Assignment to constant variable.
}
explainConst2();

// En general es adecuado usar const para variable que sabemos que no van a cambiar su valor
