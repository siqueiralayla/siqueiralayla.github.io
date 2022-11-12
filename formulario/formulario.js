function calculoJuros(){
    
    var obj1 = document.getElementById('cidadeEntrega');
    var obj2 = document.getElementById('cidaderetirada');
    var obj3 = document.getElementById('input3');
    
   

    
    if (obj1 != obj2) {

        if (obj3 == 1) {

            var valor = 300 + 119;
            
            alert('Você pagará o total de ' + valor);

        }
        if (obj3 == 2) {

            var valor = 300 + 199;
            
            alert('Você pagará o total de ' + valor);
    
      } 
      if (obj3 == 3) {

        var valor = 300 + 299;
        
        alert('Você pagará o total de ' + valor);
       
    
      }
      else {
        alert('Você não pagará acrescimo');
      }

    }
}
