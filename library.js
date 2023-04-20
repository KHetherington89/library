const bookCount=document.getElementById('bookCount');
const footer=document.getElementById('footer');

const numOfBooks = 0;

bookCount.innerHTML = `<p class="bookCountText" id="bookCountText">Books in Library: ${numOfBooks}<p>`

footer.innerHTML = `<a style="color:black; text-decoration:none" href="https://github.com/KHetherington89/calculator">Copyright © ${new Date().getFullYear()} KHetherington89 
<i class="fa fa-github" style="font-size:24p; color:black"></i></a>`;
