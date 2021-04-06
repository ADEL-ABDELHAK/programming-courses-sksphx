let age: number;
age = parseInt(prompt("ادخل عمرك"));
if (age >= 18 && age <= 130) {
  console.log("أنت راشد");
}
if (age < 18 && age > 0) {
  console.log("أنت قاصر");
}
if (age > 130 || age <= 0) {
  console.log("الرجاء إدخال القيم الصحيصة");
}
console.log("النهاية");