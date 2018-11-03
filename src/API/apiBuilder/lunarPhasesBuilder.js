export const getLunarPhases = () => {
    const year = new Date().getFullYear();
    axios(`/sunmoon/moonphases/minneapolis,mn?from=${year}-01-01&to=${year}-12-31&limit=100`).then(res => {
        if (res.success) {
            return res.response;
        }
    });
}