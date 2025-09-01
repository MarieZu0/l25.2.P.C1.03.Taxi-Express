export default class Cl_empresa {
    constructor() {
        this._ctnFemeninasMayores = 0;
        this._menorEdad = 99999999999999999;
        this._acEdad = 0;
        this._cntClientes = 0;
    }
    procesarCliente(cliente) {
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
    cantidadFemeninasMayores() {
        return this._ctnFemeninasMayores;
    }
    menorEdadAtendida() {
        return this._menorEdad;
    }
    promedioEdadClientes() {
        return this._acEdad / this._cntClientes;
    }
}
