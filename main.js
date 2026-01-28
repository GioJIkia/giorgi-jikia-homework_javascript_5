//------------------------------მე-5 ლექციაზე მოცემული დავალებების ამოხსნა------------------------------

const randomArray = [20, 15, 300, 54, 107, 865, 1235, 865, 10];

//1. ახალ ერეიში ციფრების გამოტანა რომელიც მეტია 100-ზე.
const newRandomArray = randomArray.filter((value) => value > 100);
console.log(newRandomArray);

//2. შეამოწმეთ ყველა ელემენტი და თუ ერთი მაინც არის კენტი დააბრუნეთ true, წინააღმდეგ შემთხვევაში false.
const isAnyOdd = randomArray.some((value) => value % 2 !== 0);
console.log(isAnyOdd);

//3. persons მასივიდან დააბრუნეთ ახალი მასივი, ოღონდ ყველა ასაკს დაამატეთ 10 წელი.
const persons = [
  { name: "Gio", age: 20 },
  { name: "Beka", age: 23 },
  { name: "Nia", age: 15 },
  { name: "Tamo", age: 19 },
];
const updatedPersons = persons.map((value) => {
  return { name: value.name, age: value.age + 10 };
});
console.log(updatedPersons);

//------------------------------------------დავალება-1----------------------------------------------------
// Const arr = [
// 	[150, 20, 10],
// 	[55, 11, 260, 45],
// 	[1, 28]]
// მოცემული გვაქვს nested list.შექმენით 4 ცვლადი სადაც გამომიტანთ ჯამებს ლისტების. დინამიურად მიწვდით მასივის ელემენტებს. Arr[0][1] ესე არა.მე-4 ცვლადში ჯამი იყოს ყველა მასივის.

const arr = [
  [150, 20, 10],
  [55, 11, 260, 45],
  [1, 28],
];
const sumArr = arr.map((value) =>
  value.reduce((prev, current) => prev + current, 0),
);

const [sum1, sum2, sum3] = sumArr;
let totalSum = sumArr.reduce((prev, current) => prev + current, 0);
console.log(
  `პირველი მასივის ჯამი: ${sum1}, მეორე მასივის ჯამი: ${sum2}, მესამე მასივის ჯამი: ${sum3}, ყველა მასივის ჯამი: ${totalSum}`,
);

//------------------------------------------დავალება-2----------------------------------------------------
const students = [
  { id: 1, name: "Ana", grades: [85, 90, 78], isActive: true },
  { id: 2, name: "Luka", grades: [60, 75, 70], isActive: false },
  { id: 3, name: "Maya", grades: [92, 88, 95], isActive: true },
  { id: 4, name: "Gio", grades: [40, 55, 48], isActive: true },
];
//1. შექმენით ახალი მასივი სადაც იქნება მხოლოდ სტუდენტის სახელები. სახელები ყველა დიდი ასოთი.

const upperCaseStudentsNames = students.map((value) =>
  value.name.toUpperCase(),
);
console.log("სტუდენტების სახელები დიდი ასოთი:", upperCaseStudentsNames);

//2. დააბრუნეთ მასივი სადაც მხოლოდ იქნებიან აქტიური სტუდენტები.

const activeStudents = students.filter((value) => value.isActive);
console.log("მასივი მხოლოდ აქტიური სტუდენტებით", activeStudents);

//3. დალოგეთ ყველა სტუდენტის სტატუსი: (მაგალითად: ანა არის აქტიური სტუდენტი, ლუკა არა).
const studentsStatus = students.forEach((value) => {
  if (value.isActive === true) {
    console.log(`${value.name} არის აქტიური სტუდენტი`);
  } else {
    console.log(`${value.name} არ არის აქტიური სტუდენტი`);
  }
});

//4. შეამოწმეთ თუ ყველა სტუდენტის საშუალო ქულა არის 50-ზე მეტი და მითხარით პასუხი (ბუუულეანი).
const areAllStudentsAbove50 = students.every(
  (value) =>
    value.grades.reduce((prev, current) => prev + current, 0) /
      value.grades.length >
    50,
);
console.log(
  "ყველა სტუდენტის საშუალო ქულა არის 50-ზე მეტი?",
  areAllStudentsAbove50,
);

//5. შეამოწმეთ ერთ სტუდენტს მაინც თუ აქვს საშუალოდ 90-ზე მეტი ქულა. აქაც პასუხი ბუუულეანი.
const isAnyStudentAbove90 = students.some(
  (value) =>
    value.grades.reduce((prev, current) => prev + current, 0) /
      value.grades.length >
    90,
);
console.log(
  "ერთ სტუდენტს მაინც აქვს საშუალოდ 90-ზე მეტი ქულა?",
  isAnyStudentAbove90,
);

//6. მიპოვეთ ისეთი სტუდენტი ვისი სახელიც არის მაია.
const findMaya = students.find((value) => value.name === "Maya");
console.log("სტუდენტი ვისი სახელიც არის მაია:", findMaya);