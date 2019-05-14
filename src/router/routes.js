//import admin pages
import BaseSongs from "../pages/admin/BaseSongs.vue";
import AnalyzeSongs from "../pages/admin/AnalyzeSongs.vue";
import BaseWords from "../pages/admin/BaseWords.vue";
import ProposeSongs from "../pages/admin/ProposeSongs.vue";

//router
const routes = [
    { path: "/basesongs", component: BaseSongs },
    { path: "/analyzesongs", component: AnalyzeSongs },
    { path: "/basewords", component: BaseWords },
    { path: "/proposesongs", component: ProposeSongs },
];

export default routes;