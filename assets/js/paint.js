function configureListeners() {
    let images = document.querySelectorAll('img')

     for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseover', addOpacity);
        images[i].addEventListener('mouseout', removeOpacity);   
    } 
}

function addOpacity(event) {
    //console.log(event.target.classList)
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    event.preventDefault(); 
    if(this.classList.contains('dim')){
        this.classList.remove('dim')
    }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':
            price = '$14.99';
            colorName = 'Lime Green';
            updatePrice(price, colorName);           
            break;           
        case 'pn2':
            price = '$11.14';
            colorName = 'Medium Brown';
            updatePrice(price, colorName);
            break;            
        case 'pn3':
            price = '$29.99';
            colorName = 'Royal Blue';
            updatePrice(price, colorName);
            break;   
        case 'pn4':
            price = '$13.42';
            colorName = 'Solid Red';
            updatePrice(price, colorName);
            break;   
        case 'pn5':
            price = '$21.98';
            colorName = 'Solid White';
            updatePrice(price, colorName);
            break;   
        case 'pn6':
            price = '$4.99';
            colorName = 'Solid Black';
            updatePrice(price, colorName);
            break;   
        case 'pn7':
            price = '$8.22';
            colorName = 'Solid Cyan';
            updatePrice(price, colorName);
            break;   
        case 'pn8':
            price = '$11.99';
            colorName = 'Solid Purple';
            updatePrice(price, colorName);
            break;   
        case 'pn9':
            price = '$14.99';
            colorName = 'Solid Yellow';
            updatePrice(price, colorName);
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = price;

        
        let color = document.getElementById('color-name')
        color.textContent = colorName

    }
}
