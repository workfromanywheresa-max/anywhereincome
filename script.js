fetch('./posts.json')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  })
  .then(posts => {
    const postList = document.getElementById('post-list');
    if (!postList) throw new Error("No element with id 'post-list' found");

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
  .catch(err => console.error('Error loading posts:', err));
