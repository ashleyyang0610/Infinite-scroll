import configureStore from 'redux-mock-store';
import { routesState } from './modules/routes';
import { globalsState } from './modules/globals';
import { threatInsightsState } from './modules/threatInsights';
import { unhealthyDevicesState } from './modules/unhealthyDevices';
import { breachedHostsState } from './modules/breachedHosts';
import { vulnerableHostsState } from './modules/vulnerableHosts';
import { suspiciousObjectHitsState } from './modules/suspiciousObjectHits';
import { devicesState } from './modules/devices';
import { systemLogsState } from './modules/systemLogs';
import { reportsState } from './modules/reports';
import { exportAndArchivesState } from './modules/exportAndArchives';
import { zdiAdvisoryHitsState } from './modules/zdiAdvisoryHits';
import { certificateIntitState } from './modules/certificate';
import { l2fbState } from './modules/devicesL2fb';

const mockStore = configureStore([]);
const store = mockStore({
    routes: routesState,
    globals: globalsState,
    threatInsights: threatInsightsState,
    unhealthyDevices: unhealthyDevicesState,
    breachedHosts: breachedHostsState,
    vulnerableHosts: vulnerableHostsState,
    suspiciousObjectHits: suspiciousObjectHitsState,
    devices: devicesState,
    systemLogs: systemLogsState,
    reports: reportsState,
    exportAndArchives: exportAndArchivesState,
    zdiAdvisoryHits: zdiAdvisoryHitsState,
    certificate: certificateIntitState,
    devicesL2fb: l2fbState
});

export default store;
