(async function() {
    const url = await ngrok.connect();
    console.log(url)
  })();