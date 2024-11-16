var posts=["2024/11/16/hello-world/","2024/11/16/01_Java概述/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };