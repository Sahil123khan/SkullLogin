import "../Css/Login.css"
import skull from "../assets/images/skullImg.png"
import FourCorner from "../assets/images/FourCorner.png"
import Google from "../assets/images/google-Img.png"
import { useState } from "react";
const Login = () => {

  
  const [loading, setLoading] = useState(false);


  const handleLogin =  () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      alert('Logged in successfully!');
  }, 2000); 
  };
  return (
    <header className="MainContainer">
      <div className="LoginContainer">



        <div className="FirstContainer">
          <img alt="Skull Image" src={skull} />
        </div>

        <div className="SecondContainer ">
          <div className="LoginCenter">

            <div className="LoginPageImage">
              <img alt="FourCorner" src={FourCorner} />
            </div>

            <div className="MainLoginDiv">

              <div className="MainLoginHeader">
                <h1>Login to your Account</h1>
                <p>see what is going on with your business</p>

                <button  >
                  <img src={Google} alt="Google Logo" />
                  Continue with Google Account
                </button>

                <p className="Email-p">----------or Sign in with Email----------</p>
              </div>
            </div>

            <div className="LoginInputDiv">

               <div>
               <h4>Email</h4>
             <input type="text" placeholder="Enter Email"/>

             <h4>Password</h4>
             <input type="password" placeholder="Enter Password"/>
               </div>
            

             <div className="checkboxDiv">

              <div style={{display:"flex",alignItems:"center"}}>
              <input   id="mybox" type="checkbox"/>
              <label for="mybox" >Remember me</label>
              </div>
            
              <a href="./">Forgot Password</a>

             </div>

             <button  type="submit" onClick={handleLogin}  >
              {  loading ? 'Logging in...' : 'Login'}
             </button>
            
            </div>

          </div>
        </div>




      </div>
    </header>
  )
};
export default Login;