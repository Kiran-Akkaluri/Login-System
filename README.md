# Login System with Validation

A simple **Login Authentication System** built using **HTML5, CSS3, and JavaScript**.
This project demonstrates a basic login workflow where user credentials are validated and checked against stored data.

---

## 📌 Features

* Login page with username and password fields
* **JavaScript input validation**
* Credential verification from a **JSON-based database**
* **Dynamic error messages** for invalid login attempts
* Redirect to a dashboard page after successful login

---

## 🧰 Technologies Used

* **HTML5** – Structure of the login page
* **CSS3** – Styling and layout
* **JavaScript** – Validation and authentication logic
* **JSON** – Simulated database for storing user credentials

---

## 📂 Project Structure

```id="91q6r1"
Task-3-Login-System/
│
├── index.html        # Login page
├── style.css         # Login page styling
├── script.js         # Validation and authentication logic
├── users.json        # User credentials database
└── dashboard.html    # Page after successful login
```

---

## ▶️ How to Run the Project

1. Open the project folder in **VS Code**
2. Install the **Live Server extension**
3. Right-click **index.html**
4. Click **Open with Live Server**

The application will run at:

```id="wrlpl0"
http://127.0.0.1:5500/index.html
```

---

## 🔐 Authentication Workflow

1. User enters **username and password**
2. JavaScript validates that fields are not empty
3. Credentials are compared with data in **users.json**
4. If credentials are correct:

   * User is redirected to **dashboard.html**
5. If credentials are incorrect:

   * An **error message is displayed dynamically**

---

## 🚀 Future Enhancements

* Add **show/hide password feature**
* Implement **password strength validation**
* Add **login session management**
* Connect the login system to a **real database (MySQL)**
* Implement **secure password hashing**

---

## 👨‍💻 Author

**Done by KIRAN AKKALURI**

---

## 📜 License

This project is created for **educational and learning purposes**.
