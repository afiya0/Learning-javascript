console.log("Lexical Scoping");

let x = 10;

function show() {
    console.log(x);
}
function test() {
    let x = 20;
    show();
}
test();
// show() global scope me define hua tha.
// Isliye woh sirf global x ko dekhega.
// Woh test() ke andar wale x ko access nahi karega.


// Closurre
function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const c1 = counter();

c1(); // 1
c1(); // 2
c1(); // 3
const c2 = counter();
c2();
c2();



function a()
{
  let click= 0;
  return function(){
    click++;
    console.log(click);
  }
}

let fnc = a();
fnc();
fnc();

fnc();
fnc();
fnc();

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log("Balance:", balance);
        },
        withdraw(amount) {
            balance -= amount;
            console.log("Balance:", balance);
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);   // 1500
account.withdraw(200);  // 1300


