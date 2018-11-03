const getAsteroids = () => {
    const api_key = 'MBvsTy9XnAwrzZkSG4HuH3tzLkYOBJX5LN9kNcPM';
    const currentYear = new Date().getFullYear();
    const start_date = currentYear+'-01-01';
    const end_date = currentYear+'-12-31';

    return new Promise((resolve, reject) => {
        axios('https://api.nasa.gov/neo/rest/v1/feed', {
            params: {api_key, start_date, end_date}
        }).then(res => {
            return res.data;
        })
          .catch(e => {
            reject(e);
        });
    })
}