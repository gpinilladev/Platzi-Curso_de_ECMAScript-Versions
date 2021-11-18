// Metodo privado

// Esta funcion de ES12 nos permite volver privadas las funciones de una clase
// para que solamente puedan ser accedidas por los otros metodos de su misma clase
// NO puede ser intanciada desde afuera gracias a #(numeral, almoahdilla, hastag, etc)
// antes de la funcion
class Message {

    constructor() {
        this.val;
    }

    #add(val) { // <- El metodo add se vuelve privado gracias a #que antepone su nombre
        this.val = val;
    }

    setData(val) {
        this.#add(val);
    }

    getData() {
        console.log(this.val);
    }


}
const message = new Message();
message.add("Hola German"); // Retorna error ya que el metodo add es privado
message.setData("German");
message.getData();