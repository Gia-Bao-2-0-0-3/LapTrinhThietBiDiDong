const whereAmI = async (lat, lng) => {
    try {
      // Reverse geocoding
      const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
      if (!geoRes.ok) throw new Error('Problem with geocoding API');
      const geoData = await geoRes.json();
      console.log(geoData);
  
      const city = geoData.city;
      const country = geoData.country;
      if (!country) throw new Error('Country not found for these coordinates');
      console.log(`You are in ${city}, ${country}`);
  
      // Lấy dữ liệu quốc gia
      const countryRes = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      if (!countryRes.ok) throw new Error('Problem with countries API');
      const countryData = await countryRes.json();
      console.log(countryData[0]);
  
      // Hiển thị dữ liệu quốc gia
      renderCountry(countryData[0]);
    } catch (err) {
      console.error(`${err.message}`);
    }
  };
  
  // Hàm trợ giúp để hiển thị dữ liệu quốc gia
  const renderCountry = (data) => {
    const countryHTML = `
      <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(data.population / 1_000_000).toFixed(1)} million people</p>
          <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(', ')}</p>
          <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
      </article>
    `;
    document.querySelector('.countries').insertAdjacentHTML('beforeend', countryHTML);
  };
  
  // Test data
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);