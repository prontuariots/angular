import { SessionService } from './../../../core/session/services/session.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { AuthService } from 'src/app/core/auth/services/auth.service';

import { environment } from 'src/environments/environment';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit, OnDestroy {

  user: any;
  isExpanded: boolean;
  mobileQuery: MediaQueryList;

  schedulingRoutes: any;

  private _mobileQueryListener: () => void;

  constructor(
    media: MediaMatcher,
    public authService: AuthService,
    changeDetectorRef: ChangeDetectorRef,
    public sessionService: SessionService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.user = this.sessionService.getUser();
    this.schedulingRoutes = environment.routes.business.scheduling;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

}
