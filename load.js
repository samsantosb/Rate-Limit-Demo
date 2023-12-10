const autocannon = require('autocannon');
const { promisify } = require('util');

async function runLoadTest() {
    try {
        // Configuração do Autocannon para fazer muitas chamadas
        const result = await promisify(autocannon)({
            url: 'http://localhost:3000/hello',
            connections: 100, // número total de conexões simultâneas aumentado
            duration: 20, // duração total do teste aumentada
            pipelining: 10, // número de requisições pipeline por conexão
        });

        console.log('Teste de carga finalizado');
        console.log(result);
    } catch (error) {
        console.error('Erro durante o teste de carga:', error);
    }
}

runLoadTest();
