export default class Cl_cliente {
    constructor(nombre, tipoServicio, edad, sexo) {
        this._nombre = "";
        this._tipoServicio = 0;
        this._edad = 0;
        this._sexo = 0;
        this._nombre = nombre;
        this._tipoServicio = tipoServicio;
        this._edad = edad;
        this._sexo = sexo;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set tipoServicio(tS) {
        this._tipoServicio = tS;
    }
    get tipoServicio() {
        return this._tipoServicio;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
}
