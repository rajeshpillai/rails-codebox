document.addEventListener("turbolinks:load", () => {
  const $btnRun = $("#btn_run");
  $btnRun.on("click", () => {
    let id = $btnRun.attr("data_id");
    fetch(`http://localhost:3000/codes/${id}.json`)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      show_preview(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  })

  function show_preview(data) {
    const iframe = document.querySelector("#iframe");
    const doc = iframe.contentDocument;
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          ${data.css}
        </style>
      </head>
      <body>
        ${data.html}

        <script type="text/javascript">
          ${data.js}
        </script>

      </body>
      </html>
    `;

    doc.open();
    doc.write(documentContents);
    doc.close();
    // iframe.contentWindow.location.reload();
    // iframe.src = "data:text/html;charset=utf-8," + encodeURI(documentContents)
    
  }
})