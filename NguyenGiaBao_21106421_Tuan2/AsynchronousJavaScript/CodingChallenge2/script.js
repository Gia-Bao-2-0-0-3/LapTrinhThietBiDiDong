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
        reject(new Error('Image not found'));
      });
    });
  };
  
// Biến toàn cục để lưu trữ hình ảnh hiện tại
  let currentImage;
  
// Tải hình ảnh đầu tiên
  createImage('img/img-1.jpg')
    .then((img) => {
      currentImage = img;
      console.log('Image 1 loaded');
      return wait(2);
    })
    .then(() => {
      currentImage.style.display = 'none';
      return createImage('img/img-2.jpg');
    })
    .then((img) => {
      currentImage = img;
      console.log('Image 2 loaded');
      return wait(2);
    })
    .then(() => {
      currentImage.style.display = 'none';
    })
    .catch((err) => {
      console.error(err.message);
    });