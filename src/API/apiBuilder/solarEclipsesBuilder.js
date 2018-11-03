function getSolarEclipses() {
    const year = new Date().getFullYear();
    return new Promise(function(resolve, reject) {
        axios(`http://api.usno.navy.mil/eclipses/solar?year=${year}`).then(res => {
            if (!res.data.error) {
                resolve(res.data.eclipses_in_year);
            }
        })
        .catch(e => reject(e));
    })
}
