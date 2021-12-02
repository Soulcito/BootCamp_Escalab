var arrProducts = [];

function addProduct() {
   var name = document.getElementById('pName').value;
   var price = document.getElementById('pPrice').value;
   var category = document.getElementById('sproduct').value;
   var image = document.getElementById('pDocument').files[0].name;

   var objProduct = new Object();
   objProduct.name = name;
   objProduct.price = price;
   objProduct.category = category;
   objProduct.image = "img/" + image;

   arrProducts.push(objProduct);

   setProducts();
}

function setProducts(){
   var divProducts = document.getElementById('divProducts');
   divProducts.innerHTML = '';

   for(var i = 0; i < arrProducts.length; i++) {
      var img = document.createElement('img');
      var pArea = document.createElement('p');
      var pName = document.createElement('p');
      var pPrice = document.createElement('p');

      var div = document.createElement('div');

      img.setAttribute('src', arrProducts[i].image);
      
      pArea.setAttribute('class', 'p-title');
      pArea.innerHTML = arrProducts[i].category;

      pName.setAttribute('class', 'p-nombre-producto');
      pName.innerHTML = arrProducts[i].name;

      pPrice.setAttribute('class','p-price');
      pPrice.innerHTML = '$' + arrProducts[i].price + '.00';

      div.setAttribute('class','card-container');

      div.appendChild(img);
      div.appendChild(pArea);
      div.appendChild(pName);
      div.appendChild(pPrice);

      divProducts.appendChild(div);
   }

   var modal = document.getElementById('myModal');
   modal.style.display = 'none';
}