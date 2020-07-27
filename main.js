const fs = require('fs');


const getStudentByIndex = function(index){

  const file = fs.readFileSync('../students.json', 'utf8')
  const data = JSON.parse(file)

  return data['students'][index]
}

const getStudentByName = function(str){

  const file = fs.readFileSync('../students.json', 'utf8')
  const data = JSON.parse(file)

for(const name of data.students){
  if(name.name === str){
    return name
  }
} return -1
}

const graduateStudent = function(str){

  const file = fs.readFileSync('../students.json', 'utf8')
  const data = JSON.parse(file)

  for(const name of data.students){
    if(name.name === str){
     name.term = name.term + 1

   }

  }
  const newContents = JSON.stringify(data)
  fs.writeFileSync('../students.json', newContents)
}







if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}
