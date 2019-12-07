export class Util {

  static getDateString(date: Date) {
    return date ? date.toLocaleDateString('en-CA') : '';
  }
  static getTimeString(date: Date) {
    const h = (date.getHours());
    let hString = h + '';
    if (h < 10) {
      hString = '0' + h;
    }
    const m = date.getMinutes();
    let mString = m + '';
    if (m < 10) {
      mString = '0' + m;
    }

    return hString + ':' + mString;
  }

  static getMoisFromDate(mois: number, short?: boolean) {
    switch (mois) {
      case 0:
        return (short) ? 'Jan' : 'Janvier';
      case 1:
        return (short) ? 'Fév' : 'Février';
      case 2:
        return (short) ? 'Mar' : 'Mars';
      case 3:
        return (short) ? 'Avr' : 'Avril';
      case 4:
        return 'Mai';
      case 5:
        return (short) ? 'Jun' : 'Juin';
      case 6:
        return (short) ? 'Jul' : 'Juillet';
      case 7:
        return (short) ? 'Aoû' : 'Août';
      case 8:
        return (short) ? 'Sep' : 'Septembre';
      case 9:
        return (short) ? 'Oct' : 'Octobre';
      case 10:
        return (short) ? 'Nov' : 'Novembre';
      case 11:
        return (short) ? 'Déc' : 'Décembre';
    }
  }
}
