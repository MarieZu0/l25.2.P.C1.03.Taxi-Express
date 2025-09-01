export default class Cl_cliente {
    private _nombre: string = "";
    private _tipoServicio: number = 0;
    private _edad: number = 0;
    private _sexo: number = 0;

constructor(nombre: string, tipoServicio: number, edad: number, sexo: number) {
    this._nombre = nombre;
    this._tipoServicio = tipoServicio;
    this._edad = edad;
    this._sexo = sexo;
}

set nombre(nombre: string) {
    this._nombre = nombre;
}
get nombre(): string {
    return this._nombre;
}

set tipoServicio(tS: number) {
    this._tipoServicio = tS;
}
get tipoServicio(): number {
    return this._tipoServicio;
}

set edad(edad: number) {
    this._edad = edad;
}
get edad(): number {
    return this._edad;
}

set sexo(sexo: number) {
    this._sexo = sexo;
}
get sexo(): number {
    return this._sexo;
}
}