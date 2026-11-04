// このシングルの基本情報と、裏面ノートの文章。
// エンジン（src/ のほかのファイル）は、このフォルダ（src/album/）のデータだけを差し替えれば
// 別の作品になるよう作られている。新しい作品の作り方は docs/PRODUCTION.md、
// シングルの仕様は docs/SINGLE.md を参照。

export const ALBUM: {
  title: string;
  catalog: string;
  format: string;
  layout: 'album' | 'single';
} = {
  /** 題名（表題曲と同名） */
  title: '友達のままじゃ',
  /** カタログ番号 */
  catalog: 'NK-S002',
  /** 形式の呼び名 */
  format: 'デジタルシングルCD',
  /** 形: 'album'（正方形ジャケット＋ブックレット） / 'single'（短冊型ジャケット＋裏面ノート、ブックレットなし） */
  layout: 'single',
};

/** 裏ジャケット下部の表記（例: NK-S002 ／ デジタルシングルCD） */
export const FOOT_NOTE = `${ALBUM.catalog} ／ ${ALBUM.format}`;

/** 裏面ノートの本文（シングルではブックレットの代わりにジャケット裏面へ置く） */
export const NOTE: string[] = [
  'カラオケボックスの笑い声から、終電前のバス停まで。言えなかった想いが、やっと手のひらに届くまでのひとつの夜を、短冊に閉じ込めた。',
  '表題曲は、告白の歌。「ただの友達」という名前の檻の中で震えていた手が、近づくバスのヘッドライトに背中を押されて、届かないはずの距離を踏み越えていく。',
  'カップリングは、同じ夜のもう一つの歌。カラオケの熱気と、終電間際のホームの冷たい風。隠しきれなかった想いは、「僕らだけの、光」になって残る。',
];

/** ライナーノーツ（アルバム形態のブックレット冒頭。本文は NOTE と共通） */
export const LINER: readonly [string, string, string] = [NOTE[0], NOTE[1], NOTE[2]];

/** ライナーノーツの見出し（アルバム形態のブックレット冒頭2ページ） */
export const LINER_TITLES: readonly [string, string] = ['短冊に閉じ込めた2曲', '聴き方について'];

/** ブックレット「聴き方について」のページに置く一文（アルバム形態用） */
export const HOWTO_EXTRA = '再生画面では歌詞が曲に合わせて流れます。ジャケットをめくると、裏面にノートがあります。';

/** 奥付（シングルでは裏面ノートの下部に置く） */
export const COLOPHON: string[] = [
  `『${ALBUM.title}』（全2曲／総再生時間 約6分）`,
  `${ALBUM.catalog} ― ${ALBUM.format}`,
  '歌詞は音源の字幕をもとに収録しました。',
];
