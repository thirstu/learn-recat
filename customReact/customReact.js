// const root=document.querySelector('#root');

// const element={
//     type:'a',
//     props:{

//         href: 'http://www.google.com',
//         hreflang:'en',
//         target:'_blank',
//     },
//     children:'click me to visit the google',
// }

// const customRender=function(element,root){
//     const elementType=document.createElement(`${element.type}`);
    
//     // elementType.setAttribute('href',element.props.href);
//     // elementType.setAttribute('hreflang',element.props.hreflang);
//     // elementType.setAttribute('target',element.props.target);
//     // elementType.textContent=element.children;
//     for(key in element.props){
//         if(key === 'children')continue;
//     elementType.setAttribute(`${key}`,element.props[key]);

//         console.log(elementType);

//     }
//     elementType.textContent=element.children;

//     root.appendChild(elementType);
//     console.log(elementType);
    

// }

// customRender(element,root);
// console.log(root);


// // const num=3;
// // const obj=[];
// // let numb=num;
// // while(numb!==0){
// //     numb--;
// //     obj.push('*');
// //     console.log('*',obj);
// // }




// // const num=153;
// // const obj=[];
// // let numb=num;
// // console.log(num);
// // while(numb!==0){
// //     if(numb>0){
// //         obj.push(numb%10)
// //         // numb=numb/10;
// //     }
// //     console.log(numb);
// //     numb--;
// //     // console.log(obj,numb/10);
// // }
// // console.log(num/10,'hello',);






// // const num=153;
// // const obj=[];
// // let numb=num;
// // let total=0;

// // for(let i=0; i<numb; i++){
// //     obj.push(numb%10);
// //     numb=Math.trunc(numb/10);
// //     if(numb===1){
// //     obj.push(numb%10);
// //     for (let num of obj) {
// //         num=num**obj.length;
// //         total+=num;
// //     console.log(num, total);
// //     }
// // }
// // }

let count =0;
const counter=function(){
    count++;
    console.log(count);
}
const caller=()=>{
    counter();
    counter();
    counter();
    counter();
    // console.log(count);

};
caller();