import React from "react";

function BannerForm() {
  const indicator = document.querySelector(".indicator");
  const inputs = document.querySelector(".pass");
  const weak = document.querySelector(".weak");
  const medium = document.querySelector(".medium");
  const strong = document.querySelector(".strong");
  let regExpWeak = /[a-z]/;
  let regExpMedium = /\d+/;
  let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

  function trigger(){
    if(inputs.value!==''){
      var no;
      indicator.style.display = "block";
      indicator.style.display = "flex";
      if(inputs.value.length <= 3 && (inputs.value.match(regExpWeak) || inputs.value.match(regExpMedium) || inputs.value.match(regExpStrong)))no=1;
      if(inputs.value.length >= 6 && ((inputs.value.match(regExpWeak) && inputs.value.match(regExpMedium)) || (inputs.value.match(regExpMedium) && inputs.value.match(regExpStrong)) || (inputs.value.match(regExpWeak) && inputs.value.match(regExpStrong))))no=2;
      if(inputs.value.length >= 6 && inputs.value.match(regExpWeak) && inputs.value.match(regExpMedium) && inputs.value.match(regExpStrong))no=3;
      if(no === 1){
        weak.classList.add("active");
      }
      if(no === 2){
        medium.classList.add("active");
      }
      else{
        medium.classList.remove("active")
      }
      if(no === 3){
        medium.classList.add("active");
        strong.classList.add("active");
      }
      else{
        medium.classList.remove("active");
        strong.classList.remove("active");
        // weak.classList.remove("active");
      }
    }
    else{
      indicator.style.display = "none";
    }
  }
  return (
    <div>
      <ul className="nav nav-pills" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Sign In
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Join In
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <form className="form-large">
            <button className="btn btn-outline-primary w-100 d-flex justify-content-start my-4">
              <img
                src="/images/google.svg"
                alt="google"
                className="mx-lg-5 mx-1"
                style={{ width: "15px", height: "15px", marginTop: "4px" }}
              />
              <span className="text-dark fw-bold">Continue with Google</span>
            </button>
            <button className="btn btn-outline-primary w-100 d-flex justify-content-start my-4">
              <img
                src="/images/facebook.svg"
                alt="google "
                className="mx-lg-5 mx-1"
                style={{ width: "15px", height: "15px", marginTop: "4px" }}
              />
              <span className="text-dark fw-bold">Continue with Facebook</span>
            </button>
            <div className="AuthForm-divider d-flex">
              <span className="AuthForm-divider-left">&nbsp;</span>
              <span className="text-sm text-center w-100 mx-0 divider-content">
                Or Sign In With
              </span>
              <span className="AuthForm-divider-right">&nbsp;</span>
            </div>
            <input
              type="text"
              className="form-control my-4"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control my-4"
              placeholder="Password"
            />
            <div className="d-flex justify-content-between">
              <div className="check">
                <input type="checkbox"></input>
                <span className="ms-2 text-sm">Remember me</span>
              </div>
              <div className="forgot">
                <i className="fa-solid fa-lock text-secondary"></i>
                <span className="ms-2 text-sm">Forgot Password</span>
              </div>
            </div>
            <button className="btn btn-primary w-100 my-4">
              <span className="text-white fw-bold">Continue</span>
            </button>
          </form>

          <form className="form-small">
            
            <input
              type="text"
              className="form-control my-4"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control my-4"
              placeholder="Password"
            />
            <div className="d-flex justify-content-between">
              <div className="check">
                <input type="checkbox"></input>
                <span className="ms-2 text-sm">Remember me</span>
              </div>
              <div className="forgot">
                <i className="fa-solid fa-lock text-secondary"></i>
                <span className="ms-2 text-sm">Forgot Password</span>
              </div>
            </div>
            <button className="btn btn-primary w-100 my-4">
              <span className="text-white fw-bold">Continue</span>
            </button>

            <div className="AuthForm-divider d-flex">
              <span className="AuthForm-divider-left">&nbsp;</span>
              <span className="text-sm text-center w-100 mx-0 divider-content">
                Or Sign In With
              </span>
              <span className="AuthForm-divider-right">&nbsp;</span>
            </div>

            <button className="btn btn-outline-primary w-100 d-flex justify-content-start my-4">
              <img
                src="/images/google.svg"
                alt="google"
                className="mx-lg-5 mx-1"
                style={{ width: "15px", height: "15px", marginTop: "4px" }}
              />
              <span className="text-dark fw-bold">Continue with Google</span>
            </button>
            <button className="btn btn-outline-primary w-100 d-flex justify-content-start my-4">
              <img
                src="/images/facebook.svg"
                alt="google "
                className="mx-lg-5 mx-1"
                style={{ width: "15px", height: "15px", marginTop: "4px" }}
              />
              <span className="text-dark fw-bold">Continue with Facebook</span>
            </button>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <form className="form-large">

            <button className="btn btn-outline-primary w-100 d-flex justify-content-start my-4">
              <img
                src="/images/google.svg"
                alt="google"
                className="mx-lg-5 mx-1"
                style={{ width: "15px", height: "15px", marginTop: "4px" }}
              />
              <span className="text-dark fw-bold">Continue with Google</span>
            </button>
            <button className="btn btn-outline-primary w-100 d-flex justify-content-start my-4">
              <img
                src="/images/facebook.svg"
                alt="google "
                className="mx-lg-5 mx-1"
                style={{ width: "15px", height: "15px", marginTop: "4px" }}
              />
              <span className="text-dark fw-bold">Continue with Facebook</span>
            </button>

            <div className="AuthForm-divider d-flex">
              <span className="AuthForm-divider-left">&nbsp;</span>
              <span className="text-sm text-center w-100 mx-0 divider-content">
                Or Connect With
              </span>
              <span className="AuthForm-divider-right">&nbsp;</span>
            </div>

            <input
              type="text"
              className="form-control my-4"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control my-4 pass"
              placeholder="Password"
              onKeyUp={trigger}
            />
            <div className="strength pb-2">
              <div className="indicator d-flex">
                <span className="weak w-100">
                </span>
                <span className="medium w-100">
                </span>
                <span className="strong w-100">
                </span>
                <div className="text-sm text-secondary w-100 passStrenght" style={{fontSize:"12px"}}>Password Strenght</div>
              </div>
            </div>
            <div className="text-gray text-sm">
              <span className="text-secondary"> By continuing, you agree to our </span> 
              Terms of Service <span className="text-secondary"> and </span>
              Privacy Policy.
            </div>
            <button className="btn btn-primary w-100 my-4">
              <span className="text-white fw-bold">Agree and Continue</span>
            </button>

          </form>

          <form className="form-small">

            <input
            type="text"
            className="form-control my-4"
            placeholder="Email"
            />
            <input
              type="password"
              className="form-control my-4 pass"
              placeholder="Password"
              onKeyUp={trigger}
            />
            <div className="strength pb-2">
              <div className="indicator d-flex">
                <span className="weak w-100">
                </span>
                <span className="medium w-100">
                </span>
                <span className="strong w-100">
                </span>
                <div className="text-sm text-secondary w-100 passStrenght" style={{fontSize:"12px"}}>Password Strenght</div>
              </div>
            </div>
            <div className="text-gray text-sm">
            <span className="text-secondary">
                {" "}
                By continuing, you agree to our{" "}
            </span>
            Terms of Service <span className="text-secondary">
                {" "}
                and{" "}
            </span>{" "}
            Privacy Policy.
            </div>
            <button className="btn btn-primary w-100 my-4">
            <span className="text-white fw-bold">Agree and Continue</span>
            </button>

            <div className="AuthForm-divider d-flex">
            <span className="AuthForm-divider-left">&nbsp;</span>
            <span className="text-sm text-center w-100 mx-0 divider-content">
                Or Connect With
            </span>
            <span className="AuthForm-divider-right">&nbsp;</span>
            </div>

            <button className="btn btn-outline-primary w-100 d-flex justify-content-start my-4">
            <img
                src="/images/google.svg"
                alt="google"
                className="mx-lg-5 mx-1"
                style={{ width: "15px", height: "15px", marginTop: "4px" }}
            />
            <span className="text-dark fw-bold">Continue with Google</span>
            </button>
            <button className="btn btn-outline-primary w-100 d-flex justify-content-start my-4">
            <img
                src="/images/facebook.svg"
                alt="google "
                className="mx-lg-5 mx-1"
                style={{ width: "15px", height: "15px", marginTop: "4px" }}
            />
            <span className="text-dark fw-bold">Continue with Facebook</span>
            </button>

            </form>
        </div>
      </div>
    </div>
  );
}

export default BannerForm;
