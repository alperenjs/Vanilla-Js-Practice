document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPOSTS").addEventListener("click", getPOSTS);
document.getElementById("addPost").addEventListener("click", addPost);
var global;
var dataShow = document.getElementById("output");

function getText() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      dataShow.innerHTML = data;
    })
    .catch((err) => console.log(errorMonitor));
}

//Id'ye göre veri çekme 1111111111111111
// function findId(data, idToLookFor) {
//   for (var i = 0; i < data.length; i++) {
//     if (data[i].id == idToLookFor) {
//       return data[i];
//     }
//   }
// }

function getUsers() {
  // console.log(this.id);
  // global = this.id;
  // console.log("globale taşınan değer" + global);
  //değeri global değişkene taşıyıp sonra ordaki id ile veri çağırmak ?
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      //Id'ye göre veri çekme 1111111111111111
      // var item = findId(data, 1);
      // console.log(item);

      //Id'ye göre veri çekme 222222222222222222222
      // var item = data.find((item) => item.id === 3);
      // console.log(item);
      //
      let output = `<h2> Users </h2>`;
      data.forEach((user) => {
        output += `
        <ul> 
            <li> ID: ${user.id}    </li>

            <li>NAME:   ${user.name}  </li>

            <li>MAIL:   ${user.email} </li>
        </ul>
        `;
      });
      dataShow.innerHTML = output;
    });
}

function getPOSTS() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2> POSTS </h2>`;
      data.forEach((post) => {
        output += `
      <div> 
        <h3> ${post.title}</h3>
        <p> ${post.body} </p>
      </div>
      </br>
          `;
      });
      dataShow.innerHTML = output;
    });
}

// function addPost(e) {
//   e.preventDefault();

//   let title = document.getElementById("title").value;
//   let body = document.getElementById("body").value;

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-type": "applicaiton/json",
//     },
//     body: JSON.stringify({ title: title, body: body }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
