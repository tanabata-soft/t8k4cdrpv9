// リズムゲームの収録曲リスト（作品データ。ここは作品ごとに書き換える場所で、
// エンジン側の部品ではない。CD 側の作品データが src/album/ にあるのと同じ考え方）。
//
// 1曲ごとに決めるもの:
// - id: 曲 ID（半角英数の短い名前。譜面・歌詞データのキーになる。公開後に変えない）
// - audioUrl / jacketUrl: 音源とジャケット。音源は CD 側の MP4 から音声だけを
//   MP3 192kbps で書き出したもの（src/game/assets/track0N.mp3）、ジャケットは
//   CD 側の曲ジャケット（1024×1024）のコピー。作り方はデジタルCDエンジン
//   （mmishina-art/digitalcd-engine）docs/PRODUCTION.md の
//   「リズムゲーム（任意モジュール）」参照
// - frameInset: ジャケット絵の四辺に焼き込まれた紙枠の幅（実画像ピクセル、絵は
//   1024×1024）。演奏画面の背景では、この枠を除いた内側の絵だけを敷く。
//   枠が無い絵は 0
// - slidePosition: メニューのカルーセルでジャケットを寄せる位置（CSS の
//   object-position）。絵の中の曲タイトルができるだけ収まる側へ寄せる。
//   未指定なら中央
// - accent: 曲のテーマ色（#rrggbb）。メニューの枠・光・ボタンなどのアクセント色
//   として、選曲に合わせて切り替わる（オーナー決定 2026-11-20 のパターン3）。
//   ジャケットから scripts/jacket-accent.py で抜き出す（視認性のために明度・
//   彩度を持ち上げる処理込み）
// - bonus: ボーナストラックなら true（CD 側 tracks.ts の bonus と一致させる）。
//   スライドの先頭に金色の BONUS チップが出る
// - album: 収録アルバム名（表示用） / genre: ジャンル（表示用）
//
// 譜面（data/charts.json）と歌詞（data/lyrics.json）は生成物なので、ここには
// 書かない。生成手順はデジタルCDエンジンの docs/PRODUCTION.md 参照。
// このモジュールはデジタルCDエンジン v1.1.0 のリズムゲーム（任意モジュール）を
// 取り込んだもの（2026-11-20、NK-S003 の実働版が素材）。
// accent（テーマ色）はエンジン v1.2.0 の仕様で追加（2026-11-20）。
import track01Audio from './assets/track01.mp3';
import track01Jacket from './assets/track01.jpg';
import track02Audio from './assets/track02.mp3';
import track02Jacket from './assets/track02.jpg';
import track03Audio from './assets/track03.mp3';
import track03Jacket from './assets/track03.jpg';

export interface GameSongDef {
  id: string;
  audioUrl: string;
  jacketUrl: string;
  frameInset: number;
  slidePosition?: string;
  accent: string;
  bonus?: boolean;
  album: string;
  genre: string;
}

export const SONG_DEFS: GameSongDef[] = [
  {
    id: 'tomodachi',
    audioUrl: track01Audio,
    jacketUrl: track01Jacket,
    frameInset: 0,
    accent: '#51a6d6',
    album: 'NK-S002 友達のままじゃ',
    genre: 'Confession Rock',
  },
  {
    id: 'shuuden',
    audioUrl: track02Audio,
    jacketUrl: track02Jacket,
    frameInset: 24,
    accent: '#5189d6',
    album: 'NK-S002 友達のままじゃ',
    genre: 'Last Train Ballad',
  },
  {
    id: 'boundary',
    audioUrl: track03Audio,
    jacketUrl: track03Jacket,
    frameInset: 0,
    accent: '#d651ad',
    bonus: true,
    album: 'NK-S002 友達のままじゃ',
    genre: '2AM Boundary Rock',
  },
];
