namespace Drumpad {
    export type CastedEventListener<T extends Event> = (event: T) => void;

    export class Document {
        public static select<T extends HTMLElement>(query: string): T | null {
            return document.querySelector(query);
        }

        public static selectAll<T extends HTMLElement>(query: string): NodeListOf<T> {
            return document.querySelectorAll(query);
        }

        public static event<T extends Event>(type: string, listener: CastedEventListener<T>, query?: string): void {
            if (query) {
                this.select(query)?.addEventListener(type, (event: Event) => { listener(event as T) });
            } else {
                document.addEventListener(type, (event: Event) => { listener(event as T) });
            }
        }

        public static unevent<T extends Event>(type: string, listener: CastedEventListener<T>, query?: string): void {
            if (query) {
                this.select(query)?.removeEventListener(type, (event: Event) => { listener(event as T) });
            } else {
                document.removeEventListener(type, (event: Event) => { listener(event as T) });
            }
        }

        public static eventAll<T extends Event>(type: string, listener: CastedEventListener<T>, query: string) {
            this.selectAll(query).forEach(element => { element.addEventListener(type, (event: Event) => { listener(event as T) }) });
        }

        public static uneventAll<T extends Event>(type: string, listener: CastedEventListener<T>, query: string) {
            this.selectAll(query).forEach(element => { element.removeEventListener(type, (event: Event) => { listener(event as T) }) });
        }
    }
}