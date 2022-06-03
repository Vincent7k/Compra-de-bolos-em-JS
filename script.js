const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)
let Qt = 1

cakeJson.map((item, index) =>{
    
    let cakeItem = document.querySelector('.models .cake-item').cloneNode(true)

    cakeItem.setAttribute('data-key',index)

    cakeItem.querySelector('.cake-item--name').innerHTML = item.name

    cakeItem.querySelector('.cake-item--desc').innerHTML = item.description

    cakeItem.querySelector('.cake-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`

    cakeItem.querySelector('.cake-item--img img').src = item.img

    c('.cake-area').append(cakeItem)

    cakeItem.querySelector('a').addEventListener('click',(e) =>{

        e.preventDefault()

        let key = e.target.closest('.cake-item').getAttribute('data-key')

        c('.cakeInfo h1').innerHTML = cakeJson[key].name
        c('.cakeInfo--desc').innerHTML = cakeJson[key].description
        c('.cakeInfo--actualPrice').innerHTML = `R$ ${cakeJson[key].price.toFixed(2)}`
        c('.cakeBig img').src = cakeJson[key].img

        cs('.cakeInfo--size').forEach((size,sizeIndex)=>{

            size.querySelector('span').innerHTML = cakeJson[key].sizes[sizeIndex]

        })
        

        c('.cakeInfo--qt').innerHTML = Qt


        c('.cakeWindowArea').style.opacity = 0
        c('.cakeWindowArea').style.display = 'flex'

        setTimeout(() =>{
            c('.cakeWindowArea').style.opacity = 1
        })

    })

})

function closeModal() {
    c('.cakeWindowArea').style.opacity = 0
    setTimeout(()=>{
        c('.cakeWindowArea').style.display = 'none'
    }, 500)
}

cs('.cakeInfo--cancelButton, .cakeInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal)
})

//Fazendo a quantidade 

c('.cakeInfo--qtmenos').addEventListener('click',()=>{

    if(Qt > 1){
        Qt--
        c('.cakeInfo--qt').innerHTML = Qt
    }
})

c('.cakeInfo--qtmais').addEventListener('click',()=>{
     Qt++
    c('.cakeInfo--qt').innerHTML = Qt
})
