
    //Coding Challenge #1
        // Data 1
        let markMass1 = 78;
        let markHeight1 = 1.69;
        let johnMass1 = 92;
        let johnHeight1 = 1.95;

        let markBMI1 = markMass1 / markHeight1 ** 2;
        let johnBMI1 = johnMass1 / johnHeight1 ** 2;

        let markHigherBMI1 = markBMI1 > johnBMI1;
        console.log(`Data 1: Mark weighs ${markMass1} kg and is ${markHeight1} m tall. John weighs ${johnMass1} kg and is ${johnHeight1} m tall.`);
        console.log("Mark'BMI > John's BMI: " + markHigherBMI1);
        // Data 2
        let markMass2 = 95;
        let markHeight2 = 1.88;
        let johnMass2 = 85;
        let johnHeight2 = 1.76;

        let markBMI2 = markMass2 / markHeight2 ** 2;
        let johnBMI2 = johnMass2 / johnHeight2 ** 2;

        let markHigherBMI2 = markBMI2 > johnBMI2;
        console.log(`Data 2: Mark weighs ${markMass2} kg and is ${markHeight2} m tall. John weighs ${johnMass2} kg and is ${johnHeight2} m tall.`);
        console.log("Mark'BMI > John's BMI: " + markHigherBMI2);
    //Coding Challenge #2
        // Data 1
        if (markHigherBMI1) {
        console.log(`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`);
        } else {
        console.log(`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`);
        }
        // Data 2
        if (markHigherBMI2) {
        console.log(`Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
        } else {
        console.log(`John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
        }
    //Coding Challenge #3
        // Function để tính toán điểm trung bình
        function calculateAverage(score1, score2, score3) {
            return (score1 + score2 + score3) / 3;
        }

        // Test data
        let dolphinsScores1 = [96, 108, 89];
        let koalasScores1 = [88, 91, 110];
        console.log(`Dolphins' scores ${dolphinsScores1}`, `Koalas' scores ${koalasScores1}`);
        let dolphinsScoresBonus1 = [97, 112, 101];
        let koalasScoresBonus1 = [109, 95, 123];
        console.log(`Dolphins' scores ${dolphinsScoresBonus1}`, `Koalas' scores ${koalasScoresBonus1}`);
        let dolphinsScoresBonus2 = [97, 112, 101];
        let koalasScoresBonus2 = [109, 95, 106];
        console.log(`Dolphins' scores ${dolphinsScoresBonus2}`, `Koalas' scores ${koalasScoresBonus2}`);
        // Tính toán điểm trung bình
        let dolphinsAvg1 = calculateAverage(...dolphinsScores1);
        let koalasAvg1 = calculateAverage(...koalasScores1);

        let dolphinsAvgBonus1 = calculateAverage(...dolphinsScoresBonus1);
        let koalasAvgBonus1 = calculateAverage(...koalasScoresBonus1);

        let dolphinsAvgBonus2 = calculateAverage(...dolphinsScoresBonus2);
        let koalasAvgBonus2 = calculateAverage(...koalasScoresBonus2);

        // Xác định đội thắng 
        if (dolphinsAvg1 > koalasAvg1) {
            console.log(`Dolphins win with an average score of ${dolphinsAvg1.toFixed(1)}!`);
        } else if (koalasAvg1 > dolphinsAvg1) {
            console.log(`Koalas win with an average score of ${koalasAvg1.toFixed(1)}!`);
        } else {
            console.log(`It's a draw with both teams scoring an average of ${dolphinsAvg1.toFixed(1)}!`);
        }

        // Xác định đội thắng cho Bonus 1
        if (dolphinsAvgBonus1 > koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {
            console.log(`Dolphins win with an average score of ${dolphinsAvgBonus1.toFixed(1)}!`);
        } else if (koalasAvgBonus1 > dolphinsAvgBonus1 && koalasAvgBonus1 >= 100) {
            console.log(`Koalas win with an average score of ${koalasAvgBonus1.toFixed(1)}!`);
        } else if (dolphinsAvgBonus1 === koalasAvgBonus1 && dolphinsAvgBonus1 >= 100 && koalasAvgBonus1 >= 100) {
            console.log(`It's a draw with both teams scoring an average of ${dolphinsAvgBonus1.toFixed(1)}!`);
        } else {
            console.log(`No team wins the trophy!`);
        }

        // Xác định đội thắng cho Bonus 2
        if (dolphinsAvgBonus2 > koalasAvgBonus2 && dolphinsAvgBonus2 >= 100) {
            console.log(`Dolphins win with an average score of ${dolphinsAvgBonus2.toFixed(1)}!`);
        } else if (koalasAvgBonus2 > dolphinsAvgBonus2 && koalasAvgBonus2 >= 100) {
            console.log(`Koalas win with an average score of ${koalasAvgBonus2.toFixed(1)}!`);
        } else if (dolphinsAvgBonus2 === koalasAvgBonus2 && dolphinsAvgBonus2 >= 100 && koalasAvgBonus2 >= 100) {
            console.log(`It's a draw with both teams scoring an average of ${dolphinsAvgBonus2.toFixed(1)}!`);
        } else {
            console.log(`No team wins the trophy!`);
        }
    //Coding Challenge #4
        // Test data
        let bill1 = 275;
        let bill2 = 40;
        let bill3 = 430;

        // Function to calculate tip and print the result
        function calculateTip(bill) {
            let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
            console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${ (bill + tip).toFixed(2) }`);
        }

        // Calculate and print for each test data
        calculateTip(bill1);
        calculateTip(bill2);
        calculateTip(bill3);