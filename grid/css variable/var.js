var swatches = document.querySelectorAll('.swatches span');
var root = document.querySelector(':root')


swatches.forEach((swatch)
swatch.addEvenListener('click',(a)
root.Style.setProperty('--theme-color',e.target.style.background);
})
})
