// import axios from "axios"
// import styled from 'styled-components'
// const Style = styled.div`
// .loginForm {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//   }
  
//   .acc-type {
//     display: flex;
//     justify-content: center;
//     gap: 20px;
//     padding: 7px;
//     border-radius: 51px;
//     background-color: #fff;
//     box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
//     align-items: center;
//     font-weight: 700;
//     cursor: pointer;
//     text-align: center;
//   }
//   .acc-type > div {
//     width: 50%;
//   }
//   .active-login {
//     color: white;
//     background: blue;
//     padding: 5px 25px;
//     border-radius: 51px;
//   }
//   .google-signup {
//     display: flex;
//     width: 100%;
//     align-items: center;
//     text-align: center border;
//     font-weight: 600;
//     font-size: 14px;
//     border: 0.2px solid grey;
//     border-radius: 5px;
//     justify-content: center;
//     cursor: pointer;
//   }
//   .g-logo {
//     width: 10%;
//   }
//   .g-logo > img {
//     width: 100%;
//     border-radius: 50%;
//   }
//   .other-option {
//     font-size: 14px;
//     color: grey;
//   }
//   .other-option,
//   .tc {
//     text-align: center;
//     text-decoration: none;
//   }
//   .tc > a {
//     text-decoration: none;
//   }
//   .cbtn {
//     width: 100%;
//     margin: auto;
//     padding: 2%;
//     background: blue;
//     color: white;
//     font-size: 20px;
//     font-weight: 600;
//     border: 0;
//     border-radius: 5px;
//     box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
//     cursor: pointer;
//   }
//   .indicate {
//     color: red;
//     font-size: 12px;
//     margin: 0;
//   }
//   .hide {
//     display: none;
//   }
//   .inp-wrap {
//     display: flex;
//     flex-direction: column;
//     gap: 5px;
//     margin-bottom: 20px;
//   }
//   .inp {
//     width: 96%;
//     padding: 2%;
//     border: 0.5px solid blue;
//     border-radius: 5px;
//   }
//   .inp > input {
//     border: 0;
//     outline: 0;
//     font-size: 16px;
//     width: 100%;
//   }
  
// `
// export const LoginForm = (props) => {

//   const { handleOtpStatus,handleChange,hashHandleChange,value } = props;

//   const handleSubmit = (e) => {
    
//     e.preventDefault();
    
//     if(value.phone.length === 10) {

//       axios.post("http://localhost:4000/sendOTP",{
//         phone:`+91${value.phone}`,

//       }).then((res)=>{
//         console.log(res.data.otp)
//         //console.log(res);
//         const hash = res.data.hash;
//         hashHandleChange(hash);
//       })

//       handleOtpStatus();
//     }
    
//     else{
//       alert("Invalid mobile number")
      
//     }
   
//   };

//   return (
//     <Style>
//       <div className="loginForm">

//         <div className="acc-type">
//           <div className="active-login">PERSONAL ACCOUNT</div>
//           <div> MakeMyTrip ACCOUNT</div>
//         </div>

//         <h1>Login/signup </h1>

//         <form onSubmit={handleSubmit}>

//           <div className="inp-wrap">
//             <label>Enter Mobile Number</label>

//             <div className="inp">
//               <input
//                 type="text"
//                 onChange={handleChange('phone')}
//                 placeholder="966*****88"
//                 minLength="10"
//                 value={value.phone}
//                 required
//               />
//             </div>

//             <p
//               className={
//                 value.phone.length  === 10 ||  value.phone.length  === 0 ? "hide" : "indicate"
//               }
//             >
//               Please enter a 10 digit valid Mobile Number.
//             </p>
//           </div>

//           <div>
//             <input type="submit" className="cbtn" value="CONTINUE" />
//           </div>
//         </form>

//         <p className="other-option">Or Login/Signup With</p>

//         <div>
//           <div className="google-signup">
//             <span className="g-logo">
//               <img
//                 src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png"
//                 alt="google-logo"
//               />
//             </span>
//             <span>Login with Google</span>
//           </div>
//         </div>
//         <p className="tc">
//           By proceeding, you agree to MakeMyTrip{" "}
//           <a href="#">Privacy Policy</a>, <a href="#">User Agreement</a> and{" "}
//           <a href="#">T&Cs</a>
//         </p>
//       </div>
//     </Style>
//   );
// };
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 7px 0 rgb(0 0 0 / 15%);

  .acc-type {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 7px;
    border-radius: 50px;
    background-color: #f9f9f9;
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 15%);
    align-items: center;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
  }

  .acc-type > div {
    width: 50%;
    padding: 10px;
    border-radius: 50px;
    cursor: pointer;
  }

  .active-login {
    color: white;
    background: #007bff;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #007bff;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
  }

  .error-message {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    background: #007bff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }

  .submit-btn:disabled {
    background: grey;
    cursor: not-allowed;
  }

  .google-signup {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 5px;
    cursor: pointer;
  }

  .google-logo {
    width: 20px;
    height: 20px;
  }

  .terms {
    font-size: 12px;
    text-align: center;
    color: grey;
    margin-top: 10px;
  }

  .terms a {
    color: #007bff;
    text-decoration: none;
  }
`;

export const LoginForm = ({ handleOtpStatus, handleChange, hashHandleChange, value }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.phone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const response = await axios.post("http://localhost:4000/sendOTP", {
        phone: `+91${value.phone}`,
      });

      hashHandleChange(response.data.hash);
      handleOtpStatus();
    } catch (error) {
      setErrorMessage("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginFormWrapper>
      <div className="acc-type">
        <div className="active-login">PERSONAL ACCOUNT</div>
        <div>MakeMyTrip ACCOUNT</div>
      </div>

      <h2>Login/Signup</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Enter Mobile Number</label>
          <input
            type="text"
            className="input-field"
            onChange={handleChange("phone")}
            placeholder="966*****88"
            minLength="10"
            value={value.phone}
            required
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Sending OTP..." : "CONTINUE"}
        </button>
      </form>

      <p className="other-option">Or Login/Signup With</p>

      <div className="google-signup">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png"
          alt="Google Logo"
          className="google-logo"
        />
        <span>Login with Google</span>
      </div>

      <p className="terms">
        By proceeding, you agree to MakeMyTrip <a href="#">Privacy Policy</a>,
        <a href="#">User Agreement</a>, and <a href="#">T&Cs</a>.
      </p>
    </LoginFormWrapper>
  );
};


