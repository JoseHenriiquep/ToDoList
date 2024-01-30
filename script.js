function adicionar(){
    //PEGANDO ELEMENTOS DO CORPO HTML
    var task = document.getElementById('txt')
    var list = document.getElementById('list')
    //VERIFICAÇÃO SE O CAMPO ESTÁ VAZIO
    if (task.value.length == 0) {
        alert('Digite uma tarefa!')
    } else {
        //CRIANDO A LISTA E OS BOTÕES
        var check = document.createElement('input')
        check.type = 'checkbox'
        list.appendChild(check)
        var item = document.createElement('p')
        item = document.createTextNode(`${task.value}`);
        list.appendChild(item)
        var botao = document.createElement('button')
        botao.innerHTML = ('Excluir')
        botao.onclick = function excluir(){
            check.remove()
            item.remove()
            botao.remove()
            br.remove()
        }
        list.appendChild(botao)
        var br = document.createElement('br')
        list.appendChild(br)
    }
    //ESVAZIA O CAMPO DE TEXTO E DEIXA ELE COM FOCO
    task.value = ''
    task.focus()
}