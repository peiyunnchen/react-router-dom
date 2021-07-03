NavLink
自帶一個預設的屬性與屬性值 activeClassName='active'，可以讓該路由被點擊到時呈現 active 樣式變化
若使用 bootstrap 剛好可以對上屬性值 active，因此不用特別寫
若不是使用 bootstrap，可以根據使用的套件改變屬性值 activeClassName='abcd'
也可以自訂屬性 style

NavLink 二次封裝
有好幾個 NavLink 帶有 activeClassName、className，可使用 NavLink 二次封裝

Switch
註冊路由時，一個路由指向多個組件，會同時顯示
<Route path='/home' component={Home} />
<Route path='/home' component={Test} />
上方這樣會同時顯示
就算路由器已找到路由匹配的組件，沒有第二個路由，路由器還是不會停止，會把所有的路由都檢查過一遍，浪費效能
<Route path='/home' component={Home} />
<Route path='/111' component={111} />
<Route path='/222' component={222} />
要找 home 會把所有都找過一次
希望找到 home 匹配的就停止，就要在註冊路由的時候加上 Switch
<Switch>
<Route path='/home' component={Home} />
<Route path='/about' component={About} />
</Switch>

子路由
子路由前面要加上父路由

{/_ 向路由組件傳 params 參數 _/}
{/_ <Link to={`/home/message/detail/${item.id}/${item.title}`}> _/}

            {/* 向路由組件傳search參數。?key=${value}&key=${value} */}
            {/* <Link
              to={`/home/message/detail/?id=${item.id}&title=${item.title}`}
            > */}
            {/* 向路由組件傳state參數 */}

             {/* params聲明接參數 */}
      {/* <Route path='/home/message/detail/:id/:title' component={MessageDetail} /> */}

      {/* search參數不用聲明，正常註冊路由即可 */}
      {/* <Route path='/home/message/detail' component={MessageDetail} /> */}

      // 取params參數。在props物件中match裡的params

// const { id, title } = props.match.params;

// 取 search 參數
// const { search } = props.location; //search 會是一個 urlencoded。urlencoded 樣子，key=value&key=value。
// const { id, title } = qs.parse(search.slice(1)); //qs.parse()可將 urlencoded 轉成物件型態，.slice(1)處理掉第一個 ? 字
