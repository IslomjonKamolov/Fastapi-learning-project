async function getPosts() {
  try {
    const response = await fetch("http://127.0.0.1:8000/posts");
    const data = await response.json();
    postInformations = data;
    renderPosts(data.posts);
    console.log("Fetch ichidagi log",data.posts);
    
  } catch {
    console.log("xato bilan tanishing janob ikkichi");
  }
}

getPosts();

let postList = document.querySelector(".post_list");

function renderPosts(posts) {
    console.log("render funktsiya ichidagi log",posts);
    console.log("Post uzunligi", posts.length);
    
  for (let i = 0; i < posts.length; i++) {
    const li = document.createElement("li");
    const post = posts[i]
    li.className = "post_list_item";
    console.log("for ichidagi log",post);
    

    li.innerHTML = `
          <h2 class="post_title">${post.post_name}</h2>
          <p class="post_content">${post.post}</p>
          <h6 class="authors_name">${post.author}</h6>
        `;

    postList.appendChild(li);
  }
}


