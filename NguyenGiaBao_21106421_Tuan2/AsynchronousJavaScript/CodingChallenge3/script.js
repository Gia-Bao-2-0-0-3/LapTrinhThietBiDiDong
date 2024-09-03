// Hàm trợ giúp để chờ một khoảng thời gian nhất định
const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

// Hàm để tạo và tải một hình ảnh
const createImage = (imgPath) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      document.querySelector('.images').appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Không tìm thấy hình ảnh'));
    });
  });
};

// Phần 1: Sử dụng async/await để tải hình ảnh
// const loadNPause = async () => {
//   try {
//     // Tải hình ảnh đầu tiên
//     let img = await createImage('img/img-1.jpg');
//     console.log('Hình ảnh 1 đã tải');
//     await wait(2);
//     img.style.display = 'none';

//     // Tải hình ảnh thứ hai
//     img = await createImage('img/img-2.jpg');
//     console.log('Hình ảnh 2 đã tải');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// // Gọi hàm loadNPause để kiểm tra
// loadNPause();

// Phần 2: Tải nhiều hình ảnh song song
const loadAll = async (imgArr) => {
  try {
    const imgs = imgArr.map(async (imgPath) => await createImage(imgPath));
    const imgElements = await Promise.all(imgs);
    console.log(imgElements);

    imgElements.forEach((img) => img.classList.add('parallel'));
  } catch (err) {
    console.error(err.message);
  }
};

// Dữ liệu kiểm tra cho phần 2
const imgPaths = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
loadAll(imgPaths);  