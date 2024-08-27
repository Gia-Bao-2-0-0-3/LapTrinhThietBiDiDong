//Coding Challenge #1
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // 1. Tạo mảng cầu thủ cho mỗi đội
  const [players1, players2] = game.players;
  
  // 2. Trích xuất thủ môn và các cầu thủ còn lại cho Bayern Munich
  const [gk, ...fieldPlayers] = players1;
  
  // 3. Tạo mảng chứa tất cả cầu thủ của cả hai đội
  const allPlayers = [...players1, ...players2];
  
  // 4. Tạo mảng mới chứa tất cả cầu thủ gốc của đội 1 cộng với các cầu thủ thay thế
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // 5. Trích xuất các tỷ lệ cược vào các biến
  const { team1, x: draw, team2 } = game.odds;
  
  // 6. Hàm in tên cầu thủ và tổng số bàn thắng
  const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
    for (const player of players) {
      console.log(player);
    }
  };
  
  // Dữ liệu kiểm tra cho printGoals
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);
  
  // 7. Xác định và in ra đội nào có khả năng thắng cao hơn
  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2 && console.log('Team 2 is more likely to win');

//Coding Challenge #2
// 1. Lặp qua mảng game.scored và in tên mỗi cầu thủ ra console
  game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
  });
  
  // 2. Tính trung bình tỷ lệ cược và in ra console
  const odds = Object.values(game.odds);
  const averageOdd = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
  console.log(`Average odd: ${averageOdd}`);
  
  // 3. In 3 tỷ lệ cược ra console theo định dạng đẹp
  console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
  console.log(`Odd of draw: ${game.odds.x}`);
  console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
  
  // 4.Tạo đối tượng 'scorers'
  const scorers = {};
  game.scored.forEach(player => {
    scorers[player] = (scorers[player] || 0) + 1;
  });
  console.log(scorers);

//Coding Challenge #3
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
  
  // 1. Tạo một mảng 'events' chứa các sự kiện khác nhau trong trận đấu (không trùng lặp)

  const events = [...new Set(gameEvents.values())];
  console.log(events);
  
  // 2. Xóa sự kiện thẻ vàng ở phút 64

  gameEvents.delete(64);
  
  // 3. Tính và in ra tần suất trung bình của các sự kiện
  const totalEvents = gameEvents.size;
  const averageFrequency = 90 / totalEvents;
  console.log(`An event happened, on average, every ${averageFrequency.toFixed(2)} minutes`);
  
  // 4. Lặp qua 'gameEvents' và in từng phần tử ra console
  for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${half} ${minute}: ${event}`);
  }