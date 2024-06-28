import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 function MyApp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
 }

//  const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }
const anotherElement= (
  <a href="https://www.bhagwati.ac.in/" target='_blank'>visit clg website</a>
)
const reactElement = React.createElement(
  'a',{href:'http://google.com',target:'_blank'},'click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    // reactElement
    // anotherElement
    <App/>
  
)
