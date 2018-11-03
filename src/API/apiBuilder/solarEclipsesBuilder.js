function getSolarEclipses() {
    const year = new Date().getFullYear();

    return new Promise((resolve, reject) => {
        axios(`http://api.usno.navy.mil/eclipses/solar?year=${year}`).then(res => {
            if (!res.error) {
                resolve(res.eclipses_in_year);
            } else {
                reject(res.error)
            }
        });
    })
}
