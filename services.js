//? API --- application programming interface
//? CRUD
//^ CREATE -POST
//^ READ   -GET
//^ UPDATE -PUT
//^ DELETE -DELETE

const baseUrl = "https://blog-api-t6u0.onrender.com";
//*for read post ------------------
const getPosts = async () => {
  try {
    const response = await fetch(baseUrl + "/posts", { method: "GET" });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
//*for add post ------------------

const addPost = async (form) => {
  try {
    const response = await fetch(baseUrl + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("err", err);
  }
};

// addPost({ title: "Post3", body: "Lorem ipsum created and add" });
//*for update post ------------------

const uptPost = async (id, form) => {
  try {
    const response = await fetch(baseUrl + "/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();

    console.log("data", data);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

// uptPost(2, { title: "PostNumber-2", body: "Lorem ipsum ipsum ipsum" });
//* for delete post ------ы----------
const rmvPost = async (id) => {
  try {
    const response = await fetch(baseUrl + "/posts/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const data = await response.json();

    console.log("data", data);

    return data;
  } catch (err) {
    console.log("err", err);
  }
};

// rmvPost(1)
