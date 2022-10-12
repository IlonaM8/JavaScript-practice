function uncompletedNotes(notes) {
  
  return notes.filter(note => note.todos.some(todo => todo.done === false));
 
//return notes.filter((el) => el + notes.todos.done === false)

  // let test = (el) => el.todos.done === false
  // return notes.some(el)

  // return notes.even(el => el.notes.todos[done] === false)
  
  //return notes.includes(false);

}


const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: false
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: true
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: true
      }
    ]
  }
]

//test 
// let test1 = notes[0].todos[0].done;
// console.log(test1);


const notesInProgress = uncompletedNotes(notes);
console.log('All notes: ', notes);
console.log('Notes In Progress: ', notesInProgress);