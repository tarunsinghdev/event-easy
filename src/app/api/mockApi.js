import { delay } from '../common/util/util';
import { sampleData } from './sampleData';

export const fetchSampleData = () => {
  return delay(1000).then(() => {
    return Promise.resolve(sampleData);
  });
};
