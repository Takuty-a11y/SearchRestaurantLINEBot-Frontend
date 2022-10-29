import { Budget, Genre } from "./types/api/queryparam";

export const genreOptions: Array<Genre> = [
  { code: "G001", name: "居酒屋" },
  { code: "G002", name: "ダイニングバー・バル" },
  { code: "G003", name: "創作料理" },
  { code: "G004", name: "和食" },
  { code: "G005", name: "洋食" },
  { code: "G006", name: "イタリアン・フレンチ" },
  { code: "G007", name: "中華" },
  { code: "G008", name: "焼肉・ホルモン" },
  { code: "G017", name: "韓国料理" },
  { code: "G009", name: "アジア・エスニック料理" },
  { code: "G010", name: "各国料理" },
  { code: "G011", name: "カラオケ・パーティ" },
  { code: "G012", name: "バー・カクテル" },
  { code: "G013", name: "ラーメン" },
  { code: "G016", name: "お好み焼き・もんじゃ" },
  { code: "G014", name: "カフェ・スイーツ" },
  { code: "G015", name: "その他グルメ" },
];

export const budgetOptions: Array<Budget> = [
  { code: "B009,B010", name: "～1000円" },
  { code: "B011,B001", name: "1001～2000円" },
  { code: "B002,B003", name: "2001～4000円" },
  { code: "B008,B004", name: "4001～7000円" },
  { code: "B005,B006", name: "7001～15000円" },
  { code: "B012,B013", name: "15001～30000円" },
];
