// Função para classificar o nível de herói baseado na experiência (XP)
function classificarHeroi(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = 'Ferro';
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = 'Bronze';
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = 'Prata';
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = 'Ouro';
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = 'Platina';
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = 'Ascendente';
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = 'Imortal';
    } else if (xp >= 10001) {
        nivel = 'Radiante';
    } else {
        nivel = 'Nível desconhecido';
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Exemplos
const nomeHeroi = 'Marcelinho';
const experienciaHeroi = 18000;

classificarHeroi(nomeHeroi, experienciaHeroi);

// Laço de repetição para testar múltiplos heróis
const herois = [
    { nome: 'Arthur', xp: 7000 },
    { nome: 'Judas', xp: 7001 },
    { nome: 'Lancelot', xp: 3000 },
    { nome: 'Merlin', xp: 12000 },
    { nome: 'Guinevere', xp: 9500 },
    { nome: 'Gawain', xp: 1500 },
];

herois.forEach(heroi => {
    classificarHeroi(heroi.nome, heroi.xp);
});
