import './style.css';
import refreshBtn from './modules/elements.js';
import populate from './modules/data.js';



refreshBtn.addEventListener('click', populate);

//
// dataItem.forEach((item) => {
//   const content = `
//               <div class="items">
//                 <p>${item.name} : </p>
//                 <p> ${item.score}</p>
//               </div>
//               `;
//   containerSection.innerHTML += content;
// });
