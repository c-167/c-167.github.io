var posts=["2024/11/16/01_Java概述/","2024/11/16/奖学金考试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };