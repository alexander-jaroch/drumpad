/// <reference path="Document.ts" />
/// <reference path="Note.ts" />
/// <reference path="Pitch.ts" />
/// <reference path="Duration.ts" />
/// <reference path="KeyAssignment.ts" />
/// <reference path="KeyboardLayout.ts" />

namespace Drumpad {
    const keyboardLayout: KeyboardLayout = new KeyboardLayout();

    keyboardLayout.add("a", (new Note(Pitch.C, Duration.Full)));
    keyboardLayout.add("s", (new Note(Pitch.D, Duration.Full)));
    keyboardLayout.add("d", (new Note(Pitch.E, Duration.Full)));
    keyboardLayout.add("f", (new Note(Pitch.F, Duration.Full)));
    keyboardLayout.add("g", (new Note(Pitch.G, Duration.Full)));
    keyboardLayout.add("h", (new Note(Pitch.A, Duration.Full)));
    keyboardLayout.add("j", (new Note(Pitch.B, Duration.Full)));

    Document.event<KeyboardEvent>("keydown", event => { keyboardLayout.trigger(event) });
    Document.event<KeyboardEvent>("keyup", event => { keyboardLayout.reset(event) });
}