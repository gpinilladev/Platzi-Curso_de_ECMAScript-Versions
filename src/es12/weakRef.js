// weakRef

// Esta utilidad nos permite mantener una referencia debil a otro objeto
// sin evitar que ese objeto sea recogido por el garbage collector que js incorpora

class AnyClass {
    constructor(element) {
        this.ref = weakRef(element); // <- Evita que el objeto sea reocigo por el manejador de la basura en memoria
    }
}