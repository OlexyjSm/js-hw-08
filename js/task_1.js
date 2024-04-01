// Вам потрібно реалізувати функцію performBankOperations, яка приймає об'єкт з балансом рахунку та callback-функцію, яка виконує різні банківські операції, а саме покалсти гроші на рахунок та зняти гроші з рахунку. Функції з банківськими  операціями  є колбеками

function performBankOperations(account, operationCallback) {
    // Передаємо об'єкт з балансом рахунку в колбек-функцію для виконання банківських операцій
    operationCallback(account);
}

// Функція для внесення коштів з використанням prompt
function deposit(account) {
    let amount = parseFloat(prompt("Введіть суму поповнення:"));
    if (!isNaN(amount) && amount > 0) {
        account.balance += amount;
        alert(`Поповнено на: ${amount}$. Новий баланс: ${account.balance}$`);
    } else {
        alert("Помилкова сума. Будь ласка введіть коректну суму поповнення.");
    }
}

// Функція для зняття коштів з використанням prompt
function withdraw(account) {
    let amount = parseFloat(prompt("Введіть суму зняття:"));
    if (!isNaN(amount) && amount > 0) {
        if (account.balance >= amount) {
            account.balance -= amount;
            alert(`Знято ${amount}$. Новий баланс: ${account.balance}$`);
        } else {
            alert(`Не достатньо коштів. Не можливо зняти ${amount}$. Поточний баланс: ${account.balance}$`);
        }
    } else {
        alert("Помилкова сума. Будь ласка введіть коректну суму зняття.");
    }
}

// Приклад використання
let bankAccount = { balance: 0 };

// Виконуємо операцію внесення коштів
performBankOperations(bankAccount, deposit);

// Виконуємо операцію зняття коштів
performBankOperations(bankAccount, withdraw);





