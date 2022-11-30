import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userLogin } from '../../redux/actionUser';
import "./Login.css"
const Login = () => {
  const { user, loading } = useSelector((state) => state);
  // console.log(user);
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = { nom, password };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(userLogin(loginUser, navigate));
  };
  return (
    <div>
       <div className="background"></div>


<div className="container">
  <h2>Login</h2>
  <form action="">

    <div className="form-item">
      <span className="material-icons-outlined">
        account_circle
      </span>
      <input type="text" name="user" id="user" placeholder=" Username"  value={nom}
                                                    onChange={(e) =>
                                                        setNom(e.target.value)
                                                    }/>
    </div>

    <div className="form-item">
      <span className="material-icons-outlined">
        lock
      </span>
      <input type="password" name="pass" id="pass" placeholder="password"  value={password}
                                                    onChange={(e) =>
                                                        setPassword(e.target.value)
                                                    }/>
    </div>

    <button type="submit"  onClick={handleSubmit}>LOGIN</button>

    {/* <p>Or Login Using</p>

    <div className="options">
      <button className="fb">Facebook</button>
      <button className="gl">Google</button>
    </div>

    <p>New User ? <a href="kkkkk"> Create an Account</a></p> */}

  </form>
</div>
    </div>
  )
}

export default Login
