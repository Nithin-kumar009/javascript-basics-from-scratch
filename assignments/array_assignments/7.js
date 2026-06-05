//print only the prices greater than 400
let prices =[199, 129, 98, 78, 11, 171, 1055];
let count=0;
for(i=0; i<prices.length;i++){
    if (prices[i]>100) {
        
        console.log("products below 100 are",prices[i]);
        count++;
    }
}console.log(count);