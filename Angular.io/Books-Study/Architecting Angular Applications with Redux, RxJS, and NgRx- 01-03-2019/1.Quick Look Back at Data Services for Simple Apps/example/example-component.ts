// an example component

@Component({
  selector: "example-component"
})
export class ExampleComponent {}

// an example container component
@Component({
    selector: `
    {{ title }}
    <example-component>
    `
  })
  export class ContainerComponent {
    title ="container component";
  }
  The fact 