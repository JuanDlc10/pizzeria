"use strict";
var pizzeria = /** @class */ (function () {
    function pizzeria() {
        this.pizzaTam = "";
        this.cantidad = 0;
        this.Total = 0;
    }
    pizzeria.prototype.obtener = function () {
        var pizzaTam = document.getElementById("tamaño").value;
        this.pizzaTam = pizzaTam;
        var cantidad = document.getElementById("pizzasT").value;
        this.cantidad = parseFloat(cantidad);
    };
    pizzeria.prototype.calcular = function () {
        this.obtener();
        if (this.pizzaTam == "chica") {
            this.Total = this.cantidad * 130;
        }
        else if (this.pizzaTam == "mediana") {
            this.Total = this.cantidad * 160;
        }
        else if (this.pizzaTam == "grande") {
            this.Total = this.cantidad * 185;
        }
        else if (this.pizzaTam == "familiar") {
            this.Total = this.cantidad * 210;
        }
        document.getElementById("total").value = this.Total.toString();
    };
    pizzeria.prototype.limpiarCampos = function () {
        document.getElementById("pizzasT").value = "";
        document.getElementById("total").value = "";
    };
    return pizzeria;
}());
var pizzas = new pizzeria();
function Calcular() {
    pizzas.obtener();
    pizzas.calcular();
}
function limpiar() {
    pizzas.limpiarCampos();
}
