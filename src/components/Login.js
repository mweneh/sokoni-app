import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory()
    const handleSubmit =(e)=>{
        e.preventDefault()
        history.push('/')
    }
  return (
    <div className="d-flex justify-content-center mb-7 pb-6">
      <form>
        <div class="mb-3">
          <label for="inputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
           Remember Me
          </label>
        </div>
        <button onClick={handleSubmit} type="submit" class="btn btn-danger">
          sign-in
        </button>
      </form>
    </div>
  );
};
export default Login