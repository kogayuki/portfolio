export type ProjectStatus = "live" | "building" | "hackathon" | "archive";
export type ProjectCategory = "injective" | "saas" | "biz-tool" | "hackathon" | "creative";

export interface Project {
  name: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: string[];
  url?: string;
  github?: string;
  size: "lg" | "md" | "sm";
}

export const projects: Project[] = [
  // --- Injective ---
  {
    name: "Injective Japan Media",
    description: "Injectiveの日本語メディアサイト。記事・ニュース・学習コンテンツを配信",
    category: "injective",
    status: "live",
    stack: ["Next.js", "MDX", "Vercel"],
    url: "https://injective-japan-media.vercel.app",
    github: "https://github.com/kogayuki/injective-japan-media",
    size: "lg",
  },
  {
    name: "Smart Money Tracker",
    description: "Hyperliquid + Helix のスマートマネー監視Bot。Discord通知でウォレット動向をリアルタイム追跡",
    category: "injective",
    status: "building",
    stack: ["TypeScript", "Fly.io", "Discord"],
    github: "https://github.com/kogayuki/smart-money-tracker",
    size: "lg",
  },
  {
    name: "Injective Quiz",
    description: "全10章・100問でInjectiveを完全マスターするクイズアプリ",
    category: "injective",
    status: "live",
    stack: ["Next.js", "Vercel"],
    url: "https://injective-quiz.vercel.app",
    github: "https://github.com/kogayuki/injective-quiz",
    size: "md",
  },
  {
    name: "Injective MCP Server",
    description: "AIエージェントがInjective上でPerp取引を行うためのMCPサーバー",
    category: "injective",
    status: "building",
    stack: ["TypeScript", "MCP"],
    size: "md",
  },
  {
    name: "Injective Agent SDK",
    description: "Injective向けAIエージェントCLIツール",
    category: "injective",
    status: "building",
    stack: ["TypeScript", "CLI"],
    size: "sm",
  },
  {
    name: "Injective BD Intel",
    description: "パートナーシップ開拓のためのビジネスインテリジェンスツール",
    category: "injective",
    status: "building",
    stack: ["Next.js", "Vercel"],
    size: "sm",
  },
  // --- SaaS ---
  {
    name: "Freelance Rate SaaS",
    description: "フリーランスエンジニアの適正単価を算出するSaaS",
    category: "saas",
    status: "live",
    stack: ["Next.js", "Vercel"],
    url: "https://freelance-rate-saas.vercel.app",
    size: "md",
  },
  {
    name: "Crypto Card Navi",
    description: "暗号資産対応カードの比較ナビサイト",
    category: "saas",
    status: "live",
    stack: ["Next.js", "Vercel"],
    url: "https://crypto-card-navi.vercel.app",
    size: "md",
  },
  {
    name: "派遣Decode",
    description: "派遣先企業名を逆引きできるツール",
    category: "saas",
    status: "live",
    stack: ["Next.js"],
    size: "sm",
  },
  {
    name: "有給チェッカー",
    description: "有給休暇の残日数を計算・管理するツール",
    category: "saas",
    status: "live",
    stack: ["Next.js", "Vercel"],
    github: "https://github.com/kogayuki/paid-leave-checker",
    size: "sm",
  },
  {
    name: "SES Matcher",
    description: "SES案件と人材のマッチングツール",
    category: "saas",
    status: "live",
    stack: ["Next.js", "Vercel"],
    github: "https://github.com/kogayuki/ses-matcher",
    size: "sm",
  },
  {
    name: "転職セーフティネット",
    description: "転職時の経済的リスクをシミュレーションするツール",
    category: "saas",
    status: "live",
    stack: ["Next.js"],
    size: "sm",
  },
  {
    name: "Rate Checker",
    description: "エンジニア単価の相場チェックツール",
    category: "saas",
    status: "live",
    stack: ["Next.js", "Vercel"],
    size: "sm",
  },
  // --- Biz Tool ---
  {
    name: "Agentic Finance",
    description: "AIエージェントによる金融業務の自動化プラットフォーム",
    category: "biz-tool",
    status: "building",
    stack: ["Next.js", "Vercel"],
    size: "md",
  },
  {
    name: "Solo CRM",
    description: "フリーランス向けの軽量CRM",
    category: "biz-tool",
    status: "building",
    stack: ["Next.js"],
    size: "sm",
  },
  {
    name: "Sales Intel",
    description: "営業活動を支援するインテリジェンスツール",
    category: "biz-tool",
    status: "building",
    stack: ["Next.js", "Vercel"],
    size: "sm",
  },
  {
    name: "Consulting Analyzer",
    description: "コンサルティング案件の分析ツール",
    category: "biz-tool",
    status: "building",
    stack: ["Next.js"],
    size: "sm",
  },
  // --- Hackathon ---
  {
    name: "YenAgent",
    description: "日本のフリーランス向け自律決済AIエージェント。JPYC × LINE × OpenClaw。Clawathon Tokyo 2026出場作品",
    category: "hackathon",
    status: "hackathon",
    stack: ["TypeScript", "Polygon", "JPYC"],
    github: "https://github.com/kogayuki/yenagent",
    size: "lg",
  },
  {
    name: "Solana Bootcamp Quiz",
    description: "Solanaブートキャンプ向けのクイズアプリ",
    category: "hackathon",
    status: "hackathon",
    stack: ["Next.js", "Vercel"],
    size: "sm",
  },
  {
    name: "Mogura Tataki",
    description: "もぐらたたきゲーム",
    category: "hackathon",
    status: "hackathon",
    stack: ["Next.js", "Vercel"],
    size: "sm",
  },
  // --- Creative ---
  {
    name: "AI Art (yuki.k)",
    description: "AIアート作品。生成AIを活用したビジュアルアート制作",
    category: "creative",
    status: "live",
    stack: ["AI", "Creative"],
    size: "md",
  },
];

export const categories: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "injective", label: "Injective" },
  { key: "saas", label: "SaaS" },
  { key: "biz-tool", label: "Biz Tool" },
  { key: "hackathon", label: "Hackathon" },
  { key: "creative", label: "Creative" },
];

export const statusConfig: Record<ProjectStatus, { label: string; color: string }> = {
  live: { label: "Live", color: "bg-emerald-500" },
  building: { label: "Building", color: "bg-amber-500" },
  hackathon: { label: "Hackathon", color: "bg-violet-500" },
  archive: { label: "Archive", color: "bg-zinc-400" },
};
