import Cl_cliente from "./Cl_cliente.js";

export default class Cl_empresa {
    private _ctnFemeninasMayores: number;
    private _menorEdad: number;
    private _acEdad: number ;
    private _cntClientes: number ;

constructor() {
    this._ctnFemeninasMayores = 0;
    this._menorEdad = 99999999999999999;
    this._acEdad = 0;
    this._cntClientes = 0;
}

procesarCliente(cliente: Cl_cliente): void {

// Procesar cliente
    this._cntClientes++;
// Acumular edad
    this._acEdad += cliente.edad;
// Contar femeninas mayores de edad
    if (cliente.sexo == 2 && cliente.edad >= 18) {
        this._ctnFemeninasMayores++;
    }
// Determinar menor edad
    if (cliente.edad < this._menorEdad) {
        this._menorEdad = cliente.edad;
    }
}

cantidadFemeninasMayores(): number {
    return this._ctnFemeninasMayores;
}

menorEdadAtendida(): number {
    return this._menorEdad;
}

promedioEdadClientes(): number {
    return this._acEdad / this._cntClientes;
}

}