function updateMeteors(meteors,windowWidth) {
    temp_meteors = meteors;
    for(let i = 0; i < 40; i++) {
        if(temp_meteors[i][0] > windowWidth) {
            temp_meteors[i][0] = 0;
        }
        temp_meteors[i][0] += temp_meteors[i][2];
    }
    return temp_meteors;
}