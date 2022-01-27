const cardTemplate = (member) => {
  const name = member.getName()
  const id = member.getId()
  const email = member.getEmail()
  switch (member.getRole()) {
    case 'Manager':
      const officeNumber = member.getOfficeNumber()
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
          <li class="list-group-item">Office Number: ${officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>`
    case 'Intern':
      const school = member.getSchool()
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
          <li class="list-group-item">School: ${school}</li>
        </ul>
      </div>
    </div>
  </div>`
    case 'Engineer':
      const github = member.getGithub()
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
          <li class="list-group-item">GitHub: ${github}</li>
        </ul>
      </div>
    </div>
  </div>`
  }
}


module.exports = cardTemplate