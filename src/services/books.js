export function getAllBook(month, statisProfitByMonth) {
  const data = [
    ...Array(1000)
      .fill(null)
      .map((_, index) => {
        let warehousePrice = (Math.random() * 2 + 5).toFixed(2);
        return {
          code: `code${index + 91}`, // Starting from 51 for new entries
          name: `Book Title ${index + 51}`,
          author: `Author ${index + 51}`,
          warehousePrice,
          price: (+warehousePrice + 2).toFixed(2), // Random price between $5 and $25
          numberPage: Math.floor(Math.random() * 1000 + 50), // Random pages between 50 and 1050
          month: Math.floor(Math.random() * 12 + 1), // Random month 1-12
          quantitySold: +Math.floor(Math.random() * 500 + 50), // Random number of sells between 50 and 5000
          day: Math.floor(Math.random() * 30 + 1)
        };
      })
  ];

  let dataByMonth = data.filter((item) => item.month === month);
  if (month) return dataByMonth;
  if (statisProfitByMonth) return dataByMonth.reduce(() => {}, 0);
  else return data;
}

export function getStatsBookByMonth(month) {
  const data = [
    ...Array(13)
      .fill(null)
      .map((_, index) => ({
        month: index,
        active: (Math.random() * 20 + 5).toFixed(2),
        idle: (Math.random() * 20 + 5).toFixed(2),
        inActive: (Math.random() * 20 + 5).toFixed(2)
      }))
  ];

  if (month) return data.find((item) => item.month === month);
  else return data;
}

export function getDataPieChart(number) {
  return Math.floor(Math.random() * number);
}
