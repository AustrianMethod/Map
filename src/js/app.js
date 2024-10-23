export default class ErrorRepository {
    constructor() {
      this.storage = new Map([
        [100, 'информация не та'],
        [200, 'с репозиторием все в порядке'],
        [300, 'ошибка репозитория перенаправлена'],
        [400, 'ошибка в репозитории локальном'],
        [500, 'ошибка в репозитории удаленном'],   
      ]);
    }
    translate(code){
      if (code && this.storage.get( code )) {
        return this.storage.get( code );
      } else {
        return 'Unknown error';
      }
    }
}

