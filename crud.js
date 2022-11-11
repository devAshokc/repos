// https://6322ddef362b0d4e7dd51013.mockapi.io/users

const users = [{
            "createdAt": "2022-09-15T08:05:14.964Z",
            "name": "Cecilia Zemlak",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/451.jpg",
            "id": "1"
        },
        {
            "createdAt": "2022-09-15T06:48:35.848Z",
            "name": "Maureen Brekke",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/400.jpg",
            "id": "2"
        },
        {
            "createdAt": "2022-09-15T00:13:02.847Z",
            "name": "Drew Cartwright",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/565.jpg",
            "id": "3"
        }
    ]
    // const user = {
    //         "createdAt": "2022-09-15T00:13:02.847Z",
    //         "name": "Drew Cartwright",
    //         "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/565.jpg",
    //         "id": "3"
    //     }
    // document.body.innerHTML = `    <div class="user-container">
    // <img class="user-pic" src=${user.avatar} alt=${user.name}>
    // <div>
    //     <p class="name"><span>Name: </span> ${user.name}</p>
    //     <p class="join_date"><span>CreatedAt: </span> ${new Date(user.createdAt).toDateString()}</p>
    // </div>
    // </div>`

// forEach Example

// function createUsers(users) {
//     users.forEach((n) => {
//         document.body.innerHTML += `<div class="user-container">
//     <img class="user-pic" src=${n.avatar} alt=${n.name}>
//     <div>
//         <p class="name"><span>Name: </span> ${n.name}</p>
//         <p class="join_date"><span>CreatedAt: </span> ${new Date(n.createdAt).toDateString()}</p>
//     </div>
// </div>`
//     });
// }
// createUsers(users)

// map Example
function createUsers(users) {
    users.map((n) => {
        document.querySelector('.user_list').innerHTML += `<div class="user-container">
    <img class="user-pic" src=${n.avatar} alt=${n.name}>
    <div>
        <p class="name"><span>Name: </span> ${n.name}</p>
        <p class="join_date"><span>CreatedAt: </span> ${new Date(n.createdAt).toDateString()}</p>
        <button class = "Delete_user" onclick="deleteUser(${n.id})">Delete</button>
        <button class = "Delete_user" onclick="editUser(${n.id})">Edit</button>
        <div class="user_details1 user_details1-${n.id}">
        <input id="name" class="get_user_name" type="text" placeholder="Username">
        <input id="pic" class="get_user_pic" type="text" placeholder="Pic">
        <button onclick="addUser()">Save</button>
    </div>
    </div>
</div>`
    });
}


// createUsers(users)
// Ex- GET-> Read
function loadUser() {
    document.querySelector('.user_list').innerHTML = ``;
    fetch("https://6322ddef362b0d4e7dd51013.mockapi.io/users")
        .then((data) => data.json())
        .then((users) => console.log(createUsers(users)))
}
loadUser()
    // Ex- DELETE-> Delete
function deleteUser(id) {
    console.log("Deleteing user...", id)
    fetch(`https://6322ddef362b0d4e7dd51013.mockapi.io/users/${id}`, {
        method: "DELETE",
    }).then(() => loadUser())
}

// Ex-POST-> Create
function addUser() {
    let name = document.querySelector(".get_user_name").value
    let Pic = document.querySelector(".get_user_pic").value
    console.log(name, Pic)
    fetch(`https://6322ddef362b0d4e7dd51013.mockapi.io/users`, {
        method: "POST",
        body: JSON.stringify({ name: name, avatar: Pic }),
        headers: { "Content-Type": "application/json" }
    }).then(() => loadUser())
}

function editUser(id) {
    console.log("Editing user...", id)
    document.querySelector(`.user_details1-${id}`).setAttribute('style', 'display: flex')
}

// odd, Even
// let a = '1234'.split("")
// let b = a
// let even = b.filter((n) => {
//     return n % 2 === 0
// })
// let odd = b.filter((n) => {
//     return n % 2 === 1
// })
// console.log(even.join(" "))
// console.log(odd.join(" "))
// console.log(b)
// let a = 'Lorem Ipsum'.trim()
// console.log(a)

// word spacing
// let a = "Hello World ".replace(/\s+/g, '');
// let b = a.length
// console.log(b)