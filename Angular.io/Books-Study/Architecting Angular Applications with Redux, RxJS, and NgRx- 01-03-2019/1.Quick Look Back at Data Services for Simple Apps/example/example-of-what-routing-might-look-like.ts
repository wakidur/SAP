export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'payments',
        component: ProductsComponent,
        data: { title: 'Products'}
    }
]