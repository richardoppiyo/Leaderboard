import './style.css';
import containerSection from './modules/elements.js';
import dataItem from './modules/data.js';

dataItem.forEach((item) => {
  const content = `
              <div class="items">
                <p>${item.name} : </p>
                <p> ${item.score}</p>
              </div>
              `;
  containerSection.innerHTML += content;
});
