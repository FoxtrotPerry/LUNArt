(async() => {
    const solarObject = await getSolarEclipses();
    console.log(JSON.stringify(solarObject));
});