const cardTemplate = (member) => {
  const {name, id, email, officeNumber} = member
    return `<div class="card shadow-lg" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h2>${name}</h2>
        <h2>Role</h2>
    </div>
    <div class="card-body">
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">Office Number</li>
        </ul>
      </div>
    </div>
  </div>`
}

module.exports = cardTemplate