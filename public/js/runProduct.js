import {product,tour} from "./product.js";

let urlSearchParams = new URLSearchParams(window.location.search)
let params = Object.fromEntries(urlSearchParams.entries())

// console.log(products[params.id - 1]);


function runProduct(){
  let produc = product[params.id -1]
  let productDiv = document.getElementById('product')
  const divProduct = document.createElement('div') 
  divProduct.className = 'grid grid-cols-3 rounded-2xl overflow-hidden shadow-lg max-lg:grid-cols-1'
  divProduct.innerHTML =   `
  <div class="image-product col-span-1 w-full h-[500px] max-sm:h-56 overflow-hidden relative">
        <span class="transition-all duration-200 p-2 rounded-full flex justify-center items-center bg-white cursor-pointer absolute top-8 -right-10">
          <svg fill="gray" class="w-6 h-6" id="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg> 
        </span>         
      <img src="${produc.image}" class="w-full h-full object-cover" alt="">
    </div>
    <div class="col-span-2 max-sm:gap-5 bg-white py-10 px-14 max-sm:px-2 max-sm:py-5 flex flex-col gap-32 w-full">

      <div class="flex flex-col gap-10 max-sm:gap-4">
        <div class="flex justify-between items-center">
          <span class="text-2xl font-medium">${produc.name}</span>
          <span class="flex gap-1 items-center">
            <span>${produc.like}</span>
            <svg class="w-5 h-5 fill-red-500" id="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path class="" d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg> 
          </span>
        </div>
        <p class="text-base max-sm:text-sm max-sm:leading-8 text-justify font-normal text-gray-800 leading-8 py-3">
          ${produc.description}
        </p>
      </div>
      <div class="flex justify-end items-center text-gray-500 rounded-md py-2 px-2 bg-gray-300">
        <div class="flex gap-2 items-center">
          <span>شبی از</span>
          <span class="text-4xl font-semibold text-blue-600""> ${produc.price} </span> 
          <span>تومان</span>
        </div>
      </div>

    </div>
`

  productDiv.appendChild(divProduct)

  
}

runProduct()


const heartIcon = document.getElementById('heart')
  let redIcon = false
  heartIcon.addEventListener('click',e=>{
    if(!redIcon){
      heartIcon.setAttribute('fill','red')
      redIcon = true
    }else{
      heartIcon.setAttribute('fill','gray')
      redIcon = false
    }
  })

