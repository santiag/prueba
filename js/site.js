// // debugger;
// /**/
// var ar;
// ar=['h','o','l','a'];

// console.log(ar);
// console.error(ar);
// console.warn('logitud de ar: ' , ar.length, ar);
// console.log('longitud de ar: '+ ar.length+ ar );

// var minombre='Santiago Torres';

// for(var i=0 ; i<minombre.length; i++){
//     console.log(minombre[i],'=>',i);
// }

//var a =x[1].toUpperCase();
//console.log(a);

/*
* string posiciones pares en mayúsculas
* string posiciones impares en mayúsculas

var x='santiago torres', z='';
for(var i=0; i<x.length; i++){
    z+=convertChar(x[i],isPair(i));
}
console.log(z);
*/
/*
=======================================================================
=======================================================================
x='santiago torres';
mostrar(x);

function isPair(x) {
    return x%2==0;
}
function  convertChar(c, isUp) {
    return isUp?c.toUpperCase():c.toLowerCase();
}
function mostrar(t) {
    var tmp=''
    for(var i=0; i<x.length; i++){
    tmp=tmp+convertChar(t[i],isPair(i));
    console.log(getLast(tmp),'=>',i);
   }
   console.log(tmp);
}
function getLast(t){
    return t[t.length-1];
}
=======================================================================
=======================================================================
*/

var ar=[1,2,"3",3,"5"];
ar=ar.map(item => item+1);//arrow function
console.log(ar);


ar=[2,4,6,8,10];
var ans=ar.reduce((ac,cur)=>{
    
    console.log(ac);
    return cur+ac;
    // console.log(ac);
},0);
console.log(ans);


console.log(ar.filter(item => item <=3));