let mercado = prompt("Que tipo de fruta estas buscando?: ");

switch(mercado){
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $10 el kilo")
        break;
    case "Peras":
        console.log("Las peras cuestan $40 el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $25 el kilo")
        break;
    default:
        console.log(`Lo siento no contamos con ${mercado}`);

}



