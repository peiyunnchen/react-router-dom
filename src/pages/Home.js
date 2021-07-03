import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import HomeMessage from './HomeMessage';
import HomeNews from './HomeNews';

function Home() {
  return (
    <>
      <hr />
      <h3>我是home的內容</h3>
      <NavLink activeClassName='customActive' to='/home/news'>
        News
      </NavLink>
      <br />
      <NavLink activeClassName='customActive' to='/home/message'>
        Message
      </NavLink>
      {/* 註冊路由 */}
      <Switch>
        <Route path='/home/news' component={HomeNews} />
        <Route path='/home/message' component={HomeMessage} />
        {/* 第一級Home展示、第二級HomeMessage也展示 */}
        <Redirect to='/home/news' />
      </Switch>
    </>
  );
}
export default Home;
