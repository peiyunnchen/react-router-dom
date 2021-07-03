import './App.css';
import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
// {}按需引入，用什麼引什麼，不全部引
import Home from './pages/Home';
import About from './pages/About';
import { withRouter } from 'react-router';
// 要用路由組件裡的historyAPI，要引入withRouter
import 'antd/dist/antd.css';
import { Button, DatePicker } from 'antd';
import { WechatOutlined } from '@ant-design/icons';

function App(props) {
  const back = () => {
    props.history.goBack();
  };
  const forWard = () => {
    props.history.goForward();
  };
  return (
    <>
      <h1>React-router-dom</h1>
      <button onClick={forWard}>前進</button>
      <button onClick={back}>返回</button>
      <Button type='primary'>Primary Button</Button>
      <Button type='link'>link Button</Button>
      <Button type='text'>text Button</Button>
      <WechatOutlined />
      <DatePicker />
      <br />
      {/* 原生html中，靠<a>跳轉不同頁面 */}
      {/* <a href='./about.html'>About</a>
      <a href='./home.html'>Home</a> */}

      {/* 在react中，靠路由鏈接切組件 */}
      {/* Link 編寫鏈接 to去哪裡 */}
      {/* NavLink自帶一個預設的屬性與屬性值activeClassName='active'，若使用bootstrap剛好可以對上屬性值 */}
      {/* 若不是使用bootstrap，可以改變屬性值activeClassName='abcd'*/}
      <NavLink activeClassName='customActive' to='/about'>
        About
      </NavLink>
      <br />
      <NavLink activeClassName='customActive' to='/home'>
        Home
      </NavLink>
      {/* 有了Link鏈接後，用Route把component註冊到對應的鏈接裡 */}
      {/* Route path放入Link鏈接 component放入要註冊此鏈接的component */}
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        {/* 這樣引入叫做'路由元件' */}
        <Redirect to='/home' />
        {/* Redirect重定向，沒有匹配的路由時就都導向這*/}
      </Switch>
    </>
  );
}

export default withRouter(App);
// withRouter接收一個一般組件，加工此一般組件，讓其具有路由組件特有的屬性
// withRouter返回的App是一個新的組件
