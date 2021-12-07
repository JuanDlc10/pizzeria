class pizzeria {
    public pizzaTam : string = "";
    public cantidad : number = 0;
    public Total : number = 0;

    public obtener(){
        let pizzaTam : any = (<HTMLInputElement>document.getElementById("tamaño")).value;
        this.pizzaTam = pizzaTam;
        let cantidad : any = (<HTMLInputElement>document.getElementById("pizzasT")).value;
        this.cantidad = parseFloat(cantidad);
    }
    public calcular(){
        this.obtener()
        if(this.pizzaTam == "chica"){
            this.Total = this.cantidad * 130;
        }else if(this.pizzaTam == "mediana"){
            this.Total = this.cantidad * 160;
        }else if(this.pizzaTam == "grande"){
            this.Total = this.cantidad * 185;
        }else if(this.pizzaTam == "familiar"){
            this.Total = this.cantidad * 210;
        }
        (<HTMLInputElement>document.getElementById("total")).value = this.Total.toString();
    }
    public limpiarCampos(){
        (<HTMLInputElement>document.getElementById("pizzasT")).value = "";
        (<HTMLInputElement>document.getElementById("total")).value = "";
    }
}
let pizzas = new pizzeria();
function Calcular(){
    pizzas.obtener();
    pizzas.calcular();
}
function limpiar(){
    pizzas.limpiarCampos();
}