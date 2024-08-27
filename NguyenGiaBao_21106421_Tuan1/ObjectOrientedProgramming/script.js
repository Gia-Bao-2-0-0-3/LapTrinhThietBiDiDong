//Code challenge 1
// 1. Sử dụng hàm constructor để triển khai 'Car'
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // 2. Triển khai phương thức 'accelerate' để tăng tốc độ của xe lên 10 km/h
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // 3. Triển khai phương thức 'brake' để giảm tốc độ của xe xuống 5 km/h
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // 4. Tạo 2 đối tượng 'Car' và thử nghiệm gọi 'accelerate' và 'brake' nhiều lần trên mỗi đối tượng
  console.log('--- Data 1 ---');
  const car1 = new Car('BMW', 120);
  console.log(`${car1.make} is going at ${car1.speed} km/h`);

  console.log('--- Data 2 ---');
  const car2 = new Car('Mercedes', 95);
  console.log(`${car2.make} is going at ${car2.speed} km/h`);

  console.log('--- Test Data 1 ---');
  car1.accelerate(); // BMW is going at 130 km/h
  car1.accelerate(); // BMW is going at 140 km/h
  car1.brake();      // BMW is going at 135 km/h
  car1.brake();      // BMW is going at 130 km/h
  
  console.log('--- Test Data 2 ---');
  car2.accelerate(); // Mercedes is going at 105 km/h
  car2.accelerate(); // Mercedes is going at 115 km/h
  car2.brake();      // Mercedes is going at 110 km/h
  car2.brake();      // Mercedes is going at 105 km/h

//Code challenge 2
// 1. Tạo lại Challenge #1, nhưng lần này sử dụng lớp ES6 (gọi là 'CarCl')
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // 2. Thêm getter 'speedUS' để trả về tốc độ hiện tại bằng mi/h (chia cho 1.6)
    get speedUS() {
      return this.speed / 1.6;
    }
  
    // 3. Thêm setter 'speedUS' để đặt tốc độ hiện tại bằng mi/h (nhưng chuyển đổi nó sang km/h trước khi lưu giá trị, bằng cách nhân đầu vào với 1.6)
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  
    // Phương thức 'accelerate' để tăng tốc độ của xe lên 10 km/h
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Phương thức 'brake' để giảm tốc độ của xe xuống 5 km/h
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  

  }
  
  // 4. Tạo một chiếc xe mới và thử nghiệm với các phương thức 'accelerate' và 'brake', và với getter và setter.
  const car3 = new CarCl('Ford', 120);
  
  car3.accelerate(); // Ford is currently going at 120 km/h, Ford is going at 130 km/h
  car3.accelerate(); // Ford is currently going at 130 km/h, Ford is going at 140 km/h
  car3.brake();      // Ford is currently going at 140 km/h, Ford is going at 135 km/h
  car3.brake();      // Ford is currently going at 135 km/h, Ford is going at 130 km/h
  
  // Sử dụng getter để lấy tốc độ hiện tại bằng mi/h
  console.log(`Current speed in mi/h: ${car3.speedUS}`); // Current speed in mi/h: 81.25
  
  // Sử dụng setter để đặt tốc độ hiện tại bằng mi/h
  car3.speedUS = 50;
  console.log(`Current speed in km/h after setting speedUS to 50 mi/h: ${car1.speed}`); // Current speed in km/h after setting speedUS to 50 mi/h: 80
//Code challenge 3
// Lớp con EV kế thừa từ Car
function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
  }
  
  // Kế thừa các phương thức từ Car
  EV.prototype = Object.create(Car.prototype);
  
  // 2. Triển khai phương thức 'chargeBattery' để đặt mức sạc pin
  EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
  };
  
  // 3. Triển khai phương thức 'accelerate' để tăng tốc độ của xe lên 20 km/h và giảm mức sạc pin xuống 1%
  EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  };
  
  // 4. Tạo một đối tượng xe điện và thử nghiệm gọi 'accelerate', 'brake' và 'chargeBattery'
  const ev1 = new EV('Tesla', 120, 23);
  
  ev1.accelerate(); // Tesla is going at 140 km/h, with a charge of 22%
  ev1.brake();      //  Tesla is going at 135 km/h
  ev1.chargeBattery(90);
  console.log(`Battery charged to: ${ev1.charge}%`); // Battery charged to: 90%
  ev1.accelerate(); // Tesla is going at 155 km/h, with a charge of 89%

//Code challenge 4
  class EVCl extends CarCl {
    #charge; // Thuộc tính riêng tư
  
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
  
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`Battery charged to: ${this.#charge}%`);
      return this; // Trả về đối tượng để có thể xâu chuỗi các phương thức
    }
  
    accelerate() {
      this.speed += 20;
      this.#charge--;
      console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
      return this; // Trả về đối tượng để có thể xâu chuỗi các phương thức
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this; // Trả về đối tượng để có thể xâu chuỗi các phương thức
    }

  }
  
  // 4. Tạo một đối tượng xe điện và thử nghiệm gọi 'accelerate', 'brake' và 'chargeBattery'
  const ev2  = new EVCl('Rivian', 120, 23);
  
  ev2.accelerate() // Rivian is going at 140 km/h, with a charge of 22%
     .brake()      // Rivian is going at 135 km/h
     .chargeBattery(90)
     .accelerate(); // Rivian is going at 155 km/h, with a charge of 89%