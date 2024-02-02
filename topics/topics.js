import RMHNSCC2024 from "./rm-hnscc-2024/assets/logo.svg?url";
import PMBCLymphoma from "./primary-mediastinal-b-cell-2023/assets/logo.svg?url";
import InductionHNSCC2023 from "./induction-hnscc-2023/assets/logo.svg?url";
import ScholarshipCommittee2023 from "./scholarship-committee-2023/assets/logo.svg?url";
import HemOncOrg2023 from "./hemonc-org-2023/assets/logo.svg?url";
import MDSLowerRisk from "./mds-lower-risk/assets/logo.svg?url";
import AnaplasticThyroid from "./anaplastic-thyroid/assets/logo.svg?url";
import InductionHNSCC from "./induction-hnscc/assets/logo.svg?url";
import Pheochromocytoma from "./pheochromocytoma/assets/logo.svg?url";
import BALLinOlderAdults from "./b-all-older-adults/assets/logo.svg?url";
import Octopus from "./template/assets/logo.svg?url";

export default [
  {
    title: '2024-02-02 - R/M HNSCC',
    logo: RMHNSCC2024,
    route: '/rm-hnscc-2024/',
  },
  {
    title: '2023-12-15 - Primary Mediastinal B-Cell Lymphoma',
    logo: PMBCLymphoma,
    route: '/primary-mediastinal-b-cell-2023/',
  },
  {
    title: '2023-09-01 - HNSCC Induction',
    logo: InductionHNSCC2023,
    route: '/induction-hnscc-2023/',
  },
  {
    title: '2023-04-21 - Scholarship Committee',
    logo: ScholarshipCommittee2023,
    route: '/scholarship-committee-2023/',
  },
  {
    title: '2023-04-13 - HemOnc.org',
    logo: HemOncOrg2023,
    route: '/hemonc-org-2023/',
  },
  {
    title: '2023-03-31 - Lower-Risk MDS',
    logo: MDSLowerRisk,
    route: '/mds-lower-risk/',
  },
  {
    title: '2023-02-10 - Anaplastic Thyroid Carcinoma',
    logo: AnaplasticThyroid,
    route: '/anaplastic-thyroid/',
  },
  {
    title: '2022-12-16 - Induction for H&N SCC',
    logo: InductionHNSCC,
    route: '/induction-hnscc/',
  },
  {
    title: '2022-10-28 - Pheochromocytoma',
    logo: Pheochromocytoma,
    route: '/pheochromocytoma/',
  },
  {
    title: '2022-09-09 - B-ALL in Older Adults',
    logo: BALLinOlderAdults,
    route: '/b-all-older-adults/',
  },
  {
    title: '00 template',
    logo: Octopus,
    route: '/template/',
  },
].sort((a,b) => (a.title > b.title) ? -1 : ((a.title < b.title) ? 1 : 0))
