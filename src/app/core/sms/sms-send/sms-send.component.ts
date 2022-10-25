import { Component, OnInit } from '@angular/core';
import { BackendMethod, remult } from 'remult';
import { NotificationService } from '../../../../server/send-sms';
import { SmsController } from '../smsController';

@Component({
  selector: 'app-sms-send',
  templateUrl: './sms-send.component.html',
  styleUrls: ['./sms-send.component.scss']
})
export class SmsSendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  async send() {
    await SmsController.sendSms()
  }

}
