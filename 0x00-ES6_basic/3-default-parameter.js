export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {

    if ((expansion1989 === undefined) && (expansion2019 === undefined)) {
      expansion2019 = 19;
      expansion1989 = 89;
    }
    return initialNumber + expansion1989 + expansion2019;
  }
