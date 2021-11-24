
export class DateHelper{

    static breakDate(data) {
        const aux = (data.split('T')[0]).split('-');
        return {ano: parseInt(aux[0]), mes: parseInt(aux[1]), dia: parseInt(aux[2])};
      }
}