// 曲目と解説（このシングルのデータ）。src は歌詞データ（src/album/sync.ts）のキー。
// 並びが曲順。1曲目が表題曲、2曲目がカップリング（docs/SINGLE.md）。
import type { TrackMeta } from '../logic';

export const TRACKS: TrackMeta[] = [
  { src: '友達のままじゃ', title: '友達のままじゃ', genre: 'Confession Rock', time: '3:00', note: '「友達」という檻を壊す、雨のバス停の告白。握った手の震えまで歌う表題曲。' },
  { src: '終電のホーム', title: '終電のホーム', genre: 'Last Train Ballad', time: '2:42', note: 'カラオケの夜から終電間際のホームへ。隠しきれない想いと、小さな光の歌。' },
];
