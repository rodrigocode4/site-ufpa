function alterContrat(e) {
    e.preventDefault();
    //alterBackgroundColor();
    //alterFontColor();
    alterBackgroundColor2();
    alterBackgroundColor3();
    alterBackgroundColor4();
}

function alterBackgroundColor() {
    const contrasteButton = document.querySelector('header');
    let color = contrasteButton.style.backgroundColor;
    
    if (color !== 'black') {
        contrasteButton.style.backgroundColor = 'black';
        
    } else {
        contrasteButton.style.backgroundColor = 'white';
    }
}

function alterFontColor() {
    const font = document.querySelectorAll('nav ul li a');
    let elements = [...font];
    elements.forEach(e => {
        if (e !== 'white') {
            e.style.color = 'white'
        } else {
            e.style.color = 'rgba(0, 0, 0, 0.5)'
        }
    });
}

function alterBackgroundColor2() {
    const contrasteButton = document.querySelector('#fh5co-search-map');
    let color = contrasteButton.style.backgroundColor;
    
    if (color !== 'black') {
        contrasteButton.style.backgroundColor = 'black';
        contrasteButton.style.border = '2px solid yellow';
    } else {
        contrasteButton.style.backgroundColor = '#44C662';
        contrasteButton.style.border = '';
    }
}

function alterBackgroundColor3() {
    const contrasteButton = document.querySelector('#fh5co-search-map .search-property');
    let color = contrasteButton.style.backgroundColor;
    
    if (color !== 'black') {
        contrasteButton.style.backgroundColor = 'black';
    } else {
        contrasteButton.style.backgroundColor = '#44C662';
    }
}

function alterBackgroundColor4() {
    const contrasteButton = document.querySelector('#fh5co-wrapper .fh5co-agent');
    let color = contrasteButton.style.backgroundColor;
    
    if (color !== 'black' || color !== '') {
        contrasteButton.style.backgroundColor = 'black';
    } else {
        contrasteButton.style.backgroundColor = '#44C662';
    }
}
