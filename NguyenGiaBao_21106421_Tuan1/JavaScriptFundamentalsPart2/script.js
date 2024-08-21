//Coding Challenge #1
    // 1. Tạo một hàm mũi tên 'calcAverage' để tính trung bình của 3 điểm số
    const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

    // 2. Sử dụng hàm để tính trung bình cho cả hai đội
    //Data 1
    const avgDolphins1 = calcAverage(44, 23, 71);
    const avgKoalas1 = calcAverage(65, 54, 49);
    console.log("Data 1: Dolphins score: 44, 23, 71; Koalas score: 65, 54, 49");    
    //Data 2
    const avgDolphins2 = calcAverage(85, 54, 41);
    const avgKoalas2 = calcAverage(23, 34, 27);
    console.log("Data 2: Dolphins score: 85, 54, 41; Koalas score: 23, 34, 27");
    // 3. Tạo một hàm 'checkWinner' nhận điểm trung bình của mỗi đội làm tham số
    const checkWinner = (avgDolphins, avgKoalas) => {
        if (avgDolphins >= 2 * avgKoalas) {
            console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
        } else if (avgKoalas >= 2 * avgDolphins) {
            console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
        } else {
            console.log('No team wins!');
        }
    };

    // 4. Sử dụng hàm 'checkWinner' để xác định đội thắng cho cả Dữ liệu 1 và Dữ liệu 2
    checkWinner(avgDolphins1, avgKoalas1);
    checkWinner(avgDolphins2, avgKoalas2);
//Coding Challenge #2
    // 1. Viết hàm 'calcTip' nhận giá trị hóa đơn và trả về tiền tip tương ứng
    const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

    // Kiểm tra hàm với giá trị hóa đơn là 100
    console.log(calcTip(100)); // Expected output: 15

    // 2. Tạo một mảng 'bills' chứa dữ liệu kiểm tra
    const bills = [125, 555, 44];

    // 3. Tạo một mảng 'tips' chứa giá trị tiền tip cho mỗi hóa đơn, tính từ hàm 'calcTip'
    const tips = bills.map(calcTip);

    // 4. Bonus: Tạo một mảng 'total' chứa tổng giá trị (hóa đơn + tiền tip)
    const total = bills.map((bill, index) => bill + tips[index]);

    // In ra kết quả
    console.log(`Bills: ${bills}`);
    console.log(`Tips: ${tips}`);
    console.log(`Total: ${total}`);
//Coding Challenge #3
    // 1. Tạo đối tượng cho Mark và John với các thuộc tính tên đầy đủ, cân nặng và chiều cao
    const mark = {
        fullName: 'Mark Miller',
        mass: 78,
        height: 1.69,
        // 2. Thêm phương thức 'calcBMI' để tính và lưu giá trị BMI
        calcBMI: function() {
            this.bmi = this.mass / (this.height ** 2);
            return this.bmi;
        }
    };

    const john = {
        fullName: 'John Smith',
        mass: 92,
        height: 1.95,
        // 2. Thêm phương thức 'calcBMI' để tính và lưu giá trị BMI
        calcBMI: function() {
            this.bmi = this.mass / (this.height ** 2);
            return this.bmi;
        }
    };

    console.log("Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.");  

    // Tính BMI cho cả Mark và John
    mark.calcBMI();
    john.calcBMI();

    // 3. In ra console ai có BMI cao hơn, kèm theo tên đầy đủ và BMI tương ứng
    if (mark.bmi > john.bmi) {
        console.log(`${mark.fullName.split(" ")[0]}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName.split(" ")[0]}'s BMI (${john.bmi.toFixed(1)})!`);
    } else if (john.bmi > mark.bmi) {
        console.log(`${john.fullName.split(" ")[0]}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName.split(" ")[0]}'s BMI (${mark.bmi.toFixed(1)})!`);
    } else {
        console.log(`${mark.fullName.split(" ")[0]} and ${john.fullName.split(" ")[0]} have the same BMI (${mark.bmi.toFixed(1)})!`);
    }
//Coding Challenge #4
    // 1. Tạo một mảng 'bills' chứa tất cả 10 giá trị hóa đơn kiểm tra
    const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

    // 2. Tạo các mảng trống cho tiền tip và tổng ('tips' và 'totals')
    const tips2 = [];
    const totals2 = [];

    // Hàm calcTip từ trước
    const calcTip2 = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

    // 3. Sử dụng hàm 'calcTip' để tính tiền tip và tổng giá trị cho mỗi hóa đơn trong mảng 'bills'
    for (let i = 0; i < bills2.length; i++) {
        const tip = calcTip2(bills2[i]);
        tips2.push(tip);
        totals2.push(bills2[i] + tip);
    }

    // In ra kết quả
    console.log('Bills:', bills2);
    console.log('Tips:', tips2);
    console.log('Totals:', totals2);

    // 4. Bonus: Viết hàm 'calcAverage' để tính trung bình của tất cả các số trong mảng cho trước
    const calcAverage2 = arr => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    };

    // Gọi hàm với mảng 'totals'
    console.log('Average Total:', calcAverage2(totals2));

