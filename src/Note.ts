namespace Drumpad {
    export class Note {
        private _pitch: Pitch;
        private _duration: Duration;

        public constructor(pitch: Pitch, duration: Duration) {
            this._pitch = pitch;
            this._duration = duration;
        }

        public play(): void {
            const audio: HTMLAudioElement = new Audio(this._pitch.file);
            audio.play();
            audio.onended = () => {
                audio.remove();
            }
        }
    }
}