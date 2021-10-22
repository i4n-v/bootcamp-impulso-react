function favProducts(){
    let product = 0;
    let alcool = 0;
    let gasolina = 0;
    let diesel = 0;
    
    while(product !== 4) {
      product = parseInt(gets());
      
      switch(product){
        case 1:
          alcool++;
          break;
        case 2:
          gasolina++;
          break;
        case 3:
          diesel++;
      }
    }
    
    print("MUITO OBRIGADO");
    print(`Alcool: ${alcool}`);
    print(`Gasolina: ${gasolina}`);
    print(`Diesel: ${diesel}`);
}
  
favProducts();