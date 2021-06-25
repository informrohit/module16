let firstFunction = function(){
    return new Promise( function(resolve, reject){
             resolve('Your cat is ');
    });
  }
  
  let secondFunction = function(dataFromFirstFunction){
    return new Promise( function(resolve, reject){
      resolve(dataFromFirstFunction + 'crazy');
        
    });
  }
  
  firstFunction()
    .then(function(data){
    return secondFunction(data);
    })
    .then(function(data){
      console.log(data);
    });
  