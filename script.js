const buttons = document.querySelectorAll(".buttons button[data-amount]");
const buttonsDiv = document.querySelector(".buttons");
const amountInWords = document.querySelector(".amount-in-words");
const btn100M = document.getElementById("hundredMillion");
const btn1B = document.getElementById("oneBillion");
const btn10B = document.getElementById("tenBillion");
const btn100B = document.getElementById("hundredBillion");
const totalAmountSpan = document.querySelector(".total-amount span");
const amountInfo = document.querySelector(".info");
const stacksContainer = document.querySelector(".stacks");
const template = stacksContainer.querySelector(".bill-container");
import { amountMessages } from "./map.js";
const cssRoot = document.querySelector(":root");
// get amount
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const amount = parseInt(button.dataset.amount);
    addBills(amount);
  });
});

let numStacks = 0;
// add 100 bills
function addBills(amount) {
  const currentAmount = parseInt(totalAmountSpan.innerText);
  const newAmount = currentAmount + amount * 100;
  if (newAmount >= 100000) {
    amountInWords.classList.remove("hidden");
  }
  const stackGrand = newAmount % 100000;
  if (stackGrand === 0) {
    template.style.display = "none";
  } else {
    template.style.display = "block";
  }
  if (newAmount >= 100000000) {
    hundredMillion();
    return;
  }
  const newStacks = Math.floor(newAmount / 100000);
  const billCount = (newAmount / 100000 - newStacks).toFixed(3) * 1000;
  let billWidth;

  if (newStacks < 10) {
    billWidth = `calc(30vw - ${newStacks * 2}vw)`;
  } else if (newStacks < 100) {
    billWidth = `8vw`;
  } else if (newStacks < 300) {
    billWidth = `4vw`;
  } else if (newStacks < 500) {
    billWidth = `2vw`;
  } else if (newStacks < 700) {
    billWidth = `1.5vw`;
  } else if (newStacks < 1000) {
    billWidth = `1vw`;
  }

  const stackHeight = `calc(${billCount / 1000}* ${billWidth})`;
  const additionalStacks = newStacks - numStacks;
  numStacks = newStacks;
  generateStacks(additionalStacks);
  totalAmountSpan.innerText = `${newAmount}`;
  const message = getMessageForAmount(newAmount);
  amountInfo.innerText = message;
  cssRoot.style.setProperty("--stack-height", stackHeight);
  cssRoot.style.setProperty("--bill-width", billWidth);
}

// new stacks
function generateStacks(numStacks) {
  for (let i = 0; i < numStacks; i++) {
    const clone = template.cloneNode(true);
    clone.classList.toggle("full-stack");
    stacksContainer.appendChild(clone);
  }
}

// display message
function getMessageForAmount(amount) {
  for (const [range, message] of amountMessages) {
    if (amount <= range) {
      return message;
    }
  }
  return "Enough to Splurge!";
}

// 100 Million Stack
let numberOfClicks = 1;
btn100M.addEventListener("click", stack100M);
function hundredMillion() {
  stacksContainer.innerHTML = `<div class="hundred-million">
  <div class="hundred-million-top"><p class="stacks100M-count">1 Stack of $100 Millions</p></div>
  <div class="hundred-million-left"></div>
  <div class="hundred-million-front"></div>
</div>`;
  stacksContainer.classList.remove("stacks");
  stacksContainer.classList.add("stacks-100M");
  totalAmountSpan.innerText = `100000000`;

  amountInWords.innerText = `100 Millions`;
  amountInfo.innerText = `100M - It's just another Level`;
  buttons.forEach((button) => {
    button.classList.add("button-inactive");
  });
  btn100M.classList.remove("button-inactive");
}
function stack100M() {
  const stacks100MCount = document.querySelector(".stacks100M-count");
  numberOfClicks++;
  let newAmount = 100000000 * numberOfClicks;
  if (newAmount >= 1000000000) {
    btn100M.classList.add("button-inactive");
    btn1B.classList.remove("button-inactive");
    oneBillion();
    return;
  }
  const message = getMessageForAmount(newAmount);
  amountInfo.innerText = message;
  amountInWords.innerText = `${numberOfClicks * 100} Millions`;
  totalAmountSpan.innerText = `${newAmount}`;
  stacks100MCount.innerText = `${numberOfClicks} Stacks of $100 Millions`;
  cssRoot.style.setProperty("--numbers-of-stacks", numberOfClicks);
}

// 1 billion
let numberOfClicksB = 1;
btn1B.addEventListener("click", stack1B);
function oneBillion() {
  stacksContainer.innerHTML = ` <div class="one-billion">
  <div class="one-billion-top"><p class="stacks1B-count">1 Stack of $1 Billion</p></div>
  <div class="one-billion-left"></div>
  <div class="one-billion-front"></div>
</div>`;
  stacksContainer.classList.add("stacks-100M");
  totalAmountSpan.innerText = `1000000000`;
  amountInWords.innerText = `1 Billion`;
  amountInfo.innerText = `1B - Less than 3000 people in the world are Billionaires`;
}
function stack1B() {
  const stacks1BCount = document.querySelector(".stacks1B-count");
  numberOfClicksB++;
  let newAmount = 1000000000 * numberOfClicksB;
  const message = getMessageForAmount(newAmount);
  amountInfo.innerText = message;
  amountInWords.innerText = `${numberOfClicksB * 1} Billions`;
  totalAmountSpan.innerText = `${newAmount}`;

  if (newAmount >= 10000000000) {
    btn1B.classList.add("button-inactive");
    btn10B.classList.remove("button-inactive");
    tenBillion();
    return;
  }
  stacks1BCount.innerText = `${numberOfClicksB} Stacks of $1 Billion`;
  cssRoot.style.setProperty("--numbers-of-stacksB", numberOfClicksB);
}

// 10 billion and 100 billion
btn10B.addEventListener("click", tenBillion);
btn100B.addEventListener("click", tenBillion);
let numberOfClicks10B = 0;
function tenBillion() {
  numberOfClicks10B++;
  let newAmount = 10000000000;
  if (numberOfClicks10B < 10) {
    newAmount = 10000000000 * numberOfClicks10B;

    amountInWords.innerText = `${numberOfClicks10B * 10} Billions`;
    btn10B.addEventListener("click", addBillionCube);
  } else {
    newAmount = 100000000000 * (numberOfClicks10B - 9);
    btn10B.classList.add("button-inactive");
    btn100B.classList.remove("button-inactive");
    amountInWords.innerText = `${(numberOfClicks10B - 9) * 100} Billions`;

    btn100B.addEventListener("click", addBillionCube10);
  }
  totalAmountSpan.innerText = `${newAmount}`;
  const message = getMessageForAmount(newAmount);
  amountInfo.innerText = message;

  stacksContainer.innerHTML = `<div class="billion-cube">
  <div class="billion-cube-top"></div>
  <div class="billion-cube-left"></div>
  <div class="billion-cube-front"></div>
</div>`;
  const bCubeTemplate = document.querySelector(".billion-cube");
  for (let i = 0; i < 9; i++) {
    const clone = bCubeTemplate.cloneNode(true);
    stacksContainer.appendChild(clone);
  }
  stacksContainer.classList.remove("stacks-100M");
  stacksContainer.classList.add("stacks");
  let billionCubeSize;
  if (numberOfClicks10B < 4) {
    billionCubeSize = `5vw`;
  } else if (numberOfClicks10B < 7) {
    billionCubeSize = `4vw`;
  } else if (numberOfClicks10B < 10) {
    billionCubeSize = `3vw`;
  } else if (numberOfClicks10B < 14) {
    billionCubeSize = `2vw`;
  } else if (numberOfClicks10B < 19) {
    billionCubeSize = `1vw`;
  } else if ((numberOfClicks10B = 19)) {
    billionCubeSize = `1vw`;
    amountInWords.innerText = `1 Trillion`;
    buttonsDiv.style.display = "none";
  }

  function addBillionCube() {
    for (let i = 0; i < 10; i++) {
      const clone = bCubeTemplate.cloneNode(true);
      stacksContainer.appendChild(clone);
    }
  }
  function addBillionCube10() {
    for (let i = 0; i < 100; i++) {
      const clone = bCubeTemplate.cloneNode(true);
      stacksContainer.appendChild(clone);
    }
  }

  cssRoot.style.setProperty("--billion-cube-size", billionCubeSize);
}
