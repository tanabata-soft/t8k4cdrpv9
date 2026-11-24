"""作品の曲設定（NK-S002）。

単位D（生成器一本化）: 生成器本体の正はテンプレート repo
（mmishina-art/digitalcd-engine）の scripts/chartgen/ パッケージ1か所。
作品側はこの SONGS メタデータと歌詞入力（src/game/data/lyrics.json）だけを
持ち、scripts/generate-charts.py（入口ブートストラップ）がテンプレートの
chartgen を参照して生成する。曲を足すときはここに1曲分を足す。
各キーの意味はテンプレート scripts/chartgen/config.py のコメント参照。
"""

SONGS = {
    # NK-S002『友達のままじゃ』の収録曲。音源は src/game/assets/track0N.mp3
    # （制作入口で用意した唯一の正規音源 MP3 192kbps。CD 側プレイヤーも同じ音源を共有する）。
    # FEVER（サビ）区間は、歌詞（src/album/sync.ts）の反復ブロックから決める:
    # サビの歌詞ブロックの先頭行の開始秒を開始、末尾行の歌唱が終わる頃を終了とし、
    # 波形の RMS の盛り上がりとも一致することを確認する（NK-S003 での決め方）。
    # サビは歌に合わせて主レイヤーを vocal にする（NK-S003 のオーナー指示）。
    "tomodachi": {
        "title": "友達のままじゃ",
        "audio": "src/game/assets/track01.mp3",
        # サビ1: 50.1「綺麗事じゃ…」〜67.1 の行の歌唱終わり / サビ2: 106.3〜137.6 の行の終わり
        "fever": [[50.0, 73.0], [106.0, 145.0]],
        "chart_v5": True,
        "chorus_layer": "vocal",
        "chorus_bonus": 0.5,
        "flick": True,
        "flick_budget": {"easy": 9, "normal": 13, "hard": 24},
        "ballad": False,
    },
    "shuuden": {
        "title": "終電のホーム",
        "audio": "src/game/assets/track02.mp3",
        # サビは同一ブロックの反復: 51.5〜69.9 の行の終わり / 125.6〜147.4 の行の終わり
        "fever": [[52.0, 76.0], [126.0, 154.0]],
        "chart_v5": True,
        "chorus_layer": "vocal",
        "chorus_bonus": 0.5,
        "flick": True,
        "flick_budget": {"easy": 7, "normal": 7, "hard": 10},
        "ballad": True,
        # v1.5.0 公開譜面のフリックを固定（v6-5 試作の不変条件）
        "flick_lock": [
            [28561, 2, 0], [52291, 3, 0], [53870, 1, 2], [63344, 2, 0],
            [64900, 3, 2], [74374, 1, 0], [111479, 1, 0], [124157, 3, 0],
            [150187, 3, 0], [152555, 3, 2],
        ],  # v6-5 試作: バラードプロファイルはこの曲だけ
    },
    "boundary": {
        "title": "午前二時の境界線",
        "audio": "src/game/assets/track03.mp3",
        # 反復行は無いため、歌詞ブロックの山場で決める: 57.9〜75.3 のブロックと
        # 終盤 127.3〜144.8 のブロック（末尾行の歌唱終わりまで）
        "fever": [[58.0, 81.0], [127.0, 152.0]],
        "chart_v5": True,
        "chorus_layer": "vocal",
        "chorus_bonus": 0.5,
        "flick": True,
        "flick_budget": {"easy": 7, "normal": 12, "hard": 15},
        "ballad": False,
    },
}
