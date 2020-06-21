export const Login = () => {
  const login = `
    <div>
      <form name="login" id="login">
        <input id="user" type="text" placeholder="User"/>
        <input type="password" placeholder="Password"/>
        <button type="submit" onsubmit="javascript:getUser()">Login</button>
      </form>
    </div>
  `;
  return login;
}