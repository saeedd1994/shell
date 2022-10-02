import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5000/remoteEntry.js',
        exposedModule: './Remote'
      }).then(m => m.RemoteModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    enableTracing: false,
    relativeLinkResolution: 'legacy',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
