function getLunarPhases() {
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth()+1;
    const date = currentMonth + '/' + currentDay + '/' + currentYear;
    return new Promise(function(resolve, reject) {
        axios(`http://api.usno.navy.mil/moon/phase?date=${date}&nump=2`).then(res => {
            if (!res.data.error) {
                resolve(res.data.phasedata);
            }
        })
        .catch(e => reject(e));
    })
}