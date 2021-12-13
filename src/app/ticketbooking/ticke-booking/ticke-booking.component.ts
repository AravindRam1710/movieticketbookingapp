import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ticke-booking',
  templateUrl: './ticke-booking.component.html',
  styleUrls: ['./ticke-booking.component.css']
})
export class TickeBookingComponent {
  
  Languages=["Tamil","English","Telugu","Malayalam"];
  allocateForm=new FormGroup({
    firstName:new FormControl('',Validators.required),
    movieName:new FormControl('',Validators.required),
    processingDate:new FormControl('',Validators.required),
    }
  )
  bookTicket()
  {
    alert("Ticket Booked.Enjoy")
  }

}
