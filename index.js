console.log("getPosts", getPosts);

let fullname;
let avatar;

let currentPost = {};

const work = () => {
  const panelEl = $("#panel");

  fullname = prompt("Zehmet olmasa mutleq adinizi yazin");
  avatar = prompt("Zehmet olmasa avatar seklinizi qoyun");

  if (!fullname.trim()) {
    alert("Adinizi yazmadiginiza gore sisteme daxil olmur!");
    return;
  }

  panelEl.removeClass("d-none");
  renderPosts();
};

async function renderPosts() {
  try {
    const postsEl = $("#posts");
    const data = await getPosts();

    const content = data.reverse().map((post) => {
      const createdTime = convertTime(post.created);

      return `
    <div class="card shadow">
    <img
      style="height: 300px; object-fit: cover"
      src="./image/download.png"
      class="card-img-top"
      alt="${post.title}"
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">11.00 12.12.2024</h6>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>

      <div class="d-flex align-items-center gap-2">
        <img
          class="rounded-circle shadow"
          width="50"
          height="50 "
          style="object-fit: cover"
          src="${
            post.avatar
              ? post.avatar
              : "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
          }"
          alt=""
        />
        <p class="h6">${post.fullname ? post.fullname : "anonim"}</p>
      </div>
    </div> 
  </div>`;
    });
    postsEl.html();

    // const data = await response.json();
  } catch (err) {
    console.log("err", err);
    alert("Network error");
  }
}
renderPost();
