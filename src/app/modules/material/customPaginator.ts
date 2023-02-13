import { MatPaginatorIntl } from "@angular/material/paginator";
import { Injectable } from '@angular/core'
import { Subject } from "rxjs";

@Injectable()
export class customPaginator implements MatPaginatorIntl {
    changes = new Subject<void>();
    firstPageLabel = `Primera Página`;
    itemsPerPageLabel = `Objetos por página:`;
    lastPageLabel = `última página`;
    nextPageLabel = 'Siguiente página';
    previousPageLabel = 'página previa';

    getRangeLabel(page: number, pageSize: number, length: number): string {
        if (length === 0) {
            return `Página 1 de 1`;
        }
        const amountPages = Math.ceil(length / pageSize);
        return `Página ${page + 1} de ${amountPages}`;
    }

}