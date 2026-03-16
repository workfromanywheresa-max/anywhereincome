// Load posts from posts.json and display on homepage
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const postList = document.getElementById('post-list');
    posts.forEach(post => {
      const postEl = document.createElement('div');
      postEl.className = 'post';
      postEl.innerHTML = `
        <a href="${post.file}">
          <img src="${post.thumbnail}" alt="${post.title}">
          <div class="post-content">
            <h2>${post.title}</h2>
            <p>Published on: ${post.date}</p>
          </div>
        </a>
      `;
      postList.appendChild(postEl);
    });
  })
  .catch(error => console.error('Error loading posts:', error));
