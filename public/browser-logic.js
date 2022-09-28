const productsContainer = document.querySelector('.output-container')


const showAllTask = async () => { 
      try {
            const product = await fetch('http://localhost:5000/api/products')

            if (product.length < 1) { 
                  productsContainer.innerHTML = '<h1>There is no products in catalog</h1>'
            } 
      } catch (e) {
            console.log(e.message)
      }
    
}

showAllTask() 