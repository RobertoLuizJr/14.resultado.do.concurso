const students = [
  {name: `Roberto Júnior`,
  firstGrade: 9,
  secondGrade: 8},
  
  {name: `Danielle Araujo`,
  firstGrade: 7,
  secondGrade: 10},

  {name: `Leticia Silva`,
  firstGrade: 9,
  secondGrade: 7},

  {name: `Ana Rosa`,
  firstGrade: 6,
  secondGrade: 8}, 

  {name: `Ana Roberta`,
  firstGrade: 6,
  secondGrade: 9}, 

  {name: `Renilda`,
  firstGrade: 6,
  secondGrade: 5},

  {name: `Roberto Pai`,
  firstGrade: 9,
  secondGrade: 6}
]


function calcAverage(firstGrade, secondGrade) {
  let average =  (firstGrade + secondGrade) / 2
  return average
}

for(let student of students) {
  let average = calcAverage(student.firstGrade, student.secondGrade)

  if (average >= 7) {
    alert(`Parabéns ${student.name}! Sua média foi de ${average} e você foi aprovado(a) no concurso!
    `)
  } else {
    alert(`Caro(a) ${student.name}, sua média de ${average} não foi suficiente para a aprovação!`)
  }
}