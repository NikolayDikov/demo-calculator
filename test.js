let j, bucket, temp2, temp, starter, Matrix;
let number=1;
Matrix = 9;
starter=0;
for (let D = 1; D < (Matrix*2); D++) {
    if (D<=Matrix) {
        temp=D;
        bucket = (temp-1)
        temp2 = temp;
    }else{
        starter++;
        temp=Matrix-starter;
        bucket = D-starter-1;
        temp2=D-starter;
    }
    console.log("------- Diagonal "+D+" -------");
    if (temp%2==0) {
        j = bucket;
        for (let i = starter; i < temp2; i++) {
            for (let n = bucket; n >= 0; n--) {
                if (n==j) {
                    console.log("arr[" + i + "][" + n + "] = " + number);
                    number++;
                }
            }
            j--;
        }
    }else{
        j = 0;
        for (let i = temp2-1; i >=starter; i--) {
            for (let n = 0; n < temp2; n++) {
                if (n==j+starter) {
                    console.log("arr[" + i + "][" + n + "] = " + number);
                    number++;
                }
            }
            j++;
        }
    }
}
