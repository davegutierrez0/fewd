// Your code goes here...

var likeClick = document.querySelector("a.like-link");

likeClick.addEventListener("click", incrementLike);

function incrementLike(event){
  event.preventDefault();
  addLike();
}

function addLike(){
  var likeValue = parseInt(document.querySelector("span.like-count").textContent);
  var newLikeCount = likeValue+1;
  document.querySelector("span.like-count").textContent = newLikeCount;
}

var commentClick = document.querySelector("#new-comment");

commentClick.addEventListener("submit", commentInsert);

function commentInsert(event){
  event.preventDefault();
  var newCommentContent = document.querySelector("#new-comment-body").value;

  addComment(newCommentContent);

}

function addComment(newCommentContent){
  var newCommentContent = document.createElement("div")
  newCommentContent.textContent = document.querySelector("#new-comment-body").value;
  var newComment = document.createElement("div");
  newComment.classList.add("comment");
  newComment.appendChild(newCommentContent);
  document.querySelector("#comments").appendChild(newComment);

}
