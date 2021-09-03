function sumOfAllPrims(num){
    let great=[]
  if(num!=1){
let arr=[]
let array=[]
    for(let i=0; i<num; i++){
        if(!i==0){
            arr.push(i)
        }
    }
    arr.push(num)
arr.splice(0, 1)
    for(let f=0; f<arr.length; f++){
        let force=[ ];
        for (let g = 1; g<arr[f]+1; g++) {
            force.push(arr[f]%g)
        }
        force.shift()
        force.pop()
       // console.log(force)
    if(force.every(arg => arg>0)){
great.push(arr[f])
    }
    }
//arr.push(num)
}
let yes=great.reduce((a,b)=>a+b)
return yes
}
sumOfAllPrims(54)