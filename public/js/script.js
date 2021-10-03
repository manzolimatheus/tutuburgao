lanches = [
    {
        nome: 'Big Bob',
        caracteristicas: [
            '2 Hambúrgueres',
            'Muito queijo Cheddar',
            'Salada'
        ],
        preco: 'R$20.00'
    },
    {
        nome: 'Little Billy',
        caracteristicas: [
            '1 Hambúrguer',
            'Queijo Cheddar',
            'Tomates',
            'Alface Americana'
        ],
        preco: 'R$16.00'
    },
    {
        nome: 'The Shark',
        caracteristicas: [
            '1 Hambúrguer',
            'Queijo prato',
            'Tomates',
            'Cebola',
            'Alface americana'
        ],
        preco: 'R$18.00'
    },
    {
        nome: 'Cheese Pop',
        caracteristicas: [
            '1 Hambúrgueres',
            'Muito queijo Cheddar',
            'Bacon crocante',
            'Pão amanteigado'
        ],
        preco: 'R$22.00'
    }
]

function ShowInfo(id){

    const myModal = new bootstrap.Modal(document.getElementById('myModal'))
    const data = lanches[id]
    let ul = '<ul>'
    data.caracteristicas.forEach(ingrediente => {
        ul += `<li>${ingrediente}</li>`
      })

    document.getElementById('modaltitle').innerText = data.nome;
    document.getElementById('modalcontent').innerHTML = `
    <div class="row">
    <div class="col-sm">
     <img src="../public/img/burguer${id + 1}.jpg" class="img-fluid rounded">
    </div>
    <div class="col-sm">
    <h4><strong>${data.nome}</strong></h4>
    <hr>
    <h5>Características</h5>
    ${ul}
    </ul>
    <hr>
    <h5>Preço</h5>
    <p">${data.preco}</p>
    </div>
    </div>
    `

    myModal.show()
}