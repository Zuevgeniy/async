import reader from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const response = await reader();
    const data = await json(response);
    const result = await JSON.parse(data);
    return result;
  }
}

(async () => {
  try {
    const result = await GameSavingLoader.load();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
})();
