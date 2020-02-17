import { NgModule } from "@angular/core";
import { ProfileComponent } from './components/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProfileComponent],
    providers: [],
    exports: [ProfileComponent],
    imports: [FormsModule, ReactiveFormsModule]
})
export class ProfileModule {}