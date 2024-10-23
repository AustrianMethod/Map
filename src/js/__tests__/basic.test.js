import ErrorRepository from '../app';

const data = [
  [100, 'информация не та'],
  [200, 'с репозиторием все в порядке'],
  [300, 'ошибка репозитория перенаправлена'],
  [400, 'ошибка в репозитории локальном'],
  [500, 'ошибка в репозитории удаленном'],
  [11111, 'Unknown error'],    
];

const errRepo = new ErrorRepository;

test.each(data)('req %i should be %s', (input, expected) => {
  expect(errRepo.translate(input)).toBe(expected);
});

