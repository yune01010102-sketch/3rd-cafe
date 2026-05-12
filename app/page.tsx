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
  Star,
  Utensils,
  Music,
  Camera,
  GlassWater,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ThirdCafeHomepage() {
  const menuItems = [
    {
      category: "Pasta",
      name: "カルボナーラ",
      price: "¥1,200",
      desc: "濃厚チーズとベーコンの王道クリームパスタ。",
      icon: "🍝",
    },
    {
      category: "Pasta",
      name: "明太クリームパスタ",
      price: "¥1,200",
      desc: "明太子の旨味たっぷりの人気メニュー。",
      icon: "🍝",
    },
    {
      category: "Pasta",
      name: "ペペロンチーノ",
      price: "¥1,200",
      desc: "ガーリック香るシンプルな定番パスタ。",
      icon: "🍝",
    },
    {
      category: "Pasta",
      name: "ナポリタン",
      price: "¥1,200",
      desc: "昔ながらの喫茶店風ナポリタン。",
      icon: "🍝",
    },
    {
      category: "Pasta",
      name: "和風きのこパスタ",
      price: "¥1,200",
      desc: "醤油ベースで仕上げた和風パスタ。",
      icon: "🍝",
    },
    {
      category: "Pasta",
      name: "ボロネーゼ",
      price: "¥1,200",
      desc: "じっくり煮込んだミートソース。",
      icon: "🍝",
    },
    {
      category: "Pasta",
      name: "ジェノベーゼ",
      price: "¥1,200",
      desc: "バジル香る爽やかな人気パスタ。",
      icon: "🍝",
    },
    {
      category: "Pasta",
      name: "たらこパスタ",
      price: "¥1,200",
      desc: "たらこの旨味を活かした定番メニュー。",
      icon: "🍝",
    },
    {
      category: "Pasta",
      name: "エビのトマトクリーム",
      price: "¥1,200",
      desc: "海老の旨味たっぷり濃厚クリーム。",
      icon: "🍝",
    },
    {
      category: "Pasta",
      name: "ツナマヨ和風パスタ",
      price: "¥1,200",
      desc: "ツナとマヨネーズの間違いない組み合わせ。",
      icon: "🍝",
    },
    {
      category: "Royal",
      name: "お絵描きオムライス",
      price: "¥1,400",
      desc: "ケチャップでお絵描きできる王道メニュー。",
      icon: "🍳",
    },
    {
      category: "Royal",
      name: "ふりふりポテト",
      price: "¥800",
      desc: "選べるフレーバーで楽しめる人気メニュー。",
      icon: "🍟",
    },
    {
      category: "Royal",
      name: "からあげバスケット",
      price: "¥1,000",
      desc: "ジューシーな唐揚げ盛り合わせ。",
      icon: "🍗",
    },
    {
      category: "Royal",
      name: "推しドリンク",
      price: "¥1,200",
      desc: "好きなカラーで作るオリジナルドリンク。",
      icon: "🥤",
    },
    {
      category: "Royal",
      name: "プレミアムパフェ",
      price: "¥1,300",
      desc: "写真映えする盛り盛りスイーツ。",
      icon: "🍨",
    },
    {
      category: "Royal",
      name: "チェキ撮影",
      price: "¥1,000",
      desc: "来店の思い出を残せる記念チェキ。",
      icon: "📷",
    },
    {
      category: "Royal",
      name: "デコチェキ",
      price: "¥1,500",
      desc: "落書き＆デコレーション付きチェキ。",
      icon: "✨",
    },
    {
      category: "Drink",
      name: "飲み放題 1時間",
      price: "¥1,000",
      desc: "ソフトドリンク飲み放題。",
      icon: "🥂",
    },
  ];

  const features = [
    {
      icon: <Coffee className="h-7 w-7" />,
      title: "ゆっくり過ごせるカフェ空間",
      desc: "ランチ、休憩、作業、待ち合わせにも使いやすい、落ち着いたカフェです。",
    },
    {
      icon: <Gamepad2 className="h-7 w-7" />,
      title: "eスポーツエリア",
      desc: "ゲームや配信文化に触れられる、3rd Cafeならではの体験スペースです。",
    },
    {
      icon: <Sparkles className="h-7 w-7" />,
      title: "アバター接客",
      desc: "Live2Dなどのデジタル技術を活用した、新しい形の接客体験を楽しめます。",
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: "アート展示・販売",
      desc: "施設で制作された作品を展示し、レンタルアートや販売にもつなげます。",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7ee] text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-white/80 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-300 to-orange-500 text-xl font-black text-white shadow-lg shadow-orange-200">
              3rd
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-pink-400 ring-2 ring-white" />
            </div>

            <div>
              <p className="text-lg font-black tracking-tight">
                Peer Support Cafe 3rd
              </p>
              <p className="text-xs font-semibold text-zinc-500">
                Cafe / eSports / Avatar / Art
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-600 md:flex">
            <a href="#about" className="hover:text-orange-600">
              About
            </a>
            <a href="#menu" className="hover:text-orange-600">
              Menu
            </a>
            <a href="#space" className="hover:text-orange-600">
              Space
            </a>
            <a href="#access" className="hover:text-orange-600">
              Access
            </a>
          </nav>

          <Button className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 font-black shadow-lg shadow-orange-200 hover:from-orange-600 hover:to-pink-600">
            お問い合わせ
          </Button>
        </div>
      </header>

      <section className="relative">
        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-orange-300/40 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] rounded-full bg-purple-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/90 px-4 py-2 text-sm font-black text-orange-600 shadow-lg shadow-orange-100">
              <Crown className="h-4 w-4" />
              名古屋・金山の新しい体験型カフェ
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              カフェに、
              <br />
              ちょっと未来を。
            </h1>

            <p className="mt-6 max-w-xl text-lg font-medium leading-9 text-zinc-600">
              Peer Support Cafe 3rdは、ドリンクや食事を楽しみながら、
              eスポーツ、アバター接客、デジタルアートに触れられる
              新しいカフェ空間です。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-7 py-6 text-base font-black shadow-xl shadow-orange-200 hover:from-orange-600 hover:to-pink-600"
              >
                <a href="#menu">
                  メニューを見る
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-orange-200 bg-white/90 px-7 py-6 text-base font-black shadow-sm"
              >
                <a href="#access">アクセスを見る</a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-3xl bg-white/80 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-orange-600">14:00</p>
                <p className="text-xs font-bold text-zinc-500">OPEN</p>
              </div>
              <div className="rounded-3xl bg-white/80 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-pink-600">22:00</p>
                <p className="text-xs font-bold text-zinc-500">CLOSE</p>
              </div>
              <div className="rounded-3xl bg-white/80 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-purple-600">金山</p>
                <p className="text-xs font-bold text-zinc-500">AREA</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 z-10 rounded-full bg-white px-5 py-3 text-sm font-black text-orange-600 shadow-xl">
              Cafe × eSports × Art
            </div>

            <div className="rounded-[2.8rem] bg-white/80 p-4 shadow-2xl shadow-orange-100 ring-1 ring-orange-100 backdrop-blur">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2.3rem] bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-8 text-center">
                <div className="absolute left-8 top-8 rounded-3xl bg-white/70 p-4 shadow-sm">
                  <Coffee className="h-8 w-8 text-orange-500" />
                </div>
                <div className="absolute right-8 top-12 rounded-3xl bg-white/70 p-4 shadow-sm">
                  <Gamepad2 className="h-8 w-8 text-purple-500" />
                </div>
                <div className="absolute bottom-8 left-10 rounded-3xl bg-white/70 p-4 shadow-sm">
                  <Palette className="h-8 w-8 text-pink-500" />
                </div>

                <div>
                  <p className="text-7xl">☕🎮✨</p>
                  <p className="mt-6 text-4xl font-black text-zinc-900">
                    3rd Cafe
                  </p>
                  <p className="mt-3 text-sm font-bold text-zinc-600 md:text-base">
                    ここに店舗写真やメインビジュアルを配置
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-5 rounded-3xl bg-white p-6 shadow-2xl shadow-orange-200">
              <p className="text-xs font-black text-zinc-500">OPEN TIME</p>
              <p className="text-3xl font-black text-orange-600">14:00〜22:00</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-5 py-16">
        <div className="mb-12 text-center">
          <p className="font-black text-orange-600">ABOUT</p>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            3rd Cafeについて
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-medium leading-8 text-zinc-600">
            ただ飲食するだけではなく、人・デジタル・アートが自然につながる場所を目指しています。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {features.map((item) => (
            <Card
              key={item.title}
              className="group rounded-[2rem] border-orange-100 bg-white/90 shadow-lg shadow-orange-100/40 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <CardContent className="p-7">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-pink-100 text-orange-600 transition group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-zinc-600">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="menu" className="relative bg-white py-20">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fff7ee] to-white" />

        <div className="relative mx-auto max-w-7xl px-5">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-black text-orange-600">MENU</p>
              <h2 className="mt-2 text-4xl font-black md:text-5xl">
                メニュー
              </h2>
              <p className="mt-5 max-w-2xl font-medium leading-8 text-zinc-600">
                パスタメニューを中心に、カフェらしい王道メニューやドリンクメニューをご用意しています。
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-4 text-white shadow-xl shadow-orange-200">
              <p className="text-xs font-black opacity-90">DRINK PLAN</p>
              <p className="text-2xl font-black">飲み放題 1時間 ¥1,000</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <Card
                key={item.name}
                className="group overflow-hidden rounded-[2rem] border-orange-100 bg-white shadow-lg shadow-orange-100/40 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 text-6xl">
                  <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-orange-600 shadow-sm">
                    {item.category}
                  </div>
                  <span className="transition group-hover:scale-110">
                    {item.icon}
                  </span>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-black">{item.name}</h3>
                    <p className="shrink-0 rounded-full bg-orange-100 px-3 py-1 text-sm font-black text-orange-600">
                      {item.price}
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-medium leading-7 text-zinc-600">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="space" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="font-black text-orange-600">SPECIAL SPACE</p>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            3rdならではの体験
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-zinc-950 via-zinc-800 to-purple-900 p-8 text-white shadow-2xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />
            <Gamepad2 className="relative h-12 w-12 text-orange-300" />
            <h2 className="relative mt-6 text-4xl font-black">
              eスポーツエリア
            </h2>
            <p className="relative mt-4 font-medium leading-8 text-zinc-200">
              ゲーミングPCを活用し、ゲーム体験・イベント・配信など、
              さまざまな楽しみ方ができるスペースです。
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 p-8 shadow-2xl shadow-pink-100">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-300/40 blur-3xl" />
            <Sparkles className="relative h-12 w-12 text-purple-600" />
            <h2 className="relative mt-6 text-4xl font-black">
              アバター接客
            </h2>
            <p className="relative mt-4 font-medium leading-8 text-zinc-700">
              Live2Dなどのデジタル技術を取り入れた、
              3rd Cafeらしい新しい接客体験を展開予定です。
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            { icon: <Heart className="h-6 w-6" />, text: "推しドリンク" },
            { icon: <Camera className="h-6 w-6" />, text: "チェキ撮影" },
            { icon: <Music className="h-6 w-6" />, text: "イベント利用" },
            { icon: <GlassWater className="h-6 w-6" />, text: "飲み放題" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 rounded-3xl bg-white p-5 font-black shadow-lg shadow-orange-100/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                {item.icon}
              </div>
              {item.text}
            </div>
          ))}
        </div>
      </section>

      <section id="access" className="bg-gradient-to-br from-orange-50 to-pink-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
          <div>
            <p className="font-black text-orange-600">ACCESS</p>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">
              店舗情報
            </h2>

            <div className="mt-8 space-y-5 rounded-[2rem] bg-white/90 p-7 shadow-2xl shadow-orange-100">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
                <div>
                  <p className="font-black">住所</p>
                  <p className="mt-1 font-medium leading-7 text-zinc-600">
                    〒460-0024 愛知県名古屋市中区正木3丁目13-9
                    BS金山ビル1F
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
                <div>
                  <p className="font-black">営業時間</p>
                  <p className="mt-1 font-medium text-zinc-600">
                    14:00〜22:00
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
                <div>
                  <p className="font-black">電話番号</p>
                  <p className="mt-1 font-medium text-zinc-600">
                    080-4556-9593
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
                <div>
                  <p className="font-black">お問い合わせ</p>
                  <p className="mt-1 font-medium text-zinc-600">
                    info@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-h-[420px] items-center justify-center rounded-[2.5rem] bg-white/90 p-8 text-center shadow-2xl shadow-orange-100">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-pink-100">
                <MapPin className="h-10 w-10 text-orange-500" />
              </div>
              <p className="mt-5 text-3xl font-black">
                Google Map 埋め込み予定
              </p>
              <p className="mt-3 font-medium leading-8 text-zinc-500">
                〒460-0024
                <br />
                愛知県名古屋市中区正木3丁目13-9 BS金山ビル1F
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 px-5 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-3xl font-black">Peer Support Cafe 3rd</p>
            <p className="mt-2 text-sm font-semibold text-zinc-400">
              Cafe / eSports / Avatar / Art
            </p>
          </div>

          <div className="grid gap-2 text-sm font-semibold text-zinc-300">
            <p>〒460-0024 愛知県名古屋市中区正木3丁目13-9 BS金山ビル1F</p>
            <p>営業時間：14:00〜22:00</p>
            <p>電話番号：080-4556-9593</p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-7xl text-xs font-semibold text-zinc-500">
          © 2026 Peer Support Cafe 3rd. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}