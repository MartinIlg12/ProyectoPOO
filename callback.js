/* //CALLBACK: ES UNA FUNCION QUE TIENE COMO PARAMETRO OTRA FUNCION
function callback(){
    console.log("Esto es un callback");
}
function mensaje(fn){
    fn();
}
console.log("Probando función callback")
mensaje(callback);

//EJEMPLO 2 DE CALLBACK
const nombres =["Tatiana", "Martin", "Predro"];
function miCallback(array, callback){
    array.push("Verónica");
    setTimeout(()=>{
    callback(array);
}, 3000);
}
miCallback(nombres, (array)=>{
    console.log(`He ingreado un nuevo elemento array y ahora tiene
    ${array.length} elementos`)
});

const saludo = () =>{
    console.log("Hola buenas noches");
}




 */

//Ejemplo 3 de callback
const a=["Hola", 23, true, "Pedro"]

const saludo=(nombre)=>{
    console.log(`Buenas noches ${nombre}`);
}
const mensaje=()=>{
    console.log(`Vamos a probar callbacks`);
}
const imprimir=(array)=>{
    setTimeout(()=>{
    for(i=0; i<array.length;i++){
        console.log(`Elemento ${i+1}: ${array[i]}`)
    }}),5000
}
saludo("Tatiana")
imprimir(a);
mensaje();