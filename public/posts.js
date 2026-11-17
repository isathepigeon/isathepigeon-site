import { trackPostLink } from './posthog.js';

function renderPosts() { 
fetch('/posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('posts');

    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post';

      div.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.content}</p> 
      `;

      container.appendChild(div);
  trackPostLink(div, post);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById('posts').innerText = "Posts failed to load.";
  });
}
  export { renderPosts };