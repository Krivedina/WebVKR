import {
  Injectable,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from "@angular/core";
import { MessageWindowComponent } from "../components/message-window.component";

@Injectable()
export class MessageWindowBaseService {
//   constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  

//   public showSuccsess(string, container) {
//     const factory = this.componentFactoryResolver.resolveComponentFactory(
//       MessageWindowComponent
//     );

//     const componentRef: ComponentRef<MessageWindowComponent> = container.createComponent(
//       factory
//     );
//     componentRef.instance.message = string;
//     componentRef.instance.succsess = true;
//   }
}
