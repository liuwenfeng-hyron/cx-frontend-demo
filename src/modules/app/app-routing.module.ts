import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssetViewerComponent} from '../edc-demo/components/asset-viewer/asset-viewer.component';
import {CatalogBrowserComponent} from '../edc-demo/components/catalog-browser/catalog-browser.component';
import {IntroductionComponent} from '../edc-demo/components/introduction/introduction.component';
import {
  ContractDefinitionViewerComponent
} from '../edc-demo/components/contract-definition-viewer/contract-definition-viewer.component';
import {PartnerGroupsViewerComponent} from '../edc-demo/components/partner-groups-viewer/partner-groups-viewer.component';
import {
  TransferHistoryViewerComponent
} from '../edc-demo/components/transfer-history/transfer-history-viewer.component';
import {PolicyViewComponent} from "../edc-demo/components/policy-view/policy-view.component";
import {ContractViewerComponent} from "../edc-demo/components/contract-viewer/contract-viewer.component";
//import {DashboardComponent} from '../edc-demo/components/dashboard/dashboard.component';
import {ShellDescriptorsViewerComponent} from '../dtr/components/shell-descriptors-viewer/shell-descriptors-viewer.component';
import {SubmodelsViewerComponent} from '../aasx-server/components/submodels-viewer/submodels-viewer.component';
import {ShellsViewerComponent} from '../aasx-server/components/shells-viewer/shells-viewer.component';
import {AasxPackagesViewerComponent} from '../aasx-server/components/aasx-packages-viewer/aasx-packages-viewer.component';

export const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: {title: 'Getting Started', icon: 'info_outline'}
  },
  {
    path: 'groupTitle',
    data: {title: 'PROVIDING'}
  },
  {
    path: 'my-assets', // must not be "assets" to prevent conflict with assets directory
    component: AssetViewerComponent,
    data: {title: 'Assets', icon: 'upload'}
  },
  {
    path: 'policies',
    component: PolicyViewComponent,
    data: {title: 'Policies', icon: 'policy'}
  },
  
  {
    path: 'contract-definitions',
    component: ContractDefinitionViewerComponent,
    data: {title: 'Contract Definitions', icon: 'rule'}
  },  
  {
    path: 'partner-groups', // by nri 2025.2.6
    component: PartnerGroupsViewerComponent,
    data: {title: 'Partner Groups', icon: 'rule'}
  }, 
  {
    path: 'groupTitle',
    data: {title: 'CONSUMING'}
  },
  {
    path: 'catalog-browser',
    component: CatalogBrowserComponent,
    data: {title: 'Catalog Browser', icon: 'sim_card'}
  },
  {
    path: 'contracts',
    component: ContractViewerComponent,
    data: {title: 'Contracts', icon: 'attachment'}
  },
  {
    path: 'transfer-history',
    component: TransferHistoryViewerComponent,
    data: {title: 'Transfer History', icon: 'assignment'}
  },  
  {
    path: 'groupTitle',
    data: {title: 'AASX SERVER'}
  },
  {
    path: 'summodels',
    component: SubmodelsViewerComponent,
    data: {title: 'Submodels', icon: 'rule'}
  },
  {
    path: 'shells',
    component: ShellsViewerComponent,
    data: {title: 'Shells', icon: 'rule'}
  },
  {
    path: 'packages',
    component: AasxPackagesViewerComponent,
    data: {title: 'Packages', icon: 'rule'}
  },
  {
    path: 'groupTitle',
    data: {title: 'DTR'}
  },
  {
    path: 'shell-descriptors',
    component: ShellDescriptorsViewerComponent,
    data: {title: 'Shell Descriptors', icon: 'rule'}
  },  
  {
    path: '', redirectTo: 'introduction', pathMatch: 'full'
  },
  /**,
  {
    path: 'dashboard', // by ljz 2024.11.1
    component: DashboardComponent,
    data: {title: '', icon: ''}
  },**/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
