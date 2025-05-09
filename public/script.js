const lista = document.getElementById('lista-usuarios');
const form = document.getElementById('form-usuario');
const nomeInput = document.getElementById('nome');

const API_URL = '/usuarios';

//criando lista de usuarios

function carregarUsuarios() {
    fetch(API_URL)
        .then(res => res.json()) // converte a resposta em JSON
        .then (usuarios => {
            console.table(usuarios); // imprime a lista de usuarios no console
            lista.innerHTML = '';
            usuarios.forEach(user => {
                const li = document.createElement('li');
                li.innerHTML = `${user.nome} 
                <button onclick="deletarUsuario(${user.id})">Excluir</button>`; //nao tem virgula antes do onclick, porque é um atributo do elemento li
                lista.appendChild(li);
            });
           
        });
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = nomeInput.value.trim();
    if (!nome) return;

    fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, // define o tipo de conteúdo
        body: JSON.stringify({ nome }) // converte o objeto em JSON
    })
        .then(() => {
            nomeInput.value = ''; // limpa o campo de entrada
            carregarUsuarios(); // recarrega a lista de usuários

        });
});

function deletarUsuario(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            carregarUsuarios();
        });
}

carregarUsuarios(); // Carrega os usuários ao iniciar a página

