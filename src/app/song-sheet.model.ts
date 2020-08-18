export interface Chord {
  tone: string;
  duration: number; // how long?
}

export interface Measure {
  timeSignature: string; // might be different from the song's signature
  chords: Chord[];
}

export interface SongParts {
  id: string; // GUID or number
  name: string; // e.g. "bridge", "chorus"
  measures: Measure[]; // holds the chords information
  lyrics: string; // part might be instrumental
  color: string; // HEX-code of the background color
}

export interface SongSheet {
  songtitle: string;
  artist: string;
  musicalKey: string; // Choose from a dropdown menu --> enum?
  timeSignature: string; // choose from a dropdown menu --> enum?
  sequence: string[]; // sorted list of the SongPart IDs
  parts: SongParts[];
}
