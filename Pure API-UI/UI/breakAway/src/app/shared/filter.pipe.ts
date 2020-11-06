import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filter" })
export class FilterPipe implements PipeTransform {
    public transform(items: Array<any>, props: Array<string>, filter: string): Array<any> {

        if (!items || !props || !filter) {
            return items;
        }

        return items.filter(item => {
            return props.find(p => item[p].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        });
    }
}