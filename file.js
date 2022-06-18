const plus = document.getElementById("plus");
const mins = document.getElementById("mins");
const reactsNumber = document.getElementById("reacts-number");
const reply  = document.getElementById("reply");
const replyComment = document.getElementById("reply_for_comment");
const delet = document.getElementById("delete");
const edit = document.getElementById("edit");
const update = document.getElementById("update"); 
const replyBox =document.getElementById("reply-box");
const comment = document.getElementById("comment");
const textArea = document.getElementById("text"); 

/*increment && decrement*/ 

let num = +reactsNumber.innerHTML;
plus.addEventListener("click" , () =>{
    num += +1;
    reactsNumber.innerHTML = num;
})

mins.addEventListener("click" , () =>{
    num += +(-1);
    reactsNumber.innerHTML = num;
})

/* reply*/

reply.addEventListener("click", ()=>{
    replyBox.classList.toggle('active');
})




replyComment.addEventListener("click", ()=>{
    comment.classList.toggle('active');
})





/*delete*/
delet.addEventListener('click' , ()=>{
    comment.style.display = 'none';
})

