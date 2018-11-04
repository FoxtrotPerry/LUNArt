function getTideData() {
    date = moment().format('YYYYMMDD');
    date2 = moment().add(1, 'days').format('YYYYMMDD');
    return new Promise(function(resolve, reject) {
        axios(`https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${date}&end_date=${date2}&datum=MLLW&station=8518995&time_zone=lst_ldt&units=english&interval=hilo&format=json`).then(res => {
            if (!res.data.error) {
                resolve(res.data.predictions);
            }
        })
        .catch(e => reject(e));
    })
}