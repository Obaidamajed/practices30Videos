import React, { Component } from "react";

class Child extends Component {
  render(){
    return(
      <div>
        Child Component
      </div>
    )
  }
}

// ** Start Stateful vs Stateless component **

  // const Child = (props) => { // ببعث البروبس ك باراميتر
  //   return(
  //     <div>
  //       {props.test} 
  //       {/* حددتلو البروبس اللي اسمو تيست هو اللي بدي اياه لأنو ممكن أكون باعث أكثر من بروبس  */}
  //     </div>
  //   )
  // }


// ** End Stateful vs Stateless component **

export default Child