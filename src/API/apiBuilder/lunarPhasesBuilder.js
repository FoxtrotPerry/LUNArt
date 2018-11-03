function getLunarPhases() {
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDay();
    const currentMonth = new Date().getMonth();
    const date = currentMonth + '/' + currentDay + '/' + currentYear;
    return new Promise(function(resolve, reject) {
        axios(`http://api.usno.navy.mil/moon/phase?date=${date}&nump=1`).then(res => {
            if (!res.data.error) {
                resolve(res.data.phasedata);
            }
        })
        .catch(e => reject(e));
    })
}