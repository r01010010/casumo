/* eslint import/no-webpack-loader-syntax: off */
import GeneratorWorker from 'worker-loader!./workers/generator.worker';
import library from './films1000.json';
import searcher from './searcher';

const generatorWorker = new GeneratorWorker();

generatorWorker.postMessage({
  action: 'init',
  library,
});

generatorWorker.addEventListener('message', (e) => {
  const { library } = e.data;

  searcher.init({library});
});

export default true;
