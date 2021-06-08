import { api as myMath } from './services/api.mjs';
import virusCorona from './services/api.mjs';

const showData = async () => {
  const data = await virusCorona();
  console.log(data);
}

const total = myMath.sum(1,2);
showData();
console.log(total);