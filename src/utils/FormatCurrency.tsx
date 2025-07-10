export function formatCurrency(value: number, symbol: any = "."): string {
  const str = Math.round(value).toString(); // Làm tròn và chuyển thành chuỗi
  const reversed = str.split("").reverse();
  const result = [];

  for (let i = 0; i < reversed.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result.push(symbol);
    }
    result.push(reversed[i]);
  }

  return result.reverse().join("") + " ₫";
}
