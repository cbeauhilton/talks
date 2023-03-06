import BALLinOlderAdults from "./b-all-older-adults/assets/logo.svg?url";
import Pheochromocytoma from "./pheochromocytoma/assets/logo.svg?url";
import InductionHNSCC from "./template/assets/logo.svg?url";
import AnaplasticThyroid from "./anaplastic-thyroid/assets/logo.svg?url";
import MDSLowerRisk from "./mds-lower-risk/assets/logo.svg?url";
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
    title: '2023-02-10 - Anaplastic Thyroid Carcinoma',
    logo: AnaplasticThyroid,
    route: '/anaplastic-thyroid/',
  },
  {
    title: '2023-03-31 - Lower-Risk MDS',
    logo: MDSLowerRisk,
    route: '/mds-lower-risk/',
  },
  {
    title: '00 template',
    logo: Octopus,
    route: '/template/',
  },
].sort((a,b) => (a.title > b.title) ? -1 : ((a.title < b.title) ? 1 : 0))
