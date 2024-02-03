import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent {
  constructor(private act:ActivatedRoute){}
  id!:number
  ngOnInit(){
    this.id=this.act.snapshot.params['id'];
  }
}
