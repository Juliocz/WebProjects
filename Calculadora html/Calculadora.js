/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var Calculadora = /** @class */ (function () {
    function Calculadora() {
        if (this.grupo_signos === undefined) {
            this.grupo_signos = null;
        }
        this.signos = ['^', '/', '*', '-', '+'];
        this.grupo_signos = [null, null, null];
        this.grupo_signos[0] = new Calculadora.GrupoSignos(this, '^');
        this.grupo_signos[1] = new Calculadora.GrupoSignos(this, '/', '*');
        this.grupo_signos[2] = new Calculadora.GrupoSignos(this, '-', '+');
    }
    Calculadora.Resolver = function (operacion_completa) {
        var c = new Calculadora();
        while ((c.BuscarPrimerSigno(operacion_completa) !== -1)) {
            {
                operacion_completa = c.BuscarOperacion(operacion_completa);
            }
        }
        ;
        return /* parseDouble */ parseFloat(operacion_completa);
    };
    Calculadora.prototype.BuscarOperacion = function (operacion_completa) {
        for (var i = 0; i < this.grupo_signos.length; i++) {
            {
                var indice_signo = -1;
                indice_signo = this.grupo_signos[i].findSigne(operacion_completa);
                if (indice_signo !== -1) {
                    var inicio = operacion_completa.substring(0, indice_signo);
                    var fin = operacion_completa.substring(indice_signo + 1, operacion_completa.length);
                    var numero1 = this.ObtenerUltimoNumero(inicio);
                    var numero2 = this.ObtenerPrimerNumero(fin);
                    var n1 = void 0;
                    var n2 = void 0;
                    var r = 404.0;
                    n1 = /* parseDouble */ parseFloat(numero1);
                    n2 = /* parseDouble */ parseFloat(numero2);
                    switch ((this.grupo_signos[i].obtenerSignoEncontrado()).charCodeAt(0)) {
                        case 94 /* '^' */:
                            r = Math.pow(n1, n2);
                            break;
                        case 47 /* '/' */:
                            r = n1 / n2;
                            break;
                        case 42 /* '*' */:
                            r = n1 * n2;
                            break;
                        case 45 /* '-' */:
                            r = n1 - n2;
                            break;
                        case 43 /* '+' */:
                            r = n1 + n2;
                            break;
                    }
                    operacion_completa = /* replace */ operacion_completa.split(numero1 + this.grupo_signos[i].obtenerSignoEncontrado() + numero2).join("" + r);
                    return operacion_completa;
                }
            }
            ;
        }
        return operacion_completa;
    };
    Calculadora.prototype.ObtenerUltimoNumero = function (operacion) {
        var indiceUltimosigno = this.BuscarUltimoSigno(operacion);
        if (indiceUltimosigno === -1)
            return operacion;
        else {
            if (indiceUltimosigno === 0)
                return operacion.substring(indiceUltimosigno, operacion.length);
            else
                return operacion.substring(indiceUltimosigno + 1, operacion.length);
        }
    };
    Calculadora.prototype.ObtenerPrimerNumero = function (operacion) {
        var indicePrimersigno = this.BuscarPrimerSigno(operacion);
        if (indicePrimersigno === -1)
            return operacion;
        else {
            return operacion.substring(0, indicePrimersigno);
        }
    };
    Calculadora.prototype.BuscarPrimerSigno = function (operacion) {
        for (var i = 1; i < operacion.length; i++) {
            {
                for (var index6657 = 0; index6657 < this.signos.length; index6657++) {
                    var s = this.signos[index6657];
                    {
                        if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(operacion.charAt(i)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s))
                            return i;
                    }
                }
            }
            ;
        }
        return -1;
    };
    Calculadora.prototype.BuscarUltimoSigno = function (operacion) {
        var indexT = -10;
        var indexTF = -1;
        for (var i = operacion.length - 1; i >= 0; i--) {
            {
                for (var index6658 = 0; index6658 < this.signos.length; index6658++) {
                    var s = this.signos[index6658];
                    {
                        if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(operacion.charAt(i)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s)) {
                            if (indexTF === -1)
                                indexTF = i;
                            else
                                indexT = i;
                        }
                    }
                }
            }
            ;
        }
        if (indexT + 1 === indexTF)
            return indexT;
        else
            return indexTF;
    };
    return Calculadora;
}());
Calculadora["__class"] = "Calculadora";
(function (Calculadora) {
    var GrupoSignos = /** @class */ (function () {
        function GrupoSignos(__parent) {
            var grupo = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                grupo[_i - 1] = arguments[_i];
            }
            this.__parent = __parent;
            if (this.grupo === undefined) {
                this.grupo = null;
            }
            this.signoPillado = '0';
            this.grupo = grupo;
        }
        GrupoSignos.prototype.findSigne = function (operacion) {
            for (var i = 1; i < operacion.length; i++) {
                {
                    for (var index6659 = 0; index6659 < this.grupo.length; index6659++) {
                        var c = this.grupo[index6659];
                        if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(operacion.charAt(i)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c)) {
                            this.signoPillado = c;
                            return i;
                        }
                    }
                }
                ;
            }
            return -1;
        };
        GrupoSignos.prototype.obtenerSignoEncontrado = function () {
            return this.signoPillado;
        };
        return GrupoSignos;
    }());
    Calculadora.GrupoSignos = GrupoSignos;
    GrupoSignos["__class"] = "Calculadora.GrupoSignos";
})(Calculadora || (Calculadora = {}));
