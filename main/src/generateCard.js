const cardTemplate = (member) => {
  const {name,id,email,extra} = member
  switch(member.__proto__.constructor.name) {
  case 'Manager':
    return `<div class="card shadow-lg" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h2>${name}</h2>
        <h2>Manager</h2>
    </div>
    <div class="card-body">
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">Office Number: ${extra}</li>
        </ul>
      </div>
    </div>
  </div>`
  case 'Intern':
    return `<div class="card shadow-lg" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h2>${name}</h2>
        <h2>Intern</h2>
    </div>
    <div class="card-body">
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">School: ${extra}</li>
        </ul>
      </div>
    </div>
  </div>`
  case 'Engineer':
    return `<div class="card shadow-lg" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h2>${name}</h2>
        <h2>Engineer</h2>
    </div>
    <div class="card-body">
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">GitHub: ${extra}</li>
        </ul>
      </div>
    </div>
  </div>`
  }
}


module.exports = cardTemplate