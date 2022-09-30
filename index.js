function demo(){
    for(var i=1;i<=50;i++){
      if((i==1 || i==2 || i==3 || i==5 || i==7)||((i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0))){
            console.log('prime number',i);
        }
    }
}
    
    demo();