import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title$: Observable<string>;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.title$ = this.headerService.title$;
  }

}
