// ** Start video 26 & 27 Axios **

// import React, {Component} from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Nav from './components/Nav';
// import Blog from "./components/Blog";
// import Rout from "./components/Rout";


// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Nav />
//           <Routes>
//             <Route path="/" element= {<Home/>} />
//             <Route path="/about"  element= {<About/>} />
//             <Route path="/blog"  element= {<Blog/>} />
//             <Route path="/:test_params" element={<Rout/>} />
//             {/* :test_params طالما كتبت هيك ف هو اشي انت حتدخلو بإيدك, لما تكتب أي إشي بعد ال3000 حينقلني على كومبوننت الراوت */}
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

// ** End video 26 & 27 Axios **


// ** start export & import & export default

// import React, { Component } from 'react'
// import {x, y} from './module' // حطيت الإكس والياي ببراكيتس لأنو معمول إلهم اكسبورت, لو معمول إلهم إكسبورت ديفولت ما بحطهم ببراكيتس

// class App extends Component {
//   render() {
//     return (
//       <div>
//         Hello React {x+y} 
//         {/* {x+y} حطيتهم بأقواس لأنهم داينمك داتا  */}
//       </div>
//     )
//   }
// }

// export default App

// ** End export & import & export default


// ** Start Nested Component & Arrow Function **

// import React, { Component } from 'react'
// import Child from './Child'


// class App extends Component {

//   Test() {
//     console.log("test !");
//   }
//   // This is Declaration Function 

//   Testt = () => {
//     console.log("test !!");
//   }
//   // This is Arrow Function 
//   render() {
//     return (
//       <div>
//         <Child /> 
//         {/* This is nested component  */}
//         {this.Test()}
//         {this.Testt()}
//       </div>
//     )
//   }
// }

// export default App

// ** End Nested Component & Arrow Function **


// ** Start Events **

// import React, { Component } from 'react'
// import Child from './Child'


// class App extends Component {

//   state = {
//     name : "Obaida"
//   }

//   handleClick() {
//     console.log(this.state.name);
//   }
//   handleMouse() {
//     console.log("Mouse Move");
//   }
//   handleDouble = () => {
//     console.log(this.state.name); // كتبت أرو فنكشن حتى يفهم إنو الذيس اللي فيه عائدة على الكلاس آب بدون ما أحتاج أكتب بيند في الإيفينت نفسو
//     // يعني صار عندي طريقتين لحتى يفهم الذيس إنو عائد على كلاس الآب : يا بكتب بيند في نفس الإيفينت يا بكتب الفنكشن بطريقة الأررو فنكشن وهاي المتبعة 
//   }
  
//   render() {
//     return (
//       <div>
//         <Child />
//         <button onClick={this.handleClick.bind(this)}>Click</button>
//         {/* بنلاحط في الإيفينت ما اضطريت أكتب الأقواس بعد اسم الفنكشن هاندل كليك على عكس لما أنادي الفنكشن مباشرة بدون إيفينت ساعتها بحتاج أكتب الأقواس بعد اسم الفنكشن  */}
//         {/* .bind(this) كتبت هاي حتى يفهم الفنكشن هاندل كليك إنو الذيس اللي فيها عائد على الكلاس آب */}
//         <button onMouseMove={this.handleMouse}>Click</button>
//         <button onDoubleClick={this.handleDouble}>Click</button>
//       </div>
//     )
//   }
// }

// export default App

// ** End Events **


// ** Start Change State using setState **

// import React, { Component } from 'react'

// class App extends Component {
//   state = {
//     name : 'Obaida',
//     age : 25
//   }
//   change = () => { // Arrow Function
//     this.setState({ // بتغيرلي الستايت اللي في الكلاس اللي انا فيه
//       name: 'Obaida Majed', // حيتغيَر النايم من عبيده لعبيده ماجد
//       age : 26
//       // البروبس ما بقدر أغيرها , أما هون الستايت قدرت أغيرها عن طريق فنكشن السيت ستايت
//     })
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.change}>Change State</button>
//         <p>{this.state.name}</p> 
//         <p>{this.state.age}</p> 
//       </div>
//     )
//   }
// }

// export default App

// ** End Change State using setState **


// ** Start Stateful vs Stateless component **

// import React, { Component } from 'react'
// import Child from './Child'

// class App extends Component {
//   state = {
//     name : 'Obaida'
//   } // هيك صار اسم هذا الكومبوننت ستايت فول كومبوننت لأنو معرف عن طريق الكلاس وبداخلو ستايت 
//   render() {
//     return (
//       <div>
//         Stateful Component vs Stateless Component 
//         <Child test={this.state.name} />
//         {/* test={this.state.name} هاي بروبس بدي أبعث الستايت من خلالها للفنكشن اللي اسمو تشايلد */}
//         {/* الستايت خاصة بالكومبوننت اللي انا معرفها فيها, لحتى أبعت الستايت لفنكشن ثانية ببعثها من خلال البروبس  */}
//       </div>
//     )
//   }
// }

// export default App

// ## Stateful Component هون لازم يتحقق شرطين : 
// 1) لازم يكون الكومبوننت معرفة عن طريق الكلاس 
// 2) لازم يكون موجود في الكومبوننت ستايت
// وأحيانا بسموها كونتاينر كومبوننت
// بتسخدمها بتخزين الداتا 

// ## Stateless Component هون لازم ما يكون موجود بداخلو ستايت عشان أسميها ستايت ليس كومبوننت ويفضل ينكتب بفنكشن عادية مدام مافي بداخلها ستايت 
// وما أنسى إنو الفنكشن كومبوننت مافي بداخلها رندر 
// وأحيانا بسموها اليو آي كومبوننت
/*
  - Class based Component هي الكومبوننت اللي معرفها عن طريق استخدام الكلاس
  - function Component, like:
  1) function Test(){

  }
  2) const Test = () => {

  }
*/

// ** End Stateful vs Stateless component **


// ** Start List Data Using Map ** 
// ** part 1
// import React, { Component } from 'react'
// import Items from './componentList/Items'

// class App extends Component {
  
//   render() {
//     return (
//       <div>
//         List Items
//         <hr></hr>
//         <Items id='1' name="obaida" age="22"/>
//         <hr></hr>
//         <Items id='2' name="tarek" age="25"/>
//       </div>
//     )
//   }
// }

// export default App

// ** part 2 

// import React, { Component } from 'react'
// import Items from './componentList/Items'

// class App extends Component {
//   state = {
//     items :
//     [
//       {id:1 , name: "obaida" , age:25},
//       {id:2 , name: "ali" , age:23},
//       {id:3 , name: "yaser" , age:24}
//     ]
//   }
//   render() {
//     return (
//       <div>
//         List Items
//         <hr></hr>
//         <Items items={this.state.items}/>
//       </div>
//     )
//   }
// }

// export default App

// ** End List Data Using Map ** 


// ** Start form ** 

// ** part 1 
// import React, { Component } from 'react'

// class App extends Component {

//   state = {
//     name: ""
//   }

//   handlChange = (e) =>{
//     console.log(e.target.value); // e.target.value بتمثل قيمة الإنبوت اللي انا بكتبها
//     this.setState({
//       name : e.target.value
//     })
//   }
//   handleSybmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.name); // بس أضغط على كليك بطبع الاسم 
//   }

//   render() {
//     return (
//       <div>
//         Form part 1
//         <form onSubmit={this.handleSybmit}>
//           <input type="text" onChange={this.handlChange}/>
//           <button>Submit</button>
//         </form>
//         {this.state.name}
//       </div>
//     )
//   }
// }

// export default App

// ** part 2
// import React, { Component } from 'react'

// class App extends Component {

//   state = {
//     name: ""
//   }

//   handlChange = (e) =>{
//     console.log(e.target.value); // e.target.value بتمثل قيمة الفاليو اللي انا بحددها 
//     this.setState({
//       name : e.target.value
//     })
//   }
//   handleSybmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.name); // بس أضغط على كليك بطبع الاسم 
//   }

//   render() {
//     return (
//       <div>
//         Form part 2
//         <form onSubmit={this.handleSybmit}>
//           <select onChange={this.handlChange}>
//             <option value="value 1">value 1</option>
//             <option value="value 2">value 2</option>
//             <option value="value 3">value 3</option>
//           </select>
//           <input type="submit" value="send" />
//         </form>
//         {this.state.name}
//       </div>
//     )
//   }
// }

// export default App

// ** End form ** 


// ** start if condition **

// import React, { Component } from 'react'
// import Items from './componentList/Items'

// class App extends Component {

//     state = {
//     items :
//     [
//       {id:1 , name: "obaida" , age:25 , count:2},
//       {id:2 , name: "ali" , age:23 , count:1},
//       {id:3 , name: "yaser" , age:24 , count:3}
//     ]
//   }
//   render() {
//     return (
//       <div>
//         Condition Output
//         <hr></hr>
//         <Items items={this.state.items} />
//       </div>
//     )
//   }
// }

// export default App

// ** End if condition **


// ** Start Dealing with CSS **

// import React, { Component } from 'react'
// import Items from './componentList/Items'

// class App extends Component {
  
//   state = {
//     items :
//     [
//       {id:1 , name: "obaida" , age:25 , count:2},
//       {id:2 , name: "ali" , age:23 , count:1},
//       {id:3 , name: "yaser" , age:24 , count:3},
//       {id:4 , name: "mahmod" , age:26 , count:4},
//     ]
//   }
//   render() {
//     return (
//       <div>
//         Dealing with CSS
//         <hr></hr>
//         <Items items={this.state.items} />
//       </div>
//     )
//   }
// }

// export default App

// ** End Dealing with CSS **


// ** Start Component Lifecycle methods **

// import React, { Component } from 'react'
// import Items from './componentList/Items'

// class App extends Component {
//   constructor() {
//     super();
//     console.log("constructor");
//   }

//   /*
//     lifecycle components:
//     1) constructor أول ما يشتغل البروجيكت تبعك حيشتغل الكنستركتر
//     2) render بشتغل بعد الكنستركتر
//     3) componentDidMount بعد ما يحمل كل اشي على الصفحة حيشتغل الكومبوننت ديد ماونت 
//     4) componentDidUpdate بتشتغل لما يصير عندي تغيير 
//     يعني مثلاً لما أضغط على زر الآد برجع الرندر بشتغل وبعدين الكومبوننت ديد أبدايت بشتغل
//   */

//     componentDidMount() {
//       console.log("componentDidMount"); // بشتغل بعد تحميل الصفحة 
//     }

//     componentDidUpdate(prevProps, prevState) {
//       console.log("componentDidUpdate", prevProps, prevState); // عمرها ما بتشتغل إلا لما يحصل تغيير في الستايت او البروبس
//       console.log(prevProps); // بتطبعلي أوبجكت فاضي
//       console.log(prevState); // بتطبعلي القيمة السابقة مع القيمة الحالية
//     }
  
//   state = {
//     items :
//     [
//       {id:1 , name: "obaida" , age:25 , count:2},
//       {id:2 , name: "ali" , age:23 , count:1},
//       {id:3 , name: "yaser" , age:24 , count:3}
//     ]
//   }

//   handleClick = (e) => {
//     let rand = Math.random();
//     let items = this.state.items;
//     items.push({id:rand , name:"mohamed", age:30, count: 5});
//     this.setState({
//       items: items
//     })
//   }

//   handleDelete = (e) => {
//     this.setState({
//       items: [
//         {id:2 , name:"tarek" , age:25 , count:1}
//       ]
//     })
//   }

  
//   render() {
//     console.log("render"); // بشتغل بعد الكنستركتر
//     return (
//       <div>
//         Lifecycle Components 
//         <hr></hr>
//         <Items items={this.state.items} />
//         <button onClick={this.handleClick}>Add</button>
//         <button onClick={this.handleDelete}>Delete</button>
//       </div>
//     )
//   }
// }

// export default App

// ** End Component Lifecycle methods **


// ** Start Router ** 

// import React, { Component } from 'react'
// import Nav from './componentsRouter/Nav';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './componentsRouter/Home';
// import About from './componentsRouter/About';


// export class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           React Router 
//           <Nav />
//           <Routes>
//             <Route path ='/' element={<Home/>} />
//             <Route path ='/about' element={<About/>} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App

// ** End Router ** 


// ** Start Dealing with Request Using Axios ** 

// import React, { Component } from 'react'
// import Nav from './componentsRouter/Nav';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './componentsRouter/Home';
// import About from './componentsRouter/About';
// import Blog from './componentsAxios/Blog';


// export class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Nav />
//           <Routes>
//             <Route path ='/' element={<Home/>}/>
//             <Route path ='/about' element={<About/>}/>
//             <Route path ='/blog' element={<Blog/>}/>
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App


// ** End Dealing with Request Using Axios ** 


// ** Start Fragment ** 

// import React, { Component } from 'react'
// import Col from './Col'

// class App extends Component {
//   render() {
//     return (
//       <table>
//         <tbody>
//           <tr>
//             <Col />
//           </tr>
//         </tbody>
//       </table>
//     )
//   }
// }

// export default App

// ** End Fragment ** 


// ** Start Show Image ** 

import React, { Component } from 'react'
import theImage from './a.jpg' // هيك جبت الصورة وحطيتها في المتغير اللي اسمو ذا إيميج

export class App extends Component {
  render() {
    return (
      <div>
        <img src={theImage} className="img"/>
      </div>
    )
  }
}

export default App

// ** End Show Image ** 




