import {
  Injectable,
  ComponentFactoryResolver,
  ComponentRef,
} from "@angular/core";
import { MessageWindowComponent } from "src/custom-components/message-window/components/message-window.component";

@Injectable()
export class WrapperMainBaseService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public container;

  public showSuccsess(string) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      MessageWindowComponent
    );

    const componentRef: ComponentRef<MessageWindowComponent> = this.container.createComponent(
      factory
    );
    componentRef.instance.message = string;
    componentRef.instance.succsess = true;
    setTimeout(() => {
      componentRef.destroy();
    }, 5000);
  }
}
