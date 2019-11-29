import { Component, OnInit, OnDestroy } from '@angular/core';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { MessageService } from '../../core/messageService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  faBars = faBars;
  faHome = faHome;
  private _sub = new Subscription();
  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _ms: MessageService
  ) {
    const routerSub = this._router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        tap(event => {
          // TODO latter
        })
      )
      .subscribe();
    const msSub = this._ms.message$.pipe(
      tap(({ message, action }) => {
        this._snackBar.open(message, action, {
          duration: 3000,
        });
      })
    ).subscribe();
    this._sub.add(routerSub);
    this._sub.add(msSub);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}
