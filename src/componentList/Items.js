// ** part 1
// import React, { Component } from 'react'

// class Items extends Component {
//   render() {

//     // const id = this.props.id
//     // const name = this.props.name
//     // const age = this.props.age

//     const {id, name, age} = this.props; // هذا السطر معناه إنو هاتلي الأي دي من البروبس واحفظو بمتغير اسمو آي دي وهاتلي النايم من البروبس واحفظو بمتغير اسمو نايم وهاتلي الآيج من البروبس واحفظو بمتغير اسمو آيج, هذا السطر بعادل السطور من 5-7
//     return (
//       <div>
//         <p>{this.props.id}</p> 
//         {/* هيك بقلو هاتلي البروبس من هذا الكومبوننت اللي انا فيه وجيبلي بروبس الآي دي بالتحديد  */}
//         <p>{this.props.name}</p>
//         <p>{this.props.age}</p>
//         <p>------------------</p>
//         <p>{id}</p>
//         <p>{name}</p>
//         <p>{age}</p>
//         {/* نفس الاشي لكن كتبتهم بطريقة ثانية  */}
//       </div>
//     )
//   }
// }

// export default Items

// ** part 2 **

// import React, { Component } from 'react'

// class Items extends Component {
//   render() {
//     const {items} = this.props;
//     const theItems = items.map( (item) => {
//       return (
//         <div key={item.id}> 
//         {/* لازم أحط كاي لكل عنصر بكررو او بعمل عليه ماب  حتى ما يطلع عندي إيرور في الكونسول لوق */}
//         {/* Math.random() بتجيب أرقام عشوائية من صفر ل واحد */}
//           <div>{item.id}</div>
//           <div>{item.name}</div>
//           <div>{item.age}</div>
//           <div>-----------</div>
//         </div>
//       )
//     })
//     return (
//       <div>
//         {theItems}
//       </div>
//     )
//   }
// }

// export default Items


// ** start Condition Output ** 

// import React, { Component } from "react";

// class Items extends Component {
//   render() {
//     const {items} = this.props;
//     const theItems = items.map( (item) => {
//       // if(item.count > 4) {
//       //   return (
//       //     <div key={item.id}> 
//       //     {/* لازم أحط كاي لكل عنصر بكررو او بعمل عليه ماب  حتى ما يطلع عندي إيرور في الكونسول لوق */}
//       //     {/* Math.random() بتجيب أرقام عشوائية من صفر ل واحد */}
//       //       <div>{item.id}</div>
//       //       <div>{item.name}</div>
//       //       <div>{item.age}</div>
//       //       <div>-----------</div>
//       //     </div>
//       //   )
//       // } else {
//         //   return (
//           //     <div>No Items</div>
//           //   )
//           // }
          
//           // ** Another if condition method
          
//           return item.count > 2 ? ( // إف كونديشين المختصرة 
//           <div key={item.id}> 
//           {/* لازم أحط كاي لكل عنصر بكررو او بعمل عليه ماب  حتى ما يطلع عندي إيرور في الكونسول لوق */}
//           {/* Math.random() بتجيب أرقام عشوائية من صفر ل واحد */}
//             <div>{item.id}</div>
//             <div>{item.name}</div>
//             <div>{item.age}</div>
//             <div>-----------</div>
//           </div>
        
//         ) : null
//     })
//     return (
//       <div>
//         {theItems}
//       </div>
//     )
//   }
// }

// export default Items

// ** End Condition Output ** 


// ** Start Dealing with Css **

// import React, { Component } from "react";
// import "./Items.css"

// class Items extends Component {
//   render() {
//     const {items} = this.props;
//     const theItems = items.map( (item) => {
      
//       return item.count > 0 ? ( // إف كونديشين المختصرة 
//       <div className="item" key={item.id}> 
//           {/* لازم أحط كاي لكل عنصر بكررو او بعمل عليه ماب  حتى ما يطلع عندي إيرور في الكونسول لوق */}
//             <div>{item.id}</div>
//             <div>{item.name}</div>
//             <div>{item.age}</div>
//             <div>-----------</div>
//           </div>
        
//         ) : null
//     })
//     return (
//       <div>
//         {theItems}
//       </div>
//     )
//   }
// }

// export default Items

// ** End Dealing with Css **



// ** Start Component Lifecycle methods

import React, { Component } from "react";
import "./Items.css"

class Items extends Component {
  render() {
    const {items} = this.props;
    const theItems = items.map( (item) => {
      
      return item.count > 0 ? ( // إف كونديشين المختصرة 
      <div className="item" key={item.id}> 
          {/* لازم أحط كاي لكل عنصر بكررو او بعمل عليه ماب  حتى ما يطلع عندي إيرور في الكونسول لوق */}
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>-----------</div>
          </div>
        
        ) : null
    })
    return (
      <div>
        {theItems}
      </div>
    )
  }
}

export default Items

// ** End Component Lifecycle methods






