const promesa = new Promise((resolve, reject)=>{
    let suma=2+8;
    if(suma==10){
        resolve("Correcto");
    }else{
        reject("Error");
    }
});

promesa.then((mensaje)=>{
   console.log(mensaje);
}).catch((eror)=>{
    console.log(error);
})

function miPromesa(){
    return new Promise((resolve, reject)=>{
        let tarea= false;
        if(tarea==true){
            let telefono={
                modelo: "Huawei",
                color:"Negro"
            }
            resolve(telefono);
        }else{
            reject("No cumpliste con la tarea, no obtienes el telefono");
        }
    });
}
miPromesa().then((telefono)=>{
    console.log(telefono);
}).catch((error)=>{
    console.log(error);
})