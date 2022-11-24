const login = () => {
  let username = $("#username").val();
  let password = $("#password").val();

  let payLoad = {};
  payLoad.username = username;
  payLoad.password = password;

  let loginSuccess = (response) => {
    console.log(response);
    alert(response);
  };
  let loginFail = (response) => {
    console.log(response);
    alert(response.responseText);
  };

  $.ajax({
    url: "/auth/login",
    method: "POST",
    data: payLoad,
    success: loginSuccess,
    error: loginFail,
  });
};


const signUp = () => {
  let username = $("#username").val();
  let password = $("#password").val();

  let payLoad = {};
  payLoad.username = username;
  payLoad.password = password;

  let signUpSuccess = (response) => {
    console.log(response);
    alert("Signed Up!");
  };
  let signUpFail = (response) => {
    console.log(response);
    alert(response.responseText);
  };

  $.ajax({
    url: "/auth/signup",
    method: "POST",
    data: payLoad,
    success: signUpSuccess,
    error: signUpFail,
  });
};
