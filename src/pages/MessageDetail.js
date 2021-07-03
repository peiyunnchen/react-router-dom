import React from 'react';
// import qs from 'querystring';
// querystring處理urlencoded

const detailData = [
  { id: '1', content: '你好，台灣' },
  { id: '2', content: '你好，yun' },
  { id: '3', content: '你好，未來的自己' },
];

function MessageDetail(props) {
  // 取params參數。在props物件中match裡的params
  const { id, title } = props.match.params;

  //   取search參數
  //   const { search } = props.location; //search會是一個urlencoded。urlencoded樣子，key=value&key=value。
  //   const { id, title } = qs.parse(search); //{key:value,key:value}
  //   const { id, title } = qs.parse(search.slice(1)); //qs.parse()可將urlencoded轉成物件型態，.slice(1)處理掉第一個 ? 字
  //   取state參數
  //   const { id, title } = props.location.state;
  console.log(props);
  const findResult = detailData.find((item) => item.id === id);

  return (
    <>
      <ul>
        <li>ID : {id}</li>
        <li>TITLE : {title}</li>
        <li>CONTENT : {findResult.content}</li>
      </ul>
    </>
  );
}
export default MessageDetail;
