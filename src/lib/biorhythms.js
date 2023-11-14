import dayjs from 'dayjs';

export function calculateBiorhythms(birthDate, targetDate) {
  return{
    physical: calculateBiorhythms(birthDate, targetDate),
    emotional: 0.0,
    intellectual: 0.0,
  };  
}


function calculateBiorhythms(birthDate, targetDate) {
  const birthDay = dayjs(birthDate);
  const targetDay = dayjs(targetDate);
  const diff = targetDay.diff(birthDay, 'day');
  return Math.sin(2 * Math.PI * diff / 23);
}