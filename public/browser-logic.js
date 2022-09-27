const productsContainer = document.querySelector('.output-container')


const showAllTask = async () => { 
      try {const data: {product}} = fetch('http://localhost:5000/api/products')

      if (product.length < 1) { 
            productsContainer.innerHTML = '<h1>There is no products in catalog</h1>'
      }
}
