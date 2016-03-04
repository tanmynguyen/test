(function(){

    $('.animation-img img').transition({
        perspective: '200px',
        rotateX: '0deg'
    }, 2000);
    
    $('.hanh-phi').transition({
       x:250 
    }, 3000, 'snap');
    
    $('.dam-ban').transition({
       x:-150 
    }, 3000, 'snap');
    
    $('.thong-bao').transition({ 
        scale: 1, 
        delay: 1800 
    }, 1200);
    
    var isOra = false;
    var btn = $('#btn-try');
    
    setInterval(function() {
       btn.style.backgroundColor = (isOra ? "red" : "blue");
        isOra = !isOra;
    }, 500);
    
})(jQuery)