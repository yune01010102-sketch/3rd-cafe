"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Gamepad2,
  Sparkles,
  Palette,
  MapPin,
  Clock,
  Mail,
  Phone,
  ChevronRight,
  Crown,
  Heart,
  Camera,
  GlassWater,
  Music2,
  Zap,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────
   写真の差し替え方法
   ────────────────────────────────────────
   下記の PHOTOS オブジェクトに画像URLを入れてください。
   例: hero: "https://example.com/your-photo.jpg"
   フリー素材なら Unsplash 等のURLをそのまま貼れます。
   ───────────────────────────────────────── */
const PHOTOS = {
  hero: "", // ヒーロー背景
  esports: "", // eスポーツエリア写真
  avatar: "", // アバターシステム写真
  interior1: "", // 店内写真①
  interior2: "", // 店内写真②
};

const GOOGLE_MAP_URL = "https://maps.app.goo.gl/qRp8GQWSkJAuxDye7?g_st=ic";

const menuItems = [
  {
    category: "PASTA",
    name: "カルボナーラ",
    price: "¥1,600",
    desc: "濃厚チーズとベーコンの王道クリーム。",
    icon: "🍝",
    color: "cyan",
  },
  {
    category: "PASTA",
    name: "明太パスタ",
    price: "¥1,600",
    desc: "明太子の旨味たっぷり。",
    icon: "🍝",
    color: "cyan",
  },
  {
    category: "PASTA",
    name: "ジェノベーゼ",
    price: "¥1,300",
    desc: "王道ジェノベーゼ",
    icon: "🍝",
    color: "cyan",
  },
  {
    category: "PASTA",
    name: "店長おすすめのオイルパスタ",
    price: "¥1,400",
    desc: "ガーリック香る定番。",
    icon: "🍝",
    color: "cyan",
  },
  {
    category: "PASTA",
    name: "茄子と鶏肉のトマトパスタ",
    price: "¥1,500",
    desc: "喫茶店風の懐かしい味。",
    icon: "🍝",
    color: "cyan",
  },
  {
    category: "ROYAL",
    name: "お絵描きオムライス",
    price: "¥2,000",
    desc: "王道コンカフェメニュー。",
    icon: "🍳",
    color: "purple",
  },
  {
    category: "ROYAL",
    name: "ポテト",
    price: "¥1,000",
    desc: "王道のポテト。",
    icon: "🍟",
    color: "purple",
  },
  {
    category: "ROYAL",
    name: "クラッカーの頂点",
    price: "¥1,000",
    desc: "人気メニュー。",
    icon: "🍗",
    color: "purple",
  },
  {
    category: "ROYAL",
    name: "推しドリンク",
    price: "¥1,400",
    desc: "推しのカラーで作れる。",
    icon: "🥤",
    color: "pink",
  },
  {
    category: "ROYAL",
    name: "チェキ撮影キャスト単品(落書き無し)",
    price: "¥800",
    desc: "記念チェキ。",
    icon: "📷",
    color: "pink",
  },
  {
    category: "ROYAL",
    name: "チェキ撮影キャスト単品(落書きあり)",
    price: "¥1,200",
    desc: "記念チェキ。",
    icon: "📷",
    color: "pink",
  },
  {
    category: "ROYAL",
    name: "チェキ撮影ツーショット(落書きあり)",
    price: "¥2,000",
    desc: "記念チェキ。",
    icon: "📷",
    color: "pink",
  },
  {
    category: "DRINK",
    name: "飲み放題 1時間",
    price: "¥1,500",
    desc: "基本ドリンク飲み放題。",
    icon: "🥂",
    color: "cyan",
  },
];

const features = [
  {
    icon: <Coffee className="h-7 w-7" />,
    title: "CAFE SPACE",
    desc: "誰でもゆったり過ごせる近未来カフェ空間。",
    color: "cyan",
  },
  {
    icon: <Gamepad2 className="h-7 w-7" />,
    title: "ESPORTS",
    desc: "ゲーミング体験・配信・イベント。",
    color: "purple",
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "AVATAR",
    desc: "Live2Dを活用したアバター接客。",
    color: "pink",
  },
  {
    icon: <Palette className="h-7 w-7" />,
    title: "DIGITAL ART",
    desc: "デジタルアート展示・販売。",
    color: "cyan",
  },
];

const colorMap = {
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-400/50",
    iconBg: "border-cyan-500/20 bg-cyan-500/10 text-cyan-300",
    badge: "border-cyan-500/20 bg-cyan-500/10 text-cyan-300",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.1)]",
    text: "text-cyan-300",
  },
  purple: {
    border: "border-purple-500/20 hover:border-purple-400/50",
    iconBg: "border-purple-500/20 bg-purple-500/10 text-purple-300",
    badge: "border-purple-500/20 bg-purple-500/10 text-purple-300",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.1)]",
    text: "text-purple-300",
  },
  pink: {
    border: "border-pink-500/20 hover:border-pink-400/50",
    iconBg: "border-pink-500/20 bg-pink-500/10 text-pink-300",
    badge: "border-pink-500/20 bg-pink-500/10 text-pink-300",
    glow: "shadow-[0_0_30px_rgba(236,72,153,0.1)]",
    text: "text-pink-300",
  },
};

function GlitchText({ text }: { text: string }) {
  return (
    <span className="relative inline-block">
      <span
        className="absolute left-0 top-0 select-none text-cyan-400/40"
        style={{
          clipPath: "inset(30% 0 50% 0)",
          transform: "translateX(-2px)",
        }}
        aria-hidden
      >
        {text}
      </span>
      <span
        className="absolute left-0 top-0 select-none text-pink-400/40"
        style={{
          clipPath: "inset(60% 0 10% 0)",
          transform: "translateX(2px)",
        }}
        aria-hidden
      >
        {text}
      </span>
      {text}
    </span>
  );
}

export default function ThirdCafeHomepage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060608] font-sans text-white">
      {/* ── BACKGROUNDS ─────────────────────────────── */}
      <div className="fixed inset-0 -z-50 bg-[#060608]" />
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(ellipse_at_10%_5%,rgba(34,211,238,0.22),transparent_35%),radial-gradient(ellipse_at_90%_15%,rgba(168,85,247,0.2),transparent_35%),radial-gradient(ellipse_at_15%_55%,rgba(236,72,153,0.14),transparent_30%),radial-gradient(ellipse_at_80%_65%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(ellipse_at_50%_100%,rgba(168,85,247,0.1),transparent_40%)]" />
      <div className="fixed inset-0 -z-30 opacity-[0.055] bg-[linear-gradient(rgba(34,211,238,1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,1)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          background:
            "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.18) 2px,rgba(0,0,0,0.18) 4px)",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.7)_100%)]" />

      {/* ── HEADER ───────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-cyan-500/15 bg-black/50 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/60 bg-gradient-to-br from-cyan-500/20 to-purple-500/10 text-lg font-black text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.35),inset_0_0_10px_rgba(34,211,238,0.1)]">
              3rd
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]" />
            </div>
            <div>
              <p className="bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-300 bg-clip-text text-base font-black tracking-tight text-transparent">
                Peer Support Cafe 3rd
              </p>
              <p className="text-[10px] font-bold tracking-[0.3em] text-zinc-600">
                CYBER / ESPORTS / AVATAR
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-xs font-black tracking-widest text-zinc-400 md:flex">
            {["ABOUT", "MENU", "SYSTEM", "ACCESS"].map((label, i) => (
              <a
                key={label}
                href={`#${["about", "menu", "space", "access"][i]}`}
                className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-400 after:transition-all hover:text-cyan-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <Button
            asChild
            className="h-9 rounded-lg border border-cyan-400/60 bg-cyan-500/10 px-5 text-xs font-black tracking-widest text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)] transition hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            <a href="tel:08045569593">CONTACT</a>
          </Button>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative flex min-h-[90vh] items-center">
        {PHOTOS.hero && (
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src={PHOTOS.hero}
              alt="3rd Cafe"
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-[#060608]/80 to-transparent" />
          </div>
        )}

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-black tracking-widest text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              <Crown className="h-3.5 w-3.5" />
              NAGOYA CYBER CONCEPT CAFE
              <span className="ml-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,1)]" />
            </motion.div>

            <h1 className="text-6xl font-black leading-[1.05] tracking-tight md:text-8xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent"
              >
                <GlitchText text="NEO" />
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="block text-white"
              >
                ENTER
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                TAINMENT
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="mt-8 max-w-md text-base font-medium leading-8 text-zinc-400"
            >
              eスポーツ・アバター接客・デジタルアートを融合した
              <br />
              次世代エンターテインメントカフェです。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex gap-3"
            >
              <Button
                asChild
                className="group relative overflow-hidden rounded-xl border border-cyan-400/60 bg-cyan-500/10 px-8 py-6 text-sm font-black tracking-widest text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.2)] transition hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              >
                <a href="#menu">
                  MENU{" "}
                  <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl border-zinc-700/60 bg-zinc-900/50 px-8 py-6 text-sm font-black tracking-widest text-zinc-300 backdrop-blur hover:bg-zinc-800 hover:text-white"
              >
                <a href="#access">ACCESS</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="mt-10 flex gap-3"
            >
              {[
                { label: "OPEN", value: "14:00", color: "cyan" as const },
                { label: "CLOSE", value: "22:00", color: "purple" as const },
                { label: "AREA", value: "金山", color: "pink" as const },
              ].map(({ label, value, color }) => {
                const c = colorMap[color];

                return (
                  <div
                    key={label}
                    className={`flex-1 rounded-2xl border ${c.border} bg-zinc-900/70 p-4 text-center backdrop-blur-sm ${c.glow}`}
                  >
                    <p className={`text-xl font-black ${c.text}`}>{value}</p>
                    <p className="mt-1 text-[10px] font-black tracking-[0.25em] text-zinc-500">
                      {label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-pink-500/15 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-cyan-500/20 bg-zinc-900/60 p-4 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              <div className="absolute -right-4 -top-4 z-10 rounded-2xl border border-cyan-400/40 bg-black/80 px-4 py-2 text-xs font-black tracking-wider text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur">
                CYBER ENTERTAINMENT
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-cyan-500/10">
                {PHOTOS.interior1 ? (
                  <img
                    src={PHOTOS.interior1}
                    alt="店内"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-purple-500/10">
                    <div className="absolute left-5 top-5 rounded-2xl border border-cyan-500/20 bg-black/50 p-3 backdrop-blur-sm">
                      <Coffee className="h-6 w-6 text-cyan-300" />
                    </div>
                    <div className="absolute right-5 top-5 rounded-2xl border border-purple-500/20 bg-black/50 p-3 backdrop-blur-sm">
                      <Gamepad2 className="h-6 w-6 text-purple-300" />
                    </div>
                    <div className="absolute bottom-5 left-5 rounded-2xl border border-pink-500/20 bg-black/50 p-3 backdrop-blur-sm">
                      <Palette className="h-6 w-6 text-pink-300" />
                    </div>
                    <div className="absolute bottom-5 right-5 rounded-2xl border border-cyan-500/20 bg-black/50 p-3 backdrop-blur-sm">
                      <Zap className="h-6 w-6 text-cyan-300" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
                      <p className="text-5xl">☕🎮✨</p>
                      <p className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-2xl font-black text-transparent">
                        3rd Cafe
                      </p>
                      <p className="text-[10px] font-bold tracking-[0.25em] text-zinc-500">
                        DIGITAL ENTERTAINMENT SPACE
                      </p>
                    </div>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="mt-3 flex items-center justify-between rounded-2xl border border-cyan-500/10 bg-black/40 px-5 py-3">
                <div>
                  <p className="text-[10px] font-black tracking-widest text-zinc-500">
                    OPEN TIME
                  </p>
                  <p className="text-xl font-black text-cyan-300">14:00〜22:00</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,1)]" />
                  <p className="text-xs font-black text-green-400">OPEN</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-14 text-center">
          <p className="text-xs font-black tracking-[0.4em] text-cyan-400">
            ABOUT
          </p>
          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              SYSTEM
            </span>
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {features.map((item, i) => {
            const c = colorMap[item.color as keyof typeof colorMap];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className={`group rounded-[2rem] border ${c.border} bg-zinc-900/50 text-white ${c.glow} backdrop-blur transition-all duration-300 hover:-translate-y-2`}
                >
                  <CardContent className="p-7">
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border ${c.iconBg} transition group-hover:scale-110`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-black tracking-widest">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── MENU ─────────────────────────────────────── */}
      <section id="menu" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black tracking-[0.4em] text-cyan-400">
                MENU
              </p>
              <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  FOOD & DRINK
                </span>
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-4 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur">
              <p className="text-[10px] font-black tracking-widest text-zinc-500">
                FREE DRINK
              </p>
              <p className="text-2xl font-black text-cyan-300">1H ¥1,500</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item, i) => {
              const c = colorMap[item.color as keyof typeof colorMap];

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Card
                    className={`group overflow-hidden rounded-[2rem] border ${c.border} bg-zinc-900/60 text-white ${c.glow} transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden border-b border-white/5 bg-gradient-to-br from-zinc-900 to-zinc-950 text-6xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 transition group-hover:opacity-100" />
                      <div
                        className={`absolute right-3 top-3 rounded-full border ${c.badge} px-3 py-1 text-[10px] font-black tracking-widest`}
                      >
                        {item.category}
                      </div>
                      <span className="transition group-hover:scale-110">
                        {item.icon}
                      </span>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-black">{item.name}</h3>
                        <p
                          className={`shrink-0 rounded-full border ${c.badge} px-3 py-0.5 text-sm font-black`}
                        >
                          {item.price}
                        </p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SPACE ────────────────────────────────────── */}
      <section id="space" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-zinc-900/60 shadow-[0_0_50px_rgba(34,211,238,0.07)] transition hover:border-cyan-500/40"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />
            <div className="relative aspect-[16/9] overflow-hidden">
              {PHOTOS.esports ? (
                <img
                  src={PHOTOS.esports}
                  alt="eスポーツエリア"
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-zinc-950">
                  <Gamepad2 className="h-20 w-20 text-zinc-700" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
            </div>
            <div className="relative p-8">
              <Gamepad2 className="h-10 w-10 text-cyan-300" />
              <h2 className="mt-4 text-3xl font-black">e-Sports AREA</h2>
              <p className="mt-3 text-sm leading-8 text-zinc-400">
                ゲーミングPCを活用したeスポーツ・配信・イベントスペース。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-purple-500/20 bg-zinc-900/60 shadow-[0_0_50px_rgba(168,85,247,0.07)] transition hover:border-purple-500/40"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl transition group-hover:bg-purple-500/20" />
            <div className="relative aspect-[16/9] overflow-hidden">
              {PHOTOS.avatar ? (
                <img
                  src={PHOTOS.avatar}
                  alt="アバターシステム"
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/10 via-zinc-900 to-zinc-950">
                  <Sparkles className="h-20 w-20 text-zinc-700" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
            </div>
            <div className="relative p-8">
              <Sparkles className="h-10 w-10 text-purple-300" />
              <h2 className="mt-4 text-3xl font-black">AVATAR SYSTEM</h2>
              <p className="mt-3 text-sm leading-8 text-zinc-400">
                Live2Dを活用した次世代アバター接客システム。
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              icon: <Heart className="h-5 w-5" />,
              text: "推しドリンク",
              color: "pink" as const,
            },
            {
              icon: <Camera className="h-5 w-5" />,
              text: "チェキ撮影",
              color: "cyan" as const,
            },
            {
              icon: <Music2 className="h-5 w-5" />,
              text: "イベント利用",
              color: "purple" as const,
            },
            {
              icon: <GlassWater className="h-5 w-5" />,
              text: "飲み放題",
              color: "cyan" as const,
            },
          ].map((item) => {
            const c = colorMap[item.color];

            return (
              <div
                key={item.text}
                className={`flex items-center gap-3 rounded-2xl border ${c.border} bg-zinc-900/60 p-4 font-black ${c.glow} backdrop-blur transition hover:-translate-y-0.5`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${c.iconBg}`}
                >
                  {item.icon}
                </div>
                <span className="text-sm">{item.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ACCESS ───────────────────────────────────── */}
      <section id="access" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
          <div>
            <p className="text-xs font-black tracking-[0.4em] text-cyan-400">
              ACCESS
            </p>
            <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                INFO
              </span>
            </h2>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            <div className="mt-8 space-y-5 rounded-[2rem] border border-cyan-500/10 bg-zinc-900/60 p-7 shadow-[0_0_40px_rgba(34,211,238,0.05)] backdrop-blur">
              {[
                {
                  icon: <MapPin className="h-5 w-5 text-cyan-300" />,
                  label: "ADDRESS",
                  content: (
                    <a
                      href={GOOGLE_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg border-b border-cyan-400/60 pb-1 text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-300"
                    >
                      <p>〒460-0024</p>
                      <p>愛知県名古屋市中区正木3丁目13-9</p>
                      <p>BS金山ビル1F</p>
                      <p className="mt-1 text-xs font-black tracking-widest text-cyan-400">
                        Google MAPで開く →
                      </p>
                    </a>
                  ),
                },
                {
                  icon: <Clock className="h-5 w-5 text-cyan-300" />,
                  label: "OPEN",
                  content: <p>14:00〜22:00</p>,
                },
                {
                  icon: <Phone className="h-5 w-5 text-cyan-300" />,
                  label: "TEL",
                  content: (
                    <a
                      href="tel:08045569593"
                      className="inline-block border-b border-cyan-400/40 pb-0.5 text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-300"
                    >
                      080-4556-9593
                    </a>
                  ),
                },
                {
                  icon: <Mail className="h-5 w-5 text-cyan-300" />,
                  label: "MAIL",
                  content: (
                    <a
                      href="mailto:bskanayama3rd@gmail.com"
                      className="inline-block border-b border-cyan-400/40 pb-0.5 text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-300"
                    >
                      bskanayama3rd@gmail.com
                    </a>
                  ),
                },
              ].map(({ icon, label, content }) => (
                <div key={label} className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-zinc-500">
                      {label}
                    </p>
                    <div className="mt-1 text-sm leading-7 text-zinc-300">
                      {content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-cyan-500/10 bg-zinc-900/60 shadow-[0_0_40px_rgba(34,211,238,0.05)]">
            {PHOTOS.interior2 ? (
              <>
                <img
                  src={PHOTOS.interior2}
                  alt="店舗"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/10">
                  <MapPin className="h-10 w-10 text-cyan-300" />
                </div>
                <div>
                  <p className="text-2xl font-black">Google MAP</p>
                  <p className="mt-3 text-sm leading-8 text-zinc-500">
                    名古屋市中区正木3丁目13-9
                    <br />
                    BS金山ビル1F
                  </p>
                  <a
                    href={GOOGLE_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-xs font-black tracking-widest text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                  >
                    MAP を開く <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-black/60 px-5 py-14 backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.06),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-2xl font-black text-transparent">
              Peer Support Cafe 3rd
            </p>
            <p className="mt-1 text-[11px] font-bold tracking-[0.3em] text-zinc-600">
              CYBER / e-Sports / AVATAR / DIGITAL ART
            </p>
          </div>
          <div className="space-y-1.5 text-xs font-medium text-zinc-600">
            <p>〒460-0024 愛知県名古屋市中区正木3丁目13-9 BS金山ビル1F</p>
            <p>営業時間：14:00〜22:00　TEL：080-4556-9593</p>
          </div>
        </div>
        <div className="relative mx-auto mt-10 flex max-w-7xl items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <p className="text-[10px] font-bold tracking-[0.3em] text-zinc-700">
            © 2026 PEER SUPPORT CAFE 3RD
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>
      </footer>
    </main>
  );
}