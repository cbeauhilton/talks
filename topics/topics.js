import BALLinOlderAdults from "./b-all-older-adults/assets/logo.svg?url";
import Pheochromocytoma from "./pheochromocytoma/assets/logo.svg?url";
import InductionHNSCC from "./template/assets/logo.svg?url";
import Octopus from "./template/assets/logo.svg?url";

export default [
  {
    title: '2022-09-09 - B-ALL in Older Adults',
    logo: BALLinOlderAdults,
    route: '/b-all-older-adults/',
  },
  {
    title: '2022-10-28 - Pheochromocytoma',
    logo: Pheochromocytoma,
    route: '/pheochromocytoma/',
  },
  {
    title: '2022-12-16 - Induction for H&N SCC',
    logo: InductionHNSCC,
    route: '/induction-hnscc/',
  },
  {
    title: 'template',
    logo: Octopus,
    route: '/template/',
  },
].sort((a,b) => (a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0))
