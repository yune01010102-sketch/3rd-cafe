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
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ThirdCafeHomepage() {
  const menuItems = [
    {
      category: "PASTA",
      name: "カルボナーラ",
      price: "¥1,200",
      desc: "濃厚チーズとベーコンの王道クリーム。",
      icon: "🍝",
    },
    {
      category: "PASTA",
      name: "明太クリームパスタ",
      price: "¥1,200",
      desc: "明太子の旨味たっぷり。",
      icon: "🍝",
    },
    {
      category: "PASTA",
      name: "ペペロンチーノ",
      price: "¥1,200",
      desc: "ガーリック香る定番。",
      icon: "🍝",
    },
    {
      category: "PASTA",
      name: "ナポリタン",
      price: "¥1,200",
      desc: "喫茶店風の懐かしい味。",
      icon: "🍝",
    },
    {
      category: "ROYAL",
      name: "お絵描きオムライス",
      price: "¥1,400",
      desc: "王道コンカフェメニュー。",
      icon: "🍳",
    },
    {
      category: "ROYAL",
      name: "ふりふりポテト",
      price: "¥800",
      desc: "選べるフレーバー。",
      icon: "🍟",
    },
    {
      category: "ROYAL",
      name: "からあげバスケット",
      price: "¥1,000",
      desc: "ジューシーな人気メニュー。",
      icon: "🍗",
    },
    {
      category: "ROYAL",
      name: "推しドリンク",
      price: "¥1,200",
      desc: "好きなカラーで作れる。",
      icon: "🥤",
    },
    {
      category: "ROYAL",
      name: "チェキ撮影",
      price: "¥1,000",
      desc: "記念チェキ。",
      icon: "📷",
    },
    {
      category: "DRINK",
      name: "飲み放題 1時間",
      price: "¥1,000",
      desc: "ソフトドリンク、アルコール飲み放題。",
      icon: "🥂",
    },
  ];

  const features = [
    {
      icon: <Coffee className="h-7 w-7" />,
      title: "CAFE SPACE",
      desc: "ゆったり過ごせる近未来カフェ空間。",
    },
    {
      icon: <Gamepad2 className="h-7 w-7" />,
      title: "ESPORTS",
      desc: "ゲーミング体験・配信・イベント。",
    },
    {
      icon: <Sparkles className="h-7 w-7" />,
      title: "AVATAR",
      desc: "Live2Dを活用したアバター接客。",
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: "DIGITAL ART",
      desc: "デジタルアート展示・販売。",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#07070a] text-white">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-50 bg-[#07070a]" />

      <div className="fixed inset-0 -z-40 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_20%_45%,rgba(236,72,153,0.12),transparent_26%),radial-gradient(circle_at_80%_55%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_25%_82%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_88%_88%,rgba(236,72,153,0.10),transparent_26%)]" />

      <div className="fixed inset-0 -z-30 opacity-[0.08] bg-[linear-gradient(rgba(34,211,238,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.5)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="fixed inset-0 -z-20 bg-[linear-gradient(to_bottom,transparent,rgba(7,7,10,0.25)_35%,rgba(7,7,10,0.65)_100%)]" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400 bg-cyan-500/10 text-xl font-black text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              3rd
            </div>

            <div>
              <p className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-lg font-black tracking-tight text-transparent">
                Peer Support Cafe 3rd
              </p>

              <p className="text-xs font-semibold tracking-[0.25em] text-zinc-500">
                CYBER / ESPORTS / AVATAR
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">
              ABOUT
            </a>

            <a href="#menu" className="transition hover:text-cyan-300">
              MENU
            </a>

            <a href="#space" className="transition hover:text-cyan-300">
              SYSTEM
            </a>

            <a href="#access" className="transition hover:text-cyan-300">
              ACCESS
            </a>
          </nav>

          <Button className="border border-cyan-400 bg-cyan-500/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:bg-cyan-400 hover:text-black">
            CONTACT
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-black text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
              <Crown className="h-4 w-4" />
              NAGOYA CYBER CONCEPT CAFE
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                NEO
              </span>

              <br />

              <span className="text-white">ENTERTAINMENT</span>

              <br />

              <span className="text-zinc-500">SPACE</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg font-medium leading-9 text-zinc-400">
              Peer Support Cafe 3rdは、
              eスポーツ・アバター接客・デジタルアートを融合した
              次世代エンターテインメントカフェです。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="border border-cyan-400 bg-cyan-500/10 px-8 py-6 text-base font-black text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:bg-cyan-400 hover:text-black"
              >
                <a href="#menu">
                  MENU
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-zinc-700 bg-zinc-900/60 px-8 py-6 text-base font-black text-white hover:bg-zinc-800"
              >
                <a href="#access">ACCESS</a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900/70 p-5 text-center shadow-[0_0_25px_rgba(34,211,238,0.1)]">
                <p className="text-2xl font-black text-cyan-300">14:00</p>

                <p className="mt-1 text-xs font-black tracking-widest text-zinc-500">
                  OPEN
                </p>
              </div>

              <div className="rounded-3xl border border-purple-500/20 bg-zinc-900/70 p-5 text-center shadow-[0_0_25px_rgba(168,85,247,0.1)]">
                <p className="text-2xl font-black text-purple-300">22:00</p>

                <p className="mt-1 text-xs font-black tracking-widest text-zinc-500">
                  CLOSE
                </p>
              </div>

              <div className="rounded-3xl border border-pink-500/20 bg-zinc-900/70 p-5 text-center shadow-[0_0_25px_rgba(236,72,153,0.1)]">
                <p className="text-2xl font-black text-pink-300">金山</p>

                <p className="mt-1 text-xs font-black tracking-widest text-zinc-500">
                  AREA
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -right-5 -top-5 rounded-full border border-cyan-400 bg-cyan-500/10 px-5 py-3 text-sm font-black text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
              CYBER ENTERTAINMENT
            </div>

            <div className="rounded-[2.5rem] border border-cyan-500/20 bg-zinc-900/70 p-4 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-purple-500/10 text-center">
                <div className="absolute left-8 top-8 rounded-3xl border border-cyan-500/20 bg-black/40 p-4 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                  <Coffee className="h-8 w-8 text-cyan-300" />
                </div>

                <div className="absolute right-8 top-12 rounded-3xl border border-purple-500/20 bg-black/40 p-4 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                  <Gamepad2 className="h-8 w-8 text-purple-300" />
                </div>

                <div className="absolute bottom-8 left-10 rounded-3xl border border-pink-500/20 bg-black/40 p-4 shadow-[0_0_20px_rgba(236,72,153,0.15)]">
                  <Palette className="h-8 w-8 text-pink-300" />
                </div>

                <div>
                  <p className="text-7xl">☕🎮✨</p>

                  <p className="mt-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-4xl font-black text-transparent">
                    3rd Cafe
                  </p>

                  <p className="mt-4 text-sm font-bold tracking-widest text-zinc-500">
                    DIGITAL ENTERTAINMENT SPACE
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-5 rounded-3xl border border-cyan-500/20 bg-black/70 p-6 shadow-[0_0_35px_rgba(34,211,238,0.15)] backdrop-blur">
              <p className="text-xs font-black tracking-widest text-zinc-500">
                OPEN TIME
              </p>

              <p className="text-3xl font-black text-cyan-300">14:00〜22:00</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="font-black tracking-widest text-cyan-300">ABOUT</p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">SYSTEM</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {features.map((item) => (
            <Card
              key={item.title}
              className="rounded-[2rem] border border-cyan-500/10 bg-zinc-900/60 text-white shadow-[0_0_30px_rgba(34,211,238,0.05)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <CardContent className="p-7">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                  {item.icon}
                </div>

                <h3 className="text-lg font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-black tracking-widest text-cyan-300">MENU</p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                FOOD & DRINK
              </h2>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-4 shadow-[0_0_35px_rgba(34,211,238,0.12)]">
              <p className="text-xs font-black tracking-widest text-zinc-500">
                FREE DRINK
              </p>

              <p className="text-2xl font-black text-cyan-300">1H ¥1,000</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <Card
                key={item.name}
                className="overflow-hidden rounded-[2rem] border border-cyan-500/10 bg-zinc-900/60 text-white shadow-[0_0_30px_rgba(34,211,238,0.04)] transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden border-b border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-purple-500/10 text-6xl">
                  <div className="absolute right-4 top-4 rounded-full border border-cyan-500/20 bg-black/40 px-3 py-1 text-xs font-black text-cyan-300">
                    {item.category}
                  </div>

                  {item.icon}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-black">{item.name}</h3>

                    <p className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-black text-cyan-300">
                      {item.price}
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SPACE */}
      <section id="space" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-zinc-950 p-8 shadow-[0_0_45px_rgba(34,211,238,0.08)]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <Gamepad2 className="relative h-12 w-12 text-cyan-300" />

            <h2 className="relative mt-6 text-4xl font-black">e-Sports AREA</h2>

            <p className="relative mt-4 leading-8 text-zinc-400">
              ゲーミングPCを活用した
              eスポーツ・配信・イベントスペース。
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-zinc-900 to-zinc-950 p-8 shadow-[0_0_45px_rgba(168,85,247,0.08)]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

            <Sparkles className="relative h-12 w-12 text-purple-300" />

            <h2 className="relative mt-6 text-4xl font-black">AVATAR SYSTEM</h2>

            <p className="relative mt-4 leading-8 text-zinc-400">
              Live2Dを活用した
              次世代アバター接客システム。
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            {
              icon: <Heart className="h-6 w-6" />,
              text: "推しドリンク",
            },
            {
              icon: <Camera className="h-6 w-6" />,
              text: "チェキ撮影",
            },
            {
              icon: <Music2 className="h-6 w-6" />,
              text: "イベント利用",
            },
            {
              icon: <GlassWater className="h-6 w-6" />,
              text: "飲み放題",
            },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 rounded-3xl border border-cyan-500/10 bg-zinc-900/60 p-5 font-black shadow-[0_0_25px_rgba(34,211,238,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                {item.icon}
              </div>

              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* ACCESS */}
      <section id="access" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
          <div>
            <p className="font-black tracking-widest text-cyan-300">ACCESS</p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              INFORMATION
            </h2>

            <div className="mt-8 space-y-5 rounded-[2rem] border border-cyan-500/10 bg-zinc-900/60 p-7 shadow-[0_0_40px_rgba(34,211,238,0.05)]">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 text-cyan-300" />

                <div>
                  <p className="font-black">ADDRESS</p>

                  <p className="mt-1 leading-7 text-zinc-400">
                    〒460-0024
                    <br />
                    愛知県名古屋市中区正木3丁目13-9
                    <br />
                    BS金山ビル1F
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 h-6 w-6 text-cyan-300" />

                <div>
                  <p className="font-black">OPEN</p>

                  <p className="mt-1 text-zinc-400">14:00〜22:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 h-6 w-6 text-cyan-300" />

                <div>
                  <p className="font-black">TEL</p>

                  <p className="mt-1 text-zinc-400">080-4556-9593</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 h-6 w-6 text-cyan-300" />

                <div>
                  <p className="font-black">MAIL</p>

                  <p className="mt-1 text-zinc-400">
                    bskanayama3rd@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-h-[420px] items-center justify-center rounded-[2.5rem] border border-cyan-500/10 bg-zinc-900/60 p-8 text-center shadow-[0_0_40px_rgba(34,211,238,0.05)]">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/10">
                <MapPin className="h-10 w-10 text-cyan-300" />
              </div>

              <p className="mt-5 text-3xl font-black">Google MAP</p>

              <p className="mt-4 leading-8 text-zinc-500">
                名古屋市中区正木3丁目13-9
                <br />
                BS金山ビル1F
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/10 bg-black/40 px-5 py-12 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-3xl font-black text-transparent">
              Peer Support Cafe 3rd
            </p>

            <p className="mt-2 text-sm font-semibold tracking-widest text-zinc-500">
              CYBER / e-Sports / AVATAR / DIGITAL ART
            </p>
          </div>

          <div className="grid gap-2 text-sm font-semibold text-zinc-500">
            <p>〒460-0024 愛知県名古屋市中区正木3丁目13-9</p>
            <p>営業時間：14:00〜22:00</p>
            <p>TEL：080-4556-9593</p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-7xl text-xs font-semibold tracking-widest text-zinc-600">
          © 2026 PEER SUPPORT CAFE 3RD
        </p>
      </footer>
    </main>
  );
}