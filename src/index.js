const searchForm=document.querySelector("#search")
function searchUser(e){
    const text=e.target.value.toLowerCase()
   document.querySelectorAll(".user-name").forEach((user)=>{
    const userName=user.querySelector('.user-info').innerText
if(userName.toLowerCase().indexOf(text)!=-1){
    user.style.display="block"
}else{
    user.style.display='none'
}
   })
}
searchForm.addEventListener('keyup',searchUser)
const renderUser=(user)=>{
    const {name,age}=user
    const content=
    `<div class="user-name">
    <div class="user-info">${name}</div>
    <h2>${age}</h2>
     </div>
     `
    return content
}
const render=()=>{
    const main=document.querySelector("main")
    main.innerHTML=""
    const content=users.map(renderUser).join("")
    main.innerHTML=content
}
const main=()=>{
    render()
    const searchBar=document.querySelector("#searchForm")
    searchBar.addEventListener('keyup',searchUser)
}
window.addEventListener("DOMContentLoaded",main)
// const renderUser=(user)=>{
//     const {name,age}=user
//     const content=`
//     <div class="user-name">
//     <div class="user-info">${name}</div>
//     <h2>${age}</h2>
//     </div>`
//     return content
// }
// const render =()=>{
//     const main=document.querySelector("main")
//     main.innerHTML=''
//     content=users.map(renderUser)
//     content.innerHTML=content
// }
// function searchHandler(e){
//     const name=e.target.value.toLowerCase()
//     document.querySelectorAll('.user-name').forEach((user)=>{
//         const uName=user.querySelector('.user-info').innerText
//         console.log(uName)
//         if(uName.toLowerCase().indexOf(name)!=-1){
//             user.style.display="block"
//         }else{
//             user.style.display='none'
//         }
//     })

    
// }
// const main=()=>{
//     render()
//     const searchBar=document.querySelector("#searchForm")
// searchBar.addEventListener("keyup",searchHandler)
// }
// window.addEventListener("DOMContentLoaded",main)

