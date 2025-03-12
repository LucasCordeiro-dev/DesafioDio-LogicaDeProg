let heroName = "Zenitsu"
let heroXp= 10001
let nivel;

switch(true){
    case heroXp < 1000:
    nivel = "Ferro"
    break

    case heroXp >= 1001 && heroXp <=2000:
    nivel = "Bronze"
    break

    case heroXp >= 2001 && heroXp <=5000:
    nivel = "Prata"
    break

    case heroXp >=5001 && heroXp <=7000:
    nivel = "Ouro"
    break

    case heroXp >=7001 && heroXp <=8000:
    nivel = "Platina"
    break

    case heroXp >= 8001 && heroXp <=9000:
    nivel = "Ascendente"
    break

    case heroXp >= 9001 && heroXp <= 10000:
    nivel = "Imortal"
    break

    case heroXp >= 10001:
    nivel = "Radiante"
    break

}

console.log(`O herói ${heroName} está no nível ${nivel}`);