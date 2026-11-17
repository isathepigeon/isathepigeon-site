function trackPostLink(div, post) {
    div.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function() {
    posthog.capture('post_link_clicked', {
      href: link.href,
      text: link.innerText,
 post_title: post.title  
 });  
 });
 });  
 };

 export { trackPostLink };