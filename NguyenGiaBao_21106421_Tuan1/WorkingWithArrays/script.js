
//Code challenge 1
function checkDogs(dogsJulia, dogsKate) {
    // 1. Tạo bản sao nông của mảng của Julia và loại bỏ 1 phần tử đầu và 2 phần tử cuối
    const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  
    // 2. Tạo mảng với cả dữ liệu của Julia (đã chỉnh sửa) và Kate
    const allDogs = dogsJuliaCorrected.concat(dogsKate);
  
    // 3. Kiểm tra từng con chó và log ra console
    allDogs.forEach((age, i) => {
      if (age >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
      } else {
        console.log(`Dog number ${i + 1} is still a puppy `);
      }
    });
  }
  
  // 4. Chạy hàm với cả hai bộ dữ liệu thử nghiệm
  console.log('--- Test Data 1 ---');
  checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  
  console.log('--- Test Data 2 ---');
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//Code challenge 2
function calcAverageHumanAge(ages) {
    // 1. Tính tuổi chó theo năm người
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  
    // 2. Loại bỏ tất cả các con chó có tuổi người dưới 18
    const adults = humanAges.filter(age => age >= 18);
  
    // 3. Tính tuổi trung bình của tất cả các con chó trưởng thành
    const averageAge = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  
    return averageAge;
  }
  
  // 4. Chạy hàm với cả hai bộ dữ liệu thử nghiệm
  console.log('--- Test Data 1 ---');
  console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // Expected output: 44
  
  console.log('--- Test Data 2 ---');
  console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // Expected output: 47.333333333333336

//Code challenge 3
const calcAverageHumanAge2 = ages =>
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  
  // Test data
  console.log('--- Test Data 1 ---');
  console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3])); // Expected output: 44
  
  console.log('--- Test Data 2 ---');
  console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4])); // Expected output: 47.333333333333336

//Code challenge 4
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
  ];
  
// 1. Tính toán khẩu phần ăn khuyến nghị và thêm nó vào từng đối tượng chó
  dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  
// 2. Tìm chó của Sarah và ghi ra console xem nó ăn quá nhiều hay quá ít
  const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
  console.log(
    `Sarah's dog is eating too ${
      sarahsDog.curFood > sarahsDog.recommendedFood ? 'much' : 'little'
    }`
  );
  
// 3. Tạo các mảng cho chủ sở hữu của những con chó ăn quá nhiều hoặc quá ít
  const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
  
  const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);
  
  // 4. Ghi ra console các chuỗi cho từng mảng

  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  // 5. Ghi ra console xem có con chó nào ăn đúng lượng thức ăn khuyến nghị không

  console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
  
  // 6. Ghi ra console xem có con chó nào ăn một lượng thức ăn ổn không

  const isEatingOkay = dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;
  console.log(dogs.some(isEatingOkay));
  
  // 7. Tạo một mảng các con chó ăn một lượng thức ăn ổn
  const dogsEatingOkay = dogs.filter(isEatingOkay);
  console.log(dogsEatingOkay);
  
  // 8. Tạo một bản sao nông của mảng chó và sắp xếp nó theo khẩu phần ăn khuyến nghị

  const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log(dogsSorted);