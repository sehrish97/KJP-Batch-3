var emoji = require('emoji.json/emoji-compact.json');

let Post={};
Post.userID=1001;
Post.userName="Mark";
Post.userProfile="./images/cba.jpg";
Post.postImage="./images/facebookImage.jpg";
Post.postContent="'وہ محبت جس کا مقام اس دنیا کے تمام رشتوں میں پائی جانے والی محبت سے ارفع ہے، وہ محبت ماں کی محبت ہوتی ہے۔'";
Post.comments=[{
    "userName":"Hayya",
    "content":"Nice",
    "timestamp":"25785",
    "likesCount":2,
    "likes":[{
        
        "userName":"Nimra",
        "userProfile":"asad",
        "likeType":"💖",
        

    }]
}]
// var img = document.getElementById("card-img-top").innerHTML;
//  document.getElementById("card").src =  Post.postImage;

console.log(Post.comments[0].likes);
// data=document.getElementById("b")=Post.postContent;
console.log(Post.postContent);