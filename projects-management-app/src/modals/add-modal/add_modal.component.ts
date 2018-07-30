import { Component} from "@angular/core";
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "add_modal",
  templateUrl: "add_modal.component.html",
  styleUrls: ["add_modal.component.scss"]
})
export class AddModalsComponent {
  
  constructor(
    public activeModal: NgbActiveModal
  ) {}

  
}
