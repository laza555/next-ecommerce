export function convertToEng(faNumbers) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return faNumbers.split('').map(c => persianDigits.indexOf(c) !== -1 ? String(persianDigits.indexOf(c)) : c).join('');
}

export function convertToFa(engNumbers) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return engNumbers.split('').map(c => Number.isInteger(parseInt(c)) ? persianDigits[c] : c).join('');
}
