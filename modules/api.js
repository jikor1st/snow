const register = () => {
  // ?????
  fetch("http://localhost:8080/member", {
    method: "POST",
    headers: {
      // .....
    },
    body: JSON.stringify({
      id: "ajdflsjfkl",
      pwd: "dajldfkjasfdjl",
    }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
};
const getTodoList = () => {
  // ?????
  fetchController({
    method: "POST",
    path: "member",
    body: {
      id: "fdakljfdklafjl",
      email: "alksdjfkladflakj",
    },
    onSuccess() {
      window.location.href = "/main";
    },
  });

  fetch("http://localhost:8080/member", {
    method: "POST",
    headers: {
      // .....
    },
    body: JSON.stringify({
      id: "ajdflsjfkl",
      pwd: "dajldfkjasfdjl",
    }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
};

const fetchController = async ({
  method,
  headers,
  path,
  body,
  onError,
  onSuccess,
  onSetteld,
}) => {
  try {
    const response = await fetch(`http://localhost:8080/${path}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    }).then((res) => res.json());
    onSuccess(response);
    return response;
  } catch (error) {
    onError();
    return error;
  } finally {
    onSetteld();
  }
};
