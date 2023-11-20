
// generateStructure.ts
import * as fs from 'fs';

function criarEstruturaDePastas(diretorioRaiz: string,screen:string): void {
    const pastas: string[] = [
         screen,
         screen+'localComponents',
         screen+'Store/',
    ];

    pastas.forEach(pasta => {
        const caminhoCompleto = `${diretorioRaiz}/${pasta}`;

        try {
            fs.mkdirSync(caminhoCompleto, { recursive: true });
            console.log(`Pasta criada: ${caminhoCompleto}`);
        } catch (error) {
            console.log(`Erro ao criar pasta ${caminhoCompleto}: ${error}`);
        }
    });
}

// Captura o caminho do diretório raiz a partir dos argumentos da linha de comando
const diretorioRaiz = '../App/src/screens/'; // Substitua pelo caminho desejado
const screenName = process.argv[2] || "screen"
criarEstruturaDePastas(diretorioRaiz,screenName);