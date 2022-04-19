const { todoService, todoServiceById } = require('./todoService');

jest.mock('./todoService');

describe('Todo Test Service', () => {
  test('As a user I want to return all the todos', () => {
    todoService()
      .then((result) => {
        const json = result.data;
        expect(json[8].userId).toEqual(1);
        expect(json[8].id).toEqual(9);
        expect(json[8].title).toEqual('molestiae perspiciatis ipsa');
        expect(json[8].completed).toEqual(false);
      })
      .catch((err) => err.message);
  });

  test('As a user I want to return a todo by Id', () => {
    todoServiceById(3)
      .then((result) => {
        const json = result.data;
        expect(json.userId).toEqual(1);
        expect(json.id).toEqual(3);
        expect(json.title).toEqual('fugiat veniam minus');
        expect(json.completed).toEqual(false);
      })
      .catch((err) => err.message);
  });
});
