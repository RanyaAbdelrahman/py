// بيانات الأسئلة (20 سؤال كاملة)
// مصفوفة الأسئلة المحدَّثة مع جميع الأسئلة الجديدة
const quizData = [
    { question: "What does print() do?", options: ["Adds numbers", "Displays text", "Deletes variables"], answer: "Displays text" },
    { question: "Which is a valid variable name?", options: ["12name", "name12", "@name"], answer: "name12" },
    { question: "What does input() do?", options: ["Prints text", "Gets user data", "Multiplies numbers"], answer: "Gets user data" },
    { question: "What is a module in Python?", options: ["A type of loop", "A file with reusable code", "A comment"], answer: "A file with reusable code" },
    { question: "Which data type represents True/False?", options: ["str", "bool", "int"], answer: "bool" },
    { question: "What operator checks equality?", options: ["=", "==", "!="], answer: "==" },
    { question: "Which symbol is for addition?", options: ["+", "-", "*"], answer: "+" },
    { question: "Which is a valid Python comment?", options: ["// comment", "# comment", "@ comment"], answer: "# comment" },
    { question: "Which of the following best defines Python?", options: ["Hardware language", "Used only For mobile apps", "text-based programming language that can be used to make all sorts of computer programs"], answer: "text-based programming language that can be used to make all sorts of computer programs" },
    { question: "What is a list in Python?", options: ["A single number", "A collection of items", "A function"], answer: "A collection of items" },
    { question: "How do you start a while loop?", options: ["for x in range(5):", "while x < 5:", "loop x < 5:"], answer: "while x < 5:" },
    { question: "What is a function in Python?", options: ["A reusable block of code", "A variable", "A loop"], answer: "A reusable block of code" },
    { question: "What does elif mean?", options: ["Another condition if previous is false", "Start a loop", "Print a message"], answer: "Another condition if previous is false" },
    { question: "Which operator is modulus?", options: ["%", "*", "/"], answer: "%" },
    { question: "Which statment imports a module", options: ["Se math", "import math", "include math"], answer: "import math" },
    { question: "What is Python syntax?", options: ["Rules for writing code", "Variable types", "Loop commands"], answer: "Rules for writing code" },
    { question: "What does import math do?", options: ["Deletes math module", "Uses math module", "Prints a number"], answer: "Uses math module" },
    
    // ⭐ السؤال الأصلي الذي تم إضافته سابقاً (لمراجعة حالة if/else)
    {
        question: "What is the output of the code?",
        code: "x = 10\r\ny = 5\r\nif x > y:\r\n  result = x + y\r\nelse:\r\n  result = x - y\r\n\r\nprint(result)",
        options: ["5", "15", "10"],
        answer: "15"
    },
    
    // ⭐ الأسئلة الجديدة التي تحتوي على كود
    {
        question: "What is the output of the code?",
        code: "def calculate_square_area(side):\r\n  area = side * side\r\n  return area\r\nsquare_area = calculate_square_area(5)\r\nprint(\"square Area: \", square_area)",
        options: ["square Area: 25", "square Area: 20", "square Area: 10"],
        answer: "square Area: 25"
    },
    {
        question: "What is the output of the code?",
        code: "numbers = [4, 8, 12]\r\nfor i in range(len(numbers)):\r\n  numbers[i] = numbers[i] // 4\r\nprint(numbers)",
        options: ["No right answer", "[2, 4, 6]", "[4, 8, 12]", "[1, 2, 3]"],
        answer: "[1, 2, 3]"
    },
    {
        question: "What is the output of the following code?",
        code: "a = 5\r\nb = 10\r\nif not (a < 10 or b < 5):\r\n  print(\"Yes\")\r\nelse:\r\n  print(\"No\")",
        options: ["10", "Yes", "No"],
        answer: "No"
    },
    {
        question: "What is the output of the following code?",
        code: "names = [\"Alice\", \"Charlie\"]\r\nnames.insert(1, \"Bob\")\r\nprint(names)",
        options: [ "['Alice', 'Bob', 'Charlie']", "['Alice', 'Charlie', 'Bob']", "['Bob', 'Alice', 'Charlie']"],
        answer: "['Alice', 'Bob', 'Charlie']"
    },
    {
        question: "What is the output of the following code?",
        code: "a = 3\r\nb = 7\r\nif a > 5 or b > 5:\r\n  print(\"Yes\")\r\nelse:\r\n  print(\"No\")",
        options: ["No", "7", "Yes"],
        answer: "Yes"
    },
    {
        question: "What is the output of the following code?",
        code: "count = 1\r\nwhile count <= 3:\r\n  print(count)\r\n  count += 1",
        options: ["1234", "123", "321"],
        answer: "123"
    },
    {
        question: "What is the output of the following code?",
        code: "values = [10, 20, 30]\r\nvalues[2] = 50\r\nprint(values)",
        options: [ "[10, 50, 30]", "[10, 20, 50]", "[10, 20, 30]"],
        answer: "[10, 20, 50]"
    },
    // ⭐ نهاية أسئلة الكود

    // ⭐ السؤال الجديد الذي لا يحتوي على كود
    {
        question: "What does the OR operator return if one condition is True?",
        options: ["None", "FALSE", "TRUE"],
        answer: "TRUE"
    },
    // ⭐ نهاية السؤال الجديد
    
    { question: "Which is a float number?", options: ["10", "3.5", "True"], answer: "3.5" },
    { question: "How to access the first item of a list?", options: ["list[1]", "list[0]", "list.first()"], answer: "list[0]" },
    { question: "Which of these is a logical error?", options: ["Forgetting a colon in if statement", "Using + instead of - in a calculator program", "Misspelling a variable"], answer: "Using + instead of - in a calculator program" },
    { question: "Which of these is a valid arithmetic operator?", options: ["+", "==", "and"], answer: "+" }
];

// 1. وظيفة زر نسخ الكود (كما هي)
function copyCode(codeId, buttonElement) {
    const codeToCopy = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(codeToCopy)
        .then(() => {
            buttonElement.textContent = "تم النسخ!";
            buttonElement.style.backgroundColor = "#28a745";
            setTimeout(() => {
                buttonElement.textContent = "نسخ الكود";
                buttonElement.style.backgroundColor = "#4CAF50";
            }, 2000);
        })
        .catch(err => {
            console.error('فشل نسخ الكود: ', err);
            alert('عذراً، لم نتمكن من نسخ الكود. الرجاء المحاولة يدوياً.');
        });
}

// 2. وظيفة زر الهامبرغر (كما هي)
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// 3. وظيفة إنشاء وتشغيل الاختبار
document.addEventListener('DOMContentLoaded', () => {
    const startQuizBtn = document.getElementById('startQuizBtn');
    const quizContainer = document.getElementById('quizContainer');
    const quizResult = document.getElementById('quizResult');

    startQuizBtn.addEventListener('click', () => {
        startQuizBtn.style.display = 'none';
        quizContainer.style.display = 'block';
        
        buildQuiz();
        
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'إنهاء الاختبار وتحقق من النتيجة';
        submitBtn.classList.add('quiz-btn');
        submitBtn.addEventListener('click', showResults);
        quizContainer.appendChild(submitBtn);
    });

    // دالة إنشاء الاختبار (المُعدَّلة لاستيعاب الكود)
    function buildQuiz() {
        quizContainer.innerHTML = '';
        
        quizData.forEach((item, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('quiz-question');
            
            const questionTitle = document.createElement('p');
            questionTitle.textContent = `${index + 1}. ${item.question}`;
            questionDiv.appendChild(questionTitle);
            
            // الكود الذي يضيف كتلة <pre> و <code> إذا كان السؤال يحتوي على كود
            if (item.code) {
                const codePre = document.createElement('pre');
                const codeElement = document.createElement('code');
                codeElement.classList.add('language-python'); // لتنسيق الـ Python
                codeElement.textContent = item.code;
                codePre.appendChild(codeElement);
                questionDiv.appendChild(codePre);
            }
            
            item.options.forEach(option => {
                const label = document.createElement('label');
                const radio = document.createElement('input');
                
                radio.type = 'radio';
                radio.name = `question${index}`;
                radio.value = option;
                
                label.appendChild(radio);
                label.appendChild(document.createTextNode(option));
                questionDiv.appendChild(label);
            });
            
            quizContainer.appendChild(questionDiv);
        });
    }

    // دالة عرض النتائج (كما هي)
    function showResults() {
        let score = 0;
        
        quizData.forEach((item, index) => {
            const selector = `input[name=question${index}]:checked`;
            const userAnswer = (document.querySelector(selector) || {}).value;

            if (userAnswer === item.answer) {
                score++;
            }
        });

        quizContainer.style.display = 'none';
        quizResult.style.display = 'block';
        
        const percentage = (score / quizData.length) * 100;
        
        let feedback = '';
        if (percentage === 100) {
            feedback = 'أنت نجم! 🤩 نتيجة مثالية!';
        } else if (percentage >= 70) {
            feedback = 'ممتاز! عمل جيد جدًا، يمكنك مراجعة بعض الأجزاء.';
        } else {
            feedback = 'لا بأس، تحتاج إلى المزيد من التدريب والمراجعة!';
        }

        quizResult.innerHTML = `
            <h3>🎉 نتيجتك النهائية</h3>
            <p>لقد أجبت على <strong>${score}</strong> سؤال صحيح من أصل <strong>${quizData.length}</strong>.</p>
            <p><strong>النسبة المئوية:</strong> ${percentage.toFixed(2)}%</p>
            <p><strong>تقييم:</strong> ${feedback}</p>
            <button class="quiz-btn" onclick="window.location.reload()">ابدأ من جديد</button>
        `;
    }
});