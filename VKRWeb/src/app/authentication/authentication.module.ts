import { NgModule } from '@angular/core';
import { AuthenticationBaseService } from './data/authentication.base.service';


@NgModule({
    providers: [AuthenticationBaseService]
})
export class AuthenticationModule {}