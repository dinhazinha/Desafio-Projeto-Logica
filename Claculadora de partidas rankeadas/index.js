let heroi = " Super-Hero"

let vitorias = 5;
let derrotas = 0;

saldoDeRankeadas = vitorias - derrotas;

function saldoDeRankeadas(vitorias, derrotas) {
    return saldoDeRankeadas
} console.log(saldoDeRankeadas);

    if (vitorias < 10) {
        console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitorias, está no nível Ferro`)
    } else if ((vitorias > 11) && (vitorias <= 20)) {
        console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitorias, está no nível Bronze`)
    } else if ((vitorias > 21) && (vitorias <= 50)) {
        console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitorias, está no nível Prata`)
    } else if ((vitorias > 51) && (vitorias <= 80)) {
        console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitorias, está no nível Ouro`)
    } else if ((vitorias > 81) && (vitorias <= 90)) {
        console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitorias, está no nível Diamante`)
    } else if ((vitorias > 91) && (vitorias <= 100)) {
        console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitorias, está no nível Lendario`)
    } else (vitorias >= 101)
        console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitorias, está no nível Imortal`);
}

