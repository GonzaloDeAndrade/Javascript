//comentario




let contadorhamburg = 0;
let preciohamburg=0;
let contadorprecio=0;
let descuento1=0;
let descuento2=0;
let tipohamburguesa=" ";
let seguir=prompt ("Desea realizar su pedido?");
while ((seguir !== "no")&& (seguir !== "No")){
    let hamburguesa= prompt("Ingrese la hamburguesa que desea");
    tipohamburguesa= tipohamburguesa + hamburguesa + ",";
    preciohamburg=parseInt(prompt("Ingrese el precio de la hamburguesa"))
    
    contadorprecio=contadorprecio+preciohamburg;
    contadorhamburg=contadorhamburg+1;
    seguir=prompt("Desea continuar?");

}
descuento1= (20*contadorprecio)/100;
descuento2= (10*contadorprecio)/100;
const resultadofinal=descuentoTotal(contadorhamburg,contadorprecio,descuento1,descuento2);
function descuentoTotal(contador,precio,descuento1,descuento2)
{
    
let resultado = 0;
    if(contador>=3)
    {
        resultado= precio - descuento1;
    }
    else if (contador===2){
        resultado = precio - descuento2;
    }
    return resultado;

}

if (contadorhamburg>=3){
console.log ("Usted pidio: "+ tipohamburguesa, ".En total son "+ contadorhamburg, ".Recibe un descuento de "+descuento1, ". El total a pagar es de"+resultadofinal)
}
else if (contadorhamburg===2){
    console.log("Usted pidio: "+ tipohamburguesa, ".En total son "+ contadorhamburg, ".Recibe un descuento de "+descuento2, ". El total a pagar es de"+resultadofinal);

}
else{
    console.log("Usted pidio: "+ tipohamburguesa, ",En total son "+ contadorhamburg, ".No recibe descuento. El total a pagar es de " +resultadofinal);

}
