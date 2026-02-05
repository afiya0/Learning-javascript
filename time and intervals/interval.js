
let count=0;
let i=setInterval(()=>{
    if(count<10){
        count++;
        console.log(`${count}%`);
    }else{
        clearInterval(i);
    }
},1000);