listHtml = '';

for(let i=0; i<=templateData.length; i++) {
    listHtml += `<h1>templateData[i].name<\h1>`
}

module.exports = templateData => {
    console.log(templateData);
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
    </head>
  
    <body>
      <h1>${listHtml}</h1>
      <h2><a href="https://github.com/${templateData.github}">Github</a></h2>
    </body>
    </html>
    `;
  };