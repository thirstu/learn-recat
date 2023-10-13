import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const HelloMe=function(){
  return(
    <div>
      <h1>custom app !</h1>
    </div>
  )
};

const root=document.querySelector('#root');
const element={
  type:'a',
  props:{

      href: 'http://www.google.com',
      hreflang:'en',
      target:'_blank',
  },
  children:'click me to visit the hello sello',
}

const customRender=function(element,root){
  const elementType=document.createElement(`${element.type}`);
  
  // elementType.setAttribute('href',element.props.href);
  // elementType.setAttribute('hreflang',element.props.hreflang);
  // elementType.setAttribute('target',element.props.target);
  // elementType.textContent=element.children;
  for(let key in element.props){
      if(key === 'children')continue;
  elementType.setAttribute(`${key}`,element.props[key]);

      // console.log(elementType);

  }
  elementType.textContent=element.children;

 
  console.log(elementType);
  
return  root.appendChild(elementType);
}

//////////////
const anotherElement=(
  <a href="https://google.com" target='_blank'>Hello AnotherElement</a>
);
//////////////
const anotherUser=' var react'
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank',
},
'helloReact',
anotherUser
);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <>
  //   <App />
  //   HelloMe();
  //   </>
  // </React.StrictMode>,
  // customRender(element,root),
  // element
  // anotherElement 
  reactElement
)
