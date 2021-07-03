import React from 'react';
import MessageDetail from './MessageDetail';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

const messagrArr = [
  { id: 1, title: '消息一' },
  { id: 2, title: '消息二' },
  { id: 3, title: '消息三' },
];

function HomeMessage(props) {
  const replaceShow = (id, title) => {
    // 編寫一段代碼，放到replace btn上實現跳轉
    // 使用props.history裡的replace函式
    props.history.replace(`/home/message/detail/${id}/${title}`);
  };
  const pushShow = (id, title) => {
    // 使用props.history裡的replace函式
    props.history.push(`/home/message/detail/${id}/${title}`);
  };
  const back = () => {
    props.history.goBack();
  };
  const forWard = () => {
    props.history.goForward();
  };
  return (
    <>
      <h3>這裡是Message</h3>
      <div>導航</div>
      <ul>
        {messagrArr.map((item) => (
          <li key={item.id}>
            {/* 向路由組件傳params參數 */}
            <Link to={`/home/message/detail/${item.id}/${item.title}`}>
              {/* 向路由組件傳search參數。?key=${value}&key=${value} */}
              {/* <Link
              to={`/home/message/detail/?id=${item.id}&title=${item.title}`}
            > */}

              {/* 向路由組件傳state參數 */}
              {/* <Link
              to={{
                pathname: '/home/message/detail',
                state: { id: item.id, title: item.title },
              }}
            > */}
              {item.title}
            </Link>
            {/* 不用高亮就不用NavLink */}
            <button onClick={() => pushShow(item.id, item.title)}>
              push查看
            </button>
            <button onClick={() => replaceShow(item.id, item.title)}>
              replace查看
            </button>
            {/* 把參數傳給replaceShow函式 */}
          </li>
        ))}
      </ul>
      <br />
      <div>內容</div>
      {/* params聲明接參數 */}
      <Route path='/home/message/detail/:id/:title' component={MessageDetail} />

      {/* search參數不用聲明，正常註冊路由即可 */}
      {/* <Route path='/home/message/detail' component={MessageDetail} /> */}

      {/* state參數不用聲明，正常註冊路由即可 */}
      {/* <Route path='/home/message/detail' component={MessageDetail} /> */}
      <button onClick={forWard}>前進</button>
      <button onClick={back}>返回</button>
    </>
  );
}
export default HomeMessage;
