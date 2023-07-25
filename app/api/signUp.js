const signUpAuth = async () => {
  try {
    const response = await fetch(
      "http://192.168.43.76:3000/api/v1/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
