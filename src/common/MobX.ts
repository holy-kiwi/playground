import {
    observer,
    inject,
} from 'mobx-react';

export function InjectedComponent(component: any, ...stores: any[]) {
    return inject(...stores.map(store => store.NAME))(observer(component));
}
