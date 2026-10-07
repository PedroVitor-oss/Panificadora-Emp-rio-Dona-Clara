function ChangeStatus() {
    const zap = document.getElementById('zap');
    zap.classList.toggle('active');
}


function SendMensagem() {
    const input = document.querySelector('.cont-input input');
    SendMensage(input.value);


    // resposta 
    //inputu tem que ser 1 (pao de queijo) e 2 (pao frances) e 3 ( cafe da casa)
    let produto = '';
    switch (input.value) {
        case '1':
            produto = 'Pão de queijo';
            break;
        case '2':
            produto = 'Pão francês';
            break;
        case '3':
            produto = 'Café da casa';
            break;
        default:
            produto = 'Produto não encontrado';
            break;
    }
    input.value = '';
    if (produto == 'Produto não encontrado') {
        ReciverMensage('Produto não encontrado');
        return;
    }

    ReciverMensage("Para procegui faça o pagamento de piz do produtor valor de R$ 10,00");
    ReciverMensage("123e4567-e89b-12d3-a456-426614174000");

    setTimeout(() => {
        ReciverMensage(`O produto ${produto} esta sendo preparado...`);
        AddInList(produto);
    }, 2000);
}
function UpdateScroll() {
    const contmensagem = document.querySelector('.cont-mensagem');
    contmensagem.scrollTop = contmensagem.scrollHeight;
}

function AddInList(produto) {
    const list = document.querySelector("div.cont-lista");
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
    
                <div class="info">
                    <h2>${produto}</h2>
                    <p> Para: João (41) 99999-9999</p>
                </div>
                <div class="status">
                    <input type="checkbox" name="entregue" id="entregue">
                    <label for="entregue">
                        <span class="entregue"></span>
                    </label>
                </div>
    
    `

    list.appendChild(item);
    ProdutoEntregue();
}

function SendMensage(mensage) {
    const contmensagem = document.querySelector('.cont-mensagem');
    const sendMensagem = document.createElement('div');
    sendMensagem.classList.add('mensagem');

    const body = `
        <div class="send">
            <p>${mensage}</p>
            <span>${new Date().getHours()}:${new Date().getMinutes()}</span>
        </div>
    `
    sendMensagem.innerHTML = body;
    contmensagem.appendChild(sendMensagem);
    UpdateScroll()
}
function ReciverMensage(mensage) {
    const contmensagem = document.querySelector('.cont-mensagem');

    const receiveMensagem = document.createElement('div');
    receiveMensagem.classList.add('mensagem');
    receiveMensagem.innerHTML = `
        <div class="receive">
            <p>${mensage}</p>
            <span>${new Date().getHours()}:${new Date().getMinutes()}</span>
        </div>
    `;
    contmensagem.appendChild(receiveMensagem);
UpdateScroll()
}

function ProdutoEntregue() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                ReciverMensage('O produto esta pronto pra entrega!');
            }
        });
    });
}
