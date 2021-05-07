namespace Drumpad {
    export class SinglePressKeyAssignment {
        private _key: string;
        private _triggered: boolean;
        private _callback: Function;

        public constructor(key: string, callback: Function) {
            this._key = key;
            this._triggered = false;
            this._callback = callback;
        }

        public runCallback(key: string): void {
            if (this._key === key && !this._triggered) {
                this._callback();
                this._triggered = true;
            }
        }

        public setDefault(key: string): void {
            if (this._key === key) {
                this._triggered = false;
            }
        }
    }
}