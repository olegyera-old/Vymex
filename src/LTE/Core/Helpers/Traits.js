export default class Traits{
  static ImageLogo(logo, name, lastname = null){
    return logo ? logo : (name.substr(0, 1) + (lastname ? lastname.substr(0, 1) : ''));
  }

  static ImageColorCode(id = null){
    const ID = String(id);
    return id !== null ? ID.substr(ID.length - 1, 1) : '4';
  }

  static UserCompanyWorkers(companyData){
    const workerArray = companyData.workers;

    if(companyData.cofounder){
      const coFounder = companyData.cofounder[0];
      coFounder.unitLevel = 0;
      coFounder.unitName = 'Соучередитель';
      coFounder.unitId = null;

      workerArray.unshift(coFounder);
    }

    return workerArray;
  }
}

