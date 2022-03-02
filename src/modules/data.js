// To create a new game called Leaderboard
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  headers: {
    'content-Type': 'application/json'
  },
  body: JSON.stringify({
	   name: "Leaderboard!"
    })
})
  .then(response => response.json())
  .then(data => console.log(data));


// To get leaders data from the API
async function populate() {

  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/oi30gNm2QXH7NcuJGkRM/scores/';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeroes(superHeroes);
}


function populateHeroes(obj) {
  console.log("Say Whaaaaat?!");
  const section = document.querySelector('.scorebody');
  const users = obj['result'];

  console.log(users);
  for (const user of users) {
    console.log("Heloooooo!!");
    const myDiv = document.createElement('div');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');

    myPara1.textContent = `${user.user}`;
    myPara2.textContent = `${user.score}`;

    myDiv.className = 'items';

    myDiv.appendChild(myPara1);
    myDiv.appendChild(myPara1);

    section.appendChild(myDivS);
  }
}


export default populate;

//
// const dataItem = [
//   {
//     name: 'Wambui Waruru',
//     score: 70,
//   },
//   {
//     name: 'Pascal Tokosi',
//     score: 50,
//   },
//   {
//     name: 'Amesi itesi',
//     score: 30,
//   }, {
//     name: 'Kolua Mbobua',
//     score: 90,
//   },
// ];
//
// export default dataItem;
