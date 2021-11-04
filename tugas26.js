let angka =[2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
angka.forEach(function(a,b){
    if(isFinite(a)){
        console.log('Angka '+a+' infinity')
    }else{
        console.log('Angka '+a+' NOT infinity')
    }
})

