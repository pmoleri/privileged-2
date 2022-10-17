import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { IgxGridModule, IgxTreeGridModule, IgxTreeModule } from '@infragistics/igniteui-angular';
import { IgxActionStripModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MasterView1Component } from './master-view1/master-view1.component';
import { MasterView2Component } from './master-view2/master-view2.component';
import { MasterView3Component } from './master-view3/master-view3.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterViewComponent,
    MasterView1Component,
    MasterView2Component,
    MasterView3Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxTreeGridModule,
    IgxActionStripModule,
    FormsModule,
    IgxTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
