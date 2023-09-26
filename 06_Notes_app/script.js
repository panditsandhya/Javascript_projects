const addBtn = document.querySelector("#addBtn")
const main = document.querySelector('#main')

const saveNotes = () => {
  const notes = document.querySelectorAll('.note textarea');
  const data = [];
  notes.forEach(
    (note) => {
      data.push(note.value)
    }
  )
  //console.log(data);
  localStorage.setItem("notes", JSON.stringify(data))
}

addBtn.addEventListener('click', function () {
  addNote()

});


const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note")
  note.innerHTML = `<div class="tool">
  <i class="save fa-solid fa-floppy-disk"></i>
  <i class="trash fa-solid fa-trash-can"></i>
 </div>
 <textarea>${text}</textarea>`;

  note.querySelector('.trash').addEventListener('click', function () {
    note.remove()

  }
  )

  note.querySelector('.save').addEventListener('click', function(){
    saveNotes()

  })
  main.appendChild(note);
  saveNotes()
}

(
  function(){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    lsNotes.forEach(
      (lsNote) => {
        addNote(lsNote)
      }
    )

  }
)()