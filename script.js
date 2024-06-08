const submitBtn = document.querySelector('.comment-submit');
const userName = document.querySelector('#user');
const comment = document.querySelector('#comment');
const count = document.querySelector('.count');
const  Delete = document.querySelector('.delete');
const commentCount = document.querySelector('.post-comment')
submitBtn.addEventListener('click', submitFeedback);

CommentArr = [];
let incrementCount = 0;
function submitFeedback(e) {
    const userForm = userName.value;
    const commentForm = comment.value;
    if (userForm && commentForm !== '') {
        newFeedback ={
            "id": Math.floor((Math.random() * 1000)+1),
            "userName": userForm,
            "userComment": commentForm,
        }
        CommentArr.push(newFeedback);
        userName.value = '';
        comment.value = '';
         addlikes();
        addFeedback(newFeedback, CommentArr.length - 1); 
    }
    e.preventDefault()
  }

  //add count
function addlikes() {
    incrementCount++
    count.innerHTML = "Discussion(" + incrementCount + ")";
   
}

//add items
function addFeedback(item, index) {
    const div = document.createElement('div');
    const currentDate = new Date().toDateString();
    div.classList = 'post-comment';
    div.id = item.id;
    div.innerHTML = `
    <div class="comment-list">
        <div class="flex">
            <div class="user">
                <div class="user-image"><img src="download.jpeg" alt="" > </div>
                <div class="name">${item.userName}</div>
                <div class="day">${currentDate}</div>  
            </div>
        </div>
        <div class="comment">
            ${item.userComment}
        </div>
        <div class="remove-comment">
            <button class="delete" onclick="deleteCount(${index})">remove</button>
        </div>
    </div> 
    ;`
    commentCount.insertAdjacentElement('beforeend', div);
}

//delete items
function deleteCount(index) {
    const feedbackToRemove = CommentArr[index]; 
    CommentArr.splice(index, 1);
    incrementCount--; 
    count.innerHTML = "Discussion(" + incrementCount + ")"; 
    if (feedbackToRemove) {
        const elementToRemove = document.getElementById(feedbackToRemove.id);
        if (elementToRemove) {
            elementToRemove.remove(); 
        }
    }
}

