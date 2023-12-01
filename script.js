data = [
    {
        apartamento: '01',
        metragem: 45,
        preco: 210.950,
    },
    {
        apartamento: '02',
        metragem: 50,
        preco: 250.250,
    },
    {
        apartamento: '03',
        metragem: 55,
        preco: 380.670,
    },
    {
        apartamento: '04',
        metragem: 60,
        preco: 410.200,
    },
    {
        apartamento: '05',
        metragem: 65,
        preco: 450.900,
    }
]

const handleGetPricePrdiction = () => {
    const area = document.querySelector('#metragem').value
    const previsao = document.querySelector('#previsao')

    if (area.trim() === '') {
        return
    } 

    let totalMetragem = 0
    let totalPreco = 0
    let totalMetragemXpreco = 0
    let totalMetragemAoQuadrado = 0 

    data.forEach(function(index) {
        totalMetragem += index.metragem
        totalPreco += index.preco
        totalMetragemXpreco += (index.metragem * index.preco)
        totalMetragemAoQuadrado += (index.metragem **2)
    });

    let m = data.length

    let a = (m * totalMetragemXpreco - totalMetragem * totalPreco) / (m * totalMetragemAoQuadrado - totalMetragem **2)

    let b = totalPreco / data.length - a * totalMetragem / data.length

    let resultado = a * area + b

    previsao.innerHTML = parseFloat(resultado).toFixed(3);

    resetForm()
}

const resetForm = () => document.querySelector('#metragem').value = ''
