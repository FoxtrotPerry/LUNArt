export const getSolarEclipses = year => {
    axios(`http://api.usno.navy.mil/eclipses/solar?year=${year}`).then(res => {
        if (!res.error) {
            return res.eclipses_in_year;
        }
    });
}
