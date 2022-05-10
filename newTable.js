const data = ["Monday", "Cereal", "Steamed rice", "Baked Potatoes",
"Tuesday", "Bagel", "Spaghetti bolognese", "Pasta salad",
"Wednesday", "Oatmeal", "Pasta", "Burger",
"Thursday", "Cereal", "Fish and chips", "Fried Rice",
"Friday", "Fried breakfast", "Sandwiches", "Lasange"
]

// Define headings
const headings = ['', 'Breakfast', 'Lunch', 'Dinner']

/* Run the tableCreate function and append result to DOM */
let newTable = tableCreate(5,4,data,headings,'Created by JavaScript');
let table = document.getElementById('table')
table.append(newTable)