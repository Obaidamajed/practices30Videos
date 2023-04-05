import React, { Component } from 'react'
import axios from 'axios'

class Blog extends Component {

  state = {
    users : []
  }

  componentDidMount() {
    // console.log(this.props);
    axios.get("https://jsonplaceholder.typicode.com/users").then(response =>{ // هون بقلو بعد ما يتم تحميل الصفحة هاتلي الداتا الخاصة بالرابط اللي حطيتو وبعدين حط الداتا كلها في متغير اسمو ريسبونس وما أنسى إني كاتب الفنكشن بطريقة الأروو فنكشن وما أنسى كمان إني ما حطيت قوسين للبراميتر ريسبونس لأنو براميتر واحد فقط
    console.log(response); // حيطبعلي الداتا, حتكون في أوبجيكت وبداخل الأوبجيكت حيكون في داتا, هاي الداتا هي بيانات الصفحة اللي كتبت رابطها بالسطر رقم 7 
    console.log(response.data); //  هون بطبعلي الداتا مباشرة, بتكون عبارة عن أرراي أوف أوبجيكتس
    this.setState ({
      users : response.data // هون بحطلي الداتا في المتغير او الكاي اللي اسمو يوزرز
    })
    })

  }

  render() {
    const {users} = this.state // بقلو هاتلي اليوزرز من الستايت الخاص بهذا الكومبوننت وحطلي اياه بمتغير اسمو يوزرز
    // const {users} = this.state ====== const users = this.state.users
    const userList = users.map(user => 
      <div key={user.id}>
        <div className='content'>
          <div>Name : {user.name}</div>
          <div>UserName : {user.username}</div>
        </div>
      </div>
    )
    return (
      <div>
        <h2>Blog</h2>
        <p>This is Blog Section</p>
        <div>
          {userList}
        </div>
      </div>
    )
  }
}

export default Blog