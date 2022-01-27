const generateCard = require('./generateCard')

const htmlTemplate = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
    crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
    <h1 class='text-center p-5 bg-danger text-white'>My Team</h1>
    <div class='d-flex container justify-content-center gap-5 flex-wrap mt-5'>${generateCard}</div>
</body>
</html>`}


module.exports = htmlTemplate