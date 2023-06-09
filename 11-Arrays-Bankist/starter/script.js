'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Mounir Abcire',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currentAccount;
let sorted = false;
const handleUserName = accs => {
  accs.forEach(account => {
    account.userName = account.owner
      .split(' ')
      .map(n => {
        return n.at(0).toLowerCase();
      })
      .join('');
  });
};
const updateUi = acc => {
  displayAllMovements(acc);
  calcBalance(acc);
  calcSummary(acc);
};
handleUserName(accounts);
console.log(accounts);
const displayAllMovements = (acc, sorted = false) => {
  containerMovements.innerHTML = '';
  const sortedMovements = sorted
    ? [...acc.movements].sort((a, b) => a - b)
    : acc.movements;
  sortedMovements.forEach((movement, movementNumber) => {
    const typeMovement = movement > 0 ? 'deposit' : 'withdrawal';
    const htmlMovement = `
      <div class="movements__row">
        <div class="movements__type movements__type--${typeMovement}">${
      movementNumber + 1
    } ${typeMovement}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', htmlMovement);
  });
};
const calcBalance = acc => {
  acc.balance = acc.movements.reduce((total, mov) => {
    return total + mov;
  }, 0);

  labelBalance.textContent = acc.balance + '€';
};
const calcSummary = acc => {
  const posSummary = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  const negSummary = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);

  labelSumIn.textContent = posSummary + '€';
  labelSumOut.textContent = Math.abs(negSummary) + '€';
  labelSumInterest.textContent = interest + '€';
  console.log(posSummary, negSummary);
};
btnLogin.addEventListener('click', e => {
  // prevent form of submiting
  e.preventDefault();
  const userName = inputLoginUsername.value;
  currentAccount = accounts.find(acc => acc.userName === userName);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    updateUi(currentAccount);
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
  }
});
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const transferToAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    transferToAccount &&
    currentAccount.balance >= amount &&
    transferToAccount?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    transferToAccount.movements.push(amount);
    updateUi(currentAccount);
    console.log('done');
  }
});
btnClose.addEventListener('click', e => {
  e.preventDefault();
  const closeAccountUserName = inputCloseUsername.value;
  const closeAccountPin = Number(inputClosePin.value);
  if (
    closeAccountPin === currentAccount.pin &&
    closeAccountUserName === currentAccount.userName
  ) {
    const i = accounts.findIndex(acc => acc.userName === closeAccountUserName);
    const deltedAccount = accounts.splice(i, 1);
    containerApp.style.opacity = 0;
    inputClosePin.value = inputCloseUsername = '';
  }
});
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 10 &&
    currentAccount.movements.some(mov => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUi(currentAccount);
    inputLoanAmount.value = '';
  }
});
btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayAllMovements(currentAccount, (sorted = !sorted));
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach((value, index, array) => {
//   value > 0
//     ? console.log(`You deposited ${value}`)
//     : console.log(`You withdraw ${Math.abs(value)}`);
// });

//MAX value
// const maxValue = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, -Infinity);
// console.log(maxValue);
/////////////////////////////////////////////////
console.log(movements);
console.log(movements.fill(0));
console.log(new Array(10).fill(0));
console.log(Array.from({ length: 10 }, (_, i) => i + 1));
labelBalance.addEventListener('click', () => {
  const m = Array.from(
    document.querySelectorAll('.movements__value'),
    (currentEle, index) => Number(currentEle.textContent.replace('€', ''))
  );
  console.log(m);
});
