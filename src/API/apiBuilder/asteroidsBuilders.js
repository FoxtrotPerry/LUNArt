export const getAsteroids = () => {
    axios(`https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATEAPI_KEY&end_date=END_DATE&api_key=`).then(res => { // need API key
        return res;
    })
    .catch(e => {

    });
}