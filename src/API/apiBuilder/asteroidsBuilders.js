function getAsteroids() {
    const api_key = 'MBvsTy9XnAwrzZkSG4HuH3tzLkYOBJX5LN9kNcPM';
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDay();
    const currentMonth = new Date().getMonth();
    // (yyy-mm-dd)
    const start_date = currentYear + '-' + currentMonth + '-' + currentDay;
    const end_date = currentYear + '-' + currentMonth + '-' + currentDay;

    return new Promise(function(resolve, reject) {
        axios('https://api.nasa.gov/neo/rest/v1/feed', {
            params: {api_key, start_date, end_date}
        }).then(res => {
            resolve(res.data);
        })
          .catch(e => {
            reject(e);
        });
    })
}