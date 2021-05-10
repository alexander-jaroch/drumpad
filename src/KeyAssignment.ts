namespace Drumpad {
    export class KeyAssignment {
        private _key: string;
        private _triggered: boolean;
        private _callback: Function;

        public constructor(key: string, callback: Function) {
            this._key = key;
            this._triggered = false;
            this._callback = callback;
        }

        public trigger(key: string): void {
            if (this._key === key && !this._triggered) {
                this._callback();
                this._triggered = true;
            }
        }

        public reset(key: string): void {
            if (this._key === key) {
                this._triggered = false;
            }
        }
    }
}